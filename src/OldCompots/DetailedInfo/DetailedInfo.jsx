import React, { useEffect, useState } from "react";
import TodaysDetails from "./TodaysDetails/TodaysDetails";
import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecast";
import './DetailedInfo.css'
import DayForecast from "./DayForecast/DayForecast";
import SettingsMenu from "./SettingsMenu/SettingsMenu";

const WeatherData = ({ weatherData, iconsPath, weekDaysNames, degreeSign, weeklyForecast, getLocalTime, dayNumber, sunrise, sunset, speedUnits, isWeekForecast }) => {
  if (!weatherData) return;
  return (
    <>
      <div className="details__forecast">
        {isWeekForecast
          ? <FiveDaysForecast
            iconsPath={iconsPath}
            weekDaysNames={weekDaysNames}
            degreeSign={degreeSign}
            weeklyForecast={weeklyForecast}
            getLocalTime={getLocalTime} />
          : <DayForecast
            weeklyForecast={weeklyForecast}
            iconsPath={iconsPath}
            degreeSign={degreeSign}
            getLocalTime={getLocalTime}
            dayNumber={dayNumber} />}
      </div>
      <div className="details__summit">
        <TodaysDetails
          currentWeather={weatherData[0]}
          sunrise={sunrise}
          sunset={sunset}
          speedUnits={speedUnits}
          degreeSign={degreeSign} />
      </div>
    </>
  )
}

const DetailedInfo = ({ weatherData, sunrise, sunset, iconsPath, weekDaysNames, degreeSign, speedUnits, handleUnitsSetting, getLocalTime }) => {

  const [isWeekForecast, toggleForecast] = useState(true);
  const [weeklyForecast, setweeklyForecast] = useState([])
  useEffect(() => {
    if (weatherData) {
      formWeeklyForecast(weatherData)
    }
  }, [weatherData])

  const getDay = (weatherData, num) => {
    return getLocalTime(weatherData[num].dt).getDay()
  }

  const formWeeklyForecast = (weatherData) => {
    let week = [], day = [], dayNumber = 0;
    for (let i = 0; i < weatherData.length; i++) {
      if (i !== 0 && getDay(weatherData, i - 1) !== getDay(weatherData, i)) {
        week.push(day);
        dayNumber++
        day = [];
      }
      day.push({
        ...weatherData[i],
        weekDay: getDay(weatherData, i),
        dayNumber: dayNumber
      })
    }
    week.push(day);
    setweeklyForecast([...week])
  }

  return (
    <>
      <div className="details__settings">
        <SettingsMenu
          toggleForecast={toggleForecast}
          isWeekForecast={isWeekForecast}
          handleUnitsSetting={handleUnitsSetting} />
      </div>

      <WeatherData
        weatherData={weatherData}
        iconsPath={iconsPath}
        weekDaysNames={weekDaysNames}
        degreeSign={degreeSign}
        weeklyForecast={weeklyForecast}
        getLocalTime={getLocalTime}
        dayNumber={0}
        sunrise={sunrise}
        sunset={sunset}
        speedUnits={speedUnits}
        isWeekForecast={isWeekForecast} />
    </>
  )
}

export default DetailedInfo