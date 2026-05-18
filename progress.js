const levelTitles = [
  "Aprendiz de História",
  "Explorador de Fontes",
  "Especialista em Roma",
  "Mestre da Idade Média",
  "Conquistador da História de Portugal"
];

const badgeDefinitions = [
  {
    id: "first-question",
    title: "Primeira conversa",
    detail: "Fizeste uma pergunta ao historiador."
  },
  {
    id: "quiz-correct",
    title: "Resposta certeira",
    detail: "Acertaste uma pergunta de quiz."
  },
  {
    id: "source-reader",
    title: "Leitor de fontes",
    detail: "Analisaste origem, intenção ou limites de uma fonte."
  },
  {
    id: "timeline-reader",
    title: "Cartógrafo do tempo",
    detail: "Exploraste a timeline visual."
  },
  {
    id: "portugal-focus",
    title: "Portugal em foco",
    detail: "Entraste no percurso de História de Portugal."
  }
];

export function createProgressController({ eras, state, dom, todayKey }) {
  const {
    progressScore,
    progressLevel,
    progressTitle,
    progressBar,
    progressCaption,
    streakCount,
    streakCaption,
    eraMastery,
    badgeGrid,
    overviewLevel,
    overviewProgressTitle,
    overviewProgressBar,
    overviewNextGoal
  } = dom;

  const progress = loadProgress(eras);

  function saveProgress() {
    localStorage.setItem("historiaVivaProgress", JSON.stringify(progress));
  }

  function rememberActivity() {
    if (progress.lastActive !== todayKey) {
      progress.streak = progress.lastActive ? progress.streak + 1 : 1;
      progress.lastActive = todayKey;
    }
  }

  function awardBadge(id) {
    if (!progress.badges.includes(id)) {
      progress.badges.push(id);
      saveProgress();
    }
  }

  function addXp(amount, reason = "") {
    rememberActivity();
    progress.xp += amount;
    progress.eraXp[state.currentEra] = (progress.eraXp[state.currentEra] || 0) + amount;
    saveProgress();
    renderProgress(reason);
  }

  function updateLessonProgress(lessonId, patch = {}) {
    if (!lessonId) return;
    progress.lessonProgress[lessonId] = {
      viewed: false,
      sourceViewed: false,
      quizCompleted: false,
      debated: false,
      completed: false,
      ...(progress.lessonProgress[lessonId] || {}),
      ...patch
    };
    saveProgress();
  }

  function getLevel() {
    return Math.min(levelTitles.length, Math.floor(progress.xp / 80) + 1);
  }

  function progressPercent() {
    return Math.min(100, Math.round((progress.xp % 80) / 80 * 100));
  }

  function renderProgress(reason = "") {
    const level = getLevel();
    const title = levelTitles[level - 1];
    const percent = progressPercent();
    const nextXp = level >= levelTitles.length
      ? "Nível máximo do protótipo alcançado."
      : `${80 - (progress.xp % 80)} XP até ao próximo nível.`;

    [
      [progressLevel, `Nível ${level}`],
      [progressTitle, title],
      [progressScore, `${progress.xp} XP`],
      [overviewLevel, `Nível ${level}`],
      [overviewProgressTitle, title]
    ].forEach(([element, value]) => {
      if (element) element.textContent = value;
    });

    [progressBar, overviewProgressBar].forEach((bar) => {
      if (bar) bar.style.width = `${percent}%`;
    });

    if (progressCaption) progressCaption.textContent = reason || nextXp;
    if (overviewNextGoal) overviewNextGoal.textContent = reason || nextXp;
    if (streakCount) streakCount.textContent = `${progress.streak} ${progress.streak === 1 ? "dia" : "dias"}`;
    if (streakCaption) {
      streakCaption.textContent = progress.streak
        ? "Mantém a sequência com uma ação de aprendizagem por dia."
        : "Hoje conta quando concluis uma ação.";
    }

    renderEraMastery();
    renderBadges();
  }

  function renderEraMastery() {
    if (!eraMastery) return;
    eraMastery.innerHTML = Object.entries(eras)
      .map(([key, era]) => {
        const percent = Math.min(100, Math.round(((progress.eraXp[key] || 0) / 120) * 100));
        return `
          <article class="mastery-row">
            <div>
              <strong>${era.title}</strong>
              <span>${progress.eraXp[key] || 0} XP</span>
            </div>
            <div class="mini-progress" aria-hidden="true"><span style="width: ${percent}%"></span></div>
          </article>
        `;
      })
      .join("");
  }

  function renderBadges() {
    if (!badgeGrid) return;
    badgeGrid.innerHTML = badgeDefinitions
      .map((badge) => {
        const unlocked = progress.badges.includes(badge.id);
        return `
          <article class="badge-card ${unlocked ? "unlocked" : ""}">
            <span>${unlocked ? "Desbloqueada" : "Por desbloquear"}</span>
            <strong>${badge.title}</strong>
            <p>${badge.detail}</p>
          </article>
        `;
      })
      .join("");
  }

  return {
    progress,
    addXp,
    awardBadge,
    updateLessonProgress,
    renderProgress
  };
}

function loadProgress(eras) {
  const fallback = {
    xp: 0,
    streak: 0,
    lastActive: "",
    badges: [],
    eraXp: Object.fromEntries(Object.keys(eras).map((key) => [key, 0])),
    lessonProgress: {},
    memory: []
  };

  try {
    const saved = JSON.parse(localStorage.getItem("historiaVivaProgress"));
    return {
      ...fallback,
      ...saved,
      eraXp: { ...fallback.eraXp, ...(saved?.eraXp || {}) },
      lessonProgress: { ...fallback.lessonProgress, ...(saved?.lessonProgress || {}) },
      badges: saved?.badges || [],
      memory: saved?.memory || []
    };
  } catch {
    return fallback;
  }
}
