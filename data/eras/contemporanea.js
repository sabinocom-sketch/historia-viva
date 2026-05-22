const era = {
    range: "1789 - presente",
    title: "Mundo Contemporâneo",
    summary: "Revoluções, industrialização, nacionalismos, imperialismos, guerras mundiais, direitos e globalização aceleraram mudanças sociais.",
    stats: ["10 eventos", "5 fontes", "10 quizzes"],
    timeline: [
      ["1789", "Revolução Francesa redefine soberania, cidadania e linguagem política."],
      ["1804", "Independência do Haiti desafia escravatura e colonialismo atlântico."],
      ["1815", "Congresso de Viena reorganiza a Europa após Napoleão."],
      ["1832", "Reform Act britânico amplia representação parlamentar e revela pressões da sociedade industrial."],
      ["1848", "Revoluções europeias articulam liberalismo, nacionalismo e questão social."],
      ["1857", "Revolta dos Sipaios abala o domínio da Companhia Britânica na Índia."],
      ["1861", "Unificação italiana transforma a península num Estado nacional."],
      ["1868", "Restauração Meiji acelera modernização estatal, militar e industrial no Japão."],
      ["1871", "Unificação alemã cria novo império e altera o equilíbrio europeu."],
      ["1870-1914", "Imperialismo europeu intensifica dominação colonial em África e Ásia."],
      ["1910", "Revolução Mexicana articula terra, poder, desigualdade e violência política."],
      ["1914", "Primeira Guerra Mundial revela guerra industrial e crise dos impérios."],
      ["1917", "Revolução Russa inaugura novo projeto político socialista."],
      ["1918", "Fim do Império Austro-Húngaro reordena fronteiras e nacionalismos na Europa Central."],
      ["1923", "República da Turquia emerge do colapso otomano e redefine Estado, laicidade e nacionalismo."],
      ["1936-1939", "Guerra Civil Espanhola antecipa conflitos ideológicos europeus do século XX."],
      ["1937", "Guerra sino-japonesa intensifica violência imperial no Leste Asiático."],
      ["1945", "Fim da Segunda Guerra Mundial reorganiza instituições internacionais."],
      ["1947", "Independência e Partição da Índia criam novos Estados e deslocamentos massivos."],
      ["1949", "Revolução Chinesa funda a República Popular da China."],
      ["1948", "Criação de Israel e guerra árabe-israelita reconfiguram o Médio Oriente."],
      ["1957", "Independência do Gana simboliza nova vaga de descolonização africana."],
      ["1959", "Revolução Cubana torna-se referência política na América Latina e na Guerra Fria."],
      ["1964-1985", "Ditaduras militares na América Latina articulam Guerra Fria, repressão e desigualdade."],
      ["1989", "Queda do Muro de Berlim simboliza o fim da divisão europeia da Guerra Fria."],
      ["1994", "Fim do apartheid e eleição de Nelson Mandela marcam a transição democrática sul-africana."],
      ["2001", "Atentados de 11 de Setembro reconfiguram segurança, guerra e política global."]
    ],
    source: [
      {
        text: "Os homens nascem e permanecem livres e iguais em direitos.",
        origin: "Declaração dos Direitos do Homem e do Cidadão, França, 1789.",
        purpose: "Afirma legitimidade política baseada em direitos, nação e cidadania.",
        limits: "A universalidade declarada convivia com exclusões de mulheres, escravizados e pobres."
      },
      {
        text: "Trabalhadores de todos os países, uni-vos.",
        origin: "Síntese do Manifesto Comunista, 1848.",
        purpose: "Permite analisar industrialização, classe e crítica ao capitalismo.",
        limits: "É texto político militante e não descrição neutra de todos os trabalhadores."
      },
      {
        text: "As trincheiras misturam lama, artilharia, medo e espera.",
        origin: "Síntese de cartas e memórias da Primeira Guerra Mundial.",
        purpose: "Mostra experiência da guerra industrial e sofrimento dos soldados.",
        limits: "Cartas eram censuradas e refletem perspetivas individuais."
      },
      {
        text: "Nunca mais a guerra deve destruir povos sem proteção internacional.",
        origin: "Síntese do espírito fundador da ONU em 1945.",
        purpose: "Liga guerra total, direitos humanos e instituições internacionais.",
        limits: "A existência da ONU não impediu conflitos, desigualdades ou vetos políticos."
      },
      {
        text: "O muro caiu e famílias atravessaram uma fronteira que parecia permanente.",
        origin: "Síntese de relatos sobre Berlim, 1989.",
        purpose: "Ajuda a discutir Guerra Fria, memória e reunificação.",
        limits: "O símbolo europeu não resume todas as transições pós-comunistas."
      }
    ],
    quiz: [
      { question: "A Revolução Francesa tornou central qual conceito político?", options: ["Cidadania", "Vassalagem", "Oráculo estatal"], answer: 0 },
      { question: "A Revolução Industrial alterou sobretudo...", options: ["Produção, cidades, trabalho e ambiente", "Apenas a religião medieval", "Só a agricultura neolítica"], answer: 0 },
      { question: "A independência do Haiti foi significativa porque...", options: ["Derrotou escravatura colonial através de revolução", "Criou o Império Romano", "Iniciou a imprensa"], answer: 0 },
      { question: "O imperialismo do século XIX envolveu...", options: ["Dominação política, económica e cultural", "Igualdade plena entre Estados", "Fim do racismo científico"], answer: 0 },
      { question: "A Primeira Guerra Mundial foi guerra industrial porque...", options: ["Usou produção massiva, artilharia e mobilização total", "Não envolveu tecnologia", "Foi apenas naval"], answer: 0 },
      { question: "A Revolução Russa de 1917 levou à...", options: ["Construção de um Estado socialista", "Restauração do feudalismo europeu", "Queda de Constantinopla"], answer: 0 },
      { question: "O Holocausto deve ser entendido como...", options: ["Genocídio organizado pelo Estado nazi", "Conflito económico sem ideologia", "Episódio sem vítimas civis"], answer: 0 },
      { question: "A Guerra Fria foi marcada por...", options: ["Rivalidade ideológica, militar e tecnológica", "Ausência de propaganda", "União política mundial"], answer: 0 },
      { question: "A descolonização do pós-1945 relaciona-se com...", options: ["Nacionalismos, guerras e pressão internacional", "Fim automático de desigualdades", "Regresso ao absolutismo"], answer: 0 },
      { question: "A globalização contemporânea implica...", options: ["Interdependência económica, cultural e tecnológica", "Isolamento completo dos países", "Fim de todos os conflitos"], answer: 0 }
    ],
    prompts: [
      "Como a industrialização mudou o quotidiano?",
      "Por que as guerras mundiais transformaram o papel do Estado?",
      "Que tensões existem entre direitos universais e exclusões históricas?",
      "Compara liberalismo, nacionalismo e socialismo no século XIX.",
      "Porque é que o imperialismo europeu não pode ser visto só como expansão económica?",
      "Explica causas e consequências da Primeira Guerra Mundial.",
      "Como o Holocausto mudou a discussão sobre direitos humanos?",
      "Que papel teve a propaganda na Guerra Fria?",
      "A descolonização significou independência plena?",
      "Simula uma conversa entre operário industrial, sufragista e empresário."
    ],
    events: [
      ["Revolução Francesa", "Mudou linguagem política, soberania, direitos e conflitos sociais."],
      ["Independência do Haiti", "Desafiou escravatura, colonialismo e hierarquias raciais atlânticas."],
      ["Revolução Industrial", "Transformou produção, cidades, trabalho, consumo e ambiente."],
      ["Revoluções de 1848", "Articularam liberalismo, nacionalismo, democracia e reivindicações sociais."],
      ["Imperialismo europeu", "Intensificou exploração colonial e resistências locais."],
      ["Primeira Guerra Mundial", "Destruiu impérios e revelou violência industrial."],
      ["Revolução Russa", "Criou alternativa socialista com grande impacto global."],
      ["Segunda Guerra Mundial e Holocausto", "Produziram devastação global, genocídio e novas instituições internacionais."],
      ["Guerra Fria", "Organizou rivalidades ideológicas, militares e tecnológicas após 1945."],
      ["Descolonização", "Gerou novos Estados e conflitos sobre soberania, fronteiras e desenvolvimento."]
    ],
    biographies: [
      ["Olympe de Gouges", "Defendeu direitos das mulheres durante a Revolução Francesa."],
      ["Toussaint Louverture", "Líder da Revolução Haitiana contra escravatura e colonialismo."],
      ["Karl Marx", "Crítico do capitalismo industrial e referência do socialismo moderno."],
      ["Florence Nightingale", "Reformadora da enfermagem e da estatística sanitária no século XIX."],
      ["Marie Curie", "Cientista pioneira no estudo da radioatividade."],
      ["Lenine", "Líder bolchevique central na Revolução Russa e na criação da URSS."],
      ["Rosa Parks", "Figura simbólica da luta contra a segregação racial nos EUA."],
      ["Mahatma Gandhi", "Líder anticolonial associado à desobediência civil."],
      ["Nelson Mandela", "Figura central na luta contra o apartheid e na transição sul-africana."],
      ["Simone de Beauvoir", "Intelectual ligada ao feminismo contemporâneo e à crítica social."]
    ],
    concepts: [
      ["Nacionalismo", "Ideia política que liga identidade coletiva, território e soberania."],
      ["Industrialização", "Mecanização produtiva com efeitos económicos, sociais e ambientais."],
      ["Direitos humanos", "Princípios que afirmam dignidade e direitos fundamentais."],
      ["Liberalismo", "Corrente que valoriza liberdades individuais, constitucionalismo e mercado."],
      ["Socialismo", "Família de ideias que critica desigualdades capitalistas e defende justiça social."],
      ["Imperialismo", "Dominação formal ou informal de territórios e populações por potências externas."],
      ["Guerra total", "Mobilização de economia, sociedade e Estado para conflito em larga escala."],
      ["Genocídio", "Destruição intencional de um grupo nacional, étnico, racial ou religioso."],
      ["Guerra Fria", "Rivalidade global entre blocos liderados por EUA e URSS."],
      ["Globalização", "Intensificação de interdependências económicas, culturais, políticas e tecnológicas."]
    ],
    curiosities: [
      "A Revolução Haitiana foi a única revolução de escravizados que criou um Estado independente duradouro.",
      "As guerras mundiais aceleraram investigação médica, industrial e tecnológica, mas a custo humano enorme.",
      "A ONU nasceu com a promessa de paz, mas dentro de equilíbrios de poder muito desiguais.",
      "A Guerra Fria também foi cultural: cinema, desporto, ciência e educação foram campos de disputa.",
      "A globalização aumentou circulação de bens e informação, mas também vulnerabilidades e desigualdades.",
      "As latas de conserva ganharam importância militar antes de se tornarem comuns no quotidiano.",
      "O telégrafo encurtou tempos de comunicação e mudou diplomacia, imprensa e mercados.",
      "A bicicleta deu nova mobilidade a muitos trabalhadores e foi associada à emancipação feminina.",
      "A rádio transformou propaganda, entretenimento doméstico e informação em massa.",
      "A penicilina tornou-se decisiva durante a Segunda Guerra Mundial e mudou a medicina.",
      "A corrida espacial produziu tecnologias e imaginários que entraram no consumo civil.",
      "Movimentos pelos direitos civis usaram televisão e fotografia para expor violência política.",
      "A comida rápida é também uma história de urbanização, trabalho e cultura de consumo.",
      "A internet nasceu de redes militares e académicas antes de se massificar.",
      "A descolonização criou novos Estados, mas muitas fronteiras herdadas geraram tensões duradouras."
    ]
  };

export default era;
