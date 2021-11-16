import requestSources from './requestSources.js';
import getStates from './get_states.js';
import getCounties from './get_counties.js';
import getPersons from './get_persons.js';
import getPerson from './get_person.js';

const d = document;

d.addEventListener('DOMContentLoaded', async (e) => {
  let $state = d.getElementById('state');
  let $county = d.getElementById('county');
  let $persons = d.getElementById('persons');

  const res = await requestSources(); // Peticion Organizaciones

  getStates(res);

  d.addEventListener('change', (e) => {
    if (e.target === $state) getCounties(res, e);
    if (e.target === $county) getPersons(e);
    if (e.target === $persons) getPerson(e);
  });
});
