import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setIconsList } from './Store/Forecast/Forecast.slice';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from './firebase.config';
import App from './App';

function AppContainer() {

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
    <App />
  )
}

export default AppContainer