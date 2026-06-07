import {
  eras,
  eraKeys,
  curriculum,
  debates,
  quizExtensions,
  relatedRules,
  virtualRelatedTopics,
  storyBlockRules,
  defaultStoryBlockPattern,
  categoryStoryBlockPatterns
} from './data.js';
import { getHistoricalDateOrder, normalizeText } from './utils.js';

const debateEraKeywords = {
  prehistoria: ["pré-história", "pre-historia", "neolítico", "paleolítico"],
  antiga: ["roma", "romana", "romano", "antiga", "antiguidade", "augusto", "romanização", "escravatura"],
  medieval: ["medieval", "idade média", "feudalismo"],
  moderna: ["moderna", "expansão", "reforma", "revolução científica"],
  contemporanea: ["contemporâneo", "francesa", "industrial", "guerra fria"],
  portugal: ["portugal", "portuguesa", "português"]
};

const lessonQuizRecommendationRules = {
  prehistoria: [
    { lesson: ["descoberta do fogo", "fogo"], quiz: ["domínio do fogo", "controlo do fogo"] },
    { lesson: ["ferramentas de pedra", "pedra"], quiz: ["fonte material", "vestígio físico"] },
    { lesson: ["caça e pesca", "caca e pesca", "pesca"], quiz: ["caçadoras-recolectoras", "caça, recoleção"] },
    { lesson: ["arte rupestre", "arte"], quiz: ["arte rupestre"] },
    { lesson: ["ritos funerários", "ritos funerarios", "sepulturas"], quiz: ["sepulturas"] },
    { lesson: ["fim da era glacial", "era glacial", "pós-glacial"], quiz: ["aquecimento pós-glacial"] },
    { lesson: ["domesticação de animais", "domesticacao de animais", "animais"], quiz: ["domesticação de animais", "zooarqueologia"] },
    { lesson: ["abrigos permanentes", "primeiros abrigos"], quiz: ["sedentarização"] },
    { lesson: ["agricultura"], quiz: ["agricultura surgiu", "agricultura pôde"] },
    { lesson: ["aldeias e comunidade", "aldeias"], quiz: ["acumulação de bens", "novas desigualdades"] },
    { lesson: ["domínio dos metais", "dominio dos metais", "metais"], quiz: ["metalurgia"] },
    { lesson: ["comércio e trocas", "comercio e trocas", "trocas"], quiz: ["cerâmica"] },
    { lesson: ["nascimento das civilizações", "nascimento das civilizacoes", "civiliza"], quiz: ["construir o mundo"] }
  ]
};

const storyBlockGenerationDefaults = {
  depth: "normal",
  preferredWordsPerBlock: 42,
  minWordsPerBlock: 28,
  maxWordsPerBlock: 50,
  hardLimit: 40,
  visualTypes: ["spark", "fragment", "map"],
  backgroundMoods: ["cave-dark", "stone-warm", "fire-circle"]
};

const storyBlockDepthPresets = {
  resumo: {
    preferredWordsPerBlock: 45,
    minWordsPerBlock: 30,
    maxWordsPerBlock: 50
  },
  normal: {
    preferredWordsPerBlock: 42,
    minWordsPerBlock: 28,
    maxWordsPerBlock: 50
  },
  aprofundado: {
    preferredWordsPerBlock: 38,
    minWordsPerBlock: 24,
    maxWordsPerBlock: 50
  }
};

export function getEra(eraKey) {
  return eras[eraKey];
}

export function getEraKeys() {
  return eraKeys;
}

