import{G as Y,a as z,d as j,h as B,k as J,l as c,m as _,n as m,p as r,q as x,r as K,t as X,u as I,v as y,w as k,x as T,y as R,z as E}from"./chunk-CFEIEYKL.js";import{a as W}from"./chunk-VR2J32YB.js";function ee(){let e=c.currentLessonId?T(c.currentLessonId):I(c.currentEra)[0];return e?M(e).mood:""}function Ge(){let e=c.currentLessonId?T(c.currentLessonId):I(c.currentEra)[0];if(!e)return"";if(c.currentLessonEntryId!==e.id){c.currentLessonEntryId=e.id,c.currentLessonMode="intro",c.currentLessonStoryBlockIndex=0,c.currentPostStoryStep="summary";let i=me(e.id);c.currentLessonReflectionText=i.reflectionAnswer||"",c.currentLessonDebateChoice=i.debateChoice||"",c.currentLessonQuizAnswers=i.quizAnswers||{},c.currentPostLessonQuizIndex=0,c.currentLessonQuizChoice=null}let a=c.currentLessonId===e.id,t=M(e),o=K(z[e.eraKey].curiosities||[],e.index,"Cada vest\xEDgio hist\xF3rico muda quando fazemos uma pergunta melhor."),s=Ke(e.title,e.detail,e.category,...e.related||[]),n=c.currentLessonMode==="intro";return`
    <section class="active-lesson-panel lesson-view ${a?"is-active":""}" data-active-lesson="${r(e.id)}" data-era="${r(e.eraKey)}" data-section="${r(e.sectionId||"")}" data-mood="${r(t.mood)}" data-mode="${r(c.currentLessonMode)}" data-theme="${r(e.category)}">
      ${n?`<div class="lesson-hero">
        <span class="lesson-hero-image" aria-hidden="true"></span>
        <span class="lesson-atmosphere" aria-hidden="true"></span>
        <div class="lesson-hero-copy">
          <p class="eyebrow">${r(t.kicker)}</p>
          <h3>${r(t.title)}</h3>
          <p class="lesson-hero-line">${r(t.line)}</p>
          <div class="lesson-preview-list" aria-label="Preview da li\xE7\xE3o">
            ${t.preview.map(i=>`<span>${r(i)}</span>`).join("")}
          </div>
          <button type="button" class="lesson-start-button" data-lesson-action="story">Iniciar Jornada</button>
        </div>
      </div>`:ae(e,{insight:s,curiosity:o})}
    </section>
  `}function ae(e,a={}){if(c.currentLessonMode==="story"||c.currentLessonMode==="understand"){let t=b(e.id),o=Q(t);return`
      <div class="lesson-experience" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" aria-label="Sequ\xEAncia narrativa da li\xE7\xE3o">
        ${te(t[o],o,t.length,e)}
      </div>
    `}return le(e,a)}function te(e,a,t,o={}){let s=e||{id:"story",visualType:"spark",backgroundMood:"cave-dark",text:"Um pequeno momento come\xE7ou a mudar a experi\xEAncia humana."},n=s.eraKey||o.eraKey||"",i=s.sectionId||o.sectionId||"",u=n==="pre-historia"||["paleolitico","mesolitico","revolucao-neolitica"].includes(i),l=u?ie(s,o):"",p=u?ne(s,o):"",h=s.text,v=ce(h),S=!!(s.image?.desktop||s.image?.mobile),C=a===0?"eager":"lazy",$=a===0?"high":"auto";return`
    <article class="story-block ${u?"storyblock-prehistory cave-firelight":""}" style="--cave-line-count: ${v}" data-story-block="${r(s.id)}" data-story-index="${a%3}" data-visual="${r(s.visualType)}" data-background="${r(s.backgroundMood)}" data-mood="${r(ee())}" data-era="${r(n)}" data-section="${r(i)}" data-prehistory-artifact="${r(l)}" data-prehistory-block-image="${S?"true":"false"}">
      <span class="story-block-background cave-ambient-light" aria-hidden="true"></span>
      <span class="story-block-visual cave-visual-artifact prehistory-artifact" aria-hidden="true">
        ${oe(s,l,C,$)}
      </span>
      <div class="story-block-copy prehistory-stone-panel prehistory-cave-text-area prehistory-narrative-layout cave-pigment-reveal" style="--cave-line-count: ${v}">
        ${u?"":`<span class="prehistory-moment-label">Momento ${a+1} de ${t}</span>`}
        ${p?`<h3 class="prehistory-narrative-title">${r(p)}</h3>`:""}
        <p class="cave-paint-text cave-painted-text" aria-label="${r(h)}">
          ${ue(h)}
        </p>
        <span class="pigment-particles cave-pigment-particles" aria-hidden="true"></span>
      </div>
      ${G(o,a,"prehistory-progress")}
      <div class="story-block-actions prehistory-actions">
        <button type="button" data-lesson-action="story-prev" ${a===0?"disabled":""}>Voltar</button>
        <button type="button" data-lesson-action="story-next">${a===t-1?"Avan\xE7ar":"Continuar"}</button>
      </div>
    </article>
  `}function oe(e={},a="",t="lazy",o="auto"){let s=e.image||{},n=s.desktop||s.src||"",i=s.mobile||n;if(n){let u=se(s.fit,["contain","cover","fill","none","scale-down"],"contain"),l=re(s.position,"center");return`<picture class="prehistory-block-picture" style="--prehistory-block-fit: ${u}; --prehistory-block-position: ${l};">
      ${i&&i!==n?`<source type="image/webp" media="(max-width: 768px)" srcset="${r(i)}" />`:""}
      <img class="prehistory-block-image" src="${r(n)}" alt="" width="1200" height="900" loading="${t}" decoding="async" fetchpriority="${o}" onerror="this.hidden=true" />
    </picture>`}return a!=="flint"?"":`<picture class="prehistory-flint-picture">
    <source type="image/png" srcset="assets/silex-mobile.png?v=20260528 512w, assets/silex-desktop.png?v=20260528 1024w" sizes="(max-width: 768px) 70vw, min(34vw, 506px)" />
    <img class="prehistory-flint-sprite" src="assets/silex-desktop.png?v=20260528" alt="" width="1024" height="1024" loading="${t}" decoding="async" fetchpriority="${o}" />
  </picture>`}function se(e="",a=[],t=""){let o=String(e||"").trim().toLowerCase();return a.includes(o)?o:t}function re(e="",a="center"){let t=String(e||"").trim().toLowerCase();return/^[a-z0-9%.\-\s]+$/.test(t)?t:a}function ne(e={},a={}){return g(a.title||e.title||"Marca na Pedra")}function ie(e={},a={}){let t=m(`${a.title||""} ${e.text||""} ${e.visualType||""}`);return["fogo","chama","fogueira","aquecer","cozinhar","spark","embers"].some(o=>t.includes(o))?"fire":["caca","pesca","animal","rasto","lanca","spear","tracks"].some(o=>t.includes(o))?"hunt":["arte","rupestre","pintura","pigmento","mao","hand"].some(o=>t.includes(o))?"painting":["abrigo","gruta","caverna"].some(o=>t.includes(o))?"shelter":"flint"}function F(e=""){let a=String(e||"").trim();if(!a)return[""];let t=a.split(/(?<=[.!?])\s+|;\s+/).map(o=>o.trim()).filter(Boolean);return t.length?t:[a]}function ce(e=""){return F(e).length}function ue(e=""){return`
    <span class="cave-reveal-paragraph" aria-hidden="true">
      ${F(e).map((a,t)=>`
        <span class="cave-reveal-line" style="--cave-line-index: ${t}" aria-hidden="true">${r(a)}</span>
      `).join(" ")}
    </span>
  `}function le(e,a={}){let t=pe(e,a),o=de(c.currentLessonMode),s=L.indexOf(o),n=L.length;c.currentPostStoryStep=o;let u={summary:O,reflection:Ie,debate:Te,quiz:Ae,reward:Me,nextTeaser:je}[o]||O;return`
    <div class="lesson-experience lesson-experience-screen post-story-flow" data-era="${r(e.eraKey||"")}" data-section="${r(e.sectionId||"")}" data-post-story-step="${r(o)}" aria-label="Continua\xC3\xA7\xC3\xA3o narrativa da li\xC3\xA7\xC3\xA3o">
      ${u(t[o],e,s,n)}
    </div>
  `}function de(e){let a=Z[e]||e||c.currentPostStoryStep||"summary";return L.includes(a)?a:"summary"}function pe(e,a={}){let t=ge(e,a),o=xe(e,a);return{summary:{summary:t.summary,previous:"story"},reflection:{...t.reflection,previous:"summary"},debate:{...t.debate,previous:"reflection"},quiz:{quiz:t.quiz,previous:"debate"},reward:o.reward,nextTeaser:o.nextTeaser}}function me(e=""){if(typeof localStorage>"u"||!e)return{};try{return JSON.parse(localStorage.getItem("historiaVivaProgress"))?.lessonProgress?.[e]||{}}catch{return{}}}function ge(e,a={}){if(e.postLesson)return e.postLesson;let t=g(e.title),o=y(e.id),s=k(e),n=D(e,o,s);return{summary:n,reflection:{question:ve(s.reflection||a.insight||`Que mudan\xE7a hist\xF3rica te parece mais importante em ${t}?`)},debate:fe(e,t,s),quiz:N(e,n)}}function D(e,a=[],t={}){let s=[t.keyTakeaway,...t.evidence||[],...t.archaeology||[],...t.consequences||[],...a.map(n=>n.text),e.detail].filter(Boolean).map(n=>he(d(n,15),e)).filter(Boolean).filter((n,i,u)=>u.findIndex(l=>m(l)===m(n))===i).slice(0,4);for(;s.length<3;)s.push(d(`${g(e.title)} ajuda a perceber causas, escolhas humanas e consequ\xEAncias.`,14));return s.slice(0,4)}function he(e="",a={}){if(!e||A(e)>=9)return e;let t=m(`${a.title||""} ${a.detail||""}`);return t.includes("pedra")||t.includes("ferramenta")?`${e} O gesto humano dava-lhe fun\xE7\xE3o e sentido.`:t.includes("fogo")?`${e} O uso repetido transformava seguran\xE7a, alimento e conv\xEDvio.`:`${e} O contexto hist\xF3rico ajuda a perceber a mudan\xE7a.`}function fe(e,a,t={}){let o=d(t.keyTakeaway||e.detail||a,18);return{question:`Como devemos interpretar ${a}: sobretudo como progresso ou como mudan\xE7a complexa?`,options:[{id:"optionA",label:"Foi sobretudo progresso",feedback:`Esta posi\xE7\xE3o pode indicar que ${o.toLowerCase()} abriu possibilidades importantes. Ainda assim, muitos historiadores defendem que ganhos materiais tamb\xE9m trouxeram novos custos.`},{id:"optionB",label:"Foi uma mudan\xE7a complexa",feedback:`Esta posi\xE7\xE3o sugere que ${o.toLowerCase()} deve ser lido com cautela. H\xE1 debate sobre o peso dos benef\xEDcios e dos limites em diferentes grupos sociais.`}]}}function ve(e=""){let a=String(e).trim().replace(/[.?!]+$/,"");return a?`${a}?`:""}function N(e,a=[]){return ye(e,a).slice(0,5)}function ye(e={},a=[]){let t=g(e.title||"esta li\xE7\xE3o"),o=d(e.detail||a[0]||t,18),s=d(a[0]||e.detail||t,16),n=d(a[1]||e.question||e.detail||t,16),i=d(a[2]||"comparar vest\xEDgios, contexto e consequ\xEAncias",16);return[{question:`Qual \xE9 a ideia central da li\xE7\xE3o "${t}"?`,options:[s,"Foi um acontecimento isolado, sem rela\xE7\xE3o com o contexto.","Serve apenas para memorizar uma data, sem interpretar causas.","N\xE3o deixou pistas que possam ser estudadas historicamente."],correctIndex:0,explanation:`A resposta correta retoma diretamente o foco da li\xE7\xE3o "${t}".`},{question:`Que pista ajuda melhor a explicar "${t}"?`,options:[n,"Ignorar os grupos humanos envolvidos.","Separar o acontecimento das suas consequ\xEAncias.","Escolher uma resposta que podia servir para qualquer li\xE7\xE3o."],correctIndex:0,explanation:"A melhor pista nasce do conte\xFAdo trabalhado nesta li\xE7\xE3o, n\xE3o de outro tema da era."},{question:`Como devemos estudar historicamente "${t}"?`,options:[`Ligando ${i.toLowerCase()} ao contexto da li\xE7\xE3o.`,"Decorando uma frase sem analisar fontes ou consequ\xEAncias.","Trocando o tema por outro acontecimento da mesma era.","Assumindo que todos os grupos viveram a mudan\xE7a da mesma forma."],correctIndex:0,explanation:`Esta leitura mant\xE9m a resposta dentro da li\xE7\xE3o: ${o}`}].map(be)}function be(e={}){return{question:e.question||"Que ideia fica desta li\xE7\xE3o?",options:$e(e.options||[]),correctIndex:Number.isInteger(e.correctIndex)?e.correctIndex:Math.min(Math.max(e.answer||0,0),3),explanation:e.explanation||"Esta resposta enquadra melhor o contexto hist\xF3rico da li\xE7\xE3o."}}function $e(e=[]){let a=["Foi um processo sem contexto.","Aconteceu da mesma forma em todo o lado.","Teve apenas uma causa.","Deve ser lido com fontes e consequ\xEAncias."],t=e.slice(0,4);return a.forEach(o=>{t.length<4&&!t.includes(o)&&t.push(o)}),t.slice(0,4)}function xe(e,a={}){let t=M(e),o=g(e.title),s=y(e.id),n=k(e),i=R(e.eraKey,e.id);return{reflection:Le(e,a.insight,n),assimilation:qe(e,s,o,n),reality:we(e,o,n),critical:Se(e,o,n),challenge:Ce(e),reward:{kicker:"Mem\xF3ria da cena",title:"Mem\xF3ria guardada",text:d(n.keyTakeaway||`Guardaste uma imagem mental sobre ${o}. Agora consegues lembrar o gesto e a consequ\xEAncia.`,20),artifact:t.preview?.[0]||"Artefacto narrativo desbloqueado",previous:"challenge"},nextTeaser:{kicker:"Pr\xF3xima cena",title:i?g(i.title):"Rever a jornada",text:i?d(Pe(o,g(i.title)),20):"A viagem continua quando voltares ao mapa da era.",nextLessonId:i?.id||"",previous:"reward"}}}function V(e=""){let a=String(e||"").replace(/\s+/g," ").trim();return a?a.match(/[^.!?…]+(?:[.!?…]+["”’»]?|$)/g)?.map(t=>t.trim()).filter(Boolean)||[a]:[]}function A(e=""){return String(e||"").trim().split(/\s+/).filter(Boolean).length}function d(e="",a=24){let t=V(e);if(!t.length)return"";let o=[],s=0;for(let n of t){let i=A(n);if(o.length&&s+i>a||(o.push(n),s+=i,s>=a))break}return o.join(" ")}function ke(e,a){let t=V(e?.text);if(!t.length)return[e];let o=[],s=[],n=0;return t.forEach(i=>{let u=A(i);s.length&&n+u>a&&(o.push(s.join(" ")),s=[],n=0),s.push(i),n+=u}),s.length&&o.push(s.join(" ")),o.map((i,u)=>({...e,id:`${e.id||"story"}-${u+1}`,text:i}))}function b(e){return y(e).flatMap(t=>ke(t,55))}function Le(e,a="",t={}){let o=g(e.title),s=q(e,o),n=s.reflectionText||t.reflection||x(a||e.detail||H(e),150);return{kicker:"Depois da cena",title:s.reflectionTitle||"O que ficou diferente?",text:d(n,24),previous:"story"}}function qe(e,a,t,o={}){let s=q(e,t),n=[...o.evidence||[],...o.archaeology||[]],i=s.prompts||(n.length?n.slice(0,2):a.slice(0,2).map(u=>u.text));return{kicker:"Guia da cena",title:s.assimilationTitle||"Seguir as pistas",text:d(s.assimilationText||o.keyTakeaway||`${t} ganha sentido quando vemos pessoas, objetos, escolhas e consequ\xEAncias.`,22),prompts:(i.length?i:["Que gesto humano aparece aqui?","Que consequ\xEAncia veio depois?"]).map(u=>d(u,14)),previous:"reflection"}}function we(e,a,t={}){let o=q(e,a),s=o.realityCards||[["Gesto","Uma t\xE9cnica pequena podia mudar o que uma m\xE3o conseguia fazer."],["Presente","As ferramentas de hoje continuam a prolongar o corpo humano."]];return{kicker:"Ponte ao presente",title:o.realityTitle||"A marca no presente",text:d(o.realityText||t.presentConnection||`${a} ainda importa quando ajuda a perceber uma escolha humana reconhec\xEDvel.`,22),cards:s.slice(0,2).map(([n,i])=>[n,d(i,14)]),previous:"assimilation"}}function Se(e,a,t={}){let o=q(e,a);return{kicker:"Lente cr\xEDtica",title:o.criticalTitle||t.reflection||"Quem ganhou e quem perdeu?",text:d(o.criticalText||t.curiosity||"Uma boa leitura hist\xF3rica pergunta que possibilidades se abriram e que custos apareceram.",20),perspectives:(o.perspectives||[["Possibilidade","Algumas pessoas ganharam novas formas de agir."],["Limite","Outras enfrentaram riscos, sil\xEAncio ou depend\xEAncia."]]).slice(0,2).map(([s,n])=>[s,d(n,14)]),previous:"reality"}}function q(e={},a=""){let t=m(`${a} ${e.title||""} ${e.detail||""}`);return t.includes("fogo")?{reflectionTitle:"A noite mudou",reflectionText:"Quando a chama ficava acesa, a noite deixava de ser s\xF3 amea\xE7a. Havia calor, luz e rostos reunidos.",assimilationTitle:"Ler as cinzas",assimilationText:"Cinzas e ossos queimados n\xE3o falam sozinhos. Deixam pistas de cuidado repetido e de noites protegidas.",prompts:["Quem alimentava a fogueira quando todos tinham sono?","Que restos provariam que aquele fogo foi usado por humanos?"],realityTitle:"Ainda guardamos energia",realityText:"Hoje carregamos baterias; antes, algu\xE9m protegia brasas. A ideia continua pr\xF3xima: guardar energia para viver melhor.",realityCards:[["Luz","A energia ainda organiza trabalho, descanso e seguran\xE7a."],["Cuidado","Guardar uma fonte vital continua a exigir aten\xE7\xE3o coletiva."]],criticalTitle:"Quem ficava de vigia?",criticalText:"O fogo ajudava, mas tamb\xE9m exigia trabalho. Progresso quase nunca chega sem novas responsabilidades.",perspectives:[["Ganho","Mais calor, mais luz e alimento mais seguro."],["Custo","Era preciso vigiar, alimentar e proteger a chama."]]}:t.includes("ferramentas de pedra")||t.includes("pedra")?{reflectionTitle:"A m\xE3o ganhou alcance",reflectionText:"Depois do golpe certo, a pedra deixava de ser paisagem. Podia cortar, raspar e abrir novas possibilidades.",assimilationTitle:"Ler as lascas",assimilationText:"Uma lasca guarda escolhas: for\xE7a, \xE2ngulo e paci\xEAncia. Nela vemos t\xE9cnica, erro e aprendizagem.",prompts:["Que gesto humano ficou marcado na pedra?","O que uma lasca revela sobre quem aprendeu a talhar?"],realityTitle:"Ferramentas prolongam o corpo",realityText:"Do s\xEDlex ao computador, uma ferramenta faz a mesma pergunta: que limite do corpo queremos ultrapassar?",realityCards:[["Gesto","Uma t\xE9cnica pequena podia mudar o alcance da m\xE3o."],["Presente","As ferramentas de hoje continuam essa mesma ideia."]],criticalTitle:"Quem dominava a t\xE9cnica?",criticalText:"A ferramenta ajudava o grupo, mas o saber precisava de ser ensinado. Sem aprendizagem, a pedra voltava a ser s\xF3 pedra.",perspectives:[["Ganho","Cortar, raspar e fabricar ficou mais f\xE1cil."],["Risco","Um golpe errado podia destruir a pe\xE7a."]]}:{reflectionTitle:"O que ficou diferente?",reflectionText:x(e.detail||`${a} mudou a vida de pessoas concretas.`,140),assimilationTitle:"Seguir as pistas",assimilationText:`${a} ganha sentido quando vemos pessoas, objetos, escolhas e consequ\xEAncias.`,realityTitle:"A marca no presente",realityText:`${a} ainda importa quando ajuda a perceber uma escolha humana que continua reconhec\xEDvel.`,criticalTitle:"Quem ganhou e quem perdeu?",criticalText:"Uma boa leitura hist\xF3rica pergunta sempre que possibilidades se abriram e que custos apareceram.",perspectives:[["Possibilidade","Algumas pessoas ganharam novas formas de agir."],["Limite","Outras enfrentaram riscos, sil\xEAncio ou depend\xEAncia."]]}}function Ce(e){let a=D(e,y(e.id),k(e)),t=ze(N(e,a)[0]);return{kicker:"Decis\xE3o r\xE1pida",title:t?.question||"Que escolha ajudaria melhor o grupo?",quiz:t,previous:"critical"}}function Pe(e,a){return`${e} abriu uma porta. A pr\xF3xima li\xE7\xE3o mostra o que mudou a seguir: ${a}.`}function ze(e={}){return{...e,answer:Number.isInteger(e.answer)?e.answer:e.correctIndex}}function G(e,a,t=""){let o=b(e.id).length,s=Math.max(1,o+L.length),n=Math.min(Math.max(a,0),s-1),i=s<=1?100:Math.round(n/(s-1)*100);return`
    <div class="lesson-next-progress ${r(t)}" aria-label="Progresso at\xE9 \xE0 pr\xF3xima li\xE7\xE3o">
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
  `}function f(e,a,t){let o=b(t.id).length;return G(t,o+e,"post-story-progress")}function w(e,a="Continuar",t=!1){return`
    <div class="story-block-actions lesson-screen-actions post-story-actions">
      <button type="button" data-lesson-action="${r(e)}">Voltar</button>
      <button type="button" data-lesson-action="next" ${t?"disabled":""}>${r(a)}</button>
    </div>
  `}function O(e,a,t,o){let s=(e.summary||[]).slice(0,4);return`
    <article class="post-story-screen lesson-summary-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Resumo da li\xE7\xE3o</span>
        <h3>O que aprendeste?</h3>
        <ul class="post-lesson-summary-list" aria-label="Pontos principais da li\xE7\xE3o">
          ${s.map((n,i)=>`
            <li>
              <span aria-hidden="true">${i+1}</span>
              <p>${r(n)}</p>
            </li>
          `).join("")}
        </ul>
      </div>
      ${f(t,o,a)}
      ${w(e.previous,"Continuar")}
    </article>
  `}function Ie(e,a,t,o){return`
    <article class="post-story-screen reflection-moment reflection-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Reflexao</span>
        <h3>Pensa sobre isto</h3>
        <p>${r(e.question)}</p>
        <textarea class="post-lesson-reflection-input" data-lesson-reflection rows="5" placeholder="Escreve a tua resposta...">${r(c.currentLessonReflectionText||"")}</textarea>
      </div>
      ${f(t,o,a)}
      ${w(e.previous,"Continuar")}
    </article>
  `}function Te(e,a,t,o){let s=(e.options||[]).find(n=>n.id===c.currentLessonDebateChoice);return`
    <article class="post-story-screen critical-lens debate-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Debate hist\xF3rico</span>
        <h3>Escolhe uma posi\xE7\xE3o</h3>
        <p>${r(e.question)}</p>
      </div>
      <div class="post-lesson-debate-panel">
        <div class="post-lesson-debate-options" aria-label="Opcoes de debate">
          ${(e.options||[]).map(n=>`
            <button class="${c.currentLessonDebateChoice===n.id?"is-selected":""}" type="button" data-lesson-debate-option="${r(n.id)}">
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
      ${w(e.previous,"Continuar")}
    </article>
  `}function Ae(e,a,t,o){let s=e.quiz||[],n=c.currentLessonQuizAnswers||{},i=s.reduce(($,P,U)=>$+(n[U]===P.correctIndex?1:0),0),u=s.filter(($,P)=>n[P]!==void 0).length,l=s.length>0&&u===s.length,p=l?Math.max(0,s.length-1):Math.min(Math.max(Number(c.currentPostLessonQuizIndex)||0,0),Math.max(0,s.length-1)),h=s[p],v=h&&n[p]!==void 0,S=p<s.length-1,C=!v&&!l?'<button type="button" disabled>Responde para continuar</button>':v&&!l&&S?'<button type="button" data-lesson-action="quiz-next">Pr\xF3xima pergunta</button>':`<button type="button" data-lesson-action="next" ${l?"":"disabled"}>Ver recompensa</button>`;return`
    <article class="post-story-screen challenge-screen quiz-screen ${l?"is-complete":""}" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}" data-quiz-total="${s.length}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">Quiz</span>
        <h3>Verifica o que aprendeste</h3>
        ${s.length?`<p>Pergunta ${Math.min(p+1,s.length)} de ${s.length}</p>`:""}
      </div>
      <div class="post-lesson-quiz-panel">
        ${h?Qe(h,p,n[p]):""}
        ${l?`
          <section class="post-lesson-quiz-result" aria-live="polite">
            <strong>${i}/${s.length} respostas corretas</strong>
            <p>${r(i===s.length?"Excelente leitura. A li\xE7\xE3o ficou bem consolidada.":"Bom trabalho. Rev\xEA as explica\xE7\xF5es e avan\xE7a com mais contexto.")}</p>
          </section>
        `:""}
      </div>
      ${f(t,o,a)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${r(e.previous)}">Voltar</button>
        ${C}
      </div>
    </article>
  `}function Qe(e,a,t){let o=t!==void 0,s=o&&t===e.correctIndex;return`
    <section class="post-lesson-quiz-question">
      <h4>${r(e.question)}</h4>
      <div class="lesson-quiz-options challenge-options">
        ${e.options.map((n,i)=>`
          <button class="${o&&i===e.correctIndex?"correct":""} ${o&&i===t&&i!==e.correctIndex?"wrong":""}" type="button" data-post-lesson-quiz-question="${a}" data-post-lesson-quiz-option="${i}" ${o?"disabled":""}>
            ${r(n)}
          </button>
        `).join("")}
      </div>
      ${o?`<p class="lesson-feedback">${s?"Correto.":"Incorreto."} ${r(e.explanation)}</p>`:""}
    </section>
  `}function Me(e,a,t,o){return`
    <article class="post-story-screen reward-screen" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="reward-artifact" aria-hidden="true"></div>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(e.text)}</p>
        <small>${r(e.artifact)}</small>
      </div>
      ${f(t,o,a)}
      ${w(e.previous,"Ver pr\xF3xima")}
    </article>
  `}function je(e,a,t,o){return`
    <article class="post-story-screen next-lesson-teaser" data-era="${r(a.eraKey||"")}" data-section="${r(a.sectionId||"")}" data-theme="${r(a.category)}">
      <span class="post-story-background" aria-hidden="true"></span>
      <div class="post-story-copy">
        <span class="post-story-kicker">${r(e.kicker)}</span>
        <h3>${r(e.title)}</h3>
        <p>${r(e.text)}</p>
      </div>
      ${f(t,o,a)}
      <div class="story-block-actions lesson-screen-actions post-story-actions">
        <button type="button" data-lesson-action="${r(e.previous)}">Voltar</button>
        <button type="button" data-lesson-action="timeline">Voltar \xE0 timeline</button>
        ${e.nextLessonId?`<button type="button" data-lesson-action="next-lesson" data-next-lesson="${r(e.nextLessonId)}">Entrar na pr\xF3xima</button>`:'<button type="button" data-lesson-action="complete">Terminar</button>'}
      </div>
    </article>
  `}function Q(e){let a=Math.max(0,e.length-1);return c.currentLessonStoryBlockIndex=Math.min(Math.max(c.currentLessonStoryBlockIndex||0,0),a),c.currentLessonStoryBlockIndex}async function He({updateLessonProgress:e,renderCategorySections:a}){let t=b(c.currentLessonId),o=Q(t);if(o<t.length-1){c.currentLessonStoryBlockIndex=o+1,e(c.currentLessonId,{viewed:!0,storyBlockIndex:c.currentLessonStoryBlockIndex}),await a();return}c.currentLessonMode="summary",c.currentPostStoryStep="summary",c.currentLessonStoryBlockIndex=0,e(c.currentLessonId,{viewed:!0,storyCompleted:!0}),await a()}async function Ue({updateLessonProgress:e,renderCategorySections:a}){let t=b(c.currentLessonId),o=Q(t);c.currentLessonStoryBlockIndex=Math.max(0,o-1),e(c.currentLessonId,{viewed:!0,storyBlockIndex:c.currentLessonStoryBlockIndex}),await a()}function M(e){let a=E(e.eraKey).find(l=>l.id===e.sectionId),t=g(e.title),o=m(t),s=z[e.eraKey]?.title||"Hist\xF3ria",n=a?.title||j[e.category]||"Li\xE7\xE3o",u=[{match:["descoberta do fogo","fogo"],mood:"fire",line:"O fogo iluminou a noite e mudou a humanidade para sempre.",preview:["Sobreviver ao frio","Dominar as chamas","Vida \xE0 volta da fogueira"]},{match:["ferramentas de pedra","pedra"],mood:"stone",line:"A pedra deixou de ser paisagem e tornou-se inten\xE7\xE3o humana.",preview:["Cortar e raspar","Aprender pela t\xE9cnica","Transformar mat\xE9ria em poder"]},{match:["caca e pesca","ca\xE7a e pesca","pesca"],mood:"hunt",line:"Ler animais, \xE1guas e esta\xE7\xF5es tornou-se uma arte de sobreviv\xEAncia.",preview:["Seguir rastos","Cooperar em grupo","Conhecer rios e florestas"]},{match:["arte rupestre","arte"],mood:"art",line:"Nas paredes da rocha, a mem\xF3ria come\xE7ou a ganhar forma.",preview:["Pigmentos e sinais","Animais pintados","Imagina\xE7\xE3o coletiva"]},{match:["ritos funerarios","ritos funer\xE1rios","funer"],mood:"rites",line:"Cuidar dos mortos revelou uma nova profundidade humana.",preview:["Mem\xF3ria do grupo","Objetos e sepulturas","Perguntas sobre a morte"]},{match:["fim da era glacial","era glacial","glacial"],mood:"ice",line:"Quando o gelo recuou, o mundo abriu caminhos novos.",preview:["Clima em mudan\xE7a","Novas paisagens","Adaptar para continuar"]},{match:["domesticacao de animais","domestica\xE7\xE3o de animais","animais"],mood:"animals",line:"A rela\xE7\xE3o com os animais come\xE7ou a mudar a vida humana.",preview:["Prote\xE7\xE3o e alimento","Proximidade di\xE1ria","Novas depend\xEAncias"]},{match:["abrigos permanentes","primeiros abrigos"],mood:"shelter",line:"Ficar mais tempo no mesmo lugar mudou a ideia de comunidade.",preview:["Abrigos est\xE1veis","Espa\xE7os partilhados","Primeiras rotinas"]},{match:["agricultura"],mood:"agriculture",line:"Produzir alimento transformou a paisagem em projeto humano.",preview:["Cultivo e sementes","Colheitas","Sedentarismo"]},{match:["aldeias e comunidade","aldeias"],mood:"village",line:"As primeiras comunidades permanentes come\xE7aram a desenhar o futuro.",preview:["Cabanas e fogueiras","Coopera\xE7\xE3o","Crescimento populacional"]},{match:["dominio dos metais","dom\xEDnio dos metais","metais"],mood:"metal",line:"O metal mudou ferramentas, conflito e poder.",preview:["Cobre, bronze e ferro","Forjas e armas","Novas hierarquias"]},{match:["comercio e trocas","com\xE9rcio e trocas","trocas"],mood:"trade",line:"As aldeias come\xE7aram a trocar recursos, t\xE9cnicas e mundos.",preview:["Rotas","Especializa\xE7\xE3o","Contacto entre povos"]},{match:["nascimento das civilizacoes","nascimento das civiliza\xE7\xF5es","civiliz"],mood:"civilization",line:"Das aldeias nasceram lideran\xE7a, muralhas e primeiras cidades.",preview:["Hierarquias","Defesa","Primeiras cidades"]}].find(l=>l.match.some(p=>o.includes(m(p))))||{mood:e.category||"default",line:H(e),preview:["Contexto","Causas","Consequ\xEAncias"]};return{title:t,mood:u.mood,line:u.line,preview:u.preview,kicker:`${s} \xB7 ${n}`}}function g(e){return String(e||"").split(":")[0].trim()}function H(e){let a=e.detail||Be(e.title,e.category);return`\u201C${x(a,142)}\u201D`}function Be(e,a=""){return a==="pol\xEDtica"?"Pista: observa quem ganha autoridade, quem fica exclu\xEDdo e que institui\xE7\xF5es mudam.":a==="guerra"?"Pista: liga viol\xEAncia, recursos, alian\xE7as e efeitos sobre popula\xE7\xF5es civis.":a==="ci\xEAncia"?"Pista: pergunta que t\xE9cnica, conhecimento ou infraestrutura mudou pr\xE1ticas sociais.":a==="cultura"?"Pista: procura impactos em mem\xF3ria, educa\xE7\xE3o, identidade e circula\xE7\xE3o de ideias.":a==="religi\xE3o"?"Pista: analisa como cren\xE7a, institui\xE7\xE3o e poder social se influenciam.":e.includes("poder")||e.includes("autoridade")?"Pista: repara em quem ganha legitimidade e quem fica exclu\xEDdo.":e.includes("guerra")||e.includes("militar")?"Pista: liga conflito, recursos e mudan\xE7a pol\xEDtica.":e.includes("com\xE9rcio")||e.includes("comerciais")?"Pista: segue as redes de troca e os grupos afetados.":"Pista: transforma este momento numa causa, consequ\xEAncia ou compara\xE7\xE3o."}function Ke(...e){let a=m(e.filter(Boolean).join(" ")),t=B.find(o=>o.keywords.some(s=>a.includes(m(s))));return t?t.insight:"L\xEA este tema como parte de uma cadeia hist\xF3rica: causas, escolhas humanas, estruturas sociais e consequ\xEAncias raramente avan\xE7am isoladas."}var L,Z,Re=W(()=>{J();_();X();Y();L=["summary","reflection","debate","quiz","reward","nextTeaser"],Z={assimilation:"reflection",reality:"debate",critical:"debate",challenge:"quiz",reward:"reward",nextTeaser:"nextTeaser",interaction:"reflection",source:"reflection",insight:"reflection",recap:"summary",consolidate:"reward"}});Re();export{M as buildLessonIntroFrame,g as getLessonDisplayTitle,He as goToNextStoryBlock,Ue as goToPreviousStoryBlock,Ge as renderActiveLessonPanel};
