# Motion Experience - Historia Viva

Documento de referencia para definir a linguagem de motion design da app Historia Viva. O objectivo e transformar a experiencia de uma SPA/web app estatica numa travessia historica interactiva, cinematografica e guiada, sem perder clareza, performance ou acessibilidade.

Historia Viva deve fazer o utilizador sentir-se um investigador da Historia. Em momentos especificos, pode tambem activar fantasias secundarias: explorador, cronista, estratega e viajante temporal. A app nao deve parecer dashboard, LMS, Moodle, enciclopedia ou banco de quizzes. Deve parecer uma viagem por mundos historicos.

## 1. Motion Philosophy

O movimento em Historia Viva deve servir tres funcoes principais: narrativa, descoberta e imersao.

Motion nao deve existir apenas para decorar a interface. Cada transicao, reveal ou microinteraccao deve ajudar o utilizador a perceber onde esta, para onde vai e porque esse momento importa. O movimento deve guiar a atencao como uma camara: primeiro estabelece o contexto, depois revela o detalhe, e so no fim convida a accao.

A experiencia deve sentir-se premium, historica e cinematografica. Isto implica movimento contido, intencional e emocionalmente sincronizado com o tipo de conteudo. Uma entrada de era pode ser lenta e expansiva; uma resposta de quiz deve ser clara e reactiva; uma fonte historica deve ser estavel e quase museologica.

O principio central: a interface nao aparece, revela-se.

## 2. Emotional Motion Principles

### Landing screen

Deve mover-se como a abertura de um documentario historico. O fundo pode ter um movimento quase imperceptivel, com titulo a surgir lentamente e CTA a aparecer depois de o contexto emocional estar estabelecido. A sensacao deve ser convite, misterio e promessa.

### Escolha de era

Deve parecer uma sala de mapas, arquivo ou portal historico. Os cards de era entram em sequencia, nunca todos ao mesmo tempo. O hover deve sugerir profundidade e possibilidade, como se cada era fosse uma porta para um mundo.

### Hero transition da era

Deve ser o momento mais cinematografico. A seleccao de uma era activa uma aproximacao visual, com zoom subtil, fade de UI secundaria e revelacao do ambiente historico. Deve sentir-se como atravessar um limiar.

### Escolha de subpercurso

Deve transmitir agencia. As opcoes entram como caminhos disponiveis dentro da era, com movimento mais calmo do que a transicao heroica. O utilizador deve sentir que esta a escolher uma abordagem de investigacao.

### Timeline

Deve mover-se como uma descoberta progressiva, nao como uma lista. Marcos historicos podem surgir por ordem, com pequenas linhas, pontos ou pistas a aparecerem antes do texto completo. A sensacao deve ser orientacao e continuidade.

### Intro da licao

Deve preparar o tom. O titulo entra primeiro, seguido por subtitulo, contexto e CTA. A animacao deve ser lenta o suficiente para criar importancia, mas nao tao longa que atrase a aprendizagem.

### Experiencia de licao

Deve manter estabilidade. O conteudo principal deve ser legivel e calmo. Pequenos reveals podem marcar progresso, mudanca de capitulo ou descoberta, mas o texto historico nao deve estar em movimento constante.

### Quiz

Deve sentir-se como verificacao de hipoteses, nao como jogo arcade. As respostas devem reagir rapidamente, mas com sobriedade. Feedback correcto ou incorrecto deve ser claro, elegante e nao punitivo.

### Fonte historica

Deve parecer um encontro com um artefacto. A fonte pode surgir com fade lento, ligeiro depth zoom ou revelacao por camadas. O movimento deve reforcar respeito, foco e leitura atenta.

### Debate

Deve transmitir tensao argumentativa. A seleccao de lado pode ter um movimento firme, com destaque progressivo da posicao escolhida e reducao visual da alternativa. Evitar dramatismo exagerado.

### Missao

