
import "firebase/database"
import { initializeApp } from "firebase/app";
import  "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDRhqMtj2iQgGvYwdN-yhQjRQgHI7WTFm8",
  authDomain: "smart-door2021.firebaseapp.com",
  databaseURL: "https://smart-door2021-default-rtdb.firebaseio.com",
  projectId: "smart-door2021",
  storageBucket: "smart-door2021.appspot.com",
  messagingSenderId: "379724413055",
  appId: "1:379724413055:web:ef770a80987405c7c7a74a",
  measurementId: "G-VFPX7JHD3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app