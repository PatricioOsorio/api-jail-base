export default async function requestSeach(sourceId, lastName) {
  const $error = document.querySelector('.error');

  try {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const url = `http://www.JailBase.com/api/1/search/?source_id=${sourceId}&last_name=${lastName}`;
    const header = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    let res = await fetch(corsAnywhere + url, header);
    let json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    let message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);

    $error.classList.remove('hidden');
    setTimeout(() => {
      $error.classList.add('hidden');
    }, 3000);
  }
}
