import requestRecent from './requestRecent.js';

const d = document;
export default async function getPerson(e) {
  let $county = d.getElementById('county');
  let $fragment = d.createDocumentFragment();
  const $template = d.querySelector('.template-card').content;
  const $estado = d.querySelector('.estado__info');

  $estado.textContent = "";

  const idSearch = county.value; // id reclusorio a buscar
  const index = e.target.value; // index del que lo originó

  const res = await requestRecent(idSearch);
  const recordsPersons = await res.records;

  const person = recordsPersons[index]
  console.log(person);

  $template.querySelector('.card__img').src = person.mugshot;
  $template.querySelector('.card__name').textContent = person.name;
  $template.querySelector('.card__charges').textContent = person.charges.length == 0 
    ? 'No disponible' 
    : person.charges;
  $template.querySelector('.card__date').textContent = person.book_date_formatted;

  let $clone = d.importNode($template, true);
  $fragment.appendChild($clone);

  $estado.appendChild($fragment);
}
