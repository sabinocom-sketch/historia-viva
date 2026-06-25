const era = {
    range: "c. 3000 a.C. - 476",
    title: "Civilizações Antigas",
    summary: "Cidades, impérios, leis, religião, comércio e cultura escrita criaram formas duradouras de autoridade e desigualdade.",
    stats: ["10 eventos", "5 fontes", "10 quizzes"],
    timeline: [
      ["c. 3100 a.C.", "Unificação do Egito consolida autoridade faraónica e administração no vale do Nilo."],
      ["c. 2600 a.C.", "Cidades sumérias articulam templos, escrita, irrigação e hierarquias urbanas."],
      ["c. 2500 a.C.", "Cidades do vale do Indo revelam urbanismo, comércio e planeamento hidráulico."],
      ["c. 1750 a.C.", "Código de Hamurabi apresenta lei, estatuto social e poder real em escrita pública."],
      ["c. 1600 a.C.", "Dinastia Shang combina bronze, escrita oracular, ancestralidade e autoridade régia na China."],
      ["c. 1200 a.C.", "Crises no Mediterrâneo oriental enfraquecem reinos e redes palaciais."],
      ["c. 900 a.C.", "Expansão assíria usa exército, cerco, deportações e administração provincial."],
      ["c. 550 a.C.", "Ciro II funda o Império Persa aqueménida com satrapias e integração de povos diversos."],
      ["508 a.C.", "Reformas em Atenas abrem caminho para práticas democráticas limitadas."],
      ["499-449 a.C.", "Guerras Médicas reforçam identidades políticas gregas contra o Império Persa."],
      ["334-323 a.C.", "Conquistas de Alexandre difundem cultura helenística e novas monarquias."],
      ["c. 260 a.C.", "Ashoka governa o Império Máuria e associa poder, budismo e administração na Índia antiga."],
      ["264-146 a.C.", "Guerras Púnicas transformam Roma numa potência mediterrânica."],
      ["27 a.C.", "Augusto inaugura o Principado e reorganiza o poder romano."],
      ["c. 250", "Cidades maias articulam escrita, calendário, astronomia, ritual e poder dinástico."],
      ["476", "Deposição de Rómulo Augústulo simboliza o fim do Império Romano do Ocidente."]
    ],
    source: [
      {
        text: "Se um homem destruir o olho de outro homem, destruirão o seu olho.",
        origin: "Excerto inspirado no Código de Hamurabi, Babilónia antiga.",
        purpose: "Apresenta justiça pública, hierarquia social e autoridade régia.",
        limits: "Mostra normas ideais, não a resolução real de todos os conflitos."
      },
      {
        text: "O faraó oferece aos deuses e recebe deles ordem, fertilidade e vitória.",
        origin: "Síntese de inscrições reais egípcias.",
        purpose: "Permite estudar a ligação entre religião, poder e legitimidade política.",
        limits: "É propaganda oficial e não representa todas as experiências sociais."
      },
      {
        text: "O cidadão fala na assembleia, mas nem todos os habitantes são cidadãos.",
        origin: "Síntese de práticas políticas atenienses clássicas.",
        purpose: "Ajuda a discutir participação política e exclusões sociais.",
        limits: "A democracia ateniense variou no tempo e excluía mulheres, escravizados e metecos."
      },
      {
        text: "As estradas levam tropas, impostos e ordens até às províncias.",
        origin: "Síntese inspirada na administração romana.",
        purpose: "Mostra como infraestrutura, exército e fiscalidade sustentavam impérios.",
        limits: "Não revela por si só resistências locais ou desigualdades provinciais."
      },
      {
        text: "Nas moedas, o rosto do governante circula com títulos, deuses e vitórias.",
        origin: "Síntese baseada em moedas helenísticas e romanas.",
        purpose: "Permite analisar economia, propaganda e autoridade visual.",
        limits: "A circulação monetária foi desigual e não substituiu todas as formas de troca."
      }
    ],
    quiz: [
      { question: "Que fator ajudou várias civilizações antigas a organizar grandes Estados?", options: ["Escrita administrativa", "Imprensa mecânica", "Sufrágio universal"], answer: 0 },
      { question: "A democracia ateniense era limitada porque...", options: ["Excluía mulheres, escravizados e estrangeiros", "Não tinha assembleia", "Era governada por faraós"], answer: 0 },
      { question: "O Nilo foi central no Egito porque...", options: ["Organizava agricultura, transporte e calendário", "Criou a imprensa", "Impediu qualquer comércio"], answer: 0 },
      { question: "As Guerras Púnicas opuseram sobretudo...", options: ["Roma e Cartago", "Atenas e Esparta", "Egito e China"], answer: 0 },
      { question: "O helenismo resultou em parte de...", options: ["Conquistas de Alexandre e contactos culturais", "Revolução Industrial", "Queda de Constantinopla"], answer: 0 },
      { question: "O Código de Hamurabi é útil para estudar...", options: ["Lei, poder e hierarquia", "Eletricidade", "Parlamentarismo moderno"], answer: 0 },
      { question: "Uma cidade-Estado era...", options: ["Comunidade política autónoma", "Império colonial moderno", "Fábrica mecanizada"], answer: 0 },
      { question: "Augusto apresentou o seu poder como...", options: ["Restauração da ordem republicana", "Abolição do império", "Fim da religião romana"], answer: 0 },
      { question: "A queda de Roma no Ocidente deve ser vista como...", options: ["Processo complexo e longo", "Acontecimento sem causas sociais", "Resultado exclusivo de uma batalha"], answer: 0 },
      { question: "As moedas antigas podem revelar...", options: ["Propaganda, economia e símbolos de poder", "Resultados eleitorais universais", "Imagens fotográficas"], answer: 0 }
    ],
    prompts: [
      "Compara o poder de um faraó com o de um imperador romano.",
      "Como é que a escrita mudou a administração dos impérios?",
      "Que ligação existia entre religião e autoridade política?",
      "A democracia ateniense pode ser chamada democrática apesar das exclusões?",
      "Explica como o comércio ajudou cidades antigas a crescer.",
      "Que consequências tiveram as conquistas de Alexandre?",
      "Porque é que Roma conseguiu integrar territórios tão diversos?",
      "Como funcionava a propaganda política em moedas e monumentos?",
      "Que causas explicam a crise do Império Romano do Ocidente?",
      "Imagina um debate entre um cidadão ateniense, uma mulher ateniense e um escravizado."
    ],
    events: [
      ["Unificação do Egito", "Consolidou monarquia, fiscalidade e religião régia no vale do Nilo."],
      ["Urbanização suméria", "Cidades como Uruk articularam templos, escrita, irrigação e especialização."],
      ["Código de Hamurabi", "Fixou normas legais associadas a estatuto social e autoridade do rei."],
      ["Crise do Bronze Final", "Quebrou redes palaciais e reordenou poderes no Mediterrâneo oriental."],
      ["Reformas de Clístenes", "Alargaram participação cívica masculina em Atenas, mantendo exclusões."],
      ["Guerras Médicas", "Reforçaram identidades gregas e o prestígio de Atenas."],
      ["Guerra do Peloponeso", "Enfraqueceu cidades gregas e expôs tensões entre democracia, império e oligarquia."],
      ["Conquistas de Alexandre", "Criaram reinos helenísticos e intensificaram contactos culturais."],
      ["Guerras Púnicas", "Deram a Roma supremacia mediterrânica e novos problemas sociais."],
      ["Queda de Roma no Ocidente", "Resultou de pressões militares, fiscais, políticas e sociais acumuladas."]
    ],
    biographies: [
      ["Cleópatra VII", "Rainha do Egito ptolemaico que negociou poder entre Roma e o Mediterrâneo oriental."],
      ["Péricles", "Líder ateniense ligado à democracia, imperialismo marítimo e cultura clássica."],
      ["Augusto", "Primeiro imperador romano, reorganizou instituições e legitimou novo poder."],
      ["Hamurabi", "Rei babilónico associado a uma famosa compilação legal e à autoridade régia."],
      ["Hatshepsut", "Faraó mulher que usou arquitetura, comércio e religião para legitimar o governo."],
      ["Ciro II", "Fundador do Império Persa aqueménida, conhecido por políticas de integração imperial."],
      ["Alexandre Magno", "Conquistador macedónico cuja expansão criou o mundo helenístico."],
      ["Aníbal Barca", "General cartaginês que desafiou Roma na Segunda Guerra Púnica."],
      ["Júlio César", "General e político cuja concentração de poder precipitou a crise republicana romana."],
      ["Hipátia de Alexandria", "Filósofa e matemática que revela a vitalidade cultural da Antiguidade tardia."]
    ],
    concepts: [
      ["Cidade-Estado", "Comunidade política autónoma, como Atenas, Esparta ou cidades mesopotâmicas."],
      ["Império", "Poder que governa territórios e povos diversos a partir de um centro dominante."],
      ["Cidadania", "Conjunto de direitos e deveres políticos, muitas vezes restrito a grupos específicos."],
      ["Escrita cuneiforme", "Sistema de escrita usado na Mesopotâmia para administração, literatura e contabilidade."],
      ["Politeísmo", "Crença em múltiplas divindades, frequentemente ligada à ordem política e social."],
      ["Democracia direta", "Participação política de cidadãos em assembleia, com exclusões importantes."],
      ["Helenismo", "Mundo cultural e político formado após as conquistas de Alexandre."],
      ["República romana", "Sistema político romano anterior ao Principado, marcado por magistraturas e Senado."],
      ["Romanização", "Processos variados de adoção, adaptação e negociação de práticas romanas."],
      ["Escravatura antiga", "Instituição económica e social central, com formas e estatutos diversos."]
    ],
    curiosities: [
      "A democracia ateniense dependia de trabalho escravizado e excluía a maioria dos habitantes.",
      "O Império Persa usava satrapias para administrar regiões muito diferentes.",
      "Muitas pirâmides foram construídas por trabalhadores organizados, não simplesmente por escravizados.",
      "Roma expandiu a cidadania gradualmente antes de a alargar a quase todos os homens livres do império em 212.",
      "A Biblioteca de Alexandria tornou-se símbolo de circulação e disputa do conhecimento antigo.",
      "Na Mesopotâmia, recibos e contas foram tão importantes para a escrita como textos literários.",
      "Os romanos usavam grafitos para humor, política, insultos e publicidade local.",
      "Em Atenas, participar na política podia exigir tempo livre que muitos trabalhadores não tinham.",
      "O garum, molho de peixe fermentado, era um produto muito apreciado no mundo romano.",
      "Estradas romanas eram infraestruturas militares, administrativas e comerciais ao mesmo tempo.",
      "Alguns faraós apresentavam-se como mantenedores da ordem cósmica, não apenas como governantes.",
      "A guerra antiga dependia tanto de logística e abastecimento como de batalhas famosas.",
      "Moedas antigas funcionavam como propaganda portátil do poder político.",
      "O teatro grego misturava religião, competição cívica e reflexão política.",
      "A medicina hipocrática procurava explicações naturais para doenças, ainda que com limites."
    ]
  };