Deve parecer uma tarefa de campo. A entrada da missao pode combinar reveal contextual, destaque do objectivo e pequeno movimento de confirmacao quando o utilizador completa passos.

### Recompensa / XP

Deve ser satisfatoria, mas nao infantil. O ganho de XP pode subir com contagem suave, brilho subtil e reveal da proxima descoberta. Evitar explosoes, confetti excessivo ou bounce cartoon.

## 3. Motion Rules

### Preferir

- Fades lentos que criem atmosfera.
- Depth zoom subtil para entradas de era e momentos de descoberta.
- Parallax leve entre fundo, conteudo e elementos de primeiro plano.
- Reveal progressivo em grupos de informacao.
- Movimento contextual ligado ao significado do ecran.
- Transicoes cinematograficas entre momentos narrativos.
- Timing emocional: mais lento em contemplacao, mais rapido em decisao.
- Sequencias de entrada com hierarquia: ambiente, titulo, contexto, accao.

### Evitar

- Bounce excessivo.
- Animacoes cartoon.
- Efeitos SaaS genericos sem relacao narrativa.
- Popups bruscos.
- Elementos a aparecer todos ao mesmo tempo.
- Movimento rapido demais em ecrans contemplativos.
- Loops constantes em texto ou componentes de leitura.
- Transicoes que confundam a localizacao do utilizador.
- Efeitos que prejudiquem contraste, legibilidade ou performance.

## 4. Transition Language

### Landing -> escolha de era

Sensacao desejada: entrar no arquivo vivo da Historia.

Duracao aproximada: 700-1100ms.

Easing recomendado: `--ease-cinematic`.

Comportamento visual: o fundo da landing escurece ou desfoca ligeiramente, o titulo recua em profundidade e os cards de era entram em sequencia.

Entram primeiro: ambiente e estrutura da grelha. Entram por ultimo: CTAs ou detalhes secundarios dos cards.

### Escolha de era -> hero transition

Sensacao desejada: atravessar um portal historico.

Duracao aproximada: 900-1400ms.

Easing recomendado: `--ease-cinematic`.

Comportamento visual: o card seleccionado expande visualmente ou conduz um zoom de fundo; os restantes cards perdem foco e desaparecem com fade.

Entram primeiro: imagem/ambiente da era. Entram por ultimo: titulo heroico e chamada para continuar.

### Hero transition -> subpercurso

Sensacao desejada: aterrar dentro da era e escolher uma linha de investigacao.

Duracao aproximada: 600-900ms.

Easing recomendado: `--ease-soft`.

Comportamento visual: o hero estabiliza, reduz escala ligeiramente e abre espaco para os subpercursos surgirem por camadas.

Entram primeiro: contexto da era. Entram por ultimo: opcoes interactivas.

### Subpercurso -> timeline

Sensacao desejada: abrir o mapa temporal do caminho escolhido.

Duracao aproximada: 500-800ms.

Easing recomendado: `--ease-soft`.

Comportamento visual: o subpercurso escolhido permanece como ancora breve; a timeline desenha-se ou revela-se progressivamente.

Entram primeiro: linha temporal ou eixo principal. Entram por ultimo: detalhes dos marcos.

### Timeline -> licao

Sensacao desejada: aproximar uma descoberta especifica.

Duracao aproximada: 500-900ms.

Easing recomendado: `--ease-cinematic`.

Comportamento visual: o marco seleccionado ganha destaque, o restante percurso recua e o ecran da licao entra com fade e movimento vertical subtil.

Entram primeiro: titulo da licao. Entram por ultimo: CTA ou primeira accao.

### Licao -> quiz/fonte/debate/missao

Sensacao desejada: mudar de modo de investigacao.

Duracao aproximada: 360-700ms.

Easing recomendado: `--ease-soft`.

Comportamento visual: o conteudo de licao faz fade parcial, mantendo continuidade visual; o novo modulo entra como uma camada contextual, nao como popup brusco.

