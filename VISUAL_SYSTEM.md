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
- O Story Block de ferramentas usa sprites transparentes de silex lascado renderizados como `<picture>`/`<img>` com `object-fit: contain`; o CSS especifico vive em `styles/05-lesson-experience.css` sob `data-prehistory-artifact="flint"`.
- A fotografia-fonte do silex fica versionada em `assets/silex-original.png` e o sprite deve ser regenerado com `scripts/build-flint-sprite.ps1`; nao editar o sprite manualmente nem substituir por imagem gerada quando a fonte fotografica existir.
- Em runtime, o silex deve carregar por `<picture>`/`srcset` usando `assets/silex-lascado-sprite-mobile.webp` (512w) e `assets/silex-lascado-sprite-desktop.webp` (1024w); evitar servir o PNG lossless grande no Story Block.
- Artefactos pre-historicos realistas devem ter sombra de contacto, sombra projetada curta na parede, luz quente lateral e contraste mineral suficiente para mostrar lascas e fraturas; evitar shapes low-poly, icones abstratos ou pedra cinzenta uniforme.
- O silex deve ler como pedra lascada, nao como objeto escuro com textura aplicada: usar contraste local, reflexos frios/acinzentados nas faces partidas e um rim light quente vindo da fogueira inferior esquerda.
- Sprites fotograficos precisam de integracao ambiental sem destruir fidelidade: preservar cor, nitidez, fraturas e microtextura no PNG; aplicar apenas sombras, luz ambiente e overlays suaves no CSS para parecerem objectos fisicos iluminados dentro da gruta, nao imagens sobrepostas.
- Texto narrativo pre-historico deve parecer pigmento aplicado na parede: usar cor ocre/barro, mascara irregular, sombras subtis, `mix-blend-mode` quando legivel e animacao de revelacao apenas no story block ativo.
- O progresso dos Story Blocks deve representar a licao atual, com marcador curto tipo `1 de 3` e barra local; em mobile, manter o indicador acima dos CTAs para evitar conflito com toque e leitura.
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