const egyptPremiumContent = {
  timeline: [
    ["c. 6000-3100 a.C.", "Origens do Antigo Egipto: comunidades agrícolas aproximam-se do Nilo e formam reinos.", "política", "O cultivo, a criação de animais, as trocas e o controlo da água favoreceram aldeias cada vez mais complexas. No final do período pré-dinástico, o Alto e o Baixo Egipto foram unificados: não foi um nascimento súbito, mas o resultado de alianças, conflitos e administração crescente."],
    ["c. 3100 a.C.", "O Nilo: o rio que organizava a vida egípcia.", "ciência", "A cheia anual depositava lodo fértil nas margens e tornava possível a agricultura num território maioritariamente desértico. O Nilo era também estrada, fonte de alimento e referência para o calendário; por isso, gerir terras, canais e colheitas era uma questão de sobrevivência e de poder."],
    ["c. 3100-30 a.C.", "Os faraós: governar em nome da ordem e dos deuses.", "política", "O faraó concentrava autoridade militar, religiosa e administrativa, mas não governava sozinho. Escribas, sacerdotes, oficiais e chefes locais cobravam impostos, registavam recursos e aplicavam decisões. A imagem de poder divino legitimava o governo, embora crises e disputas dinásticas mostrassem os seus limites."],
    ["c. 2686-2181 a.C.", "As pirâmides e a arquitectura egípcia: construir para a eternidade e para o poder.", "cultura", "Pirâmides, templos, túmulos escavados e monumentos alinhavam técnica, religião e propaganda régia. A construção mobilizava trabalhadores especializados, camponeses em períodos de menor trabalho agrícola, pedra, alimentos e uma administração muito organizada. Não foram simplesmente obra de escravizados."],
    ["c. 2600 a.C.-séc. IV", "A religião egípcia: deuses, rituais e a esperança de continuar a viver após a morte.", "religião", "Os egípcios cultuavam muitas divindades ligadas à natureza, às cidades e à realeza. A ideia de maat — ordem, justiça e equilíbrio — unia o mundo dos deuses ao dever de governar bem. Túmulos, oferendas e textos funerários revelam a importância da vida após a morte, mas variavam conforme a época e os recursos de cada pessoa."],
    ["c. 2000-1000 a.C.", "O quotidiano no Antigo Egipto: trabalho, alimento e desigualdades.", "cultura", "A maioria da população trabalhava nos campos, na pesca, em oficinas ou em serviços domésticos. Pão e cerveja eram alimentos básicos, e a vida seguia o ritmo do rio e das estações agrícolas. Mulheres podiam possuir bens e celebrar contratos em certas situações, mas a sociedade mantinha fortes diferenças de riqueza, estatuto e trabalho."],
    ["c. 2000-1000 a.C.", "A casa egípcia: viver entre o calor, a família e o trabalho.", "cultura", "Muitas casas eram feitas de tijolos de barro seco, com poucos vãos para reduzir o calor e espaços de armazenamento, cozinha e convívio. As habitações das elites podiam ser maiores e ter jardins; as mais modestas eram compactas. Restos arqueológicos e pinturas ajudam-nos a reconstruir o dia a dia, mas raramente preservam a voz direta das pessoas comuns."],
    ["671-332 a.C.", "Invasões assírias, persas e helénicas: o Egipto entre impérios.", "guerra", "Em 671 a.C., os assírios conquistaram o Egipto por um período curto. Em 525 a.C., Cambises II incorporou-o no Império Persa; depois de fases de autonomia, Alexandre Magno entrou no país em 332 a.C. Estas conquistas não apagaram a cultura egípcia: criaram administrações e elites novas, ao lado de tradições locais persistentes."],
    ["30 a.C.", "O fim do Antigo Egipto: de reino independente a província romana.", "política", "Depois da conquista de Alexandre, a dinastia ptolemaica governou o Egipto durante quase três séculos. A derrota de Cleópatra VII e Marco António perante Otaviano, em 31 a.C., abriu caminho à anexação romana em 30 a.C. O reino faraónico independente terminou, mas a língua, a religião e as práticas egípcias continuaram vivas durante séculos." ]
  ],
  quiz: [
    { type: "causas_consequências", difficulty: "média", question: "Porque era o Nilo essencial para o Antigo Egipto?", options: ["As cheias fertilizavam os campos e o rio facilitava transporte e comunicações", "Impediam toda a agricultura", "Era apenas uma fronteira militar"], answer: 0, explanation: "As cheias traziam lodo fértil e o rio unia regiões, pessoas, produtos e decisões administrativas." },
    { type: "escolha_múltipla", difficulty: "média", question: "Qual descrição dos faraós é mais rigorosa?", options: ["Eram governantes com autoridade religiosa, militar e administrativa, apoiados por muitos funcionários", "Governavam sem administração nem impostos", "Eram apenas sacerdotes sem poder político"], answer: 0, explanation: "A autoridade faraónica dependia de redes de escribas, sacerdotes, oficiais e comunidades locais." },
    { type: "verdadeiro_falso", difficulty: "média", question: "Verdadeiro ou falso: as pirâmides foram construídas exclusivamente por pessoas escravizadas.", options: ["Verdadeiro", "Falso"], answer: 1, explanation: "A evidência aponta para equipas organizadas de trabalhadores, incluindo especialistas e população mobilizada em épocas específicas." },
    { type: "cronológica", difficulty: "difícil", question: "Qual é a ordem cronológica correta destas conquistas do Egipto?", options: ["Assíria > Persa > Alexandre Magno > Roma", "Roma > Persa > Assíria > Alexandre Magno", "Alexandre Magno > Assíria > Roma > Persa"], answer: 0, explanation: "Os assírios chegaram em 671 a.C., os persas em 525 a.C., Alexandre em 332 a.C. e Roma anexou o Egipto em 30 a.C." }
  ],
  source: [
    {
      text: "A cheia do rio cobre os campos; quando a água recua, a terra escura recebe sementes.",
      origin: "Síntese baseada em fontes egípcias e evidência arqueológica sobre o ciclo do Nilo.",
      purpose: "Ajuda a relacionar ambiente, agricultura, calendário e organização política.",
      limits: "As cheias variavam e esta síntese não mostra, por si só, a experiência de todos os grupos sociais."
    },
    {
      text: "O faraó preserva a maat, oferece aos deuses e protege a terra do caos.",
      origin: "Síntese inspirada em inscrições reais egípcias.",
      purpose: "Permite estudar como religião e propaganda legitimavam a autoridade faraónica.",
      limits: "É uma visão oficial; não revela diretamente críticas, conflitos ou a vida dos trabalhadores."
    }
  ],
  concepts: [
    ["Alto e Baixo Egipto", "As duas grandes regiões do vale do Nilo que foram unificadas no início da história dinástica."],
    ["Faraó", "Título moderno para o governante egípcio, associado a autoridade política, religiosa e militar."],
    ["Maat", "Princípio egípcio de ordem, justiça e equilíbrio que devia orientar o cosmos e o governo."],
    ["Hieróglifos", "Sistema de escrita egípcio usado em monumentos e textos religiosos, ao lado de escritas administrativas mais rápidas."],
    ["Mumificação", "Conjunto de práticas funerárias destinado a preservar o corpo para a vida após a morte."],
    ["Período Ptolemaico", "Época iniciada após Alexandre Magno, quando uma dinastia de origem macedónica governou o Egipto." ]
  ],
  prompts: [
    "Explica como o Nilo ligava ambiente, economia e poder no Antigo Egipto.",
    "Porque é impreciso imaginar o faraó como alguém que governava sozinho?",
    "Como é que pirâmides e templos funcionavam também como mensagens políticas?",
    "Compara a vida numa casa modesta com a vida numa residência de elite no Antigo Egipto.",
    "As invasões estrangeiras acabaram com a cultura egípcia? Fundamenta a resposta.",
    "Que limites têm as fontes oficiais para conhecermos o quotidiano de camponeses e trabalhadores?"
  ],
  curiosities: [
    "Os tijolos de barro seco ao sol eram um material comum nas casas egípcias, mas conservam-se pior do que a pedra dos templos e túmulos.",
    "A palavra ‘faraó’ vem da expressão egípcia para ‘grande casa’, ligada inicialmente ao palácio real.",
    "Cleópatra VII viveu mais perto no tempo da construção do iPhone do que da construção das grandes pirâmides de Gizé."
  ]
};