Entram primeiro: etiqueta ou titulo do modo. Entram por ultimo: controlos interactivos.

### Continuidade entre ecrans

Sensacao desejada: a app nunca deve parecer desligar entre dois momentos. Uma transicao deve preservar a atmosfera historica, mesmo quando o proximo ecran ainda esta a montar conteudo ou imagens.

Regra de implementacao: o shell principal deve ter sempre um fundo visual proprio, alinhado com a paleta da app, para evitar qualquer intervalo vazio ou preto. Quando possivel, o ecran anterior deve permanecer brevemente como camada de saida sem interaccao enquanto o novo ecran entra.

Duracao aproximada da camada de saida: 420-520ms.

Comportamento visual: o ecran novo fica acima da camada anterior; a camada anterior faz fade curto e e removida depois da transicao. Em `prefers-reduced-motion`, a saida deve ser praticamente imediata, mantendo apenas a proteccao contra fundo vazio.

Aplicacao nas licoes: `story-block`, `post-story-screen` e hero da licao tambem seguem esta regra. Como estes momentos sao trocados por render interno e nao por rota principal, a experiencia da licao deve criar uma camada temporaria do bloco anterior e manter um fundo proprio quente/cinematico enquanto o proximo bloco monta.

No quiz final da licao, o painel de resultado deve ficar visualmente afastado do bordo direito e das respostas. Quando o quiz esta completo, o painel de resultado pode ser ancorado em baixo, mas deve recuar cerca de 200px para a esquerda para respirar melhor dentro da composicao.

O painel das perguntas do quiz da licao tambem deve recuar cerca de 300px para a esquerda em desktop, mantendo a leitura mais central e evitando excesso de peso visual no lado direito. Este recuo deve posicionar o wrapper do painel de forma absoluta dentro do ecra do quiz, usando `right: calc(... + 300px)`, para nao depender da grelha interna nem de `transform`. Em layouts pequenos ou mobile, este recuo deve ser removido para preservar largura util e evitar overflow. Sempre que este posicionamento visual mudar, o link de `styles.css` deve receber um cache-buster para evitar CSS antigo em deploys estaticos.

### Missao -> recompensa

Sensacao desejada: conclusao reconhecida e progresso conquistado.

Duracao aproximada: 600-1000ms.

Easing recomendado: `--ease-cinematic`.

Comportamento visual: o estado de missao confirma-se, depois abre espaco para XP, selo ou descoberta desbloqueada. O movimento deve ser gratificante e contido.

Entram primeiro: confirmacao da missao. Entram por ultimo: proxima accao.

### Recompensa -> proxima descoberta

Sensacao desejada: continuar a viagem.

Duracao aproximada: 700-1200ms.

Easing recomendado: `--ease-cinematic`.

Comportamento visual: a recompensa estabiliza, a proxima pista surge em profundidade e o ecran conduz o olhar para a continuidade da jornada.

Entram primeiro: pista ou marco seguinte. Entram por ultimo: CTA de continuar.

## 5. Camera & Depth

A app deve usar uma pseudo-camara visual para evitar a sensacao de UI plana.

Fundos podem ter movimento muito subtil, especialmente em landing, hero de era e momentos de transicao. Este movimento deve ser lento, quase ambiental, e nunca competir com o conteudo.

A composicao deve separar camadas:

- Background: imagem, textura, mapa, ambiente ou gradiente historico.
- Midground: cards, linhas temporais, documentos, paineis de conteudo.
- Foreground: CTAs, estados activos, pistas, feedback.

O parallax deve ser moderado. Deve sugerir profundidade, nao transformar a app num efeito visual permanente. Em entradas de era, um zoom lento pode reforcar a sensacao de atravessar tempo e espaco. Em ecrans de leitura, a camara deve estabilizar.

Evitar movimentos de camara agressivos, escalas extremas ou deslocacoes que desorientem o utilizador.

