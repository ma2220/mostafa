import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8M-6trcSgbUztHhsg3vg2VhE5zX3gSzg",
  authDomain: "auth-cucumber.firebaseapp.com",
  databaseURL: "https://auth-cucumber-default-rtdb.firebaseio.com",
  projectId: "auth-cucumber",
  storageBucket: "auth-cucumber.firebasestorage.app",
  messagingSenderId: "1070770356590",
  appId: "1:1070770356590:web:9d03a5b8fc5fd23f8b417f",
  measurementId: "G-83MZ6N7D6K"
};

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);

export { db };