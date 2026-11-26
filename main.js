const consulta = document.querySelector('#consulta');
const detalle = document.querySelector('#detalle');
detalle.addEventListener('input', () => detalle.setCustomValidity(''));
consulta.addEventListener('submit', (event) => {
  event.preventDefault();
  const descripcion = detalle.value.trim();
  if (!descripcion) {
    detalle.setCustomValidity('Describe brevemente qué trabajo necesitas.');
    detalle.reportValidity();
    return;
  }
  const tipo = document.querySelector('#tipo').value;
  const mensaje = `Hola, Alberto. Quería consultarte por un trabajo de soldadura.\n\nTipo de trabajo: ${tipo}\n\n${descripcion}`;
  window.location.assign('https://wa.me/34625565327?text=' + encodeURIComponent(mensaje));
});
