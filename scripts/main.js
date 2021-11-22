import requestSources from './requestSources.js'; // Solicitud Carceles

import getStates from './by_states/get_states.js'; // Obtener Estados

import getCountiesState from './by_states/get_counties.js'; // Obtener Condado por estado
import getPersonsState from './by_states/get_persons.js'; // Obtener Lista personas por estado
import getPersonState from './by_states/get_person.js'; // Obtener persona seleccionada

import getCountiesRecluse from './by_recluse/get_counties.js'; // Obtener condado por Recluso
import getPersonsRecluse from './by_recluse/get_persons.js'; // Obtener personas por Recluso

const d = document;

// Acciones cuando cargue el DOM
d.addEventListener('DOMContentLoaded', async (e) => {
  const $stateEstado = d.getElementById('state'); // Lista de estados (estado)
  const $countyEstado = d.getElementById('county'); // Lista de condados (estado)
  const $personsEstado = d.getElementById('persons'); // Lista de personas (estado)

  const $reclusoForm = d.querySelector('.recluso__form'); // Formulario (recluso)
  const $stateRecluso = d.getElementById('recluso__state'); // Lista de  estados (recluso)
  const $countyRecluso = d.getElementById('recluso__county'); // Lista de condados (recluso)

  const res = await requestSources(); // Peticion Carceles

  getStates(res); // Obtener Estados

  // Cuando cambie un "Drowpdown List"
  d.addEventListener('change', (e) => {
    // Seccion busqueda por CONDADO
    if (e.target === $stateEstado) getCountiesState(res, e); // Cuando seleccione el estado
    if (e.target === $countyEstado) getPersonsState(e); // Cuando seleccione el condado
    if (e.target === $personsEstado) getPersonState(e); // Cuando seleccione una persona

    // Seccion busqueda por RECLUSO
    if (e.target === $stateRecluso) getCountiesRecluse(res, e); // Cuando seleccione un estado
    if (e.target === $countyRecluso) { // Cuando seleccione un condado
      const idSearch = e.target.value; // Obtenemos el id de la busqueda

      // Inserto un data-atribute a el html oculto
      $reclusoForm.querySelector('.recluso__id').dataset.id = idSearch;
    }
  });

  // Eventos de envio de formulario
  d.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el funcionamiento por defecto
    if (e.target === $reclusoForm) getPersonsRecluse(e); // Cuando presione el boton de Consultar
  });
  
});
