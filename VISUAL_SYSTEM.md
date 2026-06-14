# Historia Viva - Visual System

Fonte de verdade para a linguagem visual reutilizavel da Historia Viva.

Este documento existe para evitar screens bonitas isoladas. Cada novo fundo, textura, animacao, icone ou detalhe de UI deve reforcar um sistema visual coerente, leve e reutilizavel.

## Principio Central

A app deve parecer uma viagem cinematografica pela Historia, mas o sistema deve continuar simples de manter.

Prioridade:

```txt
clareza narrativa
atmosfera consistente
assets reutilizaveis
performance mobile
```

Nunca adicionar uma imagem so porque fica bonita. Cada asset precisa de uma funcao: criar identidade de era, melhorar leitura, sinalizar progresso, dar profundidade ou apoiar uma transicao.

## Camadas Visuais

### Hero Backgrounds

Uso:

- entrada de era;
- portal de subpercurso;
- intro de licao;
- transicoes principais.

Regras:

- podem ser detalhados;
- devem identificar imediatamente a era ou subpercurso;
- precisam de area segura para texto;
- devem existir em enquadramento desktop e, quando necessario, mobile;
- nao devem competir com o CTA.

### Story Backgrounds

Uso:

- Story Blocks;
- Reflection Moment;
- Assimilation;
- Reality Bridge;
- Critical Lens;
- Challenge;
- Reward;
- Next Lesson Teaser.

Regras:

- menos detalhe do que hero backgrounds;
- leitura sempre acima da imagem;
- textura, luz e profundidade importam mais do que objetos complexos;
- devem aguentar texto grande e controlos no fundo do ecran;
- devem ser reutilizados por subpercurso antes de criar imagens por screen.

### Layer Backgrounds

Separar mentalmente:

- base: cor, textura, imagem principal;
- midground: silhuetas, rocha, coluna, pergaminho, arquitectura;
- particles: poeira, brasas, fumo, neve, luz;
- overlays: gradientes de leitura e vinhetas;
- lighting: glow, feixe de luz, reflexo, sombra.

Esta separacao permite parallax, motion subtil e recombinacao sem produzir uma imagem unica para cada screen.

## Linguagem Por Era

### Pre-Historia

Sensacao:

- sobrevivencia;
- materia bruta;
- descoberta;
- noite, fogo, pedra, terra e abrigo.

Materiais:

- pedra;
- cinza;
- madeira queimada;
- pigmento ocre;
- pele, osso, barro, poeira.

Paleta:

- fundo escuro mineral: `#101413`;
- terra profunda: `#2c241b`;
- fogo/ambar: `#f1c779`;
- ocre: `#c95d3e`;
- verde natural: `#8fa36a`;
- azul frio glacial: `#9fd6df`.

Iluminacao:

- glow quente e lateral;
- fogo como ponto de foco;
- sombras suaves;
- contraste moderado para preservar leitura.

Motion:

- lento;
- organico;
- respiracao subtil;
- particulas discretas;
- nada mecanico ou agressivo.

UI:

- escura, translucida e material;
- bordas simples;
- foco no texto grande;
- CTAs quentes e claros.

Estado atual:

