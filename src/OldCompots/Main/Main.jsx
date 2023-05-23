import React, { useEffect, useState } from "react";
import './Main.css'
import SearchBar from "./SearchBar/SearchBar";
import Temperature from "./Temperature/Temperature";
import Cloudiness from "./Cloudiness/Cloudiness";
import Precipitation from "./Precipitation/Precipitation";
import Date from "./Date/Date";

const Main = ({ cityData, currentWeather, iconsPath, weekDaysNames, monthsNames, degreeSign, setLocationCoords, getLocalTime }) => {

  const [weatherIcon, setWeatherIcon] = useState('');

  useEffect(() => {
    setWeatherIcon(currentWeather?.weather[0].icon)
  }, [currentWeather]);

  return (
    <>
      <div className="search main__search">
        <SearchBar setLocationCoords={setLocationCoords} />
      </div>

      {currentWeather ?
        <>
          <div className="main__weather-image--main">
            <img
              src={`${iconsPath}${weatherIcon}.svg`}
              alt={currentWeather.weather[0].description} />
          </div>

          <Temperature
            currentWeather={currentWeather}
            degreeSign={degreeSign} />

          <Cloudiness
            currentWeather={currentWeather}
            iconsPath={iconsPath} />

          <Precipitation
            currentWeather={currentWeather} />

          <Date
            weekDaysNames={weekDaysNames}
            monthsNames={monthsNames}
            currentWeather={currentWeather}
            getLocalTime={getLocalTime} />

          <div className="main__location">
            {cityData.name}, {cityData.country}
          </div>

        </>
        : null}
    </>
  )
}

export default Main