# Historia Viva - Mobile Experience Architecture

## 1. Experience Intent

Historia Viva is a cinematic, mobile-first learning journey for history education. The app should not feel like a school manual, a slide deck, or a sequence of articles. It should feel like entering different historical eras through atmosphere, narrative rhythm, visual discovery, and emotionally meaningful progression.

The product experience is built around five learning states:

```text
Discovery
Immersion
Progression
Assimilation
Emotional reward
```

Every screen should answer one question:

```text
What should the learner feel, discover, or understand at this exact moment?
```

The interface should support the journey without becoming the journey. UI is quiet, contextual, and thumb-accessible. Historical atmosphere, narrative pacing, and short moments of interaction carry the experience.

## 2. Core UX Principles

1. One clear objective per screen.
2. Little text per moment.
3. Real mobile-first design, not desktop adaptation.
4. Primary CTA inside thumb reach.
5. Important content above the fold.
6. Cinematic fullscreen moments.
7. Clear narrative rhythm.
8. Atmosphere over visual overload.
9. Subtle and meaningful motion.
10. Clear emotional progression.

The design should always be tested against this rule:

```text
Does this screen feel like a study page, or like a moment in a time-travel journey?
```

If it feels like study, simplify and reframe it as discovery.

## 3. App Architecture

```text
App Shell
|
+-- Home / Journey Entry
+-- Era Selection
|   +-- Era Transition Screen
+-- Era Hub
|   +-- Subpath Selection
+-- Lesson Experience
|   +-- Lesson Intro / Hook
|   +-- Story Blocks
|   +-- Assimilation Layer
|   +-- Historical Chatbot
|   +-- Reality Connection
|   +-- Quiz Experience
|   +-- Critical Thinking
|   +-- Sources / Artefacts
|   +-- Reward / Progression
+-- Profile / Journey / Settings
```

The main flow is:

```text
Home
-> Era Selection
-> Era Transition
-> Era Hub
-> Subpath Selection
-> Lesson Intro
-> Story Blocks
-> Assimilation
-> Optional Historical Chatbot
-> Reality Connection
-> Quiz
-> Critical Thinking
-> Sources / Artefacts
-> Reward
-> Era Hub or next lesson
```

## 4. App Shell

The shell is minimal and context-aware. It should never compete with the historical scene.

### Responsibilities

- Provide safe navigation.
- Preserve progress.
- Expose profile and settings.
- Keep top-level journey context available.
- Disappear or reduce during cinematic lesson moments.

### Behaviour

- During hubs and selection screens, navigation may be visible.
- During lesson scenes, navigation becomes minimal: close/back, progress, and one main action.
- The main CTA lives in the bottom thumb zone.
- Secondary controls can sit at the top, away from the primary interaction area.
- The app uses `100dvh` for cinematic screens and respects safe areas.

## Responsive Runtime Architecture

Historia Viva now separates the experience by viewport and orientation instead of treating mobile as a compressed desktop layout.

### Desktop cinematic mode

Applies from `@media (min-width: 769px)`.

- Core journey screens use `100dvh`.
- Body overflow is locked for Home, Learn, Portal, Era, Timeline, Journey, and Lesson views.
- Hero, portal, timeline, story, and lesson scenes stay fullscreen and horizontally composed.
- Backgrounds use landscape framing and avoid initial page scroll.

### Mobile portrait storytelling mode

Applies from `@media (max-width: 768px) and (orientation: portrait)`.

- Body scroll is enabled so the app becomes a natural vertical journey.
- Core screens use `min-height: 100svh`, `height: auto`, and no artificial max-height.
- Era selection and era hub cards move from horizontal cinematic tracks into vertical story sections.
- Typography uses `clamp()` tokens for titles, body copy, and buttons.
- Primary actions stay large and thumb-friendly.
- Backgrounds switch to portrait-safe framing with less aggressive cropping.

### Mobile lesson composition contract

Prehistory story screens should preserve the immersive cave identity while prioritising composition before new visual effects.

