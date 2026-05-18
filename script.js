import {
  eras,
  timelineCategoryLabels,
  timelineCategoryIcons,
  quizTypeLabels,
  eraEditorialFrames,
  insightRules,
  experienceFlows,
  defaultExperienceFlowId
} from './data.js';
import { state } from './state.js';
import { createPreview, escapeHtml, getHistoricalDateOrder, normalizeText, pickFrom, questionSeed } from './utils.js';
import { dom } from './dom.js';
import { createProgressController } from './progress.js';
import { afterNextPaint, preloadLearnAssets, waitForLearnAssets } from './screen-assets.js';
import { createScreenController } from './screen-controller.js';
import {
  buildLessonIntroFrame,
  getLessonDisplayTitle,
  goToNextStoryBlock,
  goToPreviousStoryBlock,
  renderActiveLessonPanel
} from './lesson-experience.js';
import {
  findRelatedTarget,
  getDebatesForEra,
  getEraCurriculumSections,
  getEraExploreEntries,
  getEraLessons,
  getEraQuiz,
  getEraSources,
  getLessonById,
  getNextLesson,
  getRelatedTopics,
  getVirtualRelatedPrompt
} from './content-service.js';

const todayKey = new Date().toISOString().slice(0, 10);
const { progress, addXp, awardBadge, updateLessonProgress, renderProgress } = createProgressController({
  eras,
  state,
  dom,
  todayKey
});

const {
  appShell,
  contentShell,
  screenBackButton,
  eraButtons,
  eraRange,
  eraTitle,
  eraSummary,
  categorySections,
  stats,
  sourceText,
  sourceAnswer,
  sourceOrigin,
  sourcePurpose,
  sourceLimits,
  quizQuestion,
  quizOptions,
  quizFeedback,
  score,
  chatWindow,
  questionForm,
  questionInput,
  shuffleQuestion,
  exploreTabs,
  exploreList,
  featureViews,
  timelineZoomButtons,
  journeyTitle,
  journeySummary,
  journeyProgressLabel,
  journeyProgressBar,
  continueJourney,
  curiosityTitle,
  curiosityText,
  dailyCuriosity,
  debatePicker,
  debateContext,
  debateTitle,
  debateIntro,
  debateSideALabel,
  debateSideBLabel,
  debateSideA,
  debateSideB,
  chooseSideA,
  chooseSideB,
  chooseSideBalance,
  debateSummary,
  missionTitle,
  missionContext,
  missionBrief,
  missionChoices,
  missionResult
} = dom;

const screenController = createScreenController({
  root: contentShell,
  views: featureViews
});

preloadLearnAssets();

let routeMotionTimer = 0;
let xpMotionTimer = 0;
const bootStartedAt = Date.now();
let hasUserNavigationIntent = false;
const routeMotionFallbackMs = 820;
const routeMotionSettleMs = 180;
let routeMotionEndHandler = null;
let routeMotionTarget = null;
let routeMotionSequence = 0;

function clearRouteMotion() {
  routeMotionSequence += 1;
  window.clearTimeout(routeMotionTimer);
  if (routeMotionEndHandler) {
    routeMotionTarget?.removeEventListener("animationend", routeMotionEndHandler, true);
    routeMotionEndHandler = null;
  }
  if (routeMotionTarget) {
    routeMotionTarget.classList.remove("is-route-entering");
    routeMotionTarget.classList.remove("is-screen-preparing");
    delete routeMotionTarget.dataset.motionRoute;
    delete routeMotionTarget.dataset.routeView;
    routeMotionTarget = null;
  }
}

function markUserNavigationIntent() {
  hasUserNavigationIntent = true;
}

function isGuardedBootNavigation(nextView) {
  const bootGuardMs = 1800;
  return nextView !== "home" && !hasUserNavigationIntent && Date.now() - bootStartedAt < bootGuardMs;
}

function pulseClass(element, className, duration = 520) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), duration);
}

async function markRouteMotion(previousView, nextView) {
  if (!document.body || previousView === nextView) return;
  clearRouteMotion();
  const motionSequence = routeMotionSequence;
  const nextSection = routeConfig[nextView]?.section || nextView;
  const activeFeature = Array.from(featureViews).find((view) => {
    return view.classList.contains("active") && view.dataset.view === nextSection;
  });
  const motionRoot = activeFeature?.querySelector(
    ".era-portal-screen, .subpath-portal-screen, .era-world-screen, .timeline-view-screen, .grand-journey-screen, .lesson-hero"
  ) || activeFeature;
  if (!motionRoot) return;
  routeMotionTarget = motionRoot;
  routeMotionTarget.dataset.motionRoute = `${previousView}-to-${nextView}`;
  routeMotionTarget.dataset.routeView = nextView;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    clearRouteMotion();
    return;
  }
  if (nextView === "learn") {
    routeMotionTarget.classList.add("is-screen-preparing");
    await waitForLearnAssets(700);
  }
  await afterNextPaint();
  if (motionSequence !== routeMotionSequence || routeMotionTarget !== motionRoot) return;
  routeMotionTarget.classList.remove("is-screen-preparing");
  routeMotionTarget.classList.add("is-route-entering");
  const settleRouteMotion = (event) => {
    if (event.target !== routeMotionTarget) return;
    if (!routeMotionTarget.classList.contains("is-route-entering")) return;
    if (!event.animationName || !["archive-open-in", "investigation-mode-in", "view-in"].includes(event.animationName)) return;
    window.clearTimeout(routeMotionTimer);
    routeMotionTimer = window.setTimeout(clearRouteMotion, routeMotionSettleMs);
  };
  routeMotionEndHandler = settleRouteMotion;
  routeMotionTarget.addEventListener("animationend", routeMotionEndHandler, true);
  routeMotionTimer = window.setTimeout(() => {
    clearRouteMotion();
  }, routeMotionFallbackMs);
}

function markXpMotion() {
  document.body.classList.remove("is-xp-awarded");
  window.clearTimeout(xpMotionTimer);
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-xp-awarded");
    xpMotionTimer = window.setTimeout(() => {
      document.body.classList.remove("is-xp-awarded");
    }, 950);
  });
}

const legacyRouteConfig = {
  overview: {
    experience: "home",
    title: "História Viva"
  },
  categories: {
    experience: "lesson",
    title: "Aprender"
  },
  explore: {
    experience: "exploration",
    title: "Explorar"
  },
  source: {
    experience: "source",
    title: "Fontes"
  },
  quiz: {
    experience: "quiz",
    title: "Quiz"
  },
  debates: {
    experience: "debate",
    title: "Debate"
  },
  chat: {
    experience: "chat",
    title: "Historiador"
  },
  progress: {
    experience: "progress",
    title: "Progresso"
  }
};

const routeConfig = {
  home: { section: "overview", nav: "home", experience: "home", title: "Historia Viva" },
  learn: { section: "categories", nav: "learn", experience: "lesson", title: "Escolher era" },
  portal: { section: "categories", nav: "learn", experience: "lesson", title: "Portal da era" },
  era: { section: "categories", nav: "learn", experience: "lesson", title: "Escolher percurso" },
  subpath: { section: "categories", nav: "learn", experience: "lesson", title: "Portal do subpercurso" },
  timeline: { section: "categories", nav: "learn", experience: "lesson", title: "Mapa da jornada" },
  journey: { section: "categories", nav: "learn", experience: "lesson", title: "Grande Jornada" },
  lesson: { section: "categories", nav: "learn", experience: "lesson", title: "Licao" },
  explore: { section: "explore", nav: "explore", experience: "exploration", title: "Explorar" },
  source: { section: "source", nav: "source", experience: "source", title: "Fontes" },
  quiz: { section: "quiz", nav: "quiz", experience: "quiz", title: "Quiz" },
  debate: { section: "debates", nav: "debate", experience: "debate", title: "Debate" },
  mission: { section: "mission", nav: "mission", experience: "mission", title: "Missao" },
  chat: { section: "chat", nav: "chat", experience: "chat", title: "Historiador" },
  progress: { section: "progress", nav: "progress", experience: "progress", title: "Progresso" }
};

const wholeEraJourneyConfig = {
  prehistoria: {
    id: "toda-prehistoria",
    title: "Grande Jornada Pr\u00e9-Hist\u00f3rica",
    summary: "Uma travessia continua pelas primeiras sobrevivencias, adaptacoes e formas de construir mundo."
  },
  antiga: {
    id: "toda-antiguidade",
    title: "Grande Jornada da Antiguidade",
    summary: "Uma viagem por cidades, imperios, crencas e decisoes que deram nova escala ao poder."
  },
  medieval: {
    id: "toda-idade-medieval",
    title: "Grande Jornada da Idade Medieval",
    summary: "Uma travessia por reinos, fe, muralhas, comercio e mundos em reconstrucao."
  },
  moderna: {
    id: "toda-idade-moderna",
    title: "Grande Jornada da Idade Moderna",
    summary: "Uma rota por oceanos, imprensa, ciencia, imperios e revolucoes atlanticas."
  },
  contemporanea: {
    id: "toda-idade-contemporanea",
    title: "Grande Jornada da Idade Contempor\u00e2nea",
    summary: "Uma travessia por revolucoes, guerras globais, direitos, tecnologia e memoria recente."
  },
  portugal: {
    id: "toda-historia-portugal",
    title: "Grande Jornada da Hist\u00f3ria de Portugal",
    summary: "Uma viagem pela formacao, expansao, crise imperial, ditadura, democracia e Europa."
  }
};

function getWholeEraJourney(eraKey) {
  return wholeEraJourneyConfig[eraKey] || null;
}

function isWholeEraJourney(eraKey, subpathId = state.currentSubpathId) {
  return Boolean(subpathId && getWholeEraJourney(eraKey)?.id === subpathId);
}

