---
layout: page
title: "1. Introducción a Bitcoin"
nav_order: 1
parent: "Módulo 1: Introducción a Blockchain y Web3"
---

<!-- 📈 Progreso del Módulo 1 -->
<div id="progress-container" style="margin: 20px 0;">
  <div style="font-weight: bold;">📈 Progreso en el Módulo 1:</div>
  <div style="background-color: #eee; border-radius: 8px; height: 20px; width: 100%;">
    <div id="progress-bar" style="width: 0%; height: 100%; background-color: #10b981; border-radius: 8px;"></div>
  </div>
  <div id="progress-text" style="margin-top: 5px;">0% completado</div>
</div>


## Introducción a Bitcoin

### 📄 Lectura: ¿Qué es Bitcoin?

<iframe src="https://onboardingethcr.github.io/Testing-Onboarding/assets/Modulo%201%20-%20Introduccion%20al%20Blockchain%20y%20Web3/1.Introduccion-a-Bitcoin/1.Lectura_1_Que_es_Bitcoin.pdf" width="100%" height="600px"></iframe>

[📥 Descargar PDF – ¿Qué es Bitcoin?](https://onboardingethcr.github.io/Testing-Onboarding/assets/Modulo%201%20-%20Introduccion%20al%20Blockchain%20y%20Web3/1.Introduccion-a-Bitcoin/1.Lectura_1_Que_es_Bitcoin.pdf){:target="_blank"}

### 🎥 Video explicativo

<iframe width="100%" height="400" src="https://www.youtube.com/embed/bBC-nXj3Ng4" frameborder="0" allowfullscreen></iframe>

---

### 🧠 ¿Qué aprendiste?

Luego de revisar la lectura y el video, tomá unos minutos para reflexionar:

- ¿Por qué fue necesario crear Bitcoin?
- ¿Qué problema resuelve la tecnología blockchain según el video?
- ¿Qué parte te pareció más compleja o interesante?

---

<!-- ✅ Marcar esta sección como completada -->
<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #ccc;">
  <label style="font-size: 1rem;">
    <input type="checkbox" class="section-check">
    ✅ Marcar esta sección del módulo como completada
  </label>
</div>

<script>
// ✅ Lista oficial de páginas del Módulo 1 (sin incluir modulo1.md)
const PAGES_MODULO1 = [
  "modulo1-parte1",
  "modulo1-parte2",
  "modulo1-quiz",
  "modulo1-parte3",
  "modulo1-actividad",
  "modulo1-parte4"
];

// Detectar página actual
const currentId = window.location.pathname.split("/").pop().replace(".html", "").replace(".md", "");

// Configurar checkbox
const checkbox = document.querySelector(".section-check");
if (checkbox) {
  checkbox.dataset.id = currentId;

  const saved = JSON.parse(localStorage.getItem("progressModulo1") || "[]");
  if (saved.includes(currentId)) checkbox.checked = true;

  checkbox.addEventListener("change", () => {
    let updated = JSON.parse(localStorage.getItem("progressModulo1") || "[]");
    if (checkbox.checked && !updated.includes(currentId)) {
      updated.push(currentId);
    } else {
      updated = updated.filter(p => p !== currentId);
    }
    localStorage.setItem("progressModulo1", JSON.stringify(updated));
    updateProgressBarModulo1();
  });
}

// Actualizar barra
function updateProgressBarModulo1() {
  const done = JSON.parse(localStorage.getItem("progressModulo1") || "[]");
  const valid = done.filter(p => PAGES_MODULO1.includes(p));
  const percent = Math.round((valid.length / PAGES_MODULO1.length) * 100);
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("progress-text").innerText = `${percent}% completado (${valid.length} de ${PAGES_MODULO1.length} secciones completadas)`;
}

// Ejecutar al cargar
updateProgressBarModulo1();
</script>

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo1-parte2">Siguiente ➡️</a>
</div>

---