- Keep the progress indicator compact at the top; on mobile story scenes, show the bar only and remove the textual progress label.
- Maintain clear separation between progress, artefact, title, narrative copy, and actions.
- Treat the artefact and title as one narrative group, with the artefact close enough to anchor the title but not touching the progress bar.
- Give the reading column enough width to avoid excessive line breaks while keeping a centred, cave-wall reading rhythm.
- Ensure the artefact never overlaps the title and the narrative copy never runs underneath the bottom actions.
- Keep bottom lesson actions above Android navigation/safe-area pressure, with the primary action still in thumb reach.
- Hide the global top-back control when the active lesson scene already includes a bottom `Voltar` action.
- Preserve the existing cave, flint, fire, ochre, and rock-painting visual language when adjusting spacing.

### Mobile landscape mode

Applies from `@media (max-width: 900px) and (orientation: landscape)`.

- Mobile landscape is intentionally locked.
- `.orientation-lock-overlay` appears fullscreen and asks the learner to rotate the phone.
- `.app-root` is made non-interactive behind the overlay.
- Do not force orientation through browser APIs; keep the lock declarative through CSS media queries.

### Mobile scroll contract

Mobile portrait scroll must work immediately on load, after navigation, and after browser back/forward. Avoid putting `overflow: hidden`, fixed heights, `touch-action: none`, transforms, or scale animations on root scroll containers.

Scrollable mobile screens use:

```text
min-height: 100svh
height: auto
overflow-y: auto
-webkit-overflow-scrolling: touch
touch-action: pan-y
```

Animation should stay on internal elements, not on the scroll root.

### Desktop Timeline fullscreen contract

Timeline View is a desktop cinematic screen. On desktop, `body[data-view="timeline"]` and `body[data-view="journey"]` lock their root, active categories panel, and `.timeline-view-screen` to `100dvh`.

The Timeline must:

- fill the viewport exactly;
- keep the background layer fullscreen;
- avoid vertical page scroll;
- keep all visible timeline steps inside common desktop heights such as `1366x768` and `1920x1080`.

### Dual hero image system

The Home hero is served through a responsive `<picture>` element:

```text
assets/hero-desktop.webp
assets/hero-mobile.webp
```

The browser selects the portrait or landscape image through media queries. `screen-assets.js` mirrors that decision for preloading so the first meaningful visual is warmed without forcing every era asset into the initial load.

## 5. Home / Journey Entry

### Objective

Invite the learner to continue the journey.

The Home screen is not a dashboard. It is the entrance to a temporal museum.

### Screen Structure

```text
Atmospheric fullscreen background
Top utility layer
Current journey state
Short emotional prompt
Primary CTA: Continue journey
Secondary access: Eras, Profile, Settings
```

### Guidelines

- Use one dominant visual scene.
- Keep text short and atmospheric.
- Show the active era or current lesson.
- Keep the main CTA reachable by thumb.
- Use subtle ambient movement: dust, light, smoke, fog, or texture drift.

Example:

```text
The fire is still burning.
Continue: The First Night
```

## 6. Era Selection

### Objective

Let the learner choose an era as a destination, not as a school category.

### Layout

```text
Current or recommended era in focus
Temporal path / timeline indicator
Other eras partially visible
Era-specific visual atmosphere
Bottom CTA
```

### Era Card Content

- Era name.
- Short atmospheric line.
- Visual texture.
- Symbolic artefact.
- Progress state.
- Locked, available, in progress, or completed status.

Example:

```text
Pre-History
Before cities, before writing, there was fire.
```

## 7. Era Transition Screen

### Objective

Create the feeling of entering another time.

This screen should be brief, cinematic, and skippable on repeat visits.

### Recommended Sequence

```text
Fade to dark
-> Era texture emerges
-> Era title appears
-> Ambient motion begins
-> Transition into Era Hub
```

### Duration

- First visit: 1.2s to 2.5s.
- Repeat visit: 0.6s to 1.2s or skipped.

### Performance Notes

- Use opacity and transform.
- Avoid heavy blur.
- Use compressed textures.
- Preload the Era Hub hero scene during the transition.

## 8. Era Hub