## 6. Typography Motion

Titulos grandes devem entrar com fade e slight upward movement. O movimento deve ser curto, elegante e com easing suave, como se o texto emergisse do ambiente historico.

Subtitulos devem entrar com delay, normalmente 80-180ms depois do titulo. Devem reforcar a hierarquia narrativa sem competir com o titulo.

CTAs devem aparecer depois do texto principal, quando o utilizador ja recebeu contexto suficiente para agir. Em ecrans cinematograficos, o CTA pode ter um pequeno reveal adicional para sinalizar que a experiencia esta pronta para continuar.

Texto historico longo deve ser estavel, legivel e sem efeitos chamativos. Evitar letter-by-letter animation, shimmer, loops, distorcoes ou parallax aplicado ao corpo de texto. Em conteudo de leitura, o movimento deve marcar entrada, nao distrair durante a permanencia.

## 7. Environmental Motion

Efeitos atmosfericos podem reforcar a identidade historica quando usados com grande contencao.

Exemplos:

- Poeira em arquivos, ruinas ou mapas antigos.
- Brasas em contextos de guerra, fogo, metalurgia ou revolucao.
- Nevoeiro em travessias, mares, montanhas ou memoria historica.
- Luz tremeluzente em tochas, velas, oficinas ou interiores.
- Grao cinematografico para textura visual subtil.
- Particulas historicas discretas, como fragmentos de papel, cinza, areia ou luz.

Estes efeitos devem ser opcionais, leves e desligaveis quando necessario. Nunca devem prejudicar performance, contraste, legibilidade ou foco. Devem viver sobretudo no background, com opacidade baixa e baixa frequencia de movimento.

## 8. Interaction Feel

### Hover dos cards

Cards devem reagir com elevação subtil, aumento minimo de escala e mudanca de luz ou contraste. O hover deve sugerir que aquele caminho pode ser explorado.

### Clique em CTA

O clique deve ter resposta imediata: ligeira compressao, mudanca de estado e inicio claro da transicao seguinte. Evitar atrasos sem feedback.

### Seleccao de era

A era seleccionada deve ganhar profundidade e foco. As alternativas devem recuar visualmente antes da transicao heroica.

### Escolha de resposta no quiz

A resposta escolhida deve ficar imediatamente marcada. Feedback correcto ou incorrecto deve usar cor, icone e motion subtil. Evitar shaking agressivo ou celebracao excessiva.

### Seleccao de lado no debate

O lado seleccionado deve expandir ou ganhar presenca. O lado oposto deve reduzir intensidade sem desaparecer totalmente, preservando a ideia de tensao argumentativa.

### Conclusao de missao

A conclusao deve ter confirmacao clara, como uma marca, selo ou progressao visual. O movimento deve transmitir resolucao.

### Ganho de XP

XP deve subir com contagem suave, brilho discreto e possivel deslocacao para a zona de progresso. Deve parecer reconhecimento, nao slot machine.

## 9. Timing Scale

### Micro: 120-220ms

Usar para hovers, presses, toggles, seleccoes simples, estados de foco e feedback imediato.

### Standard: 240-420ms

Usar para modais leves, reveals de cards, entrada de blocos de conteudo, mudancas de estado e transicoes pequenas dentro do mesmo modo.

### Cinematic: 600-1200ms

Usar para transicoes entre ecrans principais, entrada de era, mudanca de modo narrativo, missao concluida e recompensa.

### Contemplative: 1200-2200ms

Usar apenas em momentos de abertura, hero de era, ambientes historicos e revelacoes que pedem pausa. Nunca usar para interaccoes frequentes ou tarefas repetidas.

## 10. Implementation Notes

