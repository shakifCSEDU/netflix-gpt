// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8KuMyKnELjrxILO5MQikDpHdZbZzdWuE",
  authDomain: "netflixgpt-378d8.firebaseapp.com",
  projectId: "netflixgpt-378d8",
  storageBucket: "netflixgpt-378d8.appspot.com",
  messagingSenderId: "122089457635",
  appId: "1:122089457635:web:47d4539873c058c3c702d6",
  measurementId: "G-8MYT4WKHGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