### Objective

Act as the living museum room for a historical era.

### Structure

```text
Era hero scene
Subpath choices
Current lesson progress
Unlocked artefacts
Timeline milestones
Next recommended action
```

### Behaviour

- The hub can scroll naturally.
- The first viewport must establish the era immediately.
- Subpaths should feel like narrative doors.
- Artefacts should feel collectible but not childish.
- Completed progress should feel like the learner is restoring a timeline.

Example subpaths for Antiquity:

```text
Life in the City
Power and Empire
Myth and Ritual
Science and Philosophy
War and Trade Routes
```

## 9. Subpath Selection

### Objective

Choose a narrative thread inside an era.

Each subpath should include:

- A short hook.
- Number of episodes.
- Progress status.
- Main artefact.
- Recommended next lesson.

Example:

```text
The Birth of Cities
3 episodes
Artefact: ceramic fragment
```

## 10. Lesson Experience Architecture

The lesson is the main learning unit, but it should never feel like a conventional lesson.

```text
Lesson Experience
|
+-- Lesson Intro / Hook
+-- Story Blocks
+-- Assimilation Layer
+-- Historical Chatbot
+-- Reality Connection
+-- Quiz Experience
+-- Critical Thinking
+-- Sources / Artefacts
+-- Reward / Progression
```

Ideal length:

```text
3 to 6 minutes
```

The learner should feel that they have moved through a meaningful historical scene, not consumed a content page.

## 11. Lesson Intro / Hook

### Objective

Capture attention in 5 to 8 seconds.

### Structure

```text
Fullscreen atmospheric scene
One short line or question
One emotional tension
CTA: Enter the story
```

Example:

```text
Night was more dangerous before fire.
```

### Rules

- Maximum 2 lines of text.
- No long explanations.
- The hook should create curiosity before teaching.
- CTA remains accessible in the lower third.

## 12. Story Block Architecture

Story blocks are micro-scenes, not article sections.

### Story Block Structure

```text
Story Block
|
+-- Atmospheric background
+-- Legibility overlay
+-- Small living element
+-- Short narrative text
+-- Optional interaction
+-- Progress indicator
+-- CTA or gesture hint
```

### Design Goals

- Lightweight.
- Cinematic.
- Easy to read on mobile.
- Atmosphere-led.
- Built from reusable visual layers.
- Strong enough to feel like a scene, simple enough to perform well.

### Text Rules

- 18 to 42 words per block.
- 2 to 4 lines where possible.
- One idea per block.
- Avoid textbook density.
- Prefer sensory and causal language.

## 13. Story Block Types

### Establishing Block

Introduces time, place, or context.

Example:

```text
12,000 years ago, the world begins to warm.
```

Use for:

- Beginning a lesson.
- Changing location.
- Marking historical context.

### Character Moment

Humanizes the historical moment.

Example:

```text
A young hunter watches smoke rise from the cave floor. For the first time, night feels less endless.
```

Use for:

- Empathy.
- Emotional rhythm.
- Everyday life.

### Artefact Focus

Lets an object carry the learning.

Components:

- Artefact visual.
- Focus overlay.
- Short caption.
- Tap, hold, or drag reveal.

Use for:

- Evidence.
- Material culture.
- Museum-like interaction.

### Cause And Effect

Shows historical relationships visually.

Example:

```text
Climate shifts
-> Animals migrate
-> Human groups move
```

Use for:

- Systems thinking.
- Historical causality.
- Assimilation.

### Timeline Pulse

Marks a passage through time.

Use for:

- Before/after.
- Jumping years.
- Revealing progression.

### Reflection Pause

Slows the rhythm and helps assimilation.

Example:

```text
What would change in your life if writing did not exist?
```

Use for:

- Emotional pause.
- Critical thinking.
- Transition into interaction.

## 14. Story Block Mobile Behaviour

### Sizing

- Use `100dvh` for major cinematic blocks.
- Use `85dvh` for lighter narrative moments.
- Keep CTA in the bottom safe area.
- Keep primary text away from notches and edges.

### Interaction

