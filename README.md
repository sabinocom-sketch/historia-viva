# Historia Viva

Aplicacao web de aprendizagem de Historia, organizada em percursos, licoes e blocos narrativos interativos.

## Desenvolvimento

Instalar dependencias e iniciar o servidor local:

```sh
npm install
npm start
```

O servidor fica disponivel em `http://127.0.0.1:4173/`.

## Build e verificacao

```sh
npm run build:js
npm run build:css
npm run screenshot:lesson
```

`build:js` gera os ficheiros do browser em `bundle.js` e `chunks/`. As capturas de verificacao da licao sao guardadas em `screenshots/lesson-flow/`.

## Percurso: Antigo Egipto

O percurso **Antigo Egipto**, dentro de **Civilizacoes Antigas**, apresenta nove licoes cronologicas:

- Origens do Antigo Egipto
- O Nilo
- Os faraos
- As piramides e a arquitectura egipcia
- A religiao egipcia
- O quotidiano
- A casa egipcia
- Invasoes assirias, persas e helenicas
- O fim do Antigo Egipto

O conteudo vive em `data/eras/antiga.js`. Cada licao inclui contexto historico, categorias para a experiencia narrativa, e o percurso recebe ainda fontes, conceitos, perguntas de reflexao e quizzes de consolidacao.

## Percurso: Suméria

O percurso **Suméria**, dentro de **Civilizações Antigas**, apresenta sete lições cronológicas:

- Origens entre os rios Tigre e Eufrates
- Primeiras cidades: Uruk, Ur e Lagash
- Escrita cuneiforme
- Quotidiano sumério
- Religião suméria
- Zigurates
- Sociedade suméria

Tal como os restantes percursos, o conteúdo está em `data/eras/antiga.js`. As lições são acompanhadas por fontes comentadas, conceitos, perguntas de reflexão, curiosidades e cinco quizzes de consolidação.

## Percurso: Antiga Babilonia

O percurso **Antiga Babilonia**, dentro de **Civilizacoes Antigas**, apresenta sete licoes principais:

- As origens da Babilonia
- Os reis da Babilonia
- Os Jardins Suspensos
- A religiao babilonica
- A sociedade babilonica
- O Codigo de Hamurabi
- A queda da Babilonia

O conteudo vive em `data/eras/antiga.js` como `babylonianPremiumContent`. O pacote inclui licoes cronologicas, eventos, biografias, conceitos, fontes comentadas, perguntas de reflexao, curiosidades e quizzes de consolidacao. A licao dos Jardins Suspensos assinala explicitamente a diferenca entre fama literaria e evidencia arqueologica incerta.

## Percurso: Antiga Assiria

O percurso **Antiga Assiria**, dentro de **Civilizacoes Antigas**, apresenta seis licoes principais:

- As origens da Assiria
- Os reis assirios
- A religiao assiria
- A sociedade assiria
- A arquitectura assiria
- A queda do Imperio Assirio

O conteudo vive em `data/eras/antiga.js` como `assyrianPremiumContent`. O pacote inclui licoes cronologicas, eventos, biografias, conceitos, fontes comentadas, perguntas de reflexao, curiosidades e quizzes de consolidacao. As licoes destacam a passagem de Assur comercial a imperio militar, a propaganda dos reis, a funcao politica da arquitectura palacial e o colapso entre 614 e 609 a.C.

## Percurso: Antiga Persia

O percurso **Antiga Persia**, dentro de **Civilizacoes Antigas**, apresenta sete licoes principais:

- As origens da Persia
- Ciro, o Grande
- Os imperadores persas
- A religiao persa
- As artes persas
- A sociedade persa
- A queda do Imperio Persa

O conteudo vive em `data/eras/antiga.js` como `persianPremiumContent`. O pacote inclui licoes cronologicas, eventos, biografias, conceitos, fontes comentadas, perguntas de reflexao, curiosidades e quizzes de consolidacao. As licoes destacam a formacao do Imperio Aquemenida, a administracao por satrapias, Persepolis como propaganda visual e a conquista macedonica entre 334 e 330 a.C.

## Percurso: Antiga Grecia

O percurso **Antiga Grecia**, dentro de **Civilizacoes Antigas**, apresenta nove licoes principais:

- A Idade Arcaica
- Atenas e Esparta
- A Idade Classica
- As artes gregas
- A religiao grega
- A democracia ateniense
- A filosofia grega
- A sociedade ateniense
- Alexandre o Grande

O conteudo vive em `data/eras/antiga.js` como `greekPremiumContent`. O pacote inclui licoes cronologicas, eventos, biografias, conceitos, fontes comentadas, perguntas de reflexao, curiosidades e quizzes de consolidacao. As licoes destacam a polis, as exclusoes da democracia ateniense, a cultura civica, a filosofia e a passagem para o mundo helenistico.

## Imagens dos portais de era

As imagens dos portais de era sao definidas em `styles/03-cinematic-routes.css` e compiladas em `styles.css`. Sempre que uma era tambem aparece na timeline, o portal deve reutilizar o respetivo asset canonico da timeline. Na Pre-Historia, este asset e `--asset-pre-historia`; assim evita-se apresentar o fundo alternativo `background-prehistoria-era-*` no ecran do portal.

## Imagens dos story blocks

As regras narrativas vivem em `data/story-blocks.js`. Um bloco pode definir uma imagem responsiva desta forma:

```js
image: {
  desktop: "assets/nome-desktop.png",
  mobile: "assets/nome-mobile.png",
  fit: "contain",
  position: "center"
}
```

Para a licao **A Descoberta do Fogo**, os tres blocos usam pares de sprites locais com o padrao:

```
assets/licao-descoberta-fogo-bloco<N>-desktop.png
assets/licao-descoberta-fogo-bloco<N>-mobile.png
```

O `picture` em `lesson-experience.js` seleciona a versao mobile ate 768 px e a versao desktop nos restantes tamanhos. Ao adicionar novos sprites, inclua-os no controlo de versoes, mesmo que a regra geral de `.gitignore` ignore PNGs em `assets/`.

Os sprites de um story block nao usam imagens de reserva no respetivo contentor. Assim, cada ilustracao e mostrada isoladamente e nao recebe, por baixo, o sprite de silex usado na licao de ferramentas de pedra.
