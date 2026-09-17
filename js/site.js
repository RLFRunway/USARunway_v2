(function () {
  const menuBtn = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('is-open')));
  }

  const servicesBtn = document.querySelector('[data-services-button]');
  const servicesMenu = document.querySelector('[data-services-menu]');
  if (servicesBtn && servicesMenu) {
    servicesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      servicesMenu.classList.toggle('is-open');
    });
    document.addEventListener('click', () => servicesMenu.classList.remove('is-open'));
    servicesMenu.addEventListener('click', e => e.stopPropagation());
  }

  document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(contactForm);
      const subject = encodeURIComponent('USARunway consultation request - ' + (data.get('name') || 'Website inquiry'));
      const body = encodeURIComponent(
        'Name: ' + (data.get('name') || '') + '\n' +
        'Email: ' + (data.get('email') || '') + '\n' +
        'Company: ' + (data.get('company') || '') + '\n\n' +
        (data.get('message') || '')
      );
      window.location.href = 'mailto:info@usarunway.com?subject=' + subject + '&body=' + body;
    });
  }
})();
