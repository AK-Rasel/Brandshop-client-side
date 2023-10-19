// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp-xsTjBNN12NRAL0f-QmbQW6pHSaS1sM",
  authDomain: "automotive-d88f5.firebaseapp.com",
  projectId: "automotive-d88f5",
  storageBucket: "automotive-d88f5.appspot.com",
  messagingSenderId: "259728417889",
  appId: "1:259728417889:web:dff0591aec2228b6c57620"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);