// Editorial rules, related-topic rules, and interpretive frames.

export const relatedRules = [
  { keywords: ["roma", "romano", "romana", "império romano"], related: ["Democracia ateniense", "Cidadania", "Império"] },
  { keywords: ["atenas", "democracia", "clístenes", "péricles"], related: ["Roma", "Cidadania", "Cidade-Estado"] },
  { keywords: ["expansão marítima", "vasco da gama", "índia", "ceuta", "descobrimentos"], related: ["Colonialismo", "Comércio armado", "Tráfico atlântico"] },
  { keywords: ["colonialismo", "escravatura", "tráfico atlântico"], related: ["Expansão marítima europeia", "Descolonização", "Direitos humanos"] },
  { keywords: ["revolução industrial", "industrialização", "fábrica"], related: ["Capitalismo", "Socialismo", "Urbanização"] },
  { keywords: ["revolução francesa", "direitos", "cidadania"], related: ["Liberalismo", "Direitos humanos", "Nacionalismo"] },
  { keywords: ["feudalismo", "senhorio", "vassalagem"], related: ["Burguesia urbana", "Crescimento urbano", "Estado moderno"] },
  { keywords: ["peste negra", "peste"], related: ["Senhorio", "Crescimento urbano", "Medicina medieval"] },
  { keywords: ["agricultura", "neolítico", "sedentarização"], related: ["Excedente", "Domesticação", "Desigualdades sociais"] },
  { keywords: ["estado novo", "25 de abril", "ditadura"], related: ["Descolonização", "Guerra colonial", "Direitos humanos"] },
  { keywords: ["guerra fria", "lua", "apollo"], related: ["Guerra Fria", "Ciência moderna", "Propaganda"] }
];

export const virtualRelatedTopics = {
  capitalismo: "Explica a ligação entre capitalismo, industrialização e desigualdade social.",
  urbanização: "Como é que a urbanização mudou trabalho, saúde e vida quotidiana?",
  "estado moderno": "Como se formou o Estado moderno e que diferenças teve face ao poder medieval?",
  "medicina medieval": "Que limites e saberes existiam na medicina medieval?",
  propaganda: "Como é que a propaganda moldou política, guerra e cultura de massas?",
  "democracia ateniense": "Compara a democracia ateniense com a cidadania romana."
};

export const eraEditorialFrames = {
  prehistoria: {
    question: "Como se reconhece complexidade social antes da escrita?",
    tension: "A grande tensão está entre adaptação ambiental, inovação técnica e novas desigualdades criadas pela sedentarização.",
    thread: "Lê este período como uma longa história de experimentação: corpo, ferramenta, paisagem, memória e comunidade evoluem em conjunto."
  },
  antiga: {
    question: "Como é que cidades e impérios transformaram poder em instituições duradouras?",
    tension: "A Antiguidade cruza participação política, escravatura, religião pública, guerra e administração escrita.",
    thread: "O fio condutor é a passagem de comunidades urbanas para estruturas imperiais capazes de governar diversidade, mas também de produzir exclusão."
  },
  medieval: {
    question: "Como se organizava a autoridade quando o poder era partilhado entre reis, senhores, cidades e religiões?",
    tension: "A Idade Média combina proteção e dependência, fé e violência, ruralidade e dinamismo urbano.",
    thread: "O período ganha profundidade quando se observa a negociação constante entre poderes locais, redes comerciais e instituições religiosas."
  },
  moderna: {
    question: "Como é que o mundo se tornou mais conectado e mais desigual ao mesmo tempo?",
    tension: "Expansão, ciência, Reforma, escravatura e Estado moderno revelam progresso técnico associado a coerção e dominação.",
    thread: "A época deve ser lida como aceleração de circulação: de pessoas, mercadorias, impressos, armas, ideias e doenças."
  },
  contemporanea: {
    question: "Porque é que promessas de liberdade convivem com guerra total, colonialismo e desigualdade?",
    tension: "O Mundo Contemporâneo oscila entre direitos universais, massas políticas, capitalismo industrial, nacionalismos e violência estatal.",
    thread: "O fio condutor é a entrada de populações inteiras na política, na guerra, no consumo e na disputa pela memória."
  },
  portugal: {
    question: "Como é que um reino pequeno construiu influência global e enfrentou os custos dessa história?",
    tension: "Portugal combina autonomia política, expansão imperial, reformas internas, ditadura, descolonização e integração europeia.",
    thread: "A História de Portugal fica mais rica quando se ligam decisões internas a redes atlânticas, africanas, asiáticas e europeias."
  }
};

export const insightRules = [
  {
    keywords: ["roma", "romano", "império", "cidadania"],
    insight: "Importa porque mostra como a integração política podia ampliar direitos e, ao mesmo tempo, preservar hierarquias profundas."
  },
  {
    keywords: ["democracia", "atenas", "cidadão"],
    insight: "A chave crítica é distinguir participação cívica de inclusão social: nem todos os habitantes eram sujeitos políticos."
  },
  {
    keywords: ["expansão", "colonialismo", "tráfico", "escravatura", "índia"],
    insight: "A ligação essencial é entre conhecimento técnico, ambição comercial e violência imperial; nenhum destes elementos explica o processo sozinho."
  },
  {
    keywords: ["industrial", "capitalismo", "fábrica", "trabalho"],
    insight: "O ponto decisivo é perceber como máquinas e mercados reorganizaram tempo, corpo, família, cidade e conflito social."
  },
  {
    keywords: ["revolução", "direitos", "liberalismo", "república"],
    insight: "A pergunta forte não é apenas que liberdade foi proclamada, mas quem pôde exercê-la e quem continuou excluído."
  },
  {
    keywords: ["feudal", "senhorio", "vassalagem", "camponeses"],
    insight: "A nuance está em ver dependência e negociação em simultâneo: proteção local podia coexistir com coerção económica."
  },
  {
    keywords: ["peste", "doença", "medicina"],
    insight: "Epidemias são factos biológicos e sociais: revelam medos, desigualdades, capacidade institucional e procura de culpados."
  },
  {
    keywords: ["agricultura", "neolítico", "sedentarização", "excedente"],
    insight: "A transformação não foi uma marcha simples de progresso; trouxe segurança alimentar parcial, mais trabalho e novas assimetrias."
  },
  {
    keywords: ["religião", "igreja", "culto", "cristianismo", "islão"],
    insight: "Religião aqui deve ser vista como crença, instituição, linguagem de legitimidade e forma de organização social."
  },
  {
    keywords: ["guerra", "batalha", "conquista", "militar"],
    insight: "Uma guerra raramente se resume ao campo de batalha: logística, impostos, alianças e memória pública também decidem o seu impacto."
  }
];
