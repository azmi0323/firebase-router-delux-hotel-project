// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqmrFoDJpprXV9nfn2TJsQ08zs2HNzWBc",
  authDomain: "fir-router-delux-hotel.firebaseapp.com",
  projectId: "fir-router-delux-hotel",
  storageBucket: "fir-router-delux-hotel.appspot.com",
  messagingSenderId: "267513315319",
  appId: "1:267513315319:web:1a4dfd44f710925d1b38f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;