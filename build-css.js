const fs = require("fs");

const files = [
  "styles/00-tokens.css",
  "styles/01-motion.css",
  "styles/02-base-layout.css",
  "styles/03-cinematic-routes.css",
  "styles/04-learning-hubs.css",
  "styles/05-lesson-experience.css",
  "styles/06-feature-panels.css",
  "styles/07-responsive.css"
];

const bundle = files
  .map((file) => fs.readFileSync(file, "utf8").trimEnd())
  .join("\n\n");

fs.writeFileSync("styles.css", `${bundle}\n`);
console.log("styles.css atualizado");
