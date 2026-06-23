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

function applyRomanPremiumContent() {
  const ancient = era;
  ancient.summary = "Cidades, impérios, leis, religião, comércio e cultura escrita criaram formas duradouras de autoridade e desigualdade, do vale do Nilo ao Mediterrâneo romano.";
  ancient.stats = ["45 eventos", "12 fontes", "19 quizzes"];
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
applyRomanPremiumContent();

export default era;
