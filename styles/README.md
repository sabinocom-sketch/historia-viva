# CSS architecture

Edit the modular source files in this directory, then run:

```sh
npm run build:css
```

For full lesson-screen QA captures, run:

```sh
npm run screenshot:lesson
```

This walks one lesson from intro through next-teaser, capturing desktop and mobile screens into `screenshots/lesson-flow/<lesson-slug>/`.

`styles.css` is the generated browser-facing stylesheet linked from `index.html`.

- `00-tokens.css`: design tokens, image variables, era variables, safe-area sizing.
- `01-motion.css`: transitions, route animations, keyframes, reduced-motion behavior.
- `02-base-layout.css`: reset, base elements, app shell, shared panels and controls.
- `03-cinematic-routes.css`: portal, subpath, world, and timeline route screens.
- `04-learning-hubs.css`: learn screen, era cards, category maps, subpath hubs.
- `05-lesson-experience.css`: lesson intro, story blocks, post-story flow, lesson actions.
- `06-feature-panels.css`: home, chat, timeline list, explore, quiz, debate, mission, progress panels.
- `07-responsive.css`: viewport, mobile portrait, desktop, and orientation-specific rules.

## Lesson action notes

- Prehistory story-next buttons start hidden while cave text reveals. Keep their hover and focus-visible states explicitly visible and clickable (`opacity: 1`, `pointer-events: auto`) so disabling the reveal animation on hover does not hide the Continue action.
- Prehistory narrative titles should stay slightly smaller than hero-scale text but visually heavier than body copy. Use ochre texture, dark handmade shadowing, and tighter vertical spacing so the title reads as pigment painted into cave stone.
- Post-story titles reuse the same ochre pigment texture and dark handmade shadow treatment as lesson narrative titles; keep size overrides separate from the shared color/texture treatment.
- For the refined cave title treatment, keep the current title scale and tune presence with weight/shadow first; body copy should use warmer cave-stone contrast (`#d9c5a0`), `font-weight: 500`, and a slight negative top margin instead of near-white spacing.
- Lesson summary screens must keep all summary cards and fixed actions inside the fullscreen viewport. Adjust the summary-specific title scale, card height, gaps, and safe-area padding before allowing vertical overflow.
- Lesson debate screens should stack options and feedback inside `.post-lesson-debate-panel`; do not place both as independent children in the same `grid-area`, or the selected feedback can overlap the option cards.
- Post-lesson quizzes show one question at a time. Keep the active question, feedback, and action buttons in a single viewport; do not reintroduce multi-question scroll panels.
- Completed post-lesson quiz panels should keep the same two-column answer grid as unanswered questions. Reserve stable panel space for the final result and avoid shrinking `.quiz-screen.is-complete` option cards or clamping feedback text, because long answers can become uneven and hard to read.
