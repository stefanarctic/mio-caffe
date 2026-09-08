import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDMC8zkvr_JaSEkpn6CIzSo-9hyggsdfYw',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'mio-caffe.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'mio-caffe',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'mio-caffe.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '905635974855',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:905635974855:web:d91dbb55b2fceb318778e2',
}

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
)

let app = null
let auth = null
let db = null

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { app, auth, db }