- Tap to continue.
- Swipe vertically for scene progression.
- Hold to reveal a detail.
- Drag lightly to inspect artefacts.
- Use bottom sheets for optional extra context.

### Avoid

- Long paragraphs.
- Multiple simultaneous CTAs.
- Heavy illustration stacks.
- Scroll fatigue.
- Required precision gestures.

## 15. Assimilation Layer

### Objective

Turn information into understanding.

The assimilation layer appears after 2 to 4 story blocks.

### Formats

- Interpretive choice.
- Mini causal map.
- Temporal ordering.
- Before/after comparison.
- "What does this mean?" reflection.

Example:

```text
Why did control of fire change human life?

A. It helped groups cook, warm themselves, and stay safer.
B. It created the first empires.
C. It replaced language.
```

### Behaviour

- Calm visual state.
- Immediate feedback.
- Short explanation.
- No punitive tone.
- Return to the narrative after completion.

## 16. Historical Chatbot

### Objective

Offer contextual dialogue without breaking immersion.

The chatbot should not look like generic support chat. It should feel like speaking to someone inside the historical frame.

### Possible Modes

```text
Ask an archaeologist
Ask a scribe
Ask a witness
Ask a chronicler
Ask a museum guide
```

### Rules

- Optional, not blocking.
- Short responses.
- Era-appropriate tone.
- Suggested questions.
- Clear distinction between evidence and reconstruction.

Example:

```text
Ask the scribe:
What was hardest about learning to write?
```

## 17. Reality Connection

### Objective

Connect past and present.

This layer answers:

```text
Why does this still matter?
```

### Format

```text
Then
...

Now
...
```

Example:

```text
Then:
The first cities organized food, work, and power.

Now:
Modern cities still depend on those same choices.
```

This should be brief, concrete, and emotionally grounded.

## 18. Quiz Experience

### Objective

Test understanding as part of the journey.

The quiz should not feel like a worksheet.

### Question Types

- Visual choice.
- Timeline sequence.
- Artefact identification.
- Cause and consequence.
- Dramatized true or false.
- Historical decision.

### Feedback

- Immediate.
- Narrative.
- Respectful.
- Focused on reasoning.

Example:

```text
Good choice. That answer shows how agriculture changed the relationship between people and territory.
```

## 19. Critical Thinking

### Objective

Build historical reasoning.

### Prompts

- How do we know this?
- Who told this story?
- What source is missing?
- What might be uncertain?
- Which perspectives are absent?

### Design

- More sober visual tone.
- Artefacts and sources in focus.
- Short prompts.
- Optional open response.
- Semi-guided answers for mobile speed.

## 20. Sources / Artefacts

### Objective

Make sources feel like a museum collection, not a bibliography.

### Artefact Card Structure

```text
Artefact unlocked
Name
Approximate date
Origin
What it reveals
What we still cannot know
```

Example:

```text
Artefact unlocked
Fossilized charcoal
c. 400,000 BCE
Reveals traces of controlled fire use.
```

### Behaviour

- Artefacts are saved to the learner's journey.
- Tapping opens a focused detail view.
- Detail view can include source uncertainty.
- Avoid academic citation density in the main flow.

## 21. Reward / Progression

### Objective

Close the lesson with emotional and historical progress.

### Reward Types

- Artefact unlocked.
- Timeline fragment revealed.
- New room or subpath opened.
- Subtle badge.
- Final reflection.
- Closing cinematic scene.

Avoid generic confetti or childish rewards. Prefer narrative closure.

Example:

```text
You preserved a memory from Pre-History.
```

## 22. Mobile Interaction Patterns

### Primary Patterns

- Tap to continue.
- Vertical swipe between scenes.
- Hold to reveal detail.
- Short drag to inspect artefact.
- Bottom sheet for extra information.
- Segmented comparison for then/now.
- Light haptic feedback for milestones.

### Rules

- One primary interaction per screen.
- Minimum touch target: 44px.
- Primary CTA height: 48px or more.
- Avoid precision-dependent gestures.
- Keep everything usable with one hand.
- Do not hide essential progress behind complex gestures.

