// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmPMGv2uZlk9Jx2vOv-KVFM4g8VitAYGQ",
  authDomain: "tech-zaint.firebaseapp.com",
  projectId: "tech-zaint",
  storageBucket: "tech-zaint.appspot.com",
  messagingSenderId: "35031413120",
  appId: "1:35031413120:web:408d8b7357e943a91f5165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;