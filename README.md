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