## 23. Thumb Reach System

```text
Top zone:
Context, exit, compact progress.

Middle zone:
Visual focus and story content.

Bottom zone:
Primary CTA, choices, direct interaction.
```

### CTA Rules

- Bottom aligned with safe area.
- Clear pressed and loading states.
- Short labels: Continue, Reveal, Choose, Enter.
- Full-width or near full-width on small screens.
- Never placed under browser or OS controls.

## 24. Safe Area System

All cinematic screens should use dynamic viewport height and safe area padding.

```css
.screen {
  min-height: 100dvh;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
```

### Rules

- No important content inside notch areas.
- No CTA flush against the bottom edge.
- Bottom sheets include safe area padding.
- Story blocks use `100dvh`, not `100vh`.
- Provide fallbacks for older browsers.

## 25. Layout System

### Mobile Base

```text
Canvas: 100dvh
Grid: 4px base
Page margin: 20px
Small mobile margin: 16px
CTA zone: bottom 96px to 140px
```

### Cinematic Screen Structure

```text
Atmospheric background
Top utility layer
Primary visual focus
Narrative text
Interaction / CTA
Safe area padding
```

### Layout Rules

- Use one column in portrait.
- Do not adapt desktop columns down to mobile.
- Use cards only for repeated objects or contained tools.
- Use fullscreen scenes for narrative moments.
- Use bottom sheets for optional context.

## 26. Typography Hierarchy

```text
Era Title: 34-40px
Screen Title: 28-32px
Story Line: 22-28px
Body Short: 16-18px
Caption: 13-14px
Metadata: 12-13px
Button: 16-17px
```

### Rules

- No negative letter spacing.
- Line-height between 1.25 and 1.45.
- High contrast over backgrounds.
- Use overlays on images.
- Maximum 2 to 4 lines for narrative text.
- Avoid long paragraphs in the main flow.

## 27. Mobile Spacing System

Use a 4px base system.

```text
4px  micro spacing
8px  compact grouping
12px label-to-content
16px component internal
20px page margin
24px section rhythm
32px cinematic breathing
48px major separation
64px emotional pause
```

Spacing is part of the narrative rhythm. Empty space creates attention and emotional weight.

## 28. Visual Rhythm System

The experience alternates intensity and rest.

```text
Visual impact
-> Short narrative
-> Light interaction
-> Pause
-> Reveal
-> Reward
```

### Recommended Lesson Rhythm

```text
00:00 Hook
00:20 Context
00:45 Human moment
01:20 Light interaction
01:50 Assimilation
02:20 Reality connection
02:50 Quiz
03:30 Critical thinking
04:00 Reward
```

## 29. Motion Philosophy

Motion must have meaning.

Use motion for:

- Entering an era.
- Moving through time.
- Revealing detail.
- Touch feedback.
- Progression.
- Reward.

Avoid:

- Constant decorative movement.
- Heavy parallax.
- Long blocking animations.
- Motion that hurts readability.

### Motion Rules

```text
Subtle
Slow when emotional
Fast when functional
Performant
Respectful of reduced motion
```

Recommended techniques:

- `transform`
- `opacity`
- limited blur
- lightweight CSS particles
- sprite-based loops where needed
- `prefers-reduced-motion`

## 30. Transition System

### Era Entry

```text
Dark fade
-> Era texture
-> Era title
-> Ambient layer
-> Hub reveal
```

### Lesson Entry

```text
Hero scene pushes in slightly
-> Text fades in
-> CTA unlocks after short delay
```

### Story Block Change

```text
Background crossfade
-> Previous text dissolves
-> New living element appears
-> Progress advances
```

### Reveal

```text
Tap
-> Short delay
-> Subtle spotlight
-> Detail appears
-> Explanation line
```

### Reward

```text
Artefact lights up
-> Timeline updates
-> Short emotional message
-> Continue CTA
```

## 31. Era Identity System

Each era has a distinct identity inside a consistent design system.

### Pre-History

Feeling:

- Raw.
- Organic.
- Mysterious.
- Elemental.

Visual language:

