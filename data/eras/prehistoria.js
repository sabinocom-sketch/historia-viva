const era = {
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
  };

export default era;
