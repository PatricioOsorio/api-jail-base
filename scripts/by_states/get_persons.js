import requestRecent from '../requestRecent.js';

const d = document;
export default async function getPersonsEstado(e) {
  const $persons = d.getElementById('persons');
  const $fragment = d.createDocumentFragment();

  $persons.textContent = '';

  const idSearch = e.target.value;
  // console.log(`idSearch: "${idSearch}"`);

  const res = await requestRecent(idSearch);
  const recordsPersons = await res.records;
  // console.log(recordsPersons);

  recordsPersons.forEach((el,i) => {
    const $option = d.createElement('option');
    $option.textContent = el.name;
    $option.value = i;
    $fragment.appendChild($option);
  });

  $persons.appendChild($fragment);
}
