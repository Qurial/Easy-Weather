import React, { useEffect, useState } from "react";
import DayCard from "../DayCard/DayCard";
import '../DetailedInfo.css';


const FiveDaysForecast = ({ iconsPath, weekDaysNames, degreeSign, weeklyForecast, getLocalTime }) => {
  const [weatherIcons, setWeatherIcons] = useState([]);

  useEffect(() => {
    setWeatherIcons([])
    for (let day of weeklyForecast) {
      let period = getDataOfPeriod(day, 4);
      setWeatherIcons(oldArray => [...oldArray, period.weather[0].icon])
    }
  }, [weeklyForecast])

  const getDataOfPeriod = (day, periodNum) => {
    if (day.length === 8) return day[periodNum]
    let extremePeriodNum = periodNum - (8 - day.length);
    if (extremePeriodNum < 0) return day[0];
    return day[extremePeriodNum]
  }

  const getTime = (day, periodNum) => {
    return getLocalTime(getDataOfPeriod(day, periodNum).dt).getHours() + ':00'
  }
  const getIsNightTempShown = (day) => {
    return day.length > 7 || getLocalTime(getDataOfPeriod(day, 0).dt).getHours() < 3
  }
  return (
    <div className="forecast">
      {weeklyForecast
        .map(day => <DayCard
          day={day}
          key={day[0].dt}
          weekDay={weekDaysNames[day[0].weekDay]}
          weatherIcon={`${iconsPath}${weatherIcons[day[0].dayNumber]}.svg`}
          time={getTime(day, 4)}
          mainTemp={getDataOfPeriod(day, 4).main.temp}
          nightTemp={getDataOfPeriod(day, 1).main.temp}
          isNightTempShown={getIsNightTempShown(day)}
          degreeSign={degreeSign} />)
      }
    </div>
  )
}

export default FiveDaysForecast