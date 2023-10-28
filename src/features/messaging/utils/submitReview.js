import {
  average,
  collection,
  doc,
  getAggregateFromServer,
  getFirestore,
  increment,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../../../lib/firebase";

// !TODO: update so that it also reflects who posted it
export default async function submitReview(data, e, selectedChat, user) {
  e.preventDefault();

  // Updates the user's avgRating field
  const coll = collection(getFirestore(), "reviews");
  const q = query(
    coll,
    where("reviewedUserId", "==", selectedChat[1].userInfo.id)
  );
  const snapshot = await getAggregateFromServer(q, {
    avgRating: average("rating"),
  });
  const totalAvgRating = Math.round(
    (snapshot.data().avgRating + data.rating) / 2
  );
  await updateDoc(doc(db, "users", selectedChat[1].userInfo.id), {
    ["avgRating"]: totalAvgRating,
  });

  const review = {
    message: data.message,
    rating: data.rating,
    reviewedUserId: selectedChat[1].userInfo.id,
    userId: user.id,
    name: user.name,
  };
  await setDoc(doc(db, "reviews", uuid()), review);
  await updateDoc(doc(db, "users", selectedChat[1].userInfo.id), {
    reviews: increment(1),
  });

  let fieldToUpdate = "";

  if (selectedChat[1].type === "selling") {
    fieldToUpdate = "sellerHasReviewed";
  } else {
    fieldToUpdate = "buyerHasReviewed";
  }

  await updateDoc(doc(db, "listings", selectedChat[1].listing.id), {
    [fieldToUpdate]: true,
  });
}
