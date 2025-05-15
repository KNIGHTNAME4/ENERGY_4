// ----- MENÚ HAMBURGUESA -----
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// ----- ALERTA DE INICIO DE SESIÓN -----
const loginButtons = document.querySelectorAll('.btn-login');
loginButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("¿Ya tienes una cuenta? Si no la tienes, deberás crear una.\n\nPresiona OK para continuar.");
  });
});

// ----- EXPANSIÓN DE BÚSQUEDA -----
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon?.addEventListener('click', () => {
  searchBar?.classList.toggle('expand');
  if (searchBar.classList.contains('expand')) {
    searchBar.focus();
  }
});

// ----- PEQUEÑA ANIMACIÓN A LAS TARJETAS -----
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
