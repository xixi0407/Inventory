// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVS4e-pMbtLT49LGf3ITC4CtHAgYvtvGk",
  authDomain: "inventory-xf.firebaseapp.com",
  projectId: "inventory-xf",
  storageBucket: "inventory-xf.appspot.com",
  messagingSenderId: "1011431317649",
  appId: "1:1011431317649:web:0f6e4568d5f72a5c1c5f30",
  measurementId: "G-KDHDGH78DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app)

export {firestore}