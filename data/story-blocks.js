export const storyBlockRules = [
  {
    match: ["descoberta do fogo", "fogo"],
    blocks: [
      {
        id: "origem",
        visualType: "spark",
        backgroundMood: "cave-dark",
        text: "Depois de um relâmpago incendiar a paisagem, alguém aproximava-se das brasas com cuidado. A chama podia queimar, mas também dava luz, calor e proteção. Levar uma brasa acesa para o abrigo podia mudar uma noite inteira."
      },
      {
        id: "sobrevivencia",
        visualType: "charcoal",
        backgroundMood: "stone-warm",
        text: "Durante a noite, era preciso juntar ramos secos antes que o brilho morresse. Se a última brasa se apagasse numa noite gelada, o grupo perdia calor, defesa e a possibilidade de cozinhar. Cuidar do fogo tornou-se uma responsabilidade partilhada."
      },
      {
        id: "comunidade",
        visualType: "embers",
        backgroundMood: "fire-circle",
        text: "À volta das chamas, rostos antes escondidos pela escuridão ficavam visíveis. Ali cozinhavam, aqueciam-se e talvez repetissem histórias sobre caçadas e perigos. Hoje usamos energia em casas e cidades, mas essa capacidade de transformar o ambiente começou junto de fogueiras frágeis."
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
        text: "No chão frio, uma pedra comum podia esconder uma lâmina. Um artesão escolhia-a pelo peso, pela forma e pelo modo como partia. Depois de trabalhada, servia para cortar carne, raspar peles e atravessar dias difíceis com mais segurança."
      },
      {
        id: "tecnica",
        visualType: "strike",
        backgroundMood: "stone-warm",
        text: "Cada golpe exigia atenção: força a mais podia destruir a peça; força a menos não abria fio nenhum. Ao lado, alguém mais novo observava em silêncio. A técnica passava de mão em mão, como uma memória prática antes de existir escrita."
      },
      {
        id: "poder",
        visualType: "fragment",
        backgroundMood: "cave-dark",
        text: "Com uma pedra afiada, uma mão pequena ganhava novas capacidades: cortar, furar, raspar, defender. A inteligência aparecia na resposta a problemas concretos. Hoje usamos máquinas e computadores, mas tudo começa nessa ideia simples: criar uma ferramenta para ampliar o corpo."
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
        text: "Antes do amanhecer, alguém seguia pegadas frescas junto ao rio. A lama, o cheiro e a direção do vento diziam mais do que palavras. Quem lia bem esses sinais aumentava a hipótese de voltar ao acampamento com alimento para crianças, idosos e feridos."
      },
      {
        id: "grupo",
        visualType: "spear",
        backgroundMood: "forest-dusk",
        text: "Um ramo partido de repente podia assustar a presa e transformar o dia em fome. Por isso, o grupo movia-se em silêncio, esperando o gesto certo. A sobrevivência dependia da coragem, mas também da confiança entre pessoas que partilhavam o mesmo risco."
      },
      {
        id: "territorio",
        visualType: "map",
        backgroundMood: "river-cold",
        text: "Rios, florestas e planícies eram lidos como um mapa vivo. Um remanso podia esconder peixe; uma encosta podia guardar perigo. Hoje ainda dependemos de mapas, previsões e dados, mas essa leitura do território começou com olhos atentos e memória coletiva."
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
        text: "À luz instável de uma chama, alguém misturava terra, carvão e gordura para pintar na rocha. Bisontes, cavalos, mãos e sinais surgiam onde antes havia só pedra. Algumas destas imagens têm dezenas de milhares de anos e ainda nos obrigam a parar."
      },
      {
        id: "sinais",
        visualType: "hand",
        backgroundMood: "ochre-glow",
        text: "Uma criança podia olhar para os animais desenhados e aprender quais eram fortes, rápidos ou perigosos. Talvez fossem memória de caça, ritual, sonho ou aviso. Os arqueólogos ainda discutem muitos destes símbolos, e esse mistério faz parte da sua força."
      },
      {
        id: "grupo",
        visualType: "symbol",
        backgroundMood: "fire-circle",
        text: "Porque razão alguém entraria tão fundo numa gruta apenas para pintar uma parede? Talvez para ensinar, lembrar, pedir proteção ou unir o grupo. Hoje continuamos a usar imagens para contar quem somos; a diferença é que trocámos a rocha por ecrãs."
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
        text: "Quando alguém morria, o grupo podia parar a marcha e escolher um lugar na terra. O corpo não era deixado ao acaso: havia cuidado, silêncio e despedida. Esse gesto mostra que a perda já era sentida como algo partilhado."
      },
      {
        id: "memoria",
        visualType: "offering",
        backgroundMood: "stone-cool",
        text: "Em algumas sepulturas, os arqueólogos encontraram adornos, ferramentas ou pigmentos junto dos mortos. Não sabemos sempre se eram ofertas, sinais de estatuto ou lembranças afetivas. Mas cada objeto colocado ali sugere que aquela vida continuava a importar."
      },
      {
        id: "mistério",
        visualType: "circle",
        backgroundMood: "cave-dark",
        text: "A morte levantava perguntas que nenhuma ferramenta resolvia. O que acontecia a quem partia? Como devia o grupo lembrar essa pessoa? Ainda hoje fazemos rituais para atravessar a perda; nesses gestos antigos reconhecemos uma humanidade muito próxima."
      }
    ]
  }
];

