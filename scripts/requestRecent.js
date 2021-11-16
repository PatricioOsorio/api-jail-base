export default async function requestRecent(sourceId) {
  try {
    let res = await fetch(
      `http://www.JailBase.com/api/1/recent/?source_id=${sourceId}`
    );
    let json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    let message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
