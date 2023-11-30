import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBd8HYbv_ryAC_lUC9ym0jR001Nh-tuqqA",
    authDomain: "splendor-490fe.firebaseapp.com",
    databaseURL: "https://splendor-490fe-default-rtdb.firebaseio.com",
    projectId: "splendor-490fe",
    storageBucket: "splendor-490fe.appspot.com",
    messagingSenderId: "625677282425",
    appId: "1:625677282425:web:fc1e0e86bdda01aafb78a8",
    measurementId: "G-H21P6X7XBZ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }