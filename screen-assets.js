const supabaseAssetBaseUrl = "https://wvxomznvbebwtxfsvfiv.supabase.co/storage/v1/object/public/Imagens%20App%20Historia/Assets";

const learnAssetUrls = [
  "pre-historia.webp",
  "paleolitico.webp",
  "mesolitico-portrait.webp",
  "neolitico-portrait.webp",
  "grande-jornada-pre-historica-portrait.webp",
  "idade-antiga.webp",
  "antiguidade-portrait.webp",
  "idade-media.webp",
  "idade-moderna.webp",
  "idade-moderna-portrait.webp",
  "idade-contemporanea.webp",
  "idade-contemporanea-portrait.webp",
  "historia-de-portugal.webp",
  "historia-de-portugal-portrait.webp",
  "grande-jornada-historica.webp",
  "grande-jornada-historica-portrait.webp",
  "licao-fogo.webp",
  "arte-rupestre-portrait.webp"
].map((assetName) => `${supabaseAssetBaseUrl}/${assetName}`);

const heroAssetUrls = [
  `${supabaseAssetBaseUrl}/history-study.webp`
];

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

export function preloadHeroAssets() {
  const isPortraitMobile = window.matchMedia?.("(max-width: 768px) and (orientation: portrait)").matches;
  const [desktopHero, mobileHero] = heroAssetUrls;
  return preloadImage(isPortraitMobile ? mobileHero || desktopHero : desktopHero);
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
