import React from "react";
import precipitationIcon from '../../../assets/weather-icons-master/production/line/openweathermap/09d.svg'

const Precipitation = ({currentWeather}) => {
  return (
    <div className="main__precipitation">

      <img className="main__precipitation--icon"
        src={precipitationIcon} alt="rain" />

      <span className="main__precipitation--description">
        Rain: {Math.round(currentWeather.pop * 100)}%
      </span>

    </div>
  )
}

export default Precipitation