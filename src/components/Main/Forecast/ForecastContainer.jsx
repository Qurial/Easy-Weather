import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";
import { useDispatch, useSelector } from "react-redux";
import HiddenTabContainer from "./HiddenTab/HiddenTabContainer";
import ActiveTabContainer from "./ActiveTab/ActiveTabContainer";
import { fetchWeather } from "../../../Store/Forecast/ForecastThunk";
// import { fetchPhoto } from "../../../Store/Forecast/ForecastThunk";
import { resetForecast, toggleUnits } from "../../../Store/Forecast/Forecast.slice";

const ForecastContainer = () => {

  const forecast = useSelector(state => state.forecast)
  const locationCoords = forecast.locationCoords
  const units = forecast.units
  const weeklyForecast = forecast.weeklyForecast
  const locationName = forecast.cityName
  const countryName = forecast.countryName
  const degreeSign = forecast.degreeSign

  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    dispatch(fetchWeather(units, locationCoords[0], locationCoords[1]))
    // dispatch(fetchPhoto(locationName, countryName))
    return () => {
      dispatch(resetForecast())
    }
  }, [units, locationCoords])

  const getTab = (index, item) => {
    if (index === activeTab)
      return <ActiveTabContainer item={item} index={index} />
    return <HiddenTabContainer item={item} index={index} setActiveTab={setActiveTab} />
  }

  const handleUnitsToggle = (animationCallback) => {
    animationCallback()
    setTimeout(() => {
      dispatch(toggleUnits())
    }, 50)
    
  }

  const getTabLayout = () => {
    return (
      <>
        {weeklyForecast.map((item, index) => <>{getTab(index, item)}</>)}
      </>
    )
  }

  return (
    <Forecast
      getTabLayout={getTabLayout}
      locationName={locationName}
      countryName={countryName}
      degreeSign={degreeSign}
      handleUnitsToggle={handleUnitsToggle}
    />
  )
}

export default ForecastContainer