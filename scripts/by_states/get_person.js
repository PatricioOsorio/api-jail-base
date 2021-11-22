import requestRecent from '../requestRecent.js';

const d = document;
export default async function getPersonEstado(e) {
  const $estado = d.querySelector('.estado__info'); // Estado (HTML)
  const $county = d.getElementById('county'); // Condado (HTML)
  const $fragment = d.createDocumentFragment(); // Fragmento para ser llenado
  const $template = d.querySelector('.template-card').content; // Template HTML

  $estado.textContent = ""; // Se limpian las respuestas, para que nos se dupliquen

  const idSearch = $county.value; // id reclusorio a buscar
  const index = e.target.value; // index del que lo originó

  const res = await requestRecent(idSearch); // Peticion de busqueda (por apellido)
  const recordsPersons = await res.records; // Obtiene los "records" de la peticion

  const person = recordsPersons[index] // obtiene el index, del recluso seleccionado

  // Se llena el "TEMPLATE" del HTML
  $template.querySelector('.card__img').src = person.mugshot;
  $template.querySelector('.card__name').textContent = person.name;
  $template.querySelector('.card__charges').textContent = person.charges.length === 0 
    ? 'No disponible' 
    : person.charges;
  $template.querySelector('.card__date').textContent = person.book_date_formatted;

  // Se clona, para poder ser agregado
  const $clone = d.importNode($template, true);

  // El contenido clonado, se agrega al "fragment"
  $fragment.appendChild($clone);

  // El "fragment" se agrega al HTML, para ser visualizado
  $estado.appendChild($fragment);
}
