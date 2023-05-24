import { CitiesAPI } from "../../api/CityAPI";
import { PhotosAPI } from "../../api/PhotosAPI";
import { WeatherAPI } from "../../api/WeatherAPI";
import { forecastSlice } from "./Forecast.slice";

export const fetchCity = (cityName) => async (dispatch) => {
  try {
    let response = await CitiesAPI.getCity(cityName)
    if (response.statusCode === 400) throw ('error');
    dispatch(forecastSlice.actions.setLocationCoords([
      response.features[0].properties.lat,
      response.features[0].properties.lon]))
    dispatch(forecastSlice.actions.setCityName(response.features[0].properties.city))
    dispatch(forecastSlice.actions.setCountryName(response.features[0].properties.country))
  }
  catch { }
}

export const fetchCitiesList = (query) => async (dispatch) => {
  try {
    let response = await CitiesAPI.getCity(query)
    if (response.statusCode === 400) throw ('error');
    return response.features;
  }
  catch { }
}

export const fetchWeather = (units, lat, lon) => async (dispatch) => {
  try {
    dispatch(forecastSlice.actions.setWeatherData())
    let response = await WeatherAPI.getWeather(units, lat, lon)
    if (response.cod === '404') throw response.message;
    dispatch(forecastSlice.actions.setWeatherDataSuccess(response))
    console.log('fetch made')
  }
  catch (error) {
    dispatch(forecastSlice.actions.setWeatherDataError(error))
  }
}

// export const fetchPhoto = (locationName, countryName) => async (dispatch) => {
//   let response
//   try {
//     response = await PhotosAPI.getPhoto(locationName)
//   }
//   catch {
//     response = await PhotosAPI.getPhoto(countryName)
//   }
//   dispatch(forecastSlice.actions.setCityPhoto(response))
// }