const sumerianPremiumContent = {
  timeline: [
    ["c. 6500-3500 a.C.", "A Suméria: origens entre os rios Tigre e Eufrates.", "política", "No sul da Mesopotâmia, comunidades agrícolas instalaram-se numa planície fértil, mas exposta a cheias irregulares e à seca. Canais, diques e trabalho coletivo permitiram cultivar cereais e criar animais. A Suméria não nasceu de um único povo ou dia: foi o resultado gradual de aldeias, migrações, trocas e novas formas de organizar recursos."],
    ["c. 4000-3000 a.C.", "As primeiras cidades: Uruk, Ur e Lagash.", "política", "Algumas aldeias cresceram até se tornarem cidades-Estado, cada uma com os seus campos, canais, divindade protetora e governo. Uruk foi uma das maiores, com bairros, oficinas e grandes edifícios de templo. Estas cidades cooperavam no comércio, mas também disputavam água, terras e rotas, por isso a Mesopotâmia não era um reino unificado."],
    ["c. 3400-3000 a.C.", "A escrita cuneiforme: quando a argila começou a guardar memória.", "cultura", "A escrita começou sobretudo para registar cereais, animais, trabalhadores e entregas aos templos. Os escribas pressionavam uma cana em tabuinhas de argila húmida, formando sinais em cunha: daí o nome cuneiforme. Com o tempo, a escrita serviu também para cartas, leis, hinos, histórias e contas, mas poucos sabiam ler e escrever."],
    ["c. 3000-2000 a.C.", "O quotidiano sumério: campos, oficinas, mercados e casas de barro.", "cultura", "A maior parte da população cultivava cevada, tâmaras e legumes, ou criava ovelhas e cabras. Trabalhava-se também na cerâmica, na tecelagem e no metal; mercadores traziam madeira, pedra e metais, escassos na planície. As casas eram habitualmente de tijolo de barro e organizavam-se em torno de um pátio. A vida diária dependia das estações, dos canais e do estatuto social."],
    ["c. 3000-2000 a.C.", "A religião suméria: deuses, cidades e rituais.", "religião", "Os sumérios cultuavam muitas divindades ligadas ao céu, à fertilidade, às tempestades e a cada cidade. Inanna, Enlil e Enki figuravam entre as mais importantes. Imaginava-se que os deuses sustentavam a ordem do mundo e que os seres humanos lhes deviam alimento, trabalho e culto. Sacerdotes e governantes usavam os rituais para reforçar a autoridade, mas as crenças variavam entre cidades e épocas."],
    ["c. 3000-2000 a.C.", "Os zigurates: escadas monumentais entre a cidade e o sagrado.", "religião", "Um zigurate era uma torre em terraços, construída com tijolos de barro, que elevava o recinto do templo acima da cidade. Não era simplesmente uma pirâmide: fazia parte de um complexo religioso, administrativo e económico, onde se guardavam produtos, se organizava trabalho e se realizavam cerimónias. A sua imponência tornava visível a ligação entre divindade, riqueza e poder urbano."],
    ["c. 3000-2000 a.C.", "A sociedade suméria: poder, trabalho e desigualdade.", "política", "Reis e governantes locais, sacerdotes e grandes administradores ocupavam posições de prestígio. Escribas, mercadores, artesãos, camponeses e trabalhadores dependentes tinham papéis distintos, enquanto pessoas escravizadas podiam resultar de guerras, dívidas ou nascimento. As categorias não eram imóveis e há documentos que mostram mulheres a possuir bens ou trabalhar em instituições, mas a riqueza e o poder estavam distribuídos de forma muito desigual." ]
  ],
  quiz: [
    { type: "causas_consequências", difficulty: "média", question: "Porque exigia a agricultura suméria cooperação entre muitas pessoas?", options: ["Porque era necessário construir e manter canais, diques e sistemas de irrigação", "Porque chovia regularmente todo o ano", "Porque a agricultura dispensava trabalho"], answer: 0, explanation: "As águas dos rios podiam fertilizar os campos, mas também causar cheias; gerir os canais era essencial para produzir alimentos." },
    { type: "escolha_múltipla", difficulty: "média", question: "O que distingue uma cidade-Estado suméria de um império unificado?", options: ["Cada cidade tinha governo, território e divindade protetora próprios", "Todas obedeciam sempre ao mesmo rei", "Não existiam campos fora das cidades"], answer: 0, explanation: "Uruk, Ur e Lagash eram centros políticos autónomos, embora ligados por comércio, guerra e cultura." },
    { type: "escolha_múltipla", difficulty: "média", question: "Para que serviram os primeiros registos em escrita cuneiforme?", options: ["Para administrar produtos, trabalho e entregas", "Para imprimir livros", "Para criar mapas digitais"], answer: 0, explanation: "As tabuinhas mais antigas estão ligadas à contabilidade de cereais, animais, bens e pessoas." },
    { type: "verdadeiro_falso", difficulty: "média", question: "Verdadeiro ou falso: um zigurate era apenas um túmulo real.", options: ["Verdadeiro", "Falso"], answer: 1, explanation: "Era parte de um recinto de templo e de administração, associado ao culto da divindade da cidade." },
    { type: "causas_consequências", difficulty: "difícil", question: "Como é que os templos podiam reforçar o poder numa cidade suméria?", options: ["Controlavam rituais e concentravam produtos, trabalho e registos", "Impediam qualquer comércio", "Eliminavam diferenças sociais"], answer: 0, explanation: "A atividade religiosa, económica e administrativa cruzava-se nos complexos de templo." }
  ],
  source: [
    {
      text: "Entrega de cevada: registam-se quantidades, trabalhadores e destinos numa tabuinha de argila.",
      origin: "Síntese baseada em tabuinhas administrativas sumérias do fim do IV e III milénios a.C.",
      purpose: "Permite compreender que a escrita nasceu ligada à administração de bens, pessoas e trabalho.",
      limits: "Os registos preservam sobretudo a visão das instituições, não a voz direta de quem trabalhava nos campos."
    },
    {
      text: "O governante construiu o templo do deus da cidade e apresentou a obra como sinal de ordem e prosperidade.",
      origin: "Síntese inspirada em inscrições reais mesopotâmicas.",
      purpose: "Ajuda a relacionar construção, religião, autoridade política e propaganda.",
      limits: "É uma representação oficial; não mostra todos os custos do trabalho nem possíveis conflitos sociais."
    }
  ],
  concepts: [
    ["Mesopotâmia", "Região entre os rios Tigre e Eufrates, onde se desenvolveram várias sociedades urbanas antigas."],
    ["Cidade-Estado", "Cidade politicamente autónoma, com território rural, instituições próprias e, muitas vezes, uma divindade protetora."],
    ["Irrigação", "Condução controlada de água por canais para tornar possível a agricultura em zonas secas."],
    ["Escrita cuneiforme", "Sistema de sinais em forma de cunha, impressos em tabuinhas de argila com uma cana."],
    ["Zigurate", "Torre em terraços ligada ao recinto religioso e administrativo de uma cidade mesopotâmica."],
    ["Escriba", "Pessoa treinada para escrever e administrar documentos, uma competência rara e valorizada." ]
  ],
  prompts: [
    "Explica como a irrigação ajudou a criar cidades na Suméria, mas também novas formas de poder.",
    "Porque é mais rigoroso falar em cidades-Estado sumérias do que num único reino da Suméria?",
    "Como é que a escrita cuneiforme transformou a memória e a administração?",
    "Reconstrói um dia na vida de uma família suméria, distinguindo o que sabemos do que apenas inferimos.",
    "De que forma um zigurate comunicava poder religioso, económico e político?",
    "Que limites têm as tabuinhas administrativas para conhecermos trabalhadores, mulheres e pessoas escravizadas?"
  ],
  curiosities: [
    "A argila era tão abundante na Mesopotâmia que servia para casas, tabuinhas de escrita, recipientes e grandes construções.",
    "Muitas tabuinhas cuneiformes sobreviveram porque a argila seca ou cozida resiste muito melhor do que papiro ou madeira.",
    "A cevada era um alimento central e também podia ser usada como unidade de cálculo em pagamentos e rações.",
    "Os zigurates eram feitos sobretudo de tijolo de barro; por isso, a chuva e o tempo obrigavam a reparações constantes."
  ]
};

