import { eras, insightRules, timelineCategoryLabels } from './data.js';
import { state } from './state.js';
import { createPreview, escapeHtml, normalizeText, pickFrom } from './utils.js';
import {
  getEraCurriculumSections,
  getEraLessons,
  getEraSources,
  getLessonById,
  getLessonStoryBlocks,
  getLessonTextExperience,
  getNextLesson,
  getRecommendedSourceIndex
} from './content-service.js';

const postStoryStepOrder = ["summary", "reflection", "debate", "quiz", "reward", "nextTeaser"];
const postStoryModeAliases = {
  assimilation: "reflection",
  reality: "debate",
  critical: "debate",
  challenge: "quiz",
  reward: "reward",
  nextTeaser: "nextTeaser",
  interaction: "reflection",
  source: "reflection",
  insight: "reflection",
  recap: "summary",
  consolidate: "reward"
};

function getCurrentLessonMood() {
  const lesson = state.currentLessonId ? getLessonById(state.currentLessonId) : getEraLessons(state.currentEra)[0];
  if (!lesson) return "";
  return buildLessonIntroFrame(lesson).mood;
}

export function renderActiveLessonPanel() {
  const lesson = state.currentLessonId ? getLessonById(state.currentLessonId) : getEraLessons(state.currentEra)[0];
  if (!lesson) return "";
  if (state.currentLessonEntryId !== lesson.id) {
    state.currentLessonEntryId = lesson.id;
    state.currentLessonMode = "intro";
    state.currentLessonStoryBlockIndex = 0;
    state.currentPostStoryStep = "summary";
    const savedLessonProgress = getSavedLessonProgress(lesson.id);
    state.currentLessonReflectionText = savedLessonProgress.reflectionAnswer || "";
    state.currentLessonDebateChoice = savedLessonProgress.debateChoice || "";
    state.currentLessonQuizAnswers = savedLessonProgress.quizAnswers || {};
    state.currentPostLessonQuizIndex = 0;
    state.currentLessonQuizChoice = null;
  }
  const isSelected = state.currentLessonId === lesson.id;
  const lessonIntro = buildLessonIntroFrame(lesson);
  const curiosity = pickFrom(eras[lesson.eraKey].curiosities || [], lesson.index, "Cada vestígio histórico muda quando fazemos uma pergunta melhor.");
  const insight = buildInterpretiveInsight(lesson.title, lesson.detail, lesson.category, ...(lesson.related || []));
  const isIntro = state.currentLessonMode === "intro";
  return `
    <section class="active-lesson-panel lesson-view ${isSelected ? "is-active" : ""}" data-active-lesson="${escapeHtml(lesson.id)}" data-era="${escapeHtml(lesson.eraKey)}" data-section="${escapeHtml(lesson.sectionId || "")}" data-mood="${escapeHtml(lessonIntro.mood)}" data-mode="${escapeHtml(state.currentLessonMode)}" data-theme="${escapeHtml(lesson.category)}">
      ${isIntro ? `<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${escapeHtml(lessonIntro.kicker)}</p>
          <h3>${escapeHtml(lessonIntro.title)}</h3>
          <p class="lesson-hero-line">${escapeHtml(lessonIntro.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da lição">
            ${lessonIntro.preview.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>` : renderLessonExperience(lesson, { insight, curiosity })}
    </section>
  `;
}

function renderLessonExperience(lesson, context = {}) {
  if (state.currentLessonMode === "story" || state.currentLessonMode === "understand") {
    const blocks = getReadingStoryBlocks(lesson.id);
    const index = clampStoryBlockIndex(blocks);
    return `
      <div class="lesson-experience" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" aria-label="Sequência narrativa da lição">
        ${renderStoryBlock(blocks[index], index, blocks.length, lesson)}
      </div>
    `;
  }

  return renderPostStoryLessonFlow(lesson, context);
}

function renderStoryBlock(block, index, total, lesson = {}) {
  const safeBlock = block || {
    id: "story",
    visualType: "spark",
    backgroundMood: "cave-dark",
    text: "Um pequeno momento começou a mudar a experiência humana."
  };
  const eraKey = safeBlock.eraKey || lesson.eraKey || "";
  const sectionId = safeBlock.sectionId || lesson.sectionId || "";
  const isPrehistory = eraKey === "pre-historia" || ["paleolitico", "mesolitico", "revolucao-neolitica"].includes(sectionId);
  const prehistoryArtifact = isPrehistory ? getPrehistoryArtifactType(safeBlock, lesson) : "";
  const narrativeTitle = isPrehistory ? getPrehistoryNarrativeTitle(safeBlock, lesson) : "";
  const readingText = safeBlock.text;
  const caveRevealLineCount = getCaveRevealLineCount(readingText);
  const hasPrehistoryBlockImage = Boolean(safeBlock.image?.desktop || safeBlock.image?.mobile);
  const flintLoading = index === 0 ? "eager" : "lazy";
  const flintFetchPriority = index === 0 ? "high" : "auto";
  return `
    <article class="story-block ${isPrehistory ? "storyblock-prehistory cave-firelight" : ""}" style="--cave-line-count: ${caveRevealLineCount}" data-story-block="${escapeHtml(safeBlock.id)}" data-story-index="${index % 3}" data-visual="${escapeHtml(safeBlock.visualType)}" data-background="${escapeHtml(safeBlock.backgroundMood)}" data-mood="${escapeHtml(getCurrentLessonMood())}" data-era="${escapeHtml(eraKey)}" data-section="${escapeHtml(sectionId)}" data-prehistory-artifact="${escapeHtml(prehistoryArtifact)}" data-prehistory-block-image="${hasPrehistoryBlockImage ? "true" : "false"}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${renderPrehistoryArtifactMedia(safeBlock, prehistoryArtifact, flintLoading, flintFetchPriority)}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${caveRevealLineCount}">
        ${isPrehistory ? "" : `<span class="prehistory-moment-label">Momento ${index + 1} de ${total}</span>`}
        ${narrativeTitle ? `<h3 class="prehistory-narrative-title">${escapeHtml(narrativeTitle)}</h3>` : ""}
        <p class="cave-paint-text cave-painted-text" aria-label="${escapeHtml(readingText)}">
          ${renderCaveRevealText(readingText)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
      </div>
      ${renderLessonProgress(lesson, index, "prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${index === 0 ? "disabled" : ""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${index === total - 1 ? "Avançar" : "Continuar"}</button>
      </div>
    </article>
  `;
}

function renderPrehistoryArtifactMedia(block = {}, artifactType = "", loading = "lazy", fetchPriority = "auto") {
  const image = block.image || {};
  const desktopSrc = image.desktop || image.src || "";
  const mobileSrc = image.mobile || desktopSrc;
  if (desktopSrc) {
    const fit = sanitizeCssKeyword(image.fit, ["contain", "cover", "fill", "none", "scale-down"], "contain");
    const position = sanitizeCssPosition(image.position, "center");
    return `<picture class="prehistory-block-picture" style="--prehistory-block-fit: ${fit}; --prehistory-block-position: ${position};">
      ${mobileSrc && mobileSrc !== desktopSrc ? `<source media="(max-width: 768px)" srcset="${escapeHtml(mobileSrc)}" />` : ""}
      <img class="prehistory-block-image" src="${escapeHtml(desktopSrc)}" alt="" width="1200" height="900" loading="${loading}" decoding="async" fetchpriority="${fetchPriority}" onerror="this.hidden=true" />
    </picture>`;
  }

  if (artifactType !== "flint") return "";
  return `<picture class="prehistory-flint-picture">
    <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
    <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${loading}" decoding="async" fetchpriority="${fetchPriority}" />
  </picture>`;
}

function sanitizeCssKeyword(value = "", allowed = [], fallback = "") {
  const normalized = String(value || "").trim().toLowerCase();
  return allowed.includes(normalized) ? normalized : fallback;
}

function sanitizeCssPosition(value = "", fallback = "center") {
  const normalized = String(value || "").trim().toLowerCase();
  return /^[a-z0-9%.\-\s]+$/.test(normalized) ? normalized : fallback;
}

function getPrehistoryNarrativeTitle(block = {}, lesson = {}) {
  return getLessonDisplayTitle(lesson.title || block.title || "Marca na Pedra");
}

function getPrehistoryArtifactType(block = {}, lesson = {}) {
  const source = normalizeText(`${lesson.title || ""} ${block.text || ""} ${block.visualType || ""}`);
  if (["fogo", "chama", "fogueira", "aquecer", "cozinhar", "spark", "embers"].some((keyword) => source.includes(keyword))) return "fire";
  if (["caca", "pesca", "animal", "rasto", "lanca", "spear", "tracks"].some((keyword) => source.includes(keyword))) return "hunt";
  if (["arte", "rupestre", "pintura", "pigmento", "mao", "hand"].some((keyword) => source.includes(keyword))) return "painting";
  if (["abrigo", "gruta", "caverna"].some((keyword) => source.includes(keyword))) return "shelter";
  return "flint";
}

function getCaveRevealLines(text = "") {
  const source = String(text || "").trim();
  if (!source) return [""];
  const phrases = source
    .split(/(?<=[.!?])\s+|;\s+/)
    .map((line) => line.trim())
    .filter(Boolean);
  return phrases.length ? phrases : [source];
}

function getCaveRevealLineCount(text = "") {
  return getCaveRevealLines(text).length;
}

function renderCaveRevealText(text = "") {
  return `
    <span class="cave-reveal-paragraph" aria-hidden="true">
      ${getCaveRevealLines(text).map((line, lineIndex) => `
        <span class="cave-reveal-line" style="--cave-line-index: ${lineIndex}" aria-hidden="true">${escapeHtml(line)}</span>
      `).join(" ")}
    </span>
  `;
}

function renderPostStoryLessonFlow(lesson, context = {}) {
  const flow = buildPostStoryFlow(lesson, context);
  const stepKey = getPostStoryStepKey(state.currentLessonMode);
  const stepIndex = postStoryStepOrder.indexOf(stepKey);
  const total = postStoryStepOrder.length;
  state.currentPostStoryStep = stepKey;

  const renderers = {
    summary: LessonSummaryScreen,
    reflection: ReflectionScreen,
    debate: DebateScreen,
    quiz: QuizScreen,
    reward: renderRewardScreen,
    nextTeaser: renderNextLessonTeaser
  };
  const renderer = renderers[stepKey] || LessonSummaryScreen;

  return `
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-post-story-step="${escapeHtml(stepKey)}" aria-label="ContinuaÃ§Ã£o narrativa da liÃ§Ã£o">
      ${renderer(flow[stepKey], lesson, stepIndex, total)}
    </div>
  `;
}

function getPostStoryStepKey(mode) {
  const step = postStoryModeAliases[mode] || mode || state.currentPostStoryStep || "summary";
  return postStoryStepOrder.includes(step) ? step : "summary";
}

function buildPostStoryFlow(lesson, context = {}) {
  const postLesson = buildPostLessonContent(lesson, context);
  const legacyFlow = buildLegacyPostStoryFlow(lesson, context);
  return {
    summary: { summary: postLesson.summary, previous: "story" },
    reflection: { ...postLesson.reflection, previous: "summary" },
    debate: { ...postLesson.debate, previous: "reflection" },
    quiz: { quiz: postLesson.quiz, previous: "debate" },
    reward: legacyFlow.reward,
    nextTeaser: legacyFlow.nextTeaser
  };
}

function getSavedLessonProgress(lessonId = "") {
  if (typeof localStorage === "undefined" || !lessonId) return {};
  try {
    return JSON.parse(localStorage.getItem("historiaVivaProgress"))?.lessonProgress?.[lessonId] || {};
  } catch {
    return {};
  }
}

function buildPostLessonContent(lesson, context = {}) {
  if (lesson.postLesson) return lesson.postLesson;
  const title = getLessonDisplayTitle(lesson.title);
  const blocks = getLessonStoryBlocks(lesson.id);
  const textExperience = getLessonTextExperience(lesson);
  const summary = buildLessonSummaryPoints(lesson, blocks, textExperience);
  return {
    summary,
    reflection: {
      question: normalizeQuestionText(textExperience.reflection || context.insight || `Que mudança histórica te parece mais importante em ${title}?`)
    },
    debate: buildLessonDebate(lesson, title, textExperience),
    quiz: buildPostLessonQuiz(lesson, summary)
  };
}

function buildLessonSummaryPoints(lesson, blocks = [], textExperience = {}) {
  const candidates = [
    textExperience.keyTakeaway,
    ...(textExperience.evidence || []),
    ...(textExperience.archaeology || []),
    ...(textExperience.consequences || []),
    ...blocks.map((block) => block.text),
    lesson.detail
  ].filter(Boolean);
  const points = candidates
    .map((point) => expandShortSummaryPoint(createSentencePreview(point, 15), lesson))
    .filter(Boolean)
    .filter((point, index, list) => list.findIndex((item) => normalizeText(item) === normalizeText(point)) === index)
    .slice(0, 4);
  while (points.length < 3) {
    points.push(createSentencePreview(`${getLessonDisplayTitle(lesson.title)} ajuda a perceber causas, escolhas humanas e consequências.`, 14));
  }
  return points.slice(0, 4);
}

function expandShortSummaryPoint(point = "", lesson = {}) {
  if (!point || countTextWords(point) >= 9) return point;
  const source = normalizeText(`${lesson.title || ""} ${lesson.detail || ""}`);
  if (source.includes("pedra") || source.includes("ferramenta")) {
    return `${point} O gesto humano dava-lhe função e sentido.`;
  }
  if (source.includes("fogo")) {
    return `${point} O uso repetido transformava segurança, alimento e convívio.`;
  }
  return `${point} O contexto histórico ajuda a perceber a mudança.`;
}

function buildLessonDebate(lesson, title, textExperience = {}) {
  const focus = createSentencePreview(textExperience.keyTakeaway || lesson.detail || title, 18);
  return {
    question: `Como devemos interpretar ${title}: sobretudo como progresso ou como mudança complexa?`,
    options: [
      {
        id: "optionA",
        label: "Foi sobretudo progresso",
        feedback: `Esta posição pode indicar que ${focus.toLowerCase()} abriu possibilidades importantes. Ainda assim, muitos historiadores defendem que ganhos materiais também trouxeram novos custos.`
      },
      {
        id: "optionB",
        label: "Foi uma mudança complexa",
        feedback: `Esta posição sugere que ${focus.toLowerCase()} deve ser lido com cautela. Há debate sobre o peso dos benefícios e dos limites em diferentes grupos sociais.`
      }
    ]
  };
}

function normalizeQuestionText(text = "") {
  const normalized = String(text).trim().replace(/[.?!]+$/, "");
  return normalized ? `${normalized}?` : "";
}

function buildPostLessonQuiz(lesson, summary = []) {
  return buildLessonSpecificQuizQuestions(lesson, summary).slice(0, 5);
}

function buildLessonSpecificQuizQuestions(lesson = {}, summary = []) {
  const title = getLessonDisplayTitle(lesson.title || "esta lição");
  const detail = createSentencePreview(lesson.detail || summary[0] || title, 18);
  const firstPoint = createSentencePreview(summary[0] || lesson.detail || title, 16);
  const secondPoint = createSentencePreview(summary[1] || lesson.question || lesson.detail || title, 16);
  const thirdPoint = createSentencePreview(summary[2] || "comparar vestígios, contexto e consequências", 16);

  return [
    {
      question: `Qual é a ideia central da lição "${title}"?`,
      options: [
        firstPoint,
        "Foi um acontecimento isolado, sem relação com o contexto.",
        "Serve apenas para memorizar uma data, sem interpretar causas.",
        "Não deixou pistas que possam ser estudadas historicamente."
      ],
      correctIndex: 0,
      explanation: `A resposta correta retoma diretamente o foco da lição "${title}".`
    },
    {
      question: `Que pista ajuda melhor a explicar "${title}"?`,
      options: [
        secondPoint,
        "Ignorar os grupos humanos envolvidos.",
        "Separar o acontecimento das suas consequências.",
        "Escolher uma resposta que podia servir para qualquer lição."
      ],
      correctIndex: 0,
      explanation: "A melhor pista nasce do conteúdo trabalhado nesta lição, não de outro tema da era."
    },
    {
      question: `Como devemos estudar historicamente "${title}"?`,
      options: [
        `Ligando ${thirdPoint.toLowerCase()} ao contexto da lição.`,
        "Decorando uma frase sem analisar fontes ou consequências.",
        "Trocando o tema por outro acontecimento da mesma era.",
        "Assumindo que todos os grupos viveram a mudança da mesma forma."
      ],
      correctIndex: 0,
      explanation: `Esta leitura mantém a resposta dentro da lição: ${detail}`
    }
  ].map(normalizePostLessonQuizQuestion);
}

function normalizePostLessonQuizQuestion(quiz = {}) {
  return {
    question: quiz.question || "Que ideia fica desta lição?",
    options: ensureFourOptions(quiz.options || []),
    correctIndex: Number.isInteger(quiz.correctIndex) ? quiz.correctIndex : Math.min(Math.max(quiz.answer || 0, 0), 3),
    explanation: quiz.explanation || "Esta resposta enquadra melhor o contexto histórico da lição."
  };
}

function ensureFourOptions(options = []) {
  const fillers = [
    "Foi um processo sem contexto.",
    "Aconteceu da mesma forma em todo o lado.",
    "Teve apenas uma causa.",
    "Deve ser lido com fontes e consequências."
  ];
  const nextOptions = options.slice(0, 4);
  fillers.forEach((filler) => {
    if (nextOptions.length < 4 && !nextOptions.includes(filler)) nextOptions.push(filler);
  });
  return nextOptions.slice(0, 4);
}

function buildLegacyPostStoryFlow(lesson, context = {}) {
  const intro = buildLessonIntroFrame(lesson);
  const title = getLessonDisplayTitle(lesson.title);
  const blocks = getLessonStoryBlocks(lesson.id);
  const textExperience = getLessonTextExperience(lesson);
  const nextLesson = getNextLesson(lesson.eraKey, lesson.id);
  return {
    reflection: buildReflectionStep(lesson, context.insight, textExperience),
    assimilation: buildAssimilationStep(lesson, blocks, title, textExperience),
    reality: buildRealityBridgeStep(lesson, title, textExperience),
    critical: buildCriticalLensStep(lesson, title, textExperience),
    challenge: buildChallengeStep(lesson),
    reward: {
      kicker: "Memória da cena",
      title: "Memória guardada",
      text: createSentencePreview(textExperience.keyTakeaway || `Guardaste uma imagem mental sobre ${title}. Agora consegues lembrar o gesto e a consequência.`, 20),
      artifact: intro.preview?.[0] || "Artefacto narrativo desbloqueado",
      previous: "challenge"
    },
    nextTeaser: {
      kicker: "Próxima cena",
      title: nextLesson ? getLessonDisplayTitle(nextLesson.title) : "Rever a jornada",
      text: nextLesson
        ? createSentencePreview(buildNextTeaserLine(title, getLessonDisplayTitle(nextLesson.title)), 20)
        : "A viagem continua quando voltares ao mapa da era.",
      nextLessonId: nextLesson?.id || "",
      previous: "reward"
    }
  };
}

function splitCompleteSentences(text = "") {
  const source = String(text || "").replace(/\s+/g, " ").trim();
  if (!source) return [];
  return source.match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g)?.map((sentence) => sentence.trim()).filter(Boolean) || [source];
}

function isMobilePortraitLessonScreen() {
  return typeof window !== "undefined"
    && window.matchMedia?.("(max-width: 768px) and (orientation: portrait)").matches;
}

function countTextWords(text = "") {
  return String(text || "").trim().split(/\s+/).filter(Boolean).length;
}

function createSentencePreview(text = "", maxWords = 24) {
  const sentences = splitCompleteSentences(text);
  if (!sentences.length) return "";

  const selected = [];
  let selectedWords = 0;
  for (const sentence of sentences) {
    const sentenceWords = countTextWords(sentence);
    if (selected.length && selectedWords + sentenceWords > maxWords) break;
    selected.push(sentence);
    selectedWords += sentenceWords;
    if (selectedWords >= maxWords) break;
  }
  return selected.join(" ");
}

function splitStoryBlockForReading(block, maxWords) {
  const sentences = splitCompleteSentences(block?.text);
  if (!sentences.length) return [block];

  const segments = [];
  let current = [];
  let currentWords = 0;
  sentences.forEach((sentence) => {
    const sentenceWords = countTextWords(sentence);
    if (current.length && currentWords + sentenceWords > maxWords) {
      segments.push(current.join(" "));
      current = [];
      currentWords = 0;
    }
    current.push(sentence);
    currentWords += sentenceWords;
  });
  if (current.length) segments.push(current.join(" "));

  return segments.map((text, index) => ({
    ...block,
    id: `${block.id || "story"}-${index + 1}`,
    text
  }));
}

function getReadingStoryBlocks(lessonId) {
  const editorialMaxWords = 55;
  return getLessonStoryBlocks(lessonId).flatMap((block) => splitStoryBlockForReading(block, editorialMaxWords));
}

function buildReflectionStep(lesson, insight = "", textExperience = {}) {
  const title = getLessonDisplayTitle(lesson.title);
  const kit = getPostStoryEditorialKit(lesson, title);
  const text = kit.reflectionText || textExperience.reflection || createPreview(insight || lesson.detail || buildLessonHeroLine(lesson), 150);
  return {
    kicker: "Depois da cena",
    title: kit.reflectionTitle || "O que ficou diferente?",
    text: createSentencePreview(text, 24),
    previous: "story"
  };
}

function buildAssimilationStep(lesson, blocks, title, textExperience = {}) {
  const kit = getPostStoryEditorialKit(lesson, title);
  const evidencePrompts = [
    ...(textExperience.evidence || []),
    ...(textExperience.archaeology || [])
  ];
  const prompts = kit.prompts || (evidencePrompts.length ? evidencePrompts.slice(0, 2) : blocks.slice(0, 2).map((block) => block.text));
  return {
    kicker: "Guia da cena",
    title: kit.assimilationTitle || "Seguir as pistas",
    text: createSentencePreview(kit.assimilationText || textExperience.keyTakeaway || `${title} ganha sentido quando vemos pessoas, objetos, escolhas e consequências.`, 22),
    prompts: (prompts.length ? prompts : [
      "Que gesto humano aparece aqui?",
      "Que consequência veio depois?"
    ]).map((prompt) => createSentencePreview(prompt, 14)),
    previous: "reflection"
  };
}

function buildRealityBridgeStep(lesson, title, textExperience = {}) {
  const kit = getPostStoryEditorialKit(lesson, title);
  const cards = kit.realityCards || [
    ["Gesto", "Uma técnica pequena podia mudar o que uma mão conseguia fazer."],
    ["Presente", "As ferramentas de hoje continuam a prolongar o corpo humano."]
  ];
  return {
    kicker: "Ponte ao presente",
    title: kit.realityTitle || "A marca no presente",
    text: createSentencePreview(kit.realityText || textExperience.presentConnection || `${title} ainda importa quando ajuda a perceber uma escolha humana reconhecível.`, 22),
    cards: cards.slice(0, 2).map(([label, text]) => [label, createSentencePreview(text, 14)]),
    previous: "assimilation"
  };
}

function buildCriticalLensStep(lesson, title, textExperience = {}) {
  const kit = getPostStoryEditorialKit(lesson, title);
  return {
    kicker: "Lente crítica",
    title: kit.criticalTitle || textExperience.reflection || "Quem ganhou e quem perdeu?",
    text: createSentencePreview(kit.criticalText || textExperience.curiosity || "Uma boa leitura histórica pergunta que possibilidades se abriram e que custos apareceram.", 20),
    perspectives: (kit.perspectives || [
      ["Possibilidade", "Algumas pessoas ganharam novas formas de agir."],
      ["Limite", "Outras enfrentaram riscos, silêncio ou dependência."]
    ]).slice(0, 2).map(([label, text]) => [label, createSentencePreview(text, 14)]),
    previous: "reality"
  };
}

function getPostStoryEditorialKit(lesson = {}, title = "") {
  const source = normalizeText(`${title} ${lesson.title || ""} ${lesson.detail || ""}`);
  if (source.includes("fogo")) {
    return {
      reflectionTitle: "A noite mudou",
      reflectionText: "Quando a chama ficava acesa, a noite deixava de ser só ameaça. Havia calor, luz e rostos reunidos.",
      assimilationTitle: "Ler as cinzas",
      assimilationText: "Cinzas e ossos queimados não falam sozinhos. Deixam pistas de cuidado repetido e de noites protegidas.",
      prompts: [
        "Quem alimentava a fogueira quando todos tinham sono?",
        "Que restos provariam que aquele fogo foi usado por humanos?"
      ],
      realityTitle: "Ainda guardamos energia",
      realityText: "Hoje carregamos baterias; antes, alguém protegia brasas. A ideia continua próxima: guardar energia para viver melhor.",
      realityCards: [
        ["Luz", "A energia ainda organiza trabalho, descanso e segurança."],
        ["Cuidado", "Guardar uma fonte vital continua a exigir atenção coletiva."]
      ],
      criticalTitle: "Quem ficava de vigia?",
      criticalText: "O fogo ajudava, mas também exigia trabalho. Progresso quase nunca chega sem novas responsabilidades.",
      perspectives: [
        ["Ganho", "Mais calor, mais luz e alimento mais seguro."],
        ["Custo", "Era preciso vigiar, alimentar e proteger a chama."]
      ]
    };
  }
  if (source.includes("ferramentas de pedra") || source.includes("pedra")) {
    return {
      reflectionTitle: "A mão ganhou alcance",
      reflectionText: "Depois do golpe certo, a pedra deixava de ser paisagem. Podia cortar, raspar e abrir novas possibilidades.",
      assimilationTitle: "Ler as lascas",
      assimilationText: "Uma lasca guarda escolhas: força, ângulo e paciência. Nela vemos técnica, erro e aprendizagem.",
      prompts: [
        "Que gesto humano ficou marcado na pedra?",
        "O que uma lasca revela sobre quem aprendeu a talhar?"
      ],
      realityTitle: "Ferramentas prolongam o corpo",
      realityText: "Do sílex ao computador, uma ferramenta faz a mesma pergunta: que limite do corpo queremos ultrapassar?",
      realityCards: [
        ["Gesto", "Uma técnica pequena podia mudar o alcance da mão."],
        ["Presente", "As ferramentas de hoje continuam essa mesma ideia."]
      ],
      criticalTitle: "Quem dominava a técnica?",
      criticalText: "A ferramenta ajudava o grupo, mas o saber precisava de ser ensinado. Sem aprendizagem, a pedra voltava a ser só pedra.",
      perspectives: [
        ["Ganho", "Cortar, raspar e fabricar ficou mais fácil."],
        ["Risco", "Um golpe errado podia destruir a peça."]
      ]
    };
  }
  return {
    reflectionTitle: "O que ficou diferente?",
    reflectionText: createPreview(lesson.detail || `${title} mudou a vida de pessoas concretas.`, 140),
    assimilationTitle: "Seguir as pistas",
    assimilationText: `${title} ganha sentido quando vemos pessoas, objetos, escolhas e consequências.`,
    realityTitle: "A marca no presente",
    realityText: `${title} ainda importa quando ajuda a perceber uma escolha humana que continua reconhecível.`,
    criticalTitle: "Quem ganhou e quem perdeu?",
    criticalText: "Uma boa leitura histórica pergunta sempre que possibilidades se abriram e que custos apareceram.",
    perspectives: [
      ["Possibilidade", "Algumas pessoas ganharam novas formas de agir."],
      ["Limite", "Outras enfrentaram riscos, silêncio ou dependência."]
    ]
  };
}

function buildChallengeStep(lesson) {
  const summary = buildLessonSummaryPoints(lesson, getLessonStoryBlocks(lesson.id), getLessonTextExperience(lesson));
  const quiz = adaptPostLessonQuizForLegacyScreens(buildPostLessonQuiz(lesson, summary)[0]);
  return {
    kicker: "Decisão rápida",
    title: quiz?.question || "Que escolha ajudaria melhor o grupo?",
    quiz,
    previous: "critical"
  };
}

function buildNextTeaserLine(currentTitle, nextTitle) {
  return `${currentTitle} abriu uma porta. A próxima lição mostra o que mudou a seguir: ${nextTitle}.`;
}

function adaptPostLessonQuizForLegacyScreens(quiz = {}) {
  return {
    ...quiz,
    answer: Number.isInteger(quiz.answer) ? quiz.answer : quiz.correctIndex
  };
}

function renderLessonProgress(lesson, currentStepIndex, extraClass = "") {
  const storyStepCount = getReadingStoryBlocks(lesson.id).length;
  const totalLessonSteps = Math.max(1, storyStepCount + postStoryStepOrder.length);
  const boundedStepIndex = Math.min(Math.max(currentStepIndex, 0), totalLessonSteps - 1);
  const progressPercent = totalLessonSteps <= 1
    ? 100
    : Math.round((boundedStepIndex / (totalLessonSteps - 1)) * 100);
  return `
    <div class="lesson-next-progress ${escapeHtml(extraClass)}" aria-label="Progresso até à próxima lição">
      <div class="lesson-next-progress-label">Progresso até à próxima lição — ${progressPercent}%</div>
      <div class="lesson-next-progress-meter">
        <div class="lesson-next-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progressPercent}" aria-label="Progresso até à próxima lição">
          <!-- Stone and firelight layers are CSS-only; progress math remains unchanged above. -->
          <span class="lesson-next-progress-fill" style="width: ${progressPercent}%"></span>
        </div>
        <span class="lesson-next-progress-percent" aria-hidden="true">${progressPercent}%</span>
      </div>
      <div class="lesson-next-progress-scale" aria-hidden="true">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </div>
  `;
}

function renderScreenProgress(index, total, lesson) {
  const storyStepCount = getReadingStoryBlocks(lesson.id).length;
  return renderLessonProgress(lesson, storyStepCount + index, "post-story-progress");
}

function renderStorySegmentProgress(index, total) {
  return `
    <div class="story-block-progress post-story-progress" aria-label="Progresso da liÃ§Ã£o">
      ${Array.from({ length: total }, (_, dotIndex) => `<span class="${dotIndex === index ? "active" : ""}" aria-hidden="true"></span>`).join("")}
    </div>
  `;
}

function renderPostStoryActions(previous, nextLabel = "Continuar", disabled = false) {
  return `
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${escapeHtml(previous)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${disabled ? "disabled" : ""}>${escapeHtml(nextLabel)}</button>
    </div>
  `;
}

function LessonSummaryScreen(step, lesson, index, total) {
  const points = (step.summary || []).slice(0, 4);
  return `
    <article class="post-story-screen lesson-summary-screen" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Resumo da lição</span>
        <h3>O que aprendeste?</h3>
        <ul class="post-lesson-summary-list" aria-label="Pontos principais da lição">
          ${points.map((point, pointIndex) => `
            <li>
              <span aria-hidden="true">${pointIndex + 1}</span>
              <p>${escapeHtml(point)}</p>
            </li>
          `).join("")}
        </ul>
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Continuar")}
    </article>
  `;
}

function ReflectionScreen(step, lesson, index, total) {
  return `
    <article class="post-story-screen reflection-moment reflection-screen" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Reflexao</span>
        <h3>Pensa sobre isto</h3>
        <p>${escapeHtml(step.question)}</p>
        <textarea class="post-lesson-reflection-input" data-lesson-reflection rows="5" placeholder="Escreve a tua resposta...">${escapeHtml(state.currentLessonReflectionText || "")}</textarea>
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Continuar")}
    </article>
  `;
}

function DebateScreen(step, lesson, index, total) {
  const selectedOption = (step.options || []).find((option) => option.id === state.currentLessonDebateChoice);
  return `
    <article class="post-story-screen critical-lens debate-screen" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Debate histórico</span>
        <h3>Escolhe uma posição</h3>
        <p>${escapeHtml(step.question)}</p>
      </div>
      <div class="post-lesson-debate-panel">
        <div class="post-lesson-debate-options" aria-label="Opcoes de debate">
          ${(step.options || []).map((option) => `
            <button class="${state.currentLessonDebateChoice === option.id ? "is-selected" : ""}" type="button" data-lesson-debate-option="${escapeHtml(option.id)}">
              ${escapeHtml(option.label)}
            </button>
          `).join("")}
        </div>
        ${selectedOption ? `
          <section class="post-lesson-debate-feedback" aria-live="polite">
            <strong>Leitura equilibrada</strong>
            <p>${escapeHtml(selectedOption.feedback)}</p>
          </section>
        ` : ""}
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Continuar")}
    </article>
  `;
}

function QuizScreen(step, lesson, index, total) {
  const quiz = step.quiz || [];
  const answers = state.currentLessonQuizAnswers || {};
  const correctCount = quiz.reduce((totalCorrect, question, questionIndex) => {
    return totalCorrect + (answers[questionIndex] === question.correctIndex ? 1 : 0);
  }, 0);
  const answeredCount = quiz.filter((_, questionIndex) => answers[questionIndex] !== undefined).length;
  const isComplete = quiz.length > 0 && answeredCount === quiz.length;
  const activeQuestionIndex = isComplete
    ? Math.max(0, quiz.length - 1)
    : Math.min(Math.max(Number(state.currentPostLessonQuizIndex) || 0, 0), Math.max(0, quiz.length - 1));
  const activeQuestion = quiz[activeQuestionIndex];
  const activeAnswered = activeQuestion && answers[activeQuestionIndex] !== undefined;
  const hasNextQuestion = activeQuestionIndex < quiz.length - 1;
  const primaryAction = !activeAnswered && !isComplete
    ? `<button type="button" disabled>Responde para continuar</button>`
    : activeAnswered && !isComplete && hasNextQuestion
      ? `<button type="button" data-lesson-action="quiz-next">Próxima pergunta</button>`
      : `<button type="button" data-lesson-action="next" ${isComplete ? "" : "disabled"}>Ver recompensa</button>`;
  return `
    <article class="post-story-screen challenge-screen quiz-screen ${isComplete ? "is-complete" : ""}" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}" data-quiz-total="${quiz.length}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Quiz</span>
        <h3>Verifica o que aprendeste</h3>
        ${quiz.length ? `<p>Pergunta ${Math.min(activeQuestionIndex + 1, quiz.length)} de ${quiz.length}</p>` : ""}
      </div>
      <div class="post-lesson-quiz-panel">
        ${activeQuestion ? renderPostLessonQuizQuestion(activeQuestion, activeQuestionIndex, answers[activeQuestionIndex]) : ""}
        ${isComplete ? `
          <section class="post-lesson-quiz-result" aria-live="polite">
            <strong>${correctCount}/${quiz.length} respostas corretas</strong>
            <p>${escapeHtml(correctCount === quiz.length ? "Excelente leitura. A lição ficou bem consolidada." : "Bom trabalho. Revê as explicações e avança com mais contexto.")}</p>
          </section>
        ` : ""}
      </div>
      ${renderScreenProgress(index, total, lesson)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${escapeHtml(step.previous)}">Voltar</button>
        ${primaryAction}
      </div>
    </article>
  `;
}

function renderPostLessonQuizQuestion(question, questionIndex, selectedIndex) {
  const answered = selectedIndex !== undefined;
  const correct = answered && selectedIndex === question.correctIndex;
  return `
    <section class="post-lesson-quiz-question">
      <h4>${escapeHtml(question.question)}</h4>
      <div class="lesson-quiz-options challenge-options">
        ${question.options.map((option, optionIndex) => `
          <button class="${answered && optionIndex === question.correctIndex ? "correct" : ""} ${answered && optionIndex === selectedIndex && optionIndex !== question.correctIndex ? "wrong" : ""}" type="button" data-post-lesson-quiz-question="${questionIndex}" data-post-lesson-quiz-option="${optionIndex}" ${answered ? "disabled" : ""}>
            ${escapeHtml(option)}
          </button>
        `).join("")}
      </div>
      ${answered ? `<p class="lesson-feedback">${correct ? "Correto." : "Incorreto."} ${escapeHtml(question.explanation)}</p>` : ""}
    </section>
  `;
}

function renderReflectionMoment(step, lesson, index, total) {
  return `
    <article class="post-story-screen reflection-moment" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Continuar")}
    </article>
  `;
}

function renderAssimilationChatbot(step, lesson, index, total) {
  return `
    <article class="post-story-screen assimilation-chatbot" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="mentor-panel">
        <span class="mentor-orb" aria-hidden="true"></span>
        <div class="post-story-copy">
          <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.text)}</p>
        </div>
        <div class="mentor-bubbles" aria-label="Pistas do guia histórico">
          ${step.prompts.map((prompt) => `<p class="mentor-bubble">${escapeHtml(prompt)}</p>`).join("")}
        </div>
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Continuar")}
    </article>
  `;
}

function renderRealityBridge(step, lesson, index, total) {
  return `
    <article class="post-story-screen reality-bridge" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
      </div>
      <div class="reality-bridge-grid">
        ${step.cards.map(([label, text]) => `
          <section>
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(text)}</p>
          </section>
        `).join("")}
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Continuar")}
    </article>
  `;
}

function renderCriticalLens(step, lesson, index, total) {
  return `
    <article class="post-story-screen critical-lens" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
      </div>
      <div class="critical-perspectives">
        ${step.perspectives.map(([label, text]) => `
          <section>
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(text)}</p>
          </section>
        `).join("")}
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Continuar")}
    </article>
  `;
}

