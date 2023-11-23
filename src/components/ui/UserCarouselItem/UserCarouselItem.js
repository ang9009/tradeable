import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Tooltip } from "react-tooltip";
import checkImage from "../../../utils/checkImage";
import UsersCarouselItemCSS from "./UserCarouselItem.module.css";

function UserCarouselItem({ user }) {
  const navigate = useNavigate();
  const [userPhoto, setUserPhoto] = useState(
    require("../../../assets/profile_placeholder.png")
  );
  useEffect(() => {
    const userPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages/${user?.id}`;

    checkImage(userPhotoUrl).then((userPhotoExists) => {
      if (userPhotoExists) {
        setUserPhoto(userPhotoUrl);
      } else {
        setUserPhoto(require("../../../assets/profile_placeholder.png"));
      }
    });
  }, [user]);

  return (
    <div
      className={UsersCarouselItemCSS["user-container"]}
      onClick={() => navigate(`/profile/${user?.id}/listings`)}
    >
      <img
        src={userPhoto}
        alt=""
        className={UsersCarouselItemCSS["user-img"]}
      />
      <div className={UsersCarouselItemCSS["user-data-container"]}>
        <div className={UsersCarouselItemCSS["user-name"]}>
          <h1>{user?.name}</h1>
          {user?.isVerified && (
            <MdVerified
              size={"20px"}
              color={"var(--verified-color)"}
              data-tooltip-id="verified-tooltip"
              data-tooltip-content="User has verified their student email"
              className={UsersCarouselItemCSS["verified-icon"]}
            />
          )}
          <Tooltip id="verified-tooltip" />
        </div>
        <Rating
          initialValue={user?.avgRating}
          readonly
          size="15px"
          fillColor="var(--tradeable-burgundy)"
        />
      </div>
    </div>
  );
}

export default UserCarouselItem;
