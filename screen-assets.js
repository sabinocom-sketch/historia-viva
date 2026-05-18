const supabaseAssetBaseUrl = "https://wvxomznvbebwtxfsvfiv.supabase.co/storage/v1/object/public/Imagens%20App%20Historia/Assets";

const learnAssetUrls = [
  "pre-historia.webp",
  "idade-antiga.webp",
  "idade-media.webp",
  "idade-moderna.webp",
  "idade-contemporanea.webp",
  "historia-de-portugal.webp",
  "grande-jornada-historica.webp",
  "licao-descoberta-do-fogo.webp",
  "licao-ferramentas-de-pedra.webp",
  "licao-caca%20e-pesca.webp",
  "licao-arte-rupestre.webp",
  "licao-ritos-funerarios.webp"
].map((assetName) => `${supabaseAssetBaseUrl}/${assetName}`);

const preloadCache = new Map();

function preloadImage(url) {
  if (preloadCache.has(url)) return preloadCache.get(url);

  const preload = new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve({ url, ok: true });
    image.onerror = () => resolve({ url, ok: false });
    image.src = url;
    if (image.decode) {
      image.decode().then(
        () => resolve({ url, ok: true }),
        () => {}
      );
    }
  });

  preloadCache.set(url, preload);
  return preload;
}

function timeout(ms) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve("timeout"), ms);
  });
}

export function preloadLearnAssets() {
  return Promise.all(learnAssetUrls.map(preloadImage));
}

export function waitForLearnAssets(maxWaitMs = 900) {
  return Promise.race([
    preloadLearnAssets(),
    timeout(maxWaitMs)
  ]);
}

export function afterNextPaint() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}
