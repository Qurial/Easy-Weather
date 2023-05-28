import React from "react";
import CitiesTab from "./CitiesTab";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, fetchWeather } from "../../../../Store/Forecast/ForecastThunk";
// import { fetchPhoto } from "../../../../Store/Forecast/ForecastThunk";

const CitiesTabsContainer = () => {
  const dispatch = useDispatch()
  const savedCities = useSelector(state => state.forecast.savedCities)
  const units = useSelector(state => state.forecast.units)
  const handleTabOnClick = (lat, lon, cityName, countryName) => {
    dispatch(fetchWeather(units, lat, lon))
    // dispatch(fetchPhoto(cityName, countryName))
    dispatch(fetchCity(cityName))

  }
  return (
    <div className="citiesTabs flex absolute -top-8 w-[98%] overflow-x-scroll z-10 ">
      {savedCities.map(item => <CitiesTab
        item={item}
        cityName={item.cityName}
        countryCode={item.countryCode}
        handleTabOnClick={handleTabOnClick}
        countryName={item.countryName}
      />)}
    </div>
  )
}

export default CitiesTabsContainer