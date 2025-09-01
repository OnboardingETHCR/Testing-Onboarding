---
layout: page
title: "1. Introducción a Bitcoin"
nav_order: 1
parent: "Módulo 1: Introducción a Blockchain y Web3"
---

## Introducción a Bitcoin

Bitcoin fue creado en 2008 por una persona o grupo bajo el seudónimo **Satoshi Nakamoto**, quien publicó el whitepaper *“Bitcoin: A Peer-to-Peer Electronic Cash System”*. La red comenzó a funcionar en enero de 2009, dando origen a la primera **infraestructura financiera descentralizada** basada en blockchain.

A continuación puede ver el whitepaper original de Bitcoin:

<iframe src="https://onboardingethcr.github.io/Testing-Onboarding/assets/modulo1/1.Introduccion-a-Bitcoin/bitcoin-whitepaper.pdf" width="100%" height="600px"></iframe>

[📥 Descargar PDF – ¿Qué es Bitcoin?](https://onboardingethcr.github.io/Testing-Onboarding/assets/modulo1/1.Introduccion-a-Bitcoin/bitcoin-whitepaper.pdf){:target="_blank"}

### 📄 Lectura: ¿Qué es Bitcoin?

<iframe src="https://onboardingethcr.github.io/Testing-Onboarding/assets/modulo1/1.Introduccion-a-Bitcoin/1.Lectura_1_Que_es_Bitcoin.pdf" width="100%" height="600px"></iframe>

[📥 Descargar PDF – ¿Qué es Bitcoin?](https://onboardingethcr.github.io/Testing-Onboarding/assets/modulo1/1.Introduccion-a-Bitcoin/1.Lectura_1_Que_es_Bitcoin.pdf){:target="_blank"}

### 🎥 Video explicativo

<iframe width="100%" height="400" src="https://www.youtube.com/embed/bBC-nXj3Ng4" frameborder="0" allowfullscreen></iframe>

---

### 🧠 ¿Qué aprendiste?

Luego de revisar la lectura y el video, tomá unos minutos para reflexionar:

- ¿Por qué fue necesario crear Bitcoin?
- ¿Qué problema resuelve la tecnología blockchain según el video?
- ¿Qué parte te pareció más compleja o interesante?

---

<div class="module-progress" id="mp-mod1"
     data-scopes='["mod1-bitcoin","mod1-blockchain","mod1-quiz","mod1-web3","mod1-cierre","mod1-actividad"]'>
  <div class="mp-header">
    <strong>Módulo 1 – Progreso</strong>
    <span class="mp-percent">0%</span>
  </div>
  <div class="mp-bar"><div class="mp-bar-fill" style="width:0%"></div></div>
</div>

<div class="page-done" data-scope="mod1-bitcoin" style="margin:.75rem 0 1.25rem">
  <label class="pd-label"><input type="checkbox"> Completado</label>
</div>

<style>
.module-progress{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1rem;margin:1rem 0;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.mp-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;color:#374151;font-weight:600}
.mp-percent{color:#6b7280;font-weight:600}
.mp-bar{height:12px;background:#e5e7eb;border-radius:999px;overflow:hidden}
.mp-bar-fill{height:100%;width:0;transition:width .25s ease;background:#22c55e}
.pd-label{font-weight:600;color:#374151}
</style>

<script>
(function(){
  function init(){
    function parseScopes(el){
      try{
        const raw = el.dataset.scopes || "[]";
        return raw.trim().startsWith('[') ? JSON.parse(raw)
             : raw.split(',').map(s=>s.trim()).filter(Boolean);
      }catch(e){ return []; }
    }

    function renderAllBars(){
      document.querySelectorAll('.module-progress').forEach(box=>{
        const scopes = parseScopes(box);
        let total = scopes.length, done = 0;
        scopes.forEach(s => { if (localStorage.getItem('done:'+s) === 'true') done++; });
        const pct = total ? Math.round(done/total*100) : 0;
        const pctEl = box.querySelector('.mp-percent');
        const fillEl = box.querySelector('.mp-bar-fill');
        if (pctEl) pctEl.textContent = pct + '%';
        if (fillEl) fillEl.style.width = pct + '%';
      });
    }

    // checkbox de esta página
    document.querySelectorAll('.page-done').forEach(pg=>{
      const scope = pg.dataset.scope;
      const cb = pg.querySelector('input[type="checkbox"]');
      if (!cb) return;
      if (localStorage.getItem('done:'+scope) === 'true') cb.checked = true;
      cb.addEventListener('change', ()=>{
        localStorage.setItem('done:'+scope, cb.checked);
        renderAllBars();
      });
    });

    renderAllBars();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init(); // DOM ya listo -> corre ahora
  }
})();
</script>



---

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo1/modulo1-parte2">Siguiente ➡️</a>
</div>

---
