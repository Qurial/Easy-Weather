import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './Store/Store'
import Loader from './components/Loader'
import AppContainer from './AppContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <AppContainer />
      </Suspense>
    </Provider>
  </Router>
  // </React.StrictMode>,
)
