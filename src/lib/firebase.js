import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD4Wyke64R67ybAy7y9VO7phn33Pc5htvk",
  authDomain: "instagram-by-azam.firebaseapp.com",
  projectId: "instagram-by-azam",
  storageBucket: "instagram-by-azam.appspot.com",
  messagingSenderId: "999468761517",
  appId: "1:999468761517:web:1e6aed8341c9fd64e06124",
  measurementId: "G-ZCSKEMDSHN",
};

const firebase = Firebase.initializeApp(config);
const FieldValue = Firebase.firestore;

export { firebase, FieldValue };