const eraPortalFrames = {
  prehistoria: {
    title: "Pré-História",
    summary: "Fogo, pedra, cavernas e arte rupestre abrem as primeiras formas humanas de sobrevivência, memória e imaginação."
  },
  antiga: {
    title: "Antiguidade",
    summary: "Cidades, impérios, templos, escrita e cidadania transformam o poder em escala civilizacional."
  },
  medieval: {
    title: "Mundos Medievais",
    summary: "Reinos, fé, muralhas, comércio e guerra moldam uma nova ordem entre ruínas antigas e mundos em expansão."
  },
  moderna: {
    title: "Idade Moderna",
    summary: "Oceanos, mapas, imprensa, ciência e impérios ligam continentes e aceleram novas formas de poder."
  },
  contemporanea: {
    title: "Idade Contemporânea",
    summary: "Indústria, revoluções, guerras globais, direitos e tecnologia tornam a História mais veloz e instável."
  },
  portugal: {
    title: "História de Portugal",
    summary: "Da formação do reino à expansão marítima, da crise imperial à democracia europeia: um país em transformação."
  }
};

const viewAliases = {
  overview: "home",
  categories: "learn",
  debates: "debate"
};

const lessonFlow = [
  { mode: "story", label: "Descoberta", next: "Reflexão" },
  { mode: "reflection", label: "Reflexão", next: "Mentor" },
  { mode: "assimilation", label: "Mentor", next: "Hoje" },
  { mode: "reality", label: "Hoje", next: "Lente crítica" },
  { mode: "critical", label: "Lente crítica", next: "Desafio" },
  { mode: "challenge", label: "Desafio", next: "Reward" },
  { mode: "reward", label: "Reward", next: "Próxima" },
  { mode: "nextTeaser", label: "Próxima", next: "Terminar" }
];

const lessonModeAliases = {
  understand: "story",
  interaction: "reflection",
  source: "reflection",
  insight: "reflection",
  recap: "reality",
  debate: "critical",
  quiz: "challenge",
  consolidate: "reward"
};

const postStoryModes = ["reflection", "assimilation", "reality", "critical", "challenge", "reward", "nextTeaser"];

function normalizeView(view) {
  const canonical = viewAliases[view] || view;
  return routeConfig[canonical] ? canonical : "home";
}

