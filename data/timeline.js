import { eras } from './eras.js';

export const timelineExtensions = {
  prehistoria: [],
  antiga: [
    ["c. 2500 a.C.", "Cidades do Indo desenvolvem urbanismo, drenagem e comércio regional.", "ciência", "A planificação urbana revela conhecimento técnico e formas de organização social ainda pouco documentadas por textos decifrados."],
    ["c. 1350 a.C.", "Akhenaton promove culto centrado em Aton e desloca a capital egípcia.", "religião", "A reforma mostra como religião, corte e legitimidade política podiam entrar em tensão."],
    ["431-404 a.C.", "Guerra do Peloponeso enfraquece Atenas e Esparta e expõe conflitos entre império e autonomia.", "guerra", "O conflito teve impactos políticos e culturais profundos no mundo grego clássico."],
    ["212", "Édito de Caracala alarga a cidadania romana a quase todos os homens livres do império.", "política", "A medida alterou estatuto jurídico, impostos e identidade imperial, embora não eliminasse desigualdades."],
    ["313", "Édito de Milão legaliza o cristianismo no Império Romano.", "religião", "A mudança transformou relações entre Estado, culto público e comunidades cristãs."]
  ],
  medieval: [
    ["732", "Batalha de Poitiers torna-se símbolo posterior das fronteiras entre poderes francos e islâmicos.", "guerra", "Mais do que um choque simples de civilizações, integra disputas regionais por poder e prestígio."],
    ["c. 1000", "Inovações agrícolas e crescimento demográfico expandem aldeias, campos e mercados.", "ciência", "Arados, rotação de culturas e novas formas de uso da terra reforçaram excedentes e hierarquias."],
    ["1088", "Bolonha afirma-se como centro universitário ligado ao estudo do direito.", "cultura", "As universidades criaram novas elites letradas e mudaram a relação entre saber, Igreja e poder."],
    ["1206", "Gengis Khan unifica tribos mongóis e inicia expansão eurasiática.", "guerra", "O Império Mongol destruiu poderes, mas também reabriu rotas comerciais e circulação técnica."],
    ["1291", "Queda de Acre marca o fim das principais possessões cruzadas no Levante.", "religião", "O episódio mostra limites militares das cruzadas e mudança de prioridades políticas mediterrânicas."]
  ],
  moderna: [
    ["1488", "Bartolomeu Dias dobra o Cabo da Boa Esperança, abrindo nova possibilidade de ligação ao Índico.", "ciência", "A viagem combinou navegação, experiência atlântica e ambição comercial portuguesa."],
    ["1690", "Locke publica textos políticos que influenciam debates sobre governo e direitos.", "cultura", "Ideias sobre consentimento, propriedade e resistência circularam em contextos muito desiguais."],
    ["1789", "Revolução Francesa começa e desloca a linguagem política da soberania para a nação.", "política", "Embora já entre no contemporâneo, nasce de tensões sociais, fiscais e intelectuais da Época Moderna."]
  ],
  contemporanea: [
    ["1830", "Revoluções liberais e nacionais desafiam a ordem restaurada na Europa.", "política", "Mostram a força persistente de constituições, imprensa, cidadania e soberania nacional."],
    ["1884-1885", "Conferência de Berlim formaliza regras europeias para a partilha de África.", "política", "A diplomacia imperial ignorou soberanias africanas e intensificou exploração colonial."],
    ["1929", "Grande Depressão abala economias, democracias liberais e confiança no mercado.", "política", "O desemprego e a crise social favoreceram novas políticas públicas e radicalizações."],
    ["1969", "Apollo 11 leva seres humanos à Lua durante a corrida espacial.", "ciência", "A conquista científica foi também propaganda da Guerra Fria e mobilização industrial."],
    ["1979", "Revolução Iraniana altera política do Médio Oriente e debates sobre religião e Estado.", "religião", "O processo mostra como modernização, autoritarismo, oposição social e religião se cruzaram."]
  ],
  portugal: [
    ["1290", "Fundação do Estudo Geral reforça cultura letrada e administração régia.", "cultura", "A formação de juristas e clérigos apoiou a construção institucional do reino."],
    ["1488", "Bartolomeu Dias dobra o Cabo da Boa Esperança.", "ciência", "O feito náutico resultou de experiência acumulada, risco marítimo e ambição comercial."],
    ["1640", "Restauração recupera a independência política face à monarquia hispânica.", "política", "A mudança exigiu guerra, diplomacia e legitimação interna da nova dinastia."],
    ["1890", "Ultimato britânico provoca crise nacional e contestação à monarquia.", "política", "O episódio ligou império, orgulho nacional, diplomacia europeia e crescimento republicano."],
    ["1986", "Entrada na CEE integra Portugal no projeto europeu.", "política", "A adesão trouxe fundos, reformas e novas dependências numa democracia ainda jovem."]
  ]
};

export const timelineCategoryLabels = {
  política: "Política",
  guerra: "Guerra",
  ciência: "Ciência",
  cultura: "Cultura",
  religião: "Religião"
};

export const timelineCategoryIcons = {
  política: "flag",
  guerra: "shield",
  ciência: "spark",
  cultura: "scroll",
  religião: "pillar"
};

function normalizeDataText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function inferTimelineCategory(text, index) {
  const normalized = normalizeDataText(text);
  if (["guerra", "batalha", "conquista", "militar", "cruzada", "asedio"].some((word) => normalized.includes(word))) return "guerra";
  if (["religiao", "cristianismo", "islao", "culto", "igreja", "monastica", "reforma"].some((word) => normalized.includes(word))) return "religião";
  if (["ciencia", "tecnica", "ferramentas", "fogo", "imprensa", "newton", "navegacao", "agricola"].some((word) => normalized.includes(word))) return "ciência";
  if (["arte", "cultura", "universidade", "teatro", "linguagem", "memoria", "direitos"].some((word) => normalized.includes(word))) return "cultura";
  if (["poder", "politica", "regio", "estado", "cidadania", "soberania"].some((word) => normalized.includes(word))) return "política";
  return index % 5 === 0 ? "política" : ["política", "guerra", "ciência", "cultura", "religião"][index % 5];
}

function buildTimelineDetail(era, event, category) {
  const categoryContext = {
    política: "O impacto político está na redistribuição de autoridade, direitos, impostos ou legitimidade.",
    guerra: "O impacto militar envolve recursos, alianças, violência e mudanças de poder que afetaram civis e elites.",
    ciência: "O impacto técnico ou científico transformou práticas quotidianas, produção, comunicação ou controlo do ambiente.",
    cultura: "O impacto cultural aparece em identidades, educação, memória, linguagem simbólica e circulação de ideias.",
    religião: "O impacto religioso revela como crenças, instituições e poder social moldaram comunidades."
  };
  return `${categoryContext[category]} Em ${era.title}, este momento deve ser lido pelo contexto e pelas consequências sociais, não como facto isolado.`;
}

function enrichTimelines() {
  Object.entries(eras).forEach(([key, era]) => {
    const normalized = era.timeline.map((entry, index) => {
      const [year, event, category, detail, extra] = entry;
      const resolvedCategory = category || inferTimelineCategory(event, index);
      return [year, event, resolvedCategory, detail || buildTimelineDetail(era, event, resolvedCategory), extra].filter((value) => value !== undefined);
    });
    era.timeline = [...normalized, ...(timelineExtensions[key] || [])];
  });
}

enrichTimelines();
