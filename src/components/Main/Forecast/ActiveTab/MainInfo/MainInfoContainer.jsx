import React from "react";
import MainInfo from "./MainInfo";
import { useSelector } from "react-redux";

const MainInfoContainer = ({ index }) => {

  const timePeriod = useSelector(state => state.forecast.timePeriod)

  const periodWeather = useSelector(state => state.forecast.weeklyForecast[index][timePeriod])
  const forecast = useSelector(state => state.forecast)

  const temperature = Math.round(periodWeather.main.temp)
  const realTemperature = Math.round(periodWeather.main.feels_like)
  const degreeSign = forecast.degreeSign

  return (
    <MainInfo
      temperature={temperature}
      degreeSign={degreeSign}
      realTemperature={realTemperature}
    />
  )
}

export default MainInfoContainer