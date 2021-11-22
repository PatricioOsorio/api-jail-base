import requestSeach from '../requestSearch.js';

const d = document;
export default async function getPersonsRecluse(e) {
  const $reclusoInfo = d.querySelector('.recluso__info'); // Informacion de recluso (HTML)
  const $reclusoForm = d.querySelector('.recluso__form'); // Formulario (Busqueda por recluso)
  const $fragment = d.createDocumentFragment(); // Fragmento para ser llenado
  const $template = d.querySelector('.template-search').content; // Obtiene el template del HTML

  $reclusoInfo.textContent = ''; // Se limpia el contenido, para que no se repitan

  const idSearch = $reclusoForm.querySelector('.recluso__id').dataset.id; // Obtiene el id
  const lastName = $reclusoForm.querySelector('#recluso__last-name').value; // Obtiene el apellido

  const res = await requestSeach(idSearch, lastName); // Peticion de busqyeda
  const recordsPersons = await res.records; // De la respuesta, obtener "records"

  // Si no se encuentra persona
  if (recordsPersons.length === 0) {
    alert('No se encontró la persona');
  } else { // Si contiene personas
    // Realiza un bucle, para llenar el "template"
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

    // Se inserta en el HTML, para ser visualizado
    $reclusoInfo.appendChild($fragment);
  }
}
