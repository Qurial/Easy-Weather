import React from "react";
import './TodaysDetails.css'
import Wind from "./Wind/Wind";
import Humidity from "./Humidity/Humidity";
import Visibility from "./Visibility/Visibility";
import Pressure from "./Pressure/Pressure";
import Sun from "./Sun/Sun";
import Weather from "./Weather/Weather";
const TodaysDetails = ({ currentWeather, sunrise, sunset, speedUnits, degreeSign }) => {

  return (
    <>
      <p className="summit-header">Today's Details:</p>
      <div className="summit">

        <Weather
          currentWeather={currentWeather}
          degreeSign={degreeSign} />

        <Wind
          speedUnits={speedUnits}
          currentWeather={currentWeather} />

        <Humidity
          currentWeather={currentWeather} />

        <Pressure
          currentWeather={currentWeather} />

        <Visibility
          currentWeather={currentWeather} />

        <Sun
          sunrise={sunrise}
          sunset={sunset} />
      </div>
    </>
  )
}

export default TodaysDetails