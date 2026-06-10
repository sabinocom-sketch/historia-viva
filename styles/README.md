# CSS architecture

Edit the modular source files in this directory, then run:

```sh
npm run build:css
```

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
- For the refined cave title treatment, keep the current title scale and tune presence with weight/shadow first; body copy should use warmer cave-stone contrast (`#d9c5a0`), `font-weight: 500`, and a slight negative top margin instead of near-white spacing.
- Lesson summary screens must keep all summary cards and fixed actions inside the fullscreen viewport. Adjust the summary-specific title scale, card height, gaps, and safe-area padding before allowing vertical overflow.
