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

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo1/modulo1-parte2">Siguiente ➡️</a>
</div>

---

<!-- ✅ Checkbox de esta página -->
<div class="progress-widget" data-scope="mod1-bitcoin">
  <label><input type="checkbox" class="done-check"> ✅ Completado</label>
</div>

<script>
(function(){
  // --- función que actualiza barra global ---
  function updateModuleProgress() {
    document.querySelectorAll('.module-progress').forEach(box => {
      const scopes = (box.dataset.scopes || '').split(',').map(s => s.trim()).filter(Boolean);
      let total = scopes.length, done = 0;
      scopes.forEach(scope => {
        if(localStorage.getItem('done:'+scope)==='true') done++;
      });
      const pct = total ? Math.round((done/total)*100) : 0;
      box.querySelector('.mp-percent').textContent = pct + '%';
      box.querySelector('.mp-bar-fill').style.width = pct + '%';
    });
  }

  // --- widget de esta página ---
  const widget = document.querySelector('.progress-widget');
  if(widget){
    const scope = widget.dataset.scope;
    const check = widget.querySelector('.done-check');
    // cargar estado
    if(localStorage.getItem('done:'+scope)==='true') check.checked = true;
    check.addEventListener('change', ()=>{
      localStorage.setItem('done:'+scope, check.checked);
      updateModuleProgress();
    });
  }

  // inicializar
  updateModuleProgress();
})();
</script>

<style>
.module-progress{border:1px solid #d1d5db;border-radius:12px;padding:1rem;margin:1rem 0;background:#f9fafb}
.mp-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.25rem}
.mp-bar{height:10px;background:#e5e7eb;border-radius:999px;overflow:hidden;margin:.4rem 0 .5rem}
.mp-bar-fill{height:100%;width:0;transition:width .3s ease;background:#4caf50}
.progress-widget{margin:1em 0;font-weight:bold}
</style>