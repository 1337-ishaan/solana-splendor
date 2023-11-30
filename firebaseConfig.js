import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC7u7QU7Rt8de4Q6G9Ti95gImW5ltKUOZE",
  authDomain: "splendor-96d2d.firebaseapp.com",
  databaseURL: "https://splendor-96d2d-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "splendor-96d2d",
  storageBucket: "splendor-96d2d.appspot.com",
  messagingSenderId: "41817783404",
  appId: "1:41817783404:web:290888e4be5a27a549ac49",
  measurementId: "G-C5KGY4QPT1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }