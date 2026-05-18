export const storyBlockRules = [
  {
    match: ["descoberta do fogo", "fogo"],
    blocks: [
      {
        id: "origem",
        visualType: "spark",
        backgroundMood: "cave-dark",
        text: "Os primeiros humanos encontraram fogo na natureza."
      },
      {
        id: "sobrevivencia",
        visualType: "charcoal",
        backgroundMood: "stone-warm",
        text: "Manter as chamas acesas tornou-se uma questão de sobrevivência."
      },
      {
        id: "comunidade",
        visualType: "embers",
        backgroundMood: "fire-circle",
        text: "O fogo trouxe calor, proteção e vida em grupo durante a noite."
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
        text: "Uma pedra podia tornar-se lâmina, raspador ou ponta."
      },
      {
        id: "tecnica",
        visualType: "strike",
        backgroundMood: "stone-warm",
        text: "Cada golpe guardava experiência, tentativa e aprendizagem."
      },
      {
        id: "poder",
        visualType: "fragment",
        backgroundMood: "cave-dark",
        text: "A técnica transformou a mão humana numa ferramenta de sobrevivência."
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
        text: "Sobreviver exigia ler rastos, águas e estações."
      },
      {
        id: "grupo",
        visualType: "spear",
        backgroundMood: "forest-dusk",
        text: "A caça dependia de coordenação, silêncio e confiança."
      },
      {
        id: "territorio",
        visualType: "map",
        backgroundMood: "river-cold",
        text: "Cada território tornava-se um mapa vivo de riscos e alimento."
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
        text: "Nas paredes da rocha, imagens começaram a guardar memória."
      },
      {
        id: "sinais",
        visualType: "hand",
        backgroundMood: "ochre-glow",
        text: "Mãos, animais e sinais tornaram o invisível mais próximo."
      },
      {
        id: "grupo",
        visualType: "symbol",
        backgroundMood: "fire-circle",
        text: "A arte ajudou grupos humanos a imaginar, lembrar e pertencer."
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
        text: "Enterrar os mortos transformou a perda num gesto coletivo."
      },
      {
        id: "memoria",
        visualType: "offering",
        backgroundMood: "stone-cool",
        text: "Objetos e sepulturas sugerem cuidado, memória e ligação."
      },
      {
        id: "mistério",
        visualType: "circle",
        backgroundMood: "cave-dark",
        text: "A morte passou a abrir perguntas sobre o grupo e o desconhecido."
      }
    ]
  }
];

export const defaultStoryBlockPattern = [
  {
    id: "impacto",
    visualType: "spark",
    backgroundMood: "cave-dark",
    text: "Um pequeno acontecimento começou a mudar a vida das pessoas."
  },
  {
    id: "mudanca",
    visualType: "fragment",
    backgroundMood: "stone-warm",
    text: "A mudança ganhou força porque afetou escolhas, medos e formas de viver."
  },
  {
    id: "legado",
    visualType: "map",
    backgroundMood: "fire-circle",
    text: "As consequências continuaram muito para lá do primeiro momento."
  }
];

export const categoryStoryBlockPatterns = {
  política: [
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "stone-warm",
      text: "O poder mudou de mãos, de regras ou de linguagem."
    },
    {
      id: "tensao",
      visualType: "map",
      backgroundMood: "earth-path",
      text: "Por trás da decisão havia interesses, exclusões e medo de perder controlo."
    },
    {
      id: "consequencia",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "A nova ordem abriu possibilidades, mas também novos conflitos."
    }
  ],
  guerra: [
    {
      id: "ameaça",
      visualType: "spear",
      backgroundMood: "forest-dusk",
      text: "A violência começou antes do combate: medo, recursos e ambição já estavam em movimento."
    },
    {
      id: "choque",
      visualType: "strike",
      backgroundMood: "stone-warm",
      text: "Quando os grupos se enfrentaram, vidas comuns também foram arrastadas."
    },
    {
      id: "marca",
      visualType: "fragment",
      backgroundMood: "quiet-earth",
      text: "Depois da guerra, o mapa podia mudar, mas as feridas ficavam."
    }
  ],
  ciência: [
    {
      id: "observacao",
      visualType: "spark",
      backgroundMood: "river-cold",
      text: "Alguém observou o mundo e percebeu que podia agir sobre ele."
    },
    {
      id: "tecnica",
      visualType: "stone",
      backgroundMood: "stone-cool",
      text: "A técnica tornou-se prática, repetição e confiança."
    },
    {
      id: "transformacao",
      visualType: "map",
      backgroundMood: "fire-circle",
      text: "Quando o conhecimento circulou, também mudou trabalho, poder e imaginação."
    }
  ],
  cultura: [
    {
      id: "voz",
      visualType: "pigment",
      backgroundMood: "ochre-glow",
      text: "Uma ideia encontrou forma: imagem, palavra, gesto ou memória."
    },
    {
      id: "circulacao",
      visualType: "hand",
      backgroundMood: "stone-warm",
      text: "Outras pessoas reconheceram essa forma e deram-lhe novos sentidos."
    },
    {
      id: "identidade",
      visualType: "symbol",
      backgroundMood: "cave-dark",
      text: "A cultura ajudou comunidades a dizer quem eram e o que valorizavam."
    }
  ],
  religião: [
    {
      id: "crenca",
      visualType: "circle",
      backgroundMood: "cave-dark",
      text: "Uma crença deu sentido ao medo, à esperança ou à autoridade."
    },
    {
      id: "ritual",
      visualType: "offering",
      backgroundMood: "fire-circle",
      text: "Rituais e instituições transformaram essa crença em experiência coletiva."
    },
    {
      id: "poder",
      visualType: "symbol",
      backgroundMood: "quiet-earth",
      text: "Quando a fé encontrou o poder, a vida pública também mudou."
    }
  ]
};
