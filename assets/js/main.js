// Minimal JS: highlight active nav link on scroll
(function () {
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav a'));

  function setActive() {
    const y = window.scrollY + 120;
    let current = sections[0]?.id;
    for (const s of sections) {
      if (s.offsetTop <= y) current = s.id;
    }
    navLinks.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.style.background = isActive ? 'var(--callout)' : 'white';
      a.style.borderColor = isActive ? '#cbe6ff' : 'var(--border)';
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('load', setActive);
})();
