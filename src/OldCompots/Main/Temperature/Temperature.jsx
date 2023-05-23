import React from "react";

const Temperature = ({currentWeather, degreeSign}) => {
  return (
    <div className="main__temperature">
      <span className="main__temperature--value">
        {Math.round(currentWeather.main.temp)}&#176;
      </span>
      <span className="main__temperature--sign">
        {degreeSign}
      </span>
    </div>
  )
}

export default Temperature;