- Stone.
- Charcoal.
- Blue-grey.
- Fire.
- Dust.

Motion:

- Slow flame.
- Dust drift.
- Shifting shadows.

### Antiquity

Feeling:

- Solar.
- Monumental.
- Ordered.
- Mythic.

Visual language:

- Marble.
- Soft gold.
- Sand.
- Mediterranean blue.
- Sunlight.

Motion:

- Light through architecture.
- Golden dust.
- Slow vertical pans.

### Middle Ages

Feeling:

- Dense.
- Ritual.
- Fragmented.
- Tense.

Visual language:

- Parchment.
- Dark wood.
- Iron.
- Fog.
- Torchlight.

Motion:

- Fog movement.
- Torch flicker.
- Slow shadows.

### Early Modern Period

Feeling:

- Discovery.
- Expansion.
- Intellectual tension.
- Navigation.

Visual language:

- Maps.
- Ink.
- Old paper.
- Copper.
- Deep blue.

Motion:

- Route lines appearing.
- Ink spreading.
- Map regions revealing.

### Contemporary Era

Feeling:

- Speed.
- Shock.
- Transformation.
- Contrast.

Visual language:

- Metal.
- Industrial black.
- Cold white.
- Signal red.
- Electric yellow.

Motion:

- Faster cuts.
- Subtle glitches.
- Mechanical transitions.
- Sharper rhythm.

## 32. Component Philosophy

Components should be functional, contextual, and quiet.

### Core Components

```text
EraCard
TimelinePulse
StoryBlock
ArtefactReveal
NarrativeCTA
BottomChoiceSheet
ProgressThread
HistoricalChatPrompt
SourcePanel
RewardMoment
```

### Rules

- Components inherit era identity.
- UI should not look generic.
- Text is short.
- States are clear.
- Feedback is immediate.
- Motion is subtle.
- Components should be reusable across eras without flattening their atmosphere.

## 33. Scroll Philosophy

Scroll should feel like narrative movement, not content browsing.

### Prefer

- Scene-based vertical progression.
- Smooth snap for major story blocks.
- Natural scroll in hubs.
- Bottom sheets for detail.
- Fixed moments for dramatic emphasis.

### Avoid

- Infinite article-like scroll.
- Long horizontal carousels.
- Required horizontal scrolling.
- Dense text below the fold without visual cue.

Ideal pattern:

```text
Fullscreen scene
-> Tap or swipe
-> New scene
-> Short interaction
-> Pause
```

## 34. Responsive Behaviour

### Mobile Portrait

Primary experience.

- Fullscreen.
- One column.
- Thumb-first.
- Short text.
- Dominant imagery.

### Small Mobile

- Reduce title size.
- Use 16px margins.
- Use full-width CTAs.
- Reduce particles and overlays.
- Prioritize legibility.

### Tablet

- Preserve cinematic composition.
- Allow wider content where useful.
- Artefacts can sit beside text.
- Do not turn the app into a desktop dashboard.

### Desktop

Secondary experience.

- Keep the journey format.
- Use a centered mobile-like composition if needed.
- Atmospheric background can fill the rest of the screen.
- Avoid turning lessons into articles.

## 35. Landscape Behaviour

Landscape is not the primary mode.

Preferred adaptation:

```text
Visual scene on one side
Text and interaction on the other
CTA always visible
```

Fallback:

```text
Rotate your phone to continue the journey.
```

Use the fallback only if the scene truly depends on portrait.

Rules:

- Do not hide the CTA.
- Respect side safe areas.
- Avoid tiny text.
- Keep visual continuity.

## 36. Performance Strategy

The app should perform well on mid-range mobile devices.

### Assets

- Use WebP or AVIF.
- Serve responsive image sizes.
- Lazy load per era and per lesson.
- Preload only the next story block.
- Reuse overlays and textures.
- Use lightweight atmospheric placeholders.

### Motion

- Animate `transform` and `opacity`.
- Avoid layout reflow.
- Limit blur.
- Pause offscreen animations.
- Reduce particles on low-power devices.
- Respect `prefers-reduced-motion`.

