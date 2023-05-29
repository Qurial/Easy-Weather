import React, { lazy } from "react";
const ForecastContainer = lazy(() => import('./Forecast/ForecastContainer'));
const SearchContainer = lazy(() => import('./Search/SearchContainer'));
// const BackgroundImageContainer = lazy(() => import('./BackgroundImage/BackgroundImageContainer'));
const News = lazy(() => import('./News/News'));
const BlogContainer = lazy(() => import('./Blog/BlogContainer'));


const Main = () => {

  return (
    <main className='flex flex-col h-full items-center'>
      <SearchContainer />
      {/* <BackgroundImageContainer /> */}
      <ForecastContainer />
      <News />
      <BlogContainer />
    </main>
  )
}

export default Main