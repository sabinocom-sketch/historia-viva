import{B as A,D as B,H,a as $,d as P,h as I,k as F,l as i,m as N,n as u,p as o,q as k,r as q,t as D,u as x,v as m,w as z,x as w,y as M,z as T}from"./chunk-VNVLKROU.js";import{a as V}from"./chunk-UEKKBUIS.js";function U(){let e=i.currentLessonId?w(i.currentLessonId):x(i.currentEra)[0];return e?S(e).mood:""}function Pe(){let e=i.currentLessonId?w(i.currentLessonId):x(i.currentEra)[0];if(!e)return"";i.currentLessonEntryId!==e.id&&(i.currentLessonEntryId=e.id,i.currentLessonMode="intro",i.currentLessonStoryBlockIndex=0,i.currentPostStoryStep="reflection",i.currentLessonQuizChoice=null);let a=i.currentLessonId===e.id,t=S(e),r=q($[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=be(e.title,e.detail,e.category,...e.related||[]),n=i.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${a?"is-active":""}" data-active-lesson="${o(e.id)}" data-era="${o(e.eraKey)}" data-section="${o(e.sectionId||"")}" data-mood="${o(t.mood)}" data-mode="${o(i.currentLessonMode)}" data-theme="${o(e.category)}">
      ${n?`<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${o(t.kicker)}</p>
          <h3>${o(t.title)}</h3>
          <p class="lesson-hero-line">${o(t.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da li\xE7\xE3o">
            ${t.preview.map(c=>`<span>${o(c)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>`:J(e,{insight:s,curiosity:r})}
    </section>
  `}function J(e,a={}){if(i.currentLessonMode==="story"||i.currentLessonMode==="understand"){let t=m(e.id),r=L(t);return`
      <div class="lesson-experience" data-era="${o(e.eraKey||"")}" data-section="${o(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${X(t[r],r,t.length,e)}
      </div>
    `}return ae(e,a)}function X(e,a,t,r={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},n=s.eraKey||r.eraKey||"",c=s.sectionId||r.sectionId||"",l=n==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(c),d=l?W(s,r):"",h=l?_(s,r):"",b=se(s.text),C=Z(b),Q=a===0?"eager":"lazy",O=a===0?"high":"auto";return`
    <article class="story-block ${l?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${C}" data-story-block="${o(s.id)}" data-story-index="${a%3}" data-visual="${o(s.visualType)}" data-background="${o(s.backgroundMood)}" data-mood="${o(U())}" data-era="${o(n)}" data-section="${o(c)}" data-prehistory-artifact="${o(d)}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${d==="flint"?`<picture class="prehistory-flint-picture">
          <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
          <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${Q}" decoding="async" fetchpriority="${O}" />
        </picture>`:""}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${C}">
        ${l?"":`<span class="prehistory-moment-label">Momento ${a+1} de ${t}</span>`}
        ${h?`<h3 class="prehistory-narrative-title">${o(h)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${o(b)}">
          ${ee(b)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      ${R(r,a,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${a===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${a===t-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function _(e={},a={}){let t=u(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return[{keywords:["fogo","chama","fogueira","aquecer","cozinhar"],title:"A Descoberta do Fogo"},{keywords:["pedra","ferramenta","silex","raspador","cortar"],title:"A Pedra que se Tornou Ferramenta"},{keywords:["caca","pesca","animal","rasto","lanca"],title:"A Ca\xE7a Pintada na Rocha"},{keywords:["abrigo","gruta","caverna"],title:"O Primeiro Abrigo"},{keywords:["arte","rupestre","pintura","pigmento","mao"],title:"A Mem\xF3ria na Parede"},{keywords:["aldeia","agricultura","sementes","cultivo"],title:"Quando a Terra Virou Casa"}].find(s=>s.keywords.some(n=>t.includes(n)))?.title||v(a.title||"Marca na Pedra")}function W(e={},a={}){let t=u(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(r=>t.includes(r))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(r=>t.includes(r))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(r=>t.includes(r))?"painting":["abrigo","gruta","caverna"].some(r=>t.includes(r))?"shelter":"flint"}function Y(e=""){let a=String(e||"").trim();if(!a)return[""];let t=a.split(/(?<=[.!?])\s+|;\s+/).map(r=>r.trim()).filter(Boolean);return t.length?t:[a]}function j(e=""){let a=String(e||"").trim().split(/\n{2,}/).map(s=>s.trim()).filter(Boolean),t=a.length?a:[String(e||"").trim()],r=[];return t.forEach(s=>{let n=Y(s);if(n.length<=2){r.push(n);return}for(let c=0;c<n.length;c+=2)r.push(n.slice(c,c+2))}),r.length?r:[[""]]}function Z(e=""){return j(e).reduce((a,t)=>a+t.length,0)}function ee(e=""){let a=0;return j(e).map((t,r)=>`
      <span class="cave-reveal-paragraph" style="--cave-paragraph-index: ${r}" aria-hidden="true">
        ${t.map(s=>{let n=a;return a+=1,`
            <span class="cave-reveal-line" style="--cave-line-index: ${n}" aria-hidden="true">
              ${o(s)}
            </span>
          `}).join("")}
      </span>
    `).join("")}function ae(e,a={}){let t=oe(e,a),r=te(i.currentLessonMode),s=f.indexOf(r),n=f.length;i.currentPostStoryStep=r;let l={reflection:K,assimilation:pe,reality:me,critical:ge,challenge:ve,reward:ye,nextTeaser:he}[r]||K;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${o(e.eraKey||"")}" data-section="${o(e.sectionId||"")}" data-post-story-step="${o(r)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${l(t[r],e,s,n)}
    </div>
  `}function te(e){let a=G[e]||e||i.currentPostStoryStep||"reflection";return f.includes(a)?a:"reflection"}function oe(e,a={}){let t=S(e),r=v(e.title),s=m(e.id),n=z(e),c=M(e.eraKey,e.id);return{reflection:ne(e,a.insight,n),assimilation:ie(e,s,r,n),reality:ce(e,r,n),critical:le(e,r,n),challenge:de(e),reward:{kicker:"Artefacto desbloqueado",title:"Mem\xF3ria guardada",text:p(n.keyTakeaway||`Guardaste uma chave de leitura sobre ${r}.`,20),artifact:t.preview?.[0]||"Artefacto narrativo desbloqueado",previous:"challenge"},nextTeaser:{kicker:"Pr\xF3xima porta temporal",title:c?v(c.title):"Rever a jornada",text:c?p(ue(r,v(c.title)),20):"A viagem continua quando voltares ao mapa da era.",nextLessonId:c?.id||"",previous:"reward"}}}function p(e="",a=24){let t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length<=a?String(e||"").trim():`${t.slice(0,a).join(" ")}...`}function re(){return typeof window<"u"&&window.matchMedia?.("(max-width: 768px) and (orientation: portrait)").matches}function se(e=""){return p(e,re()?32:42)}function ne(e,a="",t={}){let r=v(e.title),s=u(r),n=t.reflection||(s.includes("fogo")?"O fogo nao mudou apenas a sobrevivencia. Mudou a forma como os humanos viviam juntos.":k(a||e.detail||E(e),150));return{kicker:"Pausa de assimila\xE7\xE3o",title:"O que isto mudou?",text:p(n,24),previous:"story"}}function ie(e,a,t,r={}){let s=[...r.evidence||[],...r.archaeology||[]],n=s.length?s.slice(0,2):a.slice(0,2).map(c=>c.text);return{kicker:"Guia hist\xF3rico",title:"O essencial",text:p(r.keyTakeaway||`${t} fica mais claro quando separas descoberta, escolha e consequencia.`,22),prompts:(n.length?n:["Que problema humano aparece aqui?","Que consequencia veio depois?"]).map(c=>p(c,14)),previous:"reflection"}}function ce(e,a,t={}){let s=u(a).includes("fogo")?[["Energia","Hoje continuamos dependentes de energia para viver, trabalhar e comunicar."],["Tecnologia","Uma ferramenta simples pode reorganizar uma comunidade inteira."],["Seguranca","Proteger recursos importantes continua a ser uma decisao coletiva."]]:[["Tecnologia","Mudancas tecnicas alteram rotinas, trabalho e relacoes sociais."],["Comunidade","O que uma sociedade aprende muda a forma como coopera."],["Escolhas","Cada avancar tambem cria dependencias e novos custos."]];return{kicker:"Ponte ao presente",title:"Do passado para hoje",text:p(t.presentConnection||`${a} nao ficou preso ao passado. A mesma logica ainda aparece no presente.`,22),cards:s.slice(0,2).map(([n,c])=>[n,p(c,14)]),previous:"assimilation"}}function le(e,a,t={}){let s=u(a).includes("fogo")?"O dominio do fogo foi apenas progresso?":"Esta mudanca trouxe so beneficios?";return{kicker:"Lente cr\xEDtica",title:t.reflection||s,text:p(t.curiosity||"Olha para o mesmo momento por lentes diferentes.",20),perspectives:[["Sobrevivencia","Ajudou pessoas a resistir melhor ao mundo."],["Vida social","Mudou a forma como grupos se organizavam."],["Custo","Tambem criou novas pressoes sobre recursos e ambiente."]].slice(0,2).map(([n,c])=>[n,p(c,14)]),previous:"reality"}}function de(e){let a=A(e.eraKey),t=a[B(e.eraKey,e.id)]||a[0];return{kicker:"Desafio",title:t?.question||"Que escolha ajudaria melhor o grupo?",quiz:t,previous:"critical"}}function ue(e,a){return`${e} abriu uma porta. A pr\xF3xima li\xE7\xE3o mostra o que mudou a seguir: ${a}.`}function R(e,a,t=""){let r=m(e.id).length,s=Math.max(1,r+f.length),n=Math.min(Math.max(a,0),s-1),c=s<=1?100:Math.round(n/(s-1)*100);return`
    <div class="lesson-next-progress ${o(t)}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
      <div class="lesson-next-progress-label">Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o \u2014 ${c}%</div>
      <div class="lesson-next-progress-meter">
        <div class="lesson-next-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${c}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
          <!-- Stone and firelight layers are CSS-only; progress math remains unchanged above. -->
          <span class="lesson-next-progress-fill" style="width: ${c}%"></span>
        </div>
        <span class="lesson-next-progress-percent" aria-hidden="true">${c}%</span>
      </div>
      <div class="lesson-next-progress-scale" aria-hidden="true">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </div>
  `}function g(e,a,t){let r=m(t.id).length;return R(t,r+e,"post-story-progress")}function y(e,a="Continuar",t=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${o(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${t?"disabled":""}>${o(a)}</button>
    </div>
  `}function K(e,a,t,r){return`
    <article class="post-story-screen reflection-moment" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      ${g(t,r,a)}
      ${y(e.previous,"Continuar")}
    </article>
  `}function pe(e,a,t,r){return`
    <article class="post-story-screen assimilation-chatbot" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="mentor-panel">
        <span class="mentor-orb" aria-hidden="true"></span>
        <div class="post-story-copy">
          <span class="post-story-kicker">${o(e.kicker)}</span>
          <h3>${o(e.title)}</h3>
          <p>${o(e.text)}</p>
        </div>
        <div class="mentor-bubbles" aria-label="Pistas do guia hist\xF3rico">
          ${e.prompts.map(s=>`<p class="mentor-bubble">${o(s)}</p>`).join("")}
        </div>
      </div>
      ${g(t,r,a)}
      ${y(e.previous,"Continuar")}
    </article>
  `}function me(e,a,t,r){return`
    <article class="post-story-screen reality-bridge" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      <div class="reality-bridge-grid">
        ${e.cards.map(([s,n])=>`
          <section>
            <strong>${o(s)}</strong>
            <p>${o(n)}</p>
          </section>
        `).join("")}
      </div>
      ${g(t,r,a)}
      ${y(e.previous,"Continuar")}
    </article>
  `}function ge(e,a,t,r){return`
    <article class="post-story-screen critical-lens" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      <div class="critical-perspectives">
        ${e.perspectives.map(([s,n])=>`
          <section>
            <strong>${o(s)}</strong>
            <p>${o(n)}</p>
          </section>
        `).join("")}
      </div>
      ${g(t,r,a)}
      ${y(e.previous,"Continuar")}
    </article>
  `}function ve(e,a,t,r){let s=e.quiz||{question:e.title,options:[],answer:0,explanation:""},n=i.currentLessonQuizChoice!==null,c=n&&i.currentLessonQuizChoice===s.answer;return`
    <article class="post-story-screen challenge-screen" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(n?`${c?"Boa leitura.":"Quase."} ${s.explanation}`:"Escolhe pelo contexto, n\xE3o pela mem\xF3ria.")}</p>
      </div>
      <div class="lesson-quiz-options challenge-options">
        ${s.options.map((l,d)=>`
          <button class="${n&&d===s.answer?"correct":""} ${n&&d===i.currentLessonQuizChoice&&d!==s.answer?"wrong":""}" type="button" data-lesson-quiz-option="${d}">
            ${o(l)}
          </button>
        `).join("")}
      </div>
      ${g(t,r,a)}
      ${y(e.previous,"Ver recompensa",!n)}
    </article>
  `}function ye(e,a,t,r){return`
    <article class="post-story-screen reward-screen" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
        <small>${o(e.artifact)}</small>
      </div>
      ${g(t,r,a)}
      ${y(e.previous,"Ver pr\xF3xima")}
    </article>
  `}function he(e,a,t,r){return`
    <article class="post-story-screen next-lesson-teaser" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      ${g(t,r,a)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${o(e.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar \xE0 timeline</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${o(e.nextLessonId)}">Entrar na pr\xF3xima</button>`:'<button type="button" data-lesson-action="complete">Terminar</button>'}
      </div>
    </article>
  `}function L(e){let a=Math.max(0,e.length-1);return i.currentLessonStoryBlockIndex=Math.min(Math.max(i.currentLessonStoryBlockIndex||0,0),a),i.currentLessonStoryBlockIndex}async function Ie({updateLessonProgress:e,renderCategorySections:a}){let t=m(i.currentLessonId),r=L(t);if(r<t.length-1){i.currentLessonStoryBlockIndex=r+1,e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await a();return}i.currentLessonMode="reflection",i.currentPostStoryStep="reflection",i.currentLessonStoryBlockIndex=0,e(i.currentLessonId,{viewed:!0,storyCompleted:!0}),await a()}async function qe({updateLessonProgress:e,renderCategorySections:a}){let t=m(i.currentLessonId),r=L(t);i.currentLessonStoryBlockIndex=Math.max(0,r-1),e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await a()}function S(e){let a=T(e.eraKey).find(d=>d.id===e.sectionId),t=v(e.title),r=u(t),s=$[e.eraKey]?.title||"Hist\xF3ria",n=a?.title||P[e.category]||"Li\xE7\xE3o",l=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(d=>d.match.some(h=>r.includes(u(h))))||{mood:e.category||"default",line:E(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:t,mood:l.mood,line:l.line,preview:l.preview,kicker:`${s} \xB7 ${n}`}}function v(e){return String(e||"").split(":")[0].trim()}function E(e){let a=e.detail||fe(e.title,e.category);return`\u201C${k(a,142)}\u201D`}function fe(e,a=""){return a==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":a==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":a==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":a==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":a==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function be(...e){let a=u(e.filter(Boolean).join(" ")),t=I.find(r=>r.keywords.some(s=>a.includes(u(s))));return t?t.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var f,G,$e=V(()=>{F();N();D();H();f=["reflection","assimilation","reality","critical","challenge","reward","nextTeaser"],G={interaction:"reflection",source:"reflection",insight:"reflection",recap:"reality",debate:"critical",quiz:"challenge",consolidate:"reward"}});$e();export{S as buildLessonIntroFrame,v as getLessonDisplayTitle,Ie as goToNextStoryBlock,qe as goToPreviousStoryBlock,Pe as renderActiveLessonPanel};
