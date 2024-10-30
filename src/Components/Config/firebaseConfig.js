import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh2EIQ-w8bbUJJArI5bl8RQRTcNUt4mZo",
  authDomain: "funkos-d2411.firebaseapp.com",
  projectId: "funkos-d2411",
  storageBucket: "funkos-d2411.appspot.com",
  messagingSenderId: "493509665334",
  appId: "1:493509665334:web:3d074b03043d9e04416e97"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
