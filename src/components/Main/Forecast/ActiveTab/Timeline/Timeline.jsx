import React from "react";

const Timeline = ({ weekNum, weeklyForecast, degreeSign, getTemperature, getHours, setPeriod, getIsSlected }) => {
  return (
    <section className='flex justify-around text-center text-xs lg:text-sm sm:border-b-none w-full'>
      {weeklyForecast[weekNum]
        .map((item, index) => <div
          className={'w-full tileColor transition-all my-1 rounded-lg cursor-pointer '
            + ' ' + getIsSlected(index)}
          key={index}
          onClick={() => setPeriod(index)}>
          <div>{getHours(item.dt)}</div>
          <div>{getTemperature(item.main.temp)}&#176;{degreeSign}</div>
        </div>)}
    </section>
  )
}

export default Timeline