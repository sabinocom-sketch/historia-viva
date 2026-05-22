const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

async function build() {
  const root = path.resolve(__dirname);
  fs.mkdirSync(path.join(root, "chunks"), { recursive: true });

  await esbuild.build({
    absWorkingDir: root,
    entryPoints: [path.join(root, "bootstrap.js")],
    outdir: root,
    bundle: true,
    splitting: true,
    format: "esm",
    target: ["es2022"],
    minify: true,
    legalComments: "none",
    sourcemap: false,
    entryNames: "bundle",
    chunkNames: "chunks/[name]-[hash]",
    logLevel: "info"
  });

  console.log("bundle.js atualizado");
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
