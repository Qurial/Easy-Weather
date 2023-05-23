import React from "react";
import './DayCard.css';

const ShowNightTemp = ({ isNightTempShown, nightTemp, degreeSign }) => {
  if (!isNightTempShown) return;
  return (
    <div className="weather-card__temperature--night">
      {Math.round(nightTemp)}&#176;
      <span>{degreeSign}</span>
    </div>
  )
}

const DayCard = ({ weekDay, weatherIcon, time = null, mainTemp, nightTemp, isNightTempShown, degreeSign }) => {

  return (
    <div className="Forecast-day_card weather-card">
      <span className="weather-card__week-day">{weekDay}</span>
      <span className="weather-card__image"><img src={weatherIcon} /></span>
      <span className="weather-card__time">{time}</span>

      <div className="weather-card__temperature">

        <div className="weather-card__temperature--day">
          {Math.round(mainTemp)}&#176;
          <span>{degreeSign}</span>
        </div>

        <ShowNightTemp
          isNightTempShown={isNightTempShown}
          nightTemp={nightTemp}
          degreeSign={degreeSign} />

      </div>
    </div>
  )
}

export default DayCard