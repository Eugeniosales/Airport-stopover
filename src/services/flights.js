import axios from 'axios';

const url = `http://api.aviationstack.com/v1/flights?access_key=process.env.ACCES_KEY`;

const flightApi = axios.create('');

export default flightApi;
export { flightApi, url };
