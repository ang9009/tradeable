import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import checkImage from "../../../../utils/checkImage";
import { getMessageTime } from "../../../messaging";
import ReviewCSS from "./Review.module.css";

function Review({ review }) {
  // !SHould account for when listing does nto exist anymore (image)
  const navigate = useNavigate();
  const [userPhoto, setUserPhoto] = useState(
    require("../../../../assets/profile_placeholder.png")
  );
  const [listingPhoto, setListingPhoto] = useState(
    require("../../../../assets/placeholder_img.jpg")
  );

  useEffect(() => {
    const userPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages${review.userId}`;
    const listingPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/listingImages/${review.listingId}/1`;

    checkImage(userPhotoUrl).then((userPhotoExists) => {
      if (userPhotoExists) {
        console.log("exists");
        setUserPhoto(userPhotoUrl);
      }
    });

    checkImage(listingPhotoUrl).then((listingPhotoExists) => {
      if (listingPhotoExists) {
        setListingPhoto(listingPhotoUrl);
      }
    });
  }, []);

  return (
    <div className={ReviewCSS["review-container"]}>
      <div className={ReviewCSS["review-content"]}>
        <img
          src={userPhoto}
          alt="User image"
          className={ReviewCSS["user-img"]}
          onClick={() => navigate(`/profile/${review.userId}/listings`)}
        />
        <div className={ReviewCSS["review-text-container"]}>
          <div className={ReviewCSS["review-data-container"]}>
            <h1 onClick={() => navigate(`/profile/${review.userId}/listings`)}>
              {review.name}
            </h1>
            <p>{getMessageTime(review.timestamp)}</p>
          </div>
          <Rating
            fillColor={"var(--tradeable-burgundy)"}
            size={"20px"}
            initialValue={review.rating}
            readonly
          />
          <p>{review.message}</p>
          <p
            onClick={() => navigate(`/listing/${review.listingId}`)}
            className={ReviewCSS["listing-name"]}
          >
            Listing: "{review.listingName}"
          </p>
        </div>
      </div>
      <img
        className={ReviewCSS["listing-img"]}
        src={listingPhoto}
        alt="Listing image"
        onClick={() => navigate(`/listing/${review.listingId}`)}
      />
    </div>
  );
}

export default Review;
