import React from "react";
import TimelineContainer from "./Timeline/TimelineContainer";
import DetailsContainer from "./Details/DetailsContainer";
import MainInfoContainer from "./MainInfo/MainInfoContainer";
const ActiveTab = (
  { weekDay, icon, localDate, isLoading,
    index, divideLine, currentTime,
  setIsImageLoading, isImageLoading }) => {
  return (
    <>
      {isLoading
        ? <><div className='m-1 mx-2 bg-neutral-200 dark:bg-neutral-600 rounded-xl animate-pulse'>
          <h1 className='py-1 px-3 h-8'></h1>

          <div className='flex flex-row h-fit' >

            <div className='w-2/3 p-2 invisible'>
              <DetailsContainer index={index} />
            </div>

            <div className='w-1/3 flex justify-center'>
              <img src={icon} alt="weather" className='w-full invisible' />
            </div>
          </div>
          <div className="invisible">
            <TimelineContainer index={index} />
          </div>
        </div>
          {divideLine}
        </>
        : <><div className='m-1 mx-2'>
          <h1 className='py-1 px-3 h-8'>{weekDay}
            <span className='float-right'>
              <span className="text-neutral-500">{currentTime}</span>&nbsp;
              {localDate}
            </span>
          </h1>

          <div className='flex flex-row h-fit w-full' >

            <div className='w-2/3 p-2'>
              <MainInfoContainer index={index} />
              <DetailsContainer index={index} />
            </div>

            <div className={`w-1/3 flex justify-center 
             ${isImageLoading
              ? 'bg-neutral-400 dark:bg-neutral-800 rounded-3xl animate-pulse'
              : ''}`}
              >
              <img
              src={icon}
              alt="weather"
              className={`w-full ${isImageLoading ? 'opacity-0' : ''}`}
              onLoad={() => setIsImageLoading(false)} />
            </div>
          </div>
          <TimelineContainer index={index} />
        </div>
          {divideLine}
        </>
      }
    </>
  )
}

export default ActiveTab