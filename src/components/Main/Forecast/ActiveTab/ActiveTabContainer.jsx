import React, { useEffect } from "react";
import ActiveTab from "./ActiveTab";
import { useDispatch, useSelector } from "react-redux";
import { iconsPath, getWeeklyForecast, resetForecast } from "../../../../Store/Forecast/Forecast.slice";
import { getLocalTime } from "../../../../common/getLocalTime";
import { checkIfLast } from "../../../../common/checkIfLast";

const ActiveTabContainer = ({ item, index }) => {

  const timePeriod = useSelector(state => state.forecast.timePeriod)
  const periodWeather = useSelector(state => state.forecast.weeklyForecast[index][timePeriod])
  const isLoading = useSelector(state => state.forecast.isLoading)

  const weeklyForecast = useSelector(getWeeklyForecast)
  const icon = useSelector(iconsPath) + periodWeather.weather[0].icon + '.svg';

  const weekDay = useSelector(state => state.forecast.weekDays[item[0].weekDay])
  const months = useSelector(state => state.forecast.months)
  const date = useSelector(state => state.forecast.weeklyForecast[index][0].dt)
  const timezone = useSelector(state => state.forecast.cityData.timezone)
  const localTime = getLocalTime(date, timezone)
  const localDate = localTime.getDate() + ' ' + months[localTime.getMonth()]

  const currentTime = getLocalTime(timezone, periodWeather.dt).getHours() + ':00'


  const divideLine = checkIfLast(<div
    className="relative inline-block mx-12 md:mx-0 md:my-8
      md:w-auto border-b-2 md:border-r-2 border-neutral-300">
  </div>, index, weeklyForecast);

  return (
    <ActiveTab
      index={index}
      icon={icon}
      weekDay={weekDay}
      localDate={localDate}
      weeklyForecast={weeklyForecast}
      divideLine={divideLine}
      currentTime={currentTime}
      isLoading={isLoading}
       />
  )
}

export default ActiveTabContainer