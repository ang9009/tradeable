import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: hide api key
const firebaseConfig = {
  apiKey: "AIzaSyBplunqQBPKGiHdd5FCoJ5KZZ6RNZqlNQ8",
  authDomain: "tradeable-6ed31.firebaseapp.com",
  projectId: "tradeable-6ed31",
  storageBucket: "tradeable-6ed31.appspot.com",
  messagingSenderId: "450849674146",
  appId: "1:450849674146:web:ac534abf225c61750018fb",
  measurementId: "G-J2MX4443L4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

async function onSubmitListing(data, listingId, userId) {
  var nowDate = new Date();
  var date =
    nowDate.getDate() +
    "-" +
    (nowDate.getMonth() + 1) +
    "-" +
    nowDate.getFullYear();

  const listing = {
    name: data.name,
    condition: data.condition.value,
    category: data.category.value,
    price: data.price,
    description: data.description,
    meetUpLocations: data.meetUpLocations.map((location) => location.value),
    sellerId: userId,
    postedDate: date,
    imagesNum: data.photos.length,
  };

  await setDoc(doc(db, "listings", listingId), listing);

  const photos = data.photos.map((photoObj) => photoObj.file);
  const promises = photos.map((photo, i) => {
    const photoRef = ref(storage, `listingImages/${listingId}/${i + 1}`);
    return uploadBytes(photoRef, photo);
  });

  Promise.all(promises);
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
  getDownloadURL,
  onSnapshot,
  onSubmitListing,
  provider,
  ref,
  storage,
};
