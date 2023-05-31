import { lazy, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIconsList } from './Store/Forecast/Forecast.slice';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from './firebase.config';
const Main = lazy(() => import('./components/Main/Main'));
const NewsPageContainer = lazy(() => import('./components/NewsPage/NewsPageContainer'));

function App() {
  const dispatch = useDispatch()

  useEffect(async () => {
    const imageListRef = ref(storage, 'images/weather-icons/')
    const response = await listAll(imageListRef)
    response.items.forEach(async item => {
      let url = await getDownloadURL(item)
      dispatch(setIconsList(url))
    })
  }, [])

  return (
    <div className='min-h-screen flex flex-col mainBgColor '>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/news' element={<NewsPageContainer />} />
        <Route path='*' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App