- Criar classes reutilizaveis para padroes comuns: fade-in, reveal-up, depth-enter, staggered-list, cinematic-exit.
- Respeitar sempre `prefers-reduced-motion`, reduzindo ou removendo transicoes de camara, parallax e particulas.
- Evitar animar propriedades pesadas quando possivel. Preferir `opacity`, `transform` e `filter` com moderacao.
- Manter animacoes consistentes entre screens, para que a app pareca uma experiencia unica.
- Criar tokens CSS para duracao, easing, delays, distancias e escalas.
- Usar delays em cascata com limites. Stagger longo demais torna a app lenta.
- Separar motion estrutural de motion atmosferico, para ser facil desligar efeitos ambientais.
- Garantir que estados interactivos continuam perceptiveis sem motion.
- Testar em dispositivos modestos e ecrans pequenos.
- Evitar transicoes dependentes de medidas instaveis que causem layout shift.

### Transition Stability

- A app deve arrancar sempre no ecran inicial. No boot ou refresh, qualquer hash existente deve ser substituido por `#/home`, para que `index.html` seja sempre a porta de entrada da experiencia.
- Enquanto a rota inicial nao estiver resolvida, a shell visual deve permanecer escondida por um estado de boot, por exemplo `is-booting`. Isto impede que o HTML inicial mostre uma screen antiga antes de regressar ao ecran inicial.
- Depois do boot, as rotas programadas devem funcionar normalmente: cliques em CTAs, cards, era, timeline, quiz, fonte, debate e missao podem actualizar o hash e navegar para a screen correspondente.
- Durante a janela inicial de boot, qualquer navegacao programatica para fora da home deve ser bloqueada se nao tiver sido causada por uma intencao explicita do utilizador. Isto protege contra timers, hashes antigos ou estados atrasados que tentem empurrar a experiencia para a era por defeito alguns segundos depois.
- Evitar animacoes de entrada em fundos ou containers inteiros quando esses elementos tambem têm animacoes ambientais permanentes. A troca tardia entre uma animacao de entrada e uma animacao infinita pode causar flashes.
- A janela de entrada de rota deve ser curta, estrutural e local ao root visual activo, por exemplo `.is-route-entering` na screen/painel que entrou. Evitar classes globais no `body` para controlar entrada de screens cinematograficos.
- O estado local de entrada deve ser removido por `animationend` da animacao principal desse root quando possivel, com fallback inferior a 1s. Delays internos devem ficar abaixo de 160ms para nao haver reveals depois de a screen parecer pronta.
- Screens com imagens criticas, como a escolha de eras, devem pre-carregar esses assets e esperar pelo menos um ciclo de paint antes de activar a classe local de entrada. O screen pode ficar em estado `is-screen-preparing` enquanto estabiliza.
- Animacoes estruturais de entrada nao devem animar `filter` em containers com imagens grandes. Preferir `opacity` e `transform`, porque `filter` pode forcar repaint pesado no primeiro paint e causar flash.
- Pseudo-elementos ambientais (`::before`/`::after`) devem manter apenas loops ambientais estaveis. Nao devem receber animacoes de entrada atraves do estado de rota, para evitar restart visual, flashes ou troca abrupta entre entrada e loop infinito.
- `reveal-up` deve ser aplicado a blocos concretos de conteudo nos modos que precisam de entrada (`source`, `quiz`, `debate`, `mission`, `progress`) e nao a seletores globais como headers, heroes, portals, timeline ou lesson.
- Nos subpercursos, os cards nao devem fazer reveal/stagger automatico depois do ecran estar montado. O movimento dos cards deve limitar-se a hover, active e seleccao, para evitar desajustes tardios.
- Rotas globais, como `home`, `learn`, `journey` e `progress`, nao devem transportar automaticamente a era actual no hash. Isto evita que o ecran inicial ou a escolha de percursos parecam saltar directamente para a era por defeito.
- Rotas contextuais, como `portal`, `era`, `timeline`, `subpath`, `lesson`, `quiz`, `source`, `debate` e `mission`, podem receber era, licao ou subpercurso quando esse contexto e realmente necessario.
- No arranque, dados da era por defeito podem ser preparados em memoria, mas a app nao deve renderizar o hub, portal ou timeline dessa era antes de resolver a rota inicial. Preparar dados e diferente de navegar visualmente para uma era.
- A classe ou estado que activa motion de entrada deve ser aplicado depois de a nova screen estar activa, directamente no root visual dessa screen, nunca como trigger global de toda a pagina.
- Uma screen deve ser renderizada uma vez por transicao. Evitar chamadas duplicadas a render functions durante a mesma navegacao.
- Reveals de entrada devem depender de um estado de transicao real e local, por exemplo `.is-route-entering` no root activo da screen, e nao de simples re-render interno.
- `.feature-view.active` deve apenas controlar visibilidade. Nao deve ter animacao propria, porque esse trigger global pode repetir a entrada em renders internos e provocar flashes.
- A barra fixa de navegacao no topo nao deve voltar ao HTML. A navegacao primaria deve surgir por CTAs contextuais, cards e o botao `Voltar`, para preservar a sensacao de percurso.
- Actualizacoes dentro da mesma screen, como mudar zoom da timeline, escolher uma opcao ou actualizar progresso, devem usar microinteraccoes locais e nao repetir a animacao de entrada do ecran.
- Quando uma transicao termina, os elementos devem regressar a um estado estavel sem `animation-name` pendurado.

