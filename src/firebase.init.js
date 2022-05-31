// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSaIEfp_N8r57Qeh1YWZ130ALcfJaissI",
  authDomain: "edu-tent-online-classroom.firebaseapp.com",
  projectId: "edu-tent-online-classroom",
  storageBucket: "edu-tent-online-classroom.appspot.com",
  messagingSenderId: "474104113980",
  appId: "1:474104113980:web:754ae5d4d9862d44338c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
