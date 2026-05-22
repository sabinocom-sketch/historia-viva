import { eras, timelineCategoryLabels } from './data.js';
import { getEraCurriculumSections } from './content-service.js';
import { createPreview, normalizeText } from './utils.js';

export function buildLessonIntroFrame(lesson) {
  const section = getEraCurriculumSections(lesson.eraKey).find((item) => item.id === lesson.sectionId);
  const title = getLessonDisplayTitle(lesson.title);
  const normalizedTitle = normalizeText(title);
  const eraTitle = eras[lesson.eraKey]?.title || "História";
  const sectionTitle = section?.title || timelineCategoryLabels[lesson.category] || "Lição";
  const specificFrames = [
    {
      match: ["descoberta do fogo", "fogo"],
      mood: "fire",
      line: "O fogo iluminou a noite e mudou a humanidade para sempre.",
      preview: ["Sobreviver ao frio", "Dominar as chamas", "Vida à volta da fogueira"]
    },
    {
      match: ["ferramentas de pedra", "pedra"],
      mood: "stone",
      line: "A pedra deixou de ser paisagem e tornou-se intenção humana.",
      preview: ["Cortar e raspar", "Aprender pela técnica", "Transformar matéria em poder"]
    },
    {
      match: ["caca e pesca", "caça e pesca", "pesca"],
      mood: "hunt",
      line: "Ler animais, águas e estações tornou-se uma arte de sobrevivência.",
      preview: ["Seguir rastos", "Cooperar em grupo", "Conhecer rios e florestas"]
    },
    {
      match: ["arte rupestre", "arte"],
      mood: "art",
      line: "Nas paredes da rocha, a memória começou a ganhar forma.",
      preview: ["Pigmentos e sinais", "Animais pintados", "Imaginação coletiva"]
    },
    {
      match: ["ritos funerarios", "ritos funerários", "funer"],
      mood: "rites",
      line: "Cuidar dos mortos revelou uma nova profundidade humana.",
      preview: ["Memória do grupo", "Objetos e sepulturas", "Perguntas sobre a morte"]
    },
    {
      match: ["fim da era glacial", "era glacial", "glacial"],
      mood: "ice",
      line: "Quando o gelo recuou, o mundo abriu caminhos novos.",
      preview: ["Clima em mudança", "Novas paisagens", "Adaptar para continuar"]
    },
    {
      match: ["domesticacao de animais", "domesticação de animais", "animais"],
      mood: "animals",
      line: "A relação com os animais começou a mudar a vida humana.",
      preview: ["Proteção e alimento", "Proximidade diária", "Novas dependências"]
    },
    {
      match: ["abrigos permanentes", "primeiros abrigos"],
      mood: "shelter",
      line: "Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",
      preview: ["Abrigos estáveis", "Espaços partilhados", "Primeiras rotinas"]
    },
    {
      match: ["agricultura"],
      mood: "agriculture",
      line: "Produzir alimento transformou a paisagem em projeto humano.",
      preview: ["Cultivo e sementes", "Colheitas", "Sedentarismo"]
    },
    {
      match: ["aldeias e comunidade", "aldeias"],
      mood: "village",
      line: "As primeiras comunidades permanentes começaram a desenhar o futuro.",
      preview: ["Cabanas e fogueiras", "Cooperação", "Crescimento populacional"]
    },
    {
      match: ["dominio dos metais", "domínio dos metais", "metais"],
      mood: "metal",
      line: "O metal mudou ferramentas, conflito e poder.",
      preview: ["Cobre, bronze e ferro", "Forjas e armas", "Novas hierarquias"]
    },
    {
      match: ["comercio e trocas", "comércio e trocas", "trocas"],
      mood: "trade",
      line: "As aldeias começaram a trocar recursos, técnicas e mundos.",
      preview: ["Rotas", "Especialização", "Contacto entre povos"]
    },
    {
      match: ["nascimento das civilizacoes", "nascimento das civilizações", "civiliz"],
      mood: "civilization",
      line: "Das aldeias nasceram liderança, muralhas e primeiras cidades.",
      preview: ["Hierarquias", "Defesa", "Primeiras cidades"]
    }
  ];
  const frame = specificFrames.find((item) =>
    item.match.some((keyword) => normalizedTitle.includes(normalizeText(keyword)))
  ) || {
    mood: lesson.category || "default",
    line: buildLessonHeroLine(lesson),
    preview: ["Contexto", "Causas", "Consequências"]
  };
  return {
    title,
    mood: frame.mood,
    line: frame.line,
    preview: frame.preview,
    kicker: `${eraTitle} · ${sectionTitle}`
  };
}

export function getLessonDisplayTitle(title) {
  return String(title || "").split(":")[0].trim();
}

function buildLessonHeroLine(lesson) {
  const detail = lesson.detail || buildLessonTimelineHint(lesson.title, lesson.category);
  const preview = createPreview(detail, 142);
  return `“${preview}”`;
}

function buildLessonTimelineHint(event, category = "") {
  if (category === "política") return "Pista: observa quem ganha autoridade, quem fica excluído e que instituições mudam.";
  if (category === "guerra") return "Pista: liga violência, recursos, alianças e efeitos sobre populações civis.";
  if (category === "ciência") return "Pista: pergunta que técnica, conhecimento ou infraestrutura mudou práticas sociais.";
  if (category === "cultura") return "Pista: procura impactos em memória, educação, identidade e circulação de ideias.";
  if (category === "religião") return "Pista: analisa como crença, instituição e poder social se influenciam.";
  if (event.includes("poder") || event.includes("autoridade")) return "Pista: repara em quem ganha legitimidade e quem fica excluído.";
  if (event.includes("guerra") || event.includes("militar")) return "Pista: liga conflito, recursos e mudança política.";
  if (event.includes("comércio") || event.includes("comerciais")) return "Pista: segue as redes de troca e os grupos afetados.";
  return "Pista: transforma este momento numa causa, consequência ou comparação.";
}
