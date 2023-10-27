import { doc, increment, setDoc, updateDoc } from "@firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../../../lib/firebase";

export default async function submitReview(data, e, userId) {
  e.preventDefault();

  const review = { message: data.message, rating: data.rating, userId: userId };
  await setDoc(doc(db, "reviews", uuid()), review);
  await updateDoc(doc(db, "users", userId), {
    reviews: increment(1),
  });
}