export function getEraLessons(eraKey) {
  const era = getEra(eraKey);
  return era.timeline
    .map(([date, title, category, detail, extra], index) => {
      const lessonExtra = normalizeLessonExtra(extra);
      const storyText = lessonExtra.storyText || "";
      const id = createContentId(eraKey, "lesson", title, index);
      const sectionId = resolveLessonSectionId(eraKey, title, detail, category);
      const textExperience = normalizeTextExperience(
        lessonExtra.textExperience || lessonExtra.lessonContent?.textExperience || lessonExtra.lessonContent,
        { date, title, category, detail, storyText }
      );
      const lessonContent = {
        status: lessonExtra.status || lessonExtra.lessonContent?.status || "draft",
        sourceText: lessonExtra.sourceText || lessonExtra.lessonContent?.sourceText || storyText || detail || "",
        textExperience
      };
      const lesson = {
        id,
        eraKey,
        sectionId,
        type: "lesson",
        index,
        date,
        title,
        category,
        detail,
        storyText,
        lessonContent,
        textExperience,
        question: buildLessonQuestion(title, category),
        related: getRelatedTopics(eraKey, title, detail, category)
      };
      return {
        ...lesson,
        storyBlocks: Array.isArray(lessonExtra.storyBlocks) && lessonExtra.storyBlocks.length
          ? addLessonStoryBlockMetadata(lessonExtra.storyBlocks, lesson)
          : buildStoryBlocksForLesson(lesson)
      };
    })
    .sort((a, b) => {
      const dateDelta = getHistoricalDateOrder(a.date) - getHistoricalDateOrder(b.date);
      return dateDelta || a.index - b.index;
    });
}

export function getLessonStoryBlocks(lessonId) {
  const lesson = typeof lessonId === "string" ? getLessonById(lessonId) : lessonId;
  return ensureArray(lesson?.storyBlocks).length ? lesson.storyBlocks : buildStoryBlocksForLesson(lesson || {});
}

export function getLessonTextExperience(lessonId) {
  const lesson = typeof lessonId === "string" ? getLessonById(lessonId) : lessonId;
  return lesson?.textExperience || lesson?.lessonContent?.textExperience || normalizeTextExperience(null, lesson || {});
}

