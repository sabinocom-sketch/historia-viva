import { eras, insightRules, timelineCategoryLabels } from './data.js';
import { state } from './state.js';
import { createPreview, escapeHtml, normalizeText, pickFrom } from './utils.js';
import {
  getEraCurriculumSections,
  getEraLessons,
  getEraQuiz,
  getEraSources,
  getLessonById,
  getLessonStoryBlocks,
  getNextLesson,
  getRecommendedQuizIndex,
  getRecommendedSourceIndex
} from './content-service.js';

const postStoryStepOrder = ["reflection", "assimilation", "reality", "critical", "challenge", "reward", "nextTeaser"];
const postStoryModeAliases = {
  interaction: "reflection",
  source: "reflection",
  insight: "reflection",
  recap: "reality",
  debate: "critical",
  quiz: "challenge",
  consolidate: "reward"
};

const lessonHeroImageUrls = {
  fire: "https://wvxomznvbebwtxfsvfiv.supabase.co/storage/v1/object/public/Imagens%20App%20Historia/Assets/licao-fogo.webp"
};

function getLessonHeroImageStyle(mood) {
  const imageUrl = lessonHeroImageUrls[mood];
  if (!imageUrl) return "";
  return ` style="background-image: linear-gradient(90deg, rgba(7, 8, 8, 0.18), rgba(7, 8, 8, 0.08)), url('${imageUrl}'); background-position: center, center 48%; background-size: cover, cover; background-repeat: no-repeat;"`;
}

function getCurrentLessonMood() {
  const lesson = state.currentLessonId ? getLessonById(state.currentLessonId) : getEraLessons(state.currentEra)[0];
  if (!lesson) return "";
  return buildLessonIntroFrame(lesson).mood;
}

export function renderActiveLessonPanel() {
  const lesson = state.currentLessonId ? getLessonById(state.currentLessonId) : getEraLessons(state.currentEra)[0];
  if (!lesson) return "";
  const isSelected = state.currentLessonId === lesson.id;
  const lessonIntro = buildLessonIntroFrame(lesson);
  const curiosity = pickFrom(eras[lesson.eraKey].curiosities || [], lesson.index, "Cada vestígio histórico muda quando fazemos uma pergunta melhor.");
  const insight = buildInterpretiveInsight(lesson.title, lesson.detail, lesson.category, ...(lesson.related || []));
  const isIntro = state.currentLessonMode === "intro";
  return `
    <section class="active-lesson-panel lesson-view ${isSelected ? "is-active" : ""}" data-active-lesson="${escapeHtml(lesson.id)}" data-era="${escapeHtml(lesson.eraKey)}" data-section="${escapeHtml(lesson.sectionId || "")}" data-mood="${escapeHtml(lessonIntro.mood)}" data-mode="${escapeHtml(state.currentLessonMode)}" data-theme="${escapeHtml(lesson.category)}">
      ${isIntro ? `<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"${getLessonHeroImageStyle(lessonIntro.mood)}></span>
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
    const blocks = getLessonStoryBlocks(lesson.id);
    const index = clampStoryBlockIndex(blocks);
    return `
      <div class="lesson-experience" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" aria-label="Sequência narrativa da lição">
        ${renderStoryBlock(blocks[index], index, blocks.length)}
      </div>
    `;
  }

  return renderPostStoryLessonFlow(lesson, context);
}

function renderStoryBlock(block, index, total) {
  const safeBlock = block || {
    id: "story",
    visualType: "spark",
    backgroundMood: "cave-dark",
    text: "Um pequeno momento começou a mudar a experiência humana."
  };
  return `
    <article class="story-block" data-story-block="${escapeHtml(safeBlock.id)}" data-visual="${escapeHtml(safeBlock.visualType)}" data-background="${escapeHtml(safeBlock.backgroundMood)}" data-mood="${escapeHtml(getCurrentLessonMood())}" data-era="${escapeHtml(safeBlock.eraKey || "")}" data-section="${escapeHtml(safeBlock.sectionId || "")}">
      <span class="story-block-background" aria-hidden="true"></span>
      <span class="story-block-visual" aria-hidden="true"></span>
      <div class="story-block-copy">
        <span>Momento ${index + 1} de ${total}</span>
        <p>${escapeHtml(safeBlock.text)}</p>
      </div>
      <div class="story-block-progress" aria-label="Progresso dos story blocks">
        ${Array.from({ length: total }, (_, dotIndex) => `<span class="${dotIndex === index ? "active" : ""}" aria-hidden="true"></span>`).join("")}
      </div>
      <div class="story-block-actions">
        <button type="button" data-lesson-action="story-prev" ${index === 0 ? "disabled" : ""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${index === total - 1 ? "Avançar" : "Continuar"}</button>
      </div>
    </article>
  `;
}

