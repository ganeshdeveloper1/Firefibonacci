import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyARRsGVXPXMdCD9BsmXb2FJpJybZWyqhcU',
  authDomain: 'registration-3425f.firebaseapp.com',
  databaseURL: 'https://registration-3425f-default-rtdb.firebaseio.com',
  projectId: 'registration-3425f',
  storageBucket: 'registration-3425f.appspot.com',
  messagingSenderId: '666853103407',
  appId: '1:666853103407:web:93613127d9de2d080bb3da',
  measurementId: 'G-GED7L349W8',
}

export const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const auth = getAuth(app)
