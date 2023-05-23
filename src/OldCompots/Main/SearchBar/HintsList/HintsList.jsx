import React from "react";
import './HintsList.css'

const HintsListItem = ({ item, searchCityWeather }) => {
  return (
    <li
      className="hints-list__item"
      onClick={() => searchCityWeather(item)}>
      {item?.properties?.formatted}
    </li>
  )
}

const HintsList = ({ hintsList, setHintsList, setLocationCoords, isHintsListShown}) => {

  const searchCityWeather = item => {
    setLocationCoords([item.properties.lat, item.properties.lon])
    setHintsList([])
  }

  const showHintsList = (isHintsListShown, hintsList) => {
    if (!isHintsListShown) return null;
    return hintsList
      .map(item => <HintsListItem
        item={item}
        searchCityWeather={searchCityWeather} />)
  }
  
  return (
    <ul className={`seacrh-form__hints-list hints-list`}>
      {showHintsList(isHintsListShown, hintsList)}
    </ul>
  )
}

export default HintsList;