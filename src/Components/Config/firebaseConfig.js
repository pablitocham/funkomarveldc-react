// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh2EIQ-w8bbUJJArI5bl8RQRTcNUt4mZo",
  authDomain: "funkos-d2411.firebaseapp.com",
  projectId: "funkos-d2411",
  storageBucket: "funkos-d2411.appspot.com",
  messagingSenderId: "493509665334",
  appId: "1:493509665334:web:3d074b03043d9e04416e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)