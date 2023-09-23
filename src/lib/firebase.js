import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getBlob,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";

// TODO: hide api key
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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
    status: "available",
  };

  await setDoc(doc(db, "listings", listingId), listing);
}

async function createUser(user) {
  const newUser = {
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
  };

  await setDoc(doc(db, "users", user.uid), newUser);
}

function getEditListingData(listingId, reset, setIsFetchingListing) {
  const listingRef = doc(db, "listings", listingId);
  getDoc(listingRef).then((res) => {
    const listingData = res.data();
    const imagePromises = [];

    for (let i = 0; i < listingData.imagesNum; i++) {
      const pathRef = ref(storage, `listingImages/${listingId}/${i + 1}`);
      imagePromises.push(getBlob(pathRef));
    }

    Promise.all(imagePromises).then(async (photos) => {
      reset({
        ...listingData,
        condition: {
          value: listingData.condition,
          label: listingData.condition,
        },
        category: {
          value: listingData.category,
          label: listingData.category,
        },
        meetUpLocations: listingData.meetUpLocations.map((location) => {
          return { value: location, label: location };
        }),
        photos: photos.map((blob, i) => {
          return { file: blob, url: URL.createObjectURL(blob) };
        }),
      });

      setIsFetchingListing(false);
    });
  });
}

export {
  auth,
  createUser,
  db,
  deleteDoc,
  deleteObject,
  doc,
  getDoc,
  getDownloadURL,
  getEditListingData,
  listAll,
  onSnapshot,
  onSubmitListing,
  provider,
  ref,
  setDoc,
  storage,
};
