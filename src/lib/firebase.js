import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: hide api key
const firebaseConfig = {
  apiKey: "AIzaSyC4jnEcYgCqb4MBA97TqMN9cEMGORMYo6w",
  authDomain: "shareable-91a3f.firebaseapp.com",
  projectId: "shareable-91a3f",
  storageBucket: "shareable-91a3f.appspot.com",
  messagingSenderId: "859197244604",
  appId: "1:859197244604:web:455f11ad7cfaa09fbefcb9",
  measurementId: "G-7L2MWTKFEG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
