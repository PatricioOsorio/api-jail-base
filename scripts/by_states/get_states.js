const d = document;
export default async function getStates(res) {
  let $stateEstado = d.getElementById('state');
  let $stateRecluso = d.getElementById('recluso__state');

  let $fragment = d.createDocumentFragment();

  const records = res.records;

  const states = [];
  records.forEach((el) => {
    states.push(el.state_full);
  });

  const filteredStates = [...new Set(states)];

  filteredStates.forEach((el) => {
    const $option = d.createElement('option');
    $option.textContent = el;
    $option.value = el;
    $fragment.appendChild($option);
  });
  
  let $fragment2 = $fragment.cloneNode(true);

  $stateEstado.appendChild($fragment);
  $stateRecluso.appendChild($fragment2);
}
