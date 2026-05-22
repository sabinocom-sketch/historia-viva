# História Viva architecture

The app is now split by responsibility:

- `data.js` is a small public facade that re-exports the data modules.
- `data/eras.js` contains lightweight era metadata and async loaders for full era content.
- `data/eras/` contains the full per-era content chunks loaded on demand.
- `data/timeline.js` contains timeline extensions, timeline taxonomy, and timeline enrichment.
- `data/quiz.js` contains quiz extensions, quiz taxonomy, and quiz enrichment.
- `data/debates.js` contains historical debate data.
- `data/rules.js` contains editorial frames, related-topic rules, virtual related prompts, and interpretive insight rules.
- `data/curriculum.js` contains the learning curriculum: sections inside each period and the matching rules that assign lessons to those sections.
- `data/experience.js` contains product experience metadata, experience modes, guided flows, and flow steps.
- `PRODUCT_EXPERIENCE.md` defines the commercial/product journey: positioning, core loop, user fantasy, retention hooks, and campaign model.
- `VISUAL_SYSTEM.md` defines the reusable visual language: era palettes, materials, lighting, motion, asset levels, naming conventions, and performance rules.
- `content-service.js` adapts raw data into app-ready records with stable IDs: lessons, explore entries, quizzes, sources, debate subsets, related topics, and related navigation targets.
- `lesson-summary.js` owns lightweight lesson labels, hero copy, moods, and preview metadata used by timelines and hubs without loading the full lesson experience.
- `lesson-experience.js` is lazy-loaded only when a full lesson route or Story Block action needs it. It owns the fullscreen lesson screens: intro handoff, Story Blocks, the modular PostStoryLessonFlow, and Story Block navigation helpers.
- `state.js` contains transient UI state such as the selected era, selected tab, quiz index, source index, curiosity index, debate index, and quiz streak.
- `utils.js` contains pure helpers shared by the app, such as text normalisation, HTML escaping, deterministic seeds, list picking, and preview creation.
- `dom.js` centralises DOM references so selectors are not repeated through the app.
- `progress.js` owns XP, streaks, badges, persistence, and progress rendering.
- `screen-assets.js` owns critical screen asset preloading and paint-readiness helpers, currently used to warm the era selection images before the first `learn` transition.
- `screen-assets.js` also preloads the correct Home hero variant for the current breakpoint/orientation before warming heavier learning assets.
- `screen-controller.js` owns screen mounting: only the active `.feature-view` stays mounted in `.content-shell`; inactive screens are parked in a document fragment to reduce hidden DOM, layout work, and late visual re-entry.
- `bootstrap.js` is the tiny startup layer. It shows Home immediately, loads the full app on deep routes, first meaningful interaction, or idle time, and replays the triggering click once the app is ready.
- `script.js` contains the full application behaviour: section rendering, event handlers, conversation assembly, and navigation orchestration.
- `bundle.js` is the generated browser-facing bootstrap. Heavier app code is generated into hashed files in `chunks/`; do not edit generated JS directly.
- `build-bundle.js` regenerates `bundle.js` and `chunks/` after module changes.
- `styles/` contains the modular CSS source files. Edit those files and run `npm run build:css` to regenerate the browser-facing `styles.css`, which is still the only stylesheet linked from `index.html`.
- `index.html` contains the app shell, the contextual back control, static screen templates that are mounted one at a time by `screen-controller.js`, and the `.orientation-lock-overlay` used to block mobile landscape interaction. The former fixed top navigation bar was removed so movement through the experience stays contextual.

When adding new period content, prefer editing `data/eras.js`.
When adding timeline-only enrichment or categories, prefer `data/timeline.js`.
When adding quiz-only enrichment or quiz labels, prefer `data/quiz.js`.
When adding debates, prefer `data/debates.js`.
When adding related-topic or editorial rules, prefer `data/rules.js`.
When changing period sections such as Paleolítico/Revolução Neolítica/Roma, update `data/curriculum.js`.
When changing the guided journey, product loop, experience modes, or campaign steps, update `data/experience.js` and mirror strategic decisions in `PRODUCT_EXPERIENCE.md`.
When changing how raw data becomes lessons, quiz records, source records, debate filters, or internal related links, update `content-service.js`.
When changing navigation or interaction state, prefer `state.js`.
When changing element IDs or app shell markup, update `dom.js`.
When changing XP, streaks, badges, or progress persistence, update `progress.js`.
When changing which screen assets must be warm before motion starts, update `screen-assets.js`.
When changing screen lifecycle, active-screen mounting, or how inactive screens are removed from layout, update `screen-controller.js`.
When changing how a section renders or responds to clicks, use `script.js`.
When adding generic string/list helpers, prefer `utils.js`.
After changing any JavaScript module, run `npm run build:js` or `node build-bundle.js` so the browser uses the latest generated code.

