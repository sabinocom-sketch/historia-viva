const supabaseAssetBaseUrl = "https://wvxomznvbebwtxfsvfiv.supabase.co/storage/v1/object/public/Imagens%20App%20Historia/Assets";
const supabaseBackgroundBaseUrl = "https://wvxomznvbebwtxfsvfiv.supabase.co/storage/v1/object/public/Imagens%20App%20Historia/backgrounds";

const eraSelectionBackground = {
  desktop: `${supabaseBackgroundBaseUrl}/era-selection.webp`,
  mobile: `${supabaseBackgroundBaseUrl}/era-selection-portrait.webp`
};

const learnCardAssets = [
  { desktop: "pre-historia.webp" },
  { desktop: "idade-antiga.webp", mobile: "antiguidade-portrait.webp" },
  { desktop: "idade-media.webp", mobile: "idade-media.portrait.webp" },
  { desktop: "idade-moderna.webp", mobile: "idade-moderna-portrait.webp" },
  { desktop: "idade-contemporanea.webp", mobile: "idade-contemporanea-portrait.webp" },
  { desktop: "historia-de-portugal.webp", mobile: "historia-de-portugal-portrait.webp" },
  { desktop: "grande-jornada-historica.webp", mobile: "grande-jornada-historica-portrait.webp" }
];

const heroAssetUrls = [
  `${supabaseAssetBaseUrl}/history-study.webp`
];

const lessonBackgroundAssets = {
  paleolitico: {
    desktop: "background-licao-paleolitico-desktop.webp",
    mobile: "background-licao-paleolitico-portrait.webp"
  },
  mesolitico: {
    desktop: "background-licao-mesolitico-desktop.webp",
    mobile: "background-licao-mesolitico-portrait.webp"
  },
  "revolucao-neolitica": {
    desktop: "background-licao-neolitico-desktop.webp",
    mobile: "background-licao-neolitico-portrait.webp"
  }
};

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

function shouldUsePortraitAssets() {
  return window.matchMedia?.("(max-width: 768px) and (orientation: portrait)").matches;
}

function pickResponsiveAsset(asset) {
  const assetName = shouldUsePortraitAssets() ? asset.mobile || asset.desktop : asset.desktop;
  return `${supabaseAssetBaseUrl}/${assetName}`;
}

function pickResponsiveBackground(asset) {
  const assetName = shouldUsePortraitAssets() ? asset.mobile || asset.desktop : asset.desktop;
  return `${supabaseBackgroundBaseUrl}/${assetName}`;
}

export function preloadLearnAssets() {
  const backgroundUrl = shouldUsePortraitAssets() ? eraSelectionBackground.mobile : eraSelectionBackground.desktop;
  const urls = [
    backgroundUrl,
    ...learnCardAssets.map(pickResponsiveAsset)
  ];
  return Promise.all(urls.map(preloadImage));
}

export function preloadHeroAssets() {
  const [desktopHero, mobileHero] = heroAssetUrls;
  return preloadImage(shouldUsePortraitAssets() ? mobileHero || desktopHero : desktopHero);
}

export function preloadLessonBackgroundAssets(sectionId = "") {
  const asset = lessonBackgroundAssets[sectionId];
  if (!asset) return Promise.resolve([]);
  return preloadImage(pickResponsiveBackground(asset));
}

export function waitForLearnAssets(maxWaitMs = 900) {
  return Promise.race([
    preloadLearnAssets(),
    timeout(maxWaitMs)
  ]);
}

export function waitForLessonBackgroundAssets(sectionId = "", maxWaitMs = 700) {
  return Promise.race([
    preloadLessonBackgroundAssets(sectionId),
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
