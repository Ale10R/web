const comentarios = document.getElementById('comentarios');
const mensaje = document.getElementById('mensaje');

comentarios.addEventListener('submit', (event) => {
  event.preventDefault(); 

  

  mensaje.innerHTML = '¡Gracias por tu comentario!.';
});