function renderPostStoryLessonFlow(lesson, context = {}) {
  const flow = buildPostStoryFlow(lesson, context);
  const stepKey = getPostStoryStepKey(state.currentLessonMode);
  const stepIndex = postStoryStepOrder.indexOf(stepKey);
  const total = postStoryStepOrder.length;
  state.currentPostStoryStep = stepKey;

  const renderers = {
    reflection: renderReflectionMoment,
    assimilation: renderAssimilationChatbot,
    reality: renderRealityBridge,
    critical: renderCriticalLens,
    challenge: renderChallengeScreen,
    reward: renderRewardScreen,
    nextTeaser: renderNextLessonTeaser
  };
  const renderer = renderers[stepKey] || renderReflectionMoment;

  return `
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-post-story-step="${escapeHtml(stepKey)}" aria-label="ContinuaÃ§Ã£o narrativa da liÃ§Ã£o">
      ${renderer(flow[stepKey], lesson, stepIndex, total)}
    </div>
  `;
}

function getPostStoryStepKey(mode) {
  const step = postStoryModeAliases[mode] || mode || state.currentPostStoryStep || "reflection";
  return postStoryStepOrder.includes(step) ? step : "reflection";
}

function buildPostStoryFlow(lesson, context = {}) {
  const intro = buildLessonIntroFrame(lesson);
  const title = getLessonDisplayTitle(lesson.title);
  const blocks = getLessonStoryBlocks(lesson.id);
  const nextLesson = getNextLesson(lesson.eraKey, lesson.id);
  return {
    reflection: buildReflectionStep(lesson, context.insight),
    assimilation: buildAssimilationStep(lesson, blocks, title),
    reality: buildRealityBridgeStep(lesson, title),
    critical: buildCriticalLensStep(lesson, title),
    challenge: buildChallengeStep(lesson),
    reward: {
      kicker: "Artefacto desbloqueado",
      title: "Memória guardada",
      text: `Guardaste uma chave de leitura sobre ${title}.`,
      artifact: intro.preview?.[0] || "Artefacto narrativo desbloqueado",
      previous: "challenge"
    },
    nextTeaser: {
      kicker: "Próxima porta temporal",
      title: nextLesson ? getLessonDisplayTitle(nextLesson.title) : "Rever a jornada",
      text: nextLesson
        ? buildNextTeaserLine(title, getLessonDisplayTitle(nextLesson.title))
        : "A viagem continua quando voltares ao mapa da era.",
      nextLessonId: nextLesson?.id || "",
      previous: "reward"
    }
  };
}

function buildReflectionStep(lesson, insight = "") {
  const title = getLessonDisplayTitle(lesson.title);
  const normalizedTitle = normalizeText(title);
  const text = normalizedTitle.includes("fogo")
    ? "O fogo nao mudou apenas a sobrevivencia. Mudou a forma como os humanos viviam juntos."
    : createPreview(insight || lesson.detail || buildLessonHeroLine(lesson), 150);
  return {
    kicker: "Pausa de assimilação",
    title: "O que isto mudou?",
    text,
    previous: "story"
  };
}

function buildAssimilationStep(lesson, blocks, title) {
  const prompts = blocks.slice(0, 3).map((block) => block.text);
  return {
    kicker: "Guia histórico",
    title: "O que acabaste de descobrir?",
    text: `${title} fica mais claro quando separas descoberta, escolha e consequencia.`,
    prompts: prompts.length ? prompts : [
      "Que problema humano aparece aqui?",
      "Que decisao mudou a vida diaria?",
      "Que consequencia veio depois?"
    ],
    previous: "reflection"
  };
}

function buildRealityBridgeStep(lesson, title) {
  const normalized = normalizeText(title);
  const cards = normalized.includes("fogo")
    ? [
      ["Energia", "Hoje continuamos dependentes de energia para viver, trabalhar e comunicar."],
      ["Tecnologia", "Uma ferramenta simples pode reorganizar uma comunidade inteira."],
      ["Seguranca", "Proteger recursos importantes continua a ser uma decisao coletiva."]
    ]
    : [
      ["Tecnologia", "Mudancas tecnicas alteram rotinas, trabalho e relacoes sociais."],
      ["Comunidade", "O que uma sociedade aprende muda a forma como coopera."],
      ["Escolhas", "Cada avancar tambem cria dependencias e novos custos."]
    ];
  return {
    kicker: "Ponte ao presente",
    title: "Do passado para hoje",
    text: `${title} nao ficou preso ao passado. A mesma logica ainda aparece no presente.`,
    cards,
    previous: "assimilation"
  };
}

