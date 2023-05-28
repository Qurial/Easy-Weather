import React from "react";

const CitiesTab = ({ item, cityName, countryCode, handleTabOnClick, countryName }) => {
  return (
    <>
    <div
      className=" tabColor transition-all text-sm w-28 float-left py-1 px-2 mx-1 shadow-sm rounded-lg whitespace-nowrap cursor-pointer"
      onClick={() => handleTabOnClick(item.lat, item.lon, cityName, countryName)}>{cityName}, {countryCode}
    </div>
    </>
  )
}

export default CitiesTab