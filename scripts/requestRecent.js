import showError from './actions/show_error.js';

export default async function requestRecent(sourceId) {
  const $error = document.querySelector('.error');

  try {
    const corsAnywhere = 'https://mycors-jailbase.herokuapp.com/';
    const url = `http://www.JailBase.com/api/1/recent/?source_id=${sourceId}`;

    let res = await fetch(corsAnywhere + url);
    let json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    let message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
    showError();
  }
}