### Rendering

- Modular story blocks.
- Unmount old scenes when safe.
- Cache current era assets.
- Load chatbot only on demand.
- Lazy load source and artefact panels.

### Content

- Keep text payloads small.
- Separate assets by era.
- Store lesson structure as modular data.
- Avoid loading all eras at startup.

## 37. Emotional Pacing System

The learner should move through a clear emotional curve.

```text
Curiosity
-> Entry
-> Wonder
-> Understanding
-> Doubt
-> Interpretation
-> Achievement
-> Desire to continue
```

### Required Moment Types

Each lesson should include:

- One wonder moment.
- One human moment.
- One reasoning moment.
- One reward moment.

### Moment Definitions

```text
Wonder Moment:
Large image, minimal text, sense of scale.

Human Moment:
Historical life through a person, choice, fear, or desire.

Thinking Moment:
Short question, slower rhythm, reduced visual noise.

Action Moment:
Quiz, decision, reveal, or artefact interaction.

Reward Moment:
Narrative closure and visible progress.
```

## 38. Example Lesson

### Era

Pre-History

### Lesson

Control of Fire

### Flow

```text
Hook:
Night was more dangerous before fire.

Story Block 1:
Darkness, distant sounds, a human group waiting in silence.

Story Block 2:
A spark lights faces inside a cave.

Story Block 3:
Fire changes food, warmth, protection, and gathering.

Assimilation:
What was the greatest change caused by fire?

Chatbot:
Ask an archaeologist how we know early humans used fire.

Reality Connection:
Today we still gather around light, warmth, and shared meals.

Quiz:
Select three consequences of controlling fire.

Critical Thinking:
Which traces can survive for thousands of years?

Artefact Reward:
Fossilized charcoal unlocked.

Progression:
The Pre-History timeline gains a new milestone.
```

## 39. Modular Organization

```text
Experience System
|
+-- Navigation
|   +-- App Shell
|   +-- Era Flow
|   +-- Lesson Flow
|
+-- Visual System
|   +-- Era Identities
|   +-- Atmospheres
|   +-- Textures
|   +-- Overlays
|
+-- Narrative System
|   +-- Hooks
|   +-- Story Blocks
|   +-- Reflection
|   +-- Rewards
|
+-- Interaction System
|   +-- CTAs
|   +-- Gestures
|   +-- Quiz
|   +-- Chatbot
|
+-- Motion System
|   +-- Era Transitions
|   +-- Story Transitions
|   +-- Reveals
|   +-- Reduced Motion
|
+-- Performance System
    +-- Assets
    +-- Lazy Loading
    +-- Caching
    +-- Mobile Optimization
```

## 40. Product Decision Checklist

Use this checklist before approving a new screen or feature.

```text
Does the screen have one clear objective?
Is the main CTA reachable by thumb?
Is the text short enough for mobile?
Does the first viewport establish atmosphere?
Does motion support meaning?
Does the screen respect safe areas?
Can the scene perform on a mid-range phone?
Does this feel like a historical journey instead of a study page?
Is there a clear emotional rhythm?
Does the learner leave with understanding, not just completion?
```

## 41. Current Implementation Alignment

The current app implementation should follow these concrete decisions:

- Cinematic screens use `100dvh` rather than fixed `100vh` or `100svh`.
- Safe area variables are defined globally and applied to fullscreen screens, lesson screens, portal screens, and mobile CTAs.
- On small mobile screens, the Home primary CTA is fixed in the bottom thumb zone.
- Era Selection becomes a horizontal, swipeable set of large destination cards on mobile.
- Lesson intro, story blocks, and post-story steps stay fullscreen and avoid dashboard chrome.
- Post-story labels use narrative language such as `Pausa de assimilação`, `Ponte ao presente`, `Lente crítica`, and `Artefacto desbloqueado`.
- Initial asset preloading is limited to Home/Learn entry imagery; lesson-specific images should load when the learner approaches the relevant lesson.
- Browser validation can use Edge as a local Playwright fallback when the Playwright-managed Chromium binary is unavailable.