const babylonianPremiumContent = {
  timeline: [
    ["c. 2000-1792 a.C.", "As origens da Babilonia: uma cidade entre rios, rotas e reinos.", "politica", "Babilonia cresceu na Mesopotamia central, numa regiao onde canais, campos de cevada, comercio e escrita administrativa eram essenciais. Antes de dominar a regiao, era uma cidade entre outras potencias; a sua importancia aumentou quando reis amoritas transformaram alianças, guerra e fiscalidade num poder mais centralizado. A cidade tornou-se simbolo de urbanismo, riqueza e autoridade porque controlava recursos e ligava rotas entre o Tigre, o Eufrates e o Golfo Persico."],
    ["1792-1750 a.C.", "Os reis da Babilonia: Hamurabi e a construcao de um reino.", "politica", "Hamurabi expandiu o poder babilonico atraves de diplomacia, guerra, administracao e propaganda real. O rei apresentava-se como defensor da ordem e da justica, mas dependia de escribas, governadores, soldados, sacerdotes e comunidades locais. Mais tarde, no periodo neobabilonico, Nabopolassar e Nabucodonosor II voltaram a fazer da cidade uma potencia imperial, mostrando que a historia da Babilonia teve varios momentos de ascensao."],
    ["c. 1750 a.C.", "O Codigo de Hamurabi: lei escrita, poder real e hierarquia social.", "politica", "O famoso codigo reuniu decisoes e normas numa estela publica, associando justica ao rei e aos deuses. As penas variavam conforme o estatuto social, distinguindo homens livres, dependentes e pessoas escravizadas. Por isso, o codigo nao deve ser lido como lei igual para todos: e uma fonte preciosa para estudar autoridade, propriedade, familia, trabalho, violencia e desigualdade numa sociedade urbana antiga."],
    ["c. 1800-539 a.C.", "A religiao babilonica: deuses, templos e ordem do mundo.", "religiao", "Os babilonios eram politeistas e cultuavam divindades como Marduk, Ishtar, Shamash e Sin. O templo nao era apenas lugar de culto: guardava bens, organizava trabalho, recebia oferendas e reforcava a posicao das elites sacerdotais. Festas como o Akitu ligavam calendario, renovacao cosmica e legitimacao do rei, mostrando que politica e religiao estavam profundamente entrelacadas."],
    ["c. 1800-539 a.C.", "A sociedade babilonica: cidade, campo, escribas, familias e trabalho.", "cultura", "A maioria da populacao trabalhava na agricultura, na criacao de animais, em oficinas, no comercio ou em servicos ligados a palacios e templos. Escribas tinham grande prestigio porque dominavam a escrita cuneiforme e tornavam possivel cobrar impostos, registar contratos e administrar recursos. A sociedade era hierarquica: elites, homens livres, dependentes, mulheres com direitos variaveis e pessoas escravizadas viviam sob regras e oportunidades muito diferentes."],
    ["séc. VI a.C.", "Os Jardins Suspensos: maravilha famosa, evidencia incerta.", "cultura", "A tradicao antiga atribuiu os Jardins Suspensos da Babilonia ao reinado de Nabucodonosor II, imaginando terracos irrigados, plantas exoticas e engenharia capaz de criar uma montanha verde numa cidade de barro e tijolo. No entanto, os arqueologos nao encontraram prova direta segura em Babilonia, e alguns investigadores sugerem que a historia pode estar ligada a Ninive, na Assiria. A licao importante e distinguir fama literaria, memoria cultural e evidencia historica."],
    ["539 a.C.", "A queda da Babilonia: conquista persa e transformacao imperial.", "guerra", "Em 539 a.C., Ciro II da Persia conquistou Babilonia e integrou a cidade no Imperio Aquemenida. A conquista nao significou destruicao imediata da cultura babilonica: templos, escribas, astronomia, comercio e tradicoes urbanas continuaram por muito tempo. A queda foi antes uma mudanca de soberania: a cidade perdeu independencia politica, mas permaneceu um centro simbolico e intelectual do mundo antigo." ]
  ],
  events: [
    ["Ascensao amorita da Babilonia", "A cidade ganhou peso politico quando dinastias amoritas transformaram alianças locais e controlo de recursos num reino regional."],
    ["Reinado de Hamurabi", "Hamurabi consolidou poder atraves de guerra, diplomacia, administracao e uma imagem publica de rei justo."],
    ["Codigo de Hamurabi", "A estela legal mostra como lei, desigualdade social, propriedade e autoridade divina se cruzavam na Babilonia antiga."],
    ["Predominio de Marduk", "A importancia religiosa de Marduk cresceu com o prestigio politico da cidade, ligando culto urbano e poder imperial."],
    ["Imperio Neobabilonico", "Nabopolassar e Nabucodonosor II fizeram da Babilonia uma potencia no Proximo Oriente dos seculos VII e VI a.C."],
    ["Conquista persa de 539 a.C.", "Ciro II incorporou Babilonia num imperio maior, preservando parte das instituicoes locais enquanto mudava o centro do poder." ]
  ],
  biographies: [
    ["Hamurabi", "Rei da Babilonia entre 1792 e 1750 a.C., conhecido pela expansao do reino e pela famosa compilacao legal associada ao seu nome."],
    ["Nabucodonosor II", "Rei neobabilonico ligado a grandes obras urbanas, campanhas militares e ao prestigio monumental da cidade."],
    ["Ciro II", "Fundador do Imperio Persa Aquemenida, conquistou Babilonia em 539 a.C. e integrou-a numa estrutura imperial mais ampla."],
    ["Marduk", "Divindade principal de Babilonia, cuja centralidade religiosa acompanhou o crescimento politico da cidade." ]
  ],
  concepts: [
    ["Babilonia", "Cidade mesopotamica que se tornou centro politico, religioso e cultural em diferentes periodos da Antiguidade."],
    ["Codigo de Hamurabi", "Compilacao legal inscrita em pedra, importante para estudar justica, estatuto social e autoridade real."],
    ["Estela", "Pedra vertical com inscricoes ou imagens publicas, usada para comunicar memoria, poder e normas."],
    ["Marduk", "Deus principal de Babilonia, associado a soberania, ordem e legitimidade da cidade."],
    ["Imperio Neobabilonico", "Poder babilonico dos seculos VII e VI a.C., especialmente forte sob Nabopolassar e Nabucodonosor II."],
    ["Akitu", "Festival religioso de Ano Novo ligado a renovacao da ordem, culto de Marduk e legitimacao do rei." ],
    ["Cuneiforme", "Escrita em sinais de cunha usada em tabuinhas de argila para contratos, contas, cartas, literatura e leis." ]
  ],
  quiz: [
    { type: "causas_consequencias", difficulty: "media", question: "Porque e que Babilonia conseguiu tornar-se uma cidade poderosa?", options: ["Porque articulava irrigacao, comercio, escrita, administracao e poder militar", "Porque vivia isolada sem rotas comerciais", "Porque nao precisava de agricultura"], answer: 0, explanation: "A posicao mesopotamica, o controlo de recursos e a administracao escrita ajudaram a transformar a cidade num centro regional." },
    { type: "escolha_multipla", difficulty: "media", question: "Qual leitura do Codigo de Hamurabi e mais rigorosa?", options: ["Mostra lei publica e hierarquias sociais, com penas diferentes conforme o estatuto", "Prova que todos tinham direitos iguais", "E um texto religioso sem ligacao a poder politico"], answer: 0, explanation: "O codigo associa justica ao rei, mas distingue grupos sociais e revela desigualdade juridica." },
    { type: "verdadeiro_falso", difficulty: "media", question: "Verdadeiro ou falso: os Jardins Suspensos da Babilonia sao conhecidos por fontes antigas, mas a evidencia arqueologica direta e incerta.", options: ["Verdadeiro", "Falso"], answer: 0, explanation: "A tradicao literaria e forte, mas a localizacao e a existencia material dos jardins continuam debatidas." },
    { type: "associacao", difficulty: "media", question: "Associa corretamente: Marduk era...", options: ["Uma divindade central da Babilonia", "Um rio da Mesopotamia", "Um codigo de leis persa"], answer: 0, explanation: "Marduk ganhou destaque como deus principal da cidade e simbolo da sua autoridade religiosa." },
    { type: "cronologica", difficulty: "dificil", question: "Qual sequencia esta correta?", options: ["Hamurabi > Imperio Neobabilonico > conquista persa de Ciro II", "Ciro II > Hamurabi > Nabucodonosor II", "Jardins Suspensos > Codigo de Hamurabi > origem da Babilonia"], answer: 0, explanation: "Hamurabi pertence ao seculo XVIII a.C.; o Imperio Neobabilonico floresceu nos seculos VII-VI a.C.; Ciro conquistou Babilonia em 539 a.C." },
    { type: "causas_consequencias", difficulty: "dificil", question: "Porque a queda de Babilonia em 539 a.C. nao deve ser entendida como desaparecimento imediato da cultura babilonica?", options: ["Porque a cidade perdeu independencia, mas muitas praticas religiosas, administrativas e intelectuais continuaram", "Porque a cidade nunca foi conquistada", "Porque todos os seus habitantes foram substituidos no mesmo dia"], answer: 0, explanation: "A conquista persa mudou a soberania politica, mas preservou e aproveitou varias estruturas locais." }
  ],
  source: [
    {
      text: "O rei apresenta-se diante do deus da justica e manda gravar normas para ordenar a terra.",
      origin: "Sintese inspirada na estela do Codigo de Hamurabi.",
      purpose: "Permite analisar a ligacao entre lei, religiao, propaganda real e hierarquia social.",
      limits: "E uma representacao oficial do poder; nao mostra como todos os conflitos eram resolvidos na pratica."
    },
    {
      text: "Num contrato em tabuinha, campos, dividas, testemunhas e selos transformam promessas em registo publico.",
      origin: "Sintese baseada em documentos cuneiformes mesopotamicos de carater administrativo e juridico.",
      purpose: "Ajuda a compreender o papel da escrita na economia, na propriedade e nas relacoes sociais.",
      limits: "Preserva sobretudo transacoes formais e grupos com acesso a escribas, deixando muitas experiencias quotidianas invisiveis."
    },
    {
      text: "A cidade e conquistada, mas os templos continuam a receber oferendas e os escribas continuam a escrever.",
      origin: "Sintese historica sobre Babilonia apos a conquista persa de 539 a.C.",
      purpose: "Mostra que queda politica nao significa necessariamente destruicao cultural imediata.",
      limits: "Resume processos longos e variados; diferentes grupos viveram a mudanca de formas desiguais."
    }
  ],
  prompts: [
    "Explica como irrigacao, comercio e escrita ajudaram Babilonia a crescer.",
    "Compara Hamurabi e Nabucodonosor II: que formas de poder aparecem em cada reinado?",
    "O Codigo de Hamurabi era justica igual para todos? Justifica com exemplos de estatuto social.",
    "Porque os templos babilonicos eram centros religiosos, economicos e politicos ao mesmo tempo?",
    "Reconstrói a sociedade babilonica a partir de profissões, estatutos, genero e trabalho.",
    "Os Jardins Suspensos devem ser ensinados como facto, lenda ou problema historico? Defende a tua resposta.",
    "A queda de Babilonia em 539 a.C. foi fim, continuidade ou transformacao? Usa argumentos."
  ],
  curiosities: [
    "Babilonia tornou-se tao famosa que o seu nome continuou a aparecer em textos religiosos, politicos e literarios muito depois da perda de independencia.",
    "A escrita cuneiforme era feita em argila humida; quando secava ou era cozida, podia sobreviver durante milenios.",
    "O Codigo de Hamurabi nao foi o primeiro conjunto de leis da Mesopotamia, mas tornou-se o mais celebre.",
    "A Porta de Ishtar, do periodo neobabilonico, usava tijolos vidrados azuis e figuras de animais sagrados para impressionar quem entrava na cidade.",
    "Astronomos babilonicos registaram observacoes do ceu com grande rigor, influenciando calendarios e tradicoes cientificas posteriores.",
    "Os Jardins Suspensos sao uma das Sete Maravilhas antigas, mas talvez sejam a mais dificil de confirmar arqueologicamente."
  ]
};

