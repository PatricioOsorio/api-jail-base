const d = document;
export default async function getStates(res) {
  let $state = d.getElementById('state');
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

  $state.appendChild($fragment);
}
