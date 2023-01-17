// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5W2TSsVH0Zjae_QWzTDZzeJXYUNGbW8w",
  authDomain: "messageboard-d4385.firebaseapp.com",
  projectId: "messageboard-d4385",
  storageBucket: "messageboard-d4385.appspot.com",
  messagingSenderId: "1042278595449",
  appId: "1:1042278595449:web:b336b308418a209ed88da8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
