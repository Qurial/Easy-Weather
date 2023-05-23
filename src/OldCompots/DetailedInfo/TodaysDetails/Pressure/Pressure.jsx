import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDownLong } from '@fortawesome/free-solid-svg-icons'

const Pressure = ({ currentWeather }) => {
  const getPressureLevel = (pressure) => {
    switch (true) {
      case (pressure < 980): return 'very low😨'
      case (pressure < 1000): return 'moderate low😬'
      case (pressure < 1012): return 'low😐'
      case (pressure < 1014): return 'normal👍'
      case (pressure < 1020): return 'high😖'
      default: return 'very high😧'
    }
  }

  return (
    <div className="summit-card summit-pressure">
      <p className="summit-card__name">
        Pressure <FontAwesomeIcon icon={faDownLong} />
      </p>
      
      <p className="summit-pressure__level">
        {currentWeather.main.pressure} hPa
      </p>

      <p className="summit-pressure__description">
        {getPressureLevel(currentWeather.main.pressure)}
      </p>
    </div>
  )
}

export default Pressure