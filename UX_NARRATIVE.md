# História Viva - UX Narrative

## Princípio Central

A app não deve parecer um website, dashboard ou curso tradicional.

Deve parecer uma jornada histórica interactiva, cinematográfica e guiada.

O utilizador não está a "abrir secções".
Está a atravessar mundos históricos.

## Fantasia do Utilizador

O utilizador é um investigador da História:

- explorador
- cronista
- estratega
- viajante temporal

## Regra Principal

Cada ecrã deve ter apenas uma intenção principal.

Não mostrar menus permanentes.
Não mostrar todas as funcionalidades ao mesmo tempo.
A navegação deve ser contextual.

## Fluxo Principal

```txt
Landing Screen
↓
Escolha de Era
↓
Hero Transition da Era
↓
Escolha de Subpercurso
↓
Hero do Subpercurso
↓
Timeline vertical
↓
Intro da Lição
↓
Lesson Experience
↓
Quiz / Fonte / Debate / Missão
↓
XP / Recompensa
↓
Próxima descoberta
```

## Sensação Desejada

A app deve parecer:

- cinematográfica
- misteriosa
- premium
- imersiva
- guiada
- histórica

Não deve parecer:

- dashboard
- LMS
- Moodle
- enciclopédia
- banco de quizzes

## Regras Visuais

- Usar ecrãs fullscreen sempre que possível.
- Evitar scroll nos ecrãs principais.
- Usar scroll apenas quando reforça a sensação de jornada, como na timeline.
- Usar imagens cinematográficas como fundo.
- Aplicar overlay escuro para legibilidade.
- Usar uma única ação principal por ecrã.
- Evitar sidebars e menus globais.
- Evitar mostrar estatísticas, cards e ferramentas quando o ecrã pede foco emocional.
- A navegação deve parecer avanço numa experiência, não troca de páginas.

## Landing Screen

Função: despertar curiosidade.

Deve mostrar:

- imagem cinematográfica
- título grande
- subtítulo curto
- botão principal

Não deve mostrar:

- menus
- stats
- cards
- progresso
- funcionalidades

## Era Selection Screen

Função: escolher um mundo histórico.

Deve mostrar cards grandes e cinematográficos:

- Pré-História
- Idade Antiga
- Idade Média
- Idade Moderna
- Idade Contemporânea
- História de Portugal
- Grande Jornada Histórica

Cada card deve ter:

- imagem forte
- título
- frase curta
- um único gesto claro de entrada

Evitar excesso de estatísticas.

## Era Transition Screen

Função: entrada emocional na era.

Usar a mesma imagem do card em fullscreen.

Deve mostrar:

- range temporal
- título da era
- frase evocativa
- botão "Entrar na Era"

Este ecrã é um portal emocional. O utilizador deve sentir que atravessou uma fronteira para outro mundo histórico.

## Subpercurso Screen

Função: escolher uma narrativa específica dentro da era.

Exemplo para Pré-História:

- Paleolítico
- Mesolítico
- Neolítico
- Toda a Pré-História

Regras:

- o foco deve estar nos cards de subpercurso
- não deve aparecer conteúdo extra abaixo dos cards
- cada subpercurso deve parecer uma porta para uma narrativa própria

## Subpercurso Hero

Função: preparar emocionalmente a timeline.

Quando existir, deve mostrar:

- imagem fullscreen do subpercurso
- título
- resumo curto
- botão principal para iniciar a timeline

Este ecrã não deve acumular conteúdo. Deve criar antecipação.

## Timeline Screen

Função: mostrar a jornada.

A timeline é o mapa narrativo da experiência.

Deve mostrar:

- título do percurso
- resumo curto
- timeline vertical
- pontos clicáveis

Cada ponto representa uma lição.

Hover ou tap deve revelar:

- imagem ou visual da lição
- resumo curto
- duração
- XP
- estado da lição

Não deve mostrar:

- menus adicionais
- painéis paralelos
- cards extra
- blocos de conteúdo abaixo da timeline

## Grande Jornada Histórica

Função: mostrar a História como viagem transversal.

Deve renderizar uma timeline única com todas as lições de todas as eras, ordenadas cronologicamente.

Não deve abrir um hub de era.
Não deve abrir uma lista de categorias.

Deve parecer uma campanha longa, não uma secção técnica.

## Lesson View

Função: experiência principal.

A lição não deve parecer artigo.

Estrutura recomendada:

- hero visual
- contexto curto
- insight histórico
- timeline contextual
- fonte
- curiosidade
- quiz
- debate/reflexão
- relações históricas
- XP
- próxima lição

Princípios:

- progressão guiada
- texto curto e ritmado
- foco visual
- uma próxima ação clara

## Quiz / Fonte / Debate / Missão

Função: transformar conteúdo em interação.

Cada modo deve ter visual próprio:

- Quiz: rápido, minimalista, feedback imediato.
- Fonte: foco, leitura curta, pergunta crítica.
- Debate: comparação entre posições.
- Missão: fullscreen, escolhas e consequências.

Não reutilizar o mesmo layout para todos os modos quando o objetivo da interação muda.

## Recompensa

Função: fechar o loop.

Deve mostrar:

- XP ganho
- progresso claro
- próxima descoberta
- CTA para continuar

O utilizador nunca deve perguntar: "e agora?"

## Motion

Usar:

- fade in
- zoom lento
- parallax subtil
- hover glow
- transições suaves
- entrada progressiva dos elementos

Evitar:

- mudanças bruscas
- reload visual
- sensação de página web
- animações decorativas sem função narrativa

## Linguagem

Preferir linguagem evocativa e curta.

Exemplo:

```txt
Entrar na Era
Começar Jornada
Abrir Lição
Continuar Descoberta
```

Evitar linguagem demasiado técnica:

```txt
Abrir categoria
Ver conteúdo
Selecionar item
Dashboard
```

## Regra de Implementação

Preservar a arquitetura modular existente.

Usar os dados atuais de:

- eras
- curriculum
- timeline
- quiz
- debates
- experience
- progress

Ajustar HTML, CSS e JS apenas onde necessário para implementar o fluxo narrativo.

Evitar reescrever tudo do zero.

## Prompt de Aplicação

```txt
Lê o ficheiro UX_NARRATIVE.md e reorganiza a interface da app História Viva para seguir esta experiência.

A prioridade é remover a lógica de dashboard e transformar a app numa SPA narrativa com navegação contextual.

Não cries menus permanentes nem sidebars.
Cada ecrã deve ter apenas uma intenção principal.
Mantém a estrutura modular existente.
Usa os dados atuais de eras, curriculum, timeline, quiz, debates e experience.

Ajusta HTML, CSS e JS apenas onde necessário para implementar o fluxo:

Landing → Escolha de Era → Hero da Era → Subpercursos → Timeline → Lição → Interação → Recompensa.

Preserva a arquitetura atual e evita reescrever tudo do zero.
```
