import { lazy } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Loader() {

  return (
    <div className='min-h-screen flex flex-col mainBgColor'>
      <Header />
      <Footer />
    </div>
  )
}

export default Loader