- Pre-Historia e a era-piloto do sistema visual.
- Paleolitico, Mesolitico e Revolucao Neolitica ja usam story backgrounds de subpercurso.
- O Story Block de ferramentas usa sprites PNG transparentes de silex lascado renderizados como `<picture>`/`<img>` com `object-fit: contain`; o CSS especifico vive em `styles/05-lesson-experience.css` sob `data-prehistory-artifact="flint"`.
- A fotografia-fonte do silex fica versionada em `assets/silex-original.png`; os sprites finais sao `assets/silex-mobile.png` (512w) e `assets/silex-desktop.png` (1024w). Ao regenerar, remover totalmente fundo branco, halos claros e sombras embutidas antes de atualizar o cache-buster da URL.
- Em runtime, o silex deve carregar por `<picture>`/`srcset` usando os PNGs transparentes versionados (`?v=...`). Sempre subir o valor de `?v=` quando o pixel do sprite muda, porque os assets em `assets/` sao servidos com cache longo.
- Artefactos pre-historicos realistas devem ter sombra de contacto, sombra projetada curta na parede, luz quente lateral e contraste mineral suficiente para mostrar lascas e fraturas; evitar shapes low-poly, icones abstratos ou pedra cinzenta uniforme.
- O silex deve ler como pedra lascada, nao como objeto escuro com textura aplicada: usar contraste local, reflexos frios/acinzentados nas faces partidas e um rim light quente vindo da fogueira inferior esquerda.
- Sprites fotograficos precisam de integracao ambiental sem destruir fidelidade: preservar cor, nitidez, fraturas e microtextura no PNG. Para o silex, nao aplicar `drop-shadow`, halos, glows ou filtros de cor no CSS; qualquer sombra estranha ou borda clara deve ser removida do sprite, nao compensada com efeitos.
- A composicao do silex deve preservar impacto sem monopolizar a cena: no Story Block de ferramentas, manter o box responsivo (`clamp(252px, 27.3vw, 421px)` desktop/tablet e `clamp(211px, 61.6vw, 297px)` mobile), mas ampliar o sprite com `scale(1.34)` no desktop e `scale(1.2)` no mobile para voltar a ser o artefacto principal sem colidir com o texto. O sprite deve ficar ligeiramente contido com `brightness(.96) saturate(.92)` para evitar que a luz inferior esquerda se destaque mais do que a parede.
- A orientacao final do silex usa `rotate(-14deg)` em desktop e mobile para deixar a ponta obliqua sem parecer demasiado vertical. A sombra do artefacto deve ser o filtro leve `drop-shadow(0 8px 12px rgba(0,0,0,.18))`, sem pseudo-elemento de contacto ativo para evitar duplicacao visual.
- Para melhorar a separacao entre pedra e titulo, o silex fica ligeiramente deslocado para a esquerda: offset adicional de `30px` no desktop e `24px` no mobile, mantendo escala, rotacao e sombra.
- O titulo narrativo da Pre-Historia usa `"Amatic SC", cursive`, `font-weight: 700`, `font-size: clamp(2rem, 4vw, 4.5rem)`, `line-height: 0.95`, `letter-spacing: -0.5px`, textura `assets/textures/ochre-texture.webp` recortada no texto, `-webkit-text-stroke: 0.4px rgba(90,36,18,.35)`, sombras minimas (`0 0 1px rgba(90,20,10,.55)`, `0 0 2px rgba(90,20,10,.35)`, `0 1px 1px rgba(0,0,0,.25)`) para dar massa de pigmento, `filter: brightness(1.08) saturate(1.08) contrast(1.14)` e `margin-top: 27px` para descer no fluxo sem comprimir o paragrafo. Titulo e corpo devem partilhar a mesma medida de coluna (`--prehistory-copy-measure`) e alinhar pelo inicio da coluna para nunca parecerem desalinhados entre si. No desktop, manter respiro claro entre titulo e texto (`margin-bottom` positivo) para evitar que a leitura pareca colada ao cabecalho. A linha sob o titulo deve comecar no mesmo ponto do inicio do titulo, ser escura, discreta e ligeiramente mais espessa (`height: .16em`, `opacity: .45`) no desktop; no mobile, remover esse traco para poupar altura e limpar a leitura. O corpo do texto pintado usa `"Patrick Hand", cursive`, `font-size: clamp(1rem, 1.25vw, 1.35rem)`, `line-height: 1.4`, uma unica cor quente de leitura `#D8BC8A` e `text-shadow: 0 1px 2px rgba(0,0,0,.35)`. As linhas reveladas dentro do paragrafo devem herdar esta cor, sem alternancias por linha. A etiqueta "Momento X de Y" nao aparece acima do titulo porque o progresso ja comunica a posicao no bloco.
- O corpo narrativo dos Story Blocks pre-historicos deve ser um unico paragrafo centrado, com largura util entre 70% e 75% do painel e limite em `ch`. Os fragmentos usados pela animacao de revelacao permanecem `inline`, sem largura propria, mascara ou `clip-path`, para que o browser calcule as quebras de linha no paragrafo completo e nunca deixe palavras isoladas afastadas do restante texto.
- Texto narrativo pre-historico deve parecer pigmento aplicado na parede: usar cor ocre/barro, mascara irregular, sombras subtis, `mix-blend-mode` quando legivel e animacao de revelacao apenas no story block ativo.
- A cor do texto pintado deve priorizar leitura antes do efeito: usar ocre claro/barro claro para o corpo, reservar vermelhos escuros apenas como variacao subtil, e validar contraste em desktop e mobile.
- Luz de fogueira pode ter flicker e poeira/cinza discretos em pseudo-elementos, mas deve respeitar `prefers-reduced-motion` e animar apenas `opacity`, `transform` ou `background-position`.
- O progresso da licao pre-historica deve aparecer desde o primeiro Story Block ate ao ecrã que encaminha para a proxima licao, tanto em desktop como em mobile; a unica excecao e o ecrã intro da licao, que permanece sem barra.
- O progresso deve ser uma barra unica com a percentagem no final da barra; evitar rotulos superiores, escalas de 0/25/50/75/100 ou marcadores redundantes. A barra usa `assets/textures/progress-bar-texture.jpg` como textura de pedra. A trilha deve parecer um sulco talhado na parede da gruta, com altura entre 16 e 18px no desktop e mais compacta no mobile, raio baixo, sombras internas fortes, fissuras visiveis e textura em proporcao natural (`background-size` com largura + `auto`, sem esticar). A trilha vazia precisa de brilho e contraste suficientes para a pedra continuar legivel mesmo sob sombra. O preenchimento reutiliza a mesma textura com sobreposicao ocre/dourada e brilho quente subtil de fogueira, preservando contraste com a percentagem e evitando qualquer leitura de capsula HTML moderna.
- Os Post Story Blocks pre-historicos continuam a mesma linguagem material dos Story Blocks, mas mudam de funcao: deixam de ser cena vivida e passam a ser arquivo de investigacao. Resumo, reflexao, debate, quiz, recompensa e teaser devem usar fundo escuro mineral, textura de parede, superficies translucidas como placas/vestigios, texto manuscrito quente e botoes de pedra/ocre. Evitar cartoes claros, botoes genericos de dashboard ou quebras para uma estetica de ficha escolar; a transicao deve parecer "vivi a cena -> interpretei os vestigios".
- Nos Post Story Blocks, `teal` nao deve dominar a Pre-Historia. A leitura principal usa ocre claro/barro (`--post-archive-ink`), titulos com pigmento quente e CTAs dourados/ocre. Estados de quiz podem usar verde/brick para correto/errado, mas sempre sobre a superficie material escura.
- Titulos grandes dos Post Story Blocks nao devem usar vermelho escuro puro, porque ganham peso tipografico excessivo sobre parede iluminada. Usar pigmento ocre/dourado com textura, stroke minimo e sombra quente. Os botoes destes ecras devem reutilizar a mesma textura e relevo dos Story Blocks pre-historicos: secundario como pedra cinzenta polida, primario como pedra ocre/dourada, ambos com altura, raio irregular, hover e pressed consistentes.
- O quiz post-story usa escala tipografica mais compacta do que os Story Blocks. Em desktop, quando o quiz esta completo, pergunta, opcoes, feedback, resultado e acoes devem ficar em zonas separadas sem sobreposicao. Em mobile, o estado completo deve resumir pergunta + feedback + resultado e esconder a grelha de opcoes respondidas para evitar texto vertical, cartoes demasiado altos ou colisao com o CTA.
- Os botoes dos Story Blocks pre-historicos usam a mesma textura `assets/textures/progress-bar-texture.jpg`, mas com leitura propria de placas de pedra polida esculpidas. A textura deve ser subtil, coberta por camadas tonais para evitar o aspeto de fotografia recortada e preservar legibilidade. A acao principal deve ser ocre/dourada, mais luminosa, com alto contraste de texto, relevo e brilho quente discreto; a acao secundaria deve manter pedra cinzenta, brilho reduzido e menor destaque visual, sempre legivel. Hover aumenta ligeiramente o brilho e eleva a pedra; pressed deve parecer a placa pressionada para dentro. O CSS reutilizavel vive em `.prehistory-stone-button` e variantes.
- As acoes dos Story Blocks pre-historicos devem usar tokens de posicao comuns (`--prehistory-actions-left` e `--prehistory-actions-bottom`) para ocupar espaco vazio da imagem de fundo de forma consistente entre ecras, sem tapar arte rupestre, desenhos de aldeia ou detalhes narrativos. No desktop, os botoes ficam 80px mais a esquerda que a ancora visual base e 30px mais acima; no mobile prevalecem os overrides de area segura.
- Os artefactos/imagens dos Story Blocks pre-historicos devem obedecer a offsets comuns (`--prehistory-artifact-offset-x/y`) e manter separacao da coluna de leitura; no desktop, o offset horizontal soma 40px a posicao base para deslocar o artefacto para a direita, enquanto no mobile a compensacao equivalente deve ser vertical para baixo. Evitar colocacao demasiado alta ou encostada ao titulo, texto, progresso ou botoes.
- O refinamento premium dos botoes deve depender de relevo fisico, nao de textura agressiva: usar sombras internas em varias direcoes, uma camada de polimento suave, `font-weight` alto e `text-shadow` discreto. `Continuar` pode ter glow quente adicional; `Voltar` deve ganhar legibilidade sem competir com a acao principal. Camadas decorativas como `.story-block-background` devem usar `pointer-events: none` para nunca interceptarem hover, active ou clique dos controlos.
- Nos Story Blocks com artefacto, a hierarquia deve ser imediata: artefacto -> titulo -> texto -> acao. O halo central nao deve competir com o protagonista; a pedra pode ocupar mais peso visual desde que nao colida com o texto, e o bloco narrativo precisa de escurecimento ambiental suficiente para leitura em mobile.
- A proxima evolucao deve extrair particulas, overlays e iluminacao para tokens reutilizaveis.

### Antiguidade

Sensacao:

- monumentalidade;
- ordem;
- poder;
- cidades, templos e escrita.

Materiais:

- marmore;
- ouro;
- bronze;
- argila;
- papiro;
- pedra polida.

Paleta:

- areia clara;
- branco marmore;
- dourado solar;
- azul mineral;
- sombras quentes.

Iluminacao:

- sol alto;
- brilho dourado;
- contraste limpo;
- geometria visivel.

Motion:

- majestoso;
- estavel;
- transicoes amplas;
- pouca turbulencia.

UI:

- simetrica;
- ritmada;
- linhas mais formais;
- hierarquia forte.

### Medieval

Sensacao:

- peso;
- fe;
- frio;
- fronteiras, castelos, manuscritos e conflito.

Materiais:

- pergaminho;
- madeira;
- ferro;
- pedra humida;
- tecido pesado;
- vitral.

Paleta:

- castanho madeira;
- cinza pedra;
- azul frio;
- vermelho profundo;
- dourado envelhecido.

Iluminacao:

- velas;
- nevoa;
- janelas estreitas;
- sombra densa.

Motion:

- lento;
- grave;
- bruma subtil;
- transicoes com peso.

UI:

- mais pesada;
- texturas discretas;
- contraste moderado;
- botoes robustos.

