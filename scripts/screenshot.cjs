const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs/promises");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "screenshots");
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const baseUrl = "http://127.0.0.1:4173";

const pages = [
  ["home", "/"],
  ["learn", "/#/learn"],
  ["prehistoria", "/#/era/prehistoria"],
  ["antiga", "/#/era/antiga"],
  ["paleolitico", "/#/subpath/prehistoria/paleolitico"],
  ["mesolitico", "/#/subpath/prehistoria/mesolitico"],
  ["revolucao-neolitica", "/#/subpath/prehistoria/revolucao-neolitica"],
  ["lesson-intro-fogo", "/#/lesson/prehistoria-lesson-1-descoberta-do-fogo-cozinhar-aquecer-iluminar-e-reunir-o-grupo-mu"],
  ["grande-jornada-prehistorica", "/#/timeline/prehistoria/toda-prehistoria"]
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

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

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

    const page = await browser.newPage({ viewport: { width: 1848, height: 856 } });
    for (const [name, route] of pages) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
      await page.screenshot({ path: path.join(outputDir, `${name}.png`), fullPage: false });
    }

    console.log(`Screenshots saved to ${outputDir}`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