function getRouteFromHash() {
  const [rawView = "home", primaryParam = "", secondaryParam = ""] = window.location.hash
    .replace(/^#\/?/, "")
    .split("?")[0]
    .split("/")
    .filter(Boolean);
  const view = normalizeView(rawView || "home");
  const eraParam = view === "lesson" ? "" : primaryParam;
  return {
    view,
    params: {
      era: eraParam && eras[eraParam] ? eraParam : "",
      lessonId: view === "lesson" ? decodeURIComponent(primaryParam || "") : "",
      subpathId: ["subpath", "timeline"].includes(view) ? decodeURIComponent(secondaryParam || "") : "",
      mode: view === "lesson" ? secondaryParam || "" : ""
    }
  };
}

function routeHash(view, params = {}) {
  if (view === "lesson" && params.lessonId) return `#/lesson/${encodeURIComponent(params.lessonId)}`;
  if (["subpath", "timeline"].includes(view) && params.era && params.subpathId) return `#/${view}/${params.era}/${encodeURIComponent(params.subpathId)}`;
  if (["portal", "era", "explore", "quiz", "debate", "mission"].includes(view) && params.era) return `#/${view}/${params.era}`;
  return `#/${view}`;
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


function expandableButton(expanded = false) {
  return `<button class="expand-toggle" type="button" aria-expanded="${expanded}">${expanded ? "Recolher" : "Expandir"}</button>`;
}

function buildEraSummary(key) {
  const era = eras[key];
  const frame = eraEditorialFrames[key];
  if (!frame) return era.summary;
  return `${era.summary} Questão-guia: ${frame.question} ${frame.thread}`;
}

function buildEraHeroSummary(key) {
  return eraPortalFrames[key]?.summary || eras[key].summary;
}

function buildInterpretiveInsight(...parts) {
  const text = normalizeText(parts.filter(Boolean).join(" "));
  const match = insightRules.find((rule) =>
    rule.keywords.some((keyword) => text.includes(normalizeText(keyword)))
  );
  if (match) return match.insight;
  return "Lê este tema como parte de uma cadeia histórica: causas, escolhas humanas, estruturas sociais e consequências raramente avançam isoladas.";
}

function renderInsight(...parts) {
  return `<p class="content-insight">${escapeHtml(buildInterpretiveInsight(...parts))}</p>`;
}

function buildSourceLens(source) {
  return `Leitura crítica: cruza autoria, intenção e silêncio da fonte. O mais interessante não é apenas o que ela diz, mas o que permite perguntar sobre poder, experiência social e memória.`;
}

function buildQuizLens(quiz) {
  return `Foco crítico: esta pergunta treina ${quizTypeLabels[quiz.type]?.toLowerCase() || "interpretação histórica"} e obriga a distinguir facto, contexto e consequência.`;
}

function openRelatedTopic(topic) {
  const virtualPrompt = getVirtualRelatedPrompt(topic);
  const target = findRelatedTarget(topic);

  if (target) {
    renderEra(target.eraKey);
    state.currentExplore = target.section;
    renderExplore();
    showSection("explore");
    addXp(5, `Ganhaste 5 XP por ligar ${topic} a outro conteúdo.`);
    return;
  }

  showSection("chat");
  questionInput.value = virtualPrompt || `Explica a ligação histórica de ${topic} com ${eras[state.currentEra].title}.`;
  questionInput.focus();
}

function renderCategorySections() {
  if (!categorySections) return;
  const eraKey = state.currentEra;
  const era = eras[eraKey];
  if (state.currentView === "learn") {
    categorySections.innerHTML = "";
    return;
  }
  if (state.currentView === "lesson") {
    categorySections.innerHTML = renderActiveLessonPanel();
    return;
  }
  if (state.currentView === "portal") {
    categorySections.innerHTML = renderEraPortal(eraKey);
    return;
  }
  if (state.currentView === "subpath") {
    categorySections.innerHTML = renderSubpathPortal(eraKey);
    return;
  }
  if (state.currentView === "timeline") {
    categorySections.innerHTML = renderTimelineView(eraKey);
    return;
  }
  if (state.currentView === "journey") {
    categorySections.innerHTML = renderGrandJourneyTimelineView();
    return;
  }
  const sections = getEraCurriculumSections(eraKey);
  const visibleSections = getVisibleCurriculumSections(eraKey, sections);
  categorySections.innerHTML = `
    ${state.currentView === "era" ? `
    <section class="era-world-screen" data-era-world="${escapeHtml(eraKey)}">
      <div class="era-world-hero">
        <div>
          <h2>${escapeHtml(era.title)}</h2>
          <p>${escapeHtml(buildEraHeroSummary(eraKey))}</p>
        </div>
      </div>
      ${renderEraHub(eraKey)}
    </section>
    ` : `
    <section class="selected-era-overview" aria-label="Resumo de ${escapeHtml(era.title)}">
      <div>
        <p class="topic-kicker">${escapeHtml(era.range)}</p>
        <h3>${escapeHtml(era.title)}</h3>
        <p>${escapeHtml(buildEraSummary(eraKey))}</p>
      </div>
      <div class="category-section-stats">
        ${era.stats.map((stat) => `<span>${escapeHtml(stat)}</span>`).join("")}
      </div>
    </section>
    ${renderEraHub(eraKey)}
    `}
    ${state.currentView === "era" ? "" : `
    ${renderSubpathTimelineHeader(eraKey, visibleSections)}
    ${state.currentSubpathId ? "" : renderActiveLessonPanel()}
    ${visibleSections
      .map((section) => {
        return `
          <section class="category-section active" data-era-section="${eraKey}" data-curriculum-section="${escapeHtml(section.id)}">
            <div class="category-section-header">
              <div>
                <p class="eyebrow">Secção</p>
                <h3>${escapeHtml(section.title)}</h3>
                <p>${escapeHtml(section.summary)}</p>
              </div>
              <span class="lesson-count">${section.lessons.length} lições</span>
            </div>
            <div class="timeline category-timeline" aria-label="Timeline de ${escapeHtml(section.title)}">
              ${renderLessonTimeline(section.lessons, eraKey)}
            </div>
          </section>
        `;
      })
      .join("")}
    `}
  `;
}

function renderEraPortal(eraKey) {
  const era = eras[eraKey];
  const portal = eraPortalFrames[eraKey] || {
    title: era.title,
    summary: buildEraSummary(eraKey),
    cta: "Entrar na Era"
  };

  return `
    <section class="era-portal-screen" data-era-world="${escapeHtml(eraKey)}">
      <div class="era-portal-content">
        <p class="eyebrow">${escapeHtml(era.range)}</p>
        <h2>${escapeHtml(portal.title)}</h2>
        <p>${escapeHtml(portal.summary)}</p>
        <button type="button" class="era-portal-cta" data-route="era">Entrar na Era</button>
      </div>
    </section>
  `;
}

function getVisibleCurriculumSections(eraKey, sections = getEraCurriculumSections(eraKey)) {
  if (!state.currentSubpathId) return sections;
  if (isWholeEraJourney(eraKey)) return sections;
  return sections.filter((section) => section.id === state.currentSubpathId);
}

function getSubpathLessons(eraKey, sections) {
  const lessons = sections.flatMap((section) => section.lessons);
  if (!isWholeEraJourney(eraKey)) return lessons;
  return [...lessons].sort((a, b) => {
    const dateDelta = getHistoricalDateOrder(a.date) - getHistoricalDateOrder(b.date);
    return dateDelta || a.index - b.index;
  });
}

function renderSubpathTimelineHeader(eraKey, sections) {
  if (!state.currentSubpathId || !sections.length) return "";
  const journey = getWholeEraJourney(eraKey);
  const lessons = getSubpathLessons(eraKey, sections);
  const title = isWholeEraJourney(eraKey)
    ? journey.title
    : sections[0].title;
  const summary = isWholeEraJourney(eraKey)
    ? journey.summary
    : sections[0].summary;
  return `
    <section class="subpath-timeline-hero" data-subpath-hero="${escapeHtml(state.currentSubpathId)}">
      <div>
        <p class="eyebrow">${escapeHtml(eras[eraKey].title)} · Mapa da jornada</p>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(summary)}</p>
      </div>
      <div class="subpath-hero-meta">
        <span>${lessons.length} momentos</span>
        <span>Pistas e escolhas</span>
        <span>Recompensa final</span>
      </div>
    </section>
  `;
}

function getSubpathFrame(eraKey) {
  const sections = getVisibleCurriculumSections(eraKey, getEraCurriculumSections(eraKey));
  const journey = getWholeEraJourney(eraKey);
  const lessons = getSubpathLessons(eraKey, sections);
  const title = isWholeEraJourney(eraKey)
    ? journey.title
    : sections[0]?.title || eras[eraKey].title;
  const summary = isWholeEraJourney(eraKey)
    ? journey.summary
    : sections[0]?.summary || buildEraSummary(eraKey);
  return { sections, lessons, title, summary };
}

function renderSubpathPortal(eraKey) {
  const era = eras[eraKey];
  const frame = getSubpathFrame(eraKey);

  return `
    <section class="subpath-portal-screen" data-era-world="${escapeHtml(eraKey)}" data-subpath-hero="${escapeHtml(state.currentSubpathId || "")}">
      <div class="subpath-portal-content">
        <p class="eyebrow">${escapeHtml(era.title)} · Porta narrativa</p>
        <h2>${escapeHtml(frame.title)}</h2>
        <p>${escapeHtml(frame.summary)}</p>
        <button type="button" class="era-portal-cta" data-route="timeline">Começar Jornada</button>
      </div>
    </section>
  `;
}

function renderTimelineView(eraKey) {
  const era = eras[eraKey];
  const { lessons, title, summary } = getSubpathFrame(eraKey);

  return `
    <section class="timeline-view-screen" data-era-world="${escapeHtml(eraKey)}" data-subpath-timeline="${escapeHtml(state.currentSubpathId || "")}">
      <header class="timeline-view-hero">
        <p class="eyebrow">${escapeHtml(era.title)} · Mapa da jornada</p>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(summary)}</p>
      </header>
      <div class="timeline-view-stage" aria-label="Timeline de ${escapeHtml(title)}">
        <div class="timeline-view-list">
          ${renderTimelineViewItems(lessons, eraKey)}
        </div>
      </div>
    </section>
  `;
}

function renderGrandJourneyTimelineView() {
  const lessons = getGrandJourneyLessons();
  return `
    <section class="timeline-view-screen grand-journey-screen" data-era-world="grand-journey" data-subpath-timeline="grand-journey">
      <header class="timeline-view-hero">
        <p class="eyebrow">Todas as eras · Grande campanha</p>
        <h2>Grande Jornada Histórica</h2>
        <p>Da Pré-História ao mundo contemporâneo, uma viagem contínua pelas transformações que mudaram a experiência humana.</p>
      </header>
      <div class="timeline-view-stage" aria-label="Timeline da Grande Jornada Histórica">
        <div class="timeline-view-list">
          ${renderTimelineViewItems(lessons, "", { showEra: true })}
        </div>
      </div>
    </section>
  `;
}

function getGrandJourneyLessons() {
  const eraOrder = Object.keys(eras);
  return eraOrder
    .flatMap((eraKey) => getEraLessons(eraKey))
    .sort((a, b) => {
      const dateDelta = getHistoricalDateOrder(a.date) - getHistoricalDateOrder(b.date);
      if (dateDelta) return dateDelta;
      const eraDelta = eraOrder.indexOf(a.eraKey) - eraOrder.indexOf(b.eraKey);
      if (eraDelta) return eraDelta;
      return a.index - b.index;
    });
}

function renderTimelineViewItems(lessons, eraKey, options = {}) {
  if (!lessons.length) {
    return `
      <p class="timeline-view-empty">Este percurso ainda está a ser preparado.</p>
    `;
  }

  return lessons
    .map((lesson, index) => {
      const itemEraKey = lesson.eraKey || eraKey;
      const lessonIntro = buildLessonIntroFrame(lesson);
      const displayTitle = getLessonDisplayTitle(lesson.title);
      const lessonStatus = getLessonStatus(lesson.id);
      return `
        <button class="timeline-view-item" type="button" data-timeline-lesson="${escapeHtml(lesson.id)}" data-status="${lessonStatus}" data-era="${escapeHtml(itemEraKey)}" data-section="${escapeHtml(lesson.sectionId || "")}" data-mood="${escapeHtml(lessonIntro.mood)}" data-theme="${lesson.category}" style="--step-index: ${index}">
          <span class="timeline-view-marker ${timelineCategoryIcons[lesson.category] || "flag"}" aria-hidden="true"></span>
          <span class="timeline-view-copy">
            <span>${escapeHtml(lesson.date)}</span>
            <strong>${escapeHtml(createPreview(displayTitle, 88))}</strong>
          </span>
          <span class="timeline-view-preview" aria-hidden="true">
            <span class="hover-visual"></span>
            <strong>${escapeHtml(createPreview(displayTitle, 70))}</strong>
            <p>${escapeHtml(createPreview(lessonIntro.line, 118))}</p>
            <small>Entrar neste momento</small>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderEraHub(eraKey) {
  const sections = getEraCurriculumSections(eraKey);
  const lessons = getEraLessons(eraKey);
  const cards = sections.map((section) => ({
    id: section.id,
    title: section.title,
    summary: section.summary,
    lessons: section.lessons.length,
    meta: "Abrir percurso"
  }));

  const wholeEraJourney = getWholeEraJourney(eraKey);
  if (wholeEraJourney) {
    cards.push({
      id: wholeEraJourney.id,
      title: wholeEraJourney.title,
      summary: wholeEraJourney.summary,
      lessons: lessons.length,
      meta: "Seguir a era completa"
    });
  }

  return `
    <section class="era-hub" data-era-hub="${escapeHtml(eraKey)}" aria-label="Hub de ${escapeHtml(eras[eraKey].title)}">
      <div class="era-hub-header">
        <div>
          <h3>${escapeHtml(eraKey === "antiga" ? "Escolhe a civilização" : "Escolhe a porta de entrada")}</h3>
        </div>
      </div>
      <div class="subpath-grid">
        ${cards.map((card) => `
          <button type="button" class="subpath-card ${state.currentSubpathId === card.id ? "active" : ""}" data-subpath="${escapeHtml(card.id)}">
            <span class="subpath-visual"></span>
            <strong>${escapeHtml(card.title)}</strong>
            <small>${escapeHtml(card.summary)}</small>
            <span>${escapeHtml(card.meta)}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function getExperienceFlow(flowId = state.currentFlowId) {
  return experienceFlows[flowId] || experienceFlows[defaultExperienceFlowId];
}

function getExperienceStep(stepId = state.currentStepId) {
  const flow = getExperienceFlow();
  return flow?.steps.find((step) => step.id === stepId) || flow?.steps.find((step) => step.id === flow.startStep);
}

function getStepView(step) {
  const viewByType = {
    lesson: "lesson",
    quiz: "quiz",
    source: "source",
    debate: "debate",
    mission: "mission",
    reward: "progress"
  };
  return viewByType[step?.type] || "learn";
}

function syncStepContext(step) {
  if (!step) return;
  const flow = getExperienceFlow();
  if (flow?.eraKey && flow.eraKey !== state.currentEra) renderEra(flow.eraKey);

  if (step.lessonId) {
    const lesson = getLessonById(step.lessonId);
    if (lesson) {
      state.currentLessonId = lesson.id;
      state.currentTimelineLesson = lesson.index;
      state.currentLessonMode = "story";
      state.currentLessonStoryBlockIndex = 0;
      updateLessonProgress(lesson.id, { viewed: true });
      renderCategorySections();
    }
  }

  if (step.quizId) {
    const quizIndex = getEraQuiz(state.currentEra).findIndex((quiz) => quiz.id === step.quizId);
    if (quizIndex >= 0) state.currentQuizIndex = quizIndex;
    renderQuiz();
  }

  if (step.sourceId) {
    const sourceIndex = getEraSources(state.currentEra).findIndex((source) => source.id === step.sourceId);
    if (sourceIndex >= 0) state.currentSourceIndex = sourceIndex;
    renderSource("origin");
  }

  if (step.debateId) {
    const debateIndex = getDebatesForEra(state.currentEra).findIndex((debate) => debate.id === step.debateId);
    if (debateIndex >= 0) renderDebate(debateIndex);
  }
}

function renderCurrentStep() {
  const step = getExperienceStep();
  if (!step) return;
  syncStepContext(step);

  if (step.type === "reward") {
    const rewardKey = `${state.currentFlowId}:${step.id}`;
    if (!state.awardedFlowRewards.includes(rewardKey)) {
      state.awardedFlowRewards.push(rewardKey);
      addXp(step.xp || 0, `Ganhaste ${step.xp || 0} XP por concluir ${getExperienceFlow().title}.`);
    }
  }

  navigateTo(getStepView(step), {
    era: getExperienceFlow().eraKey || state.currentEra,
    lessonId: step.lessonId || state.currentLessonId
  });
}

function goToNextStep() {
  const step = getExperienceStep();
  if (!step?.next) {
    navigateTo("progress");
    return;
  }
  state.currentStepId = step.next;
  renderCurrentStep();
}

function renderLessonTimeline(lessons, eraKey) {
  return lessons
    .map((lesson) => {
      const selected = state.currentLessonId === lesson.id;
      const lessonIntro = buildLessonIntroFrame(lesson);
      const displayTitle = getLessonDisplayTitle(lesson.title);
      const lessonStatus = getLessonStatus(lesson.id);
      return `
      <article class="timeline-item is-collapsed ${selected ? "selected-lesson" : ""}" data-status="${lessonStatus}" data-era="${eraKey}" data-section="${escapeHtml(lesson.sectionId || "")}" data-mood="${escapeHtml(lessonIntro.mood)}" data-content-id="${escapeHtml(lesson.id)}" data-theme="${lesson.category}" data-lesson="${lesson.index}">
        <button class="timeline-marker ${timelineCategoryIcons[lesson.category] || "flag"}" type="button" aria-label="Abrir lição: ${escapeHtml(lesson.title)}"></button>
        <aside class="timeline-hover-card" aria-hidden="true">
          <span class="hover-visual"></span>
          <strong>${escapeHtml(createPreview(displayTitle, 64))}</strong>
          <p>${escapeHtml(createPreview(lessonIntro.line, 112))}</p>
          <small>Entrar neste momento</small>
        </aside>
        <button class="timeline-year" type="button">${escapeHtml(lesson.date)}</button>
        <div class="timeline-content">
          <p class="item-preview">${escapeHtml(createPreview(displayTitle, 118))}</p>
        </div>
      </article>
    `;
    })
    .join("");
}

function getLessonStatus(lessonId) {
  const lessonState = progress.lessonProgress?.[lessonId];
  if (lessonState?.completed) return "completed";
  if (lessonState?.viewed || state.currentLessonId === lessonId) return "active";
  return "todo";
}

function selectTimelineLesson(eraKey, lessonIndex) {
  const changedEra = state.currentEra !== eraKey;
  const lesson = getEraLessons(eraKey).find((item) => item.index === lessonIndex);
  renderEra(eraKey);
  state.currentTimelineLesson = lessonIndex;
  state.currentLessonId = lesson?.id || "";
  state.currentLessonStoryBlockIndex = 0;
  const flowLessonStep = getExperienceFlow()?.steps.find((step) => step.lessonId === state.currentLessonId);
  if (flowLessonStep) state.currentStepId = flowLessonStep.id;
  state.currentLessonMode = "intro";
  state.currentPostStoryStep = "reflection";
  state.currentLessonQuizChoice = null;
  updateLessonProgress(state.currentLessonId, { viewed: true });
  renderCategorySections();
  navigateTo("lesson", { lessonId: state.currentLessonId }, { replace: state.currentView === "lesson" });
  awardBadge("timeline-reader");
  addXp(changedEra ? 10 : 6, changedEra ? `Abriste uma lição em ${eras[eraKey].title}.` : "Ganhaste 6 XP por abrir uma lição da timeline.");
}

function openLessonById(lessonId) {
  const lesson = getLessonById(lessonId);
  if (!lesson) return;
  selectTimelineLesson(lesson.eraKey, lesson.index);
}

function runLessonAction(action, nextLessonId = "") {
  const lesson = getLessonById(state.currentLessonId) || getEraLessons(state.currentEra)[0];
  if (!lesson) return;

  action = lessonModeAliases[action] || action;

  if (["story", ...postStoryModes].includes(action)) {
    state.currentLessonMode = action;
    if (state.currentLessonMode === "story") state.currentLessonStoryBlockIndex = 0;
    if (postStoryModes.includes(state.currentLessonMode)) state.currentPostStoryStep = state.currentLessonMode;
    if (action === "challenge") state.currentLessonQuizChoice = null;
    if (state.currentLessonMode === "reflection") updateLessonProgress(lesson.id, { viewed: true, storyCompleted: true });
    renderCategorySections();
    addXp(state.currentLessonMode === "story" ? 2 : 6, `Abriste ${state.currentLessonMode === "story" ? "a descoberta" : "uma etapa"} da lição ativa.`);
    return;
  }

  if (action === "story-next") {
    goToNextStoryBlock({ updateLessonProgress, renderCategorySections });
    return;
  }

  if (action === "story-prev") {
    goToPreviousStoryBlock({ updateLessonProgress, renderCategorySections });
    return;
  }

  if (action === "mission") {
    state.currentLessonMode = "mission";
    updateLessonProgress(lesson.id, { viewed: true, debated: true });
    renderCategorySections();
    navigateTo("mission", { era: lesson.eraKey });
    return;
  }

  if (action === "complete") {
    updateLessonProgress(lesson.id, { viewed: true, completed: true });
    renderCategorySections();
    addXp(24, "Concluíste uma lição.");
    navigateTo("progress");
    return;
  }

  if (action === "timeline") {
    updateLessonProgress(lesson.id, { viewed: true, completed: true });
    renderCategorySections();
    addXp(24, "Concluíste uma lição.");
    navigateTo("timeline", { era: lesson.eraKey, subpathId: state.currentSubpathId });
    return;
  }

  if (action === "next-lesson") {
    updateLessonProgress(lesson.id, { viewed: true, completed: true });
    addXp(24, "Concluíste uma lição.");
    state.currentLessonMode = "intro";
    state.currentPostStoryStep = "reflection";
    state.currentLessonStoryBlockIndex = 0;
    state.currentLessonQuizChoice = null;
    openLessonById(nextLessonId || getNextLesson(lesson.eraKey, lesson.id)?.id);
    return;
  }

  if (action === "next") {
    if (state.currentLessonMode === "story" || state.currentLessonMode === "understand") {
      goToNextStoryBlock({ updateLessonProgress, renderCategorySections });
      return;
    }
    if (state.currentFlowId) {
      const nextMode = getNextLessonMode(state.currentLessonMode);
      if (state.currentView === "lesson" && nextMode) {
        state.currentLessonMode = nextMode;
        if (postStoryModes.includes(nextMode)) state.currentPostStoryStep = nextMode;
        if (nextMode === "challenge") state.currentLessonQuizChoice = null;
        renderCategorySections();
        return;
      }
      goToNextStep();
      return;
    }
    const nextMode = getNextLessonMode(state.currentLessonMode);
    if (nextMode) {
      state.currentLessonMode = nextMode;
      if (postStoryModes.includes(nextMode)) state.currentPostStoryStep = nextMode;
      if (nextMode === "challenge") state.currentLessonQuizChoice = null;
      renderCategorySections();
      if (nextMode === "mission") navigateTo("mission", { era: lesson.eraKey });
      if (nextMode === "reward") navigateTo("lesson", { lessonId: lesson.id });
      return;
    }
    updateLessonProgress(lesson.id, { viewed: true, completed: true });
    state.currentLessonMode = "story";
    state.currentLessonStoryBlockIndex = 0;
    state.currentPostStoryStep = "reflection";
    state.currentLessonQuizChoice = null;
    openLessonById(nextLessonId || getNextLesson(lesson.eraKey, lesson.id)?.id);
  }
}

function getNextLessonMode(mode) {
  const normalizedMode = lessonModeAliases[mode] || mode;
  const flow = ["story", ...postStoryModes];
  const index = flow.indexOf(normalizedMode);
  if (index < 0 || index === flow.length - 1) return "";
  return flow[index + 1];
}

function renderEra(key, options = {}) {
  const changedEra = state.currentEra !== key;
  state.currentEra = key;
  const era = eras[key];
  state.currentQuizIndex = 0;
  state.currentSourceIndex = 0;
  state.currentCuriosityIndex = getDailyCuriosityIndex(key);
  if (changedEra) state.currentSubpathId = "";
  if (changedEra) state.currentTimelineLesson = 0;
  if (changedEra) state.currentLessonId = "";
  if (changedEra) state.currentLessonMode = "story";
  if (changedEra) state.currentLessonStoryBlockIndex = 0;
  if (changedEra) state.currentPostStoryStep = "reflection";
  if (changedEra) state.currentLessonQuizChoice = null;
  eraButtons.forEach((button) => button.classList.toggle("active", button.dataset.era === key));
  if (state.currentView === "home") {
    eraRange.textContent = "Uma jornada cinematográfica pela humanidade";
    eraTitle.textContent = "História Viva";
    eraSummary.textContent = "Entra em mundos históricos, segue pistas, interpreta vestígios e descobre o que mudou a vida humana.";
  } else {
    eraRange.textContent = era.range;
    eraTitle.textContent = era.title;
    eraSummary.textContent = buildEraSummary(key);
  }
  era.stats.forEach((value, index) => {
    stats[index].textContent = value;
  });

  if (!options.skipCategoryRender) renderCategorySections();

  renderSource("origin");
  renderExplore();
  renderQuiz();
  renderCuriosity();
  renderDebate();
  renderProgress();
  renderJourneyOverview();
}

function renderEraData(key) {
  const era = eras[key];
  if (!era) return;
  eraButtons.forEach((button) => button.classList.toggle("active", button.dataset.era === key));
  stats.forEach((stat, index) => {
    stat.textContent = era.stats[index] || "";
  });
  renderSource("origin");
  renderExplore();
  renderQuiz();
  renderCuriosity();
  renderDebate();
  renderProgress();
  renderJourneyOverview();
}

function renderJourneyOverview() {
  if (!journeyTitle || !journeySummary) return;
  const flow = getExperienceFlow();
  const step = getExperienceStep();
  const lesson = getLessonById(state.currentLessonId) || getEraLessons(state.currentEra)[0];
  if (!lesson) return;
  const stepIndex = flow?.steps.findIndex((item) => item.id === state.currentStepId) ?? 0;
  const totalSteps = flow?.steps.length || 1;
  const progressPercent = Math.max(0, ((stepIndex + 1) / totalSteps) * 100);
  journeyTitle.textContent = flow ? flow.title : (state.currentLessonId ? "Continua a lição ativa" : "Começa o percurso guiado");
  journeySummary.textContent = step
    ? `${lesson.title}: próximo passo, ${step.label || step.type}.`
    : `${lesson.title}: segue o roteiro lição, quiz, fonte, debate, missão e progresso.`;
  if (journeyProgressLabel) journeyProgressLabel.textContent = `Progresso: ${Math.min(stepIndex + 1, totalSteps)}/${totalSteps} passos`;
  if (journeyProgressBar) journeyProgressBar.style.width = `${progressPercent}%`;
  if (continueJourney) {
    continueJourney.textContent = step ? `Continuar: ${step.label || step.type}` : "Começar lição";
  }
}

function getSources() {
  return getEraSources(state.currentEra);
}

function getActiveSource() {
  const sources = getSources();
  return sources[state.currentSourceIndex % sources.length];
}

function getDailyCuriosityIndex(key) {
  const curiosities = eras[key].curiosities || [];
  if (!curiosities.length) return 0;
  return questionSeed(`${todayKey}-${key}`) % curiosities.length;
}

function renderCuriosity(randomize = false) {
  const curiosities = eras[state.currentEra].curiosities || [];
  if (!curiosities.length || !curiosityText) return;

  if (randomize && curiosities.length > 1) {
    let nextIndex = Math.floor(Math.random() * curiosities.length);
    if (nextIndex === state.currentCuriosityIndex) {
      nextIndex = (nextIndex + 1) % curiosities.length;
    }
    state.currentCuriosityIndex = nextIndex;
  }

  if (curiosityTitle) {
    curiosityTitle.textContent = `Sabias que? ${state.currentCuriosityIndex + 1}/${curiosities.length}`;
  }
  curiosityText.textContent = curiosities[state.currentCuriosityIndex];
}

function renderSource(part = "origin") {
  const source = getActiveSource();
  const sources = getSources();
  sourceText.textContent = source.text;
  sourceAnswer.innerHTML = `
    ${escapeHtml(source[part])} Fonte ${state.currentSourceIndex + 1}/${sources.length}.
    <span class="source-lens">${escapeHtml(buildSourceLens(source))}</span>
    ${renderRelatedLinks(source.related)}
  `;
}

function buildTimelineHint(event, category = "") {
  if (state.currentTimelineZoom !== "detalhado") return "";
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

function renderExplore() {
  const entries = getEraExploreEntries(state.currentEra, state.currentExplore);
  exploreTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.explore === state.currentExplore);
  });
  exploreList.innerHTML = entries
    .map(({ id, title, description, related }) => `
      <article class="explore-item is-collapsed" data-content-id="${escapeHtml(id)}">
        <strong>${escapeHtml(title)}</strong>
        <p class="item-preview">${escapeHtml(createPreview(description, 132))}</p>
        <div class="card-detail">
          <p>${escapeHtml(description)}</p>
          ${renderInsight(title, description)}
          ${renderRelatedLinks(related)}
        </div>
        ${expandableButton(false)}
      </article>
    `)
    .join("");
}

function renderQuiz() {
  const quizBank = getEraQuiz(state.currentEra);
  const quiz = quizBank[state.currentQuizIndex % quizBank.length];
  const typeLabel = quizTypeLabels[quiz.type] || "Escolha múltipla";
  const related = renderRelatedLinks(quiz.related);
  quizQuestion.textContent = `[${quiz.difficulty} · ${typeLabel}] ${quiz.question}`;
  quizFeedback.innerHTML = `<span class="quiz-lens">${escapeHtml(buildQuizLens(quiz))}</span>${related}`;
  quizOptions.innerHTML = "";
  score.textContent = `${state.quizCorrect}/${state.quizAnswered} · série ${state.quizCorrectStreak}`;

  quiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuiz(index, button));
    quizOptions.append(button);
  });
}

function renderDebate(index = state.currentDebateIndex) {
  if (!debatePicker) return;
  const eraDebates = getDebatesForEra(state.currentEra);
  state.currentDebateIndex = index >= eraDebates.length ? 0 : index;
  const debate = eraDebates[state.currentDebateIndex];

  debatePicker.innerHTML = eraDebates
    .map((item, debateIndex) => `
      <button class="debate-tab ${debateIndex === state.currentDebateIndex ? "active" : ""}" type="button" data-debate="${debateIndex}">
        ${item.title}
      </button>
    `)
    .join("");

  debateContext.textContent = debate.context;
  debateTitle.textContent = debate.title;
  debateIntro.textContent = debate.intro;
  debateSideALabel.textContent = debate.sideA.label;
  debateSideBLabel.textContent = debate.sideB.label;
  debateSideA.innerHTML = debate.sideA.arguments.map((argument) => `<li>${argument}</li>`).join("");
  debateSideB.innerHTML = debate.sideB.arguments.map((argument) => `<li>${argument}</li>`).join("");
  chooseSideA.textContent = `Defender: ${debate.sideA.label}`;
  chooseSideB.textContent = `Defender: ${debate.sideB.label}`;
  debateSummary.textContent = debate.balanced;
  debateSummary.classList.remove("is-updated");
  debateSummary.closest(".debates-panel")?.removeAttribute("data-debate-choice");

  debatePicker.querySelectorAll(".debate-tab").forEach((button) => {
    button.addEventListener("click", () => renderDebate(Number(button.dataset.debate)));
  });
}

function renderMission() {
  if (!missionTitle || !missionChoices) return;
  const lesson = getLessonById(state.currentLessonId) || getEraLessons(state.currentEra)[0];
  const era = eras[state.currentEra];
  const related = lesson?.related?.slice(0, 3) || era.stats || [];

  missionTitle.textContent = lesson ? lesson.title : `Missao em ${era.title}`;
  missionContext.textContent = lesson ? `${lesson.date} · ${timelineCategoryLabels[lesson.category] || "Contexto"}` : era.range;
  missionBrief.textContent = lesson
    ? `Estas dentro de uma situacao historica ligada a ${lesson.title}. Decide como interpretar o contexto: pela evidencia, pelo conflito politico ou pelas consequencias sociais.`
    : `Explora ${era.title} como uma missao narrativa: contexto, escolha e consequencia.`;
  missionResult.parentElement?.querySelector(".mission-next-actions")?.remove();
  missionChoices.innerHTML = [
    ["evidence", "Seguir a evidencia", `Procuras fontes e cruzas sinais: ${related[0] || "contexto"}.`],
    ["power", "Analisar o poder", `Perguntas quem ganha, quem perde e que instituicoes entram em tensao.`],
    ["legacy", "Ver consequencias", `Ligas a decisao a mudancas de longo prazo e memoria historica.`]
  ].map(([choice, label, detail]) => `
    <button type="button" data-mission-choice="${choice}">
      <strong>${escapeHtml(label)}</strong>
      <span>${escapeHtml(detail)}</span>
    </button>
  `).join("");
  missionResult.textContent = "Escolhe uma decisao para veres a consequencia historica.";
  missionResult.classList.remove("is-updated");
  missionResult.insertAdjacentHTML("afterend", `
    <div class="mission-next-actions">
      <button type="button" data-route="lesson">Voltar à lição</button>
      <button type="button" data-flow-action="next">Concluir e ganhar XP</button>
      <button type="button" data-route="progress">Ver progresso</button>
    </div>
  `);
}

function chooseMissionPath(choice) {
  const lesson = getLessonById(state.currentLessonId) || getEraLessons(state.currentEra)[0];
  const title = lesson?.title || eras[state.currentEra].title;
  const outcomes = {
    evidence: `Boa escolha: em ${title}, a evidencia obriga-te a separar facto, interpretacao e silencio das fontes.`,
    power: `A leitura pelo poder mostra que ${title} envolve interesses, hierarquias e decisoes com custos diferentes para cada grupo.`,
    legacy: `A leitura pelas consequencias liga ${title} ao que muda depois: instituicoes, memoria, desigualdades e novas perguntas.`
  };
  missionChoices.querySelectorAll("[data-mission-choice]").forEach((button) => {
    const isSelected = button.dataset.missionChoice === choice;
    button.classList.toggle("is-selected", isSelected);
    button.classList.toggle("is-muted", !isSelected);
  });
  missionResult.textContent = outcomes[choice] || outcomes.evidence;
  pulseClass(missionResult, "is-updated", 520);
  addXp(14, "Ganhaste 14 XP por completar uma decisao de missao historica.");
  markXpMotion();
}

function chooseDebatePosition(position) {
  const debate = getDebatesForEra(state.currentEra)[state.currentDebateIndex];
  debateSummary.closest(".debates-panel")?.setAttribute("data-debate-choice", position);
  if (position === "a") {
    debateSummary.textContent = `${debate.sideA.summary} Resumo equilibrado: ${debate.balanced}`;
  } else if (position === "b") {
    debateSummary.textContent = `${debate.sideB.summary} Resumo equilibrado: ${debate.balanced}`;
  } else {
    debateSummary.closest(".debates-panel")?.removeAttribute("data-debate-choice");
    debateSummary.textContent = `Posição equilibrada: ${debate.balanced}`;
  }
  pulseClass(debateSummary, "is-updated", 520);
  addXp(12, "Ganhaste 12 XP por participar num debate histórico.");
  markXpMotion();
}

function getQuizXp(quiz, wasCorrect) {
  if (!wasCorrect) return 8;
  const difficultyXp = {
    "fácil": 18,
    "média": 26,
    "difícil": 36
  };
  return (difficultyXp[quiz.difficulty] || 22) + Math.min(state.quizCorrectStreak * 2, 12);
}

function legacyShowSection(section) {
  const nextSection = routeConfig[section] ? section : "overview";
  const nextRoute = routeConfig[nextSection];
  const previousView = state.currentView;
  state.currentView = nextSection;
  state.currentExperience = nextRoute.experience;
  document.body.dataset.view = nextSection;
  document.body.dataset.experience = nextRoute.experience;
  appShell?.setAttribute("data-experience", nextRoute.experience);

  screenController.show(nextSection);
  markRouteMotion(previousView, nextSection);

  document.title = `${nextRoute.title} | História Viva`;

  if (window.location.hash !== routeHash(nextSection)) {
    window.history.pushState({ view: nextSection }, "", routeHash(nextSection));
  }
}

function navigateTo(view, params = {}, options = {}) {
  const nextView = normalizeView(view);
  if (isGuardedBootNavigation(nextView)) {
    navigateTo("home", {}, { replace: true, preserveScroll: true });
    return;
  }
  const nextRoute = routeConfig[nextView];
  const nextEra = params.era && eras[params.era] ? params.era : "";
  const nextLessonId = params.lessonId || "";
  const nextSubpathId = params.subpathId || "";
  const previousView = state.currentView;
  const shouldResetScroll = previousView !== nextView && options.preserveScroll !== true;
  const shouldRenderCategoryView = ["portal", "era", "timeline", "subpath", "journey", "lesson"].includes(nextView);
  state.currentView = nextView;

  if (nextEra && nextEra !== state.currentEra) renderEra(nextEra, { skipCategoryRender: true });
  if (nextView === "learn") {
    state.selectedEraForHub = "";
    state.currentSubpathId = "";
  }
  if (nextView === "portal") {
    state.selectedEraForHub = nextEra || state.currentEra;
    state.currentSubpathId = "";
  }
  if (nextView === "era") {
    state.selectedEraForHub = nextEra || state.currentEra;
    state.currentSubpathId = "";
  }
  if (nextView === "timeline") {
    state.selectedEraForHub = nextEra || state.currentEra;
    if (nextSubpathId) state.currentSubpathId = nextSubpathId;
  }
  if (nextView === "subpath") {
    state.selectedEraForHub = nextEra || state.currentEra;
    if (nextSubpathId) state.currentSubpathId = nextSubpathId;
  }
  if (nextView === "journey") {
    state.selectedEraForHub = "";
    state.currentSubpathId = "grand-journey";
  }

  if (nextLessonId) {
    const lesson = getLessonById(nextLessonId);
    if (lesson) {
      if (lesson.eraKey !== state.currentEra) renderEra(lesson.eraKey);
      state.currentTimelineLesson = lesson.index;
      state.currentLessonId = lesson.id;
      updateLessonProgress(lesson.id, { viewed: true });
      if (!params.mode) state.currentLessonMode = "intro";
    }
  }

  if (params.mode) state.currentLessonMode = params.mode;
  state.currentExperience = nextRoute.experience;
  if (shouldRenderCategoryView) renderCategorySections();
  renderApp();
  markRouteMotion(previousView, nextView);

  if (options.updateHistory === false) {
    if (shouldResetScroll) window.requestAnimationFrame(() => window.scrollTo(0, 0));
    return;
  }
  const nextHash = routeHash(nextView, {
    era: nextEra || state.currentEra,
    lessonId: state.currentLessonId,
    subpathId: state.currentSubpathId
  });
  if (window.location.hash !== nextHash) {
    window.history[options.replace ? "replaceState" : "pushState"]({ view: nextView }, "", nextHash);
  }
  if (shouldResetScroll) window.requestAnimationFrame(() => window.scrollTo(0, 0));
}

function renderApp() {
  const nextRoute = routeConfig[state.currentView] || routeConfig.home;
  renderJourneyOverview();
  if (state.currentView === "home") {
    eraRange.textContent = "Uma jornada cinematográfica pela humanidade";
    eraTitle.textContent = "História Viva";
    eraSummary.textContent = "Entra em mundos históricos, segue pistas, interpreta vestígios e descobre o que mudou a vida humana.";
  }
  document.body.dataset.view = state.currentView;
  document.body.dataset.experience = nextRoute.experience;
  appShell?.setAttribute("data-experience", nextRoute.experience);
  screenBackButton?.classList.toggle("visible", state.currentView !== "home");

  screenController.show(nextRoute.section);

  if (state.currentView === "mission") renderMission();
  document.title = `${nextRoute.title} | Historia Viva`;
}

function showSection(section) {
  markUserNavigationIntent();
  const scopedSections = ["explore", "source", "quiz", "debate", "mission"];
  navigateTo(section, scopedSections.includes(section) ? { era: state.currentEra } : {});
}

function answerQuiz(index, selectedButton) {
  const quizBank = getEraQuiz(state.currentEra);
  const quiz = quizBank[state.currentQuizIndex % quizBank.length];
  const related = renderRelatedLinks(quiz.related);
  const buttons = [...quizOptions.querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
  });

  state.quizAnswered += 1;
  if (index === quiz.answer) {
    state.quizCorrect += 1;
    state.quizCorrectStreak += 1;
    selectedButton.classList.add("correct");
    const earnedXp = getQuizXp(quiz, true);
    quizFeedback.innerHTML = `Certo. ${escapeHtml(quiz.explanation)} ${escapeHtml(buildQuizLens(quiz))} Série atual: ${state.quizCorrectStreak}. +${earnedXp} XP. ${related}`;
    awardBadge("quiz-correct");
    addXp(earnedXp, `Ganhaste ${earnedXp} XP por uma resposta certa de dificuldade ${quiz.difficulty}.`);
    markXpMotion();
  } else {
    state.quizCorrectStreak = 0;
    selectedButton.classList.add("wrong");
    buttons[quiz.answer].classList.add("correct");
    const earnedXp = getQuizXp(quiz, false);
    quizFeedback.innerHTML = `Quase. A melhor resposta é “${escapeHtml(quiz.options[quiz.answer])}”. ${escapeHtml(quiz.explanation)} ${escapeHtml(buildQuizLens(quiz))} A série de acertos voltou a 0. +${earnedXp} XP por tentares. ${related}`;
    addXp(earnedXp, `Ganhaste ${earnedXp} XP por treinar o quiz.`);
    markXpMotion();
  }
  score.textContent = `${state.quizCorrect}/${state.quizAnswered} · série ${state.quizCorrectStreak}`;
  state.currentQuizIndex = (state.currentQuizIndex + 1) % quizBank.length;
  window.setTimeout(renderQuiz, 4200);
}

function addMessage(kind, text) {
  const article = document.createElement("article");
  article.className = `message ${kind}`;
  const speaker = kind === "user" ? "Tu" : "Historiador";
  const label = document.createElement("strong");
  const paragraph = document.createElement("p");
  label.textContent = speaker;
  paragraph.textContent = text;
  article.append(label, paragraph);
  chatWindow.append(article);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

const answerTopics = [
  {
    keywords: ["roma", "romano", "romana", "império romano", "imperio romano"],
    title: "a queda de Roma",
    response:
      "A queda do Império Romano do Ocidente, em 476, não teve uma causa única. Podemos falar de pressão militar de povos germânicos, crise política, dificuldades fiscais, dependência de exércitos federados, instabilidade interna e divisão entre Oriente e Ocidente. Uma boa resposta histórica deve evitar a ideia de que Roma simplesmente “caiu de repente”: foi um processo longo de transformação."
  },
  {
    keywords: ["egito", "egipto", "faraó", "farao", "pirâmide", "piramide"],
    title: "o Egito antigo",
    response:
      "No Egito antigo, o poder do faraó ligava política, religião e administração. O Nilo foi essencial porque organizava agricultura, calendário, impostos e transportes. Para explicar este tema, vale comparar a autoridade religiosa do faraó com a capacidade prática do Estado de controlar trabalho, terra e excedentes."
  },
  {
    keywords: ["grécia", "grecia", "atenas", "esparta", "democracia"],
    title: "a Grécia antiga",
    response:
      "Na Grécia antiga, é importante distinguir as cidades-Estado. Atenas ficou associada à democracia direta, mas essa participação excluía mulheres, escravizados e estrangeiros. Esparta organizava-se de forma militarizada e oligárquica. A comparação entre Atenas e Esparta ajuda a perceber que “Grécia” não era um Estado único."
  },
  {
    keywords: ["idade média", "idade media", "feudal", "feudalismo", "senhorio", "vassalagem"],
    title: "a sociedade medieval",
    response:
      "A sociedade medieval não funcionava igual em todos os lugares, mas muitas regiões tinham relações de dependência entre senhores, camponeses e elites guerreiras. O feudalismo é útil como conceito, desde que não seja tratado como uma regra rígida. Para responder bem, fala de terra, proteção, obrigações, rendas e poder local."
  },
  {
    keywords: ["peste negra", "peste", "pandemia medieval"],
    title: "a Peste Negra",
    response:
      "A Peste Negra, a partir de 1347 na Europa, provocou uma enorme crise demográfica. A falta de mão de obra alterou salários, relações entre senhores e camponeses, práticas religiosas e medos coletivos. Não foi apenas uma doença: foi também uma transformação social e económica."
  },
  {
    keywords: ["descobrimentos", "expansão marítima", "expansao maritima", "vasco da gama", "caravela"],
    title: "a expansão marítima",
    response:
      "A expansão marítima portuguesa ligou interesses comerciais, conhecimento náutico, rivalidade política e objetivos religiosos. Também teve consequências violentas: conquista, escravização, exploração e mudanças profundas nas sociedades contactadas. Uma resposta equilibrada deve incluir tanto inovação e comércio como dominação colonial."
  },
  {
    keywords: ["25 de abril", "abril", "ditadura", "estado novo", "salazar", "salazarismo"],
    title: "o 25 de Abril e o Estado Novo",
    response:
      "O 25 de Abril de 1974 derrubou a ditadura do Estado Novo em Portugal. A revolução abriu caminho à democracia, ao fim da censura, à legalização de partidos e ao processo de descolonização. Para explicar a sua importância, liga repressão política, guerra colonial, ação militar e mobilização popular."
  },
  {
    keywords: ["pré-história", "pre-historia", "prehistoria", "neolítico", "neolitico", "revolução neolítica", "revolucao neolitica", "paleolítico", "paleolitico", "mesolítico", "mesolitico"],
    title: "a Pré-História",
    response:
      "Na Pré-História estudamos sociedades sem escrita através de vestígios materiais: ferramentas, ossadas, pinturas, sepulturas e restos de habitação. Na História Viva, a progressão é simples: Paleolítico é sobreviver, Mesolítico é adaptar e Revolução Neolítica é construir aldeias, agricultura, metais, trocas e as bases das civilizações."
  },
  {
    keywords: ["revolução francesa", "revolucao francesa", "direitos do homem", "bastilha"],
    title: "a Revolução Francesa",
    response:
      "A Revolução Francesa começou em 1789 e transformou a linguagem política moderna: cidadania, soberania nacional, direitos e constituição ganharam força. Mas também teve conflitos, violência e exclusões. Para responder bem, convém separar causas económicas, sociais, políticas e culturais."
  },
  {
    keywords: ["revolução industrial", "revolucao industrial", "industrialização", "industrializacao", "fábrica", "fabrica"],
    title: "a Revolução Industrial",
    response:
      "A Revolução Industrial transformou a produção com máquinas, fábricas e novas fontes de energia. Isso acelerou urbanização, mudou ritmos de trabalho, criou novas classes sociais e aumentou impactos ambientais. Não foi só uma mudança técnica: foi uma mudança profunda na vida quotidiana."
  },
  {
    keywords: ["lua", "homem foi a lua", "homem foi à lua", "apollo", "apollo 11", "apolo", "apolo 11", "armstrong", "buzz aldrin"],
    title: "a chegada do homem à Lua",
    response:
      "O primeiro ser humano a pisar a Lua foi Neil Armstrong, em 20 de julho de 1969, durante a missão Apollo 11 dos Estados Unidos. Buzz Aldrin também caminhou na superfície lunar, enquanto Michael Collins ficou em órbita no módulo de comando. Este acontecimento é importante no contexto da Guerra Fria, porque fazia parte da corrida espacial entre os Estados Unidos e a União Soviética."
  }
];


function findTopic(question) {
  const normalizedQuestion = normalizeText(question);
  return answerTopics.find((topic) =>
    topic.keywords.some((keyword) => normalizedQuestion.includes(normalizeText(keyword)))
  );
}

function detectIntent(question) {
  const normalizedQuestion = normalizeText(question);
  if (["compara", "diferença", "diferenca", "versus", "vs"].some((word) => normalizedQuestion.includes(word))) return "comparison";
  if (["porquê", "porque", "causa", "causas", "motivo"].some((word) => normalizedQuestion.includes(word))) return "cause";
  if (["fonte", "documento", "prova", "evidencia", "evidência"].some((word) => normalizedQuestion.includes(word))) return "source";
  if (["e se", "imagina", "simula", "roleplay", "conversa com", "debate"].some((word) => normalizedQuestion.includes(word))) return "simulation";
  return "explanation";
}

function rememberQuestion(question, topicTitle) {
  progress.memory.unshift({
    era: state.currentEra,
    topic: topicTitle || eras[state.currentEra].title,
    question
  });
  progress.memory = progress.memory.slice(0, 3);
  awardBadge("first-question");
  addXp(18, "Ganhaste 18 XP por aprofundar uma pergunta.");
}

function buildContextualFrame(intent, era, question) {
  const lastRelated = progress.memory.find((entry) => entry.era === state.currentEra);
  const memoryLine = lastRelated ? `Como na tua pergunta anterior sobre ${lastRelated.topic}, ` : "";

  if (intent === "comparison") {
    return `${memoryLine}para comparar bem, usa três critérios: poder, grupos sociais e consequências. Em ${era.title}, isso ajuda a evitar respostas vagas e mostra o que muda de um caso para outro.`;
  }
  if (intent === "cause") {
    return `${memoryLine}pensa em camadas de causa: fatores imediatos, tensões acumuladas e consequências de médio prazo. Em ${era.title}, raramente há uma explicação única.`;
  }
  if (intent === "source") {
    return `${memoryLine}lê a fonte perguntando quem fala, com que objetivo e o que fica de fora. Depois cruza a fonte com o contexto de ${era.range}.`;
  }
  if (intent === "simulation") {
    return `Vamos entrar em modo narrativo. Eu representaria a situação como uma cena histórica curta, mas manteria um pé na evidência: personagens plausíveis, conflito claro e uma nota final sobre o que é facto e o que é reconstrução.`;
  }
  if (question.length < 22) {
    return `A tua pergunta é curta, por isso começo pelo essencial e deixo um caminho para aprofundar.`;
  }
  return `Vou responder ligando contexto, atores e consequência, para não ficar só numa definição.`;
}

const eraConnections = {
  prehistoria: {
    compareEra: "antiga",
    bridge: "A passagem da Pré-História para a Antiguidade ajuda a perceber como excedentes, escrita e cidades transformaram autoridade dispersa em administração estatal.",
    related: ["sedentarização", "fontes materiais", "origem das desigualdades"]
  },
  antiga: {
    compareEra: "medieval",
    bridge: "Comparar a Antiguidade com a Idade Média mostra que impérios centralizados não desapareceram simplesmente: muitas práticas de fiscalidade, religião e poder foram adaptadas por reinos, cidades e igrejas.",
    related: ["cidadania", "império", "religião e política"]
  },
  medieval: {
    compareEra: "moderna",
    bridge: "A ligação com a Época Moderna está na passagem de poderes locais e redes urbanas para Estados mais fiscais, impérios marítimos e circulação impressa de ideias.",
    related: ["senhorio", "cidades medievais", "cruzadas e comércio"]
  },
  moderna: {
    compareEra: "contemporanea",
    bridge: "A Época Moderna prepara vários problemas contemporâneos: colonialismo, escravatura atlântica, Estado burocrático, ciência experimental e linguagem de reforma.",
    related: ["colonialismo", "Reforma religiosa", "ciência moderna"]
  },
  contemporanea: {
    compareEra: "moderna",
    bridge: "O Mundo Contemporâneo herda da Época Moderna impérios, comércio global e discursos de direitos, mas transforma-os através de industrialização, massas políticas e guerras totais.",
    related: ["direitos humanos", "industrialização", "descolonização"]
  },
  portugal: {
    compareEra: "moderna",
    bridge: "A História de Portugal liga-se fortemente à Época Moderna pela expansão marítima, mas também ao Mundo Contemporâneo pela ditadura, guerra colonial, democracia e integração europeia.",
    related: ["expansão marítima", "Estado Novo", "25 de Abril"]
  }
};



function inferAnalyticalAngle(intent) {
  const angles = {
    comparison: "Compara poder, grupos excluídos, recursos em disputa e consequências duradouras.",
    cause: "Separa causas imediatas, tensões acumuladas e condições de fundo.",
    source: "Pergunta quem produziu a fonte, para quem, com que objetivo e com que silêncios.",
    simulation: "Mesmo numa simulação, mantém personagens, linguagem e conflitos plausíveis para o período.",
    explanation: "Observa relações entre economia, cultura, guerra, poder político e vida quotidiana."
  };
  return angles[intent] || angles.explanation;
}

function buildEvidenceSentence(era, seed) {
  const event = pickFrom(era.events, seed);
  const concept = pickFrom(era.concepts, seed + 2);
  return `Um bom ponto de apoio é ${event[0]}: ${event[1]} Isto cruza-se com ${concept[0]}, porque ${concept[1].toLowerCase()}`;
}

function buildCauseConsequenceSentence(era, topicTitle) {
  return `As causas combinam estruturas e decisões: recursos, instituições, conflitos sociais, crenças e oportunidades. As consequências não são só políticas; podem surgir no trabalho, na memória, nas desigualdades e na forma como sociedades posteriores interpretam ${topicTitle || era.title}.`;
}

function buildFollowUp(intent, era, seed) {
  const prompts = era.prompts || [];
  const prompt = pickFrom(prompts, seed + 6, `Que grupos ganharam e que grupos perderam com este processo em ${era.title}?`);
  if (intent === "comparison") return `Pergunta de seguimento: que critério de comparação parece mais forte aqui: poder, economia, cultura ou experiência social?`;
  if (intent === "source") return `Pergunta de seguimento: que outra fonte precisarias para confirmar ou desafiar esta interpretação?`;
  if (intent === "simulation") return `Pergunta de seguimento: queres transformar isto num diálogo com posições opostas e uma nota final sobre o que é facto?`;
  return `Pergunta de seguimento: ${prompt}`;
}

function buildRelatedThemes(era, seed) {
  const connection = eraConnections[state.currentEra];
  const concept = pickFrom(era.concepts, seed + 8);
  const event = pickFrom(era.events, seed + 10);
  const related = [...(connection?.related || []), concept[0], event[0]].slice(0, 5);
  return `Temas relacionados: ${related.join(", ")}.`;
}

function buildCrossPeriodSentence(era, connectedEra) {
  const links = {
    prehistoria: "A comparação com a Antiguidade mostra como aldeias, excedentes e escrita deram nova escala ao poder.",
    antiga: "A comparação com a Idade Média mostra continuidades em fiscalidade, religião e hierarquia, mas com centros de poder diferentes.",
    medieval: "A ligação à Época Moderna aparece no crescimento urbano, na fiscalidade e nas redes comerciais.",
    moderna: "A ligação ao Mundo Contemporâneo vê-se no colonialismo, no Estado burocrático e na circulação global de ideias.",
    contemporanea: "A ligação à Época Moderna lembra que direitos, impérios e comércio global têm raízes anteriores.",
    portugal: "A História de Portugal cruza expansão moderna, liberalismo, ditadura, guerra colonial e democracia contemporânea."
  };
  return links[state.currentEra] || `Compara este caso com ${connectedEra.title} para distinguir continuidade e rutura.`;
}

function enforceAnswerLength(answer) {
  const words = answer.trim().split(/\s+/);
  if (words.length <= 250) return answer;
  return `${words.slice(0, 247).join(" ")}...`;
}

function buildAnswer(question) {
  const matchedTopic = findTopic(question);
  const era = eras[state.currentEra];
  const intent = detectIntent(question);
  const seed = questionSeed(question);
  const connection = eraConnections[state.currentEra];
  const connectedEra = eras[connection?.compareEra] || eras.antiga;
  const topicTitle = matchedTopic?.title || era.title;
  const contextFrame = buildContextualFrame(intent, era, question);
  const analyticalAngle = inferAnalyticalAngle(intent);
  const evidence = buildEvidenceSentence(era, seed);
  const causeConsequence = buildCauseConsequenceSentence(era, topicTitle);
  const topicResponse = matchedTopic
    ? matchedTopic.response
    : `Pelo período selecionado, eu ligaria a tua pergunta a ${era.title}: ${era.summary}`;
  const crossPeriod = buildCrossPeriodSentence(era, connectedEra);
  const followUp = buildFollowUp(intent, era, seed);
  const relatedThemes = buildRelatedThemes(era, seed);

  if (matchedTopic) {
    rememberQuestion(question, matchedTopic.title);
  } else {
    rememberQuestion(question, era.title);
  }

  return enforceAnswerLength(`Boa pergunta sobre ${topicTitle}. ${analyticalAngle} ${topicResponse} ${evidence} ${causeConsequence} ${crossPeriod} Para pensar criticamente, evita perguntar apenas “foi bom ou mau?”; pergunta antes para quem, em que contexto e com que custos. ${followUp} ${relatedThemes}`);
}

eraButtons.forEach((button) => {
  button.addEventListener("click", () => {
    markUserNavigationIntent();
    eraButtons.forEach((eraButton) => eraButton.classList.remove("is-being-selected"));
    button.classList.add("is-being-selected");
    const nextEra = button.dataset.era;
    if (!nextEra || !eras[nextEra]) {
      const targetRoute = button.dataset.route || "explore";
      navigateTo(targetRoute, { era: state.currentEra });
      return;
    }
    const changedEra = state.currentEra !== nextEra;
    navigateTo("portal", { era: nextEra });
    if (changedEra) {
      if (nextEra === "portugal") awardBadge("portugal-focus");
      addXp(8, `Ganhaste 8 XP por abrir o mapa de lições de ${eras[nextEra].title}.`);
      markXpMotion();
    }
  });
});

screenBackButton?.addEventListener("click", () => {
  markUserNavigationIntent();
  if (state.currentView === "home") return;
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  navigateTo("home");
});

window.addEventListener("hashchange", () => {
  const route = getRouteFromHash();
  navigateTo(route.view, route.params, { updateHistory: false });
});

const wheelScrollTimers = new WeakMap();

function getWheelScrollDelta(event, scroller) {
  const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  const unit =
    event.deltaMode === WheelEvent.DOM_DELTA_PAGE
      ? scroller.clientWidth
      : event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 42
        : 1;
  return dominantDelta * unit * 0.7;
}

document.addEventListener("wheel", (event) => {
  const scroller = event.target.closest(".era-switcher, .subpath-grid");
  if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;

  const delta = getWheelScrollDelta(event, scroller);
  if (!delta) return;

  const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
  const canScrollInDirection = delta > 0 ? scroller.scrollLeft < maxScrollLeft : scroller.scrollLeft > 0;
  if (!canScrollInDirection) return;

  const previousScrollLeft = scroller.scrollLeft;
  scroller.classList.add("is-wheel-scrolling");
  scroller.scrollLeft = Math.max(0, Math.min(maxScrollLeft, scroller.scrollLeft + delta));

  clearTimeout(wheelScrollTimers.get(scroller));
  wheelScrollTimers.set(scroller, setTimeout(() => {
    scroller.classList.remove("is-wheel-scrolling");
  }, 420));

  if (scroller.scrollLeft !== previousScrollLeft) {
    event.preventDefault();
  }
}, { passive: false });

document.addEventListener("click", (event) => {
  const flowButton = event.target.closest("[data-flow-action]");
  if (flowButton) {
    markUserNavigationIntent();
    if (flowButton.dataset.flowAction === "next") goToNextStep();
    else renderCurrentStep();
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    markUserNavigationIntent();
    const view = routeButton.dataset.route;
    const lesson = getLessonById(state.currentLessonId) || getEraLessons(state.currentEra)[0];
    const scopedRoutes = ["portal", "era", "explore", "quiz", "debate", "mission", "source"];
    navigateTo(view, {
      era: scopedRoutes.includes(view) ? state.currentEra : "",
      lessonId: view === "lesson" ? lesson?.id : "",
      subpathId: ["subpath", "timeline"].includes(view) ? state.currentSubpathId : ""
    });
    return;
  }

  const lessonAction = event.target.closest("[data-lesson-action]");
  if (lessonAction) {
    markUserNavigationIntent();
    runLessonAction(lessonAction.dataset.lessonAction, lessonAction.dataset.nextLesson);
    return;
  }

  const lessonQuizOption = event.target.closest("[data-lesson-quiz-option]");
  if (lessonQuizOption) {
    state.currentLessonQuizChoice = Number(lessonQuizOption.dataset.lessonQuizOption);
    lessonQuizOption.classList.add("is-being-selected");
    if (state.currentLessonId) updateLessonProgress(state.currentLessonId, { viewed: true, quizCompleted: true });
    renderCategorySections();
    addXp(10, "Respondeste ao mini quiz da lição ativa.");
    markXpMotion();
    return;
  }

  const missionChoice = event.target.closest("[data-mission-choice]");
  if (missionChoice) {
    chooseMissionPath(missionChoice.dataset.missionChoice);
    return;
  }

  const subpath = event.target.closest("[data-subpath]");
  if (subpath) {
    markUserNavigationIntent();
    const target = subpath.dataset.subpath;
    state.currentSubpathId = target;
    state.currentLessonMode = "story";
    state.currentLessonStoryBlockIndex = 0;
    navigateTo("subpath", { era: state.currentEra, subpathId: target });
    return;
  }

  const timelineLesson = event.target.closest("[data-timeline-lesson]");
  if (timelineLesson) {
    markUserNavigationIntent();
    openLessonById(timelineLesson.dataset.timelineLesson);
    return;
  }

  const lesson = event.target.closest(".timeline-item");
  if (lesson && !event.target.closest(".expand-toggle, .related-link")) {
    markUserNavigationIntent();
    selectTimelineLesson(lesson.dataset.era || state.currentEra, Number(lesson.dataset.lesson || 0));
    return;
  }

  const toggle = event.target.closest(".expand-toggle");
  if (toggle) {
    const card = toggle.closest(".timeline-item, .explore-item, .collapsible-section, .lesson-mode-panel");
    if (card?.classList.contains("timeline-item")) {
      selectTimelineLesson(card.dataset.era || state.currentEra, Number(card.dataset.lesson || 0));
      return;
    }
    const collapsed = card?.classList.toggle("is-collapsed");
    toggle.textContent = collapsed ? "Expandir" : "Recolher";
    toggle.setAttribute("aria-expanded", String(!collapsed));
    return;
  }

  const link = event.target.closest(".related-link");
  if (!link) return;
  openRelatedTopic(link.dataset.related);
});

exploreTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.currentExplore = button.dataset.explore;
    renderExplore();
  });
});

sourceOrigin.addEventListener("click", () => {
  renderSource("origin");
  awardBadge("source-reader");
  addXp(6, "Ganhaste 6 XP por analisar a origem da fonte.");
  markXpMotion();
});

sourcePurpose.addEventListener("click", () => {
  renderSource("purpose");
  awardBadge("source-reader");
  addXp(6, "Ganhaste 6 XP por analisar a intenção da fonte.");
  markXpMotion();
});

sourceLimits.addEventListener("click", () => {
  renderSource("limits");
  state.currentSourceIndex = (state.currentSourceIndex + 1) % getSources().length;
  awardBadge("source-reader");
  addXp(6, "Ganhaste 6 XP por identificar limites da fonte.");
  markXpMotion();
});

timelineZoomButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.currentTimelineZoom = button.dataset.zoom;
    timelineZoomButtons.forEach((zoomButton) => {
      zoomButton.classList.toggle("active", zoomButton.dataset.zoom === state.currentTimelineZoom);
    });
    awardBadge("timeline-reader");
    renderCategorySections();
    addXp(8, "Ganhaste 8 XP por explorar a timeline visual.");
    markXpMotion();
  });
});

dailyCuriosity.addEventListener("click", () => {
  renderCuriosity(true);
  addXp(4, "Ganhaste 4 XP por descobrir uma curiosidade histórica.");
  markXpMotion();
});

chooseSideA.addEventListener("click", () => chooseDebatePosition("a"));
chooseSideB.addEventListener("click", () => chooseDebatePosition("b"));
chooseSideBalance.addEventListener("click", () => chooseDebatePosition("balance"));

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question) return;
  addMessage("user", question);
  addMessage("assistant", buildAnswer(question));
  questionInput.value = "";
});

shuffleQuestion.addEventListener("click", () => {
  const prompts = eras[state.currentEra].prompts;
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  questionInput.value = prompt;
  questionInput.focus();
});

{
  renderEraData(state.currentEra);
  navigateTo("home", {}, { replace: true });
  document.body.classList.remove("is-booting");
}
