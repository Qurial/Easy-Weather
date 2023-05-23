import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Visibility = ({ currentWeather }) => {
  const getVisibilityLevel = (visibility) => {
    switch (true) {
      case (visibility < 50): return 'Dense fog😶‍🌫️'
      case (visibility < 200): return 'Thick fog😔'
      case (visibility < 500): return 'Moderate fog😞'
      case (visibility < 1000): return 'Light fog🙁'
      case (visibility < 2000): return 'Thin fog😐'
      case (visibility < 4000): return 'Haze😌'
      case (visibility < 9000): return 'Light haze🙂'
      default: return 'Clear😀'
    }
  }
  
  const getVisibilityDistance = () => {
    return (currentWeather.visibility > 100
      ? <>{Math.round(currentWeather.visibility / 100) / 10}<span> Km</span></>
      : <>{currentWeather.visibility}<span> m</span></>)
  }

  return (
    <div className="summit-card summit-visibility">
      <p className="summit-card__name">
        Visibility <FontAwesomeIcon icon={faEye} />
      </p>

      <p className="summit-visibility__level">
        {getVisibilityDistance()}
      </p>

      <p className="summit-visibility__description">
        {getVisibilityLevel(currentWeather.visibility)}
      </p>
    </div>
  )
}

export default Visibility