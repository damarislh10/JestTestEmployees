import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASns-ILqlsK0IzkeeaNnn_HVVVznud3fQ",
  authDomain: "proyectoauthfront8.firebaseapp.com",
  projectId: "proyectoauthfront8",
  storageBucket: "proyectoauthfront8.appspot.com",
  messagingSenderId: "119743961533",
  appId: "1:119743961533:web:b8e517270b0d8e74999ad4"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}