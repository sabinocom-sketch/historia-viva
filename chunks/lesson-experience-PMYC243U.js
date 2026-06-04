import{B as A,D as K,H as U,a as $,d as I,h as q,k as H,l as c,m as W,n as u,p as r,q as k,r as z,t as G,u as x,v as w,w as M,x as L,y as T,z as B}from"./chunk-VNVLKROU.js";import{a as D}from"./chunk-UEKKBUIS.js";function X(){let e=c.currentLessonId?L(c.currentLessonId):x(c.currentEra)[0];return e?C(e).mood:""}function ze(){let e=c.currentLessonId?L(c.currentLessonId):x(c.currentEra)[0];if(!e)return"";c.currentLessonEntryId!==e.id&&(c.currentLessonEntryId=e.id,c.currentLessonMode="intro",c.currentLessonStoryBlockIndex=0,c.currentPostStoryStep="reflection",c.currentLessonQuizChoice=null);let t=c.currentLessonId===e.id,a=C(e),o=z($[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=xe(e.title,e.detail,e.category,...e.related||[]),n=c.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${t?"is-active":""}" data-active-lesson="${r(e.id)}" data-era="${r(e.eraKey)}" data-section="${r(e.sectionId||"")}" data-mood="${r(a.mood)}" data-mode="${r(c.currentLessonMode)}" data-theme="${r(e.category)}">
      ${n?`<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${r(a.kicker)}</p>
          <h3>${r(a.title)}</h3>
          <p class="lesson-hero-line">${r(a.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da li\xE7\xE3o">
            ${a.preview.map(i=>`<span>${r(i)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>`:_(e,{insight:s,curiosity:o})}
    </section>
  `}function _(e,t={}){if(c.currentLessonMode==="story"||c.currentLessonMode==="understand"){let a=h(e.id),o=S(a);return`
      <div class="lesson-experience" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${Y(a[o],o,a.length,e)}
      </div>
    `}return re(e,t)}function Y(e,t,a,o={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},n=s.eraKey||o.eraKey||"",i=s.sectionId||o.sectionId||"",l=n==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(i),d=l?ee(s,o):"",y=l?Z(s,o):"",b=s.text,P=ae(b),V=t===0?"eager":"lazy",N=t===0?"high":"auto";return`
    <article class="story-block ${l?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${P}" data-story-block="${r(s.id)}" data-story-index="${t%3}" data-visual="${r(s.visualType)}" data-background="${r(s.backgroundMood)}" data-mood="${r(X())}" data-era="${r(n)}" data-section="${r(i)}" data-prehistory-artifact="${r(d)}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${d==="flint"?`<picture class="prehistory-flint-picture">
          <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
          <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${V}" decoding="async" fetchpriority="${N}" />
        </picture>`:""}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${P}">
        ${l?"":`<span class="prehistory-moment-label">Momento ${t+1} de ${a}</span>`}
        ${y?`<h3 class="prehistory-narrative-title">${r(y)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${r(b)}">
          ${oe(b)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      ${O(o,t,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${t===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${t===a-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function Z(e={},t={}){let a=u(`${t.title||""} ${e.text||""} ${e.visualType||""}`);return[{keywords:["fogo","chama","fogueira","aquecer","cozinhar"],title:"A Descoberta do Fogo"},{keywords:["pedra","ferramenta","silex","raspador","cortar"],title:"A Pedra que se Tornou Ferramenta"},{keywords:["caca","pesca","animal","rasto","lanca"],title:"A Ca\xE7a Pintada na Rocha"},{keywords:["abrigo","gruta","caverna"],title:"O Primeiro Abrigo"},{keywords:["arte","rupestre","pintura","pigmento","mao"],title:"A Mem\xF3ria na Parede"},{keywords:["aldeia","agricultura","sementes","cultivo"],title:"Quando a Terra Virou Casa"}].find(s=>s.keywords.some(n=>a.includes(n)))?.title||g(t.title||"Marca na Pedra")}function ee(e={},t={}){let a=u(`${t.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(o=>a.includes(o))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(o=>a.includes(o))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(o=>a.includes(o))?"painting":["abrigo","gruta","caverna"].some(o=>a.includes(o))?"shelter":"flint"}function te(e=""){let t=String(e||"").trim();if(!t)return[""];let a=t.split(/(?<=[.!?])\s+|;\s+/).map(o=>o.trim()).filter(Boolean);return a.length?a:[t]}function R(e=""){let t=String(e||"").trim().split(/\n{2,}/).map(s=>s.trim()).filter(Boolean),a=t.length?t:[String(e||"").trim()],o=[];return a.forEach(s=>{let n=te(s);if(n.length<=2){o.push(n);return}for(let i=0;i<n.length;i+=2)o.push(n.slice(i,i+2))}),o.length?o:[[""]]}function ae(e=""){return R(e).reduce((t,a)=>t+a.length,0)}function oe(e=""){let t=0;return R(e).map((a,o)=>`
      <span class="cave-reveal-paragraph" style="--cave-paragraph-index: ${o}" aria-hidden="true">
        ${a.map(s=>{let n=t;return t+=1,`
            <span class="cave-reveal-line" style="--cave-line-index: ${n}" aria-hidden="true">
              ${r(s)}
            </span>
          `}).join("")}
      </span>
    `).join("")}function re(e,t={}){let a=ne(e,t),o=se(c.currentLessonMode),s=f.indexOf(o),n=f.length;c.currentPostStoryStep=o;let l={reflection:j,assimilation:ve,reality:he,critical:ye,challenge:fe,reward:be,nextTeaser:$e}[o]||j;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" data-post-story-step="${r(o)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${l(a[o],e,s,n)}
    </div>
  `}function se(e){let t=J[e]||e||c.currentPostStoryStep||"reflection";return f.includes(t)?t:"reflection"}function ne(e,t={}){let a=C(e),o=g(e.title),s=w(e.id),n=M(e),i=T(e.eraKey,e.id);return{reflection:le(e,t.insight,n),assimilation:de(e,s,o,n),reality:ue(e,o,n),critical:pe(e,o,n),challenge:me(e),reward:{kicker:"Artefacto desbloqueado",title:"Mem\xF3ria guardada",text:p(n.keyTakeaway||`Guardaste uma chave de leitura sobre ${o}.`,20),artifact:a.preview?.[0]||"Artefacto narrativo desbloqueado",previous:"challenge"},nextTeaser:{kicker:"Pr\xF3xima porta temporal",title:i?g(i.title):"Rever a jornada",text:i?p(ge(o,g(i.title)),20):"A viagem continua quando voltares ao mapa da era.",nextLessonId:i?.id||"",previous:"reward"}}}function E(e=""){let t=String(e||"").replace(/\s+/g," ").trim();return t?t.match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g)?.map(a=>a.trim()).filter(Boolean)||[t]:[]}function ie(){return typeof window<"u"&&window.matchMedia?.("(max-width: 768px) and (orientation: portrait)").matches}function Q(e=""){return String(e||"").trim().split(/\s+/).filter(Boolean).length}function p(e="",t=24){let a=E(e);if(!a.length)return"";let o=[],s=0;for(let n of a){let i=Q(n);if(o.length&&s+i>t||(o.push(n),s+=i,s>=t))break}return o.join(" ")}function ce(e,t){let a=E(e?.text);if(!a.length)return[e];let o=[],s=[],n=0;return a.forEach(i=>{let l=Q(i);s.length&&n+l>t&&(o.push(s.join(" ")),s=[],n=0),s.push(i),n+=l}),s.length&&o.push(s.join(" ")),o.map((i,l)=>({...e,id:`${e.id||"story"}-${l+1}`,text:i}))}function h(e){let t=ie()?30:42;return w(e).flatMap(a=>ce(a,t))}function le(e,t="",a={}){let o=g(e.title),s=u(o),n=a.reflection||(s.includes("fogo")?"O fogo nao mudou apenas a sobrevivencia. Mudou a forma como os humanos viviam juntos.":k(t||e.detail||F(e),150));return{kicker:"Pausa de assimila\xE7\xE3o",title:"O que isto mudou?",text:p(n,24),previous:"story"}}function de(e,t,a,o={}){let s=[...o.evidence||[],...o.archaeology||[]],n=s.length?s.slice(0,2):t.slice(0,2).map(i=>i.text);return{kicker:"Guia hist\xF3rico",title:"O essencial",text:p(o.keyTakeaway||`${a} fica mais claro quando separas descoberta, escolha e consequencia.`,22),prompts:(n.length?n:["Que problema humano aparece aqui?","Que consequencia veio depois?"]).map(i=>p(i,14)),previous:"reflection"}}function ue(e,t,a={}){let s=u(t).includes("fogo")?[["Energia","Hoje continuamos dependentes de energia para viver, trabalhar e comunicar."],["Tecnologia","Uma ferramenta simples pode reorganizar uma comunidade inteira."],["Seguranca","Proteger recursos importantes continua a ser uma decisao coletiva."]]:[["Tecnologia","Mudancas tecnicas alteram rotinas, trabalho e relacoes sociais."],["Comunidade","O que uma sociedade aprende muda a forma como coopera."],["Escolhas","Cada avancar tambem cria dependencias e novos custos."]];return{kicker:"Ponte ao presente",title:"Do passado para hoje",text:p(a.presentConnection||`${t} nao ficou preso ao passado. A mesma logica ainda aparece no presente.`,22),cards:s.slice(0,2).map(([n,i])=>[n,p(i,14)]),previous:"assimilation"}}function pe(e,t,a={}){let s=u(t).includes("fogo")?"O dominio do fogo foi apenas progresso?":"Esta mudanca trouxe so beneficios?";return{kicker:"Lente cr\xEDtica",title:a.reflection||s,text:p(a.curiosity||"Olha para o mesmo momento por lentes diferentes.",20),perspectives:[["Sobrevivencia","Ajudou pessoas a resistir melhor ao mundo."],["Vida social","Mudou a forma como grupos se organizavam."],["Custo","Tambem criou novas pressoes sobre recursos e ambiente."]].slice(0,2).map(([n,i])=>[n,p(i,14)]),previous:"reality"}}function me(e){let t=A(e.eraKey),a=t[K(e.eraKey,e.id)]||t[0];return{kicker:"Desafio",title:a?.question||"Que escolha ajudaria melhor o grupo?",quiz:a,previous:"critical"}}function ge(e,t){return`${e} abriu uma porta. A pr\xF3xima li\xE7\xE3o mostra o que mudou a seguir: ${t}.`}function O(e,t,a=""){let o=h(e.id).length,s=Math.max(1,o+f.length),n=Math.min(Math.max(t,0),s-1),i=s<=1?100:Math.round(n/(s-1)*100);return`
    <div class="lesson-next-progress ${r(a)}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
      <div class="lesson-next-progress-label">Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o \u2014 ${i}%</div>
      <div class="lesson-next-progress-meter">
        <div class="lesson-next-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${i}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
          <!-- Stone and firelight layers are CSS-only; progress math remains unchanged above. -->
          <span class="lesson-next-progress-fill" style="width: ${i}%"></span>
        </div>
        <span class="lesson-next-progress-percent" aria-hidden="true">${i}%</span>
      </div>
      <div class="lesson-next-progress-scale" aria-hidden="true">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </div>
  `}function m(e,t,a){let o=h(a.id).length;return O(a,o+e,"post-story-progress")}function v(e,t="Continuar",a=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${r(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${a?"disabled":""}>${r(t)}</button>
    </div>
  `}function j(e,t,a,o){return`
    <article class="post-story-screen reflection-moment" data-era="${r(t.eraKey||"")}" data-section="${r(t.sectionId||"")}" data-theme="${r(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(e.text)}</p>
      </div>
      ${m(a,o,t)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function ve(e,t,a,o){return`
    <article class="post-story-screen assimilation-chatbot" data-era="${r(t.eraKey||"")}" data-section="${r(t.sectionId||"")}" data-theme="${r(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="mentor-panel">
        <span class="mentor-orb" aria-hidden="true"></span>
        <div class="post-story-copy">
          <span class="post-story-kicker">${r(e.kicker)}</span>
          <h3>${r(e.title)}</h3>
          <p>${r(e.text)}</p>
        </div>
        <div class="mentor-bubbles" aria-label="Pistas do guia hist\xF3rico">
          ${e.prompts.map(s=>`<p class="mentor-bubble">${r(s)}</p>`).join("")}
        </div>
      </div>
      ${m(a,o,t)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function he(e,t,a,o){return`
    <article class="post-story-screen reality-bridge" data-era="${r(t.eraKey||"")}" data-section="${r(t.sectionId||"")}" data-theme="${r(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(e.text)}</p>
      </div>
      <div class="reality-bridge-grid">
        ${e.cards.map(([s,n])=>`
          <section>
            <strong>${r(s)}</strong>
            <p>${r(n)}</p>
          </section>
        `).join("")}
      </div>
      ${m(a,o,t)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function ye(e,t,a,o){return`
    <article class="post-story-screen critical-lens" data-era="${r(t.eraKey||"")}" data-section="${r(t.sectionId||"")}" data-theme="${r(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(e.text)}</p>
      </div>
      <div class="critical-perspectives">
        ${e.perspectives.map(([s,n])=>`
          <section>
            <strong>${r(s)}</strong>
            <p>${r(n)}</p>
          </section>
        `).join("")}
      </div>
      ${m(a,o,t)}
      ${v(e.previous,"Continuar")}
    </article>
  `}function fe(e,t,a,o){let s=e.quiz||{question:e.title,options:[],answer:0,explanation:""},n=c.currentLessonQuizChoice!==null,i=n&&c.currentLessonQuizChoice===s.answer;return`
    <article class="post-story-screen challenge-screen" data-era="${r(t.eraKey||"")}" data-section="${r(t.sectionId||"")}" data-theme="${r(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(n?`${i?"Boa leitura.":"Quase."} ${s.explanation}`:"Escolhe pelo contexto, n\xE3o pela mem\xF3ria.")}</p>
      </div>
      <div class="lesson-quiz-options challenge-options">
        ${s.options.map((l,d)=>`
          <button class="${n&&d===s.answer?"correct":""} ${n&&d===c.currentLessonQuizChoice&&d!==s.answer?"wrong":""}" type="button" data-lesson-quiz-option="${d}">
            ${r(l)}
          </button>
        `).join("")}
      </div>
      ${m(a,o,t)}
      ${v(e.previous,"Ver recompensa",!n)}
    </article>
  `}function be(e,t,a,o){return`
    <article class="post-story-screen reward-screen" data-era="${r(t.eraKey||"")}" data-section="${r(t.sectionId||"")}" data-theme="${r(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(e.text)}</p>
        <small>${r(e.artifact)}</small>
      </div>
      ${m(a,o,t)}
      ${v(e.previous,"Ver pr\xF3xima")}
    </article>
  `}function $e(e,t,a,o){return`
    <article class="post-story-screen next-lesson-teaser" data-era="${r(t.eraKey||"")}" data-section="${r(t.sectionId||"")}" data-theme="${r(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(e.text)}</p>
      </div>
      ${m(a,o,t)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${r(e.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar \xE0 timeline</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${r(e.nextLessonId)}">Entrar na pr\xF3xima</button>`:'<button type="button" data-lesson-action="complete">Terminar</button>'}
      </div>
    </article>
  `}function S(e){let t=Math.max(0,e.length-1);return c.currentLessonStoryBlockIndex=Math.min(Math.max(c.currentLessonStoryBlockIndex||0,0),t),c.currentLessonStoryBlockIndex}async function Me({updateLessonProgress:e,renderCategorySections:t}){let a=h(c.currentLessonId),o=S(a);if(o<a.length-1){c.currentLessonStoryBlockIndex=o+1,e(c.currentLessonId,{viewed:!0,storyBlockIndex:c.currentLessonStoryBlockIndex}),await t();return}c.currentLessonMode="reflection",c.currentPostStoryStep="reflection",c.currentLessonStoryBlockIndex=0,e(c.currentLessonId,{viewed:!0,storyCompleted:!0}),await t()}async function Te({updateLessonProgress:e,renderCategorySections:t}){let a=h(c.currentLessonId),o=S(a);c.currentLessonStoryBlockIndex=Math.max(0,o-1),e(c.currentLessonId,{viewed:!0,storyBlockIndex:c.currentLessonStoryBlockIndex}),await t()}function C(e){let t=B(e.eraKey).find(d=>d.id===e.sectionId),a=g(e.title),o=u(a),s=$[e.eraKey]?.title||"Hist\xF3ria",n=t?.title||I[e.category]||"Li\xE7\xE3o",l=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(d=>d.match.some(y=>o.includes(u(y))))||{mood:e.category||"default",line:F(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:a,mood:l.mood,line:l.line,preview:l.preview,kicker:`${s} \xB7 ${n}`}}function g(e){return String(e||"").split(":")[0].trim()}function F(e){let t=e.detail||ke(e.title,e.category);return`\u201C${k(t,142)}\u201D`}function ke(e,t=""){return t==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":t==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":t==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":t==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":t==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function xe(...e){let t=u(e.filter(Boolean).join(" ")),a=q.find(o=>o.keywords.some(s=>t.includes(u(s))));return a?a.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var f,J,we=D(()=>{H();W();G();U();f=["reflection","assimilation","reality","critical","challenge","reward","nextTeaser"],J={interaction:"reflection",source:"reflection",insight:"reflection",recap:"reality",debate:"critical",quiz:"challenge",consolidate:"reward"}});we();export{C as buildLessonIntroFrame,g as getLessonDisplayTitle,Me as goToNextStoryBlock,Te as goToPreviousStoryBlock,ze as renderActiveLessonPanel};
