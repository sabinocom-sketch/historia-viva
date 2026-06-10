import{B as R,D as O,H as J,a as L,d as T,h as A,k as U,l as i,m as W,n as p,p as r,q as M,r as Q,t as _,u as q,v as w,w as B,x as S,y as K,z as j}from"./chunk-FA56LTI6.js";import{a as H}from"./chunk-UEKKBUIS.js";function Y(){let e=i.currentLessonId?S(i.currentLessonId):q(i.currentEra)[0];return e?V(e).mood:""}function Te(){let e=i.currentLessonId?S(i.currentLessonId):q(i.currentEra)[0];if(!e)return"";if(i.currentLessonEntryId!==e.id){i.currentLessonEntryId=e.id,i.currentLessonMode="intro",i.currentLessonStoryBlockIndex=0,i.currentPostStoryStep="summary";let c=ce(e.id);i.currentLessonReflectionText=c.reflectionAnswer||"",i.currentLessonDebateChoice=c.debateChoice||"",i.currentLessonQuizAnswers=c.quizAnswers||{},i.currentPostLessonQuizIndex=0,i.currentLessonQuizChoice=null}let a=i.currentLessonId===e.id,t=V(e),o=Q(L[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=Le(e.title,e.detail,e.category,...e.related||[]),n=i.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${a?"is-active":""}" data-active-lesson="${r(e.id)}" data-era="${r(e.eraKey)}" data-section="${r(e.sectionId||"")}" data-mood="${r(t.mood)}" data-mode="${r(i.currentLessonMode)}" data-theme="${r(e.category)}">
      ${n?`<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${r(t.kicker)}</p>
          <h3>${r(t.title)}</h3>
          <p class="lesson-hero-line">${r(t.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da li\xE7\xE3o">
            ${t.preview.map(c=>`<span>${r(c)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>`:Z(e,{insight:s,curiosity:o})}
    </section>
  `}function Z(e,a={}){if(i.currentLessonMode==="story"||i.currentLessonMode==="understand"){let t=h(e.id),o=P(t);return`
      <div class="lesson-experience" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${ee(t[o],o,t.length,e)}
      </div>
    `}return re(e,a)}function ee(e,a,t,o={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},n=s.eraKey||o.eraKey||"",c=s.sectionId||o.sectionId||"",u=n==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(c),l=u?te(s,o):"",d=u?ae(s,o):"",m=s.text,g=oe(m),$=a===0?"eager":"lazy",x=a===0?"high":"auto";return`
    <article class="story-block ${u?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${g}" data-story-block="${r(s.id)}" data-story-index="${a%3}" data-visual="${r(s.visualType)}" data-background="${r(s.backgroundMood)}" data-mood="${r(Y())}" data-era="${r(n)}" data-section="${r(c)}" data-prehistory-artifact="${r(l)}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${l==="flint"?`<picture class="prehistory-flint-picture">
          <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
          <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${$}" decoding="async" fetchpriority="${x}" />
        </picture>`:""}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${g}">
        ${u?"":`<span class="prehistory-moment-label">Momento ${a+1} de ${t}</span>`}
        ${d?`<h3 class="prehistory-narrative-title">${r(d)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${r(m)}">
          ${se(m)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      ${N(o,a,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${a===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${a===t-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function ae(e={},a={}){return b(a.title||e.title||"Marca na Pedra")}function te(e={},a={}){let t=p(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(o=>t.includes(o))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(o=>t.includes(o))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(o=>t.includes(o))?"painting":["abrigo","gruta","caverna"].some(o=>t.includes(o))?"shelter":"flint"}function F(e=""){let a=String(e||"").trim();if(!a)return[""];let t=a.split(/(?<=[.!?])\s+|;\s+/).map(o=>o.trim()).filter(Boolean);return t.length?t:[a]}function oe(e=""){return F(e).length}function se(e=""){return`
    <span class="cave-reveal-paragraph" aria-hidden="true">
      ${F(e).map((a,t)=>`
        <span class="cave-reveal-line" style="--cave-line-index: ${t}" aria-hidden="true">${r(a)}</span>
      `).join(" ")}
    </span>
  `}function re(e,a={}){let t=ie(e,a),o=ne(i.currentLessonMode),s=v.indexOf(o),n=v.length;i.currentPostStoryStep=o;let u={summary:E,reflection:ye,debate:fe,quiz:be}[o]||E;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" data-post-story-step="${r(o)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${u(t[o],e,s,n)}
    </div>
  `}function ne(e){let a=X[e]||e||i.currentPostStoryStep||"summary";return v.includes(a)?a:"summary"}function ie(e,a={}){let t=ue(e,a);return{summary:{summary:t.summary,previous:"story"},reflection:{...t.reflection,previous:"summary"},debate:{...t.debate,previous:"reflection"},quiz:{quiz:t.quiz,previous:"debate",nextLessonId:K(e.eraKey,e.id)?.id||""}}}function ce(e=""){if(typeof localStorage>"u"||!e)return{};try{return JSON.parse(localStorage.getItem("historiaVivaProgress"))?.lessonProgress?.[e]||{}}catch{return{}}}function ue(e,a={}){if(e.postLesson)return e.postLesson;let t=b(e.title),o=w(e.id),s=B(e),n=le(e,o,s);return{summary:n,reflection:{question:s.reflection||a.insight||`Que mudanca historica te parece mais importante em ${t}?`},debate:pe(e,t,s),quiz:me(e,n)}}function le(e,a=[],t={}){let s=[t.keyTakeaway,...t.evidence||[],...t.archaeology||[],...t.consequences||[],...a.map(n=>n.text),e.detail].filter(Boolean).map(n=>de(y(n,15),e)).filter(Boolean).filter((n,c,u)=>u.findIndex(l=>p(l)===p(n))===c).slice(0,4);for(;s.length<3;)s.push(y(`${b(e.title)} ajuda a perceber causas, escolhas humanas e consequencias.`,14));return s.slice(0,4)}function de(e="",a={}){if(!e||C(e)>=9)return e;let t=p(`${a.title||""} ${a.detail||""}`);return t.includes("pedra")||t.includes("ferramenta")?`${e} O gesto humano dava-lhe funcao e sentido.`:t.includes("fogo")?`${e} O uso repetido transformava seguranca, alimento e convivio.`:`${e} O contexto historico ajuda a perceber a mudanca.`}function pe(e,a,t={}){let o=y(t.keyTakeaway||e.detail||a,18);return{question:`Como devemos interpretar ${a}: sobretudo como progresso ou como mudanca complexa?`,options:[{id:"optionA",label:"Foi sobretudo progresso",feedback:`Esta posicao pode indicar que ${o.toLowerCase()} abriu possibilidades importantes. Ainda assim, muitos historiadores defendem que ganhos materiais tambem trouxeram novos custos.`},{id:"optionB",label:"Foi uma mudanca complexa",feedback:`Esta posicao sugere que ${o.toLowerCase()} deve ser lido com cautela. Ha debate sobre o peso dos beneficios e dos limites em diferentes grupos sociais.`}]}}function me(e,a=[]){let t=R(e.eraKey),o=O(e.eraKey,e.id),n=(t.length?Array.from({length:Math.min(3,t.length)},(c,u)=>t[(o+u)%t.length]):[]).map(c=>ge(c));for(;n.length<3;){let c=a[n.length%Math.max(1,a.length)]||e.detail||e.title;n.push({question:"Que ideia resume melhor esta licao?",options:[y(c,12),"Aconteceu sem causas historicas.","Teve apenas uma consequencia simples.","Nao pode ser estudada por vestigios."],correctIndex:0,explanation:"A melhor resposta liga a licao a causas, evidencias e consequencias."})}return n.slice(0,5)}function ge(e={}){return{question:e.question||"Que ideia fica desta licao?",options:he(e.options||[]),correctIndex:Number.isInteger(e.correctIndex)?e.correctIndex:Math.min(Math.max(e.answer||0,0),3),explanation:e.explanation||"Esta resposta enquadra melhor o contexto historico da licao."}}function he(e=[]){let a=["Foi um processo sem contexto.","Aconteceu da mesma forma em todo o lado.","Teve apenas uma causa.","Deve ser lido com fontes e consequencias."],t=e.slice(0,4);return a.forEach(o=>{t.length<4&&!t.includes(o)&&t.push(o)}),t.slice(0,4)}function D(e=""){let a=String(e||"").replace(/\s+/g," ").trim();return a?a.match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g)?.map(t=>t.trim()).filter(Boolean)||[a]:[]}function C(e=""){return String(e||"").trim().split(/\s+/).filter(Boolean).length}function y(e="",a=24){let t=D(e);if(!t.length)return"";let o=[],s=0;for(let n of t){let c=C(n);if(o.length&&s+c>a||(o.push(n),s+=c,s>=a))break}return o.join(" ")}function ve(e,a){let t=D(e?.text);if(!t.length)return[e];let o=[],s=[],n=0;return t.forEach(c=>{let u=C(c);s.length&&n+u>a&&(o.push(s.join(" ")),s=[],n=0),s.push(c),n+=u}),s.length&&o.push(s.join(" ")),o.map((c,u)=>({...e,id:`${e.id||"story"}-${u+1}`,text:c}))}function h(e){return w(e).flatMap(t=>ve(t,55))}function N(e,a,t=""){let o=h(e.id).length,s=Math.max(1,o+v.length),n=Math.min(Math.max(a,0),s-1),c=s<=1?100:Math.round(n/(s-1)*100);return`
    <div class="lesson-next-progress ${r(t)}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
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
  `}function f(e,a,t){let o=h(t.id).length;return N(t,o+e,"post-story-progress")}function z(e,a="Continuar",t=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${r(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${t?"disabled":""}>${r(a)}</button>
    </div>
  `}function E(e,a,t,o){let s=(e.summary||[]).slice(0,4);return`
    <article class="post-story-screen lesson-summary-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Resumo da licao</span>
        <h3>O que aprendeste?</h3>
        <ul class="post-lesson-summary-list" aria-label="Pontos principais da licao">
          ${s.map((n,c)=>`
            <li>
              <span aria-hidden="true">${c+1}</span>
              <p>${r(n)}</p>
            </li>
          `).join("")}
        </ul>
      </div>
      ${f(t,o,a)}
      ${z(e.previous,"Continuar")}
    </article>
  `}function ye(e,a,t,o){return`
    <article class="post-story-screen reflection-moment reflection-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Reflexao</span>
        <h3>Pensa sobre isto</h3>
        <p>${r(e.question)}</p>
        <textarea class="post-lesson-reflection-input" data-lesson-reflection rows="5" placeholder="Escreve a tua resposta...">${r(i.currentLessonReflectionText||"")}</textarea>
      </div>
      ${f(t,o,a)}
      ${z(e.previous,"Continuar")}
    </article>
  `}function fe(e,a,t,o){let s=(e.options||[]).find(n=>n.id===i.currentLessonDebateChoice);return`
    <article class="post-story-screen critical-lens debate-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Debate historico</span>
        <h3>Escolhe uma posicao</h3>
        <p>${r(e.question)}</p>
      </div>
      <div class="post-lesson-debate-panel">
        <div class="post-lesson-debate-options" aria-label="Opcoes de debate">
          ${(e.options||[]).map(n=>`
            <button class="${i.currentLessonDebateChoice===n.id?"is-selected":""}" type="button" data-lesson-debate-option="${r(n.id)}">
              ${r(n.label)}
            </button>
          `).join("")}
        </div>
        ${s?`
          <section class="post-lesson-debate-feedback" aria-live="polite">
            <strong>Leitura equilibrada</strong>
            <p>${r(s.feedback)}</p>
          </section>
        `:""}
      </div>
      ${f(t,o,a)}
      ${z(e.previous,"Continuar")}
    </article>
  `}function be(e,a,t,o){let s=e.quiz||[],n=i.currentLessonQuizAnswers||{},c=s.reduce((I,k,G)=>I+(n[G]===k.correctIndex?1:0),0),u=s.filter((I,k)=>n[k]!==void 0).length,l=s.length>0&&u===s.length,d=l?Math.max(0,s.length-1):Math.min(Math.max(Number(i.currentPostLessonQuizIndex)||0,0),Math.max(0,s.length-1)),m=s[d],g=m&&n[d]!==void 0,$=d<s.length-1,x=!g&&!l?'<button type="button" disabled>Responde para continuar</button>':g&&!l&&$?'<button type="button" data-lesson-action="quiz-next">Proxima pergunta</button>':e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${r(e.nextLessonId)}" ${l?"":"disabled"}>Avancar para a proxima licao</button>`:`<button type="button" data-lesson-action="complete" ${l?"":"disabled"}>Concluir licao</button>`;return`
    <article class="post-story-screen challenge-screen quiz-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}" data-quiz-total="${s.length}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Quiz</span>
        <h3>Verifica o que aprendeste</h3>
        ${s.length?`<p>Pergunta ${Math.min(d+1,s.length)} de ${s.length}</p>`:""}
      </div>
      <div class="post-lesson-quiz-panel">
        ${m?$e(m,d,n[d]):""}
        ${l?`
          <section class="post-lesson-quiz-result" aria-live="polite">
            <strong>${c}/${s.length} respostas corretas</strong>
            <p>${r(c===s.length?"Excelente leitura. A licao ficou bem consolidada.":"Bom trabalho. Reveste as explicacoes e avanca com mais contexto.")}</p>
          </section>
        `:""}
      </div>
      ${f(t,o,a)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${r(e.previous)}">Voltar</button>
        ${x}
      </div>
    </article>
  `}function $e(e,a,t){let o=t!==void 0,s=o&&t===e.correctIndex;return`
    <section class="post-lesson-quiz-question">
      <h4>${r(e.question)}</h4>
      <div class="lesson-quiz-options challenge-options">
        ${e.options.map((n,c)=>`
          <button class="${o&&c===e.correctIndex?"correct":""} ${o&&c===t&&c!==e.correctIndex?"wrong":""}" type="button" data-post-lesson-quiz-question="${a}" data-post-lesson-quiz-option="${c}" ${o?"disabled":""}>
            ${r(n)}
          </button>
        `).join("")}
      </div>
      ${o?`<p class="lesson-feedback">${s?"Correto.":"Incorreto."} ${r(e.explanation)}</p>`:""}
    </section>
  `}function P(e){let a=Math.max(0,e.length-1);return i.currentLessonStoryBlockIndex=Math.min(Math.max(i.currentLessonStoryBlockIndex||0,0),a),i.currentLessonStoryBlockIndex}async function Ae({updateLessonProgress:e,renderCategorySections:a}){let t=h(i.currentLessonId),o=P(t);if(o<t.length-1){i.currentLessonStoryBlockIndex=o+1,e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await a();return}i.currentLessonMode="summary",i.currentPostStoryStep="summary",i.currentLessonStoryBlockIndex=0,e(i.currentLessonId,{viewed:!0,storyCompleted:!0}),await a()}async function Me({updateLessonProgress:e,renderCategorySections:a}){let t=h(i.currentLessonId),o=P(t);i.currentLessonStoryBlockIndex=Math.max(0,o-1),e(i.currentLessonId,{viewed:!0,storyBlockIndex:i.currentLessonStoryBlockIndex}),await a()}function V(e){let a=j(e.eraKey).find(l=>l.id===e.sectionId),t=b(e.title),o=p(t),s=L[e.eraKey]?.title||"Hist\xF3ria",n=a?.title||T[e.category]||"Li\xE7\xE3o",u=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(l=>l.match.some(d=>o.includes(p(d))))||{mood:e.category||"default",line:xe(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:t,mood:u.mood,line:u.line,preview:u.preview,kicker:`${s} \xB7 ${n}`}}function b(e){return String(e||"").split(":")[0].trim()}function xe(e){let a=e.detail||ke(e.title,e.category);return`\u201C${M(a,142)}\u201D`}function ke(e,a=""){return a==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":a==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":a==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":a==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":a==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function Le(...e){let a=p(e.filter(Boolean).join(" ")),t=A.find(o=>o.keywords.some(s=>a.includes(p(s))));return t?t.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var v,X,qe=H(()=>{U();W();_();J();v=["summary","reflection","debate","quiz"],X={assimilation:"reflection",reality:"debate",critical:"debate",challenge:"quiz",reward:"quiz",nextTeaser:"quiz",interaction:"reflection",source:"reflection",insight:"reflection",recap:"summary",consolidate:"quiz"}});qe();export{V as buildLessonIntroFrame,b as getLessonDisplayTitle,Ae as goToNextStoryBlock,Me as goToPreviousStoryBlock,Te as renderActiveLessonPanel};
