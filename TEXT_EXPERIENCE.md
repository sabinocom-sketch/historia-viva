# Text Experience

`textExperience` e a camada editorial base para gerar experiencias de licao reutilizaveis na Historia Viva.

O objetivo e guardar conteudo historico rico uma vez e depois transforma-lo em:

- Story Blocks
- curiosidades
- reflexoes
- pontes ao presente
- guias de evidencia
- quizzes e debates futuros

## Formato

Cada entrada da `timeline` pode receber um quinto argumento `extra` com `lessonContent` ou `textExperience`:

```js
[
  "c. 40 mil a.C.",
  "Arte rupestre: imagens em grutas e abrigos mostram memoria visual.",
  "cultura",
  "A arte rupestre revela comunicacao visual, simbolismo e vida coletiva.",
  {
    status: "draft",
    sourceText: "Texto atual usado como base de migracao.",
    textExperience: {
      introduction: "Resumo inicial da licao.",
      scene: "Cena visual que coloca o utilizador na epoca.",
      narrative: [
        "Momento humano concreto.",
        "Decisao, risco ou experiencia vivida."
      ],
      whatHappened: "Explicacao historica principal.",
      evidence: [
        "Como sabemos isto atraves de fontes, objetos ou documentos."
      ],
      archaeology: [
        "Vestigios materiais, sitios arqueologicos ou descobertas."
      ],
      whyItMatters: "Consequencia historica.",
      presentConnection: "Ligacao ao presente.",
      curiosity: "Dado surpreendente ou misterio historico.",
      reflection: "Pergunta aberta para pensar.",
      keyTakeaway: "Ideia essencial a guardar."
    }
  }
]
```

## Regras Editoriais

As regras completas de escrita estao em [BIBLIA_EDITORIAL_HISTORIA_VIVA.md](BIBLIA_EDITORIAL_HISTORIA_VIVA.md).

- Escrever primeiro para a experiencia historica, nao para a UI final.
- Separar cena, explicacao, evidencia, importancia e ligacao ao presente.
- Usar linguagem prudente quando a interpretacao for debatida: `sugere`, `indica`, `pode revelar`, `ha indicios de`.
- Evitar transformar o texto em lista academica seca.
- Tratar `sourceText` e `status: "draft"` como materia-prima, nao como conteudo final.

## Transformacao Atual

O motor normaliza `textExperience` em `content-service.js`.

Quando existe conteudo suficiente em `textExperience`, os Story Blocks sao gerados a partir de:

1. `scene`
2. `narrative`
3. `whatHappened`
4. `evidence`
5. `archaeology`
6. `whyItMatters`
7. `presentConnection`

As telas pos-story usam, quando disponivel:

- `reflection`
- `evidence`
- `archaeology`
- `presentConnection`
- `curiosity`
- `keyTakeaway`

Se a licao ainda nao tiver `textExperience`, a app continua a usar `storyText`, `detail` e os Story Blocks existentes.

## Leitura Nos Story Blocks Pre-Historicos

Os Story Blocks da Pre-Historia sao renderizados como micro-narrativas de parede de gruta em `lesson-experience.js`.

- Cada ecra apresenta o texto narrativo como um unico paragrafo continuo em desktop e mobile, preservando exatamente a paginacao e o numero de palavras definidos para esse formato.
- Cada ecra termina numa frase completa; o texto restante continua em novos ecras narrativos em vez de ser truncado.
- No mobile, os ecras narrativos usam segmentos menores do que no desktop sem remover frases da licao.
- A animacao pode continuar a revelar frase a frase, mas os fragmentos fluem inline e formam um unico paragrafo com `line-height: 1.4`.
- Cada bloco recebe `data-story-index` para variar subtilmente luz, pigmento e intensidade entre Momento 1, 2 e 3.
- A largura do texto fica controlada no CSS para evitar paredes compactas, especialmente em telemovel.
- O artefacto visual deve parecer integrado na cena com sombra, reflexo quente e movimento lento, nao como objeto flutuante isolado.
