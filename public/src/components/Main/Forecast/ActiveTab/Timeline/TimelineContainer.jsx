import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalTime } from "../../../../../common/getLocalTime";
import Timeline from "./Timeline";
import { getWeeklyForecast, setTimePeriod } from "../../../../../Store/Forecast/Forecast.slice";

const TimelineContainer = ({ index }) => {

  const weeklyForecast = useSelector(getWeeklyForecast)
  const degreeSign = useSelector(state => state.forecast.degreeSign)
  const timezone = useSelector(state => state.forecast.cityData.timezone)
  const selectedItem = useSelector(state => state.forecast.timePeriod)
  const dispatch = useDispatch()
  
  const setPeriod = (period) => {
    dispatch(setTimePeriod(period))
  }
  const getHours = (date) => {
    return getLocalTime(timezone, date).getHours() + ':00'
  }
  const getTemperature = (temp) => {
    return Math.round(temp)
  }

  const getIsSlected = (index) => {
    if(index === selectedItem)
      return 'bg-neutral-200 dark:bg-neutral-600'
    return null;
  }

  return (
    <Timeline
      weekNum={index}
      weeklyForecast={weeklyForecast}
      degreeSign={degreeSign}
      getTemperature={getTemperature}
      getHours={getHours}
      setPeriod={setPeriod}
      getIsSlected={getIsSlected} />
  )
}

export default TimelineContainer