function renderChallengeScreen(step, lesson, index, total) {
  const quiz = step.quiz || { question: step.title, options: [], answer: 0, explanation: "" };
  const answered = state.currentLessonQuizChoice !== null;
  const correct = answered && state.currentLessonQuizChoice === quiz.answer;
  return `
    <article class="post-story-screen challenge-screen" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(answered ? `${correct ? "Boa leitura." : "Quase."} ${quiz.explanation}` : "Escolhe pela cena, pelos vestígios e pela consequência.")}</p>
      </div>
      <div class="lesson-quiz-options challenge-options">
        ${quiz.options.map((option, optionIndex) => `
          <button class="${answered && optionIndex === quiz.answer ? "correct" : ""} ${answered && optionIndex === state.currentLessonQuizChoice && optionIndex !== quiz.answer ? "wrong" : ""}" type="button" data-lesson-quiz-option="${optionIndex}">
            ${escapeHtml(option)}
          </button>
        `).join("")}
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Ver recompensa", !answered)}
    </article>
  `;
}

function renderRewardScreen(step, lesson, index, total) {
  return `
    <article class="post-story-screen reward-screen" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
        <small>${escapeHtml(step.artifact)}</small>
      </div>
      ${renderScreenProgress(index, total, lesson)}
      ${renderPostStoryActions(step.previous, "Ver próxima")}
    </article>
  `;
}

