import React from "react";
import compasNeedle from '../../assets/compass-needle-svgrepo-com.svg';
import Navigation from "./Navigation/Navigation";

const Header = () => {

  

  return (
    <header className="py-3 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-50 flex flex-col sm:flex-row items-center justify-around w-full">
      <div className='flex items-center'>
        <img
          className='w-12 h-12 rotate-12 hover:rotate-45 transition duration-500 dark:invert'
          src={compasNeedle} />
        <span className='text-xl font-semibold w-16 sm:w-24'>
          Easy Weather
        </span>
      </div>
      <Navigation />
    </header>
  )
}

export default Header