### Carousel & Wheel Behaviour

- Carrosseis horizontais, como escolha de era e subpercursos, podem converter roda vertical em scroll horizontal quando o cursor esta sobre a area.
- Durante esse scroll, hover e focus visual dos cards devem ser temporariamente neutralizados para evitar conflito entre cursor, hover e deslocacao.
- O scroll deve remover temporariamente scroll snap enquanto a roda esta activa, e repor esse comportamento logo depois.
- O gesto horizontal de trackpad deve continuar a funcionar naturalmente.
- O scroll nao deve bloquear a pagina quando o carrossel ja chegou ao inicio ou ao fim.
- Evitar animacoes de hover fortes em cards enquanto o utilizador esta a fazer scroll.

## 11. Suggested CSS Tokens

```css
:root {
  --motion-fast: 180ms;
  --motion-standard: 360ms;
  --motion-cinematic: 900ms;
  --motion-contemplative: 1600ms;

  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-exit: cubic-bezier(0.7, 0, 0.84, 0);

  --motion-delay-xs: 60ms;
  --motion-delay-sm: 120ms;
  --motion-delay-md: 220ms;

  --motion-rise-sm: 8px;
  --motion-rise-md: 16px;
  --motion-depth-scale: 1.035;
  --motion-card-scale: 1.015;
}
```

Exemplo de reducao de motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

# 12. Screen-by-Screen Motion Specification

## Landing

Purpose:
Estabelecer a fantasia principal: o utilizador esta prestes a investigar a Historia.

Emotion:
Misterio, convite, escala e curiosidade.

Motion In:
Fundo aparece primeiro com fade contemplativo. Titulo entra com fade + slight upward movement. Subtitulo entra com delay. CTA aparece por ultimo.

Motion During:
Movimento ambiental muito subtil no fundo, como camara lenta ou luz a respirar.

Motion Out:
Titulo e subtitulo recuam ligeiramente. CTA confirma clique. A escolha de era entra em profundidade.

Interaction Notes:
Hover do CTA deve ser suave e seguro, sem bounce. O utilizador deve sentir que vai iniciar uma jornada.

Avoid:
Hero estatico, entrada instantanea de todos os elementos, efeitos de marketing SaaS.

## Era Selection

Purpose:
Permitir escolher um mundo historico a explorar.

Emotion:
Possibilidade, descoberta e agencia.

Motion In:
Grelha ou lista entra por camadas. Cards surgem com stagger curto, primeiro imagem/ambiente, depois titulo e detalhe.

Motion During:
Hover com elevacao subtil, luz, depth e parallax minimo. Card activo pode manter uma presenca ligeiramente maior.

