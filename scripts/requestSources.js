export default async function requestSources() {
  const $error = document.querySelector('.error');
  
  try {
    let res = await fetch('https://www.jailbase.com/api/1/sources/');
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
