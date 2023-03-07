// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjzebxxH8gKFpbssrN8v_9DXjxmp7F4O0",
  authDomain: "ecomr-d7a50.firebaseapp.com",
  projectId: "ecomr-d7a50",
  storageBucket: "ecomr-d7a50.appspot.com",
  messagingSenderId: "155114976148",
  appId: "1:155114976148:web:bd14b341b058a14af1d581",
  measurementId: "G-9D3PJPXT4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const UserAuth = getAuth(app)
export const db = getFirestore(app)

export default app