function renderNextLessonTeaser(step, lesson, index, total) {
  return `
    <article class="post-story-screen next-lesson-teaser" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
      </div>
      ${renderScreenProgress(index, total, lesson)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${escapeHtml(step.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar à timeline</button>
        ${step.nextLessonId
          ? `<button type="button" data-lesson-action="next-lesson" data-next-lesson="${escapeHtml(step.nextLessonId)}">Entrar na próxima</button>`
          : `<button type="button" data-lesson-action="complete">Terminar</button>`}
      </div>
    </article>
  `;
}

function renderInteractiveMoment(lesson) {
  return `
    <div class="interactive-moment">
      <article class="lesson-mode-panel lesson-intro-card">
        <span>Interação</span>
        <h4>Olha para a pista</h4>
        <p>${escapeHtml(lesson.question)}</p>
        <p>${escapeHtml(createPreview(buildLessonTimelineHint(lesson.title, lesson.category), 150))}</p>
      </article>
      ${renderLessonSource(lesson)}
      <div class="story-block-actions lesson-screen-actions">
        <button type="button" data-lesson-action="story">Voltar</button>
        <button type="button" data-lesson-action="next">Continuar</button>
      </div>
    </div>
  `;
}

function renderMiniRecap(lesson, curiosity = "") {
  const blocks = getLessonStoryBlocks(lesson.id);
  const recapPoints = blocks.slice(0, 3).map((block) => block.text);
  return `
    <article class="lesson-mode-panel lesson-recap-card">
      <span>Mini recap</span>
      <h4>O essencial</h4>
      <div class="mini-recap-list">
        ${recapPoints.map((point) => `<p>${escapeHtml(point)}</p>`).join("")}
      </div>
      <small>${escapeHtml(curiosity || "Guarda a ideia principal antes de testar o que descobriste.")}</small>
      <div class="story-block-actions lesson-screen-actions">
        <button type="button" data-lesson-action="insight">Voltar</button>
        <button type="button" data-lesson-action="next">Continuar</button>
      </div>
    </article>
  `;
}

function clampStoryBlockIndex(blocks) {
  const maxIndex = Math.max(0, blocks.length - 1);
  state.currentLessonStoryBlockIndex = Math.min(Math.max(state.currentLessonStoryBlockIndex || 0, 0), maxIndex);
  return state.currentLessonStoryBlockIndex;
}

export async function goToNextStoryBlock({ updateLessonProgress, renderCategorySections }) {
  const blocks = getReadingStoryBlocks(state.currentLessonId);
  const index = clampStoryBlockIndex(blocks);
  if (index < blocks.length - 1) {
    state.currentLessonStoryBlockIndex = index + 1;
    updateLessonProgress(state.currentLessonId, { viewed: true, storyBlockIndex: state.currentLessonStoryBlockIndex });
    await renderCategorySections();
    return;
  }
  state.currentLessonMode = "summary";
  state.currentPostStoryStep = "summary";
  state.currentLessonStoryBlockIndex = 0;
  updateLessonProgress(state.currentLessonId, { viewed: true, storyCompleted: true });
  await renderCategorySections();
}

export async function goToPreviousStoryBlock({ updateLessonProgress, renderCategorySections }) {
  const blocks = getReadingStoryBlocks(state.currentLessonId);
  const index = clampStoryBlockIndex(blocks);
  state.currentLessonStoryBlockIndex = Math.max(0, index - 1);
  updateLessonProgress(state.currentLessonId, { viewed: true, storyBlockIndex: state.currentLessonStoryBlockIndex });
  await renderCategorySections();
}

export function buildLessonIntroFrame(lesson) {
  const section = getEraCurriculumSections(lesson.eraKey).find((item) => item.id === lesson.sectionId);
  const title = getLessonDisplayTitle(lesson.title);
  const normalizedTitle = normalizeText(title);
  const eraTitle = eras[lesson.eraKey]?.title || "História";
  const sectionTitle = section?.title || timelineCategoryLabels[lesson.category] || "Lição";
  const specificFrames = [
    {
      match: ["descoberta do fogo", "fogo"],
      mood: "fire",
      line: "O fogo iluminou a noite e mudou a humanidade para sempre.",
      preview: ["Sobreviver ao frio", "Dominar as chamas", "Vida à volta da fogueira"]
    },
    {
      match: ["ferramentas de pedra", "pedra"],
      mood: "stone",
      line: "A pedra deixou de ser paisagem e tornou-se intenção humana.",
      preview: ["Cortar e raspar", "Aprender pela técnica", "Transformar matéria em poder"]
    },
    {
      match: ["caca e pesca", "caça e pesca", "pesca"],
      mood: "hunt",
      line: "Ler animais, águas e estações tornou-se uma arte de sobrevivência.",
      preview: ["Seguir rastos", "Cooperar em grupo", "Conhecer rios e florestas"]
    },
    {
      match: ["arte rupestre", "arte"],
      mood: "art",
      line: "Nas paredes da rocha, a memória começou a ganhar forma.",
      preview: ["Pigmentos e sinais", "Animais pintados", "Imaginação coletiva"]
    },
    {
      match: ["ritos funerarios", "ritos funerários", "funer"],
      mood: "rites",
      line: "Cuidar dos mortos revelou uma nova profundidade humana.",
      preview: ["Memória do grupo", "Objetos e sepulturas", "Perguntas sobre a morte"]
    },
    {
      match: ["fim da era glacial", "era glacial", "glacial"],
      mood: "ice",
      line: "Quando o gelo recuou, o mundo abriu caminhos novos.",
      preview: ["Clima em mudança", "Novas paisagens", "Adaptar para continuar"]
    },
    {
      match: ["domesticacao de animais", "domesticação de animais", "animais"],
      mood: "animals",
      line: "A relação com os animais começou a mudar a vida humana.",
      preview: ["Proteção e alimento", "Proximidade diária", "Novas dependências"]
    },
    {
      match: ["abrigos permanentes", "primeiros abrigos"],
      mood: "shelter",
      line: "Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",
      preview: ["Abrigos estáveis", "Espaços partilhados", "Primeiras rotinas"]
    },
    {
      match: ["agricultura"],
      mood: "agriculture",
      line: "Produzir alimento transformou a paisagem em projeto humano.",
      preview: ["Cultivo e sementes", "Colheitas", "Sedentarismo"]
    },
    {
      match: ["aldeias e comunidade", "aldeias"],
      mood: "village",
      line: "As primeiras comunidades permanentes começaram a desenhar o futuro.",
      preview: ["Cabanas e fogueiras", "Cooperação", "Crescimento populacional"]
    },
    {
      match: ["dominio dos metais", "domínio dos metais", "metais"],
      mood: "metal",
      line: "O metal mudou ferramentas, conflito e poder.",
      preview: ["Cobre, bronze e ferro", "Forjas e armas", "Novas hierarquias"]
    },
    {
      match: ["comercio e trocas", "comércio e trocas", "trocas"],
      mood: "trade",
      line: "As aldeias começaram a trocar recursos, técnicas e mundos.",
      preview: ["Rotas", "Especialização", "Contacto entre povos"]
    },
    {
      match: ["nascimento das civilizacoes", "nascimento das civilizações", "civiliz"],
      mood: "civilization",
      line: "Das aldeias nasceram liderança, muralhas e primeiras cidades.",
      preview: ["Hierarquias", "Defesa", "Primeiras cidades"]
    }
  ];
  const frame = specificFrames.find((item) =>
    item.match.some((keyword) => normalizedTitle.includes(normalizeText(keyword)))
  ) || {
    mood: lesson.category || "default",
    line: buildLessonHeroLine(lesson),
    preview: ["Contexto", "Causas", "Consequências"]
  };
  return {
    title,
    mood: frame.mood,
    line: frame.line,
    preview: frame.preview,
    kicker: `${eraTitle} · ${sectionTitle}`
  };
}

