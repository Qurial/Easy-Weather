import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureEmpty } from '@fortawesome/free-solid-svg-icons'

const Weather = ({ currentWeather, degreeSign }) => {
  return (
    <div className="summit-card summit-weather">
      <p className="summit-card__name">
        Weather <FontAwesomeIcon icon={faTemperatureEmpty} />
      </p>
      
      <p className="summit-weather__value">
        Real feel: {Math.round(currentWeather.main.feels_like)}&#176;
        <span className="summit-weather__sign">
          {degreeSign}
        </span>
      </p>

      <p className="summit-weather__description">
        {currentWeather.weather[0].description}
      </p>
    </div>
  )
}

export default Weather