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

<div id="progress-container" style="margin: 2em 0;">
  <h3>✅ Marca tu progreso</h3>
  <label><input type="checkbox" class="task"> 📄 Leí el whitepaper</label><br>
  <label><input type="checkbox" class="task"> 📄 Completé la lectura “¿Qué es Bitcoin?”</label><br>
  <label><input type="checkbox" class="task"> 🎥 Vi el video explicativo</label><br>
  <label><input type="checkbox" class="task"> 🧠 Respondí la reflexión</label><br>

  <div style="background:#eee; border-radius:8px; width:100%; height:20px; margin-top:10px;">
    <div id="progress-bar" style="background:#4caf50; height:100%; width:0%; border-radius:8px;"></div>
  </div>
  <p id="progress-text" style="margin-top:5px; font-weight:bold;">0% completado</p>
</div>

<script>
  const checkboxes = document.querySelectorAll('.task');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  function updateProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll('.task:checked').length;
    const percent = Math.round((checked / total) * 100);
    progressBar.style.width = percent + '%';
    progressText.textContent = percent + '% completado';
    // ✅ Persistencia con localStorage
    const state = {};
    checkboxes.forEach(cb => state[cb.nextSibling.textContent.trim()] = cb.checked);
    localStorage.setItem('mod1-bitcoin', JSON.stringify(state));
  }

  // Cargar estado guardado
  const saved = JSON.parse(localStorage.getItem('mod1-bitcoin') || '{}');
  checkboxes.forEach(cb => {
    if (saved[cb.nextSibling.textContent.trim()]) cb.checked = true;
  });

  checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));
  updateProgress();
</script>