const assyrianPremiumContent = {
  timeline: [
    ["c. 2500-1365 a.C.", "As origens da Assiria: Assur, comercio e poder no norte da Mesopotamia.", "politica", "A Assiria nasceu em torno da cidade de Assur, junto ao rio Tigre, numa zona que ligava planicies agricolas, montanhas, metais, madeira e rotas comerciais. Antes de ser um grande imperio, foi uma sociedade urbana e mercantil, com reis, assembleias locais, templos e comerciantes que mantinham redes ate a Anatolia. A sua posicao geografica ajudou a formar uma cultura marcada por comercio, escrita, guerra e adaptacao a vizinhos poderosos."],
    ["c. 1365-609 a.C.", "Os reis assirios: conquista, administracao e propaganda.", "politica", "Reis como Assurubalit I, Tiglate-Pileser III, Sargao II, Senaquerib, Assaradão e Assurbanipal transformaram a Assiria numa potencia militar e administrativa. O rei apresentava-se como escolhido do deus Assur para proteger a ordem e vencer inimigos, mas dependia de oficiais, governadores, escribas, soldados e redes de abastecimento. A expansao assiria combinou campanhas anuais, tributos, deportacoes, provincias e uma propaganda visual muito forte nos palacios."],
    ["c. 1300-612 a.C.", "A religiao assiria: Assur, Ishtar e a guerra como ordem sagrada.", "religiao", "A religiao assiria era politeista e partilhava muitas tradicoes mesopotamicas, mas dava destaque ao deus Assur, protetor da cidade e do reino. Ishtar, Shamash, Sin, Ninurta e outras divindades tambem eram cultuadas. A guerra podia ser apresentada como cumprimento da vontade divina, e rituais, pressagios, astrologia e oferendas orientavam decisoes politicas. Isto nao significa que todos pensassem igual, mas mostra como religiao e poder real se reforcavam."],
    ["c. 900-612 a.C.", "A sociedade assiria: elites, soldados, escribas, camponeses e deportados.", "cultura", "A sociedade assiria era hierarquica e militarizada. Nobres, oficiais, sacerdotes e altos administradores ocupavam lugares de prestígio; escribas registavam impostos, listas de trabalhadores, cartas e ordens; camponeses sustentavam a producao agricola; artesãos e mercadores circulavam bens; pessoas escravizadas e populações deportadas trabalhavam em campos, obras e cidades. As deportacoes eram violentas, mas tambem serviam para redistribuir mao de obra e integrar territorios conquistados."],
    ["c. 883-627 a.C.", "A arquitectura assiria: palacios, relevos, muralhas e cidades imperiais.", "cultura", "Os reis assirios construiram capitais monumentais como Kalhu, Dur-Sharrukin e Ninive, com palacios, templos, muralhas, canais e jardins. Os relevos em pedra mostravam campanhas militares, cacadas reais, tributos e cerimonias, funcionando como arte e propaganda. Portais com grandes figuras protetoras, como lamassu, impressionavam visitantes e comunicavam a ideia de um poder invencivel, ordenado e protegido pelos deuses."],
    ["614-609 a.C.", "A queda do Imperio Assirio: revoltas, inimigos e esgotamento imperial.", "guerra", "No final do seculo VII a.C., o imperio assirio enfrentou revoltas internas, sucessoes instaveis, pressao fiscal, territorios extensos e inimigos poderosos. Medos e babilonios atacaram as principais cidades: Assur caiu em 614 a.C. e Ninive em 612 a.C.; em 609 a.C., os ultimos focos assirios foram derrotados. A queda nao apagou imediatamente todas as populacoes ou tradicoes, mas destruiu o centro politico de um dos maiores imperios da Antiguidade." ]
  ],
  events: [
    ["Cidade de Assur", "Assur foi o nucleo religioso, comercial e politico a partir do qual se desenvolveu a identidade assiria."],
    ["Rede comercial paleoassiria", "Mercadores assirios criaram postos comerciais na Anatolia, mostrando que a Assiria foi mercantil antes de ser imperial."],
    ["Reformas de Tiglate-Pileser III", "A reorganizacao militar e provincial fortaleceu o imperio e tornou a conquista mais permanente."],
    ["Capital em Dur-Sharrukin", "Sargao II construiu uma capital planeada para exibir autoridade, administracao e protecao divina."],
    ["Biblioteca de Assurbanipal", "A recolha de tabuinhas em Ninive preservou textos literarios, religiosos, medicos e administrativos da Mesopotamia."],
    ["Queda de Ninive", "Em 612 a.C., a destruicao de Ninive por medos e babilonios marcou o colapso do centro imperial assirio." ]
  ],
  biographies: [
    ["Tiglate-Pileser III", "Rei assirio do seculo VIII a.C. associado a reformas militares, administrativas e fiscais que fortaleceram o imperio."],
    ["Sargao II", "Rei que expandiu o poder assirio e mandou construir Dur-Sharrukin como capital monumental."],
    ["Senaquerib", "Rei ligado a grandes obras em Ninive, campanhas militares e propaganda palacial."],
    ["Assurbanipal", "Rei conhecido por campanhas militares e pela grande colecao de tabuinhas reunida em Ninive."],
    ["Assur", "Deus principal e simbolo da identidade assiria, associado a protecao, realeza e expansao." ]
  ],
  concepts: [
    ["Assiria", "Reino e depois imperio do norte da Mesopotamia, centrado inicialmente na cidade de Assur."],
    ["Assur", "Cidade de origem da Assiria e divindade principal associada ao poder real assirio."],
    ["Deportacao", "Transferencia forcada de populacoes conquistadas, usada para punir, controlar e redistribuir trabalho."],
    ["Provincia assiria", "Territorio conquistado administrado por governadores, impostos, tropas e funcionarios imperiais."],
    ["Lamassu", "Figura protetora monumental, geralmente com corpo de touro ou leao, asas e cabeca humana, colocada em entradas palaciais."],
    ["Relevo palacial", "Escultura em pedra usada nos palacios para narrar conquistas, rituais, cacadas e mensagens de poder."]
  ],
  quiz: [
    { type: "causas_consequencias", difficulty: "media", question: "Porque a posicao de Assur ajudou as origens da Assiria?", options: ["Porque ligava rotas comerciais, agricultura, rios e zonas de recursos", "Porque isolava totalmente a cidade", "Porque impedia qualquer comercio"], answer: 0, explanation: "Assur ficava numa area de ligacao entre o Tigre, rotas terrestres e regioes com recursos importantes." },
    { type: "escolha_multipla", difficulty: "media", question: "O que caracterizou muitos reis assirios?", options: ["Conquista militar, administracao provincial e propaganda real", "Recusa absoluta da escrita", "Ausencia de exercito organizado"], answer: 0, explanation: "O poder assirio combinou exercito, burocracia, tributos, provincias e imagens de autoridade." },
    { type: "associacao", difficulty: "media", question: "Associa corretamente: lamassu era...", options: ["Uma figura protetora monumental em entradas de palacios", "Uma lei babilonica", "Um rio da Anatolia"], answer: 0, explanation: "Os lamassu comunicavam protecao divina e grandeza real nos palacios assirios." },
    { type: "verdadeiro_falso", difficulty: "media", question: "Verdadeiro ou falso: as deportacoes assirias tinham impacto politico, economico e social.", options: ["Verdadeiro", "Falso"], answer: 0, explanation: "Eram instrumentos violentos de controlo imperial, redistribuicao de mao de obra e enfraquecimento de resistencias." },
    { type: "cronologica", difficulty: "dificil", question: "Qual sequencia esta correta?", options: ["Assur comercial > expansao imperial > queda de Ninive", "Queda de Ninive > origem de Assur > reformas imperiais", "Biblioteca de Assurbanipal > origem de Assur > rede paleoassiria"], answer: 0, explanation: "A Assiria comecou como centro urbano e comercial, tornou-se imperio militar e perdeu Ninive em 612 a.C." }
  ],
  source: [
    {
      text: "O rei marcha por ordem de Assur; os inimigos pagam tributo e as cidades rendidas aparecem nas paredes do palacio.",
      origin: "Sintese inspirada em inscricoes reais e relevos palaciais assirios.",
      purpose: "Ajuda a analisar propaganda, guerra, religiao e autoridade real.",
      limits: "E uma visao oficial dos vencedores; exagera poder e silencia muitas experiencias das populacoes conquistadas."
    },
    {
      text: "Listas de trabalhadores, cereais e animais permitem ao palacio calcular impostos, obras e abastecimento militar.",
      origin: "Sintese baseada em documentos administrativos cuneiformes assirios.",
      purpose: "Mostra o papel da escrita na organizacao economica e militar do imperio.",
      limits: "Documenta sobretudo a administracao, nao a voz direta de camponeses, deportados ou soldados comuns."
    },
    {
      text: "Tabuinhas reunidas em Ninive preservam pressagios, mitos, medicina, cartas e copias de textos antigos.",
      origin: "Sintese sobre a biblioteca de Assurbanipal.",
      purpose: "Permite estudar circulacao de conhecimento, escrita cuneiforme e memoria cultural mesopotamica.",
      limits: "A colecao reflete prioridades palaciais e eruditas, nao todo o conhecimento existente na sociedade."
    }
  ],
  prompts: [
    "Explica como Assur passou de cidade comercial a centro de uma identidade imperial.",
    "Compara a autoridade de um rei assirio com a de Hamurabi na Babilonia.",
    "Como a religiao assiria legitimava guerra, conquista e governo?",
    "Que grupos sociais sustentavam o imperio assirio e que desigualdades aparecem?",
    "Analisa um palacio assirio como mensagem politica: arquitectura, relevo, muralha e lamassu.",
    "A queda do Imperio Assirio resultou mais de inimigos externos ou de fragilidades internas? Defende com argumentos."
  ],
  curiosities: [
    "Antes da fase imperial, comerciantes assirios mantinham colonias mercantis na Anatolia e escreviam cartas em tabuinhas de argila.",
    "Os relevos assirios eram frequentemente pintados, embora hoje muitas vezes vejamos apenas a pedra.",
    "A biblioteca de Assurbanipal preservou partes da Epopeia de Gilgamesh, um dos textos literarios mais antigos conhecidos.",
    "Ninive tinha muralhas extensas, portas monumentais, canais e palacios que impressionavam visitantes e inimigos.",
    "Os lamassu eram esculpidos para parecerem estaveis de frente e em movimento de lado, um efeito visual muito calculado.",
    "A reputacao assiria de brutalidade fazia parte da propria propaganda de intimidacao imperial."
  ]
};

