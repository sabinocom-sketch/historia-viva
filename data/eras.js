// Historical era content. Keep this file declarative: raw period data plus era-specific content packs.

export const eras = {
  prehistoria: {
    range: "c. 3,3 milhões a.C. - c. 3000 a.C.",
    title: "Pré-História",
    summary: "Comunidades humanas passaram de estratégias de sobrevivência e adaptação para a construção de aldeias, produção, comércio e organização social antes da escrita.",
    stats: ["13 eventos", "5 fontes", "10 quizzes"],
    timeline: [
      ["c. 800 mil a.C.", "Descoberta do fogo: cozinhar, aquecer, iluminar e reunir o grupo mudou a sobrevivência humana."],
      ["c. 3,3 Ma", "Ferramentas de pedra: cortar, raspar e preparar materiais revelou técnica, aprendizagem e adaptação."],
      ["c. 120 mil a.C.", "Caça e pesca: grupos humanos aprenderam a explorar animais, águas, estações e territórios."],
      ["c. 40 mil a.C.", "Arte rupestre: imagens em grutas e abrigos mostram memória visual, simbolismo e vida coletiva."],
      ["c. 100 mil a.C.", "Ritos funerários: sepulturas e objetos sugerem cuidado, memória e possíveis crenças sobre a morte."],
      ["c. 12 mil a.C.", "Fim da era glacial: o aquecimento pós-glacial alterou fauna, paisagens e estratégias de subsistência."],
      ["c. 15 mil a.C.", "Domesticação de animais: a aproximação entre humanos e animais transformou alimento, proteção e mobilidade."],
      ["c. 11 mil a.C.", "Primeiros abrigos permanentes: comunidades começaram a ocupar lugares por mais tempo e a organizar espaços estáveis."],
      ["c. 10 mil a.C.", "Agricultura: produzir alimento com cultivo, sementes e colheitas abriu caminho ao sedentarismo."],
      ["c. 9000 a.C.", "Aldeias e comunidade: casas, fogueiras e tarefas partilhadas fizeram crescer cooperação e população."],
      ["c. 5000 a.C.", "Domínio dos metais: cobre, bronze e ferro mudaram ferramentas, guerra, trabalho e poder."],
      ["c. 4500 a.C.", "Comércio e trocas: rotas entre comunidades espalharam recursos, especialização e conhecimento."],
      ["c. 3500 a.C.", "Nascimento das civilizações: hierarquias, liderança, defesa e primeiras cidades criaram novas formas de vida social."]
    ],
    source: [
      {
        text: "Nas paredes da gruta, animais, sinais e mãos deixam marcas de presença e memória.",
        origin: "Síntese inspirada em vestígios de arte rupestre paleolítica.",
        purpose: "Permite discutir simbolismo, aprendizagem visual, rituais e identidade coletiva.",
        limits: "Sem escrita, a intenção exata depende de contexto arqueológico e comparação."
      },
      {
        text: "Lâminas, raspadores e pontas revelam escolhas de matéria-prima, técnica e uso.",
        origin: "Síntese baseada em conjuntos líticos paleolíticos.",
        purpose: "Mostra conhecimento prático, transmissão de técnicas e adaptação ao ambiente.",
        limits: "A função de uma peça exige análise de uso, localização e desgaste."
      },
      {
        text: "Grãos carbonizados e mós indicam processamento de plantas em comunidades sedentárias.",
        origin: "Síntese inspirada em achados neolíticos do Crescente Fértil e de outras regiões.",
        purpose: "Ajuda a relacionar alimentação, sedentarização, trabalho e demografia.",
        limits: "Agricultura e sedentarização não surgiram ao mesmo ritmo em todo o mundo."
      },
      {
        text: "Sepulturas com adornos sugerem cuidado com os mortos e distinções sociais.",
        origin: "Síntese de contextos funerários pré-históricos.",
        purpose: "Permite observar crenças, parentesco, estatuto e memória comunitária.",
        limits: "Objetos funerários não traduzem automaticamente riqueza ou poder político."
      },
      {
        text: "Ossadas de animais mostram caça, domesticação, dieta e pressão sobre ecossistemas.",
        origin: "Síntese de estudos zooarqueológicos.",
        purpose: "Liga economia, ambiente, tecnologia e relações entre humanos e animais.",
        limits: "A preservação dos ossos é desigual e pode distorcer a amostra."
      }
    ],
    quiz: [
      { question: "Que mudança está associada à Revolução Neolítica?", options: ["Desenvolvimento da agricultura", "Queda de Constantinopla", "Invenção da imprensa"], answer: 0 },
      { question: "Porque é que a arte rupestre é importante para os historiadores?", options: ["Revela práticas simbólicas e visuais", "Prova a existência de Estados", "Mostra o uso de moeda"], answer: 0 },
      { question: "O que distingue uma fonte material?", options: ["É um vestígio físico do passado", "É sempre um texto oficial", "É uma opinião moderna"], answer: 0 },
      { question: "Qual foi uma consequência provável da sedentarização?", options: ["Crescimento de aldeias e excedentes", "Fim imediato da caça", "Desaparecimento da desigualdade"], answer: 0 },
      { question: "O domínio do fogo teve impacto em quê?", options: ["Alimentação, proteção e convívio", "Imprensa e alfabetização", "Sufrágio universal"], answer: 0 },
      { question: "Porque é difícil estudar sociedades sem escrita?", options: ["Dependemos de vestígios materiais incompletos", "Não deixaram qualquer evidência", "Só existem fontes digitais"], answer: 0 },
      { question: "A domesticação de animais alterou sobretudo...", options: ["Economia, mobilidade e alimentação", "A criação de parlamentos", "A navegação oceânica moderna"], answer: 0 },
      { question: "Que ideia deve ser evitada sobre a Pré-História?", options: ["Que foi uma fase simples e imóvel", "Que existiram mudanças técnicas", "Que havia diversidade regional"], answer: 0 },
      { question: "A metalurgia contribuiu para...", options: ["Especialização artesanal e redes de troca", "Fim das aldeias", "Criação da democracia ateniense"], answer: 0 },
      { question: "O aquecimento pós-glacial foi relevante porque...", options: ["Mudou ambientes e formas de subsistência", "Criou a escrita alfabética", "Unificou o Egito"], answer: 0 }
    ],
    prompts: [
      "Como sabemos coisas sobre sociedades sem escrita?",
      "A agricultura melhorou sempre a vida humana?",
      "Que pistas a arte rupestre nos dá sobre pensamento simbólico?",
      "Compara caça-recoleção e agricultura sem assumir que uma é automaticamente superior.",
      "Que consequências sociais podem surgir quando há excedentes alimentares?",
      "Como é que alterações climáticas influenciaram migrações pré-históricas?",
      "Que papel teve a cooperação na sobrevivência de grupos humanos?",
      "Explica por que a tecnologia lítica também é cultura.",
      "Que limites tem interpretar sepulturas antigas?",
      "Imagina um debate entre uma comunidade nómada e uma aldeia agrícola."
    ],
    events: [
      ["Descoberta do fogo", "Transformou dieta, proteção, luz, convívio e organização do tempo social."],
      ["Ferramentas de pedra", "Indicam técnica, aprendizagem e adaptação muito antiga aos recursos disponíveis."],
      ["Caça e pesca", "Mostram conhecimento ecológico, cooperação e leitura de animais, águas e estações."],
      ["Arte rupestre", "Revela comunicação visual, memória, simbolismo e possíveis práticas rituais."],
      ["Ritos funerários", "Sugerem cuidado social, memória coletiva e possíveis crenças sobre a morte."],
      ["Fim da era glacial", "Alterou recursos, paisagens, fauna e estratégias de sobrevivência."],
      ["Domesticação de animais", "Mudou alimentação, proteção, mobilidade e relações entre humanos e outras espécies."],
      ["Primeiros abrigos permanentes", "Anteciparam formas mais estáveis de comunidade e organização do espaço."],
      ["Agricultura", "Produzir alimento com cultivo, sementes e colheitas abriu caminho ao sedentarismo."],
      ["Aldeias e comunidade", "Casas, fogueiras e tarefas partilhadas favoreceram cooperação e crescimento populacional."],
      ["Domínio dos metais", "Cobre, bronze e ferro mudaram ferramentas, guerra, trabalho e poder."],
      ["Comércio e trocas", "Rotas entre comunidades espalharam recursos, técnicas e contactos culturais."],
      ["Nascimento das civilizações", "Hierarquias, liderança, defesa e primeiras cidades criaram novas formas de vida social."]
    ],
    biographies: [
      ["Lucy", "Australopithecus afarensis que ajuda a compreender o bipedismo nos hominíneos."],
      ["Homo erectus", "Espécie humana associada a grande dispersão geográfica e adaptação técnica."],
      ["Mulher de Dolní Věstonice", "Enterramento paleolítico que permite discutir saúde, cuidado e comunidade."],
      ["Ötzi", "Homem do gelo cuja conservação revela dieta, tecnologia, violência e saúde no Calcolítico."],
      ["Criança de Lapedo", "Achado português importante para discutir diversidade humana no Paleolítico."],
      ["Povos natufianos", "Comunidades do Levante que ajudam a estudar sedentarização antes da agricultura plena."],
      ["Artesãos líticos", "Transmissores de saber técnico, escolha de materiais e aprendizagem coletiva."],
      ["Caçadores-recolectores", "Grupos diversos que combinavam mobilidade, conhecimento ecológico e redes sociais."],
      ["Primeiros agricultores", "Transformaram paisagens e relações sociais, mas enfrentaram trabalho intenso e riscos alimentares."],
      ["Arqueólogos e arqueólogas", "Investigam vestígios materiais para reconstruir sociedades sem escrita."]
    ],
    concepts: [
      ["Paleolítico", "Período associado a caça, recoleção, mobilidade e ferramentas de pedra lascada."],
      ["Mesolítico", "Fase de adaptação após a era glacial, com novos ambientes, domesticação e abrigos mais estáveis."],
      ["Revolução Neolítica", "Grande fase de construção humana que integra agricultura, aldeias, metais, comércio e bases das civilizações."],
      ["Fonte material", "Objeto, construção ou vestígio físico usado para investigar o passado."],
      ["Sedentarização", "Fixação mais duradoura em aldeias, com efeitos na propriedade, trabalho e saúde."],
      ["Domesticação", "Processo de transformação de plantas e animais por seleção humana ao longo de gerações."],
      ["Excedente", "Produção acima da necessidade imediata, capaz de sustentar trocas e hierarquias."],
      ["Nomadismo", "Mobilidade organizada em função de recursos, estações e relações entre grupos."],
      ["Arte rupestre", "Imagens gravadas ou pintadas que expressam simbolismo e práticas sociais."],
      ["Especialização artesanal", "Concentração de pessoas em tarefas técnicas, favorecida por excedentes e trocas."],
      ["Arqueologia", "Disciplina que interpreta vestígios materiais para estudar sociedades passadas."]
    ],
    curiosities: [
      "Algumas comunidades sedentárias começaram antes da agricultura plena.",
      "A agricultura surgiu independentemente em várias regiões do mundo.",
      "Nem todas as sociedades agrícolas abandonaram a caça e a recoleção.",
      "O fogo também pode ter alterado a organização do tempo social.",
      "Vestígios microscópicos em ferramentas ajudam a saber se cortavam carne, madeira ou plantas.",
      "Algumas pinturas rupestres foram feitas em zonas profundas de grutas, longe da luz natural.",
      "O pão e a cerveja têm raízes muito antigas em sociedades cerealíferas.",
      "A domesticação do cão começou antes da agricultura em várias regiões.",
      "O uso de pigmentos como ocre pode ter servido para arte, rituais e proteção da pele.",
      "Nem todos os grupos pré-históricos viviam em cavernas; muitos usavam abrigos temporários.",
      "A invenção da cerâmica alterou a forma de cozinhar, armazenar e transportar alimentos.",
      "Algumas aldeias neolíticas já tinham casas muito próximas, quase como bairros.",
      "Enterramentos com objetos não provam riqueza automaticamente, mas sugerem memória social.",
      "A navegação costeira pré-histórica ajudou a povoar ilhas e continentes.",
      "A passagem para a agricultura pôde aumentar doenças ligadas a sedentarização e contacto com animais."
    ]
  },
  antiga: {
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
  },
  medieval: {
    range: "476 - 1453",
    title: "Mundos Medievais",
    summary: "Reinos, cidades, mosteiros, rotas comerciais, poderes senhoriais e religiões estruturaram sociedades medievais diversas.",
    stats: ["10 eventos", "5 fontes", "10 quizzes"],
    timeline: [
      ["410", "Saque de Roma por visigodos simboliza a pressão das migrações germânicas sobre o Império Romano."],
      ["476", "Reinos germânicos consolidam-se no Ocidente após a queda do Império Romano do Ocidente."],
      ["529", "Regra de São Bento organiza vida monástica e produção cultural no Ocidente."],
      ["622", "Hégira marca o início da comunidade islâmica e de uma nova cronologia religiosa."],
      ["711", "Entrada muçulmana na Península Ibérica transforma poder, cultura e economia regionais."],
      ["793", "Ataque viking a Lindisfarne marca simbolicamente a expansão marítima nórdica."],
      ["800", "Carlos Magno é coroado imperador, aproximando poder franco e autoridade papal."],
      ["911", "Tratado de Saint-Clair-sur-Epte integra líderes vikings na Normandia cristã."],
      ["962", "Otão I é coroado imperador, fortalecendo o Sacro Império Romano-Germânico."],
      ["960-1279", "China Song intensifica burocracia, cidades, impressão, comércio e inovação técnica."],
      ["988", "Cristianização da Rus de Kyiv liga principados eslavos ao cristianismo ortodoxo."],
      ["1054", "Cisma entre Roma e Constantinopla aprofunda divisões religiosas cristãs."],
      ["1066", "Conquista normanda transforma a Inglaterra medieval e a organização do poder régio."],
      ["1095", "Apelo à Primeira Cruzada mobiliza guerra, fé e interesses aristocráticos."],
      ["1185", "Xogunato de Kamakura inaugura nova centralidade guerreira no Japão medieval."],
      ["1206", "Sultanato de Deli articula poder islâmico, elites militares e sociedades indianas diversas."],
      ["1215", "Magna Carta limita o poder régio e torna-se referência política posterior."],
      ["1325", "Fundação de Tenochtitlan marca a ascensão mexica no vale do México."],
      ["1347", "Peste Negra provoca crise demográfica, económica e religiosa."],
      ["1415", "Ceuta é conquistada por Portugal, abrindo nova etapa de expansão."],
      ["1453", "Queda de Constantinopla altera o equilíbrio do Mediterrâneo oriental."]
    ],
    source: [
      {
        text: "Os camponeses devem trabalho e renda ao senhor, e o senhor deve proteção e justiça.",
        origin: "Síntese de relações senhoriais em documentos medievais europeus.",
        purpose: "Mostra obrigações recíprocas e desigualdade social.",
        limits: "As relações variavam muito por região, época e estatuto jurídico."
      },
      {
        text: "Que os monges alternem oração, leitura e trabalho.",
        origin: "Síntese da Regra de São Bento.",
        purpose: "Permite analisar disciplina religiosa, cultura escrita e economia monástica.",
        limits: "Mostra um ideal normativo, não a prática de todos os mosteiros."
      },
      {
        text: "Os mercadores pagam portagens e levam tecidos, sal, metais e especiarias.",
        origin: "Síntese de registos urbanos e comerciais medievais.",
        purpose: "Liga crescimento urbano, fiscalidade e redes de comércio.",
        limits: "Registos fiscais podem ignorar trocas informais e contrabando."
      },
      {
        text: "Os vivos fogem, enterram depressa os mortos e procuram explicações para a peste.",
        origin: "Síntese inspirada em crónicas da Peste Negra.",
        purpose: "Ajuda a estudar medo, religião, saúde e desorganização social.",
        limits: "Crónicas podem exagerar e refletem visões de grupos letrados."
      },
      {
        text: "O rei promete respeitar certos costumes e consultar os seus homens.",
        origin: "Síntese de pactos políticos medievais como a Magna Carta.",
        purpose: "Mostra limites negociados do poder régio.",
        limits: "Direitos pactuados beneficiavam sobretudo elites, não toda a população."
      }
    ],
    quiz: [
      { question: "A Peste Negra teve impacto direto em qual dimensão social?", options: ["Disponibilidade de mão de obra", "Criação da internet", "Fim imediato das monarquias"], answer: 0 },
      { question: "A Hégira está associada a...", options: ["Formação inicial da comunidade islâmica", "Queda de Roma", "Reforma Protestante"], answer: 0 },
      { question: "O senhorio medieval combinava...", options: ["Domínio económico, social e judicial", "Sufrágio universal", "Indústria pesada"], answer: 0 },
      { question: "As cruzadas envolveram...", options: ["Religião, guerra, poder e interesses materiais", "Apenas viagens pacíficas", "Só conflitos industriais"], answer: 0 },
      { question: "A Magna Carta é importante porque...", options: ["Limitou práticas do poder régio", "Aboliu todos os impostos", "Criou a União Europeia"], answer: 0 },
      { question: "Mosteiros medievais foram importantes para...", options: ["Cópia de manuscritos, oração e economia local", "Produção de cinema", "Sufrágio feminino"], answer: 0 },
      { question: "O crescimento das cidades medievais relaciona-se com...", options: ["Comércio, artesanato e autonomia municipal", "Fim total da agricultura", "Desaparecimento da moeda"], answer: 0 },
      { question: "O Cisma de 1054 separou sobretudo...", options: ["Cristianismo latino e ortodoxo", "Roma e Cartago", "Atenas e Esparta"], answer: 0 },
      { question: "A conquista de Ceuta em 1415 marcou...", options: ["Expansão portuguesa no Norte de África", "Fim da Reconquista no século VIII", "Nascimento do Homo sapiens"], answer: 0 },
      { question: "O feudalismo deve ser usado como...", options: ["Conceito variável, não regra única", "Sistema igual em toda a Europa", "Sinónimo de democracia direta"], answer: 0 }
    ],
    prompts: [
      "O feudalismo era uma regra fixa ou variava por região?",
      "Como cresceram as cidades medievais?",
      "De que forma a peste alterou relações de trabalho?",
      "Compara o poder de um rei medieval com o de um senhor local.",
      "Que papel tiveram mosteiros na cultura escrita?",
      "Como coexistiram conflito e intercâmbio entre cristãos, judeus e muçulmanos?",
      "Porque é que as cruzadas não podem ser explicadas só pela fé?",
      "Que consequências teve o crescimento do comércio urbano?",
      "Como a queda de Constantinopla mudou o Mediterrâneo?",
      "Simula uma conversa entre camponês, mercador e monge sobre a peste."
    ],
    events: [
      ["Regra de São Bento", "Organizou vida monástica e influenciou cultura escrita e economia rural."],
      ["Hégira", "Criou marco religioso e político para a expansão do Islão."],
      ["Al-Andalus", "Transformou a Península Ibérica em espaço de conflito, comércio e circulação cultural."],
      ["Coroação de Carlos Magno", "Reforçou a ideia de império cristão no Ocidente."],
      ["Cisma de 1054", "Aprofundou a divisão entre cristianismo latino e ortodoxo."],
      ["Primeira Cruzada", "Mobilizou fé, guerra, terras e prestígio nobiliárquico."],
      ["Magna Carta", "Expressou negociação entre rei e elites, com impacto político posterior."],
      ["Crescimento urbano", "Cidades ganharam comércio, corporações e autonomia."],
      ["Peste Negra", "Crise demográfica que alterou salários, medo religioso e relações sociais."],
      ["Queda de Constantinopla", "Marcador simbólico de mudança geopolítica no Mediterrâneo oriental."]
    ],
    biographies: [
      ["Carlos Magno", "Rei franco e imperador ligado à expansão militar e reforma administrativa."],
      ["Leonor da Aquitânia", "Figura política influente nas monarquias francesa e inglesa."],
      ["Ibn Battuta", "Viajante marroquino que registou redes urbanas e culturais do mundo islâmico."],
      ["Maomé", "Profeta do Islão e líder religioso e político da primeira comunidade muçulmana."],
      ["Justiniano", "Imperador bizantino associado à codificação jurídica e ambições imperiais."],
      ["Hildegarda de Bingen", "Abadessa, autora e compositora que revela cultura intelectual feminina."],
      ["Tomás de Aquino", "Teólogo que articulou filosofia aristotélica e pensamento cristão."],
      ["Gengis Khan", "Fundador do Império Mongol, cuja expansão reconfigurou rotas euro-asiáticas."],
      ["Joana d'Arc", "Figura militar e religiosa da Guerra dos Cem Anos."],
      ["Mehmed II", "Sultão otomano que conquistou Constantinopla em 1453."]
    ],
    concepts: [
      ["Senhorio", "Domínio territorial e social onde senhores cobravam rendas e exerciam justiça."],
      ["Vassalagem", "Relação de fidelidade e serviço entre elites guerreiras."],
      ["Cristandade", "Comunidade cristã europeia articulada por Igreja, crenças e instituições."],
      ["Feudalismo", "Conceito usado para relações de dependência, terra e poder local, variável regionalmente."],
      ["Corporações de ofício", "Associações urbanas que regulavam aprendizagem, produção e qualidade."],
      ["Reconquista", "Processos de guerra, povoamento e legitimação cristã na Península Ibérica."],
      ["Monasticismo", "Vida religiosa comunitária ligada a oração, trabalho e cultura escrita."],
      ["Cruzada", "Expedição armada legitimada religiosamente e marcada por interesses múltiplos."],
      ["Burguesia urbana", "Grupos ligados ao comércio e artesanato com influência crescente nas cidades."],
      ["Império Bizantino", "Continuação oriental do mundo romano, com cultura grega e cristianismo ortodoxo."]
    ],
    curiosities: [
      "A Idade Média durou cerca de mil anos e foi muito diversa regionalmente.",
      "Algumas cidades medievais tinham cartas de privilégio que limitavam poderes senhoriais.",
      "A Peste Negra também gerou perseguições contra minorias injustamente culpabilizadas.",
      "Universidades medievais surgiram de escolas urbanas e eclesiásticas.",
      "O comércio medieval ligava Europa, Mediterrâneo, África e Ásia muito antes da globalização moderna.",
      "Os mosteiros podiam ser centros de oração, produção agrícola, hospitalidade e cópia de livros.",
      "Muitos castelos eram também centros administrativos, não apenas fortalezas militares.",
      "A alimentação camponesa dependia muito de cereais, legumes, vinho fraco ou cerveja.",
      "Especiarias eram caras não só por serem raras, mas por atravessarem longas redes comerciais.",
      "As corporações de ofício regulavam aprendizagem, preços, qualidade e reputação profissional.",
      "A armadura completa de cavaleiro foi sobretudo um desenvolvimento tardio, não uma regra de toda a Idade Média.",
      "Relógios mecânicos urbanos mudaram a relação das cidades com o tempo.",
      "Manuscritos iluminados exigiam pigmentos caros, pele preparada e trabalho especializado.",
      "A medicina medieval combinava tradição clássica, prática empírica e crenças religiosas.",
      "Em várias regiões, mulheres trabalharam em oficinas, mercados, campos e gestão familiar."
    ]
  },
  moderna: {
    range: "1453 - 1789",
    title: "Expansão e Revoluções",
    summary: "Imprensa, impérios marítimos, reformas religiosas, escravatura atlântica, ciência e Estado moderno reordenaram o mundo.",
    stats: ["10 eventos", "5 fontes", "10 quizzes"],
    timeline: [
      ["1453", "Queda de Constantinopla intensifica mudanças comerciais e geopolíticas."],
      ["1455", "Imprensa de tipos móveis acelera circulação de livros, polémicas e conhecimento."],
      ["1492", "Viagens atlânticas intensificam conquistas, contactos e violência colonial."],
      ["1498", "Vasco da Gama chega à Índia por via marítima."],
      ["1517", "Lutero inicia crise religiosa que fragmenta a cristandade ocidental."],
      ["1521", "Conquista de Tenochtitlán acelera o domínio espanhol no México central."],
      ["1545-1563", "Concílio de Trento reorganiza a resposta católica à Reforma."],
      ["1571", "Batalha de Lepanto revela rivalidades mediterrânicas entre poderes cristãos e o Império Otomano."],
      ["1600", "Companhia Inglesa das Índias Orientais liga comércio, guerra e influência europeia na Índia."],
      ["1600", "Companhias comerciais europeias articulam comércio, guerra e império."],
      ["1603", "Tokugawa Ieyasu inaugura o xogunato Edo e reorganiza o poder no Japão."],
      ["1609", "República Holandesa consolida autonomia e expande redes mercantis globais."],
      ["1644", "Dinastia Qing toma Pequim e reorganiza o império chinês sob poder manchu."],
      ["1648", "Paz de Vestefália encerra a Guerra dos Trinta Anos e redefine equilíbrios do Sacro Império."],
      ["1682", "Pedro o Grande inicia reformas que reforçam o Estado russo e a abertura ao Báltico."],
      ["1685", "Luís XIV revoga o Édito de Nantes e reforça o absolutismo católico em França."],
      ["1687", "Newton publica os Principia, marco da ciência moderna europeia."],
      ["1755", "Terramoto de Lisboa abala política, urbanismo e debate intelectual."],
      ["1776", "Independência dos EUA antecipa linguagens políticas revolucionárias."]
    ],
    source: [
      {
        text: "Navegar, comerciar e converter são apresentados como glória, proveito e dever.",
        origin: "Síntese de argumentos europeus ligados à expansão marítima.",
        purpose: "Justifica expansão com fé, riqueza e prestígio político.",
        limits: "Oculta coerção, resistência e perdas das populações afetadas."
      },
      {
        text: "As teses criticam indulgências e autoridade religiosa, pedindo debate público.",
        origin: "Síntese inspirada nas 95 Teses de Martinho Lutero.",
        purpose: "Permite estudar Reforma, imprensa e conflito religioso.",
        limits: "Não resume toda a diversidade protestante posterior."
      },
      {
        text: "O navio transporta pessoas escravizadas como mercadoria contabilizada.",
        origin: "Síntese de registos do tráfico atlântico de escravizados.",
        purpose: "Mostra desumanização económica e violência colonial.",
        limits: "Registos comerciais raramente preservam vozes das vítimas."
      },
      {
        text: "A experiência deve confirmar a hipótese, não apenas repetir autoridade antiga.",
        origin: "Síntese do método experimental moderno.",
        purpose: "Ajuda a analisar mudança científica e autoridade do conhecimento.",
        limits: "A ciência moderna conviveu com tradições antigas e instituições religiosas."
      },
      {
        text: "A cidade deve renascer com ruas largas, controlo e utilidade pública.",
        origin: "Síntese do programa pombalino após o Terramoto de 1755.",
        purpose: "Liga catástrofe, urbanismo, Estado e Iluminismo prático.",
        limits: "A reconstrução também refletiu autoritarismo e interesses sociais desiguais."
      }
    ],
    quiz: [
      { question: "Qual inovação favoreceu a difusão rápida de ideias na Europa moderna?", options: ["Imprensa de tipos móveis", "Telégrafo elétrico", "Cinema sonoro"], answer: 0 },
      { question: "A Reforma Protestante começou ligada a críticas a...", options: ["Indulgências e autoridade eclesiástica", "Sufrágio universal", "Industrialização"], answer: 0 },
      { question: "O tráfico atlântico de escravizados foi...", options: ["Sistema económico violento e desumanizador", "Migração livre e voluntária", "Fenómeno sem ligação colonial"], answer: 0 },
      { question: "O mercantilismo relacionava riqueza do Estado com...", options: ["Comércio, metais e controlo colonial", "Fim dos impostos", "Economia sem impérios"], answer: 0 },
      { question: "A Revolução Científica valorizou...", options: ["Observação, matemática e experimentação", "Apenas tradição oral", "Rejeição total da matemática"], answer: 0 },
      { question: "O Concílio de Trento foi resposta...", options: ["Católica à Reforma", "Romana às Guerras Púnicas", "Medieval à Peste Negra"], answer: 0 },
      { question: "As companhias comerciais modernas combinavam...", options: ["Comércio, guerra e poder estatal", "Apenas caridade religiosa", "Democracia direta"], answer: 0 },
      { question: "O Terramoto de Lisboa de 1755 teve impacto em...", options: ["Urbanismo, política e debate filosófico", "Queda de Roma", "Início da agricultura"], answer: 0 },
      { question: "O absolutismo defendia...", options: ["Concentração de poder régio", "Soberania popular plena", "Ausência de Estado"], answer: 0 },
      { question: "A expansão europeia deve ser estudada incluindo...", options: ["Comércio, violência, resistência e trocas culturais", "Só heroísmo náutico", "Apenas mapas sem pessoas"], answer: 0 }
    ],
    prompts: [
      "Como a imprensa mudou conflitos religiosos?",
      "Que consequências teve a expansão marítima para povos colonizados?",
      "A ciência moderna rompeu totalmente com o passado?",
      "Explica a ligação entre comércio atlântico e escravatura.",
      "Como o Estado moderno aumentou impostos, burocracia e exércitos?",
      "Compara Reforma Protestante e Reforma Católica.",
      "Que papel tiveram mulheres e elites não europeias neste período?",
      "Porque é que o Iluminismo podia defender razão e conviver com impérios?",
      "Analisa o Terramoto de 1755 como crise política e cultural.",
      "Simula uma conversa entre um mercador, uma pessoa escravizada e um missionário."
    ],
    events: [
      ["Queda de Constantinopla", "Reconfigurou poderes no Mediterrâneo e teve forte valor simbólico."],
      ["Imprensa de Gutenberg", "Acelerou circulação de textos e polémicas religiosas e científicas."],
      ["Viagens de Colombo", "Intensificaram conquista, colonização e colapso demográfico indígena."],
      ["Chegada de Vasco da Gama à Índia", "Ligou Europa e Índico por rota marítima controlada militarmente."],
      ["Reforma Protestante", "Fragmentou a cristandade e transformou política, educação e cultura."],
      ["Concílio de Trento", "Reorganizou doutrina, disciplina e ação católica."],
      ["Tráfico atlântico de escravizados", "Sustentou plantações e impérios através de violência massiva."],
      ["Revolução Científica", "Alterou métodos de prova e autoridade do conhecimento."],
      ["Terramoto de Lisboa", "Transformou urbanismo, política e debates sobre providência e razão."],
      ["Independência dos EUA", "Difundiu linguagem de direitos, representação e soberania."]
    ],
    biographies: [
      ["Martinho Lutero", "Reformador cujas críticas impulsionaram ruturas religiosas profundas."],
      ["Galileu Galilei", "Defendeu observação e matemática em debates sobre cosmologia e autoridade."],
      ["Nzinga Mbandi", "Rainha do Ndongo e Matamba, diplomata e resistente à pressão portuguesa."],
      ["Johannes Gutenberg", "Associado à imprensa de tipos móveis europeia e à multiplicação de livros."],
      ["Cristóvão Colombo", "Navegador cujas viagens abriram ciclos de conquista e colonização nas Américas."],
      ["Bartolomeu de Las Casas", "Crítico de abusos coloniais, embora inserido no mundo imperial espanhol."],
      ["Isabel I de Inglaterra", "Monarca ligada à consolidação protestante e à expansão marítima inglesa."],
      ["Isaac Newton", "Figura central da física matemática e da ciência europeia moderna."],
      ["Marquês de Pombal", "Ministro português associado a reformas, reconstrução de Lisboa e autoritarismo."],
      ["Olaudah Equiano", "Autor abolicionista cuja narrativa denunciou a escravatura atlântica."]
    ],
    concepts: [
      ["Mercantilismo", "Políticas que ligavam riqueza do Estado a comércio, metais e controlo colonial."],
      ["Humanismo", "Valorização de textos clássicos, educação e capacidades humanas no Renascimento."],
      ["Colonialismo", "Dominação política, económica e cultural de territórios e populações."],
      ["Reforma Protestante", "Movimento religioso plural que contestou a autoridade católica romana."],
      ["Reforma Católica", "Resposta doutrinal, disciplinar e missionária da Igreja Católica."],
      ["Absolutismo", "Modelo de concentração de poder régio, embora negociado com elites."],
      ["Tráfico atlântico", "Sistema de deportação forçada de africanos escravizados para economias coloniais."],
      ["Revolução Científica", "Mudança nos métodos de observação, cálculo, experiência e validação."],
      ["Iluminismo", "Correntes que valorizavam razão, crítica e reforma social, com contradições."],
      ["Companhia comercial", "Entidade com privilégios estatais para comércio, guerra e colonização."]
    ],
    curiosities: [
      "A imprensa não eliminou manuscritos de imediato; os dois circularam durante muito tempo.",
      "Impérios europeus dependeram de intermediários locais em África, Ásia e Américas.",
      "O açúcar foi um produto central para a expansão da escravatura atlântica.",
      "O Terramoto de 1755 tornou Lisboa um laboratório de urbanismo e autoridade estatal.",
      "Muitos cientistas modernos também se interessavam por teologia, alquimia ou astrologia.",
      "O chocolate, o milho e a batata mudaram hábitos alimentares europeus após contactos atlânticos.",
      "A imprensa ajudou a espalhar panfletos polémicos, não apenas livros eruditos.",
      "A navegação oceânica dependia de pilotos, mapas, instrumentos e conhecimento prático acumulado.",
      "Companhias comerciais podiam ter autorização para fazer guerra e governar territórios.",
      "Salões, cafés e academias tornaram-se espaços importantes de debate cultural e científico.",
      "A quarentena marítima tornou-se uma prática urbana para tentar controlar epidemias.",
      "O consumo de chá, café e açúcar ligava moda europeia a trabalho colonial e escravatura.",
      "A cartografia moderna também era instrumento de poder e disputa imperial.",
      "Missionários produziram gramáticas e dicionários de línguas locais com objetivos religiosos.",
      "A reconstrução pombalina usou soluções anti-sísmicas inovadoras para a época."
    ]
  },
  contemporanea: {
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
  },
  portugal: {
    range: "antes de 1143 - presente",
    title: "História de Portugal",
    summary: "Da formação do reino à expansão marítima, crise imperial, liberalismo, ditadura, democracia e integração europeia.",
    stats: ["10 eventos", "5 fontes", "10 quizzes"],
    timeline: [
      ["c. 200 a.C.", "Povos lusitanos resistem à expansão romana no ocidente da Península Ibérica."],
      ["19 a.C.", "Romanização integra o território no mundo administrativo, urbano e económico romano."],
      ["585", "Reino suevo é integrado no reino visigótico, reordenando poderes na antiga Gallaecia."],
      ["711", "Entrada muçulmana na Península Ibérica transforma poder, cultura e economia regionais."],
      ["1096", "Condado Portucalense reforça autonomia política no contexto dos reinos cristãos peninsulares."],
      ["1143", "Tratado de Zamora reconhece D. Afonso Henriques no processo de afirmação do reino."],
      ["1249", "Conquista do Algarve completa a expansão territorial cristã para sul."],
      ["1385", "Aljubarrota consolida independência face a Castela e abre a dinastia de Avis."],
      ["1415", "Conquista de Ceuta inicia uma etapa de expansão portuguesa."],
      ["1498", "Vasco da Gama chega à Índia, ampliando redes comerciais e imperiais."],
      ["1580", "Crise dinástica leva à União Ibérica sob os Habsburgo."],
      ["1755", "Terramoto de Lisboa desencadeia reconstrução urbana e reformas pombalinas."],
      ["1820", "Revolução Liberal exige constituição e limitações ao absolutismo."],
      ["1910", "Implantação da República derruba a monarquia constitucional."],
      ["1974", "25 de Abril põe fim à ditadura e inicia a transição democrática."]
    ],
    source: [
      {
        text: "O rei afirma direitos, terras e alianças para sustentar a autonomia do reino.",
        origin: "Síntese inspirada em documentos régios medievais portugueses.",
        purpose: "Permite analisar construção política, guerra e legitimidade.",
        limits: "Textos régios expressam a visão do poder, não todas as populações."
      },
      {
        text: "Na praça, mestres e homens bons discutem impostos, comércio e defesa.",
        origin: "Síntese de práticas municipais medievais.",
        purpose: "Mostra autonomia local, elites urbanas e fiscalidade.",
        limits: "A participação era restrita e excluía grande parte da população."
      },
      {
        text: "As naus partem com mercadores, soldados, pilotos, missionários e ambições régias.",
        origin: "Síntese de relatos e documentação da expansão marítima.",
        purpose: "Liga navegação, comércio, império, guerra e religião.",
        limits: "Relatos portugueses podem silenciar violência e resistências locais."
      },
      {
        text: "Lisboa caiu, mas foi reconstruída com novas ruas, regras e controlo estatal.",
        origin: "Síntese do contexto posterior ao Terramoto de 1755.",
        purpose: "Permite discutir catástrofe, urbanismo, absolutismo e Iluminismo.",
        limits: "A reconstrução não beneficiou todos de forma igual."
      },
      {
        text: "O povo saiu à rua, os soldados avançaram, e a censura caiu com a promessa de liberdade.",
        origin: "Síntese inspirada em testemunhos sobre a Revolução de 25 de Abril de 1974.",
        purpose: "Ajuda a discutir mudança política, mobilização social e memória democrática.",
        limits: "Um relato celebratório pode simplificar conflitos e incertezas da transição."
      }
    ],
    quiz: [
      { question: "Que acontecimento marcou o fim da ditadura em Portugal?", options: ["Revolução de 25 de Abril", "Tratado de Zamora", "Batalha de Aljubarrota"], answer: 0 },
      { question: "O Tratado de Zamora é associado a...", options: ["Reconhecimento político de Afonso Henriques", "Implantação da República", "Entrada na CEE"], answer: 0 },
      { question: "Aljubarrota foi importante porque...", options: ["Reforçou independência face a Castela", "Iniciou a União Ibérica", "Terminou o Estado Novo"], answer: 0 },
      { question: "A conquista de Ceuta em 1415 ligou-se a...", options: ["Expansão, guerra, comércio e prestígio", "Revolução Industrial portuguesa", "Fim da monarquia"], answer: 0 },
      { question: "A chegada à Índia por Vasco da Gama abriu...", options: ["Rota marítima europeia para o Índico", "A democracia parlamentar moderna", "A Reconquista"], answer: 0 },
      { question: "A União Ibérica começou em...", options: ["1580", "1143", "1974"], answer: 0 },
      { question: "O Terramoto de 1755 teve consequências em...", options: ["Urbanismo, política e reformas", "Queda de Roma", "Aparecimento da agricultura"], answer: 0 },
      { question: "A Revolução Liberal de 1820 defendia...", options: ["Constitucionalismo e limites ao absolutismo", "Regresso ao feudalismo", "Fim da imprensa"], answer: 0 },
      { question: "A Primeira República começou em...", options: ["1910", "1640", "1986"], answer: 0 },
      { question: "A entrada de Portugal na CEE em 1986 representou...", options: ["Integração europeia e transformação económica", "Restauração da monarquia", "Início do tráfico atlântico"], answer: 0 }
    ],
    prompts: [
      "Como se formou o reino de Portugal?",
      "Que impactos tiveram os Descobrimentos dentro e fora de Portugal?",
      "Porque é que o 25 de Abril continua central na memória portuguesa?",
      "Compara Aljubarrota e 1640 como momentos de afirmação política.",
      "Como a expansão marítima portuguesa combinou comércio, ciência e violência?",
      "Que consequências teve o Terramoto de 1755 para Lisboa e para o Estado?",
      "Porque é que o liberalismo português gerou guerra civil?",
      "Como mudou a sociedade portuguesa entre monarquia, república e ditadura?",
      "Que ligações existem entre guerra colonial, ditadura e 25 de Abril?",
      "Simula um debate entre um navegador, um comerciante africano e um cronista régio."
    ],
    events: [
      ["Tratado de Zamora", "Momento importante no reconhecimento político de Afonso Henriques e do reino português."],
      ["Conquista do Algarve", "Fixou a expansão territorial portuguesa para sul, com integração gradual."],
      ["Batalha de Aljubarrota", "Vitória de 1385 que reforçou independência e a dinastia de Avis."],
      ["Conquista de Ceuta", "Abriu etapa de expansão com motivações comerciais, militares e simbólicas."],
      ["Chegada à Índia", "Inseriu Portugal em redes do Índico através de comércio armado."],
      ["União Ibérica", "Colocou Portugal sob a monarquia hispânica e afetou o império ultramarino."],
      ["Restauração de 1640", "Recuperou autonomia política após guerra e negociação internacional."],
      ["Terramoto de 1755", "Desencadeou reconstrução urbana e reforço do Estado pombalino."],
      ["Revolução Liberal de 1820", "Introduziu constitucionalismo e conflito entre liberalismo e absolutismo."],
      ["25 de Abril", "Derrubou a ditadura, abriu democracia e acelerou descolonização."]
    ],
    biographies: [
      ["D. Afonso Henriques", "Primeiro rei de Portugal, associado à afirmação política do novo reino."],
      ["D. Dinis", "Rei ligado a administração, cultura escrita e desenvolvimento económico."],
      ["D. João I", "Monarca da dinastia de Avis, ligado à crise de 1383-85."],
      ["Nuno Álvares Pereira", "Comandante militar decisivo em Aljubarrota e figura de devoção posterior."],
      ["Infante D. Henrique", "Figura ligada à expansão atlântica e à organização de viagens."],
      ["Vasco da Gama", "Navegador que chegou à Índia por via marítima em 1498."],
      ["Marquês de Pombal", "Ministro reformador e autoritário após o Terramoto de 1755."],
      ["D. Maria II", "Rainha constitucional num período de guerras liberais e construção institucional."],
      ["Aristides de Sousa Mendes", "Diplomata que salvou refugiados durante a Segunda Guerra Mundial."],
      ["Salgueiro Maia", "Capitão de Abril ligado à ação militar que ajudou a derrubar a ditadura."]
    ],
    concepts: [
      ["Reconquista", "Processo de guerra, povoamento e poder cristão na Península Ibérica medieval."],
      ["Estado Novo", "Ditadura portuguesa de 1933 a 1974, marcada por censura e polícia política."],
      ["Descolonização", "Processo de independência das colónias portuguesas após 1974."],
      ["Dinastia de Avis", "Casa régia consolidada após 1385, ligada à expansão quatrocentista."],
      ["Império português", "Conjunto variável de territórios, feitorias, rotas e dominações ultramarinas."],
      ["Comércio armado", "Prática de controlar rotas e portos através de força naval e fortificações."],
      ["União Ibérica", "Período de 1580 a 1640 em que Portugal esteve sob reis Habsburgo."],
      ["Pombalismo", "Reformas centralizadoras associadas ao Marquês de Pombal."],
      ["Liberalismo português", "Movimento constitucional que procurou limitar absolutismo e redefinir cidadania."],
      ["Guerra colonial", "Conflitos em África que desgastaram a ditadura e influenciaram o 25 de Abril."]
    ],
    curiosities: [
      "A fronteira terrestre portuguesa é uma das mais antigas e estáveis da Europa.",
      "A expansão portuguesa no Índico dependeu tanto de diplomacia local como de força naval.",
      "O Terramoto de 1755 foi sentido em várias regiões da Europa e do Atlântico.",
      "A Primeira República teve grande instabilidade governativa e conflito social.",
      "O 25 de Abril ligou democratização interna e fim do império colonial.",
      "A língua portuguesa espalhou-se por rotas comerciais, impérios, migrações e culturas locais.",
      "O bacalhau tornou-se central na alimentação portuguesa apesar de vir de mares distantes.",
      "A calçada portuguesa é relativamente recente e ganhou força urbana no século XIX.",
      "A reconstrução de Lisboa após 1755 incluiu estruturas pensadas para resistir melhor a sismos.",
      "Os forais regulavam impostos, direitos e deveres de muitas comunidades locais.",
      "A expansão atlântica portuguesa envolveu cartógrafos, pilotos, intérpretes e comerciantes.",
      "Durante o Estado Novo, a censura controlava imprensa, teatro, cinema e literatura.",
      "A guerra colonial teve efeitos profundos em famílias, economia e oposição política.",
      "A entrada na CEE em 1986 acelerou mudanças em infraestruturas, agricultura e indústria.",
      "Muitas tradições populares portuguesas misturam religião, calendário agrícola e identidade local."
    ]
  }
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

function applyRomanPremiumContent() {
  const ancient = eras.antiga;
  ancient.summary = "Cidades, impérios, leis, religião, comércio e cultura escrita criaram formas duradouras de autoridade e desigualdade, com Roma como laboratório central de cidadania, guerra, urbanismo, propaganda e transformação imperial.";
  ancient.stats = ["30 eventos", "10 fontes", "30 quizzes"];
  ancient.timeline = [...ancient.timeline, ...romanPremiumContent.timeline];
  ancient.events = [...ancient.events, ...romanPremiumContent.events];
  ancient.biographies = [...ancient.biographies, ...romanPremiumContent.biographies];
  ancient.concepts = [...ancient.concepts, ...romanPremiumContent.concepts];
  ancient.quiz = [...ancient.quiz, ...romanPremiumContent.quiz];
  ancient.source = [...ancient.source, ...romanPremiumContent.source];
  ancient.prompts = [...ancient.prompts, ...romanPremiumContent.prompts];
  ancient.curiosities = [...ancient.curiosities, ...romanPremiumContent.curiosities];
}

applyRomanPremiumContent();
