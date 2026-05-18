export const productExperience = {
  productName: "História Viva",
  category: "Experiência interactiva de aprendizagem histórica",
  promise: "Transformar História em percursos narrativos com progressão, evidência, debate e missões.",
  primaryFantasy: "investigador da História",
  supportingFantasies: ["explorador", "cronista", "estratega", "viajante temporal"],
  coreLoop: [
    "descoberta histórica",
    "lição curta",
    "interação",
    "reflexão ou debate",
    "XP e progresso",
    "nova descoberta"
  ],
  retentionHooks: [
    "continuar percurso",
    "manter streak",
    "desbloquear missão",
    "subir nível",
    "terminar campanha histórica",
    "descobrir nova era"
  ],
  experiencePillars: [
    "narrativa",
    "exploração",
    "progressão",
    "reflexão crítica",
    "interação guiada"
  ],
  learningCurve: {
    early: "simples, acessível e cinematográfica",
    middle: "mais analítica, com fontes, comparação e debate",
    late: "campanhas históricas com decisões, consequências e síntese"
  }
};

export const experienceModes = {
  learn: {
    title: "Aprender",
    role: "percurso guiado com lições",
    loop: ["lição", "interação curta", "feedback", "próxima lição"]
  },
  explore: {
    title: "Explorar",
    role: "navegação livre por eventos, biografias e conceitos",
    loop: ["descobrir tema", "abrir relação", "comparar contexto", "guardar curiosidade"]
  },
  interact: {
    title: "Interagir",
    role: "conversa, debates, quizzes e missões",
    loop: ["desafio", "resposta", "feedback", "XP", "novo desafio"]
  }
};

export const experienceFlows = {
  roma: {
    title: "Ascensão e Queda de Roma",
    productGoal: "Fazer o utilizador sentir que está a investigar a expansão romana e as tensões que prepararam a crise.",
    userFantasy: "estratega e investigador romano",
    commercialLoop: ["lição", "quiz", "fonte", "debate", "missão", "recompensa", "próxima descoberta"],
    eraKey: "antiga",
    startStep: "intro",
    nextFlow: null,
    steps: [
      {
        id: "intro",
        type: "lesson",
        label: "Lição",
        lessonId: "antiga-lesson-8-guerras-punicas-transformam-roma-numa-potencia-mediterranica",
        next: "quiz-1"
      },
      {
        id: "quiz-1",
        type: "quiz",
        label: "Quiz",
        quizId: "antiga-quiz-4-as-guerras-punicas-opuseram-sobretudo",
        next: "source-1"
      },
      {
        id: "source-1",
        type: "source",
        label: "Fonte",
        sourceId: "antiga-source-4-as-estradas-levam-tropas-impostos-e-ordens-ate-as-provincias",
        next: "debate-1"
      },
      {
        id: "debate-1",
        type: "debate",
        label: "Debate",
        debateId: "antiga-debate-1-roma-caiu-por-invasoes-ou-problemas-internos",
        next: "mission-1"
      },
      {
        id: "mission-1",
        type: "mission",
        label: "Missão",
        next: "complete"
      },
      {
        id: "complete",
        type: "reward",
        label: "Recompensa",
        xp: 40,
        next: null
      }
    ]
  }
};

export const defaultExperienceFlowId = "roma";
