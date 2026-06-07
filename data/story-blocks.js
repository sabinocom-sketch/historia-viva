export const storyBlockRules = [
  {
    match: ["descoberta do fogo", "fogo"],
    blocks: [
      {
        id: "origem",
        visualType: "spark",
        backgroundMood: "cave-dark",
        text: "Depois de um relâmpago, a paisagem ardia e alguém podia aproximar-se das brasas com cuidado. A chama queimava, mas dava luz, calor e defesa. Ossos queimados e cinzas sugerem que o fogo entrou devagar na vida humana. Uma brasa pequena podia mudar uma noite inteira."
      },
      {
        id: "sobrevivencia",
        visualType: "charcoal",
        backgroundMood: "stone-warm",
        text: "Numa noite fria, era preciso manter a fogueira viva. Se a última brasa se apagasse, o grupo perdia calor, luz e comida cozinhada. Os arqueólogos procuram cinzas, ossos queimados e sedimentos aquecidos. Nesses restos frágeis lemos uma grande descoberta feita de cuidado repetido."
      },
      {
        id: "comunidade",
        visualType: "embers",
        backgroundMood: "fire-circle",
        text: "À volta das chamas, rostos antes escondidos ficavam visíveis. Ali podiam cozinhar, aquecer-se e contar perigos do dia. O fogo mudou o tempo social: a noite já não era só ameaça. Hoje dependemos de energia; aquela fogueira foi uma primeira forma de transformar o mundo."
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
        text: "No chão, uma pedra comum podia esconder uma lâmina. Quem a escolhia observava peso, forma e fratura. Instrumentos muito antigos, como os de Lomekwi, indicam técnica antes das cidades. A mão humana começava a ver na matéria uma resposta possível para a sobrevivência."
      },
      {
        id: "tecnica",
        visualType: "strike",
        backgroundMood: "stone-warm",
        text: "Cada golpe exigia atenção. Força a mais destruía a peça; força a menos não abria fio. Lascas, núcleos e marcas de uso ajudam os arqueólogos a reconstruir gestos. A técnica passava de mão em mão, como uma aula silenciosa muito anterior à escrita."
      },
      {
        id: "poder",
        visualType: "fragment",
        backgroundMood: "cave-dark",
        text: "Com uma pedra afiada, a mão ganhava novas capacidades: cortar, raspar, furar e preparar peles. Ferramentas antigas mostram aprendizagem e adaptação ao ambiente. Hoje usamos máquinas e computadores, mas a ideia continua parecida: criar algo fora do corpo para resolver um problema."
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
        text: "Antes do amanhecer, alguém seguia pegadas frescas junto ao rio. A lama, o cheiro e o vento eram pistas. Ossos com marcas de corte indicam caça, aproveitamento de carcaças e partilha. Ler bem o território podia significar regressar com alimento para todos."
      },
      {
        id: "grupo",
        visualType: "spear",
        backgroundMood: "forest-dusk",
        text: "Um ramo partido podia assustar a presa e transformar o dia em fome. Por isso, o grupo movia-se em silêncio, esperando o gesto certo. Pontas de pedra, lanças raras e restos de animais sugerem estratégias partilhadas. Sobreviver era também coordenar confiança."
      },
      {
        id: "territorio",
        visualType: "map",
        backgroundMood: "river-cold",
        text: "Rios, florestas e costas eram mapas vivos. Ossos de peixe e anzóis de concha sugerem pesca antiga e conhecimento das águas. Estes vestígios mostram técnica, paciência e leitura do ambiente. Hoje também usamos dados e previsões para decidir diante da natureza."
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
        text: "A luz tremia na gruta enquanto alguém misturava terra, carvão e gordura. Cavalos, mãos e sinais surgiam na rocha. Locais como Chauvet sugerem uma memória visual muito antiga. A parede não era apenas pedra; tornava-se lugar de presença."
      },
      {
        id: "sinais",
        visualType: "hand",
        backgroundMood: "ochre-glow",
        text: "Uma criança podia olhar para os animais pintados e aprender medo, força ou movimento. Mas as imagens também podem sugerir ritual, sonho ou aviso. Pigmentos, marcas de dedos e tochas dão pistas materiais. Sem a voz dos autores, interpretamos com prudência."
      },
      {
        id: "grupo",
        visualType: "symbol",
        backgroundMood: "fire-circle",
        text: "Porque entrar fundo numa gruta para pintar? Talvez para ensinar, lembrar, proteger ou unir o grupo. A arte rupestre mostra uma vida simbólica complexa. Hoje continuamos a usar imagens para dizer quem somos; mudaram os ecrãs, não a necessidade de contar."
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
        text: "Quando alguém morria, o grupo podia parar a marcha e escolher um lugar na terra. O corpo não era deixado ao acaso. Em algumas sepulturas, vestígios de ocre e objetos sugerem cuidado. A morte já chamava memória, gesto e despedida."
      },
      {
        id: "memoria",
        visualType: "offering",
        backgroundMood: "stone-cool",
        text: "Um adorno, uma ferramenta ou a posição do corpo pode dizer muito, mas nunca diz tudo. Enterros antigos levantam debates sobre cuidado, crença e memória. Os arqueólogos interpretam esses sinais com cautela. Ainda assim, parecem revelar que certas vidas continuavam a importar."
      },
      {
        id: "mistério",
        visualType: "circle",
        backgroundMood: "cave-dark",
        text: "A morte fazia perguntas que nenhuma ferramenta resolvia. O que acontecia a quem partia? Como lembrar essa pessoa? As sepulturas não provam religião organizada, mas indicam significado social. Hoje também usamos rituais para atravessar a perda; essa proximidade impressiona."
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
