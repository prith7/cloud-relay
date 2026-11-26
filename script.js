(() => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const notifyBtn = document.getElementById('notifyBtn');
  const emailInput = document.getElementById('email');
  const formNote = document.getElementById('formNote');

  if (navToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    };

    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.classList.contains('open')) return;
      if (navMenu.contains(e.target) || navToggle.contains(e.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  if (notifyBtn && emailInput && formNote) {
    notifyBtn.addEventListener('click', () => {
      const value = emailInput.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      formNote.classList.remove('success');
      if (!value) {
        formNote.textContent = 'Enter an email address to get a demo notification.';
        emailInput.focus();
        return;
      }
      if (!valid) {
        formNote.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
      }
      formNote.textContent = 'Thanks! This demo form is not connected to a backend.';
      formNote.classList.add('success');
      emailInput.value = '';
    });
  }
})();
