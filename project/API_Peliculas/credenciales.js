// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWz2jgxq_HlV86TUi4aOqODV_6uKv4XSg",
  authDomain: "proyectozoila.firebaseapp.com",
  projectId: "proyectozoila",
  storageBucket: "proyectozoila.appspot.com",
  messagingSenderId: "44597801307",
  appId: "1:44597801307:web:0ec9095b9e4a2ffea9aa7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
