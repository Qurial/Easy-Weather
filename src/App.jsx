import { lazy } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
// const Main = lazy(() => import('./components/Main/Main'));
const NewsPageContainer = lazy(() => import('./components/NewsPage/NewsPageContainer'));

function App() {

  return (
      <div className='min-h-screen flex flex-col mainBgColor '>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Main />}/> */}
          <Route path='/news' element={<NewsPageContainer />}/>
          {/* <Route path='*' element={<Main />}/> */}
        </Routes>
        <Footer />
      </div>
  )
}

export default App