const persianPremiumContent = {
  timeline: [
    ["c. 1000-550 a.C.", "As origens da Persia: povos iranianos, montanhas e contactos imperiais.", "politica", "A Persia formou-se no planalto iraniano, uma regiao de montanhas, vales, pastagens e rotas que ligavam a Mesopotamia, a Asia Central e o Golfo Persico. Povos iranianos como medos e persas organizaram chefias, reinos e alianças antes de criarem um imperio. Os persas aprenderam com vizinhos poderosos, como elamitas, medos, assirios e babilonios, combinando tradicoes locais com modelos administrativos ja existentes."],
    ["559-530 a.C.", "Ciro, o Grande: conquista, integracao e imagem de rei justo.", "politica", "Ciro II transformou o reino persa numa potencia ao derrotar medos, lidios e babilonios. Em vez de governar apenas pelo terror, apresentou-se muitas vezes como restaurador da ordem e protetor de templos e costumes locais. Essa imagem nao elimina a violencia da conquista, mas ajuda a perceber porque o imperio persa conseguiu integrar povos diversos, elites locais, tributos e rotas comerciais numa estrutura politica muito ampla."],
    ["522-465 a.C.", "Os imperadores persas: Dario I, Xerxes e a organizacao do imperio.", "politica", "Dario I consolidou o Imperio Aquemenida com satrapias, impostos, estradas, correios, moeda e inscricoes reais. Xerxes manteve grande parte desta estrutura e ficou famoso pelas guerras contra cidades gregas. O imperador persa era apresentado como rei dos reis: governava muitos povos atraves de satrapas, escribas, soldados, funcionarios e elites regionais. A forca do sistema estava na combinacao entre centro imperial e administracao local."],
    ["c. 550-330 a.C.", "A religiao persa: Ahura Mazda, ordem, rituais e diversidade.", "religiao", "A religiao persa aquemenida estava ligada ao culto de Ahura Mazda e a ideias de verdade, ordem e legitimidade real. Textos e inscricoes sugerem ligacoes ao zoroastrismo, embora seja preciso cuidado: as praticas religiosas variavam no tempo e entre regioes. O imperio tambem governava povos com muitos cultos diferentes, por isso a religiao imperial convivia com templos babilonios, cultos egipcios, tradicoes locais e rituais de corte."],
    ["c. 550-330 a.C.", "As artes persas: palacios, relevos, jardins e mistura de influencias.", "cultura", "A arte persa aquemenida reuniu influencias mesopotamicas, egipcias, gregas, elamitas e iranianas. Em Pasargada e Persepolis, palacios, colunas, escadarias e relevos mostravam delegacoes de povos trazendo tributos ao rei. A mensagem era clara: diversidade organizada sob autoridade imperial. Jardins, metais trabalhados, selos, tecidos e ceramicas tambem revelam uma cultura visual sofisticada, feita de circulacao de artistas, tecnicas e simbolos."],
    ["c. 550-330 a.C.", "A sociedade persa: satrapas, soldados, camponeses, artesãos e povos diversos.", "cultura", "O imperio persa reunia elites iranianas, familias nobres, satrapas, funcionarios, escribas, sacerdotes, soldados, camponeses, artesãos, mercadores e povos conquistados. A vida variava muito entre regioes: Babilonia, Egito, Anatolia e Persia tinham tradicoes proprias. Mulheres da elite podiam administrar bens e trabalhadores em certos contextos, como mostram documentos de Persepolis, mas a sociedade continuava hierarquica e marcada por impostos, trabalho obrigatorio e diferencas de estatuto."],
    ["334-330 a.C.", "A queda do Imperio Persa: Alexandre, crises e conquista macedonica.", "guerra", "No seculo IV a.C., o Imperio Aquemenida enfrentava tensoes internas, disputas dinasticas e dificuldades para controlar territorios muito extensos. Alexandre da Macedonia invadiu em 334 a.C., venceu batalhas decisivas contra Dario III e tomou centros imperiais como Susa, Persepolis e Babilonia. A queda em 330 a.C. nao apagou a heranca persa: muitas praticas administrativas, simbolos reais e elites locais continuaram a influenciar os reinos helenisticos." ]
  ],
  events: [
    ["Ascensao dos persas", "Chefias persas do planalto iraniano ganharam poder em contacto com medos, elamitas, assirios e babilonios."],
    ["Conquistas de Ciro II", "Ciro derrotou medos, lidios e babilonios, criando a base territorial do Imperio Aquemenida."],
    ["Reformas de Dario I", "Dario organizou satrapias, impostos, estradas, correios e propaganda real para consolidar o imperio."],
    ["Guerras Medicas", "Os confrontos com cidades gregas revelaram a escala persa e tambem os limites da expansao no Egeu."],
    ["Persepolis", "A capital cerimonial exibiu poder imperial atraves de arquitectura, relevos e delegacoes de povos submetidos."],
    ["Conquista de Alexandre", "Entre 334 e 330 a.C., a invasao macedonica derrubou Dario III e encerrou o poder aquemenida." ]
  ],
  biographies: [
    ["Ciro II, o Grande", "Fundador do Imperio Aquemenida, conhecido por conquistas amplas e por uma politica de integracao de elites locais."],
    ["Dario I", "Imperador que consolidou administracao, fiscalidade, estradas e propaganda real no imperio persa."],
    ["Xerxes I", "Imperador associado a grandes obras e as campanhas persas contra cidades gregas no inicio do seculo V a.C."],
    ["Dario III", "Ultimo grande rei aquemenida, derrotado por Alexandre durante a conquista macedonica."],
    ["Alexandre Magno", "Rei macedonico que conquistou o Imperio Persa e abriu caminho aos reinos helenisticos."],
    ["Ahura Mazda", "Divindade central nas inscricoes reais persas, associada a verdade, ordem e legitimidade." ]
  ],
  concepts: [
    ["Imperio Aquemenida", "Imperio persa fundado por Ciro II e governado por uma dinastia que dominou vastos territorios entre a Asia, Africa e Europa."],
    ["Satrapia", "Provincia imperial administrada por um satrapa, responsavel por tributos, ordem e ligacao ao centro."],
    ["Satrapa", "Governador provincial do imperio persa, muitas vezes vigiado por outros funcionarios e pelo poder real."],
    ["Estrada Real", "Rede de comunicacao que facilitava correio, deslocacao de funcionarios, tropas e ordens imperiais."],
    ["Zoroastrismo", "Tradicao religiosa iraniana associada a Ahura Mazda, verdade, ordem e conflito moral entre bem e mal."],
    ["Persepolis", "Capital cerimonial persa com palacios, relevos e arquitectura monumental de propaganda imperial." ]
  ],
  quiz: [
    { type: "causas_consequencias", difficulty: "media", question: "Porque as origens da Persia devem ser ligadas ao planalto iraniano e aos contactos regionais?", options: ["Porque os persas cresceram entre rotas, montanhas e vizinhos poderosos", "Porque viviam completamente isolados", "Porque surgiram diretamente em Atenas"], answer: 0, explanation: "A Persia formou-se em contacto com medos, elamitas, assirios, babilonios e rotas de comercio." },
    { type: "escolha_multipla", difficulty: "media", question: "O que ajudou Ciro, o Grande, a integrar territorios conquistados?", options: ["Uso de elites locais, respeito seletivo por cultos e imagem de restaurador da ordem", "Destruicao de todas as administracoes locais", "Abolicao de impostos e funcionarios"], answer: 0, explanation: "A conquista foi violenta, mas a integracao de elites e instituicoes locais ajudou a estabilizar o imperio." },
    { type: "associacao", difficulty: "media", question: "Associa corretamente: uma satrapia era...", options: ["Uma provincia do imperio persa", "Um templo grego", "Uma lei romana"], answer: 0, explanation: "As satrapias permitiam administrar regioes muito diferentes atraves de governadores e funcionarios." },
    { type: "verdadeiro_falso", difficulty: "media", question: "Verdadeiro ou falso: a arte persa aquemenida combinou influencias de varios povos do imperio.", options: ["Verdadeiro", "Falso"], answer: 0, explanation: "Palacios e relevos persas integravam tecnicas e simbolos de tradicoes mesopotamicas, egipcias, gregas, elamitas e iranianas." },
    { type: "cronologica", difficulty: "dificil", question: "Qual sequencia esta correta?", options: ["Ciro II > Dario I > Xerxes I > Alexandre conquista o imperio", "Alexandre > Ciro II > Dario I > Xerxes I", "Xerxes I > queda persa > Ciro II > satrapias"], answer: 0, explanation: "Ciro fundou o imperio, Dario consolidou, Xerxes governou depois e Alexandre conquistou o imperio no seculo IV a.C." }
  ],
  source: [
    {
      text: "O rei declara que Ahura Mazda lhe concedeu o reino e que a mentira deve ser vencida pela ordem.",
      origin: "Sintese inspirada em inscricoes reais aquemenidas, como a inscricao de Behistun de Dario I.",
      purpose: "Permite analisar legitimidade real, religiao, propaganda e ideia de ordem imperial.",
      limits: "E uma versao oficial do poder; apresenta adversarios como rebeldes ou mentirosos e nao mostra todas as perspetivas."
    },
    {
      text: "Nas escadarias, delegacoes de povos diferentes trazem presentes ao rei, cada uma com roupa, objetos e gestos proprios.",
      origin: "Sintese baseada nos relevos de Persepolis.",
      purpose: "Ajuda a estudar arte, diversidade imperial, tributo e propaganda visual.",
      limits: "Mostra a diversidade como harmonia controlada, omitindo violencia, impostos pesados e resistencias."
    },
    {
      text: "Registos de Persepolis enumeram racoes, trabalhadores, deslocacoes e recursos distribuidos pelo palacio.",
      origin: "Sintese baseada nas tabuinhas administrativas de Persepolis.",
      purpose: "Mostra a dimensao economica e burocratica do imperio, incluindo trabalho e abastecimento.",
      limits: "Sao documentos administrativos, nao relatos pessoais completos dos trabalhadores."
    }
  ],
  prompts: [
    "Explica como a geografia e os contactos regionais ajudaram a formar a Persia antiga.",
    "Ciro, o Grande, foi apenas conquistador ou tambem construtor de integracao imperial? Justifica.",
    "Como as satrapias, estradas e impostos permitiam governar povos muito diferentes?",
    "Que cuidados devemos ter ao falar de zoroastrismo e religiao persa no periodo aquemenida?",
    "Analisa Persepolis como mensagem politica: que imagem do imperio aparece nos relevos?",
    "Compara a sociedade persa com a assiria: que diferencas existem na administracao e no uso da diversidade?",
    "A queda do Imperio Persa deve ser explicada mais por Alexandre ou por fragilidades internas? Defende uma posicao equilibrada."
  ],
  curiosities: [
    "O Imperio Aquemenida foi um dos maiores imperios territoriais da Antiguidade.",
    "A Estrada Real ajudava mensagens imperiais a circular com rapidez extraordinaria para a epoca.",
    "Persepolis nao era apenas uma cidade: funcionava tambem como palco cerimonial da autoridade do rei dos reis.",
    "As tabuinhas de Persepolis mostram mulheres da elite a gerir trabalhadores, racoes e propriedades em alguns contextos.",
    "O chamado Cilindro de Ciro tornou-se famoso em debates modernos sobre governo e tolerancia, mas deve ser lido no contexto da propaganda real antiga.",
    "Alexandre adotou alguns rituais, simbolos e praticas persas depois da conquista, sinal de que a queda politica nao apagou a influencia aquemenida."
  ]
};

