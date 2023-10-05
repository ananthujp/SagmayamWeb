// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTEOcJdn_2WLlueL-FiVmqUkI7XFnnsGU",
  authDomain: "sagmayam-web.firebaseapp.com",
  projectId: "sagmayam-web",
  storageBucket: "sagmayam-web.appspot.com",
  messagingSenderId: "157332105596",
  appId: "1:157332105596:web:be4ed83da9cbbb94115cf9",
  measurementId: "G-PBL4YXPZ7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
