/* Shared nav — auto-inserts and sets active state based on current path */
(function () {
  var links = [
    { href: '/',           label: 'Studio' },
    { href: '/indie-publishing/', label: 'Publishing' },
    { href: '/blog/',      label: 'Blog' },
  ];

  var path = window.location.pathname;

  var nav = document.createElement('nav');
  nav.className = 'nav';

  links.forEach(function (link) {
    var a = document.createElement('a');
    a.href = link.href;
    a.className = 'nav-link';
    a.textContent = link.label;

    var isActive = link.href === '/'
      ? path === '/'
      : path === link.href || path.startsWith(link.href);

    if (isActive) a.classList.add('active');
    nav.appendChild(a);
  });

  /* Replace the <script> tag itself with the <nav> element */
  document.currentScript.replaceWith(nav);
})();
