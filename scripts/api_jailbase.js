const d = document;

export default function primer() {
  async function jail() {
    try {
      const options = {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
      };
      let res = await fetch('https://www.jailbase.com/api/1/sources/', options);
      let json = await (res.ok ? res.json() : Promise.reject(res));

      const state = json.records[1].state_full;
      const country = json.records[1].county;
      console.log(state, country);
    } catch (err) {
      let message = err.statusText || 'Ocurrio un error';
      console.error(`Failed Connection : ${err.status}: ${message}`);
    }
  }
  jail();
}
