import{B as Q,D as j,H as U,a as $,d as C,h as z,k as N,l as n,m as G,n as m,p as r,q as P,r as I,t as H,u as x,v as k,w as T,x as L,y as A,z as M}from"./chunk-JG2SOZLM.js";import{a as V}from"./chunk-UEKKBUIS.js";function _(){let e=n.currentLessonId?L(n.currentLessonId):x(n.currentEra)[0];return e?E(e).mood:""}function ze(){let e=n.currentLessonId?L(n.currentLessonId):x(n.currentEra)[0];if(!e)return"";if(n.currentLessonEntryId!==e.id){n.currentLessonEntryId=e.id,n.currentLessonMode="intro",n.currentLessonStoryBlockIndex=0,n.currentPostStoryStep="summary";let c=re(e.id);n.currentLessonReflectionText=c.reflectionAnswer||"",n.currentLessonDebateChoice=c.debateChoice||"",n.currentLessonQuizAnswers=c.quizAnswers||{},n.currentLessonQuizChoice=null}let a=n.currentLessonId===e.id,t=E(e),o=I($[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=$e(e.title,e.detail,e.category,...e.related||[]),i=n.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${a?"is-active":""}" data-active-lesson="${r(e.id)}" data-era="${r(e.eraKey)}" data-section="${r(e.sectionId||"")}" data-mood="${r(t.mood)}" data-mode="${r(n.currentLessonMode)}" data-theme="${r(e.category)}">
      ${i?`<div class="lesson-hero">
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
      </div>`:J(e,{insight:s,curiosity:o})}
    </section>
  `}function J(e,a={}){if(n.currentLessonMode==="story"||n.currentLessonMode==="understand"){let t=g(e.id),o=S(t);return`
      <div class="lesson-experience" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${X(t[o],o,t.length,e)}
      </div>
    `}return te(e,a)}function X(e,a,t,o={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},i=s.eraKey||o.eraKey||"",c=s.sectionId||o.sectionId||"",u=i==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(c),l=u?Z(s,o):"",p=u?Y(s,o):"",d=s.text,h=ee(d),F=a===0?"eager":"lazy",D=a===0?"high":"auto";return`
    <article class="story-block ${u?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${h}" data-story-block="${r(s.id)}" data-story-index="${a%3}" data-visual="${r(s.visualType)}" data-background="${r(s.backgroundMood)}" data-mood="${r(_())}" data-era="${r(i)}" data-section="${r(c)}" data-prehistory-artifact="${r(l)}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${l==="flint"?`<picture class="prehistory-flint-picture">
          <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
          <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${F}" decoding="async" fetchpriority="${D}" />
        </picture>`:""}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${h}">
        ${u?"":`<span class="prehistory-moment-label">Momento ${a+1} de ${t}</span>`}
        ${p?`<h3 class="prehistory-narrative-title">${r(p)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${r(d)}">
          ${ae(d)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
        <button class="cave-reveal-skip" type="button" data-story-reveal-all>Mostrar tudo</button>
      </div>
      ${O(o,a,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${a===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${a===t-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function Y(e={},a={}){return b(a.title||e.title||"Marca na Pedra")}function Z(e={},a={}){let t=m(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(o=>t.includes(o))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(o=>t.includes(o))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(o=>t.includes(o))?"painting":["abrigo","gruta","caverna"].some(o=>t.includes(o))?"shelter":"flint"}function K(e=""){let a=String(e||"").trim();if(!a)return[""];let t=a.split(/(?<=[.!?])\s+|;\s+/).map(o=>o.trim()).filter(Boolean);return t.length?t:[a]}function ee(e=""){return K(e).length}function ae(e=""){return`
    <span class="cave-reveal-paragraph" aria-hidden="true">
      ${K(e).map((a,t)=>`
        <span class="cave-reveal-line" style="--cave-line-index: ${t}" aria-hidden="true">${r(a)}</span>
      `).join(" ")}
    </span>
  `}function te(e,a={}){let t=se(e,a),o=oe(n.currentLessonMode),s=v.indexOf(o),i=v.length;n.currentPostStoryStep=o;let u={summary:B,reflection:ge,debate:he,quiz:ve}[o]||B;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" data-post-story-step="${r(o)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${u(t[o],e,s,i)}
    </div>
  `}function oe(e){let a=W[e]||e||n.currentPostStoryStep||"summary";return v.includes(a)?a:"summary"}function se(e,a={}){let t=ie(e,a);return{summary:{summary:t.summary,previous:"story"},reflection:{...t.reflection,previous:"summary"},debate:{...t.debate,previous:"reflection"},quiz:{quiz:t.quiz,previous:"debate",nextLessonId:A(e.eraKey,e.id)?.id||""}}}function re(e=""){if(typeof localStorage>"u"||!e)return{};try{return JSON.parse(localStorage.getItem("historiaVivaProgress"))?.lessonProgress?.[e]||{}}catch{return{}}}function ie(e,a={}){if(e.postLesson)return e.postLesson;let t=b(e.title),o=k(e.id),s=T(e),i=ne(e,o,s);return{summary:i,reflection:{question:s.reflection||a.insight||`Que mudanca historica te parece mais importante em ${t}?`},debate:ue(e,t,s),quiz:le(e,i)}}function ne(e,a=[],t={}){let s=[t.keyTakeaway,...t.evidence||[],...t.archaeology||[],...t.consequences||[],...a.map(i=>i.text),e.detail].filter(Boolean).map(i=>ce(y(i,15),e)).filter(Boolean).filter((i,c,u)=>u.findIndex(l=>m(l)===m(i))===c).slice(0,4);for(;s.length<3;)s.push(y(`${b(e.title)} ajuda a perceber causas, escolhas humanas e consequencias.`,14));return s.slice(0,4)}function ce(e="",a={}){if(!e||q(e)>=9)return e;let t=m(`${a.title||""} ${a.detail||""}`);return t.includes("pedra")||t.includes("ferramenta")?`${e} O gesto humano dava-lhe funcao e sentido.`:t.includes("fogo")?`${e} O uso repetido transformava seguranca, alimento e convivio.`:`${e} O contexto historico ajuda a perceber a mudanca.`}function ue(e,a,t={}){let o=y(t.keyTakeaway||e.detail||a,18);return{question:`Como devemos interpretar ${a}: sobretudo como progresso ou como mudanca complexa?`,options:[{id:"optionA",label:"Foi sobretudo progresso",feedback:`Esta posicao pode indicar que ${o.toLowerCase()} abriu possibilidades importantes. Ainda assim, muitos historiadores defendem que ganhos materiais tambem trouxeram novos custos.`},{id:"optionB",label:"Foi uma mudanca complexa",feedback:`Esta posicao sugere que ${o.toLowerCase()} deve ser lido com cautela. Ha debate sobre o peso dos beneficios e dos limites em diferentes grupos sociais.`}]}}function le(e,a=[]){let t=Q(e.eraKey),o=j(e.eraKey,e.id),i=(t.length?Array.from({length:Math.min(3,t.length)},(c,u)=>t[(o+u)%t.length]):[]).map(c=>de(c));for(;i.length<3;){let c=a[i.length%Math.max(1,a.length)]||e.detail||e.title;i.push({question:"Que ideia resume melhor esta licao?",options:[y(c,12),"Aconteceu sem causas historicas.","Teve apenas uma consequencia simples.","Nao pode ser estudada por vestigios."],correctIndex:0,explanation:"A melhor resposta liga a licao a causas, evidencias e consequencias."})}return i.slice(0,5)}function de(e={}){return{question:e.question||"Que ideia fica desta licao?",options:pe(e.options||[]),correctIndex:Number.isInteger(e.correctIndex)?e.correctIndex:Math.min(Math.max(e.answer||0,0),3),explanation:e.explanation||"Esta resposta enquadra melhor o contexto historico da licao."}}function pe(e=[]){let a=["Foi um processo sem contexto.","Aconteceu da mesma forma em todo o lado.","Teve apenas uma causa.","Deve ser lido com fontes e consequencias."],t=e.slice(0,4);return a.forEach(o=>{t.length<4&&!t.includes(o)&&t.push(o)}),t.slice(0,4)}function R(e=""){let a=String(e||"").replace(/\s+/g," ").trim();return a?a.match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g)?.map(t=>t.trim()).filter(Boolean)||[a]:[]}function q(e=""){return String(e||"").trim().split(/\s+/).filter(Boolean).length}function y(e="",a=24){let t=R(e);if(!t.length)return"";let o=[],s=0;for(let i of t){let c=q(i);if(o.length&&s+c>a||(o.push(i),s+=c,s>=a))break}return o.join(" ")}function me(e,a){let t=R(e?.text);if(!t.length)return[e];let o=[],s=[],i=0;return t.forEach(c=>{let u=q(c);s.length&&i+u>a&&(o.push(s.join(" ")),s=[],i=0),s.push(c),i+=u}),s.length&&o.push(s.join(" ")),o.map((c,u)=>({...e,id:`${e.id||"story"}-${u+1}`,text:c}))}function g(e){return k(e).flatMap(t=>me(t,55))}function O(e,a,t=""){let o=g(e.id).length,s=Math.max(1,o+v.length),i=Math.min(Math.max(a,0),s-1),c=s<=1?100:Math.round(i/(s-1)*100);return`
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
  `}function f(e,a,t){let o=g(t.id).length;return O(t,o+e,"post-story-progress")}function w(e,a="Continuar",t=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${r(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${t?"disabled":""}>${r(a)}</button>
    </div>
  `}function B(e,a,t,o){let s=(e.summary||[]).slice(0,4);return`
    <article class="post-story-screen lesson-summary-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Resumo da licao</span>
        <h3>O que aprendeste?</h3>
        <ul class="post-lesson-summary-list" aria-label="Pontos principais da licao">
          ${s.map((i,c)=>`
            <li>
              <span aria-hidden="true">${c+1}</span>
              <p>${r(i)}</p>
            </li>
          `).join("")}
        </ul>
      </div>
      ${f(t,o,a)}
      ${w(e.previous,"Continuar")}
    </article>
  `}function ge(e,a,t,o){return`
    <article class="post-story-screen reflection-moment reflection-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Reflexao</span>
        <h3>Pensa sobre isto</h3>
        <p>${r(e.question)}</p>
        <textarea class="post-lesson-reflection-input" data-lesson-reflection rows="5" placeholder="Escreve a tua resposta...">${r(n.currentLessonReflectionText||"")}</textarea>
      </div>
      ${f(t,o,a)}
      ${w(e.previous,"Continuar")}
    </article>
  `}function he(e,a,t,o){let s=(e.options||[]).find(i=>i.id===n.currentLessonDebateChoice);return`
    <article class="post-story-screen critical-lens debate-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Debate historico</span>
        <h3>Escolhe uma posicao</h3>
        <p>${r(e.question)}</p>
      </div>
      <div class="post-lesson-debate-panel">
        <div class="post-lesson-debate-options" aria-label="Opcoes de debate">
          ${(e.options||[]).map(i=>`
            <button class="${n.currentLessonDebateChoice===i.id?"is-selected":""}" type="button" data-lesson-debate-option="${r(i.id)}">
              ${r(i.label)}
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
      ${w(e.previous,"Continuar")}
    </article>
  `}function ve(e,a,t,o){let s=e.quiz||[],i=n.currentLessonQuizAnswers||{},c=s.reduce((p,d,h)=>p+(i[h]===d.correctIndex?1:0),0),u=s.filter((p,d)=>i[d]!==void 0).length,l=s.length>0&&u===s.length;return`
    <article class="post-story-screen challenge-screen quiz-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Quiz</span>
        <h3>Verifica o que aprendeste</h3>
      </div>
      <div class="post-lesson-quiz-list">
        ${s.map((p,d)=>ye(p,d,i[d])).join("")}
      </div>
      ${l?`
        <section class="post-lesson-quiz-result" aria-live="polite">
          <strong>${c}/${s.length} respostas corretas</strong>
          <p>${r(c===s.length?"Excelente leitura. A licao ficou bem consolidada.":"Bom trabalho. Reveste as explicacoes e avanca com mais contexto.")}</p>
        </section>
      `:""}
      ${f(t,o,a)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${r(e.previous)}">Voltar</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${r(e.nextLessonId)}" ${l?"":"disabled"}>Avancar para a proxima licao</button>`:`<button type="button" data-lesson-action="complete" ${l?"":"disabled"}>Concluir licao</button>`}
      </div>
    </article>
  `}function ye(e,a,t){let o=t!==void 0,s=o&&t===e.correctIndex;return`
    <section class="post-lesson-quiz-question">
      <h4>${r(e.question)}</h4>
      <div class="lesson-quiz-options challenge-options">
        ${e.options.map((i,c)=>`
          <button class="${o&&c===e.correctIndex?"correct":""} ${o&&c===t&&c!==e.correctIndex?"wrong":""}" type="button" data-post-lesson-quiz-question="${a}" data-post-lesson-quiz-option="${c}" ${o?"disabled":""}>
            ${r(i)}
          </button>
        `).join("")}
      </div>
      ${o?`<p class="lesson-feedback">${s?"Correto.":"Incorreto."} ${r(e.explanation)}</p>`:""}
    </section>
  `}function S(e){let a=Math.max(0,e.length-1);return n.currentLessonStoryBlockIndex=Math.min(Math.max(n.currentLessonStoryBlockIndex||0,0),a),n.currentLessonStoryBlockIndex}async function Pe({updateLessonProgress:e,renderCategorySections:a}){let t=g(n.currentLessonId),o=S(t);if(o<t.length-1){n.currentLessonStoryBlockIndex=o+1,e(n.currentLessonId,{viewed:!0,storyBlockIndex:n.currentLessonStoryBlockIndex}),await a();return}n.currentLessonMode="summary",n.currentPostStoryStep="summary",n.currentLessonStoryBlockIndex=0,e(n.currentLessonId,{viewed:!0,storyCompleted:!0}),await a()}async function Ie({updateLessonProgress:e,renderCategorySections:a}){let t=g(n.currentLessonId),o=S(t);n.currentLessonStoryBlockIndex=Math.max(0,o-1),e(n.currentLessonId,{viewed:!0,storyBlockIndex:n.currentLessonStoryBlockIndex}),await a()}function E(e){let a=M(e.eraKey).find(l=>l.id===e.sectionId),t=b(e.title),o=m(t),s=$[e.eraKey]?.title||"Hist\xF3ria",i=a?.title||C[e.category]||"Li\xE7\xE3o",u=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(l=>l.match.some(p=>o.includes(m(p))))||{mood:e.category||"default",line:fe(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:t,mood:u.mood,line:u.line,preview:u.preview,kicker:`${s} \xB7 ${i}`}}function b(e){return String(e||"").split(":")[0].trim()}function fe(e){let a=e.detail||be(e.title,e.category);return`\u201C${P(a,142)}\u201D`}function be(e,a=""){return a==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":a==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":a==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":a==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":a==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function $e(...e){let a=m(e.filter(Boolean).join(" ")),t=z.find(o=>o.keywords.some(s=>a.includes(m(s))));return t?t.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var v,W,xe=V(()=>{N();G();H();U();v=["summary","reflection","debate","quiz"],W={assimilation:"reflection",reality:"debate",critical:"debate",challenge:"quiz",reward:"quiz",nextTeaser:"quiz",interaction:"reflection",source:"reflection",insight:"reflection",recap:"summary",consolidate:"quiz"}});xe();export{E as buildLessonIntroFrame,b as getLessonDisplayTitle,Pe as goToNextStoryBlock,Ie as goToPreviousStoryBlock,ze as renderActiveLessonPanel};
