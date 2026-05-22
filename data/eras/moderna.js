const era = {
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
  };

export default era;
