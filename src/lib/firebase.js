import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
  deleteUser,
} from "firebase/auth";

// db
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

// Sign in
const auth = getAuth();
const provider = new GoogleAuthProvider();
async function signIn(setIsAuthModalOpen) {
  await signInWithPopup(auth, provider).then((result) => {
    const isNewUser = getAdditionalUserInfo(result).isNewUser;

    if (isNewUser) {
      deleteUser(result.user);
      throw Error("You don't have an account yet! Sign up instead.");
    }

    setIsAuthModalOpen(false);
  });
}

// Register
async function register(setIsAuthModalOpen) {
  await signInWithPopup(auth, provider).then((result) => {
    setIsAuthModalOpen(false);
  });
}

export { db, signIn, register };
