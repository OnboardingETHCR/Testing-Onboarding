// /assets/js/progreso.js  (v1.2)
(function () {
  // storage seguro (soporta Safari Private; fallback a memoria)
  let mem = {};
  const L = {
    get(k){ try { return localStorage.getItem(k); } catch(e){ return mem[k]; } },
    set(k,v){ try { localStorage.setItem(k, v); } catch(e){ mem[k]=v; } }
  };

  const KEY = (s)=> 'done:'+s;
  const isDone = (v)=> v === '1' || v === 'true';

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
      for (const s of scopes) if (isDone(L.get(KEY(s)))) done++;
      const pct = scopes.length ? Math.round(done / scopes.length * 100) : 0;

      const pctEl = box.querySelector('.mp-percent');
      const fillEl = box.querySelector('.mp-bar-fill');
      if (pctEl) pctEl.textContent = pct + '%';
      if (fillEl) fillEl.style.width = pct + '%';
      // accesibilidad
      try { box.setAttribute('aria-valuenow', String(pct)); } catch(_){}
    });
  }

  function initPageCheckboxes(){
    document.querySelectorAll('.page-done').forEach(pg=>{
      const scope = pg.dataset.scope;
      const cb = pg.querySelector('input[type="checkbox"]');
      const txt = pg.querySelector('.pd-text');
      if (!cb || !scope) return;

      const checked = isDone(L.get(KEY(scope)));
      cb.checked = checked;
      if (txt) txt.textContent = checked ? 'Página completada ✓' : 'Marcar esta página como completada';

      cb.addEventListener('change', ()=>{
        L.set(KEY(scope), cb.checked ? '1' : '0');
        if (txt) txt.textContent = cb.checked ? 'Página completada ✓' : 'Marcar esta página como completada';
        renderAllBars();
      });
    });
  }

  function boot(){
    initPageCheckboxes();
    renderAllBars();
  }

  // soporta DOM normal, navegación Turbo/SPA y volver del bfcache
  document.addEventListener('DOMContentLoaded', boot);
  document.addEventListener('turbo:load', boot);
  window.addEventListener('pageshow', boot);
  // si otra pestaña cambia algo, refrescamos las barras
  window.addEventListener('storage', (e)=>{ if (e.key && e.key.startsWith('done:')) renderAllBars(); });
})();
