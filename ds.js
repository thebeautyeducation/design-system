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
    themeBtn.textContent = dark ? '☀ Deschis' : '☾ Închis';
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

    if (e.target.matches('[data-open-modal]')) {
      var dlg = document.getElementById(e.target.getAttribute('data-open-modal'));
      if (dlg && dlg.showModal) dlg.showModal();
    }
    if (e.target.matches('[data-close-modal]')) {
      var d = e.target.closest('dialog');
      if (d) d.close();
    }
  });
})();
