const d = document;
export default async function getStates(res) {
  const $stateEstado = d.getElementById('state');
  const $stateRecluso = d.getElementById('recluso__state');

  const $fragment = d.createDocumentFragment();

  const records = await res.records;

  // Obtener nombre de Estados
  const states = [];
  records.forEach((el) => {
    states.push(el.state_full);
  });

  // Filtrado de estados
  // Para que no se repitan
  const filteredStates = [...new Set(states)];

  // Se crean las opciones para el "Dropdown list"
  filteredStates.forEach((el) => {
    const $option = d.createElement('option');
    $option.textContent = el;
    $option.value = el;
    $fragment.appendChild($option);
  });
  
  // Fragmento para Busqueda por recluso
  const $fragment2 = $fragment.cloneNode(true);

  // Se agregan al HTML
  $stateEstado.appendChild($fragment);
  $stateRecluso.appendChild($fragment2);
}
