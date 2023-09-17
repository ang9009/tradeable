import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
const storage = getStorage();

async function onSubmitListing(data, listingId, userId) {
  const listing = {
    name: data.name,
    condition: data.condition.value,
    category: data.category.value,
    price: data.price,
    description: data.description,
    meetUpLocations: data.meetUpLocations.map((location) => location.value),
    sellerId: userId,
  };

  await setDoc(doc(db, "listings", listingId), listing);

  const photos = data.photos.map((photoObj) => photoObj.file);
  photos.forEach(async (photo, i) => {
    const photoRef = ref(storage, `${listingId}/${i + 1}`);
    await uploadBytes(photoRef, photo);
  });
}

async function createUser(user) {
  const newUser = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };

  await setDoc(doc(db, "users", user.uid), newUser);
}

export {
  auth,
  createUser,
  db,
  doc,
  getDoc,
  onSnapshot,
  onSubmitListing,
  provider,
};