Motion Out:
Card seleccionado ganha foco. Cards nao seleccionados perdem opacidade e recuam. Inicia-se hero transition.

Interaction Notes:
Seleccao deve ser inequivoca e cinematografica, mas sem bloquear a percepcao de progresso.

Avoid:
Cards a saltar, hover exagerado, grelha com comportamento de dashboard.

## Era Hero Transition

Purpose:
Transformar a escolha de era numa entrada emocional no mundo historico.

Emotion:
Travessia, escala e imersao.

Motion In:
Ambiente da era expande com zoom lento. Texturas e camadas entram em profundidade. Titulo heroico surge depois do ambiente.

Motion During:
Movimento ambiental discreto: luz, grao, poeira ou nevoeiro conforme a era.

Motion Out:
Hero estabiliza e abre espaco para os subpercursos. O movimento abranda antes da proxima decisao.

Interaction Notes:
Pode ser menos interactivo durante a transicao, desde que haja feedback claro e duracao controlada.

Avoid:
Zoom agressivo, flash, cortes bruscos, excesso de particulas.

## Subpath Selection

Purpose:
Permitir escolher uma abordagem dentro da era.

Emotion:
Investigacao orientada, estrategia e escolha com significado.

Motion In:
Contexto da era permanece como ancora. Subpercursos entram em sequencia, com movimento mais calmo que a transicao heroica.

Motion During:
Hover revela detalhe adicional ou destaca a personalidade do caminho: explorador, cronista, estratega ou viajante temporal.

Motion Out:
Subpercurso escolhido torna-se a origem da timeline. Os restantes desaparecem com fade suave.

Interaction Notes:
O movimento deve reforcar que cada subpercurso e uma lente de investigacao.

Avoid:
Parecer menu de categorias generico ou selector de curso.

## Timeline

Purpose:
Mostrar progressao historica e orientar a proxima descoberta.

Emotion:
Continuidade, direccao e curiosidade.

Motion In:
Eixo principal aparece primeiro. Marcos surgem em ordem temporal. Texto entra depois dos pontos ou linhas.

Motion During:
Pequenos destaques podem guiar o proximo marco. O movimento deve ser discreto e nao competir com leitura.

Motion Out:
Marco seleccionado amplia ou ganha foco. O resto da timeline recua, mantendo continuidade contextual.

Interaction Notes:
Hover deve mostrar que cada marco e uma porta para uma licao, nao apenas um item.

Avoid:
Timeline plana como lista administrativa, marcadores todos a aparecer ao mesmo tempo.

## Lesson Intro

Purpose:
Preparar o utilizador para o tema da licao.

Emotion:
Foco, antecipacao e importancia historica.

Motion In:
Titulo entra primeiro. Subtitulo e contexto entram com delay. CTA aparece por ultimo.

Motion During:
Pouco ou nenhum movimento persistente. Pode haver fundo subtil se nao prejudicar leitura.

Motion Out:
Intro dissolve para a experiencia de licao com fade e movimento vertical suave.

Interaction Notes:
CTA deve sentir-se como passagem para a investigacao.

Avoid:
Efeitos chamativos sobre texto historico, entrada demasiado rapida.

## Lesson Experience

Purpose:
Entregar conteudo historico de forma imersiva, legivel e guiada.

Emotion:
Concentracao, descoberta e progresso.

Motion In:
Primeiro bloco de conteudo entra com reveal suave. Elementos secundarios aparecem depois.

Motion During:
Reveals pontuais para novas seccoes, pistas ou momentos de descoberta. Texto principal permanece estavel.

Motion Out:
Conteudo reduz opacidade ou recua para dar lugar a quiz, fonte, debate ou missao.

Interaction Notes:
Interaccoes devem confirmar progresso sem quebrar ritmo de leitura.

Avoid:
Scroll-jacking agressivo, animacoes permanentes em paragrafo, excesso de delays.

