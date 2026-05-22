const esbuild = require("esbuild");
const path = require("path");

async function build() {
  const root = path.resolve(__dirname);

  await esbuild.build({
    absWorkingDir: root,
    entryPoints: [path.join(root, "script.js")],
    outfile: path.join(root, "bundle.js"),
    bundle: true,
    format: "iife",
    target: ["es2019"],
    minify: true,
    legalComments: "none",
    sourcemap: false,
    logLevel: "info"
  });

  console.log("bundle.js atualizado");
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
