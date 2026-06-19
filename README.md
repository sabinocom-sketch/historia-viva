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