## Source

Purpose:
Apresentar uma fonte historica como artefacto de investigacao.

Emotion:
Respeito, detalhe e atencao.

Motion In:
Documento ou fonte aparece com fade lento e depth subtil. Metadados entram depois.

Motion During:
Leitura deve ser totalmente estavel. Destaques podem surgir progressivamente se orientarem analise.

Motion Out:
Fonte fecha com fade suave ou recua para o contexto da licao.

Interaction Notes:
Zoom, anotacoes ou destaques devem ser precisos e calmos.

Avoid:
Texturas em movimento por cima do texto, popups bruscos, efeitos de papel exagerados.

## Quiz

Purpose:
Testar hipoteses e consolidar conhecimento.

Emotion:
Clareza, decisao e feedback justo.

Motion In:
Pergunta entra primeiro. Opcoes surgem com stagger curto. Indicadores de progresso entram por ultimo.

Motion During:
Hover e seleccao rapidos. Feedback correcto/incorrecto aparece com transicao standard.

Motion Out:
Resultado estabiliza e conduz para explicacao, proxima pergunta ou proxima descoberta.

Interaction Notes:
Feedback deve ser imediato, acessivel e sem humilhar o erro.

Avoid:
Shake agressivo, confetti excessivo, efeitos arcade.

## Debate

Purpose:
Explorar perspectivas historicas e argumentacao.

Emotion:
Tensao, escolha e pensamento critico.

Motion In:
Contexto do debate entra primeiro. Lados ou posicoes aparecem depois, em equilibrio visual.

Motion During:
Seleccao de lado aumenta foco e presenca da escolha. Argumentos podem revelar-se em camadas.

Motion Out:
Conclusao ou consequencia entra com movimento firme e controlado.

Interaction Notes:
Motion deve comunicar peso da escolha, nao competicao superficial.

Avoid:
Animacoes de confronto exageradas, flashes, cores agressivas sem contexto.

## Mission

Purpose:
Dar ao utilizador uma tarefa activa de investigacao historica.

Emotion:
Proposito, foco e progressao.

Motion In:
Objectivo entra primeiro, depois passos e criterios de sucesso. Elementos de apoio aparecem por ultimo.

Motion During:
Cada passo concluido recebe confirmacao subtil. Progresso deve ser visivel e calmo.

Motion Out:
Missao completa com selo, marca ou transicao para recompensa.

Interaction Notes:
Microinteraccoes devem tornar a tarefa satisfatoria sem a infantilizar.

Avoid:
Popups de tarefa demasiado bruscos, checklist com motion excessivo.

## Reward

Purpose:
Reconhecer progresso e abrir a proxima etapa.

Emotion:
Satisfacao, conquista e continuidade.

Motion In:
Confirmacao aparece primeiro. XP, selo ou desbloqueio entram depois com movimento cinematografico curto.

Motion During:
Contagem de XP suave, brilho discreto e destaque da descoberta obtida.

Motion Out:
Recompensa estabiliza e a proxima descoberta surge como convite.

Interaction Notes:
Deve sentir-se premium e merecido, nao como gamificacao barata.

Avoid:
Confetti pesado, bounce cartoon, sons ou movimentos de casino.

## Progress

Purpose:
Mostrar avanco geral do utilizador na jornada historica.

Emotion:
Continuidade, dominio e orientacao.

Motion In:
Indicadores principais entram primeiro. Detalhes e historico aparecem depois.

Motion During:
Mudancas de progresso animam com suavidade. Barras ou numeros devem actualizar de forma legivel.

Motion Out:
Ao sair, o progresso deve recuar sem parecer perdido. A proxima accao deve ganhar foco.

Interaction Notes:
Estados de progresso devem ser claros tambem sem animacao.

Avoid:
Parecer dashboard analitico, excesso de metricas em movimento, animacoes que atrasam consulta rapida.
