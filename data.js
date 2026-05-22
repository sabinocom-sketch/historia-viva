// Public data facade for Historia Viva.
// Heavy content lives in ./data/* so feature modules can stay small and focused.

import { eras, eraKeys, ensureAllEraData, ensureEraData, isEraLoaded } from './data/eras.js';
import { timelineExtensions, timelineCategoryLabels, timelineCategoryIcons } from './data/timeline.js';
import { quizExtensions, quizTypeLabels } from './data/quiz.js';
import { debates } from './data/debates.js';
import { relatedRules, virtualRelatedTopics, eraEditorialFrames, insightRules } from './data/rules.js';
import { curriculum } from './data/curriculum.js';
import { productExperience, experienceModes, experienceFlows, defaultExperienceFlowId } from './data/experience.js';
import { storyBlockRules, defaultStoryBlockPattern, categoryStoryBlockPatterns } from './data/story-blocks.js';

export {
  eras,
  eraKeys,
  ensureEraData,
  ensureAllEraData,
  isEraLoaded,
  curriculum,
  timelineExtensions,
  timelineCategoryLabels,
  timelineCategoryIcons,
  quizExtensions,
  quizTypeLabels,
  debates,
  relatedRules,
  virtualRelatedTopics,
  eraEditorialFrames,
  insightRules,
  productExperience,
  experienceModes,
  experienceFlows,
  defaultExperienceFlowId,
  storyBlockRules,
  defaultStoryBlockPattern,
  categoryStoryBlockPatterns
};
