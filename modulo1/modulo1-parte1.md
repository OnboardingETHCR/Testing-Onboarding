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

<!-- === PROGRESO DEL MÓDULO + CHECK DE ESTA PÁGINA (pegar antes de la navegación) === -->
<div class="module-progress" data-scopes="mod1-bitcoin,mod1-blockchain,mod1-web3,mod1-cierre">
  <div class="mp-header">
    <strong>Módulo 1 – Progreso</strong> · <span class="mp-percent">0%</span>
  </div>
  <div class="mp-bar"><div class="mp-bar-fill" style="width:0%"></div></div>
</div>

<div class="progress-widget" data-scope="mod1-bitcoin" style="margin:.75rem 0 1.25rem">
  <label style="font-weight:600;"><input type="checkbox" class="done-check"> ✅ Completado</label>
</div>

<script>
(function(){
  // Actualiza todas las barras globales presentes en la página
  function updateModuleProgress() {
    document.querySelectorAll('.module-progress').forEach(box => {
      const scopes = (box.dataset.scopes || '').split(',').map(s => s.trim()).filter(Boolean);
      let total = scopes.length, done = 0;
      scopes.forEach(scope => { if (localStorage.getItem('done:'+scope) === 'true') done++; });
      const pct = total ? Math.round((done/total)*100) : 0;
      box.querySelector('.mp-percent').textContent = pct + '%';
      box.querySelector('.mp-bar-fill').style.width = pct + '%';
    });
  }

  // Checkbox de esta página
  const widget = document.querySelector('.progress-widget');
  if (widget){
    const scope = widget.dataset.scope;
    const check = widget.querySelector('.done-check');
    // Restaurar estado
    if (localStorage.getItem('done:'+scope) === 'true') check.checked = true;
    // Guardar y refrescar barra al cambiar
    check.addEventListener('change', () => {
      localStorage.setItem('done:'+scope, check.checked);
      updateModuleProgress();
    });
  }

  // Inicializar barra al cargar
  updateModuleProgress();
})();
</script>

<style>
.module-progress{border:1px solid #d1d5db;border-radius:12px;padding:1rem;margin:1rem 0;background:#f9fafb}
.mp-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.4rem}
.mp-bar{height:10px;background:#e5e7eb;border-radius:999px;overflow:hidden}
.mp-bar-fill{height:100%;width:0;transition:width .3s ease;background:#4caf50}
@media (prefers-color-scheme: dark){
  .module-progress{background:#0b0e13;border-color:#2b2f36}
  .mp-bar{background:#2b2f36}
}
</style>


---

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo1/modulo1-parte2">Siguiente ➡️</a>
</div>

---
