import React, { useEffect, useState } from "react";
import ActiveTab from "./ActiveTab";
import { useSelector } from "react-redux";
import { getWeeklyForecast } from "../../../../Store/Forecast/Forecast.slice";
import { getLocalTime } from "../../../../common/getLocalTime";
import { checkIfLast } from "../../../../common/checkIfLast";
import getIconUrl from "../../../../common/getIconUrl";

const ActiveTabContainer = ({ item, index }) => {

  const timePeriod = useSelector(state => state.forecast.timePeriod)
  const periodWeather = useSelector(state => state.forecast.weeklyForecast[index][timePeriod])
  const isLoading = useSelector(state => state.forecast.isLoading)
  const iconsList = useSelector(state => state.forecast.iconsList)
  const iconId = periodWeather.weather[0].icon
  const icon = getIconUrl(iconId, iconsList)

  const [isImageLoading, setIsImageLoading] = useState(true)
  useEffect(() => {
    setIsImageLoading(true)
  }, [icon])

  const weeklyForecast = useSelector(getWeeklyForecast)

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
      isImageLoading={isImageLoading}
      setIsImageLoading={setIsImageLoading}
       />
  )
}

export default ActiveTabContainer