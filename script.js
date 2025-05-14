// Mostrar el modal al cargar la página
//window.addEventListener('load', () => {
//  const modal = document.getElementById('modal');
  //modal.style.display = 'flex';
});

// Lógica del botón hamburguesa para abrir/cerrar menú
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('mainContent');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  // Solo desplaza el contenido en pantallas grandes
  if (window.innerWidth >= 768) {
    content.style.marginLeft = sidebar.classList.contains('active') ? '200px' : '0';
  }
});

// Función que valida si se ingresó nombre y cierra el modal
function handleUserAction(action) {
  const nameInput = document.getElementById('username');
  const name = nameInput.value.trim();
  const errorMsg = document.getElementById('error-msg');

  if (name) {
    document.getElementById('modal').style.display = 'none';
    console.log(${action} para ${name}); // Aquí podrías enviar a backend si lo conectas luego
  } else {
    errorMsg.textContent = 'Por favor ingresa tu nombre.';
  }
}

// Eventos para los botones de crear cuenta e iniciar sesión
document.getElementById('createAccountBtn').addEventListener('click', () => {
  handleUserAction('Cuenta creada');
});

document.getElementById('loginBtn').addEventListener('click', () => {
  handleUserAction('Inicio de sesión');
});
