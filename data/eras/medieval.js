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

export default era;
