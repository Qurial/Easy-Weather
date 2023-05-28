import React from "react";
import { useSelector } from "react-redux";
import Details from "./Details";

const DetailsContainer = ({ index }) => {

  const getDirection = (deg) => {

    const directions = [
      'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N',]

    for (let i in directions) {
      if (deg < (i * 22.5 + 11.25))
        return directions[i]
    }
    return directions[0]
  }
  const timePeriod = useSelector(state => state.forecast.timePeriod)
  const periodWeather = useSelector(state => state.forecast.weeklyForecast[index][timePeriod])
  const percipation = Math.round(periodWeather.pop * 100) + '%'
  const speedUnits = useSelector(state => state.forecast.speedUnits)
  const speedValue = Math.round(periodWeather.wind.speed)
  const windDirection = getDirection(periodWeather.wind.deg)

  return (
    <Details
      percipation={percipation}
      speedUnits={speedUnits}
      speedValue={speedValue}
      windDirection={windDirection} />
  )
}

export default DetailsContainer