### Moderna

Sensacao:

- expansao;
- navegacao;
- ciencia;
- revolucao;
- impressao e comercio.

Materiais:

- papel impresso;
- mapas;
- madeira naval;
- metal polido;
- vidro cientifico.

Paleta:

- papel quente;
- tinta escura;
- azul maritimo;
- vermelho politico;
- dourado comercial.

Motion:

- mais direcional;
- mapas, linhas, rotas e revelacoes;
- ritmo medio.

### Contemporanea

Sensacao:

- velocidade;
- industria;
- massas;
- tecnologia;
- conflito global.

Materiais:

- metal;
- betao;
- vidro;
- ecras;
- fotografia;
- luz eletrica.

Paleta:

- cinza urbano;
- preto grafite;
- branco frio;
- vermelho alerta;
- azul eletrico usado com moderacao.

Motion:

- mais rapido;
- cortes mais digitais;
- ruido visual controlado;
- feedback imediato.

## Biblioteca De Elementos

Criar assets reutilizaveis antes de produzir screens unicas:

- texturas: pedra, terra, marmore, pergaminho, madeira, metal, betao;
- particulas: poeira, brasas, fumo, nevoa, luz, cinza;
- props: pedras, tochas, colunas, mapas, manuscritos, ferramentas;
- overlays: vinheta, gradiente de leitura, glow, sombra lateral;
- simbolos: fogo, pedra, rio, templo, coroa, espada, roda, maquina.

