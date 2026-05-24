export const storyBlockRules = [
  {
    match: ["descoberta do fogo", "fogo"],
    blocks: [
      {
        id: "origem",
        visualType: "spark",
        backgroundMood: "cave-dark",
        text: "Muito antes de saberem criar fogo, os grupos humanos viam chamas nascer de relâmpagos e incêndios. O fogo assustava, mas também dava luz, calor e proteção. Guardar uma brasa acesa podia significar passar a noite com menos medo."
      },
      {
        id: "sobrevivencia",
        visualType: "charcoal",
        backgroundMood: "stone-warm",
        text: "Quando conseguiam conservar o fogo, tinham de o alimentar com ramos secos e atenção constante. Uma chama apagada podia deixar o grupo no frio ou vulnerável aos animais. Por isso, cuidar do fogo tornou-se uma tarefa de todos."
      },
      {
        id: "comunidade",
        visualType: "embers",
        backgroundMood: "fire-circle",
        text: "À volta das chamas, a noite deixou de ser apenas silêncio e perigo. As pessoas podiam cozinhar, aquecer-se e talvez contar histórias simples. Esse círculo de luz ajudou a aproximar famílias e a transformar o grupo numa comunidade."
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
        text: "No chão, uma pedra comum podia esconder uma ferramenta. Com paciência, era transformada em lâmina, raspador ou ponta afiada. Esse pequeno objeto ajudava a cortar carne, preparar peles e enfrentar dias difíceis com mais segurança."
      },
      {
        id: "tecnica",
        visualType: "strike",
        backgroundMood: "stone-warm",
        text: "Fabricar uma ferramenta exigia olhar atento e mãos treinadas. Um golpe errado podia partir a pedra, mas cada erro ensinava alguma coisa. Assim, a técnica passava de pessoa para pessoa, como uma memória guardada nas mãos."
      },
      {
        id: "poder",
        visualType: "fragment",
        backgroundMood: "cave-dark",
        text: "Com as ferramentas certas, o corpo humano ganhou novas possibilidades. Uma mão podia raspar, furar, cortar e defender melhor o grupo. A pedra trabalhada mostra como a inteligência também nascia da necessidade e da observação diária."
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
        text: "Caçar e pescar começava muito antes do momento de apanhar alimento. Era preciso observar pegadas, correntes de água, cheiros e estações. Quem lia bem esses sinais aumentava as hipóteses de alimentar o grupo e proteger os mais frágeis."
      },
      {
        id: "grupo",
        visualType: "spear",
        backgroundMood: "forest-dusk",
        text: "Na caça, um gesto precipitado podia assustar a presa e deixar todos sem comida. Por isso, o grupo aprendia a mover-se em silêncio e a confiar nos companheiros. A sobrevivência dependia tanto da coragem como da cooperação."
      },
      {
        id: "territorio",
        visualType: "map",
        backgroundMood: "river-cold",
        text: "Rios, florestas e planícies eram conhecidos como páginas de um mapa vivo. Alguns lugares prometiam peixe ou caça, outros escondiam perigo. Com o tempo, cada grupo guardava histórias sobre onde ir, quando voltar e o que evitar."
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
        text: "Dentro das cavernas, algumas paredes tornaram-se lugares especiais. Com pigmentos de terra e carvão, mãos humanas deixaram figuras de animais e sinais. Essas imagens parecem guardar memórias, desejos e perguntas antigas."
      },
      {
        id: "sinais",
        visualType: "hand",
        backgroundMood: "ochre-glow",
        text: "Uma mão pintada na rocha podia dizer que alguém esteve ali. Animais desenhados com cuidado talvez lembrassem caçadas, medos ou sonhos. A arte aproximava o invisível e dava forma ao que o grupo sentia em noites de silêncio."
      },
      {
        id: "grupo",
        visualType: "symbol",
        backgroundMood: "fire-circle",
        text: "Ao olhar para as imagens, as pessoas partilhavam algo maior do que o dia a dia. Podiam lembrar histórias, ensinar os mais novos ou sentir que pertenciam ao mesmo grupo. A arte tornou-se uma forma de memória coletiva e de união."
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
        text: "Quando alguém morria, alguns grupos não abandonavam simplesmente o corpo. Escolhiam um lugar, cavavam a terra e faziam um gesto de despedida. Esse cuidado mostra que a perda já era sentida como algo partilhado e profundamente humano."
      },
      {
        id: "memoria",
        visualType: "offering",
        backgroundMood: "stone-cool",
        text: "Em certas sepulturas, os arqueólogos encontraram objetos junto dos mortos. Podiam ser ferramentas, adornos ou pequenos sinais de afeto. Esses vestígios sugerem memória, respeito e uma ligação que continuava depois da morte."
      },
      {
        id: "mistério",
        visualType: "circle",
        backgroundMood: "cave-dark",
        text: "Os ritos funerários mostram que a morte levantava perguntas difíceis. O que acontecia a quem partia? Como devia o grupo lembrar essa pessoa? Mesmo sem respostas certas, esses gestos aproximavam os vivos diante do desconhecido."
      }
    ]
  }
];

