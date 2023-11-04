import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import { db } from "../../../../lib/firebase";
import Review from "../Review/Review";
import ProfileReviewsSectionCSS from "./ProfileReviewsSection.module.css";

function ProfileReviewsSection({ userId }) {
  const [reviews, setReviews] = useState([]);
  const [latestReview, setLatestReview] = useState(null);
  const [isFetchingReviews, setIsFetchingReviews] = useState(true);

  useEffect(() => {
    const reviewsRef = collection(db, "reviews");
    const reviewsQuery = query(
      reviewsRef,
      orderBy("timestamp", "desc"),
      limit(5),
      where("reviewedUserId", "==", userId)
    );
    getDocs(reviewsQuery).then((res) => {
      const reviews = [];

      res.forEach((doc) => {
        reviews.push(doc.data());
      });

      setReviews(reviews);
      setLatestReview(res.docs[res.docs.length - 1]);
      setIsFetchingReviews(false);
    });
  }, [userId]);

  async function getNewReviews() {
    const reviewsRef = collection(db, "reviews");
    let reviewsQuery = query(
      reviewsRef,
      orderBy("timestamp", "desc"),
      startAfter(latestReview),
      limit(5),
      where("reviewedUserId", "==", userId)
    );
    getDocs(reviewsQuery).then((res) => {
      if (res.docs.length === 0) {
        return;
      }

      const reviews = [];

      res.forEach((doc) => {
        reviews.push(doc.data());
      });

      setReviews((oldReviews) => [...oldReviews, ...reviews]);
      setLatestReview(res.docs[res.docs.length - 1]);
      setIsFetchingReviews(false);
    });
  }

  return (
    <>
      <div className={ProfileReviewsSectionCSS["reviews-section"]}>
        {reviews.length !== 0 && (
          <h1 className={ProfileReviewsSectionCSS.title}>Reviews</h1>
        )}
        <div className={ProfileReviewsSectionCSS["reviews-container"]}>
          {reviews.map((review) => (
            <Review review={review} />
          ))}
        </div>
      </div>
      {reviews.length !== 0 && !(reviews.length < 5) && (
        <Button
          options={{
            text: "Show more",
            type: "gray-outline",
            className: ProfileReviewsSectionCSS["load-more-btn"],
          }}
          onClick={() => getNewReviews()}
        />
      )}
      {reviews.length == 0 && (
        <div className={ProfileReviewsSectionCSS["no-listings-msg"]}>
          <img
            src={require("../../../../assets/empty_box.png")}
            className={ProfileReviewsSectionCSS["empty-box"]}
          ></img>
          <h1>This user doesn't have any reviews yet!</h1>
        </div>
      )}
    </>
  );
}

export default ProfileReviewsSection;
