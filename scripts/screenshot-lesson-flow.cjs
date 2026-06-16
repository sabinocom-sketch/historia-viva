const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs/promises");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputRoot = path.join(root, "screenshots", "lesson-flow");
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const baseUrl = "http://127.0.0.1:4173";
const defaultRoute = "/#/lesson/prehistoria-lesson-1-descoberta-do-fogo-cozinhar-aquecer-iluminar-e-reunir-o-grupo-mu";

const viewports = [
  { name: "desktop", viewport: { width: 1848, height: 856 } },
  { name: "mobile", viewport: { width: 393, height: 852 }, isMobile: true, hasTouch: true }
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      await wait(250);
    }
  }
  throw new Error(`Server did not respond at ${baseUrl}`);
}

function normalizeSegment(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "screen";
}

function getOutputDir(route) {
  const lessonSlug = normalizeSegment(route.split("/#/lesson/")[1] || "lesson");
  return path.join(outputRoot, lessonSlug);
}

async function click(page, selector) {
  const clicked = await page.evaluate((sel) => {
    const element = document.querySelector(sel);
    if (!element || element.disabled) return false;
    element.click();
    return true;
  }, selector);

  if (!clicked) {
    throw new Error(`Could not click selector: ${selector}`);
  }
}

async function currentMode(page) {
  return page.evaluate(() => document.querySelector(".active-lesson-panel")?.dataset.mode || "");
}

async function currentQuizProgress(page) {
  return page.evaluate(() => {
    const screen = document.querySelector(".quiz-screen");
    if (!screen) return null;
    const answeredQuestions = new Set(
      Array.from(document.querySelectorAll("[data-post-lesson-quiz-option][disabled]"))
        .map((node) => node.getAttribute("data-post-lesson-quiz-question"))
        .filter(Boolean)
    );
    const total = Number(screen.dataset.quizTotal || 0);
    const current = document.querySelector(".quiz-screen .post-story-copy p")?.textContent?.trim() || "";
    const activeOption = document.querySelector("[data-post-lesson-quiz-option]:not([disabled])");
    const activeQuestionIndex = activeOption
      ? Number(activeOption.getAttribute("data-post-lesson-quiz-question") || 0)
      : answeredQuestions.size;
    const resultVisible = Boolean(document.querySelector(".post-lesson-quiz-result"));
    return {
      answered: answeredQuestions.size,
      total,
      current,
      activeQuestionIndex,
      resultVisible
    };
  });
}

async function capture(page, filePath) {
  await page.screenshot({ path: filePath, fullPage: false });
}

async function captureLessonFlow(page, outputDir) {
  const files = [];

  const save = async (name) => {
    const filePath = path.join(outputDir, `${name}.png`);
    await capture(page, filePath);
    files.push(filePath);
  };

  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(500);
  await save("00-intro");

  await click(page, "[data-lesson-action=\"story\"]");

  let storyStep = 1;
  while ((await currentMode(page)) === "story") {
    await page.waitForTimeout(350);
    await save(`${String(storyStep).padStart(2, "0")}-story-${storyStep}`);
    await page.waitForFunction(() => {
      const next = document.querySelector("[data-lesson-action=\"story-next\"]");
      if (!next) return false;
      const style = window.getComputedStyle(next);
      return style.pointerEvents !== "none" && Number.parseFloat(style.opacity || "0") > 0.9;
    }, { timeout: 8000 });
    await click(page, "[data-lesson-action=\"story-next\"]");
    await page.waitForTimeout(500);
    storyStep += 1;
  }

  await page.waitForTimeout(500);
  await save("10-summary");

  await click(page, "[data-lesson-action=\"next\"]");
  await page.waitForFunction(() => document.querySelector(".active-lesson-panel")?.dataset.mode === "reflection");
  await page.waitForTimeout(500);
  await save("11-reflection");

  await click(page, "[data-lesson-action=\"next\"]");
  await page.waitForFunction(() => document.querySelector(".active-lesson-panel")?.dataset.mode === "debate");
  await page.waitForTimeout(500);
  await save("12-debate");

  await click(page, "[data-lesson-debate-option=\"optionA\"]");
  await page.waitForTimeout(350);
  await save("13-debate-selected");

  await click(page, "[data-lesson-action=\"next\"]");
  await page.waitForFunction(() => document.querySelector(".active-lesson-panel")?.dataset.mode === "quiz");
  await page.waitForTimeout(500);

  let quizShot = 14;
  while (true) {
    const progress = await currentQuizProgress(page);
    if (!progress) break;

    if (progress.resultVisible) {
      await save(`${quizShot}-quiz-complete`);
      break;
    }

    await save(`${quizShot}-quiz-${Math.min(progress.activeQuestionIndex + 1, progress.total || 1)}`);
    const questionIndex = progress.activeQuestionIndex;
    await click(page, `[data-post-lesson-quiz-question="${questionIndex}"][data-post-lesson-quiz-option="0"]`);
    await page.waitForTimeout(400);
    await save(`${quizShot}-quiz-${Math.min(progress.activeQuestionIndex + 1, progress.total || 1)}-answered`);
    quizShot += 1;

    const nextExists = await page.evaluate(() => {
      const button = document.querySelector("[data-lesson-action=\"quiz-next\"]");
      return Boolean(button && !button.disabled);
    });

    if (!nextExists) {
      continue;
    }

    await click(page, "[data-lesson-action=\"quiz-next\"]");
    await page.waitForTimeout(450);
  }

  await click(page, "[data-lesson-action=\"next\"]");
  await page.waitForFunction(() => document.querySelector(".active-lesson-panel")?.dataset.mode === "reward");
  await page.waitForTimeout(500);
  await save("20-reward");

  await click(page, "[data-lesson-action=\"next\"]");
  await page.waitForFunction(() => document.querySelector(".active-lesson-panel")?.dataset.mode === "nextTeaser");
  await page.waitForTimeout(500);
  await save("21-next-teaser");

  return files;
}

async function runForViewport(browser, route, view) {
  const outputDir = path.join(getOutputDir(route), view.name);
  await fs.mkdir(outputDir, { recursive: true });

  const page = await browser.newPage({
    viewport: view.viewport,
    isMobile: Boolean(view.isMobile),
    hasTouch: Boolean(view.hasTouch)
  });

  try {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    return await captureLessonFlow(page, outputDir);
  } finally {
    await page.close();
  }
}

async function main() {
  const route = process.argv[2] || defaultRoute;
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    stdio: "ignore",
    windowsHide: true
  });

  let browser;
  try {
    await waitForServer();
    browser = await chromium.launch({
      executablePath: edgePath,
      headless: true
    });

    const createdFiles = [];
    for (const view of viewports) {
      const files = await runForViewport(browser, route, view);
      createdFiles.push(...files);
    }

    console.log(`Captured ${createdFiles.length} screenshots in ${getOutputDir(route)}`);
    createdFiles.forEach((file) => console.log(path.relative(root, file)));
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
