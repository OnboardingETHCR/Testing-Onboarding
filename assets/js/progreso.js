(function () {
  function parseScopes(el){
    try{
      const raw = el.dataset.scopes || "[]";
      return raw.trim().startsWith('[') ? JSON.parse(raw)
           : raw.split(',').map(s=>s.trim()).filter(Boolean);
    }catch(_){ return []; }
  }

  function renderAllBars(){
    document.querySelectorAll('.module-progress').forEach(box=>{
      const scopes = parseScopes(box);
      let done = 0;
      for (const s of scopes){
        if (localStorage.getItem('done:'+s) === '1') done++;
      }
      const pct = scopes.length ? Math.round(done / scopes.length * 100) : 0;
      const pctEl = box.querySelector('.mp-percent');
      const fillEl = box.querySelector('.mp-bar-fill');
      if (pctEl) pctEl.textContent = pct + '%';
      if (fillEl) fillEl.style.width = pct + '%';
    });
  }

  function initPageCheckboxes(){
    document.querySelectorAll('.page-done').forEach(pg=>{
      const scope = pg.dataset.scope;
      const cb = pg.querySelector('input[type="checkbox"]');
      if (!cb || !scope) return;
      cb.checked = localStorage.getItem('done:'+scope) === '1';
      cb.addEventListener('change', ()=>{
        localStorage.setItem('done:'+scope, cb.checked ? '1' : '0');
        renderAllBars();
      });
    });
  }

  function boot(){
    initPageCheckboxes();
    renderAllBars();
  }

  document.addEventListener('DOMContentLoaded', boot);
  document.addEventListener('turbo:load', boot); // para navegación del tema
})();
