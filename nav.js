// nav.js — injects navbar and guards auth
(function() {
  const page = window.location.pathname.split('/').pop() || 'home.html';
  if (!sessionStorage.getItem('loggedIn') && page !== 'login.html') {
    window.location.href = 'login.html';
  }

  const pages = [
    { href: 'home.html',        icon: 'fa-house',         label: 'Home' },
    { href: 'categories.html',  icon: 'fa-layer-group',   label: 'Categories' },
    { href: 'progress.html',    icon: 'fa-chart-line',    label: 'Progress' },
    { href: 'attendance.html',  icon: 'fa-calendar-check',label: 'Attendance' },
    { href: 'contact.html',     icon: 'fa-headset',       label: 'Contact' },
  ];

  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <a class="nav-brand" href="home.html">Be Back <span>Better</span></a>
    <button class="hamburger" id="hamburger"><i class="fa-solid fa-bars"></i></button>
    <ul class="nav-links" id="navLinks">
      ${pages.map(p => `
        <li><a href="${p.href}" class="${page===p.href?'active':''}" >
          <i class="fa-solid ${p.icon}"></i>${p.label}
        </a></li>
      `).join('')}
      <li><a href="login.html" class="logout-btn" id="logoutBtn"><i class="fa-solid fa-right-from-bracket"></i>Logout</a></li>
    </ul>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });
})();
