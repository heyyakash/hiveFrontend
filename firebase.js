// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeiKCKuIGeoppUfjv8QwExbonfX9-0DWc",
  authDomain: "hive-5a017.firebaseapp.com",
  projectId: "hive-5a017",
  storageBucket: "hive-5a017.appspot.com",
  messagingSenderId: "929812345999",
  appId: "1:929812345999:web:0e281c0b59b367c3b2ecfa",
  measurementId: "G-ZVNZV8G8FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);