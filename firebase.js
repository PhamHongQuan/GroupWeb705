// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCihXOX-VpASR004TU7wCVmTKGHKmYIxo4",
  authDomain: "hci2023group057.firebaseapp.com",
  projectId: "hci2023group057",
  storageBucket: "hci2023group057.appspot.com",
  messagingSenderId: "185759240742",
  appId: "1:185759240742:web:66f0a2100a726af4330ce7",
  measurementId: "G-22FLL12MP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);