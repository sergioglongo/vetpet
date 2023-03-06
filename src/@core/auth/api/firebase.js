// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getMessaging, getToken } from "firebase/messaging"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
}

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

export const enableNotifications = async () => {
  return await Notification.requestPermission().then((permission) => {
    return permission === 'granted'
  })
}

export const obtainToken = async () => {
  const token = await getToken(messaging, {
    vapidKey: process.env.REACT_APP_FIREBASE_VAPIDKEY
  }).then((currentToken) => {
    if (currentToken) {
      return { status: true, value: currentToken }
    } else {
      return { status: false, value: 'No registration token available. Request permission to generate one.' }
    }
  }).catch((err) => {
    return { status: false, value: `An error occurred while retrieving token. ${err}`}
  })
  return token
}