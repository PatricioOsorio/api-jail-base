const d = document;
export default async function getCountiesEstado(res, e) {
  let $county = d.getElementById('county');
  let $fragment = d.createDocumentFragment();

  const records = await res.records;

  $county.textContent = '';
  console.log('Obteniendo condados...');

  const counties = [];
  records.forEach((el) => {
    if (e.target.value === el.state_full) {
      counties.push([el.county, el.source_id]);
    }
  });

  counties.forEach((el) => {
    const $option = d.createElement('option');
    $option.textContent = el[0]; // Muestro el condado
    $option.value = el[1]; // Guardo en value el id
    $fragment.appendChild($option);
  });

  $county.appendChild($fragment);
}
