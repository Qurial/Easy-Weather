import React from "react";
import sunsetIcon from '../../../../assets/sunset.svg'
import sunriseIcon from '../../../../assets/sunrise.svg'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sun = ({ sunrise, sunset }) => {
  let getSunTime = (sunAction) => {
    let sunActionFullDate = new Date(sunAction * 1000)
    let hour = sunActionFullDate.getHours()
    let minute = sunActionFullDate.getMinutes()
    return hour + ':' + ((minute < 10) ? '0' + minute : minute)
  }

  return (
    <div className="summit-card summit-sun">
      <p className="summit-card__name">
        Sunrise & Sunset <FontAwesomeIcon icon={faSun} />
      </p>

      <p className="summit-sun__action">
        <img src={sunriseIcon} alt="sunrise" />
        <span>{getSunTime(sunrise)}</span>
      </p>
      
      <p className="summit-sun__action">
        <img src={sunsetIcon} alt="sunset" />
        <span>{getSunTime(sunset)}</span>
      </p>
    </div>
  )
}

export default Sun