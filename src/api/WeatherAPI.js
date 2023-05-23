const options = {
  method: 'GET',
};

export const WeatherAPI = {
  getWeather: async (untis, lat, lon) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=52b9ac5489fa45a2b8dc6c38fe9b43e1&units=${untis}`, options)
    return response.json()
  }

}
