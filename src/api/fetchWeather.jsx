import axios from 'axios';

const URL = 'http://api.weatherapi.com/v1/current.json';
const API_KEY = '463b5d5ca14c410ebed100531252708';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            key:API_KEY,
            q: query,
            aqi:"no",
        }
    })
    return data;
}