export function getLessonDisplayTitle(title) {
  return String(title || "").split(":")[0].trim();
}

function buildLessonHeroLine(lesson) {
  const detail = lesson.detail || buildLessonTimelineHint(lesson.title, lesson.category);
  const preview = createPreview(detail, 142);
  return `“${preview}”`;
}

function buildLessonTimelineHint(event, category = "") {
  if (category === "política") return "Pista: observa quem ganha autoridade, quem fica excluído e que instituições mudam.";
  if (category === "guerra") return "Pista: liga violência, recursos, alianças e efeitos sobre populações civis.";
  if (category === "ciência") return "Pista: pergunta que técnica, conhecimento ou infraestrutura mudou práticas sociais.";
  if (category === "cultura") return "Pista: procura impactos em memória, educação, identidade e circulação de ideias.";
  if (category === "religião") return "Pista: analisa como crença, instituição e poder social se influenciam.";
  if (event.includes("poder") || event.includes("autoridade")) return "Pista: repara em quem ganha legitimidade e quem fica excluído.";
  if (event.includes("guerra") || event.includes("militar")) return "Pista: liga conflito, recursos e mudança política.";
  if (event.includes("comércio") || event.includes("comerciais")) return "Pista: segue as redes de troca e os grupos afetados.";
  return "Pista: transforma este momento numa causa, consequência ou comparação.";
}

