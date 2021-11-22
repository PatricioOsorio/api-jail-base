const d = document;
export default async function getCountiesEstado(res, e) {
  const $county = d.getElementById('county'); // Obtener el condado (HTML)
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido

  const records = await res.records; // Espera "records" de la respuesta Json 

  $county.textContent = ''; // Limpia el HTML, para que no se repitan

  // Filtrado, para obtener Condados y Id
  const counties = [];
  records.forEach((el) => {
    if (e.target.value === el.state_full) {
      counties.push([el.county, el.source_id]);
    }
  });

  // Se crean las opciones para el "Dropdown list"
  // Mensaje para seleccionar opcion
  const $option = d.createElement('option');
  $option.textContent = '--Seleccione opcion';
  $option.value = undefined;
  $fragment.appendChild($option);

  // Llenado con los condados
  counties.forEach((el) => {
    const $option = d.createElement('option');
    $option.textContent = el[0]; // Muestro el condado
    $option.value = el[1]; // Guardo en value el id
    $fragment.appendChild($option);
  });

  // Se agregan al HTML
  $county.appendChild($fragment);
}
