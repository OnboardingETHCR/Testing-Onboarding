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

<script>
window.addEventListener('DOMContentLoaded', function(){
  function parseScopes(el){
    try{
      const raw = el.dataset.scopes || "[]";
      return raw.trim().startsWith('[')
        ? JSON.parse(raw)
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

  // Restaurar y escuchar el checkbox de ESTA página
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

  // Pintar al cargar
  renderAllBars();
});
</script>


---

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo1/modulo1-parte2">Siguiente ➡️</a>
</div>

---