function buildCriticalLensStep(lesson, title) {
  const normalized = normalizeText(title);
  const question = normalized.includes("fogo")
    ? "O dominio do fogo foi apenas progresso?"
    : "Esta mudanca trouxe so beneficios?";
  return {
    kicker: "Lente crítica",
    title: question,
    text: "Olha para o mesmo momento por lentes diferentes.",
    perspectives: [
      ["Sobrevivencia", "Ajudou pessoas a resistir melhor ao mundo."],
      ["Vida social", "Mudou a forma como grupos se organizavam."],
      ["Custo", "Tambem criou novas pressoes sobre recursos e ambiente."]
    ],
    previous: "reality"
  };
}

function buildChallengeStep(lesson) {
  const quizBank = getEraQuiz(lesson.eraKey);
  const quiz = quizBank[getRecommendedQuizIndex(lesson.eraKey, lesson.id)] || quizBank[0];
  return {
    kicker: "Desafio",
    title: quiz?.question || "Que escolha ajudaria melhor o grupo?",
    quiz,
    previous: "critical"
  };
}

function buildNextTeaserLine(currentTitle, nextTitle) {
  return `${currentTitle} abriu uma porta. A próxima lição mostra o que mudou a seguir: ${nextTitle}.`;
}

function renderScreenProgress(index, total) {
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

function renderReflectionMoment(step, lesson, index, total) {
  return `
    <article class="post-story-screen reflection-moment" data-era="${escapeHtml(lesson.eraKey || "")}" data-section="${escapeHtml(lesson.sectionId || "")}" data-theme="${escapeHtml(lesson.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${escapeHtml(step.kicker)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
      </div>
      ${renderScreenProgress(index, total)}
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
      ${renderScreenProgress(index, total)}
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
      ${renderScreenProgress(index, total)}
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
      ${renderScreenProgress(index, total)}
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
        <p>${escapeHtml(answered ? `${correct ? "Boa leitura." : "Quase."} ${quiz.explanation}` : "Escolhe pelo contexto, não pela memória.")}</p>
      </div>
      <div class="lesson-quiz-options challenge-options">
        ${quiz.options.map((option, optionIndex) => `
          <button class="${answered && optionIndex === quiz.answer ? "correct" : ""} ${answered && optionIndex === state.currentLessonQuizChoice && optionIndex !== quiz.answer ? "wrong" : ""}" type="button" data-lesson-quiz-option="${optionIndex}">
            ${escapeHtml(option)}
          </button>
        `).join("")}
      </div>
      ${renderScreenProgress(index, total)}
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
      ${renderScreenProgress(index, total)}
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
      ${renderScreenProgress(index, total)}
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

export function goToNextStoryBlock({ updateLessonProgress, renderCategorySections }) {
  const blocks = getLessonStoryBlocks(state.currentLessonId);
  const index = clampStoryBlockIndex(blocks);
  if (index < blocks.length - 1) {
    state.currentLessonStoryBlockIndex = index + 1;
    updateLessonProgress(state.currentLessonId, { viewed: true, storyBlockIndex: state.currentLessonStoryBlockIndex });
    renderCategorySections();
    return;
  }
  state.currentLessonMode = "reflection";
  state.currentPostStoryStep = "reflection";
  state.currentLessonStoryBlockIndex = 0;
  updateLessonProgress(state.currentLessonId, { viewed: true, storyCompleted: true });
  renderCategorySections();
}

export function goToPreviousStoryBlock({ updateLessonProgress, renderCategorySections }) {
  const blocks = getLessonStoryBlocks(state.currentLessonId);
  const index = clampStoryBlockIndex(blocks);
  state.currentLessonStoryBlockIndex = Math.max(0, index - 1);
  updateLessonProgress(state.currentLessonId, { viewed: true, storyBlockIndex: state.currentLessonStoryBlockIndex });
  renderCategorySections();
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
  const quizBank = getEraQuiz(lesson.eraKey);
  const quiz = quizBank[getRecommendedQuizIndex(lesson.eraKey, lesson.id)] || quizBank[0];
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
