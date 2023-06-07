import { weatherAPIKey } from "./APIKeys";

const options = {
  method: 'GET',
};

export const WeatherAPI = {
  getWeather: async (untis, lat, lon) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=${untis}`, options)
    return response.json()
  }

}
