import { createSlice } from "@reduxjs/toolkit";
import { getLocalTime } from "../../common/getLocalTime";
import { fetchSavedCities } from "../../common/fetchSavedCities";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebase.config";

const initialWeather = {
  "dt": 0,
  "dayNumber": 0,
  "weekDay": 0,
  "main": {
    "temp": 0,
    "feels_like": 0,
    "temp_min": 0,
    "temp_max": 0,
    "pressure": 0,
    "sea_level": 0,
    "grnd_level": 0,
    "humidity": 0,
    "temp_kf": 0
  },
  "weather": [
    {
      "id": 0,
      "main": "Clear",
      "description": "Clear",
      "icon": "03d"
    }
  ],
  "clouds": {
    "all": 0
  },
  "wind": {
    "speed": 0,
    "deg": 0,
    "gust": 0
  },
  "visibility": 0,
  "pop": 0,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "1970-01-01 00:00:00"
}

const savedCities = fetchSavedCities()
export const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    weekDays: [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    iconsPath: '/src/assets/weather-icons-master/production/line/openweathermap/',
    months: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'],
    units: 'metric',
    degreeSign: 'C',
    speedUnits: 'm/s',
    locationCoords: [53.893009, 27.567444],
    weatherData: [],
    weeklyForecast: Array(5).fill(Array(8).fill(initialWeather)),
    cityData: [],
    timePeriod: 0,
    cityPhoto: null,
    countryName: 'Belarus',
    cityName: 'Minsk',
    isLoading: true,
    savedCities: savedCities,
    iconsList: [],
  },
  reducers: {
    setTimePeriod: (state, { payload }) => {
      state.timePeriod = payload
    },
    setCityPhoto: (state, { payload }) => {
      state.cityPhoto = payload
    },
    setLocationCoords: (state, { payload }) => {
      state.locationCoords = payload
    },
    setCountryName: (state, { payload }) => {
      state.countryName = payload
    },
    setCityName: (state, { payload }) => {
      state.cityName = payload
    },
    toggleUnits: (state) => {
      if (state.units === 'metric') {
        state.units = 'imperial'
        state.degreeSign = 'F'
        state.speedUnits = 'mph'
      }
      else {
        state.units = 'metric'
        state.degreeSign = 'C'
        state.speedUnits = 'm/s'
      }
    },
    setWeatherData: (state, { payload }) => {
      state.isLoading = true;
    },
    setWeatherDataSuccess: (state, { payload }) => {
      state.weatherData = payload.list
      state.cityData = payload.city
      const weatherData = payload.list

      const getDay = (weatherData, num) => {
        return getLocalTime(payload.city.timezone, weatherData[num].dt).getDay()
      }

      let week = [], day = [], dayNumber = 0;
      for (let i = 0; i < weatherData.length; i++) {
        if (i !== 0 && getDay(weatherData, i - 1) !== getDay(weatherData, i)) {
          week.push(day);
          dayNumber++
          day = [];
        }
        day.push({
          ...weatherData[i],
          weekDay: getDay(weatherData, i),
          dayNumber: dayNumber
        })
      }
      week.push(day);
      state.weeklyForecast = week
      state.isLoading = false
    },
    setWeatherDataError: (state, { payload }) => {
      console.log(payload);
    },
    resetForecast: (state, { payload }) => {
      state.timePeriod = 0;
    },
    toggleSavedCities: (state, { payload }) => {
      for (const [index, item] of state.savedCities.entries()) {
        if (item.lat !== Math.round(state.locationCoords[0])
          || item.lon !== Math.round(state.locationCoords[1])) continue;
        state.savedCities.splice(index, 1);
        localStorage.setItem('savedCities', JSON.stringify(state.savedCities))
        return;
      }
      state.savedCities.push({
        countryCode: state.cityData.country,
        countryName: state.countryName,
        cityName: state.cityName,
        lat: Math.round(state.locationCoords[0]),
        lon: Math.round(state.locationCoords[1]),
      })
      localStorage.setItem('savedCities', JSON.stringify(state.savedCities))
    },
    setIconsList: (state, { payload }) => {
      state.iconsList.push(payload)
    }
  }
})

export default forecastSlice.reducer
export const { toggleUnits, setWeatherData, setTimePeriod,
  setCityPhoto, setLocationCoords, setCountryName, setCityName,
  resetForecast, toggleSavedCities, setIconsList } = forecastSlice.actions
export const iconsPath = state => state.forecast.iconsPath
export const getWeeklyForecast = state => state.forecast.weeklyForecast