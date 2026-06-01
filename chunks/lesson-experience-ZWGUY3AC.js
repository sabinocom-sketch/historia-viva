import{B as M,D as T,H as N,a as f,d as C,h as S,k as O,l as i,m as V,n as u,p as t,q as b,r as P,t as F,u as $,v as p,w as I,x as k,y as q,z}from"./chunk-VNVLKROU.js";import{a as Q}from"./chunk-UEKKBUIS.js";function H(){let e=i.currentLessonId?k(i.currentLessonId):$(i.currentEra)[0];return e?L(e).mood:""}function Le(){let e=i.currentLessonId?k(i.currentLessonId):$(i.currentEra)[0];if(!e)return"";i.currentLessonEntryId!==e.id&&(i.currentLessonEntryId=e.id,i.currentLessonMode="intro",i.currentLessonStoryBlockIndex=0,i.currentPostStoryStep="reflection",i.currentLessonQuizChoice=null);let a=i.currentLessonId===e.id,o=L(e),r=P(f[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=ge(e.title,e.detail,e.category,...e.related||[]),n=i.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${a?"is-active":""}" data-active-lesson="${t(e.id)}" data-era="${t(e.eraKey)}" data-section="${t(e.sectionId||"")}" data-mood="${t(o.mood)}" data-mode="${t(i.currentLessonMode)}" data-theme="${t(e.category)}">
      ${n?`<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${t(o.kicker)}</p>
          <h3>${t(o.title)}</h3>
          <p class="lesson-hero-line">${t(o.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da li\xE7\xE3o">
            ${o.preview.map(c=>`<span>${t(c)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>`:G(e,{insight:s,curiosity:r})}
    </section>
  `}function G(e,a={}){if(i.currentLessonMode==="story"||i.currentLessonMode==="understand"){let o=p(e.id),r=x(o);return`
      <div class="lesson-experience" data-era="${t(e.eraKey||"")}" data-section="${t(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${U(o[r],r,o.length,e)}
      </div>
    `}return Z(e,a)}function U(e,a,o,r={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},n=s.eraKey||r.eraKey||"",c=s.sectionId||r.sectionId||"",l=n==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(c),d=l?X(s,r):"",y=l?J(s,r):"",w=W(s.text),R=a===0?"eager":"lazy",E=a===0?"high":"auto";return`
    <article class="story-block ${l?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${w}" data-story-block="${t(s.id)}" data-story-index="${a%3}" data-visual="${t(s.visualType)}" data-background="${t(s.backgroundMood)}" data-mood="${t(H())}" data-era="${t(n)}" data-section="${t(c)}" data-prehistory-artifact="${t(d)}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${d==="flint"?`<picture class="prehistory-flint-picture">
          <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
          <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${R}" decoding="async" fetchpriority="${E}" />
        </picture>`:""}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${w}">
        ${l?"":`<span class="prehistory-moment-label">Momento ${a+1} de ${o}</span>`}
        ${y?`<h3 class="prehistory-narrative-title">${t(y)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${t(s.text)}">
          ${Y(s.text)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      ${K(r,a,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${a===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${a===o-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function J(e={},a={}){let o=u(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return[{keywords:["fogo","chama","fogueira","aquecer","cozinhar"],title:"A Descoberta do Fogo"},{keywords:["pedra","ferramenta","silex","raspador","cortar"],title:"A Pedra que se Tornou Ferramenta"},{keywords:["caca","pesca","animal","rasto","lanca"],title:"A Ca\xE7a Pintada na Rocha"},{keywords:["abrigo","gruta","caverna"],title:"O Primeiro Abrigo"},{keywords:["arte","rupestre","pintura","pigmento","mao"],title:"A Mem\xF3ria na Parede"},{keywords:["aldeia","agricultura","sementes","cultivo"],title:"Quando a Terra Virou Casa"}].find(s=>s.keywords.some(n=>o.includes(n)))?.title||v(a.title||"Marca na Pedra")}function X(e={},a={}){let o=u(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(r=>o.includes(r))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(r=>o.includes(r))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(r=>o.includes(r))?"painting":["abrigo","gruta","caverna"].some(r=>o.includes(r))?"shelter":"flint"}function _(e=""){let a=String(e||"").trim();if(!a)return[""];let o=a.split(/(?<=[.!?])\s+|;\s+/).map(r=>r.trim()).filter(Boolean);return o.length?o:[a]}function B(e=""){let a=String(e||"").trim().split(/\n{2,}/).map(s=>s.trim()).filter(Boolean),o=a.length?a:[String(e||"").trim()],r=[];return o.forEach(s=>{let n=_(s);if(n.length<=2){r.push(n);return}for(let c=0;c<n.length;c+=2)r.push(n.slice(c,c+2))}),r.length?r:[[""]]}function W(e=""){return B(e).reduce((a,o)=>a+o.length,0)}function Y(e=""){let a=0;return B(e).map((o,r)=>`
      <span class="cave-reveal-paragraph" style="--cave-paragraph-index: ${r}" aria-hidden="true">
        ${o.map(s=>{let n=a;return a+=1,`
            <span class="cave-reveal-line" style="--cave-line-index: ${n}" aria-hidden="true">
              ${t(s)}
            </span>
          `}).join("")}
      </span>
    `).join("")}function Z(e,a={}){let o=ae(e,a),r=ee(i.currentLessonMode),s=h.indexOf(r),n=h.length;i.currentPostStoryStep=r;let l={reflection:A,assimilation:ce,reality:le,critical:de,challenge:ue,reward:pe,nextTeaser:me}[r]||A;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${t(e.eraKey||"")}" data-section="${t(e.sectionId||"")}" data-post-story-step="${t(r)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${l(o[r],e,s,n)}
    </div>
  `}function ee(e){let a=D[e]||e||i.currentPostStoryStep||"reflection";return h.includes(a)?a:"reflection"}function ae(e,a={}){let o=L(e),r=v(e.title),s=p(e.id),n=I(e),c=q(e.eraKey,e.id);return{reflection:te(e,a.insight,n),assimilation:oe(e,s,r,n),reality:re(e,r,n),critical:se(e,r,n),challenge:ne(e),reward:{kicker:"Artefacto desbloqueado",title:"Mem\xF3ria guardada",text:n.keyTakeaway||`Guardaste uma chave de leitura sobre ${r}.`,artifact:o.preview?.[0]||"Artefacto narrativo desbloqueado",previous:"challenge"},nextTeaser:{kicker:"Pr\xF3xima porta temporal",title:c?v(c.title):"Rever a jornada",text:c?ie(r,v(c.title)):"A viagem continua quando voltares ao mapa da era.",nextLessonId:c?.id||"",previous:"reward"}}}function te(e,a="",o={}){let r=v(e.title),s=u(r);return{kicker:"Pausa de assimila\xE7\xE3o",title:"O que isto mudou?",text:o.reflection||(s.includes("fogo")?"O fogo nao mudou apenas a sobrevivencia. Mudou a forma como os humanos viviam juntos.":b(a||e.detail||j(e),150)),previous:"story"}}function oe(e,a,o,r={}){let s=[...r.evidence||[],...r.archaeology||[]],n=s.length?s.slice(0,3):a.slice(0,3).map(c=>c.text);return{kicker:"Guia hist\xF3rico",title:"O que acabaste de descobrir?",text:r.keyTakeaway||`${o} fica mais claro quando separas descoberta, escolha e consequencia.`,prompts:n.length?n:["Que problema humano aparece aqui?","Que decisao mudou a vida diaria?","Que consequencia veio depois?"],previous:"reflection"}}function re(e,a,o={}){let s=u(a).includes("fogo")?[["Energia","Hoje continuamos dependentes de energia para viver, trabalhar e comunicar."],["Tecnologia","Uma ferramenta simples pode reorganizar uma comunidade inteira."],["Seguranca","Proteger recursos importantes continua a ser uma decisao coletiva."]]:[["Tecnologia","Mudancas tecnicas alteram rotinas, trabalho e relacoes sociais."],["Comunidade","O que uma sociedade aprende muda a forma como coopera."],["Escolhas","Cada avancar tambem cria dependencias e novos custos."]];return{kicker:"Ponte ao presente",title:"Do passado para hoje",text:o.presentConnection||`${a} nao ficou preso ao passado. A mesma logica ainda aparece no presente.`,cards:s,previous:"assimilation"}}function se(e,a,o={}){let s=u(a).includes("fogo")?"O dominio do fogo foi apenas progresso?":"Esta mudanca trouxe so beneficios?";return{kicker:"Lente cr\xEDtica",title:o.reflection||s,text:o.curiosity||"Olha para o mesmo momento por lentes diferentes.",perspectives:[["Sobrevivencia","Ajudou pessoas a resistir melhor ao mundo."],["Vida social","Mudou a forma como grupos se organizavam."],["Custo","Tambem criou novas pressoes sobre recursos e ambiente."]],previous:"reality"}}function ne(e){let a=M(e.eraKey),o=a[T(e.eraKey,e.id)]||a[0];return{kicker:"Desafio",title:o?.question||"Que escolha ajudaria melhor o grupo?",quiz:o,previous:"critical"}}function ie(e,a){return`${e} abriu uma porta. A pr\xF3xima li\xE7\xE3o mostra o que mudou a seguir: ${a}.`}function K(e,a,o=""){let r=p(e.id).length,s=Math.max(1,r+h.length),n=Math.min(Math.max(a,0),s-1),c=s<=1?100:Math.round(n/(s-1)*100);return`
    <div class="lesson-next-progress ${t(o)}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
      <div class="lesson-next-progress-label">Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o \u2014 ${c}%</div>
      <div class="lesson-next-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${c}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
        <!-- Stone and firelight layers are CSS-only; progress math remains unchanged above. -->
        <span class="lesson-next-progress-fill" style="width: ${c}%"></span>
      </div>
      <div class="lesson-next-progress-scale" aria-hidden="true">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </div>
  `}function m(e,a,o){let r=p(o.id).length;return K(o,r+e,"post-story-progress")}function g(e,a="Continuar",o=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${t(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${o?"disabled":""}>${t(a)}</button>
    </div>
  `}function A(e,a,o,r){return`
    <article class="post-story-screen reflection-moment" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      ${m(o,r,a)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function ce(e,a,o,r){return`
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
          ${e.prompts.map(s=>`<p class="mentor-bubble">${t(s)}</p>`).join("")}
        </div>
      </div>
      ${m(o,r,a)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function le(e,a,o,r){return`
    <article class="post-story-screen reality-bridge" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      <div class="reality-bridge-grid">
        ${e.cards.map(([s,n])=>`
          <section>
            <strong>${t(s)}</strong>
            <p>${t(n)}</p>
          </section>
        `).join("")}
      </div>
      ${m(o,r,a)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function de(e,a,o,r){return`
    <article class="post-story-screen critical-lens" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      <div class="critical-perspectives">
        ${e.perspectives.map(([s,n])=>`
          <section>
            <strong>${t(s)}</strong>
            <p>${t(n)}</p>
          </section>
        `).join("")}
      </div>
      ${m(o,r,a)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function ue(e,a,o,r){let s=e.quiz||{question:e.title,options:[],answer:0,explanation:""},n=i.currentLessonQuizChoice!==null,c=n&&i.currentLessonQuizChoice===s.answer;return`
    <article class="post-story-screen challenge-screen" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(n?`${c?"Boa leitura.":"Quase."} ${s.explanation}`:"Escolhe pelo contexto, n\xE3o pela mem\xF3ria.")}</p>
      </div>
      <div class="lesson-quiz-options challenge-options">
        ${s.options.map((l,d)=>`
          <button class="${n&&d===s.answer?"correct":""} ${n&&d===i.currentLessonQuizChoice&&d!==s.answer?"wrong":""}" type="button" data-lesson-quiz-option="${d}">
            ${t(l)}
          </button>
        `).join("")}
      </div>
      ${m(o,r,a)}
      ${g(e.previous,"Ver recompensa",!n)}
    </article>
  `}function pe(e,a,o,r){return`
    <article class="post-story-screen reward-screen" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
        <small>${t(e.artifact)}</small>
      </div>
      ${m(o,r,a)}
      ${g(e.previous,"Ver pr\xF3xima")}
    </article>
  `}function me(e,a,o,r){return`
    <article class="post-story-screen next-lesson-teaser" data-era="${t(a.eraKey||"")}" data-section="${t(a.sectionId||"")}" data-theme="${t(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${t(e.kicker)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
      </div>
      ${m(o,r,a)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${t(e.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar \xE0 timeline</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${t(e.nextLessonId)}">Entrar na pr\xF3xima</button>`:'<button type="button" data-lesson-action="complete">Terminar</button>'}
      </div>
    </article>
  `}function x(e){let a=Math.max(0,e.length-1);return i.currentLessonStoryBlockIndex=Math.min(Math.max(i.currentLessonStoryBlockIndex||0,0),a),i.currentLessonStoryBlockIndex}async function we({updateLessonProgress:e,renderCategorySections:a}){let o=p(i.currentLessonId),r=x(o);if(r<o.length-1){i.currentLessonStoryBlockIndex=r+1,e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await a();return}i.currentLessonMode="reflection",i.currentPostStoryStep="reflection",i.currentLessonStoryBlockIndex=0,e(i.currentLessonId,{viewed:!0,storyCompleted:!0}),await a()}async function Ce({updateLessonProgress:e,renderCategorySections:a}){let o=p(i.currentLessonId),r=x(o);i.currentLessonStoryBlockIndex=Math.max(0,r-1),e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await a()}function L(e){let a=z(e.eraKey).find(d=>d.id===e.sectionId),o=v(e.title),r=u(o),s=f[e.eraKey]?.title||"Hist\xF3ria",n=a?.title||C[e.category]||"Li\xE7\xE3o",l=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(d=>d.match.some(y=>r.includes(u(y))))||{mood:e.category||"default",line:j(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:o,mood:l.mood,line:l.line,preview:l.preview,kicker:`${s} \xB7 ${n}`}}function v(e){return String(e||"").split(":")[0].trim()}function j(e){let a=e.detail||ve(e.title,e.category);return`\u201C${b(a,142)}\u201D`}function ve(e,a=""){return a==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":a==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":a==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":a==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":a==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function ge(...e){let a=u(e.filter(Boolean).join(" ")),o=S.find(r=>r.keywords.some(s=>a.includes(u(s))));return o?o.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var h,D,ye=Q(()=>{O();V();F();N();h=["reflection","assimilation","reality","critical","challenge","reward","nextTeaser"],D={interaction:"reflection",source:"reflection",insight:"reflection",recap:"reality",debate:"critical",quiz:"challenge",consolidate:"reward"}});ye();export{L as buildLessonIntroFrame,v as getLessonDisplayTitle,we as goToNextStoryBlock,Ce as goToPreviousStoryBlock,Le as renderActiveLessonPanel};
