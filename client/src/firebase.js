// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyB6CX82tz25iy7qBImdaaHEL6BeT5JLsRw",
  authDomain: "estate-293e0.firebaseapp.com",
  projectId: "estate-293e0",
  storageBucket: "estate-293e0.appspot.com",
  messagingSenderId: "1032475795865",
  appId: "1:1032475795865:web:a7222f2cde569f46d27308",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
