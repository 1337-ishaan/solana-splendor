import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCGgzGy5crxCkkfK3CIBFQLNHHRuXjkSY",
  authDomain: "splendor-93ba3.firebaseapp.com",
  databaseURL: "https://splendor-93ba3-default-rtdb.firebaseio.com",
  projectId: "splendor-93ba3",
  storageBucket: "splendor-93ba3.appspot.com",
  messagingSenderId: "884356411642",
  appId: "1:884356411642:web:ae8d4e850c942e7d6cd943",
  measurementId: "G-FV0S0BNWYQ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }