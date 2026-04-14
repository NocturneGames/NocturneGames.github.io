/* Shared footer — auto-inserts on all pages */
(function () {
  var links = [
    { href: '/',                  label: 'Studio' },
    { href: '/blog/',             label: 'Blog' },
    { href: '/indie-publishing/', label: 'Publishing' },
    { href: '/terms/',            label: 'Terms &amp; Conditions' },
    { href: '/privacy/',          label: 'Privacy Policy' },
    { href: 'mailto:contact@nocturne.build', label: 'Contact' },
  ];

  var footer = document.createElement('footer');

  var inner = document.createElement('div');
  inner.className = 'footer-inner';

  var brand = document.createElement('div');
  brand.className = 'footer-brand';

  var logoImg = document.createElement('img');
  logoImg.src = '/assets/logo.png';
  logoImg.alt = 'Nocturne Games';
  logoImg.className = 'footer-logo';
  brand.appendChild(logoImg);

  var brandName = document.createElement('span');
  brandName.textContent = 'Nocturne Games';
  brand.appendChild(brandName);

  inner.appendChild(brand);

  var linksDiv = document.createElement('div');
  linksDiv.className = 'footer-links';
  links.forEach(function (link) {
    var a = document.createElement('a');
    a.href = link.href;
    a.className = 'footer-link';
    a.innerHTML = link.label;
    linksDiv.appendChild(a);
  });
  inner.appendChild(linksDiv);
  footer.appendChild(inner);

  var copy = document.createElement('div');
  copy.className = 'footer-copy';
  copy.innerHTML = 'Copyright &copy; 2025 Nocturne Games';
  footer.appendChild(copy);

  document.currentScript.replaceWith(footer);
})();