Naming recomendado:

```txt
hero-era-[era].webp
hero-subpercurso-[subpercurso]-desktop.webp
hero-subpercurso-[subpercurso]-portrait.webp
background-licao-[subpercurso].webp
texture-[material].webp
particle-[efeito].webp
overlay-[funcao].webp
icon-[conceito].svg
```

## Tokens CSS

Tokens globais devem viver em `:root` no `styles.css`.

Familias recomendadas:

```txt
--era-[era]-ink
--era-[era]-surface
--era-[era]-accent
--era-[era]-accent-soft
--era-[era]-shadow
--era-[era]-story-overlay
--era-[era]-story-filter
--era-[era]-motion-duration
```

Assets devem usar nomes funcionais:

```txt
--asset-background-licao-paleolitico
--asset-background-licao-mesolitico
--asset-background-licao-neolitico
```

Evitar nomes baseados apenas em aparencia se o asset tem uma funcao de produto.

## Pipeline De Assets

Ordem de trabalho:

1. Definir papel do asset.
2. Escolher nivel: hero, story, layer, particle, texture, icon.
3. Confirmar era e subpercurso.
4. Criar ou selecionar imagem.
5. Exportar em WebP quando for raster.
6. Comprimir.
7. Dar nome conforme o sistema.
8. Adicionar token CSS.
9. Aplicar por `data-era`, `data-section` ou `data-mood`.
10. Verificar mobile e desktop.

## Performance

Regras:

- WebP para imagens raster;
- SVG apenas para simbolos simples ou UI;
- nao pre-carregar todos os assets da app;
- pre-load apenas do que desbloqueia a primeira transicao;
- story backgrounds devem ser mais leves do que hero backgrounds;
- evitar filtros caros em muitos elementos animados;
- animar `opacity` e `transform` sempre que possivel;
- respeitar `prefers-reduced-motion`.

Checklist antes de adicionar assets:

- O asset e reutilizavel?
- O texto continua legivel?
- Existe uma versao ou enquadramento mobile?
- O ficheiro e leve o suficiente?
- O asset pertence a um token ou regra clara?
- A screen continua a ter um unico foco?

## Ordem De Implementacao

Fase atual:

```txt
fundacao visual + estrutural
```

Prioridade:

1. Fechar Pre-Historia como era-piloto.
2. Consolidar tokens de cor, luz, overlays e motion.
3. Criar biblioteca de texturas e particulas reutilizaveis.
4. Aplicar o mesmo metodo a Antiguidade.
5. So depois expandir producao massiva de assets.

## Regra De Ouro

Se uma screen precisa de uma imagem nova para funcionar, provavelmente o sistema ainda esta fraco.

Se uma screen melhora combinando fundo, overlay, luz, particulas e tokens existentes, o sistema esta a amadurecer.
