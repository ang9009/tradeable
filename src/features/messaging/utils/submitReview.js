import { doc, increment, setDoc, updateDoc } from "@firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../../../lib/firebase";

export default async function submitReview(data, e, selectedChat) {
  e.preventDefault();

  const review = {
    message: data.message,
    rating: data.rating,
    userId: selectedChat[1].userInfo.id,
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
