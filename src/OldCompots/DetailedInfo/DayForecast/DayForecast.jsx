import React from "react";
import DayCard from "../DayCard/DayCard";
import '../DetailedInfo.css';

const TodaysForecast = ({ weeklyForecast, iconsPath, degreeSign, getLocalTime, dayNumber }) => {

  const getTime = (day) => {
    return getLocalTime(day.dt).getHours() + ':00'
  }
  
  return (
    <div className="forecast">
      {weeklyForecast[dayNumber]
        .map(day => <DayCard
          day={day}
          key={day.dt}
          weekDay={getTime(day)}
          weatherIcon={`${iconsPath}${day.weather[0].icon}.svg`}
          mainTemp={day.main.temp}
          nightTemp={day.main.temp}
          isNightTempShown={false}
          degreeSign={degreeSign} />)}
    </div>
  )
}

export default TodaysForecast;