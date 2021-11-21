import requestSeach from '../requestSearch.js';

const d = document;
export default async function getPersonsRecluse(e) {
  const $reclusoInfo = d.querySelector('.recluso__info');
  const $reclusoForm = d.querySelector('.recluso__form');
  const $fragment = d.createDocumentFragment();
  const $template = d.querySelector('.template-search').content;

  $reclusoInfo.textContent = '';

  const idSearch = $reclusoForm.querySelector('.recluso__id').dataset.id;
  const lastName = $reclusoForm.querySelector('#recluso__last-name').value;

  // console.log(idSearch, lastName);

  const res = await requestSeach(idSearch, lastName);
  const recordsPersons = await res.records;

  console.log(recordsPersons);

  // Si no se encuentra persona
  if (recordsPersons.length === 0) {
    alert('No se encontró la persona');
  } else {
    recordsPersons.forEach((el) => {
      console.log(el);
      $template.querySelector('.card__img').src = el.mugshot;
      $template.querySelector('.card__name').textContent = el.name;
      $template.querySelector('.card__charges').textContent =
        el.charges.length == 0 ? 'No disponible' : el.charges;
      $template.querySelector('.card__date').textContent =
        el.book_date_formatted;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $reclusoInfo.appendChild($fragment);
  }
}