## Current curriculum notes

- Pre-History lessons are generated from `data/eras.js` timeline entries and assigned to curriculum sections by the `match` terms in `data/curriculum.js`.
- The Pre-History MVP is intentionally scoped as three emotional phases: Paleolithic means survive, Mesolithic means adapt, and Neolithic Revolution means build.
- The Paleolithic section is intentionally scoped to five lessons: discovery of fire, stone tools, hunting and fishing, rock art, and funerary rites.
- Paleolithic lesson hero images are mapped in `styles/05-lesson-experience.css` by `data-section="paleolitico"` plus the lesson `data-mood` values `fire`, `stone`, `hunt`, `art`, and `rites`; those five lesson images are also preloaded through `index.html` and `screen-assets.js`.
- Lesson routes open in `currentLessonMode: "intro"` so the hero is a true fullscreen screen with no lower activity panel; `Iniciar Jornada` switches the lesson to `understand` and mounts the flow, context trail, activity grid, tabs, and actions.
- Intro lesson heroes use `100svh` and lock page overflow while in `data-mode="intro"` so the first screen fits the viewport without vertical scroll; the hero background must render as one continuous image layer, not repeated panels or cropped duplicates.
- `EXPERIENCE_NARRATIVE_DESIGN_SYSTEM.md` is the source of truth for UX, narrative tone, hook structure, lesson rhythm, debate/source/reward framing, and the cinematic discovery principles that should guide future screen changes.
- `VISUAL_SYSTEM.md` is the source of truth for visual system decisions: design language by era, asset levels, reusable textures/particles/overlays, CSS token naming, and mobile performance constraints. Check it before adding new visual assets or one-off backgrounds.
- `MOBILE_EXPERIENCE_ARCHITECTURE.md` is the source of truth for the smartphone-first cinematic experience: `100dvh` screens, safe areas, thumb-reach CTAs, era identity, story block structure, transition philosophy, emotional pacing, and mobile performance principles. When changing Home, era selection, hubs, lesson flow, motion, or asset loading, check this document first.
- Mobile experience implementation notes: core cinematic screens should use `100dvh` plus safe area padding; Home keeps the primary CTA in the bottom thumb zone on small screens; Learn/Era Selection uses swipeable era cards on mobile; lesson/post-story screens preserve fullscreen narrative flow; and initial preloading should stay limited to the Home/Learn entry assets rather than all lesson imagery.
- Responsive architecture notes: desktop views from `769px` lock the main cinematic routes to `100dvh` with controlled overflow; Timeline and Journey explicitly lock `.app-root`, `.content-shell`, the active categories panel, and `.timeline-view-screen` to `100dvh` so the timeline remains fullscreen. Mobile portrait at `max-width: 768px` enables natural vertical scroll, `100svh` minimum sections, vertical era/story card flow, `touch-action: pan-y`, and portrait-safe image framing. Mobile landscape up to `900px` shows `.orientation-lock-overlay`, blocks `.app-root` pointer events, and asks the learner to rotate the phone. The Home hero uses `assets/hero-desktop.webp` and `assets/hero-mobile.webp` through a responsive `<picture>` element.
- The Mesolithic section is intentionally scoped to three lessons: end of the ice age, domestication of animals, and first permanent shelters.
- The Neolithic Revolution section integrates Neolithic and Metal Ages into five lessons: agriculture, villages and community, mastery of metals, trade and exchange, and birth of civilizations.
- Whole-era journey cards are configured in `script.js` through `wholeEraJourneyConfig`; each card reuses the era's lesson set and presents it as a chronological timeline.
- Timeline lesson points must stay minimal: visible copy is only the historical date and short lesson title. Hover feedback carries the cinematic context, using `buildLessonIntroFrame()` for the hook line and `data-section`/`data-mood` in the modular CSS source for the matching visual asset.
- Story Blocks live in `data/story-blocks.js`, are exposed through `getLessonStoryBlocks()` in `content-service.js`, and are rendered by `lesson-experience.js`. Lesson routes move from intro into a fullscreen linear sequence: story blocks, Reflection Moment, Assimilation Chatbot, Reality Bridge, Critical Lens, Challenge, Reward, and Next Lesson Teaser. `currentLessonStoryBlockIndex` tracks the active story block and `currentPostStoryStep` tracks the post-story screen. These screens are the lesson structure itself and must not render dashboard chrome, tabs, grids, contextual trails, or scroll-heavy article layouts around them.
- After any curriculum, timeline, journey-card, bootstrap, or app-module change, rebuild the generated JS with `npm run build:js` or `node build-bundle.js`. After any modular CSS change, rebuild `styles.css` with `npm run build:css` or `node build-css.js`.
