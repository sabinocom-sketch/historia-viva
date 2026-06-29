const era = {
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
  };

const indicatedMedievalLessonsContent = {
  timeline: [
    ["476-1453", "Idade Medieval", "política", "A Idade Medieval foi um período longo e diverso, marcado por reinos, senhorios, cidades, mosteiros, comércio, guerra e religiões. A lição serve de entrada para evitar a ideia simplista de uma época imóvel ou atrasada."],
    ["481-987", "França medieval", "política", "A França medieval formou-se lentamente a partir do mundo franco, do poder carolíngio, de senhorios locais e da afirmação capetíngia. O reino não nasceu pronto: foi construído por alianças, guerras, dinastias e administração."],
    ["séc. V-VIII", "Os Francos", "política", "Os Francos criaram um dos reinos germânicos mais duradouros após a queda do Império Romano do Ocidente. A conversão de Clóvis e a ligação à Igreja ajudaram a legitimar a autoridade régia."],
    ["768-814", "Carlos Magno", "política", "Carlos Magno expandiu o reino franco, foi coroado imperador em 800 e promoveu reformas religiosas, administrativas e culturais. O seu império não era um Estado moderno, mas reforçou a ideia de império cristão ocidental."],
    ["séc. IX-X", "Os vikings e a Normandia", "guerra", "Ataques e fixações vikings pressionaram o reino franco e levaram à formação da Normandia. A integração de antigos guerreiros nórdicos mostra que invasão, negociação e adaptação podiam coexistir."],
    ["séc. IX-XIII", "O feudalismo", "política", "O feudalismo deve ser usado como conceito flexível para relações de terra, fidelidade, proteção e dependência. Variava muito por região e não explica sozinho toda a sociedade medieval."],
    ["1337-1453", "A Guerra dos Cem Anos", "guerra", "A Guerra dos Cem Anos opôs as monarquias francesa e inglesa em disputas dinásticas, fiscais e territoriais. O conflito fortaleceu identidades políticas e exigiu novos recursos militares e administrativos."],
    ["987-1453", "O nascimento da França", "política", "O nascimento da França foi um processo de centralização régia, expansão territorial, justiça, fiscalidade e memória dinástica. A autoridade capetíngia cresceu lentamente sobre poderes locais muito fortes."],
    ["séc. V-1485", "Inglaterra medieval", "política", "A Inglaterra medieval passou por reinos anglo-saxónicos, invasões vikings, conquista normanda, Magna Carta, Parlamento e guerras dinásticas. A monarquia inglesa formou-se entre conquista, negociação e resistência aristocrática."],
    ["séc. V-1066", "A Inglaterra anglo-saxónica", "cultura", "A Inglaterra anglo-saxónica reunia reinos, cristianização, mosteiros, leis e pressão viking. A sua cultura combinou tradições germânicas, latinas e cristãs antes da conquista normanda."],
    ["séc. VIII-XI", "Os Vikings na Inglaterra", "guerra", "Os Vikings atacaram, comerciaram e estabeleceram-se em partes da Inglaterra, como o Danelaw. A presença nórdica transformou guerra, povoamento, língua e poder regional."],
    ["1066", "A Conquista normanda", "guerra", "A vitória de Guilherme da Normandia em Hastings mudou a aristocracia, a administração e a cultura política inglesa. Castelos, domínios e o Domesday Book reforçaram o controlo régio."],
    ["1215", "A Magna Carta", "política", "A Magna Carta nasceu de conflito entre o rei João e os barões. Limitou práticas régias e tornou-se símbolo posterior do governo limitado, embora beneficiasse sobretudo elites."],
    ["1348-1351", "A Peste Negra", "cultura", "A Peste Negra reduziu populações, alterou trabalho, agravou medo religioso e abalou comunidades. Também abriu disputas sobre salários, mobilidade e autoridade senhorial."],
    ["1337-1453", "A guerra dos cem anos em Inglaterra", "guerra", "Na Inglaterra, a Guerra dos Cem Anos exigiu impostos, propaganda régia e campanhas militares. O conflito trouxe glória para alguns nobres, mas custos sociais e políticos prolongados."],
    ["1455-1487", "A Guerra das Rosas", "guerra", "A Guerra das Rosas foi uma disputa entre casas aristocráticas pelo trono inglês. Enfraqueceu linhagens nobres e abriu caminho à afirmação Tudor."],
    ["séc. XI-XV", "Itália medieval", "cultura", "A Itália medieval foi marcada por cidades comerciais, papado, comunas, bancos, universidades e rivalidades regionais. A fragmentação política não impediu inovação económica e cultural."],
    ["séc. XI-XV", "Génova, Veneza e Pisa", "cultura", "Génova, Veneza e Pisa construíram poder marítimo através de comércio, frotas, colónias e rivalidades mediterrânicas. As cidades italianas ligaram Europa, Bizâncio, Islão e rotas asiáticas."],
    ["séc. XIII-XV", "Florença e os banqueiros", "cultura", "Florença cresceu com manufaturas, crédito, câmbio e famílias bancárias. A riqueza financeira reforçou cultura urbana, patronato artístico e conflitos políticos internos."],
    ["754-1870", "Os Estados Papais", "religião", "Os Estados Papais mostram que o papado era poder espiritual e territorial. O papa governava terras, negociava alianças e disputava autoridade com imperadores, cidades e monarquias."],
    ["séc. XI-XIV", "As comunas italianas", "política", "As comunas italianas afirmaram autonomia urbana, magistraturas locais e participação de elites mercantis. A liberdade comunal convivia com facções, exclusões e domínio oligárquico."],
    ["séc. XI-XIV", "Direito e cultura medieval", "cultura", "O renascimento jurídico, as universidades e a circulação de manuscritos transformaram a cultura medieval. O direito romano estudado em Bolonha ajudou reis, cidades e Igreja a pensar autoridade."],
    ["962-1806", "Sacro Império Romano-Germânico", "política", "O Sacro Império reuniu reinos, principados, bispados e cidades sob uma autoridade imperial negociada. O imperador dependia de alianças e não governava como monarca centralizado moderno."],
    ["962", "A origem do Sacro Império", "política", "A coroação de Otão I em 962 reforçou a ideia de império cristão no Ocidente. A origem do Sacro Império liga tradição carolíngia, Igreja e poder germânico."],
    ["1077-1122", "Canossa e a luta entre imperador e papa", "religião", "A ida de Henrique IV a Canossa simboliza a disputa das investiduras: quem podia nomear bispos e controlar autoridade religiosa? O conflito mostrou a tensão entre poder imperial e papado."],
    ["séc. XIII-XV", "Um império de muitos estados", "política", "O Sacro Império tornou-se uma rede de muitos principados, cidades livres, territórios eclesiásticos e poderes locais. A unidade imperial dependia de negociação constante."],
    ["séc. XII-XV", "As cidades imperiais", "cultura", "As cidades imperiais tinham privilégios diretos do imperador e grande autonomia. Comércio, artesanato, muralhas e conselhos urbanos fizeram delas polos de poder regional."],
    ["séc. XIII-XV", "A Liga Hanseática", "cultura", "A Liga Hanseática uniu cidades mercantis do Norte da Europa em defesa de rotas, privilégios e comércio. Mostra como cidades podiam cooperar sem formar um Estado único."],
    ["1356", "Os príncipes eleitores", "política", "A Bula de Ouro de 1356 confirmou o papel dos príncipes eleitores na escolha do imperador. A eleição reforçou a natureza negociada e aristocrática do Sacro Império."],
    ["séc. IV-VI", "Invasões bárbaras", "guerra", "As chamadas invasões bárbaras foram migrações, entradas militares, alianças e assentamentos de povos diversos no mundo romano. O termo deve ser usado com cuidado, porque simplifica processos complexos."],
    ["séc. VII", "O amanhecer do Islamismo", "religião", "O Islão surgiu na Arábia do século VII e rapidamente formou uma comunidade religiosa e política. A Hégira, o Corão e os primeiros califados mudaram o Mediterrâneo e o Próximo Oriente."],
    ["séc. IV-VI", "As migrações", "guerra", "As migrações tardo-antigas envolveram povos godos, vândalos, suevos, burgúndios, hunos e outros grupos. Pressão militar, procura de terras, alianças e crise romana combinaram-se de formas diferentes."],
    ["séc. IV-V", "Os Hunos", "guerra", "Os Hunos pressionaram povos e fronteiras romanas, contribuindo para deslocações e conflitos. O seu império foi breve, mas teve impacto forte na política europeia do século V."],
    ["406", "A passagem do Reno", "guerra", "A travessia do Reno por vândalos, suevos e alanos simboliza a fragilidade das fronteiras romanas ocidentais. O episódio abriu caminho a novos reinos dentro do antigo espaço imperial."],
    ["410", "O saque de Roma", "guerra", "O saque de Roma pelos visigodos de Alarico teve enorme impacto simbólico. A cidade já não era capital política efetiva, mas continuava a representar a memória do império."],
    ["434-453", "Átila, o flagelo", "guerra", "Átila liderou uma confederação huna que pressionou Oriente e Ocidente. A sua imagem como flagelo nasceu de medo, propaganda e memória cristã posterior."],
    ["séc. IX-XV", "Rússia medieval", "política", "A Rússia medieval passa pela Rus de Kiev, cristianização ortodoxa, fragmentação, domínio mongol e ascensão de Moscovo. É uma história de rotas, rios, principados e influência euroasiática."],
    ["séc. VI-X", "Os nómadas orientais", "guerra", "Povos nómadas das estepes influenciaram comércio, guerra e política eslava oriental. As estepes não eram vazio: eram espaços de circulação, poder e contacto."],
    ["séc. IX-X", "Os viquingues do leste", "cultura", "Varegues e outros grupos nórdicos navegaram rios orientais, ligando Báltico, mar Negro e Bizâncio. A sua presença misturou comércio, tributo, guerra e formação política."],
    ["882-1240", "A Rússia de Kiev", "política", "A Rus de Kiev articulou principados, rotas fluviais e contactos com Bizâncio. Kiev tornou-se centro de poder, comércio e cristianização eslava oriental."],
    ["988", "A conversão ao cristianismo", "religião", "A conversão de Vladimir ao cristianismo ortodoxo ligou a Rus de Kiev a Bizâncio. A religião trouxe escrita, liturgia, arte e novas formas de legitimação política."],
    ["séc. XII-XIII", "A fragmentação da Rus", "política", "A Rus de Kiev fragmentou-se em principados rivais, com disputas dinásticas e centros regionais fortes. Essa divisão aumentou vulnerabilidades diante da expansão mongol."],
    ["1237-1240", "A invasão mongol", "guerra", "A invasão mongol destruiu cidades e submeteu principados russos à Horda Dourada. O domínio mongol reorganizou tributos, diplomacia e equilíbrios entre príncipes."],
    ["séc. XIV-XV", "O crescimento de Moscovo", "política", "Moscovo cresceu através de posição estratégica, cobrança de tributos, alianças com a Horda e apoio religioso. A cidade tornou-se centro de reunificação política gradual."],
    ["séc. VIII-XI", "Vikings", "cultura", "Os Vikings foram navegadores, comerciantes, guerreiros, colonizadores e contadores de sagas da Escandinávia medieval. A sua história inclui ataques, mas também redes comerciais e integração cristã."],
    ["séc. VIII", "As origens dos Vikings", "cultura", "As origens vikings ligam sociedades escandinavas, chefias locais, agricultura, navegação e busca de riqueza. O movimento viking nasceu de oportunidades marítimas e transformações sociais."],
    ["séc. VIII-XI", "Os drakares", "ciência", "Os navios vikings, como os drakares, combinavam leveza, velocidade e capacidade de navegar rios e mares. A tecnologia naval tornou possíveis ataques rápidos, comércio e colonização distante."],
    ["c. 950-1003", "Erik, o Vermelho", "cultura", "Erik, o Vermelho, é associado à colonização nórdica da Gronelândia. A sua história mostra ambição, exílio, navegação atlântica e adaptação a ambientes difíceis."],
    ["séc. VIII-XI", "A sociedade viking", "política", "A sociedade viking incluía chefes, homens livres, mulheres com responsabilidades domésticas e económicas, dependentes e escravizados. Assembleias locais e reputação tinham grande peso social."],
    ["séc. VIII-XI", "A religião viking", "religião", "A religião nórdica incluía deuses como Odin, Thor e Freyja, rituais, mitos e memória oral. A cristianização transformou crenças e redes políticas escandinavas."],
    ["séc. X-XI", "O fim da Era Viking", "política", "A Era Viking terminou gradualmente com cristianização, fortalecimento de monarquias escandinavas e integração europeia. Não foi desaparecimento, mas transformação social e política."]
  ],
  quiz: [
    { type: "escolha_múltipla", difficulty: "fácil", question: "Porque é que a Idade Medieval não deve ser vista como um período imóvel?", options: ["Porque teve mudanças políticas, urbanas, religiosas e comerciais profundas", "Porque durou apenas dez anos", "Porque não existiam cidades"], answer: 0, explanation: "A Idade Medieval foi diversa e dinâmica, com transformações em reinos, cidades, comércio, cultura e religião." },
    { type: "causas_consequências", difficulty: "média", question: "Qual foi uma consequência da ligação entre Clóvis, os Francos e a Igreja?", options: ["Reforço da legitimidade do poder franco", "Fim imediato do cristianismo", "Criação da imprensa"], answer: 0, explanation: "A conversão e a relação com a Igreja ajudaram a legitimar a realeza franca num mundo pós-romano." },
    { type: "escolha_múltipla", difficulty: "média", question: "A Conquista normanda de 1066 mudou sobretudo...", options: ["A aristocracia, a administração e o controlo régio inglês", "A astronomia maia", "O fim do comércio mediterrânico"], answer: 0, explanation: "Depois de Hastings, a elite normanda reorganizou terras, castelos e administração em Inglaterra." },
    { type: "verdadeiro_falso", difficulty: "média", question: "Verdadeiro ou falso: a Magna Carta criou democracia universal.", options: ["Verdadeiro", "Falso"], answer: 1, explanation: "A Magna Carta limitou práticas régias, mas beneficiava sobretudo elites e ganhou significado constitucional mais tarde." },
    { type: "associação", difficulty: "média", question: "A Liga Hanseática associa-se principalmente a...", options: ["Cooperação comercial entre cidades do Norte da Europa", "Cruzadas no Levante", "Unificação de Itália"], answer: 0, explanation: "A Hansa reunia cidades mercantis para defender privilégios, rotas e interesses comerciais." },
    { type: "cronológica", difficulty: "difícil", question: "Qual sequência inglesa está correta?", options: ["Anglo-saxões > Conquista normanda > Magna Carta > Guerra das Rosas", "Magna Carta > Anglo-saxões > Guerra das Rosas > Hastings", "Guerra das Rosas > Conquista normanda > Anglo-saxões > Magna Carta"], answer: 0, explanation: "A sequência passa dos reinos anglo-saxónicos para 1066, depois 1215 e por fim o conflito dinástico do século XV." },
    { type: "causas_consequências", difficulty: "difícil", question: "Porque Canossa é importante para entender o Sacro Império?", options: ["Mostra a disputa entre imperador e papa pela autoridade sobre a Igreja", "Marca o fim dos Vikings", "Inicia a Guerra das Rosas"], answer: 0, explanation: "Canossa simboliza a Querela das Investiduras e a tensão entre poder espiritual e poder imperial." },
    { type: "verdadeiro_falso", difficulty: "média", question: "Verdadeiro ou falso: as invasões bárbaras foram apenas ataques sem migração, negociação ou integração.", options: ["Verdadeiro", "Falso"], answer: 1, explanation: "Foram processos variados de migração, guerra, aliança, instalação e formação de reinos." },
    { type: "escolha_múltipla", difficulty: "média", question: "A conversão da Rus de Kiev ao cristianismo aproximou-a sobretudo de...", options: ["Bizâncio e do cristianismo ortodoxo", "Cartago púnica", "Atenas clássica"], answer: 0, explanation: "A conversão de Vladimir ligou a Rus à tradição bizantina, com impacto religioso, cultural e político." },
    { type: "escolha_múltipla", difficulty: "média", question: "O que tornava os navios vikings tão eficazes?", options: ["Velocidade, leveza e capacidade de navegar mares e rios", "Motores a vapor", "Blindagem de ferro industrial"], answer: 0, explanation: "A tecnologia naval nórdica permitia mobilidade rápida, ataques, comércio e colonização." },
    { type: "causas_consequências", difficulty: "difícil", question: "O fim da Era Viking deve ser visto como...", options: ["Transformação por cristianização e fortalecimento de monarquias", "Desaparecimento total dos escandinavos", "Resultado de uma única batalha"], answer: 0, explanation: "As sociedades escandinavas integraram-se em reinos cristãos europeus, mudando formas de poder e expansão." },
    { type: "escolha_múltipla", difficulty: "média", question: "A Peste Negra alterou relações de trabalho porque...", options: ["Reduziu população e tornou a mão de obra mais disputada", "Aumentou imediatamente a população", "Eliminou toda a agricultura"], answer: 0, explanation: "A queda demográfica mexeu em salários, obrigações, mobilidade e tensões entre senhores e trabalhadores." }
  ],
  source: [
    {
      text: "O rei concede privilégios, mas os barões exigem que costumes e liberdades sejam respeitados.",
      origin: "Síntese inspirada em pactos políticos medievais como a Magna Carta.",
      purpose: "Ajuda a estudar negociação entre monarquia e elites.",
      limits: "Estas liberdades não eram direitos universais e excluíam grande parte da população."
    },
    {
      text: "Na cidade portuária chegam sal, tecidos, peles, metais e notícias de mares distantes.",
      origin: "Síntese baseada em registos comerciais de cidades italianas e hanseáticas.",
      purpose: "Relaciona comércio, autonomia urbana e circulação cultural.",
      limits: "Registos mercantis privilegiam quem comprava, vendia e pagava taxas."
    },
    {
      text: "O príncipe ajoelha, o papa espera, e todos percebem que nomear bispos também é governar.",
      origin: "Síntese inspirada no episódio de Canossa e na Querela das Investiduras.",
      purpose: "Mostra como religião e poder político estavam profundamente ligados.",
      limits: "A cena tornou-se símbolo e foi reinterpretada por cronistas com interesses diferentes."
    },
    {
      text: "O navio leve sobe o rio, atravessa o mar e leva guerreiros, mercadores e histórias.",
      origin: "Síntese baseada em arqueologia naval e fontes nórdicas medievais.",
      purpose: "Permite estudar tecnologia, mobilidade e expansão viking.",
      limits: "As sagas foram registadas mais tarde e misturam memória, literatura e identidade."
    }
  ],
  concepts: [
    ["Danelaw", "Região da Inglaterra com forte presença e influência nórdica, marcada por direito e povoamento escandinavo."],
    ["Querela das Investiduras", "Conflito entre papado e imperadores sobre a nomeação de bispos e a autoridade sobre a Igreja."],
    ["Liga Hanseática", "Rede de cidades mercantis do Norte da Europa que cooperavam para proteger comércio e privilégios."],
    ["Rus de Kiev", "Formação política eslava oriental ligada a rotas fluviais, contactos nórdicos e influência bizantina."],
    ["Drakar", "Tipo de navio viking longo, rápido e flexível, usado em guerra, viagens e demonstração de estatuto."]
  ],
  prompts: [
    "Compara a formação da França com a formação da Inglaterra medieval: que papel tiveram guerra e negociação?",
    "Como é que cidades italianas e hanseáticas mostram uma Idade Média comercial e urbana?",
    "Porque é que o Sacro Império deve ser entendido como império negociado e não como Estado centralizado?",
    "As invasões bárbaras foram rutura, integração ou transformação? Defende com exemplos.",
    "Explica como rios, mares e navios moldaram Vikings e Rus de Kiev."
  ],
  curiosities: [
    "O Domesday Book, encomendado por Guilherme, registou terras e recursos ingleses com grande detalhe para fins fiscais e políticos.",
    "Veneza e Génova competiram ferozmente pelo comércio mediterrânico e por posições estratégicas no Oriente.",
    "A Bula de Ouro de 1356 tornou a eleição imperial mais formal e reforçou os príncipes eleitores.",
    "A palavra viking descreve uma atividade ou expedição antes de ser uma identidade nacional fixa.",
    "A cristianização da Escandinávia e da Rus mudou escrita, arte, alianças e legitimidade política."
  ]
};

era.stats = ["61 eventos", "9 fontes", "22 quizzes"];
era.timeline = [...era.timeline, ...indicatedMedievalLessonsContent.timeline];
era.quiz = [...era.quiz, ...indicatedMedievalLessonsContent.quiz];
era.source = [...era.source, ...indicatedMedievalLessonsContent.source];
era.concepts = [...era.concepts, ...indicatedMedievalLessonsContent.concepts];
era.prompts = [...era.prompts, ...indicatedMedievalLessonsContent.prompts];
era.curiosities = [...era.curiosities, ...indicatedMedievalLessonsContent.curiosities];

export default era;