const romanPremiumContent = {
  timeline: [
    ["753 a.C.", "Fundação tradicional de Roma.", "cultura", "O mito de Rómulo e Remo construiu uma memória de origem guerreira, sagrada e familiar que os romanos usaram para pensar identidade e destino político."],
    ["509 a.C.", "Fim da monarquia e início tradicional da República.", "política", "A rejeição do rei tornou-se uma narrativa poderosa contra a tirania, embora a nova ordem continuasse dominada por elites patrícias."],
    ["494 a.C.", "Primeira secessão da plebe.", "política", "A retirada coletiva dos plebeus mostrou que conflito social podia forçar concessões institucionais, como a criação dos tribunos da plebe."],
    ["451-450 a.C.", "Lei das Doze Tábuas.", "política", "A escrita pública da lei reduziu arbitrariedades patrícias, mas manteve hierarquias de género, dívida, família e estatuto."],
    ["390 a.C.", "Saque gaulês de Roma.", "guerra", "A humilhação militar reforçou a preocupação romana com muralhas, disciplina e memória de vulnerabilidade."],
    ["343-290 a.C.", "Guerras Samnitas.", "guerra", "A luta pela Itália central obrigou Roma a aperfeiçoar alianças, estradas, colónias e adaptação militar."],
    ["312 a.C.", "Construção da Via Ápia.", "ciência", "A estrada ligou guerra, administração e comércio, mostrando como infraestrutura podia ser instrumento de conquista e integração."],
    ["287 a.C.", "Lex Hortensia.", "política", "As decisões da assembleia plebeia passaram a vincular todos os cidadãos, sinalizando uma longa negociação entre conflito social e integração política."],
    ["264-146 a.C.", "Guerras Púnicas.", "guerra", "A vitória contra Cartago deu a Roma domínio mediterrânico, riqueza, províncias e tensões sociais que a República não conseguiu absorver sem crise."],
    ["133 a.C.", "Tribunato de Tibério Graco.", "política", "A tentativa de reforma agrária revelou conflitos entre pequenos proprietários, elites senatoriais, expansão imperial e violência política."],
    ["107 a.C.", "Reformas militares atribuídas a Mário.", "guerra", "O recrutamento de cidadãos pobres aproximou soldados dos generais que prometiam salário, saque e terras, alterando equilíbrios republicanos."],
    ["91-88 a.C.", "Guerra Social.", "política", "Aliados italianos exigiram cidadania, mostrando que a expansão romana criava dependência militar sem igualdade política suficiente."],
    ["49 a.C.", "César atravessa o Rubicão.", "política", "O gesto transformou disputa institucional em guerra civil e mostrou como prestígio militar podia romper normas republicanas."],
    ["44 a.C.", "Assassinato de Júlio César.", "política", "Os conspiradores invocaram liberdade republicana, mas a violência abriu nova guerra civil e acelerou a concentração de poder."],
    ["31 a.C.", "Batalha de Áccio.", "guerra", "A vitória de Otaviano sobre António e Cleópatra permitiu apresentar uma guerra civil como defesa de Roma contra ameaça orientalizada."],
    ["27 a.C.", "Augusto inaugura o Principado.", "política", "O novo regime preservou linguagem republicana enquanto concentrava comando militar, prestígio religioso e autoridade política."],
    ["64", "Incêndio de Roma sob Nero.", "cultura", "O desastre alimentou reconstrução urbana, propaganda imperial e acusações contra cristãos num contexto de tensão social."],
    ["79", "Erupção do Vesúvio.", "ciência", "Pompeia e Herculano preservaram vestígios excecionais de urbanismo, alimentação, comércio, escravatura e cultura material quotidiana."],
    ["212", "Constitutio Antoniniana.", "política", "Caracala concedeu cidadania a quase todos os homens livres do império, cruzando integração jurídica, fiscalidade e identidade imperial."],
    ["284-305", "Reformas de Diocleciano.", "política", "A tetrarquia, os impostos e o controlo administrativo tentaram estabilizar um império pressionado por guerra, inflação e sucessões instáveis."]
  ],
  events: [
    ["Fundação mítica de Roma", "A tradição de 753 a.C. ligou cidade, violência fundadora, religião e destino imperial, funcionando mais como memória política do que como reportagem factual."],
    ["Expulsão dos reis", "O fim da monarquia criou uma República aristocrática que desconfiava do poder pessoal, embora mantivesse desigualdades profundas entre patrícios, plebeus e dependentes."],
    ["Conflito das Ordens", "A luta entre patrícios e plebeus produziu tribunos, assembleias e leis escritas, mostrando que a cidadania romana nasceu de conflito social, não de harmonia."],
    ["Lei das Doze Tábuas", "A codificação pública tornou a justiça mais visível, mas também revelou uma sociedade hierárquica, patriarcal e severa com dívidas e dependências familiares."],
    ["Saque gaulês", "A invasão gaulesa marcou a memória romana como trauma de vulnerabilidade e ajudou a legitimar disciplina militar e expansão defensiva posterior."],
    ["Guerras Samnitas", "A conquista da Itália resultou de guerra dura, alianças, colónias e integração desigual de comunidades que ganhavam deveres antes de direitos plenos."],
    ["Via Ápia", "A estrada acelerou movimento de legiões, magistrados, mercadorias e mensagens, mostrando que Roma conquistava também através de engenharia e logística."],
    ["Lex Hortensia", "Ao reconhecer força legal aos plebiscitos, a República integrou reivindicações plebeias, mas sem abolir o peso social das famílias aristocráticas."],
    ["Destruição de Cartago", "Em 146 a.C., Roma eliminou a grande rival mediterrânica e ganhou poder imperial, mas a vitória ampliou escravatura, riqueza concentrada e disputas políticas internas."],
    ["Reformas dos Gracos", "As propostas agrárias tentaram responder à crise dos pequenos proprietários, mas a reação senatorial introduziu níveis perigosos de violência na política romana."],
    ["Ascensão de Mário", "Mário abriu espaço a soldados sem propriedade e fortaleceu a ligação pessoal entre general e tropa, um fator decisivo nas guerras civis finais."],
    ["Guerra Social", "Os aliados italianos lutaram por cidadania romana, revelando a contradição de um império que dependia de soldados sem lhes conceder igualdade política."],
    ["Ditadura de Sula", "Sula usou vitória militar para reformar a República e perseguir inimigos, criando precedente de poder armado sobre a política civil."],
    ["Conspiração de Catilina", "A crise de 63 a.C. expôs dívidas, ambição aristocrática, medo social e uso político da emergência em defesa da ordem republicana."],
    ["Triunvirato de César, Pompeu e Crasso", "A aliança informal mostrou que redes pessoais, dinheiro e comando militar podiam contornar instituições republicanas tradicionais."],
    ["Guerra Civil de César", "A travessia do Rubicão transformou rivalidade política em guerra, colocando a legitimidade das instituições contra a lealdade militar pessoal."],
    ["Idos de Março", "O assassinato de César tentou travar a monarquia pessoal, mas produziu nova guerra civil e enfraqueceu ainda mais a República."],
    ["Áccio e propaganda augustana", "Otaviano derrotou António e Cleópatra e apresentou o conflito como defesa moral de Roma, usando propaganda para legitimar poder único."],
    ["Pax Augusta", "A paz imperial reduziu guerras civis e promoveu obras públicas, mas dependia de exército permanente, fiscalidade provincial e autoridade concentrada."],
    ["Cristianização do Império", "Entre perseguições, legalização e patrocínio imperial, o cristianismo passou de movimento minoritário a força institucional que reconfigurou cultura e poder."]
  ],
  biographies: [
    ["Rómulo", "Figura mítica associada à fundação de Roma; interessa menos como indivíduo comprovável e mais como símbolo de guerra, fronteira, fratricídio e legitimidade."],
    ["Lucrécia", "Figura lendária cuja violação e suicídio foram usados para narrar a expulsão dos reis e discutir honra, género e violência política."],
    ["Cincinato", "Modelo idealizado de virtude republicana, apresentado como cidadão-soldado que aceita poder excecional e o abandona depois da crise."],
    ["Tibério Graco", "Tribuno da plebe que propôs reforma agrária; a sua morte revela como desigualdade, terra pública e violência corroeram a República."],
    ["Caio Graco", "Reformador que tentou ampliar distribuição de cereais, justiça provincial e alianças políticas, mostrando que a crise social romana era estrutural."],
    ["Caio Mário", "General ligado à profissionalização militar e à ascensão de novos homens, crucial para perceber lealdades pessoais no exército romano."],
    ["Lúcio Cornélio Sula", "Ditador que marchou sobre Roma, publicou proscrições e tentou restaurar autoridade senatorial através de violência política."],
    ["Marco Túlio Cícero", "Orador e senador que defendeu a República, mas também mostrou limites elitistas da liberdade política romana."],
    ["Pompeu Magno", "General de enorme prestígio militar cuja rivalidade com César revelou a fragilidade das instituições republicanas perante comandos pessoais."],
    ["Lívia Drusila", "Esposa de Augusto e figura central da casa imperial, importante para compreender dinastia, imagem moral e poder informal feminino."]
  ],
  concepts: [
    ["Mos maiorum", "Conjunto de costumes ancestrais invocados para legitimar autoridade, moral familiar e tradição política, mesmo quando a prática real mudava."],
    ["Patrícios e plebeus", "Categorias sociais e políticas que estruturaram conflitos republicanos, embora as fronteiras e alianças se transformassem ao longo do tempo."],
    ["Tribuno da plebe", "Magistrado criado para proteger plebeus, com poder de veto e grande potencial político em momentos de crise social."],
    ["Senado romano", "Conselho aristocrático que orientava política, finanças e diplomacia, sem ser parlamento democrático moderno."],
    ["Imperium", "Autoridade de comando civil e militar atribuída a magistrados e imperadores, central para compreender poder legítimo em Roma."],
    ["Clientela", "Relação de dependência entre patronos e clientes baseada em proteção, favores, votos, prestígio e obrigações sociais."],
    ["Latifúndio", "Grande propriedade rural frequentemente ligada a elites e trabalho escravizado, com impacto na crise dos pequenos proprietários."],
    ["Província romana", "Território administrado por Roma, sujeito a impostos, magistrados, exércitos e negociações com elites locais."],
    ["Culto imperial", "Práticas religiosas que honravam o imperador e a sua casa, articulando lealdade política, religião pública e identidade provincial."],
    ["Limes", "Zona de fronteira militar e económica, não simples muro, onde defesa, comércio, diplomacia e mobilidade se cruzavam."]
  ],
  quiz: [
    { type: "causas_consequências", difficulty: "difícil", question: "Porque é que as Guerras Púnicas agravaram tensões sociais em Roma?", options: ["Trouxeram províncias, escravos, riqueza concentrada e pressão sobre pequenos proprietários", "Eliminaram impostos e desigualdade", "Transformaram Roma numa democracia universal"], answer: 0, explanation: "A expansão mediterrânica aumentou recursos, mas favoreceu elites, latifúndios e dependência de trabalho escravizado, criando conflitos agrários e políticos." },
    { type: "cronológica", difficulty: "média", question: "Qual sequência está correta na crise republicana romana?", options: ["Gracos > Mário e Sula > César > Augusto", "Augusto > Gracos > Doze Tábuas > Mário", "César > Fundação de Roma > Sula > Gracos"], answer: 0, explanation: "A crise republicana foi longa: reformas sociais, militarização política, guerras civis e só depois consolidação do Principado." },
    { type: "verdadeiro_falso", difficulty: "difícil", question: "Verdadeiro ou falso: o Principado de Augusto aboliu toda a linguagem republicana.", options: ["Verdadeiro", "Falso"], answer: 1, explanation: "Augusto manteve Senado, magistraturas e vocabulário republicano, mas concentrou comando militar, prestígio e iniciativa política." },
    { type: "associação", difficulty: "média", question: "Associa corretamente: limes romano significa sobretudo...", options: ["Zona de fronteira com defesa, contactos e circulação", "Assembleia de cidadãos pobres", "Templo dedicado apenas a Júpiter"], answer: 0, explanation: "O limes não era apenas uma barreira: articulava fortificações, comércio, diplomacia, vigilância e mobilidade." },
    { type: "escolha_múltipla", difficulty: "difícil", question: "Que leitura é mais rigorosa sobre a escravatura romana?", options: ["Era central na economia e variava entre trabalho doméstico, agrícola, mineiro, administrativo e cultural", "Era marginal e sem peso social", "Era igual à cidadania plena"], answer: 0, explanation: "A escravatura sustentava setores diversos e tinha estatutos e experiências muito diferentes, mas implicava sempre dominação jurídica." }
  ],
  source: [
    {
      text: "O povo e o Senado conferem honras, mas o príncipe apresenta-se como restaurador da República.",
      origin: "Síntese inspirada nas Res Gestae de Augusto.",
      purpose: "Permite analisar propaganda augustana, continuidade republicana e concentração real de poder.",
      limits: "É autorrepresentação política; omite coerção, rivais derrotados e desigualdade provincial."
    },
    {
      text: "Nas paredes da cidade lêem-se anúncios eleitorais, insultos, declarações de amor e marcas de comerciantes.",
      origin: "Síntese baseada em grafitos de Pompeia.",
      purpose: "Mostra quotidiano urbano, alfabetização prática, humor, política local e sociabilidade popular.",
      limits: "Pompeia é excecionalmente preservada e não representa todas as cidades do império."
    },
    {
      text: "O senhor manda, o escravizado obedece; mas o trabalho pode ir da mina à biblioteca.",
      origin: "Síntese de fontes jurídicas e literárias romanas sobre escravatura.",
      purpose: "Ajuda a estudar dominação, economia, violência e diversidade de experiências escravizadas.",
      limits: "A maioria das fontes foi escrita por elites livres, não pelos próprios escravizados."
    },
    {
      text: "O aqueduto conduz água até termas, fontes e casas, exibindo utilidade pública e poder urbano.",
      origin: "Síntese inspirada em tratados técnicos e vestígios arqueológicos romanos.",
      purpose: "Relaciona tecnologia, urbanismo, higiene, estatuto social e propaganda cívica.",
      limits: "O acesso à água era desigual e variava entre cidades, bairros e grupos sociais."
    },
    {
      text: "As cartas descrevem pânico, cinza e mar agitado quando o Vesúvio cobre cidades inteiras.",
      origin: "Síntese inspirada nas cartas de Plínio, o Jovem, sobre a erupção de 79.",
      purpose: "Permite cruzar testemunho literário, desastre natural, ciência antiga e arqueologia.",
      limits: "É a visão de uma elite letrada e não captura diretamente todas as vítimas."
    }
  ],
  prompts: [
    "Explica como Roma transformou conflito social em instituições sem eliminar a desigualdade.",
    "Compara a cidadania romana com a democracia ateniense: quem participava, quem ficava excluído e porquê?",
    "Porque é que o exército romano foi ao mesmo tempo instrumento de integração e ameaça à República?",
    "Analisa a propaganda de Augusto: restauração da República ou criação cuidadosa de uma monarquia disfarçada?",
    "Como a escravatura romana sustentava economia, cultura doméstica e poder das elites?",
    "Que ligações existem entre urbanismo romano, controlo social e prestígio imperial?",
    "A romanização foi imposição, negociação ou mistura? Usa exemplos de províncias.",
    "Compara a queda do Ocidente romano com crises de outros impérios: que padrões aparecem?",
    "Imagina uma conversa entre uma matrona, um legionário, um escravizado e um senador sobre o que significa ser romano.",
    "Que fontes usarias para reconstruir o quotidiano romano sem depender apenas de autores de elite?"
  ],
  curiosities: [
    "Os grafitos de Pompeia mostram campanha eleitoral, piadas, insultos e publicidade, quase como uma rede social de parede.",
    "O garum podia ser tão comum na cozinha romana como intenso no cheiro: era molho de peixe fermentado usado em muitos pratos.",
    "Alguns escravizados romanos eram professores, médicos ou administradores, mas isso não eliminava a violência jurídica da escravatura.",
    "As termas eram espaços de higiene, conversa, negócio, lazer e estatuto social, não apenas locais para tomar banho.",
    "Muitas estátuas romanas eram pintadas com cores vivas; a imagem branca do mármore é em parte efeito da passagem do tempo.",
    "A toga era símbolo de cidadania masculina, mas pouco prática para trabalho físico diário.",
    "O betão romano ajudou a construir portos, cúpulas e edifícios duráveis graças a misturas com materiais vulcânicos.",
    "A cidadania romana expandiu-se gradualmente e em 212 foi concedida a quase todos os homens livres do império.",
    "Os triunfos militares eram espetáculos de propaganda que exibiam generais, prisioneiros, saque e uma narrativa oficial de vitória.",
    "As fronteiras romanas eram zonas de contacto e comércio, não linhas completamente fechadas."
  ]
};

