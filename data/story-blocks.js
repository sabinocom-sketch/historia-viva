export const storyBlockRules = [
  {
    match: ["descoberta do fogo", "fogo"],
    blocks: [
      {
        id: "origem",
        visualType: "spark",
        backgroundMood: "cave-dark",
        image: {
          desktop: "assets/licao-descoberta-fogo-bloco1-desktop.png?v=20260619",
          mobile: "assets/licao-descoberta-fogo-bloco1-mobile.png?v=20260619",
          fit: "contain",
          position: "center"
        },
        text: "Depois de um relâmpago, a paisagem ardia. Alguém podia aproximar-se das brasas com cuidado, sentindo calor, medo e curiosidade ao mesmo tempo. A chama queimava, mas também iluminava e afastava animais. Ossos queimados e cinzas sugerem que o fogo entrou devagar na vida humana. Uma pequena brasa podia mudar uma noite inteira."
      },
      {
        id: "sobrevivencia",
        visualType: "charcoal",
        backgroundMood: "stone-warm",
        image: {
          desktop: "assets/licao-descoberta-fogo-bloco2-desktop.png?v=20260619",
          mobile: "assets/licao-descoberta-fogo-bloco2-mobile.png?v=20260619",
          fit: "contain",
          position: "center"
        },
        text: "Manter a fogueira viva exigia atenção. Um descuido podia apagar a última brasa e deixar o grupo sem calor, luz ou comida cozinhada. Era preciso alimentar o fogo, protegê-lo do vento e aprender quando se podia chegar perto. Os arqueólogos procuram cinzas, ossos queimados e sedimentos aquecidos. Nesses restos frágeis vemos uma técnica feita de cuidado repetido."
      },
      {
        id: "comunidade",
        visualType: "embers",
        backgroundMood: "fire-circle",
        image: {
          desktop: "assets/licao-descoberta-fogo-bloco3-desktop.png?v=20260619",
          mobile: "assets/licao-descoberta-fogo-bloco3-mobile.png?v=20260619",
          fit: "contain",
          position: "center"
        },
        text: "À volta das chamas, rostos antes escondidos ficavam visíveis. Ali podiam cozinhar, aquecer-se, vigiar a noite e contar perigos do dia. O fogo mudou o tempo social: a escuridão já não era apenas ameaça. Hoje dependemos de energia para viver. Aquela fogueira foi uma das primeiras formas humanas de transformar medo em abrigo."
      }
    ]
  },
  {
    match: ["ferramentas de pedra", "pedra"],
    blocks: [
      {
        id: "materia",
        visualType: "stone",
        backgroundMood: "stone-cool",
        image: {
          desktop: "assets/silex-desktop.png?v=20260620",
          mobile: "assets/silex-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Para muitos, era apenas uma pedra no chão. Para um olhar treinado, podia esconder uma lâmina. Quem a escolhia observava peso, forma e como partia. Ferramentas antigas, como as de Lomekwi, mostram técnica muito antes das cidades. Pela primeira vez, uma pedra podia tornar-se muito mais do que uma pedra."
      },
      {
        id: "tecnica",
        visualType: "strike",
        backgroundMood: "stone-warm",
        image: {
          desktop: "https://wvxomznvbebwtxfsvfiv.supabase.co/storage/v1/object/public/Imagens%20App%20Historia/blockimages/licao-ferramentas-de-pedra-bloco2.webp",
          mobile: "https://wvxomznvbebwtxfsvfiv.supabase.co/storage/v1/object/public/Imagens%20App%20Historia/blockimages/licao-ferramentas-de-pedra-bloco2.webp",
          fit: "contain",
          position: "center"
        },
        text: "Talhar pedra exigia atenção. Um aprendiz podia estragar uma peça com um único golpe errado. Um golpe forte demais partia tudo; um golpe fraco não criava fio. Ao lado, alguém mais experiente mostrava o ângulo, o ritmo e a paciência. Milhares de anos depois, as marcas nas pedras ainda revelam esses gestos."
      },
      {
        id: "poder",
        visualType: "fragment",
        backgroundMood: "cave-dark",
        image: {
          desktop: "assets/licao-ferramentas-de-pedra-desktop.png?v=20260620",
          mobile: "assets/licao-ferramentas-de-pedra-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Com uma pedra afiada, um caçador podia cortar carne, preparar peles e fabricar novos instrumentos. Cada ferramenta aumentava as hipóteses de sobrevivência. A mão ganhava novas capacidades. Dos primeiros golpes numa pedra aos computadores modernos, a ideia continua a mesma: criar ferramentas para ir além dos limites do corpo humano."
      }
    ]
  },
  {
    match: ["caça e pesca", "caca e pesca", "pesca"],
    blocks: [
      {
        id: "rastos",
        visualType: "tracks",
        backgroundMood: "earth-path",
        image: {
          desktop: "assets/licao-caca-e-pesca-bloco1-desktop.png?v=20260620",
          mobile: "assets/licao-caca-e-pesca-bloco1-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Antes do amanhecer, alguém seguia pegadas frescas junto ao rio. A lama, o cheiro e o vento eram pistas. Um animal podia estar perto, escondido entre árvores ou pedras. Ossos com marcas de corte indicam caça, aproveitamento de carcaças e partilha. Ler bem o território podia significar regressar com alimento para todos."
      },
      {
        id: "grupo",
        visualType: "spear",
        backgroundMood: "forest-dusk",
        image: {
          desktop: "assets/licao-caca-e-pesca-bloco2-desktop.png?v=20260620",
          mobile: "assets/licao-caca-e-pesca-bloco2-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "A caça podia falhar num segundo. Um ramo partido assustava a presa. Um gesto cedo demais punha todos em risco. Por isso, o grupo movia-se em silêncio, esperando o momento certo. Pontas de pedra, lanças raras e restos de animais sugerem estratégias partilhadas. Sobreviver não era só força; era coordenar confiança."
      },
      {
        id: "territorio",
        visualType: "map",
        backgroundMood: "river-cold",
        image: {
          desktop: "assets/licao-caca-e-pesca-bloco3-desktop.png?v=20260620",
          mobile: "assets/licao-caca-e-pesca-bloco3-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Rios, florestas e costas eram mapas vivos. Ossos de peixe e anzóis de concha sugerem pesca antiga e conhecimento das águas. Quem conhecia estações, correntes e movimentos dos animais tinha mais hipóteses de alimentar o grupo. Hoje usamos dados e previsões para decidir diante da natureza. Eles liam o mundo com os olhos, os pés e a memória."
      }
    ]
  },
  {
    match: ["arte rupestre", "arte"],
    blocks: [
      {
        id: "parede",
        visualType: "pigment",
        backgroundMood: "cave-dark",
        image: {
          desktop: "assets/licao-arte-rupestre-bloco1-desktop.png?v=20260620",
          mobile: "assets/licao-arte-rupestre-bloco1-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "A luz tremia na gruta enquanto alguém misturava terra, carvão e gordura. Uma mão encostava-se à rocha. Depois surgiam animais, sinais e marcas de presença. Locais como Chauvet sugerem uma memória visual muito antiga. A parede deixava de ser apenas pedra. Passava a guardar gestos, imagens e talvez histórias partilhadas."
      },
      {
        id: "sinais",
        visualType: "hand",
        backgroundMood: "ochre-glow",
        image: {
          desktop: "assets/licao-arte-rupestre-bloco2-desktop.png?v=20260620",
          mobile: "assets/licao-arte-rupestre-bloco2-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Pintar no fundo de uma gruta não era simples. Era preciso levar luz, pigmentos e coragem para entrar longe do dia. Uma criança podia olhar para os animais pintados e aprender medo, força ou movimento. Mas as imagens também podem sugerir ritual, sonho ou aviso. Sem a voz dos autores, interpretamos sempre com prudência."
      },
      {
        id: "grupo",
        visualType: "symbol",
        backgroundMood: "fire-circle",
        image: {
          desktop: "assets/licao-arte-rupestre-bloco3-desktop.png?v=20260620",
          mobile: "assets/licao-arte-rupestre-bloco3-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Porque entrar fundo numa gruta para pintar? Talvez para ensinar, lembrar, proteger ou unir o grupo. A arte rupestre mostra que aquelas pessoas não viviam apenas para comer e fugir ao perigo. Também criavam sinais. Hoje continuamos a usar imagens para dizer quem somos. Mudaram os ecrãs, não a necessidade humana de contar."
      }
    ]
  },
  {
    match: ["ritos funerários", "ritos funerarios", "funer"],
    blocks: [
      {
        id: "perda",
        visualType: "bone",
        backgroundMood: "quiet-earth",
        image: {
          desktop: "assets/licao-ritos-funerarios-bloco1-desktop.png?v=20260620",
          mobile: "assets/licao-ritos-funerarios-bloco1-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Quando alguém morria, o grupo podia parar a marcha e escolher um lugar na terra. O corpo não era deixado ao acaso. Em algumas sepulturas, vestígios de ocre, adornos e objetos sugerem cuidado. Não sabemos tudo o que pensavam sobre a morte. Mas o gesto mostra que aquela pessoa continuava a importar."
      },
      {
        id: "memoria",
        visualType: "offering",
        backgroundMood: "stone-cool",
        image: {
          desktop: "assets/licao-ritos-funerarios-bloco2-desktop.png?v=20260620",
          mobile: "assets/licao-ritos-funerarios-bloco2-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "Uma sepultura antiga pode parecer silenciosa, mas está cheia de perguntas. Porque foi escolhido aquele lugar? Porque ficou ali uma ferramenta, um adorno ou pigmento vermelho? Um objeto pode sugerir crença, afeto ou estatuto, mas nunca fala sozinho. Os arqueólogos comparam sinais e contexto. A prudência é parte do rigor."
      },
      {
        id: "mistério",
        visualType: "circle",
        backgroundMood: "cave-dark",
        image: {
          desktop: "assets/licao-ritos-funerarios-bloco3-desktop.png?v=20260620",
          mobile: "assets/licao-ritos-funerarios-bloco3-mobile.png?v=20260620",
          fit: "contain",
          position: "center"
        },
        text: "A morte fazia perguntas que nenhuma ferramenta resolvia. O que acontecia a quem partia? Como lembrar essa pessoa? As sepulturas não provam religião organizada, mas indicam significado social. Hoje também usamos rituais para atravessar a perda. Milhares de anos depois, continuamos a proteger a memória de quem desaparece do nosso lado."
      }
    ]
  }
];

export const defaultStoryBlockPattern = [
  {
    id: "impacto",
    visualType: "spark",
    backgroundMood: "cave-dark",
    text: "Tudo podia começar numa cena pequena: uma decisão, uma invenção frágil, uma multidão inquieta. Para a estudar, os historiadores procuram datas, objetos, cartas, ruínas ou leis. A História ganha força quando uma cena humana encontra vestígios. Nada fala sozinho."
  },
  {
    id: "mudanca",
    visualType: "fragment",
    backgroundMood: "stone-warm",
    text: "Quando uma novidade se espalhava, alguém ganhava esperança e alguém sentia ameaça. Havia medo, interesse e resistência. As fontes raramente contam tudo. Uma moeda mostra poder; uma casa destruída mostra violência. Entre vestígio e interpretação, a História exige cuidado."
  },
  {
    id: "legado",
    visualType: "map",
    backgroundMood: "fire-circle",
    text: "Depois do impacto, as consequências entravam na vida diária: trabalho, família, poder e futuro. A pergunta não é só o que aconteceu. É quem ganhou, quem perdeu e que marcas ficaram. Muitas palavras e costumes de hoje ainda carregam disputas antigas."
  }
];

export const categoryStoryBlockPatterns = {
  política: [
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "stone-warm",
      text: "Numa praça, palácio ou assembleia, alguém percebia que o poder mudava. Novas regras podiam trazer esperança, mas também impostos ou obediência. Leis, moedas e atas ajudam a seguir essas mudanças. A política aparecia no quotidiano, não apenas nos grandes nomes."
    },
    {
      id: "tensao",
      visualType: "map",
      backgroundMood: "earth-path",
      text: "Por trás de uma decisão política havia vozes em conflito. Alguns queriam participar; outros protegiam privilégios. Uma lei pode revelar autoridade, mas também silêncio. Quem ficou de fora? Essa pergunta mostra os limites reais do poder em cada época."
    },
    {
      id: "consequencia",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "Quando uma nova ordem se instalava, prometia resolver problemas antigos. Mas também podia criar controlo, disputas e exclusões. As marcas ficam em fronteiras, tribunais, impostos e direitos. Por isso, conflitos políticos antigos ainda conversam com escolhas públicas de hoje."
    }
  ],
  guerra: [
    {
      id: "ameaça",
      visualType: "spear",
      backgroundMood: "forest-dusk",
      text: "Antes da batalha, já havia rumores, medo e fronteiras tensas. Uma família podia ouvir os soldados antes de ver o exército. Armas, muralhas reparadas e cartas ajudam a seguir o perigo. A guerra começa antes do choque visível."
    },
    {
      id: "choque",
      visualType: "strike",
      backgroundMood: "stone-warm",
      text: "Quando a violência chegava, não sofriam apenas os combatentes. Campos ficavam vazios, famílias fugiam e cidades esperavam notícias. Camadas de incêndio ou povoações abandonadas podem indicar ruptura. Ficar ou partir tornava-se uma decisão de sobrevivência."
    },
    {
      id: "marca",
      visualType: "fragment",
      backgroundMood: "quiet-earth",
      text: "Quando a guerra terminava, vencedores celebravam e mapas mudavam. Mas muitos regressavam com fome, perdas ou memórias difíceis. Tratados contam uma parte; ruínas e cemitérios contam outra. Mesmo depois da paz oficial, a guerra continuava nas famílias."
    }
  ],
  ciência: [
    {
      id: "observacao",
      visualType: "spark",
      backgroundMood: "river-cold",
      text: "A ciência pode começar com alguém a reparar num detalhe: uma estrela, uma febre, uma planta. Cadernos, instrumentos e desenhos guardam parte desse olhar. A pergunta é simples: compreender melhor permite agir melhor? A dúvida abre caminho."
    },
    {
      id: "tecnica",
      visualType: "stone",
      backgroundMood: "stone-cool",
      text: "Uma ideia ganhava força quando resistia ao teste. Era preciso repetir, medir, falhar e tentar de novo. Telescópios, mapas e máquinas também são fontes históricas. Quando funcionava, o conhecimento mudava trabalho, navegação, saúde e poder."
    },
    {
      id: "transformacao",
      visualType: "map",
      backgroundMood: "fire-circle",
      text: "Quando o conhecimento circulava, deixava de pertencer a uma só pessoa. Livros, aulas, oficinas e laboratórios espalhavam métodos. Isso mudava viagens, remédios, armas e escolas. Cada tecnologia nova prolonga uma pergunta antiga: como funciona o mundo?"
    }
  ],
  cultura: [
    {
      id: "voz",
      visualType: "pigment",
      backgroundMood: "ochre-glow",
      text: "A cultura nasce quando uma ideia ganha forma diante dos outros: uma canção, uma imagem, uma história. Objetos, pinturas, textos e edifícios guardam esses sinais. Algo pessoal passa a circular. Ganha vida coletiva e memória partilhada."
    },
    {
      id: "circulacao",
      visualType: "hand",
      backgroundMood: "stone-warm",
      text: "Quando outras pessoas reconhecem uma forma, ela começa a viajar. Uma técnica, uma palavra ou um desenho pode aparecer longe da origem. Esses vestígios sugerem contacto, comércio, conquista ou imitação. Nada chega ao destino exatamente igual."
    },
    {
      id: "identidade",
      visualType: "symbol",
      backgroundMood: "cave-dark",
      text: "Com o tempo, essas formas ajudam uma comunidade a dizer quem é. Mostram valores, medos, festas e memórias. O que fica num museu é só parte da história. Hoje também fazemos identidade com músicas, filmes, memes e memoriais."
    }
  ],
  religião: [
    {
      id: "crenca",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "Quando a tempestade destruía a colheita ou a doença chegava sem aviso, a vida parecia depender de forças invisíveis. Altares, amuletos, templos e textos sugerem crenças. Para muitos, a religião dava consolo, ordem e linguagem ao medo."
    },
    {
      id: "ritual",
      visualType: "offering",
      backgroundMood: "fire-circle",
      text: "Num ritual, a crença deixava de ser apenas interior. Cânticos, ofertas e festas juntavam pessoas no mesmo gesto. Restos de alimentos, objetos votivos e inscrições podem indicar práticas religiosas. O gesto unia o grupo diante da incerteza."
    },
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "quiet-earth",
      text: "Quando a fé se aproximava do poder, podia orientar leis, reis e decisões públicas. Moedas, templos e cerimónias mostram essa ligação. Isso dava força a certas ideias, mas podia excluir outras. O debate sobre convivência ainda ecoa hoje."
    }
  ]
};
