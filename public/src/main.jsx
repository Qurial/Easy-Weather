import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './Store/Store'
import Loader from './components/Loader'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>

        <App />
      </Suspense>

    </Provider>
  </Router>
  // </React.StrictMode>,
)
