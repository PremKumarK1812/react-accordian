import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCT2jUlwrMOMkeMZwKFzPSyeLvQ6u04mR0',
  authDomain: 'to-do-application-39de6.firebaseapp.com',
  projectId: 'to-do-application-39de6',
  storageBucket: 'to-do-application-39de6.appspot.com',
  messagingSenderId: '465359273993',
  appId: '1:465359273993:web:1ff0b34e533c1591e638d8',
  measurementId: 'G-7VZY7QYMDS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export default app;
