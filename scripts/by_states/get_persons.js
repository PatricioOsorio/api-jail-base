import requestRecent from '../requestRecent.js';

const d = document;
export default async function getPersonsEstado(e) {
  const $persons = d.getElementById('persons'); // Personas (HTML)
  const $fragment = d.createDocumentFragment(); // Fragmento, para ser llenado

  $persons.textContent = ''; // Se limpia el contenido, para evitar sobreescritura

  const idSearch = e.target.value; // Id del condado a buscar

  const res = await requestRecent(idSearch); // Peticion de los reclusos (recientes)
  const recordsPersons = await res.records; // De la peticion obtiene "records"

  // Bucle para el llenado de las opciones del "Dropdown list"
  recordsPersons.forEach((el,i) => {
    const $option = d.createElement('option');
    $option.textContent = el.name;
    $option.value = i;
    $fragment.appendChild($option);
  });

  // El "fragment" se agrega al "HTML", para ser visualizado
  $persons.appendChild($fragment);
}
