import requestSources from './requestSources.js'; // Solicitud Carceles

import getStates from './by_states/get_states.js'; // Obtener Estados

import getCountiesState from './by_states/get_counties.js'; // Obtener Condado por estado
import getPersonsState from './by_states/get_persons.js'; // Obtener Lista personas por estado
import getPersonState from './by_states/get_person.js'; // Obtener persona seleccionada

import getCountiesRecluse from './by_recluse/get_counties.js'; // Obtener condado por Recluso
import getPersonsRecluse from './by_recluse/get_persons.js'; // Obtener personas por Recluso

const d = document;

d.addEventListener('DOMContentLoaded', async (e) => {
  const $stateEstado = d.getElementById('state');
  const $countyEstado = d.getElementById('county');
  const $personsEstado = d.getElementById('persons');

  const $reclusoForm = d.querySelector('.recluso__form');
  const $stateRecluso = d.getElementById('recluso__state');
  const $countyRecluso = d.getElementById('recluso__county');

  const res = await requestSources(); // Peticion Carceles

  getStates(res); // Obtener Estados

  // Cuando cambie un "Drowpdown List"
  d.addEventListener('change', (e) => {
    // Seccion busqueda por Condado
    if (e.target === $stateEstado) getCountiesState(res, e);
    if (e.target === $countyEstado) getPersonsState(e);
    if (e.target === $personsEstado) getPersonState(e);

    // Seccion busqueda por Recluso
    if (e.target === $stateRecluso) getCountiesRecluse(res, e);
    if (e.target === $countyRecluso) {
      const idSearch = e.target.value;
      // Inserto un data-atribute a el html oculto
      $reclusoForm.querySelector('.recluso__id').dataset.id = idSearch;
    }
  });

  // Cuando presione el boton de Consultar
  d.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target === $reclusoForm) getPersonsRecluse(e);
  });
  
});
