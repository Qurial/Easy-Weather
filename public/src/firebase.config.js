import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBWDCPMA0OyNrSdZPMIi34LjFNazb8XEXI",
  authDomain: "easy-weather-33e61.firebaseapp.com",
  databaseURL: "https://easy-weather-33e61-default-rtdb.firebaseio.com",
  projectId: "easy-weather-33e61",
  storageBucket: "easy-weather-33e61.appspot.com",
  messagingSenderId: "187953061968",
  appId: "1:187953061968:web:8eafd04c0e3fc3be9af155",
  // measurementId: "G-N1ZVRYPSYQ"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}