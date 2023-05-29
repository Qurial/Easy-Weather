import React from "react";
import HiddenTab from "./HiddenTab";
import { useDispatch, useSelector } from "react-redux";
import { iconsPath, setTimePeriod } from "../../../../Store/Forecast/Forecast.slice";
import { checkIfLast } from "../../../../common/checkIfLast";

const HiddenTabContainer = ({ item, index, setActiveTab }) => {

  const dispatch = useDispatch()

  const weeklyForecast = useSelector(state => state.forecast.weeklyForecast)
  const icon =
    useSelector(iconsPath) +
    useSelector(state => state.forecast.weeklyForecast[index][0].weather[0].icon) +
    '.svg'
  const weekDay = useSelector(state => state.forecast.weekDays[item[0].weekDay]).slice(0, 3)
  const temperature = Math.round(useSelector(state => state.forecast.weeklyForecast[index][0].main.temp))
  const degreeSign = useSelector(state => state.forecast.degreeSign)
  const isLoading = useSelector(state => state.forecast.isLoading)

  const divideLine = checkIfLast(<div
    className="relative inline-block mx-12 md:mx-0 md:my-8 md:w-auto border-b-2 md:border-r-2 border-neutral-300">
  </div>, index, weeklyForecast)

  const setTab = (tabNum) => {
    setActiveTab(tabNum)
    dispatch(setTimePeriod(0))
  }

  return (
    <HiddenTab
      index={index}
      setActiveTab={setTab}
      icon={icon}
      weekDay={weekDay}
      temperature={temperature}
      degreeSign={degreeSign}
      divideLine={divideLine} 
      isLoading={isLoading} 
      />
  )
}

export default HiddenTabContainer