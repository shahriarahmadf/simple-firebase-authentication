// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKet6s8LzG-JZDJusRG66YNQ9erDWeiKk",
  authDomain: "simple-firebase-authe-20221106.firebaseapp.com",
  projectId: "simple-firebase-authe-20221106",
  storageBucket: "simple-firebase-authe-20221106.appspot.com",
  messagingSenderId: "158101373565",
  appId: "1:158101373565:web:05bccd1bbbd96ddfbda714",
  measurementId: "G-GQ8SWNKGK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;