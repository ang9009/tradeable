import emailjs from "@emailjs/browser";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  getAuth,
} from "firebase/auth";
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getFunctions } from "firebase/functions";
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
const functions = getFunctions(app);
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
    id: listingId,
    condition: data.condition.value,
    category: data.category.value,
    price: data.price,
    description: data.description,
    meetUpLocations: data.meetUpLocations,
    isExchange: data.isExchange,
    sellerId: userId,
    buyerId: "",
    postedDate: date,
    timestamp: Date.now(),
    imagesNum: data.photos.length,
    status: "available",
    buyerHasReviewed: false,
    sellerHasReviewed: false,
  };

  await setDoc(doc(db, "listings", listingId), listing);
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

    console.log(listingData.isExchange);

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
        isExchange: listingData.isExchange,
        meetUpLocations: listingData.meetUpLocations,
        photos: photos.map((blob, i) => {
          return { file: blob, url: URL.createObjectURL(blob) };
        }),
      });

      setIsFetchingListing(false);
    });
  });
}

async function createChat(user, sellerId, listingId, listingName) {
  try {
    // Seller and buyer should be able to buy things from each other, so listingId is added to differentiate
    // However, we also need to be able to fetch the same chat for both users from the chats collection
    // Thus, chatIdPrefix ensures that the same id can be reproduced
    const chatIdPrefix =
      user.id > sellerId ? user.id + sellerId : sellerId + user.id;
    const chatId = listingId + chatIdPrefix;
    const res = await getDoc(doc(db, "chats", chatId));

    if (res.exists()) {
      return;
    }

    // userChats stores the list of chats for each user
    // Updates user chat for seller
    await updateDoc(doc(db, "userChats", sellerId), {
      [chatId + ".userInfo"]: {
        id: user.id,
        name: user.name,
        photoUrl: user.photoUrl,
        email: user.email,
      },
      [chatId + ".listing"]: {
        id: listingId,
        buyerId: "",
      },
      [chatId + ".type"]: "selling",
      [chatId + ".date"]: Date.now(),
    });

    // Updates user chat for user
    const sellerRes = await getDoc(doc(db, "users", sellerId));
    const seller = sellerRes.data();

    await updateDoc(doc(db, "userChats", user.id), {
      [chatId + ".userInfo"]: {
        id: sellerId,
        name: seller.name,
        photoUrl: seller.photoUrl,
        email: seller.email,
      },
      [chatId + ".listing"]: {
        id: listingId,
        buyerId: "",
      },
      [chatId + ".type"]: "buying",
      [chatId + ".date"]: Date.now(),
    });

    // Creates a new chat between two users holding the messages in that chat
    await setDoc(doc(db, "chats", chatId), {
      chatId: chatId,
      chatData: {
        sellerId: seller.id,
        buyerId: user.id,
      },
      messages: [],
    });

    // Creates notification data object
    await setDoc(doc(db, "chatNotifications", chatId), {
      sellerLastNotified: serverTimestamp(),
      buyerLastNotified: serverTimestamp(),
      recipientName: seller.name,
      recipientEmail: seller.email,
      recipientId: seller.id,
    });

    // Send email notification
    emailjs.send(
      "service_syzjwtw",
      "template_4fhopp4",
      {
        buyer_name: user.name,
        seller_name: seller.name,
        seller_email: seller.email,
        listing_name: listingName,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );
  } catch (err) {
    console.log(err);
  }
}

async function getChatListings(userChats) {
  // Fetching listings
  const listingPromises = [];
  const listingImgPromises = [];

  userChats.forEach((chat) => {
    const listingRef = doc(db, "listings", chat[1].listing.id);
    const listingPromise = getDoc(listingRef);
    listingPromises.push(listingPromise);
  });

  const listingSnapshots = await Promise.all(listingPromises);
  const listings = listingSnapshots.map((listing) => listing.data());

  listings.forEach((listing) => {
    if (listing) {
      const imgRef = ref(storage, `listingImages/${listing.id}/1`);
      const listingImgPromise = getDownloadURL(imgRef);
      listingImgPromises.push(listingImgPromise);
    } else {
      listingImgPromises.push(null);
    }
  });

  const listingImgs = await Promise.all(listingImgPromises);
  const listingsAndImgs = listings.map((listing, i) => {
    if (listing) {
      return { ...listing, photoUrl: listingImgs[i] };
    } else {
      return null;
    }
  });

  return listingsAndImgs;
}

export {
  app,
  auth,
  createChat,
  db,
  deleteDoc,
  deleteObject,
  doc,
  functions,
  getAdditionalUserInfo,
  getChatListings,
  getDoc,
  getDocs,
  getDownloadURL,
  getEditListingData,
  listAll,
  onSnapshot,
  onSubmitListing,
  provider,
  ref,
  serverTimestamp,
  setDoc,
  storage,
  updateDoc,
};
