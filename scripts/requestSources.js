import showError from './actions/show_error.js';

export default async function requestSources() {
  try {
    const corsAnywhere = 'https://mycors-jailbase.herokuapp.com/';
    const url = 'https://www.jailbase.com/api/1/sources/';

    let res = await fetch(corsAnywhere + url);
    let json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    let message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
    showError();
  }
}
