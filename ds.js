/* Comutatoare pentru paginile de documentație (temă + sub-brand).
   Nu face parte din design system-ul de producție. */
(function () {
  var root = document.documentElement;
  var body = document.body;

  /* --- Temă deschisă / închisă --- */
  var themeBtn = document.getElementById('themeToggle');
  var saved = null;
  try { saved = localStorage.getItem('tbe-ds-theme'); } catch (e) {}
  if (saved) root.setAttribute('data-theme', saved);

  function paintTheme() {
    if (!themeBtn) return;
    var dark = root.getAttribute('data-theme') === 'dark';
    themeBtn.textContent = dark ? 'Temă: închisă' : 'Temă: deschisă';
    themeBtn.classList.toggle('is-on', dark);
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('tbe-ds-theme', next); } catch (e) {}
      paintTheme();
    });
    paintTheme();
  }

  /* --- TBE / Harta Coafezelor --- */
  var brandBtn = document.getElementById('brandToggle');
  if (brandBtn) {
    brandBtn.addEventListener('click', function () {
      var isHarta = body.getAttribute('data-brand') === 'harta';
      body.setAttribute('data-brand', isHarta ? 'tbe' : 'harta');
      brandBtn.textContent = isHarta ? 'Brand: TBE' : 'Brand: Harta';
      brandBtn.classList.toggle('is-on', !isHarta);
    });
  }

  /* --- Demo-uri interactive din pagina UI --- */
  document.addEventListener('click', function (e) {
    var seg = e.target.closest('.tbe-segmented button, .tbe-tabs button');
    if (seg) {
      var group = seg.parentElement;
      group.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-selected', b === seg ? 'true' : 'false');
      });
    }
    var chip = e.target.closest('.tbe-chip');
    if (chip && !e.target.closest('.tbe-chip-x')) chip.classList.toggle('is-active');

    var chipX = e.target.closest('.tbe-chip-x');
    if (chipX) { e.stopPropagation(); chipX.closest('.tbe-chip').remove(); }

    /* Taburi ARIA: click selectează tabul și arată panoul lui */
    var tab = e.target.closest('[role="tablist"] [role="tab"]');
    if (tab) selectTab(tab);

    var opener = e.target.closest('[data-open-modal]');
    if (opener) {
      var dlg = document.getElementById(opener.getAttribute('data-open-modal'));
      if (dlg && dlg.showModal) dlg.showModal();
    }
    var closer = e.target.closest('[data-close-modal]');
    if (closer) {
      var d = closer.closest('dialog');
      if (d) d.close();
    }

    /* Click pe fundalul estompat închide fereastra / foaia */
    if (e.target.matches('dialog.tbe-modal[open]')) e.target.close();

    var toastBtn = e.target.closest('[data-toast]');
    if (toastBtn) showToast(toastBtn.getAttribute('data-toast'));
  });

  /* --- Notificare: intră din josul ecranului, după 3 s pleacă pe același drum --- */
  function showToast(text) {
    var region = document.getElementById('toastRegion');
    if (!region) return;
    var t = document.createElement('div');
    t.className = 'tbe-toast';
    t.setAttribute('role', 'status');
    t.innerHTML = '<span class="tbe-icon" data-icon="circle-check" aria-hidden="true"></span>';
    t.appendChild(document.createTextNode(' ' + text));
    region.appendChild(t);
    setTimeout(function () {
      t.classList.add('is-leaving');
      t.addEventListener('transitionend', function () { t.remove(); }, { once: true });
      setTimeout(function () { t.remove(); }, 600);   /* plasă de siguranță */
    }, 3000);
  }

  /* --- Taburi accesibile: selecție + navigare cu săgeți (pattern WAI-ARIA) --- */
  function selectTab(tab) {
    var list = tab.closest('[role="tablist"]');
    if (!list) return;
    list.querySelectorAll('[role="tab"]').forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var panelId = t.getAttribute('aria-controls');
      var panel = panelId && document.getElementById(panelId);
      if (panel) panel.hidden = !on;
    });
  }
  document.addEventListener('keydown', function (e) {
    var tab = e.target.closest('[role="tablist"] [role="tab"]');
    if (!tab) return;
    var tabs = Array.prototype.slice.call(tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]'));
    var i = tabs.indexOf(tab), next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === 'Home') next = tabs[0];
    else if (e.key === 'End') next = tabs[tabs.length - 1];
    if (next) { e.preventDefault(); selectTab(next); next.focus(); }
  });
})();
