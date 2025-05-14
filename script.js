// Mostrar modal al cargar
window.addEventListener('load', () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
});

// Botón hamburguesa
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('mainContent');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  // Solo desplazamos el contenido en pantallas grandes
  if (window.innerWidth >= 768) {
    if (sidebar.classList.contains('active')) {
      content.style.marginLeft = '200px';
    } else {
      content.style.marginLeft = '0';
    }
  }
});

// Ocultar modal si ya ingresó nombre
document.getElementById('createAccountBtn').addEventListener('click', () => {
  const name = document.getElementById('username').value.trim();
  if (name) {
    alert(Cuenta creada para ${name});
    document.getElementById('modal').style.display = 'none';
  } else {
    alert('Por favor ingresa tu nombre');
  }
});

document.getElementById('loginBtn').addEventListener('click', () => {
  const name = document.getElementById('username').value.trim();
  if (name) {
    alert(Bienvenido, ${name});
    document.getElementById('modal').style.display = 'none';
  } else {
    alert('Por favor ingresa tu nombre');
  }
});
