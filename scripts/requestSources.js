import showError from './actions/show_error.js';

export default async function requestSources() {
  try {
    const corsAnywhere = 'https://mycors-jailbase.herokuapp.com/';
    const url = 'https://www.jailbase.com/api/1/sources/';

    const res = await fetch(corsAnywhere + url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
    showError();
  }
}
