import{B as K,D as j,H as U,a as $,d as P,h as q,k as H,l as i,m as W,n as u,p as o,q as k,r as z,t as G,u as x,v as L,w as M,x as w,y as T,z as B}from"./chunk-IBU3EEVU.js";import{a as D}from"./chunk-UEKKBUIS.js";function X(){let e=i.currentLessonId?w(i.currentLessonId):x(i.currentEra)[0];return e?C(e).mood:""}function qe(){let e=i.currentLessonId?w(i.currentLessonId):x(i.currentEra)[0];if(!e)return"";i.currentLessonEntryId!==e.id&&(i.currentLessonEntryId=e.id,i.currentLessonMode="intro",i.currentLessonStoryBlockIndex=0,i.currentPostStoryStep="reflection",i.currentLessonQuizChoice=null);let t=i.currentLessonId===e.id,a=C(e),r=z($[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=ke(e.title,e.detail,e.category,...e.related||[]),n=i.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${t?"is-active":""}" data-active-lesson="${o(e.id)}" data-era="${o(e.eraKey)}" data-section="${o(e.sectionId||"")}" data-mood="${o(a.mood)}" data-mode="${o(i.currentLessonMode)}" data-theme="${o(e.category)}">
      ${n?`<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${o(a.kicker)}</p>
          <h3>${o(a.title)}</h3>
          <p class="lesson-hero-line">${o(a.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da li\xE7\xE3o">
            ${a.preview.map(c=>`<span>${o(c)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>`:_(e,{insight:s,curiosity:r})}
    </section>
  `}function _(e,t={}){if(i.currentLessonMode==="story"||i.currentLessonMode==="understand"){let a=h(e.id),r=S(a);return`
      <div class="lesson-experience" data-era="${o(e.eraKey||"")}" data-section="${o(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${Y(a[r],r,a.length,e)}
      </div>
    `}return oe(e,t)}function Y(e,t,a,r={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},n=s.eraKey||r.eraKey||"",c=s.sectionId||r.sectionId||"",l=n==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(c),d=l?ee(s,r):"",y=l?Z(s,r):"",b=s.text,I=te(b),F=t===0?"eager":"lazy",N=t===0?"high":"auto";return`
    <article class="story-block ${l?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${I}" data-story-block="${o(s.id)}" data-story-index="${t%3}" data-visual="${o(s.visualType)}" data-background="${o(s.backgroundMood)}" data-mood="${o(X())}" data-era="${o(n)}" data-section="${o(c)}" data-prehistory-artifact="${o(d)}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${d==="flint"?`<picture class="prehistory-flint-picture">
          <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
          <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${F}" decoding="async" fetchpriority="${N}" />
        </picture>`:""}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${I}">
        ${l?"":`<span class="prehistory-moment-label">Momento ${t+1} de ${a}</span>`}
        ${y?`<h3 class="prehistory-narrative-title">${o(y)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${o(b)}">
          ${ae(b)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      ${O(r,t,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${t===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${t===a-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function Z(e={},t={}){return v(t.title||e.title||"Marca na Pedra")}function ee(e={},t={}){let a=u(`${t.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(r=>a.includes(r))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(r=>a.includes(r))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(r=>a.includes(r))?"painting":["abrigo","gruta","caverna"].some(r=>a.includes(r))?"shelter":"flint"}function R(e=""){let t=String(e||"").trim();if(!t)return[""];let a=t.split(/(?<=[.!?])\s+|;\s+/).map(r=>r.trim()).filter(Boolean);return a.length?a:[t]}function te(e=""){return R(e).length}function ae(e=""){return`
    <span class="cave-reveal-paragraph" aria-hidden="true">
      ${R(e).map((t,a)=>`
        <span class="cave-reveal-line" style="--cave-line-index: ${a}" aria-hidden="true">${o(t)}</span>
      `).join(" ")}
    </span>
  `}function oe(e,t={}){let a=se(e,t),r=re(i.currentLessonMode),s=f.indexOf(r),n=f.length;i.currentPostStoryStep=r;let l={reflection:A,assimilation:ve,reality:ge,critical:he,challenge:ye,reward:fe,nextTeaser:be}[r]||A;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${o(e.eraKey||"")}" data-section="${o(e.sectionId||"")}" data-post-story-step="${o(r)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${l(a[r],e,s,n)}
    </div>
  `}function re(e){let t=J[e]||e||i.currentPostStoryStep||"reflection";return f.includes(t)?t:"reflection"}function se(e,t={}){let a=C(e),r=v(e.title),s=L(e.id),n=M(e),c=T(e.eraKey,e.id);return{reflection:ce(e,t.insight,n),assimilation:le(e,s,r,n),reality:de(e,r,n),critical:ue(e,r,n),challenge:pe(e),reward:{kicker:"Artefacto desbloqueado",title:"Mem\xF3ria guardada",text:p(n.keyTakeaway||`Guardaste uma chave de leitura sobre ${r}.`,20),artifact:a.preview?.[0]||"Artefacto narrativo desbloqueado",previous:"challenge"},nextTeaser:{kicker:"Pr\xF3xima porta temporal",title:c?v(c.title):"Rever a jornada",text:c?p(me(r,v(c.title)),20):"A viagem continua quando voltares ao mapa da era.",nextLessonId:c?.id||"",previous:"reward"}}}function E(e=""){let t=String(e||"").replace(/\s+/g," ").trim();return t?t.match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g)?.map(a=>a.trim()).filter(Boolean)||[t]:[]}function ne(){return typeof window<"u"&&window.matchMedia?.("(max-width: 768px) and (orientation: portrait)").matches}function Q(e=""){return String(e||"").trim().split(/\s+/).filter(Boolean).length}function p(e="",t=24){let a=E(e);if(!a.length)return"";let r=[],s=0;for(let n of a){let c=Q(n);if(r.length&&s+c>t||(r.push(n),s+=c,s>=t))break}return r.join(" ")}function ie(e,t){let a=E(e?.text);if(!a.length)return[e];let r=[],s=[],n=0;return a.forEach(c=>{let l=Q(c);s.length&&n+l>t&&(r.push(s.join(" ")),s=[],n=0),s.push(c),n+=l}),s.length&&r.push(s.join(" ")),r.map((c,l)=>({...e,id:`${e.id||"story"}-${l+1}`,text:c}))}function h(e){let t=ne()?50:60;return L(e).flatMap(a=>ie(a,t))}function ce(e,t="",a={}){let r=v(e.title),s=u(r),n=a.reflection||(s.includes("fogo")?"O fogo nao mudou apenas a sobrevivencia. Mudou a forma como os humanos viviam juntos.":k(t||e.detail||V(e),150));return{kicker:"Pausa de assimila\xE7\xE3o",title:"O que isto mudou?",text:p(n,24),previous:"story"}}function le(e,t,a,r={}){let s=[...r.evidence||[],...r.archaeology||[]],n=s.length?s.slice(0,2):t.slice(0,2).map(c=>c.text);return{kicker:"Guia hist\xF3rico",title:"O essencial",text:p(r.keyTakeaway||`${a} fica mais claro quando separas descoberta, escolha e consequencia.`,22),prompts:(n.length?n:["Que problema humano aparece aqui?","Que consequencia veio depois?"]).map(c=>p(c,14)),previous:"reflection"}}function de(e,t,a={}){let s=u(t).includes("fogo")?[["Energia","Hoje continuamos dependentes de energia para viver, trabalhar e comunicar."],["Tecnologia","Uma ferramenta simples pode reorganizar uma comunidade inteira."],["Seguranca","Proteger recursos importantes continua a ser uma decisao coletiva."]]:[["Tecnologia","Mudancas tecnicas alteram rotinas, trabalho e relacoes sociais."],["Comunidade","O que uma sociedade aprende muda a forma como coopera."],["Escolhas","Cada avancar tambem cria dependencias e novos custos."]];return{kicker:"Ponte ao presente",title:"Do passado para hoje",text:p(a.presentConnection||`${t} nao ficou preso ao passado. A mesma logica ainda aparece no presente.`,22),cards:s.slice(0,2).map(([n,c])=>[n,p(c,14)]),previous:"assimilation"}}function ue(e,t,a={}){let s=u(t).includes("fogo")?"O dominio do fogo foi apenas progresso?":"Esta mudanca trouxe so beneficios?";return{kicker:"Lente cr\xEDtica",title:a.reflection||s,text:p(a.curiosity||"Olha para o mesmo momento por lentes diferentes.",20),perspectives:[["Sobrevivencia","Ajudou pessoas a resistir melhor ao mundo."],["Vida social","Mudou a forma como grupos se organizavam."],["Custo","Tambem criou novas pressoes sobre recursos e ambiente."]].slice(0,2).map(([n,c])=>[n,p(c,14)]),previous:"reality"}}function pe(e){let t=K(e.eraKey),a=t[j(e.eraKey,e.id)]||t[0];return{kicker:"Desafio",title:a?.question||"Que escolha ajudaria melhor o grupo?",quiz:a,previous:"critical"}}function me(e,t){return`${e} abriu uma porta. A pr\xF3xima li\xE7\xE3o mostra o que mudou a seguir: ${t}.`}function O(e,t,a=""){let r=h(e.id).length,s=Math.max(1,r+f.length),n=Math.min(Math.max(t,0),s-1),c=s<=1?100:Math.round(n/(s-1)*100);return`
    <div class="lesson-next-progress ${o(a)}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
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
  `}function m(e,t,a){let r=h(a.id).length;return O(a,r+e,"post-story-progress")}function g(e,t="Continuar",a=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${o(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${a?"disabled":""}>${o(t)}</button>
    </div>
  `}function A(e,t,a,r){return`
    <article class="post-story-screen reflection-moment" data-era="${o(t.eraKey||"")}" data-section="${o(t.sectionId||"")}" data-theme="${o(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      ${m(a,r,t)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function ve(e,t,a,r){return`
    <article class="post-story-screen assimilation-chatbot" data-era="${o(t.eraKey||"")}" data-section="${o(t.sectionId||"")}" data-theme="${o(t.category)}">
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
      ${m(a,r,t)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function ge(e,t,a,r){return`
    <article class="post-story-screen reality-bridge" data-era="${o(t.eraKey||"")}" data-section="${o(t.sectionId||"")}" data-theme="${o(t.category)}">
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
      ${m(a,r,t)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function he(e,t,a,r){return`
    <article class="post-story-screen critical-lens" data-era="${o(t.eraKey||"")}" data-section="${o(t.sectionId||"")}" data-theme="${o(t.category)}">
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
      ${m(a,r,t)}
      ${g(e.previous,"Continuar")}
    </article>
  `}function ye(e,t,a,r){let s=e.quiz||{question:e.title,options:[],answer:0,explanation:""},n=i.currentLessonQuizChoice!==null,c=n&&i.currentLessonQuizChoice===s.answer;return`
    <article class="post-story-screen challenge-screen" data-era="${o(t.eraKey||"")}" data-section="${o(t.sectionId||"")}" data-theme="${o(t.category)}">
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
      ${m(a,r,t)}
      ${g(e.previous,"Ver recompensa",!n)}
    </article>
  `}function fe(e,t,a,r){return`
    <article class="post-story-screen reward-screen" data-era="${o(t.eraKey||"")}" data-section="${o(t.sectionId||"")}" data-theme="${o(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
        <small>${o(e.artifact)}</small>
      </div>
      ${m(a,r,t)}
      ${g(e.previous,"Ver pr\xF3xima")}
    </article>
  `}function be(e,t,a,r){return`
    <article class="post-story-screen next-lesson-teaser" data-era="${o(t.eraKey||"")}" data-section="${o(t.sectionId||"")}" data-theme="${o(t.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${o(e.kicker)}</span>
        <h3>${o(e.title)}</h3>
        <p>${o(e.text)}</p>
      </div>
      ${m(a,r,t)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${o(e.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar \xE0 timeline</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${o(e.nextLessonId)}">Entrar na pr\xF3xima</button>`:'<button type="button" data-lesson-action="complete">Terminar</button>'}
      </div>
    </article>
  `}function S(e){let t=Math.max(0,e.length-1);return i.currentLessonStoryBlockIndex=Math.min(Math.max(i.currentLessonStoryBlockIndex||0,0),t),i.currentLessonStoryBlockIndex}async function ze({updateLessonProgress:e,renderCategorySections:t}){let a=h(i.currentLessonId),r=S(a);if(r<a.length-1){i.currentLessonStoryBlockIndex=r+1,e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await t();return}i.currentLessonMode="reflection",i.currentPostStoryStep="reflection",i.currentLessonStoryBlockIndex=0,e(i.currentLessonId,{viewed:!0,storyCompleted:!0}),await t()}async function Me({updateLessonProgress:e,renderCategorySections:t}){let a=h(i.currentLessonId),r=S(a);i.currentLessonStoryBlockIndex=Math.max(0,r-1),e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await t()}function C(e){let t=B(e.eraKey).find(d=>d.id===e.sectionId),a=v(e.title),r=u(a),s=$[e.eraKey]?.title||"Hist\xF3ria",n=t?.title||P[e.category]||"Li\xE7\xE3o",l=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(d=>d.match.some(y=>r.includes(u(y))))||{mood:e.category||"default",line:V(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:a,mood:l.mood,line:l.line,preview:l.preview,kicker:`${s} \xB7 ${n}`}}function v(e){return String(e||"").split(":")[0].trim()}function V(e){let t=e.detail||$e(e.title,e.category);return`\u201C${k(t,142)}\u201D`}function $e(e,t=""){return t==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":t==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":t==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":t==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":t==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function ke(...e){let t=u(e.filter(Boolean).join(" ")),a=q.find(r=>r.keywords.some(s=>t.includes(u(s))));return a?a.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var f,J,xe=D(()=>{H();W();G();U();f=["reflection","assimilation","reality","critical","challenge","reward","nextTeaser"],J={interaction:"reflection",source:"reflection",insight:"reflection",recap:"reality",debate:"critical",quiz:"challenge",consolidate:"reward"}});xe();export{C as buildLessonIntroFrame,v as getLessonDisplayTitle,ze as goToNextStoryBlock,Me as goToPreviousStoryBlock,qe as renderActiveLessonPanel};
