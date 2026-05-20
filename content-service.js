import {
  eras,
  curriculum,
  debates,
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

export function getEra(eraKey) {
  return eras[eraKey];
}

export function getEraKeys() {
  return Object.keys(eras);
}

export function getEraLessons(eraKey) {
  const era = getEra(eraKey);
  return era.timeline
    .map(([date, title, category, detail], index) => {
      const id = createContentId(eraKey, "lesson", title, index);
      const sectionId = resolveLessonSectionId(eraKey, title, detail, category);
      return {
        id,
        eraKey,
        sectionId,
        type: "lesson",
        index,
        date,
        title,
        category,
        detail,
        question: buildLessonQuestion(title, category),
        related: getRelatedTopics(eraKey, title, detail, category),
        storyBlocks: buildStoryBlocksForLesson({ id, eraKey, sectionId, title, category, detail, index })
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
  return ensureArray(getEra(eraKey).quiz).map((quiz, index) => ({
    id: createContentId(eraKey, "quiz", quiz.question, index),
    eraKey,
    type: "quiz",
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
  return findBestMatchIndex(getEraQuiz(eraKey), lesson, ["question", "explanation"]);
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
  return scores[0]?.index || 0;
}

function buildStoryBlocksForLesson(lesson) {
  const title = lesson?.title || "este momento histórico";
  const normalizedTitle = normalizeText(title);
  const matchedRule = storyBlockRules.find((rule) =>
    rule.match.some((keyword) => normalizedTitle.includes(normalizeText(keyword)))
  );
  const pattern = matchedRule?.blocks || categoryStoryBlockPatterns[lesson?.category] || defaultStoryBlockPattern;
  return pattern.map((block, index) => ({
    id: block.id || `story-${index + 1}`,
    visualType: block.visualType || ["spark", "fragment", "map"][index % 3],
    backgroundMood: block.backgroundMood || ["cave-dark", "stone-warm", "fire-circle"][index % 3],
    text: block.text || buildGenericStoryBlockText(title, index),
    lessonId: lesson?.id || "",
    eraKey: lesson?.eraKey || "",
    sectionId: lesson?.sectionId || ""
  }));
}

function buildGenericStoryBlockText(title, index) {
  const subject = getStorySubject(title);
  if (index === 0) return `${subject} começou como uma mudança concreta na vida das pessoas.`;
  if (index === 1) return "Essa mudança ganhou força porque tocou necessidades, medos e escolhas.";
  return "O seu impacto continuou a abrir caminhos muito depois do primeiro momento.";
}

function getStorySubject(title) {
  return String(title || "Este momento")
    .split(":")[0]
    .trim()
    .replace(/\.$/, "");
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
