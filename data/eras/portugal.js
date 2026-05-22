const era = {
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
  };

export default era;
