import { configureStore } from '@reduxjs/toolkit'
import forecastReducer from './Forecast/Forecast.slice'
import authReducer from './Auth/Auth.slice'
import newsReducer from './News/News.slice'

export const store = configureStore({
  reducer:{
    forecast: forecastReducer,
    auth: authReducer,
    news: newsReducer,
  },
})