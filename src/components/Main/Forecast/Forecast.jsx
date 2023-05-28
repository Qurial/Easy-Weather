import React from "react";
import { toggleSavedCities, toggleUnits } from "../../../Store/Forecast/Forecast.slice";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimate } from "framer-motion";
import CitiesTabsContainer from "./CitiesTabs/CitiesTabsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Forecast = ({ getTabLayout, locationName, countryName, degreeSign, handleUnitsToggle }) => {
  const [scope, animate] = useAnimate();
  const forecast = useSelector(state => state.forecast)
  const savedCities = useSelector(state => state.forecast.savedCities)
  const locationCoords = useSelector(state => state.forecast.locationCoords)
  const cityData = useSelector(state => state.forecast.cityData)
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  async function myAnimation() {
    await animate(scope.current, { x: 50, opacity: 0 });
    await animate(scope.current, { x: -50 },);
    animate(
      scope.current,
      {
        x: 0,
        opacity: 1,
      },
      {
        ease: "easeInOut",
      }
    );
  }

  const getIsSaved = () => {
    for (const [index, item] of savedCities.entries()) {
      if (item.lat !== Math.round(locationCoords[0]) || item.lon !== Math.round(locationCoords[1])) continue;
      return true;
    }
    return false;
  }

  return (
    <section
      className='flex flex-col mr-auto ml-auto md:flex-row rounded-xl dark:bg-neutral-700 dark:text-neutral-50
     py-5 pt-10 px-2 p-12 mt-64 bg-neutral-50 transition-all relative shadow-xl'>
      <CitiesTabsContainer />
      <h1 className="absolute top-2 left-3 text-xl">{locationName}{locationName ? ', ' : ''}{countryName}</h1>
      <motion.button
        onClick={() => handleUnitsToggle(myAnimation)}
        className='buttonColor group absolute w-9 h-9 p-2 transition-all rounded-full top-2 right-3 overflow-hidden'
      >
        <motion.div ref={scope}>
          &#176;{degreeSign}
        </motion.div>
      </motion.button>
      <button onClick={() => console.log(state)}
        className='buttonColor w-fit p-2 transition-all rounded-md m-2 absolute top-0 right-32'>get state
      </button>
      <button
        className='buttonColor group absolute w-9 h-9 p-2 transition-all rounded-full top-2 right-14 overflow-hidden'
        onClick={() => dispatch(toggleSavedCities())}>
        <FontAwesomeIcon icon={faStar}
          className={'transition-all ' + (getIsSaved() ? 'text-emerald-500 dark:text-emerald-400' : 'text-neutral-500 dark:text-neutral-300')}
        />
      </button>

      {getTabLayout()}
    </section>
  )
}

export default Forecast