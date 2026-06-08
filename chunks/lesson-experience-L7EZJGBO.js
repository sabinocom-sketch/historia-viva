import{B as j,D as K,H as J,a as k,d as P,h as I,k as H,l as n,m as U,n as p,p as o,q as f,r as z,t as W,u as L,v as q,w as M,x as w,y as A,z as B}from"./chunk-Y7IS6Y45.js";import{a as G}from"./chunk-UEKKBUIS.js";function _(){let e=n.currentLessonId?w(n.currentLessonId):L(n.currentEra)[0];return e?C(e).mood:""}function Pe(){let e=n.currentLessonId?w(n.currentLessonId):L(n.currentEra)[0];if(!e)return"";n.currentLessonEntryId!==e.id&&(n.currentLessonEntryId=e.id,n.currentLessonMode="intro",n.currentLessonStoryBlockIndex=0,n.currentPostStoryStep="reflection",n.currentLessonQuizChoice=null);let a=n.currentLessonId===e.id,t=C(e),r=z(k[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=xe(e.title,e.detail,e.category,...e.related||[]),i=n.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${a?"is-active":""}" data-active-lesson="${o(e.id)}" data-era="${o(e.eraKey)}" data-section="${o(e.sectionId||"")}" data-mood="${o(t.mood)}" data-mode="${o(n.currentLessonMode)}" data-theme="${o(e.category)}">
      ${i?`<div class="lesson-hero">
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
      </div>`:Y(e,{insight:s,curiosity:r})}
    </section>
  `}function Y(e,a={}){if(n.currentLessonMode==="story"||n.currentLessonMode==="understand"){let t=h(e.id),r=S(t);return`
      <div class="lesson-experience" data-era="${o(e.eraKey||"")}" data-section="${o(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${Z(t[r],r,t.length,e)}
      </div>
    `}return oe(e,a)}function Z(e,a,t,r={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},i=s.eraKey||r.eraKey||"",c=s.sectionId||r.sectionId||"",l=i==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(c),u=l?ae(s,r):"",y=l?ee(s,r):"",x=s.text,T=te(x),N=a===0?"eager":"lazy",D=a===0?"high":"auto";return`
    <article class="story-block ${l?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${T}" data-story-block="${o(s.id)}" data-story-index="${a%3}" data-visual="${o(s.visualType)}" data-background="${o(s.backgroundMood)}" data-mood="${o(_())}" data-era="${o(i)}" data-section="${o(c)}" data-prehistory-artifact="${o(u)}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${u==="flint"?`<picture class="prehistory-flint-picture">
          <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
          <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${N}" decoding="async" fetchpriority="${D}" />
        </picture>`:""}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${T}">
        ${l?"":`<span class="prehistory-moment-label">Momento ${a+1} de ${t}</span>`}
        ${y?`<h3 class="prehistory-narrative-title">${o(y)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${o(x)}">
          ${re(x)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      ${F(r,a,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${a===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${a===t-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function ee(e={},a={}){return g(a.title||e.title||"Marca na Pedra")}function ae(e={},a={}){let t=p(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(r=>t.includes(r))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(r=>t.includes(r))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(r=>t.includes(r))?"painting":["abrigo","gruta","caverna"].some(r=>t.includes(r))?"shelter":"flint"}function R(e=""){let a=String(e||"").trim();if(!a)return[""];let t=a.split(/(?<=[.!?])\s+|;\s+/).map(r=>r.trim()).filter(Boolean);return t.length?t:[a]}function te(e=""){return R(e).length}function re(e=""){return`
    <span class="cave-reveal-paragraph" aria-hidden="true">
      ${R(e).map((a,t)=>`
        <span class="cave-reveal-line" style="--cave-line-index: ${t}" aria-hidden="true">${o(a)}</span>
      `).join(" ")}
    </span>
  `}function oe(e,a={}){let t=ie(e,a),r=se(n.currentLessonMode),s=b.indexOf(r),i=b.length;n.currentPostStoryStep=r;let l={reflection:Q,assimilation:ge,reality:ve,critical:he,challenge:ye,reward:fe,nextTeaser:be}[r]||Q;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${o(e.eraKey||"")}" data-section="${o(e.sectionId||"")}" data-post-story-step="${o(r)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${l(t[r],e,s,i)}
    </div>
  `}function se(e){let a=X[e]||e||n.currentPostStoryStep||"reflection";return b.includes(a)?a:"reflection"}function ie(e,a={}){let t=C(e),r=g(e.title),s=q(e.id),i=M(e),c=A(e.eraKey,e.id);return{reflection:ce(e,a.insight,i),assimilation:le(e,s,r,i),reality:ue(e,r,i),critical:de(e,r,i),challenge:pe(e),reward:{kicker:"Mem\xF3ria da cena",title:"Mem\xF3ria guardada",text:d(i.keyTakeaway||`Guardaste uma imagem mental sobre ${r}. Agora consegues lembrar o gesto e a consequ\xEAncia.`,20),artifact:t.preview?.[0]||"Artefacto narrativo desbloqueado",previous:"challenge"},nextTeaser:{kicker:"Pr\xF3xima cena",title:c?g(c.title):"Rever a jornada",text:c?d(me(r,g(c.title)),20):"A viagem continua quando voltares ao mapa da era.",nextLessonId:c?.id||"",previous:"reward"}}}function E(e=""){let a=String(e||"").replace(/\s+/g," ").trim();return a?a.match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g)?.map(t=>t.trim()).filter(Boolean)||[a]:[]}function O(e=""){return String(e||"").trim().split(/\s+/).filter(Boolean).length}function d(e="",a=24){let t=E(e);if(!t.length)return"";let r=[],s=0;for(let i of t){let c=O(i);if(r.length&&s+c>a||(r.push(i),s+=c,s>=a))break}return r.join(" ")}function ne(e,a){let t=E(e?.text);if(!t.length)return[e];let r=[],s=[],i=0;return t.forEach(c=>{let l=O(c);s.length&&i+l>a&&(r.push(s.join(" ")),s=[],i=0),s.push(c),i+=l}),s.length&&r.push(s.join(" ")),r.map((c,l)=>({...e,id:`${e.id||"story"}-${l+1}`,text:c}))}function h(e){return q(e).flatMap(t=>ne(t,55))}function ce(e,a="",t={}){let r=g(e.title),s=$(e,r),i=s.reflectionText||t.reflection||f(a||e.detail||V(e),150);return{kicker:"Depois da cena",title:s.reflectionTitle||"O que ficou diferente?",text:d(i,24),previous:"story"}}function le(e,a,t,r={}){let s=$(e,t),i=[...r.evidence||[],...r.archaeology||[]],c=s.prompts||(i.length?i.slice(0,2):a.slice(0,2).map(l=>l.text));return{kicker:"Guia da cena",title:s.assimilationTitle||"Seguir as pistas",text:d(s.assimilationText||r.keyTakeaway||`${t} ganha sentido quando vemos pessoas, objetos, escolhas e consequ\xEAncias.`,22),prompts:(c.length?c:["Que gesto humano aparece aqui?","Que consequ\xEAncia veio depois?"]).map(l=>d(l,14)),previous:"reflection"}}function ue(e,a,t={}){let r=$(e,a),s=r.realityCards||[["Gesto","Uma t\xE9cnica pequena podia mudar o que uma m\xE3o conseguia fazer."],["Presente","As ferramentas de hoje continuam a prolongar o corpo humano."]];return{kicker:"Ponte ao presente",title:r.realityTitle||"A marca no presente",text:d(r.realityText||t.presentConnection||`${a} ainda importa quando ajuda a perceber uma escolha humana reconhec\xEDvel.`,22),cards:s.slice(0,2).map(([i,c])=>[i,d(c,14)]),previous:"assimilation"}}function de(e,a,t={}){let r=$(e,a);return{kicker:"Lente cr\xEDtica",title:r.criticalTitle||t.reflection||"Quem ganhou e quem perdeu?",text:d(r.criticalText||t.curiosity||"Uma boa leitura hist\xF3rica pergunta que possibilidades se abriram e que custos apareceram.",20),perspectives:(r.perspectives||[["Possibilidade","Algumas pessoas ganharam novas formas de agir."],["Limite","Outras enfrentaram riscos, sil\xEAncio ou depend\xEAncia."]]).slice(0,2).map(([s,i])=>[s,d(i,14)]),previous:"reality"}}function $(e={},a=""){let t=p(`${a} ${e.title||""} ${e.detail||""}`);return t.includes("fogo")?{reflectionTitle:"A noite mudou",reflectionText:"Quando a chama ficava acesa, a noite deixava de ser s\xF3 amea\xE7a. Havia calor, luz e rostos reunidos.",assimilationTitle:"Ler as cinzas",assimilationText:"Cinzas e ossos queimados n\xE3o falam sozinhos. Deixam pistas de cuidado repetido e de noites protegidas.",prompts:["Quem alimentava a fogueira quando todos tinham sono?","Que restos provariam que aquele fogo foi usado por humanos?"],realityTitle:"Ainda guardamos energia",realityText:"Hoje carregamos baterias; antes, algu\xE9m protegia brasas. A ideia continua pr\xF3xima: guardar energia para viver melhor.",realityCards:[["Luz","A energia ainda organiza trabalho, descanso e seguran\xE7a."],["Cuidado","Guardar uma fonte vital continua a exigir aten\xE7\xE3o coletiva."]],criticalTitle:"Quem ficava de vigia?",criticalText:"O fogo ajudava, mas tamb\xE9m exigia trabalho. Progresso quase nunca chega sem novas responsabilidades.",perspectives:[["Ganho","Mais calor, mais luz e alimento mais seguro."],["Custo","Era preciso vigiar, alimentar e proteger a chama."]]}:t.includes("ferramentas de pedra")||t.includes("pedra")?{reflectionTitle:"A m\xE3o ganhou alcance",reflectionText:"Depois do golpe certo, a pedra deixava de ser paisagem. Podia cortar, raspar e abrir novas possibilidades.",assimilationTitle:"Ler as lascas",assimilationText:"Uma lasca guarda escolhas: for\xE7a, \xE2ngulo e paci\xEAncia. Nela vemos t\xE9cnica, erro e aprendizagem.",prompts:["Que gesto humano ficou marcado na pedra?","O que uma lasca revela sobre quem aprendeu a talhar?"],realityTitle:"Ferramentas prolongam o corpo",realityText:"Do s\xEDlex ao computador, uma ferramenta faz a mesma pergunta: que limite do corpo queremos ultrapassar?",realityCards:[["Gesto","Uma t\xE9cnica pequena podia mudar o alcance da m\xE3o."],["Presente","As ferramentas de hoje continuam essa mesma ideia."]],criticalTitle:"Quem dominava a t\xE9cnica?",criticalText:"A ferramenta ajudava o grupo, mas o saber precisava de ser ensinado. Sem aprendizagem, a pedra voltava a ser s\xF3 pedra.",perspectives:[["Ganho","Cortar, raspar e fabricar ficou mais f\xE1cil."],["Risco","Um golpe errado podia destruir a pe\xE7a."]]}:{reflectionTitle:"O que ficou diferente?",reflectionText:f(e.detail||`${a} mudou a vida de pessoas concretas.`,140),assimilationTitle:"Seguir as pistas",assimilationText:`${a} ganha sentido quando vemos pessoas, objetos, escolhas e consequ\xEAncias.`,realityTitle:"A marca no presente",realityText:`${a} ainda importa quando ajuda a perceber uma escolha humana que continua reconhec\xEDvel.`,criticalTitle:"Quem ganhou e quem perdeu?",criticalText:"Uma boa leitura hist\xF3rica pergunta sempre que possibilidades se abriram e que custos apareceram.",perspectives:[["Possibilidade","Algumas pessoas ganharam novas formas de agir."],["Limite","Outras enfrentaram riscos, sil\xEAncio ou depend\xEAncia."]]}}function pe(e){let a=j(e.eraKey),t=a[K(e.eraKey,e.id)]||a[0];return{kicker:"Decis\xE3o r\xE1pida",title:t?.question||"Que escolha ajudaria melhor o grupo?",quiz:t,previous:"critical"}}function me(e,a){return`${e} abriu uma porta. A pr\xF3xima li\xE7\xE3o mostra o que mudou a seguir: ${a}.`}function F(e,a,t=""){let r=h(e.id).length,s=Math.max(1,r+b.length),i=Math.min(Math.max(a,0),s-1),c=s<=1?100:Math.round(i/(s-1)*100);return`
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
  `}function m(e,a,t){let r=h(t.id).length;return F(t,r+e,"post-story-progress")}function v(e,a="Continuar",t=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${o(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${t?"disabled":""}>${o(a)}</button>
    </div>
  `}function Q(e,a,t,r){return`
    <article class="post-story-screen reflection-moment" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      ${m(t,r,a)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function ge(e,a,t,r){return`
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
      ${m(t,r,a)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function ve(e,a,t,r){return`
    <article class="post-story-screen reality-bridge" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      <div class="reality-bridge-grid">
        ${e.cards.map(([s,i])=>`
          <section>
            <strong>${o(s)}</strong>
            <p>${o(i)}</p>
          </section>
        `).join("")}
      </div>
      ${m(t,r,a)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function he(e,a,t,r){return`
    <article class="post-story-screen critical-lens" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      <div class="critical-perspectives">
        ${e.perspectives.map(([s,i])=>`
          <section>
            <strong>${o(s)}</strong>
            <p>${o(i)}</p>
          </section>
        `).join("")}
      </div>
      ${m(t,r,a)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function ye(e,a,t,r){let s=e.quiz||{question:e.title,options:[],answer:0,explanation:""},i=n.currentLessonQuizChoice!==null,c=i&&n.currentLessonQuizChoice===s.answer;return`
    <article class="post-story-screen challenge-screen" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(i?`${c?"Boa leitura.":"Quase."} ${s.explanation}`:"Escolhe pela cena, pelos vest\xEDgios e pela consequ\xEAncia.")}</p>
      </div>
      <div class="lesson-quiz-options challenge-options">
        ${s.options.map((l,u)=>`
          <button class="${i&&u===s.answer?"correct":""} ${i&&u===n.currentLessonQuizChoice&&u!==s.answer?"wrong":""}" type="button" data-lesson-quiz-option="${u}">
            ${o(l)}
          </button>
        `).join("")}
      </div>
      ${m(t,r,a)}
      ${v(e.previous,"Ver recompensa",!i)}
    </article>
  `}function fe(e,a,t,r){return`
    <article class="post-story-screen reward-screen" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
        <small>${o(e.artifact)}</small>
      </div>
      ${m(t,r,a)}
      ${v(e.previous,"Ver pr\xF3xima")}
    </article>
  `}function be(e,a,t,r){return`
    <article class="post-story-screen next-lesson-teaser" data-era="${o(a.eraKey||"")}" data-section="${o(a.sectionId||"")}" data-theme="${o(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      ${m(t,r,a)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${o(e.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar \xE0 timeline</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${o(e.nextLessonId)}">Entrar na pr\xF3xima</button>`:'<button type="button" data-lesson-action="complete">Terminar</button>'}
      </div>
    </article>
  `}function S(e){let a=Math.max(0,e.length-1);return n.currentLessonStoryBlockIndex=Math.min(Math.max(n.currentLessonStoryBlockIndex||0,0),a),n.currentLessonStoryBlockIndex}async function Ie({updateLessonProgress:e,renderCategorySections:a}){let t=h(n.currentLessonId),r=S(t);if(r<t.length-1){n.currentLessonStoryBlockIndex=r+1,e(n.currentLessonId,{viewed:!0,storyBlockIndex:n.currentLessonStoryBlockIndex}),await a();return}n.currentLessonMode="reflection",n.currentPostStoryStep="reflection",n.currentLessonStoryBlockIndex=0,e(n.currentLessonId,{viewed:!0,storyCompleted:!0}),await a()}async function ze({updateLessonProgress:e,renderCategorySections:a}){let t=h(n.currentLessonId),r=S(t);n.currentLessonStoryBlockIndex=Math.max(0,r-1),e(n.currentLessonId,{viewed:!0,storyBlockIndex:n.currentLessonStoryBlockIndex}),await a()}function C(e){let a=B(e.eraKey).find(u=>u.id===e.sectionId),t=g(e.title),r=p(t),s=k[e.eraKey]?.title||"Hist\xF3ria",i=a?.title||P[e.category]||"Li\xE7\xE3o",l=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(u=>u.match.some(y=>r.includes(p(y))))||{mood:e.category||"default",line:V(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:t,mood:l.mood,line:l.line,preview:l.preview,kicker:`${s} \xB7 ${i}`}}function g(e){return String(e||"").split(":")[0].trim()}function V(e){let a=e.detail||$e(e.title,e.category);return`\u201C${f(a,142)}\u201D`}function $e(e,a=""){return a==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":a==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":a==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":a==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":a==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function xe(...e){let a=p(e.filter(Boolean).join(" ")),t=I.find(r=>r.keywords.some(s=>a.includes(p(s))));return t?t.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var b,X,ke=G(()=>{H();U();W();J();b=["reflection","assimilation","reality","critical","challenge","reward","nextTeaser"],X={interaction:"reflection",source:"reflection",insight:"reflection",recap:"reality",debate:"critical",quiz:"challenge",consolidate:"reward"}});ke();export{C as buildLessonIntroFrame,g as getLessonDisplayTitle,Ie as goToNextStoryBlock,ze as goToPreviousStoryBlock,Pe as renderActiveLessonPanel};