function applyEgyptPremiumContent() {
  const ancient = era;
  ancient.timeline = [...ancient.timeline, ...egyptPremiumContent.timeline];
  ancient.quiz = [...ancient.quiz, ...egyptPremiumContent.quiz];
  ancient.source = [...ancient.source, ...egyptPremiumContent.source];
  ancient.concepts = [...ancient.concepts, ...egyptPremiumContent.concepts];
  ancient.prompts = [...ancient.prompts, ...egyptPremiumContent.prompts];
  ancient.curiosities = [...ancient.curiosities, ...egyptPremiumContent.curiosities];
}

function applySumerianPremiumContent() {
  const ancient = era;
  ancient.timeline = [...ancient.timeline, ...sumerianPremiumContent.timeline];
  ancient.quiz = [...ancient.quiz, ...sumerianPremiumContent.quiz];
  ancient.source = [...ancient.source, ...sumerianPremiumContent.source];
  ancient.concepts = [...ancient.concepts, ...sumerianPremiumContent.concepts];
  ancient.prompts = [...ancient.prompts, ...sumerianPremiumContent.prompts];
  ancient.curiosities = [...ancient.curiosities, ...sumerianPremiumContent.curiosities];
}

function applyBabylonianPremiumContent() {
  const ancient = era;
  ancient.timeline = [...ancient.timeline, ...babylonianPremiumContent.timeline];
  ancient.events = [...ancient.events, ...babylonianPremiumContent.events];
  ancient.biographies = [...ancient.biographies, ...babylonianPremiumContent.biographies];
  ancient.concepts = [...ancient.concepts, ...babylonianPremiumContent.concepts];
  ancient.quiz = [...ancient.quiz, ...babylonianPremiumContent.quiz];
  ancient.source = [...ancient.source, ...babylonianPremiumContent.source];
  ancient.prompts = [...ancient.prompts, ...babylonianPremiumContent.prompts];
  ancient.curiosities = [...ancient.curiosities, ...babylonianPremiumContent.curiosities];
}

function applyAssyrianPremiumContent() {
  const ancient = era;
  ancient.timeline = [...ancient.timeline, ...assyrianPremiumContent.timeline];
  ancient.events = [...ancient.events, ...assyrianPremiumContent.events];
  ancient.biographies = [...ancient.biographies, ...assyrianPremiumContent.biographies];
  ancient.concepts = [...ancient.concepts, ...assyrianPremiumContent.concepts];
  ancient.quiz = [...ancient.quiz, ...assyrianPremiumContent.quiz];
  ancient.source = [...ancient.source, ...assyrianPremiumContent.source];
  ancient.prompts = [...ancient.prompts, ...assyrianPremiumContent.prompts];
  ancient.curiosities = [...ancient.curiosities, ...assyrianPremiumContent.curiosities];
}

function applyPersianPremiumContent() {
  const ancient = era;
  ancient.timeline = [...ancient.timeline, ...persianPremiumContent.timeline];
  ancient.events = [...ancient.events, ...persianPremiumContent.events];
  ancient.biographies = [...ancient.biographies, ...persianPremiumContent.biographies];
  ancient.concepts = [...ancient.concepts, ...persianPremiumContent.concepts];
  ancient.quiz = [...ancient.quiz, ...persianPremiumContent.quiz];
  ancient.source = [...ancient.source, ...persianPremiumContent.source];
  ancient.prompts = [...ancient.prompts, ...persianPremiumContent.prompts];
  ancient.curiosities = [...ancient.curiosities, ...persianPremiumContent.curiosities];
}

function applyRomanPremiumContent() {
  const ancient = era;
  ancient.summary = "Cidades, impérios, leis, religião, comércio e cultura escrita criaram formas duradouras de autoridade e desigualdade, do vale do Nilo ao Mediterrâneo romano.";
  ancient.stats = ["90 eventos", "23 fontes", "40 quizzes"];
  ancient.timeline = [...ancient.timeline, ...romanPremiumContent.timeline];
  ancient.events = [...ancient.events, ...romanPremiumContent.events];
  ancient.biographies = [...ancient.biographies, ...romanPremiumContent.biographies];
  ancient.concepts = [...ancient.concepts, ...romanPremiumContent.concepts];
  ancient.quiz = [...ancient.quiz, ...romanPremiumContent.quiz];
  ancient.source = [...ancient.source, ...romanPremiumContent.source];
  ancient.prompts = [...ancient.prompts, ...romanPremiumContent.prompts];
  ancient.curiosities = [...ancient.curiosities, ...romanPremiumContent.curiosities];
}

applyEgyptPremiumContent();
applySumerianPremiumContent();
applyBabylonianPremiumContent();
applyAssyrianPremiumContent();
applyPersianPremiumContent();
applyRomanPremiumContent();

export default era;
