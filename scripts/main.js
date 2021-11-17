import requestSources from './requestSources.js';
import getStates from './by_states/get_states.js';
import getCountiesEstado from './by_states/get_counties.js';
import getPersonsEstado from './by_states/get_persons.js';
import getPersonEstado from './by_states/get_person.js';
import getPersonsRecluso from './by_last_name/get_persons.js';
import getCountiesRecluso from './by_last_name/get_counties.js';

const d = document;

d.addEventListener('DOMContentLoaded', async (e) => {
  const $stateEstado = d.getElementById('state');
  const $countyEstado = d.getElementById('county');
  const $personsEstado = d.getElementById('persons');

  const $stateRecluso = d.getElementById('recluso__state');
  const $countyRecluso = d.getElementById('recluso__county');
  const $personsRecluso = d.getElementById('recluse__last-name');
  const $btnRecluso = d.querySelector('.recluso__btn');

  const $reclusoForm = d.querySelector('.recluso__form');

  const res = await requestSources(); // Peticion Organizaciones

  getStates(res);

  d.addEventListener('change', (e) => {
    if (e.target === $stateEstado) getCountiesEstado(res, e);
    if (e.target === $countyEstado) getPersonsEstado(e);
    if (e.target === $personsEstado) getPersonEstado(e);

    if (e.target === $stateRecluso) getCountiesRecluso(res, e);
    if (e.target === $countyRecluso) {
      const idSearch = e.target.value;
      //inserto un data-atribute a el html oculto
      $reclusoForm.querySelector('.recluso__id').dataset.id = idSearch;
    }
  });

  d.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target === $reclusoForm) getPersonsRecluso(e);
  });
});