export const defaultStoryBlockPattern = [
  {
    id: "impacto",
    visualType: "spark",
    backgroundMood: "cave-dark",
    text: "No início, podia parecer apenas um acontecimento pequeno, quase perdido no dia a dia. Mas ele tocou hábitos, decisões e formas de viver. Com o tempo, mostrou que uma mudança simples podia alterar a vida de muitas pessoas."
  },
  {
    id: "mudanca",
    visualType: "fragment",
    backgroundMood: "stone-warm",
    text: "Quando a novidade começou a espalhar-se, nem todos reagiram da mesma maneira. Algumas pessoas viram oportunidade, outras sentiram medo ou resistência. É nessa tensão, sentida em escolhas pequenas, que a História costuma ganhar movimento."
  },
  {
    id: "legado",
    visualType: "map",
    backgroundMood: "fire-circle",
    text: "Depois do primeiro impacto, as consequências continuaram a crescer. Podiam mudar o trabalho, a família, o poder ou a maneira de imaginar o futuro. A pergunta importante é quem ganhou, quem perdeu e que marcas ficaram no quotidiano."
  }
];

export const categoryStoryBlockPatterns = {
  política: [
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "stone-warm",
      text: "Num certo momento, o poder deixou de funcionar como antes. Podia mudar de mãos, criar novas regras ou usar uma linguagem diferente para mandar. Para as pessoas comuns, isso podia significar esperança, medo ou novas obrigações."
    },
    {
      id: "tensao",
      visualType: "map",
      backgroundMood: "earth-path",
      text: "Por trás de uma decisão política, quase sempre existiam interesses em conflito. Alguns grupos queriam participar mais, enquanto outros temiam perder privilégios. A tensão revelava quem podia falar e quem ficava de fora da decisão."
    },
    {
      id: "consequencia",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "Quando uma nova ordem se instalava, prometia resolver problemas antigos. Mas também criava disputas, leis difíceis e novas formas de controlo. A política deixava marcas na vida diária, desde impostos até à liberdade de cada pessoa."
    }
  ],
  guerra: [
    {
      id: "ameaça",
      visualType: "spear",
      backgroundMood: "forest-dusk",
      text: "A guerra raramente começa apenas no campo de batalha. Antes dela já existem medo, disputa por recursos, ambição e palavras que dividem. Quando a violência chega, muitas pessoas comuns já sentem que o mundo está a mudar à sua volta."
    },
    {
      id: "choque",
      visualType: "strike",
      backgroundMood: "stone-warm",
      text: "No choque entre exércitos ou grupos armados, não sofriam só os combatentes. Famílias fugiam, campos ficavam vazios e cidades ouviam notícias assustadoras. A guerra entrava nas casas e transformava escolhas simples em decisões de sobrevivência."
    },
    {
      id: "marca",
      visualType: "fragment",
      backgroundMood: "quiet-earth",
      text: "Quando a guerra terminava, os vencedores podiam redesenhar fronteiras e celebrar vitórias. Mas muitos voltavam a casa com perdas, fome ou lembranças difíceis. O legado da guerra ficava tanto nos mapas como na memória das pessoas."
    }
  ],
  ciência: [
    {
      id: "observacao",
      visualType: "spark",
      backgroundMood: "river-cold",
      text: "A ciência muitas vezes começa com alguém a observar melhor o mundo. Um movimento, uma planta, uma estrela ou uma doença despertavam curiosidade. A pergunta simples era poderosa: será que podemos compreender e agir de outro modo?"
    },
    {
      id: "tecnica",
      visualType: "stone",
      backgroundMood: "stone-cool",
      text: "Uma ideia só ganhava força quando podia ser testada e repetida. A técnica exigia prática, paciência e confiança nos resultados. Quando funcionava, ajudava pessoas a curar, construir, medir ou produzir de outra forma mais segura."
    },
    {
      id: "transformacao",
      visualType: "map",
      backgroundMood: "fire-circle",
      text: "Quando o conhecimento circulava, deixava de pertencer a uma só pessoa. Podia mudar ofícios, viagens, armas, remédios e formas de ensinar. A ciência transformava o mundo material, mas também a imaginação sobre o que era possível."
    }
  ],
  cultura: [
    {
      id: "voz",
      visualType: "pigment",
      backgroundMood: "ochre-glow",
      text: "A cultura nasce quando uma ideia encontra uma forma de ser partilhada. Pode aparecer numa imagem, numa palavra, num gesto, numa música ou numa memória contada. Assim, algo pessoal passa a fazer parte da vida de muitos, por muito tempo."
    },
    {
      id: "circulacao",
      visualType: "hand",
      backgroundMood: "stone-warm",
      text: "Quando outras pessoas reconhecem essa forma, ela começa a viajar. Cada grupo pode acrescentar sentidos, adaptar detalhes ou discutir o seu valor. A cultura muda porque vive nas pessoas que a recebem e a transformam todos os dias."
    },
    {
      id: "identidade",
      visualType: "symbol",
      backgroundMood: "cave-dark",
      text: "Com o tempo, essas formas culturais ajudam uma comunidade a dizer quem é. Mostram valores, medos, festas, memórias e maneiras de pertencer. Por isso, estudar cultura é também perguntar como as pessoas se viam a si mesmas."
    }
  ],
  religião: [
    {
      id: "crenca",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "A religião oferecia respostas para medos que pareciam maiores do que a vida comum. A morte, a doença, a colheita ou a tempestade podiam ganhar sentido através da crença. Para muitos, isso trazia esperança, ordem e consolo."
    },
    {
      id: "ritual",
      visualType: "offering",
      backgroundMood: "fire-circle",
      text: "Quando a crença era vivida em rituais, deixava de ser apenas interior. Cânticos, ofertas, festas ou regras juntavam pessoas no mesmo gesto. Esses momentos criavam comunidade, marcavam o ritmo da vida e davam sentido ao ano."
    },
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "quiet-earth",
      text: "Quando a fé se aproximava do poder, podia orientar leis, reis e decisões públicas. Isso dava força a certas ideias, mas também podia excluir quem acreditava de outra forma. A religião passava a influenciar tanto a alma como a sociedade."
    }
  ]
};
