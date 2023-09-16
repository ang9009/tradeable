import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
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

async function onSubmitListing(data, listingId) {
  const listing = {
    name: data.name,
    condition: data.condition.value,
    category: data.category.value,
    price: data.price,
    description: data.description,
    meetUpLocations: data.meetUpLocations.value,
  };
  console.log(listing);

  await setDoc(doc(db, "listings", listingId), listing);

  const photos = data.photos.map((photoObj) => photoObj.file);
  photos.forEach(async (photo, i) => {
    const photoRef = ref(storage, `${listingId}/${i + 1}`);
    await uploadBytes(photoRef, photo);
  });
}

export { auth, db, doc, onSnapshot, onSubmitListing, provider };
