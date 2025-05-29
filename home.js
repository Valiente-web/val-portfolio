function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('show1');
  }

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');

    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  });
