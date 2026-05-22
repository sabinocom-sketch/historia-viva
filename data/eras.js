// Historical era content facade. Keep the first bundle light: metadata is inline, full era content is loaded on demand.

export const eraKeys = ["prehistoria","antiga","medieval","moderna","contemporanea","portugal"];

export const eras = {
  prehistoria: {
    range: "c. 3,3 milhões a.C. - c. 3000 a.C.",
    title: "Pré-História",
    summary: "Comunidades humanas passaram de estratégias de sobrevivência e adaptação para a construção de aldeias, produção, comércio e organização social antes da escrita.",
    stats: [],
    timeline: [],
    source: [],
    quiz: [],
    prompts: [],
    events: [],
    biographies: [],
    concepts: [],
    curiosities: []
  },
  antiga: {
    range: "c. 3000 a.C. - 476",
    title: "Civilizações Antigas",
    summary: "Cidades, impérios, leis, religião, comércio e cultura escrita criaram formas duradouras de autoridade e desigualdade.",
    stats: [],
    timeline: [],
    source: [],
    quiz: [],
    prompts: [],
    events: [],
    biographies: [],
    concepts: [],
    curiosities: []
  },
  medieval: {
    range: "476 - 1453",
    title: "Mundos Medievais",
    summary: "Reinos, cidades, mosteiros, rotas comerciais, poderes senhoriais e religiões estruturaram sociedades medievais diversas.",
    stats: [],
    timeline: [],
    source: [],
    quiz: [],
    prompts: [],
    events: [],
    biographies: [],
    concepts: [],
    curiosities: []
  },
  moderna: {
    range: "1453 - 1789",
    title: "Expansão e Revoluções",
    summary: "Imprensa, impérios marítimos, reformas religiosas, escravatura atlântica, ciência e Estado moderno reordenaram o mundo.",
    stats: [],
    timeline: [],
    source: [],
    quiz: [],
    prompts: [],
    events: [],
    biographies: [],
    concepts: [],
    curiosities: []
  },
  contemporanea: {
    range: "1789 - presente",
    title: "Mundo Contemporâneo",
    summary: "Revoluções, industrialização, nacionalismos, imperialismos, guerras mundiais, direitos e globalização aceleraram mudanças sociais.",
    stats: [],
    timeline: [],
    source: [],
    quiz: [],
    prompts: [],
    events: [],
    biographies: [],
    concepts: [],
    curiosities: []
  },
  portugal: {
    range: "antes de 1143 - presente",
    title: "História de Portugal",
    summary: "Da formação do reino à expansão marítima, crise imperial, liberalismo, ditadura, democracia e integração europeia.",
    stats: [],
    timeline: [],
    source: [],
    quiz: [],
    prompts: [],
    events: [],
    biographies: [],
    concepts: [],
    curiosities: []
  }
};

const eraLoaders = {
  prehistoria: () => import("./eras/prehistoria.js"),
  antiga: () => import("./eras/antiga.js"),
  medieval: () => import("./eras/medieval.js"),
  moderna: () => import("./eras/moderna.js"),
  contemporanea: () => import("./eras/contemporanea.js"),
  portugal: () => import("./eras/portugal.js")
};

const loadedEras = new Set();
const eraPromises = new Map();

export function isEraLoaded(eraKey) {
  return loadedEras.has(eraKey);
}

export function ensureEraData(eraKey) {
  if (!eraLoaders[eraKey]) return Promise.resolve(eras[eraKey] || null);
  if (loadedEras.has(eraKey)) return Promise.resolve(eras[eraKey]);
  if (!eraPromises.has(eraKey)) {
    eraPromises.set(eraKey, eraLoaders[eraKey]().then((module) => {
      eras[eraKey] = module.default;
      loadedEras.add(eraKey);
      return eras[eraKey];
    }));
  }
  return eraPromises.get(eraKey);
}

export function ensureAllEraData() {
  return Promise.all(eraKeys.map((eraKey) => ensureEraData(eraKey))).then(() => eras);
}