export const defaultStoryBlockPattern = [
  {
    id: "impacto",
    visualType: "spark",
    backgroundMood: "cave-dark",
    text: "No início, podia parecer apenas uma cena pequena: uma decisão tomada à pressa, uma porta aberta, uma multidão inquieta, uma invenção ainda frágil. Mas esse momento tocou hábitos e formas de viver. A História muitas vezes começa quando o quotidiano deixa de parecer seguro."
  },
  {
    id: "mudanca",
    visualType: "fragment",
    backgroundMood: "stone-warm",
    text: "Quando a novidade se espalhava, alguém ganhava esperança e alguém sentia ameaça. Havia medo, interesse, resistência e escolhas difíceis. É nessa tensão, entre o que muda e o que se tenta proteger, que a História ganha movimento humano."
  },
  {
    id: "legado",
    visualType: "map",
    backgroundMood: "fire-circle",
    text: "Depois do impacto, as consequências entravam na vida diária: no trabalho, na família, no poder ou na forma de imaginar o futuro. A pergunta decisiva não é só o que aconteceu. É quem ganhou, quem perdeu e que marcas ainda reconhecemos hoje."
  }
];

export const categoryStoryBlockPatterns = {
  política: [
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "stone-warm",
      text: "Numa praça, num palácio ou numa assembleia, alguém percebia que o poder já não funcionava como antes. Novas regras podiam trazer esperança, mas também impostos, vigilância ou obediência. Para as pessoas comuns, a política aparecia em decisões muito concretas."
    },
    {
      id: "tensao",
      visualType: "map",
      backgroundMood: "earth-path",
      text: "Por trás de uma decisão política havia quase sempre vozes em conflito. Alguns queriam participar mais; outros protegiam privilégios antigos. Quem podia falar? Quem ficava à porta? Essas perguntas revelam tanto sobre uma sociedade como as suas leis."
    },
    {
      id: "consequencia",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "Quando uma nova ordem se instalava, prometia resolver problemas antigos. Mas podia criar leis duras, disputas e novas formas de controlo. Ainda hoje sentimos a política em direitos, impostos e liberdade; por isso, estes conflitos continuam próximos."
    }
  ],
  guerra: [
    {
      id: "ameaça",
      visualType: "spear",
      backgroundMood: "forest-dusk",
      text: "Antes da batalha, já há rumores, fronteiras tensas, medo e palavras que dividem. Uma família pode ouvir que soldados se aproximam antes de ver qualquer exército. A guerra começa muitas vezes na insegurança que entra na vida comum."
    },
    {
      id: "choque",
      visualType: "strike",
      backgroundMood: "stone-warm",
      text: "Quando a violência chega, não sofrem apenas os combatentes. Campos ficam vazios, famílias fogem e cidades esperam notícias que podem destruir uma casa inteira. Uma escolha simples, ficar ou partir, torna-se uma decisão de sobrevivência."
    },
    {
      id: "marca",
      visualType: "fragment",
      backgroundMood: "quiet-earth",
      text: "Quando a guerra termina, os vencedores podem redesenhar mapas e celebrar. Mas muitos regressam com fome, perdas ou memórias difíceis de contar. O legado da guerra fica nas fronteiras, nos corpos e nas histórias que as famílias continuam a repetir."
    }
  ],
  ciência: [
    {
      id: "observacao",
      visualType: "spark",
      backgroundMood: "river-cold",
      text: "A ciência pode começar com alguém a reparar num detalhe que outros ignoraram: uma estrela que se move, uma febre que volta, uma planta que cura. A pergunta é simples e poderosa: será que compreender melhor permite agir de outro modo?"
    },
    {
      id: "tecnica",
      visualType: "stone",
      backgroundMood: "stone-cool",
      text: "Uma ideia só ganhava força quando resistia ao teste. Era preciso repetir, medir, falhar e tentar de novo. Quando funcionava, podia curar uma doença, construir com mais segurança ou produzir melhor. O conhecimento deixava de ser apenas opinião."
    },
    {
      id: "transformacao",
      visualType: "map",
      backgroundMood: "fire-circle",
      text: "Quando o conhecimento circulava, deixava de pertencer a uma só pessoa. Mudava ofícios, viagens, remédios, armas e escolas. Hoje vivemos rodeados por essa herança: cada tecnologia nova prolonga a antiga curiosidade de perguntar como o mundo funciona."
    }
  ],
  cultura: [
    {
      id: "voz",
      visualType: "pigment",
      backgroundMood: "ochre-glow",
      text: "A cultura nasce quando uma ideia ganha forma diante dos outros: uma canção numa festa, uma imagem num muro, uma história repetida à noite. Algo pessoal passa a circular e deixa de pertencer apenas a quem o criou."
    },
    {
      id: "circulacao",
      visualType: "hand",
      backgroundMood: "stone-warm",
      text: "Quando outras pessoas reconhecem essa forma, ela começa a viajar. Cada grupo acrescenta sentidos, altera detalhes ou discute o seu valor. Por isso a cultura nunca fica parada: muda sempre que alguém a recebe e a transforma."
    },
    {
      id: "identidade",
      visualType: "symbol",
      backgroundMood: "cave-dark",
      text: "Com o tempo, essas formas ajudam uma comunidade a dizer quem é. Mostram valores, medos, festas, memórias e maneiras de pertencer. Hoje também fazemos isso com músicas, filmes, memes e monumentos: cultura é identidade em movimento."
    }
  ],
  religião: [
    {
      id: "crenca",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "Quando a tempestade destruía uma colheita ou a doença chegava sem aviso, a vida parecia depender de forças invisíveis. A religião dava linguagem a esses medos. Para muitos, oferecia esperança, ordem e consolo diante do que não podiam controlar."
    },
    {
      id: "ritual",
      visualType: "offering",
      backgroundMood: "fire-circle",
      text: "Num ritual, a crença deixava de ser apenas interior. Cânticos, ofertas, festas e regras juntavam pessoas no mesmo gesto. Esses momentos marcavam o ano, aproximavam famílias e davam ao grupo uma forma comum de enfrentar incertezas."
    },
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "quiet-earth",
      text: "Quando a fé se aproximava do poder, podia orientar leis, reis e decisões públicas. Isso fortalecia certas ideias, mas também podia excluir quem acreditava de outro modo. A religião influenciava a alma, a sociedade e debates que ainda hoje reconhecemos."
    }
  ]
};
