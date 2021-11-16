import requestRecent from './requestRecent.js';

const d = document;
export default async function getPersons(e) {
  let $persons = d.getElementById('persons');
  let $fragment = d.createDocumentFragment();

  $persons.textContent = '';
  console.log('Obteniendo personas...');

  const idSearch = e.target.value;
  console.log(`idSearch: "${idSearch}"`);

  const res = await requestRecent(idSearch);
  let recordsPersons = await res.records;

  console.log(recordsPersons);

  recordsPersons.forEach((el,i) => {
    const $option = d.createElement('option');
    $option.textContent = el.name;
    $option.value = i;
    $fragment.appendChild($option);
  });

  $persons.appendChild($fragment);
}
