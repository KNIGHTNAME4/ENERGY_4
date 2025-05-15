// main.js
// Despliegue del menú responsive
const menuBtn = document.getElementById('menu-btn');
const mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});

// Alerta elegante para login/registro
function mostrarAlerta(mensaje) {
  const alerta = document.createElement('div');
  alerta.style.position = 'fixed';
  alerta.style.top = '50%';
  alerta.style.left = '50%';
  alerta.style.transform = 'translate(-50%, -50%)';
  alerta.style.background = '#fff';
  alerta.style.padding = '2rem';
  alerta.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
  alerta.style.borderRadius = '12px';
  alerta.style.zIndex = '9999';
  alerta.innerHTML = `
    <p style="margin-bottom: 1rem; color: #333;">${mensaje}</p>
    <button style="padding: 0.5rem 1.5rem; background: #e63434; color: white; border: none; border-radius: 10px; cursor: pointer;">OK</button>
  `;

  document.body.appendChild(alerta);

  alerta.querySelector('button').addEventListener('click', () => {
    document.body.removeChild(alerta);
  });
}
