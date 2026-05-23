import{A as z,C as P,G as Q,a as b,d as w,h as I,k as A,l as s,m as j,n as l,p as t,q as g,r as C,t as E,u as h,v,w as $,x as S,y as q}from"./chunk-OSCPOUA2.js";import{a as T}from"./chunk-UEKKBUIS.js";function O(){let e=s.currentLessonId?$(s.currentLessonId):h(s.currentEra)[0];return e?L(e).mood:""}function ve(){let e=s.currentLessonId?$(s.currentLessonId):h(s.currentEra)[0];if(!e)return"";s.currentLessonEntryId!==e.id&&(s.currentLessonEntryId=e.id,s.currentLessonMode="intro",s.currentLessonStoryBlockIndex=0,s.currentPostStoryStep="reflection",s.currentLessonQuizChoice=null);let a=s.currentLessonId===e.id,o=L(e),r=C(b[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),n=ne(e.title,e.detail,e.category,...e.related||[]),i=s.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${a?"is-active":""}" data-active-lesson="${t(e.id)}" data-era="${t(e.eraKey)}" data-section="${t(e.sectionId||"")}" data-mood="${t(o.mood)}" data-mode="${t(s.currentLessonMode)}" data-theme="${t(e.category)}">
      ${i?`<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${t(o.kicker)}</p>
          <h3>${t(o.title)}</h3>
          <p class="lesson-hero-line">${t(o.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da li\xE7\xE3o">
            ${o.preview.map(u=>`<span>${t(u)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>`:V(e,{insight:n,curiosity:r})}
    </section>
  `}function V(e,a={}){if(s.currentLessonMode==="story"||s.currentLessonMode==="understand"){let o=v(e.id),r=x(o);return`
      <div class="lesson-experience" data-era="${t(e.eraKey||"")}" data-section="${t(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${F(o[r],r,o.length,e)}
      </div>
    `}return D(e,a)}function F(e,a,o,r={}){let n=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},i=n.eraKey||r.eraKey||"",u=n.sectionId||r.sectionId||"";return`
    <article class="story-block" style="--cave-line-count: ${k(n.text).length}" data-story-block="${t(n.id)}" data-visual="${t(n.visualType)}" data-background="${t(n.backgroundMood)}" data-mood="${t(O())}" data-era="${t(i)}" data-section="${t(u)}">
      <span class="story-block-background" aria-hidden="true"></span>
      <span class="story-block-visual" aria-hidden="true"></span>
      <div class="story-block-copy prehistory-stone-panel" style="--cave-line-count: ${k(n.text).length}">
        <span>Momento ${a+1} de ${o}</span>
        <p class="cave-paint-text" aria-label="${t(n.text)}">
          ${N(n.text)}
        </p>
        <span class="pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      <div class="story-block-progress" aria-label="Progresso dos story blocks">
        ${Array.from({length:o},(d,c)=>`<span class="${c===a?"active":""}" aria-hidden="true"></span>`).join("")}
      </div>
      <div class="story-block-actions">
        <button type="button" data-lesson-action="story-prev" ${a===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${a===o-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function k(e=""){let a=String(e||"").trim();if(!a)return[""];let o=a.split(/(?<=[.!?])\s+|;\s+|,\s+(?=\S)/).map(r=>r.trim()).filter(Boolean);return o.length?o:[a]}function N(e=""){return k(e).map((a,o)=>`
      <span class="cave-reveal-line" style="--cave-line-index: ${o}" aria-hidden="true">
        ${t(a)}
      </span>
    `).join("")}function D(e,a={}){let o=G(e,a),r=H(s.currentLessonMode),n=f.indexOf(r),i=f.length;s.currentPostStoryStep=r;let d={reflection:M,assimilation:Z,reality:ee,critical:ae,challenge:te,reward:oe,nextTeaser:re}[r]||M;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${t(e.eraKey||"")}" data-section="${t(e.sectionId||"")}" data-post-story-step="${t(r)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${d(o[r],e,n,i)}
    </div>
  `}function H(e){let a=R[e]||e||s.currentPostStoryStep||"reflection";return f.includes(a)?a:"reflection"}function G(e,a={}){let o=L(e),r=y(e.title),n=v(e.id),i=S(e.eraKey,e.id);return{reflection:U(e,a.insight),assimilation:_(e,n,r),reality:J(e,r),critical:X(e,r),challenge:W(e),reward:{kicker:"Artefacto desbloqueado",title:"Mem\xF3ria guardada",text:`Guardaste uma chave de leitura sobre ${r}.`,artifact:o.preview?.[0]||"Artefacto narrativo desbloqueado",previous:"challenge"},nextTeaser:{kicker:"Pr\xF3xima porta temporal",title:i?y(i.title):"Rever a jornada",text:i?Y(r,y(i.title)):"A viagem continua quando voltares ao mapa da era.",nextLessonId:i?.id||"",previous:"reward"}}}function U(e,a=""){let o=y(e.title);return{kicker:"Pausa de assimila\xE7\xE3o",title:"O que isto mudou?",text:l(o).includes("fogo")?"O fogo nao mudou apenas a sobrevivencia. Mudou a forma como os humanos viviam juntos.":g(a||e.detail||K(e),150),previous:"story"}}function _(e,a,o){let r=a.slice(0,3).map(n=>n.text);return{kicker:"Guia hist\xF3rico",title:"O que acabaste de descobrir?",text:`${o} fica mais claro quando separas descoberta, escolha e consequencia.`,prompts:r.length?r:["Que problema humano aparece aqui?","Que decisao mudou a vida diaria?","Que consequencia veio depois?"],previous:"reflection"}}function J(e,a){let r=l(a).includes("fogo")?[["Energia","Hoje continuamos dependentes de energia para viver, trabalhar e comunicar."],["Tecnologia","Uma ferramenta simples pode reorganizar uma comunidade inteira."],["Seguranca","Proteger recursos importantes continua a ser uma decisao coletiva."]]:[["Tecnologia","Mudancas tecnicas alteram rotinas, trabalho e relacoes sociais."],["Comunidade","O que uma sociedade aprende muda a forma como coopera."],["Escolhas","Cada avancar tambem cria dependencias e novos custos."]];return{kicker:"Ponte ao presente",title:"Do passado para hoje",text:`${a} nao ficou preso ao passado. A mesma logica ainda aparece no presente.`,cards:r,previous:"assimilation"}}function X(e,a){return{kicker:"Lente cr\xEDtica",title:l(a).includes("fogo")?"O dominio do fogo foi apenas progresso?":"Esta mudanca trouxe so beneficios?",text:"Olha para o mesmo momento por lentes diferentes.",perspectives:[["Sobrevivencia","Ajudou pessoas a resistir melhor ao mundo."],["Vida social","Mudou a forma como grupos se organizavam."],["Custo","Tambem criou novas pressoes sobre recursos e ambiente."]],previous:"reality"}}function W(e){let a=z(e.eraKey),o=a[P(e.eraKey,e.id)]||a[0];return{kicker:"Desafio",title:o?.question||"Que escolha ajudaria melhor o grupo?",quiz:o,previous:"critical"}}function Y(e,a){return`${e} abriu uma porta. A pr\xF3xima li\xE7\xE3o mostra o que mudou a seguir: ${a}.`}function p(e,a){return`
    <div class="story-block-progress post-story-progress" aria-label="Progresso da li\xC3\xA7\xC3\xA3o">
      ${Array.from({length:a},(o,r)=>`<span class="${r===e?"active":""}" aria-hidden="true"></span>`).join("")}
    </div>
  `}function m(e,a="Continuar",o=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${t(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${o?"disabled":""}>${t(a)}</button>
    </div>
  `}function M(e,a,o,r){return`
    <article class="post-story-screen reflection-moment" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      ${p(o,r)}
      ${m(e.previous,"Continuar")}
    </article>
  `}function Z(e,a,o,r){return`
    <article class="post-story-screen assimilation-chatbot" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="mentor-panel">
        <span class="mentor-orb" aria-hidden="true"></span>
        <div class="post-story-copy">
          <span class="post-story-kicker">${t(e.kicker)}</span>
          <h3>${t(e.title)}</h3>
          <p>${t(e.text)}</p>
        </div>
        <div class="mentor-bubbles" aria-label="Pistas do guia hist\xF3rico">
          ${e.prompts.map(n=>`<p class="mentor-bubble">${t(n)}</p>`).join("")}
        </div>
      </div>
      ${p(o,r)}
      ${m(e.previous,"Continuar")}
    </article>
  `}function ee(e,a,o,r){return`
    <article class="post-story-screen reality-bridge" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      <div class="reality-bridge-grid">
        ${e.cards.map(([n,i])=>`
          <section>
            <strong>${t(n)}</strong>
            <p>${t(i)}</p>
          </section>
        `).join("")}
      </div>
      ${p(o,r)}
      ${m(e.previous,"Continuar")}
    </article>
  `}function ae(e,a,o,r){return`
    <article class="post-story-screen critical-lens" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      <div class="critical-perspectives">
        ${e.perspectives.map(([n,i])=>`
          <section>
            <strong>${t(n)}</strong>
            <p>${t(i)}</p>
          </section>
        `).join("")}
      </div>
      ${p(o,r)}
      ${m(e.previous,"Continuar")}
    </article>
  `}function te(e,a,o,r){let n=e.quiz||{question:e.title,options:[],answer:0,explanation:""},i=s.currentLessonQuizChoice!==null,u=i&&s.currentLessonQuizChoice===n.answer;return`
    <article class="post-story-screen challenge-screen" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(i?`${u?"Boa leitura.":"Quase."} ${n.explanation}`:"Escolhe pelo contexto, n\xE3o pela mem\xF3ria.")}</p>
      </div>
      <div class="lesson-quiz-options challenge-options">
        ${n.options.map((d,c)=>`
          <button class="${i&&c===n.answer?"correct":""} ${i&&c===s.currentLessonQuizChoice&&c!==n.answer?"wrong":""}" type="button" data-lesson-quiz-option="${c}">
            ${t(d)}
          </button>
        `).join("")}
      </div>
      ${p(o,r)}
      ${m(e.previous,"Ver recompensa",!i)}
    </article>
  `}function oe(e,a,o,r){return`
    <article class="post-story-screen reward-screen" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
        <small>${t(e.artifact)}</small>
      </div>
      ${p(o,r)}
      ${m(e.previous,"Ver pr\xF3xima")}
    </article>
  `}function re(e,a,o,r){return`
    <article class="post-story-screen next-lesson-teaser" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      ${p(o,r)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${t(e.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar \xE0 timeline</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${t(e.nextLessonId)}">Entrar na pr\xF3xima</button>`:'<button type="button" data-lesson-action="complete">Terminar</button>'}
      </div>
    </article>
  `}function x(e){let a=Math.max(0,e.length-1);return s.currentLessonStoryBlockIndex=Math.min(Math.max(s.currentLessonStoryBlockIndex||0,0),a),s.currentLessonStoryBlockIndex}async function ye({updateLessonProgress:e,renderCategorySections:a}){let o=v(s.currentLessonId),r=x(o);if(r<o.length-1){s.currentLessonStoryBlockIndex=r+1,e(s.currentLessonId,{viewed:!0,storyBlockIndex:s.currentLessonStoryBlockIndex}),await a();return}s.currentLessonMode="reflection",s.currentPostStoryStep="reflection",s.currentLessonStoryBlockIndex=0,e(s.currentLessonId,{viewed:!0,storyCompleted:!0}),await a()}async function be({updateLessonProgress:e,renderCategorySections:a}){let o=v(s.currentLessonId),r=x(o);s.currentLessonStoryBlockIndex=Math.max(0,r-1),e(s.currentLessonId,{viewed:!0,storyBlockIndex:s.currentLessonStoryBlockIndex}),await a()}function L(e){let a=q(e.eraKey).find(c=>c.id===e.sectionId),o=y(e.title),r=l(o),n=b[e.eraKey]?.title||"Hist\xF3ria",i=a?.title||w[e.category]||"Li\xE7\xE3o",d=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(c=>c.match.some(B=>r.includes(l(B))))||{mood:e.category||"default",line:K(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:o,mood:d.mood,line:d.line,preview:d.preview,kicker:`${n} \xB7 ${i}`}}function y(e){return String(e||"").split(":")[0].trim()}function K(e){let a=e.detail||se(e.title,e.category);return`\u201C${g(a,142)}\u201D`}function se(e,a=""){return a==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":a==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":a==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":a==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":a==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function ne(...e){let a=l(e.filter(Boolean).join(" ")),o=I.find(r=>r.keywords.some(n=>a.includes(l(n))));return o?o.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var f,R,ie=T(()=>{A();j();E();Q();f=["reflection","assimilation","reality","critical","challenge","reward","nextTeaser"],R={interaction:"reflection",source:"reflection",insight:"reflection",recap:"reality",debate:"critical",quiz:"challenge",consolidate:"reward"}});ie();export{L as buildLessonIntroFrame,y as getLessonDisplayTitle,ye as goToNextStoryBlock,be as goToPreviousStoryBlock,ve as renderActiveLessonPanel};