function buildInterpretiveInsight(...parts) {
  const text = normalizeText(parts.filter(Boolean).join(" "));
  const match = insightRules.find((rule) =>
    rule.keywords.some((keyword) => text.includes(normalizeText(keyword)))
  );
  if (match) return match.insight;
  return "Lê este tema como parte de uma cadeia histórica: causas, escolhas humanas, estruturas sociais e consequências raramente avançam isoladas.";
}

function renderRelatedLinks(topics) {
  if (!topics?.length) return "";
  return `
    <div class="related-links" aria-label="Conteúdos relacionados">
      <span>Relacionados</span>
      ${topics.map((topic) => `<button type="button" class="related-link" data-related="${escapeHtml(topic)}">${escapeHtml(topic)}</button>`).join("")}
    </div>
  `;
}

function renderLessonSource(lesson) {
  const sources = getEraSources(lesson.eraKey);
  const source = sources[getRecommendedSourceIndex(lesson.eraKey, lesson.id)] || sources[0];
  return `
    <article class="lesson-mode-panel">
      <span>Fonte recomendada</span>
      <blockquote>${escapeHtml(source.text)}</blockquote>
      <p><strong>Origem:</strong> ${escapeHtml(source.origin)}</p>
      <p><strong>Intenção:</strong> ${escapeHtml(source.purpose)}</p>
      <p><strong>Limites:</strong> ${escapeHtml(source.limits)}</p>
      <p class="lesson-task"><strong>Tarefa:</strong> identifica que ponto de vista a fonte mostra, que informação fica ausente e como ela confirma ou complica a lição.</p>
    </article>
  `;
}

