// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7snvqsDj9lOGygbXztT8Pe909SrEimwE",
  authDomain: "chatapp-ddb74.firebaseapp.com",
  projectId: "chatapp-ddb74",
  storageBucket: "chatapp-ddb74.appspot.com",
  messagingSenderId: "531329362180",
  appId: "1:531329362180:web:0ac63783938e28d8acc851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const provider =new GoogleAuthProvider();
export const db=getFirestore(app);