export function countWords(text) {
  return String(text || "")
    .trim()
    .split(/\s+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
}

export function generateStoryBlocksFromText(text, options = {}) {
  const config = getStoryBlockGenerationConfig(options);
  const paragraphs = splitStoryParagraphs(text);
  const totalWords = countWords(paragraphs.join(" "));
  if (totalWords < config.minWordsPerBlock) return [];

  const blocks = [];
  let currentSentences = [];
  let currentWords = 0;

  paragraphs.forEach((paragraph) => {
    const sentences = splitStorySentences(paragraph);
    sentences.forEach((sentence) => {
      const sentenceWords = countWords(sentence);
      const wouldExceed = currentWords + sentenceWords > config.maxWordsPerBlock;

      if (currentSentences.length && wouldExceed && currentWords >= config.minWordsPerBlock) {
        blocks.push(currentSentences.join(" "));
        currentSentences = [];
        currentWords = 0;
      }

      currentSentences.push(sentence);
      currentWords += sentenceWords;
    });

    // Paragraph endings are natural pause points, so prefer closing a block there.
    if (currentWords >= config.preferredWordsPerBlock) {
      blocks.push(currentSentences.join(" "));
      currentSentences = [];
      currentWords = 0;
    }
  });

  if (currentSentences.length) {
    blocks.push(currentSentences.join(" "));
  }

  return applyStoryBlockVisuals(
    enforceStoryBlockLimit(mergeShortStoryBlocks(blocks, config), config),
    config
  );
}

export function getLessonById(lessonId) {
  for (const eraKey of getEraKeys()) {
    const lesson = getEraLessons(eraKey).find((item) => item.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
}

export function getNextLesson(eraKey, lessonId) {
  const lessons = getEraLessons(eraKey);
  const index = lessons.findIndex((lesson) => lesson.id === lessonId);
  if (index < 0) return lessons[0] || null;
  return lessons[(index + 1) % lessons.length] || null;
}

export function getEraCurriculumSections(eraKey) {
  const lessons = getEraLessons(eraKey);
  const definitions = getCurriculumSections(eraKey);

  return definitions
    .map((section) => ({
      ...section,
      eraKey,
      lessons: lessons.filter((lesson) => lesson.sectionId === section.id)
    }))
    .filter((section) => section.lessons.length);
}

export function getCurriculumSections(eraKey) {
  return curriculum[eraKey]?.sections || [
    { id: "percurso", title: getEra(eraKey).title, summary: getEra(eraKey).summary, match: [] }
  ];
}

export function getEraExploreEntries(eraKey, section) {
  const entries = getEra(eraKey)[section] || [];
  return entries.map(([title, description], index) => ({
    id: createContentId(eraKey, section, title, index),
    eraKey,
    type: section,
    index,
    title,
    description,
    related: getRelatedTopics(eraKey, title, description)
  }));
}

export function getEraQuiz(eraKey) {
  const era = getEra(eraKey);
  const quizBank = [
    ...ensureArray(era.quiz).filter(Boolean),
    ...(quizExtensions[eraKey] || [])
  ];
  return quizBank.map((quiz, index) => ({
    id: createContentId(eraKey, "quiz", quiz.question, index),
    eraKey,
    type: quiz.type || "escolha_múltipla",
    difficulty: quiz.difficulty || ["fácil", "média", "difícil"][index % 3],
    explanation: quiz.explanation || `A resposta correta é “${quiz.options[quiz.answer]}”. Esta opção enquadra melhor o contexto de ${era.title} e evita uma leitura simplista do processo histórico.`,
    index,
    related: getRelatedTopics(eraKey, quiz.question, quiz.explanation, ...(quiz.options || [])),
    ...quiz
  }));
}

export function getEraSources(eraKey) {
  return ensureArray(getEra(eraKey).source).map((source, index) => ({
    id: createContentId(eraKey, "source", source.text, index),
    eraKey,
    type: "source",
    index,
    related: getRelatedTopics(eraKey, source.text, source.origin, source.purpose, source.limits),
    ...source
  }));
}

export function getRecommendedSourceIndex(eraKey, lessonId) {
  const lesson = getLessonById(lessonId);
  return findBestMatchIndex(getEraSources(eraKey), lesson, ["text", "origin", "purpose", "limits"]);
}

export function getRecommendedQuizIndex(eraKey, lessonId) {
  const lesson = getLessonById(lessonId);
  const quiz = getEraQuiz(eraKey);
  const recommendedIndex = findLessonQuizRuleIndex(eraKey, lesson, quiz);
  if (recommendedIndex >= 0) return recommendedIndex;
  return findBestMatchIndex(quiz, lesson, ["question", "explanation"]);
}

export function getDebatesForEra(eraKey) {
  const keywords = debateEraKeywords[eraKey] || [];
  const matches = debates.filter((debate) => {
    const haystack = normalizeText(`${debate.title} ${debate.context} ${debate.intro}`);
    return keywords.some((keyword) => haystack.includes(normalizeText(keyword)));
  });

  return (matches.length ? matches : debates).map((debate, index) => ({
    id: createContentId(eraKey, "debate", debate.title, index),
    eraKey,
    index,
    ...debate
  }));
}

export function getRelatedTopics(eraKey, ...parts) {
  const text = normalizeText(parts.filter(Boolean).join(" "));
  const related = new Set();

  relatedRules.forEach((rule) => {
    if (rule.keywords.some((keyword) => text.includes(normalizeText(keyword)))) {
      rule.related.forEach((topic) => related.add(topic));
    }
  });

  if (related.size < 3) {
    const concepts = getEra(eraKey)?.concepts || [];
    concepts.slice(0, 6).forEach(([title]) => {
      if (related.size < 3 && !text.includes(normalizeText(title))) {
        related.add(title);
      }
    });
  }

  return [...related].slice(0, 4);
}

export function findRelatedTarget(topic) {
  const normalizedTopic = normalizeText(topic);
  const sections = [
    ["events", "events"],
    ["biographies", "biographies"],
    ["concepts", "concepts"]
  ];

  for (const [section, key] of sections) {
    for (const [eraKey, era] of Object.entries(eras)) {
      const index = era[key].findIndex(([title, description]) => {
        const haystack = normalizeText(`${title} ${description}`);
        return haystack.includes(normalizedTopic) || normalizedTopic.includes(normalizeText(title));
      });
      if (index >= 0) return { eraKey, section };
    }
  }

  return null;
}

export function getVirtualRelatedPrompt(topic) {
  return virtualRelatedTopics[normalizeText(topic)];
}

function buildLessonQuestion(title, category = "") {
  if (category === "política") return "Quem ganhou poder, quem ficou excluído e que instituições mudaram?";
  if (category === "guerra") return "Que recursos, alianças e populações foram afetados por este conflito?";
  if (category === "ciência") return "Que técnica, infraestrutura ou conhecimento mudou práticas sociais?";
  if (category === "cultura") return "Como este momento alterou memória, identidade ou circulação de ideias?";
  if (category === "religião") return "Como crenças, instituições e autoridade se reforçaram ou entraram em tensão?";
  if (normalizeText(title).includes("queda")) return "Que causas de longa duração ajudam a explicar este fim político?";
  return "Que causas levaram a este momento e que consequências abriu para o período?";
}

function resolveLessonSectionId(eraKey, title, detail = "", category = "") {
  const sections = getCurriculumSections(eraKey);
  const haystack = normalizeText(`${title} ${detail} ${category}`);
  const match = sections.find((section) =>
    (section.match || []).some((keyword) => haystack.includes(normalizeText(keyword)))
  );
  return match?.id || sections.at(-1)?.id || "percurso";
}

function findBestMatchIndex(items, lesson, fields) {
  if (!lesson || !items.length) return 0;
  const lessonText = normalizeText(`${lesson.title} ${lesson.detail} ${lesson.category} ${lesson.related.join(" ")}`);
  const scores = items.map((item, index) => {
    const itemText = normalizeText(fields.map((field) => item[field] || "").join(" "));
    const relatedScore = (lesson.related || []).filter((topic) => itemText.includes(normalizeText(topic))).length * 4;
    const titleWords = lessonText.split(/\s+/).filter((word) => word.length > 4);
    const wordScore = titleWords.filter((word) => itemText.includes(word)).length;
    return { index, score: relatedScore + wordScore };
  });
  scores.sort((a, b) => b.score - a.score);
  if ((scores[0]?.score || 0) <= 0) return lesson.index % items.length;
  return scores[0]?.index || 0;
}

function findLessonQuizRuleIndex(eraKey, lesson, quiz) {
  if (!lesson || !quiz.length) return -1;
  const rules = lessonQuizRecommendationRules[eraKey] || [];
  const lessonText = normalizeText(`${lesson.title} ${lesson.detail}`);
  const rule = rules.find((item) =>
    item.lesson.some((keyword) => lessonText.includes(normalizeText(keyword)))
  );
  if (!rule) return -1;
  return quiz.findIndex((item) => {
    const quizText = normalizeText(`${item.question} ${item.explanation || ""} ${(item.options || []).join(" ")}`);
    return rule.quiz.some((keyword) => quizText.includes(normalizeText(keyword)));
  });
}

function buildStoryBlocksForLesson(lesson) {
  const title = lesson?.title || "este momento histórico";
  const normalizedTitle = normalizeText(title);
  const visualPattern = categoryStoryBlockPatterns[lesson?.category] || defaultStoryBlockPattern;
  const experienceSource = getTextExperienceStorySource(lesson);
  if (experienceSource) {
    const generatedBlocks = generateStoryBlocksFromText(experienceSource, {
      maxBlocks: 3,
      visualTypes: visualPattern.map((block) => block.visualType).filter(Boolean),
      backgroundMoods: visualPattern.map((block) => block.backgroundMood).filter(Boolean)
    });
    if (generatedBlocks.length) {
      return addLessonStoryBlockMetadata(generatedBlocks, lesson);
    }
  }

  const matchedRule = storyBlockRules.find((rule) =>
    rule.match.some((keyword) => normalizedTitle.includes(normalizeText(keyword)))
  );
  if (matchedRule?.blocks) {
    return addLessonStoryBlockMetadata(matchedRule.blocks, lesson);
  }

  const generatedBlocks = generateStoryBlocksFromText(getLessonStorySource(lesson), {
    visualTypes: visualPattern.map((block) => block.visualType).filter(Boolean),
    backgroundMoods: visualPattern.map((block) => block.backgroundMood).filter(Boolean)
  });

  return addLessonStoryBlockMetadata(
    generatedBlocks.length ? generatedBlocks : buildLessonSpecificStoryBlocks(lesson, visualPattern),
    lesson
  );
}

function buildLessonSpecificStoryBlocks(lesson = {}, visualPattern = defaultStoryBlockPattern) {
  const title = lesson.title || "este momento histórico";
  const date = lesson.date ? `Em ${lesson.date}, ` : "";
  const eraTitle = getEra(lesson.eraKey)?.title || "este período";
  const detail = lesson.detail || buildLessonQuestion(title, lesson.category);
  const categoryFrame = getLessonCategoryFrame(lesson.category);
  const related = ensureArray(lesson.related).filter(Boolean).slice(0, 2);
  const relatedText = related.length ? ` Liga-se ainda a ${related.join(" e ")}, o que ajuda a comparar causas, efeitos e limites das fontes.` : "";
  const sourceHint = getLessonSourceHint(lesson);
  const pattern = visualPattern.length ? visualPattern : defaultStoryBlockPattern;

  return [
    {
      id: "contexto",
      visualType: pattern[0]?.visualType,
      backgroundMood: pattern[0]?.backgroundMood,
      text: `${date}${title} ganha sentido dentro de ${eraTitle}. ${detail} A primeira pergunta da lição é perceber que problema histórico estava em aberto e que pessoas, instituições ou comunidades foram tocadas por essa mudança.`
    },
    {
      id: "evidencia",
      visualType: pattern[1]?.visualType,
      backgroundMood: pattern[1]?.backgroundMood,
      text: `Para estudar ${title}, não basta decorar a data. ${sourceHint} ${categoryFrame} A lição deve cruzar vestígios, contexto e consequências para evitar uma leitura solta ou demasiado simples.`
    },
    {
      id: "legado",
      visualType: pattern[2]?.visualType,
      backgroundMood: pattern[2]?.backgroundMood,
      text: `O legado de ${title} aparece quando perguntamos quem ganhou poder, quem perdeu margem de ação e que marcas ficaram depois. ${relatedText || `Essa leitura aproxima ${eraTitle} do presente sem transformar o passado numa resposta única.`}`
    }
  ];
}

function getLessonCategoryFrame(category = "") {
  if (category === "política") return "O foco está em autoridade, leis, legitimidade e participação.";
  if (category === "guerra") return "O foco está em recursos, violência, alianças, medo e reorganização de poder.";
  if (category === "ciência") return "O foco está em técnica, observação, instrumentos e mudanças práticas.";
  if (category === "cultura") return "O foco está em memória, circulação de ideias, identidade e linguagem simbólica.";
  if (category === "religião") return "O foco está em crenças, instituições, rituais e autoridade social.";
  return "O foco está em causas, escolhas humanas, fontes e consequências.";
}

function getLessonSourceHint(lesson = {}) {
  const sources = ensureArray(getEra(lesson.eraKey)?.source).filter(Boolean);
  const source = sources[lesson.index % Math.max(1, sources.length)];
  if (!source?.text) return "Os historiadores procuram documentos, objetos, imagens, lugares e testemunhos que possam ser comparados.";
  return `Uma fonte possível é observar ${source.text}`;
}

function addLessonStoryBlockMetadata(blocks, lesson = {}) {
  return blocks.map((block, index) => ({
    id: block.id || `block-${index + 1}`,
    visualType: block.visualType || storyBlockGenerationDefaults.visualTypes[index % storyBlockGenerationDefaults.visualTypes.length],
    backgroundMood: block.backgroundMood || storyBlockGenerationDefaults.backgroundMoods[index % storyBlockGenerationDefaults.backgroundMoods.length],
    text: block.text || "",
    lessonId: lesson?.id || "",
    eraKey: lesson?.eraKey || "",
    sectionId: lesson?.sectionId || ""
  }));
}

function getLessonStorySource(lesson = {}) {
  const explicitText = [
    lesson.storyText,
    getTextExperienceStorySource(lesson),
    lesson.text,
    lesson.content,
    lesson.body
  ].find((value) => countWords(value) > 0) || "";
  if (explicitText) return explicitText;
  return [lesson.title, lesson.detail].filter(Boolean).join("\n\n");
}

function normalizeLessonExtra(extra) {
  if (!extra || typeof extra !== "object" || Array.isArray(extra)) return {};
  return extra;
}

function normalizeTextExperience(source, fallback = {}) {
  const safeSource = source && typeof source === "object" && !Array.isArray(source) ? source : {};
  return {
    introduction: safeSource.introduction || fallback.storyText || fallback.detail || "",
    scene: safeSource.scene || "",
    narrative: ensureArray(safeSource.narrative).filter(Boolean),
    whatHappened: safeSource.whatHappened || safeSource.explanation || fallback.detail || "",
    evidence: ensureArray(safeSource.evidence).filter(Boolean),
    archaeology: ensureArray(safeSource.archaeology).filter(Boolean),
    whyItMatters: safeSource.whyItMatters || safeSource.significance || "",
    presentConnection: safeSource.presentConnection || safeSource.bridge || "",
    curiosity: safeSource.curiosity || "",
    reflection: safeSource.reflection || "",
    keyTakeaway: safeSource.keyTakeaway || safeSource.takeaway || ""
  };
}

function getTextExperienceStorySource(lesson = {}) {
  const textExperience = lesson.textExperience || lesson.lessonContent?.textExperience;
  if (!textExperience) return "";
  return [
    textExperience.scene,
    ...ensureArray(textExperience.narrative),
    textExperience.whatHappened,
    ...ensureArray(textExperience.evidence),
    ...ensureArray(textExperience.archaeology),
    textExperience.whyItMatters,
    textExperience.presentConnection
  ].filter((value) => countWords(value) > 0).join("\n\n");
}

function getStoryBlockGenerationConfig(options = {}) {
  const depthPreset = storyBlockDepthPresets[options.depth] || storyBlockDepthPresets.normal;
  const config = {
    ...storyBlockGenerationDefaults,
    ...depthPreset,
    ...options
  };
  const hardLimit = Math.max(1, Number(config.hardLimit) || storyBlockGenerationDefaults.hardLimit);
  const maxBlocks = Number.isFinite(Number(config.maxBlocks)) ? Number(config.maxBlocks) : hardLimit;
  return {
    ...config,
    minWordsPerBlock: Math.max(1, Number(config.minWordsPerBlock) || storyBlockGenerationDefaults.minWordsPerBlock),
    preferredWordsPerBlock: Math.max(1, Number(config.preferredWordsPerBlock) || storyBlockGenerationDefaults.preferredWordsPerBlock),
    maxWordsPerBlock: Math.max(1, Number(config.maxWordsPerBlock) || storyBlockGenerationDefaults.maxWordsPerBlock),
    hardLimit,
    blockLimit: Math.min(Math.max(1, maxBlocks), hardLimit),
    visualTypes: ensureArray(config.visualTypes).filter(Boolean),
    backgroundMoods: ensureArray(config.backgroundMoods).filter(Boolean)
  };
}

function splitStoryParagraphs(text) {
  return String(text || "")
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function splitStorySentences(paragraph) {
  const sentences = String(paragraph || "").match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g) || [];
  return sentences.map((sentence) => sentence.trim()).filter(Boolean);
}

function mergeShortStoryBlocks(blocks, config) {
  const merged = [];

  blocks.forEach((block) => {
    const words = countWords(block);
    const previous = merged[merged.length - 1];
    if (previous && words < config.minWordsPerBlock) {
      const combined = `${previous} ${block}`.trim();
      const combinedWords = countWords(combined);
      if (combinedWords <= config.maxWordsPerBlock) {
        merged[merged.length - 1] = combined;
        return;
      }
    }
    merged.push(block);
  });

  if (merged.length > 1 && countWords(merged[0]) < config.minWordsPerBlock) {
    const combined = `${merged[0]} ${merged[1]}`.trim();
    if (countWords(combined) > config.maxWordsPerBlock) return merged;
    merged[1] = combined;
    merged.shift();
  }

  return merged;
}

function enforceStoryBlockLimit(blocks, config) {
  const limited = [...blocks];
  while (limited.length > config.blockLimit) {
    const tail = limited.pop();
    limited[limited.length - 1] = `${limited[limited.length - 1]} ${tail}`.trim();
  }
  return limited;
}

function applyStoryBlockVisuals(blocks, config) {
  return blocks.map((text, index) => ({
    id: `block-${index + 1}`,
    visualType: config.visualTypes[index % config.visualTypes.length] || storyBlockGenerationDefaults.visualTypes[index % storyBlockGenerationDefaults.visualTypes.length],
    backgroundMood: config.backgroundMoods[index % config.backgroundMoods.length] || storyBlockGenerationDefaults.backgroundMoods[index % storyBlockGenerationDefaults.backgroundMoods.length],
    text
  }));
}

function createContentId(eraKey, type, title, index) {
  return `${eraKey}-${type}-${index + 1}-${slugify(title)}`;
}

function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [value];
}