function renderLessonQuiz(lesson) {
  const summary = buildLessonSummaryPoints(lesson, getLessonStoryBlocks(lesson.id), getLessonTextExperience(lesson));
  const quiz = adaptPostLessonQuizForLegacyScreens(buildPostLessonQuiz(lesson, summary)[0]);
  const answered = state.currentLessonQuizChoice !== null;
  const correct = answered && state.currentLessonQuizChoice === quiz.answer;
  return `
    <article class="lesson-mode-panel">
      <span>Mini quiz</span>
      <h4>${escapeHtml(quiz.question)}</h4>
      <div class="lesson-quiz-options">
        ${quiz.options.map((option, index) => `
          <button class="${answered && index === quiz.answer ? "correct" : ""} ${answered && index === state.currentLessonQuizChoice && index !== quiz.answer ? "wrong" : ""}" type="button" data-lesson-quiz-option="${index}">
            ${escapeHtml(option)}
          </button>
        `).join("")}
      </div>
      ${answered ? `<p class="lesson-feedback">${correct ? "Certo." : "Quase."} ${escapeHtml(quiz.explanation)}</p>` : `<p class="lesson-feedback">Escolhe uma opção para testar a leitura da lição.</p>`}
      <p class="lesson-task"><strong>Ligação à lição:</strong> responde pensando no contexto de ${escapeHtml(lesson.title)} e evita decorar a opção isoladamente.</p>
      <div class="story-block-actions lesson-screen-actions">
        <button type="button" data-lesson-action="recap">Voltar</button>
        <button type="button" data-lesson-action="next" ${answered ? "" : "disabled"}>Continuar</button>
      </div>
    </article>
  `;
}

function renderLessonConsolidation(lesson) {
  const nextLesson = getNextLesson(lesson.eraKey, lesson.id);
  return `
    <article class="lesson-mode-panel lesson-complete-card">
      <span>Conclusão</span>
      <h4>+40 XP</h4>
      <p>${escapeHtml(lesson.detail || buildLessonTimelineHint(lesson.title, lesson.category))}</p>
      <p><strong>Erro comum a evitar:</strong> explicar este tema como um acontecimento isolado, sem causas, conflitos ou consequências.</p>
      <p><strong>Próxima:</strong> ${escapeHtml(nextLesson?.title || "revê a secção antes de avançar.")}</p>
      <div class="story-block-actions lesson-screen-actions">
        <button type="button" data-lesson-action="quiz">Voltar</button>
        <button type="button" data-lesson-action="complete">Concluir lição</button>
      </div>
    </article>
  `;
}
