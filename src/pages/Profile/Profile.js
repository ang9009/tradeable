import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileButtons, ProfileUserInfo } from "../../features/profile";
import { ListingCard } from "../../features/search";
import { db } from "../../lib/firebase";
import ProfileCSS from "./Profile.module.css";

function Profile() {
  const userId = useParams().userId;
  const [isFetchingUser, setIsFetchingUser] = useState(true);
  const [profileUser, setProfileUser] = useState({});
  const [isListings, setIsListings] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userRef = doc(db, "users", userId);
    getDoc(userRef).then((res) => {
      if (res.data()) {
        setProfileUser(res.data());
        setIsFetchingUser(false);
      } else {
        navigate("/404");
      }
    });
  }, []);

  return (
    <div className={ProfileCSS["page-container"]}>
      <div className={ProfileCSS["profile-top-section"]}>
        {isFetchingUser ? (
          <div>
            <Skeleton height={"50px"} width={"500px"} />
            <Skeleton
              height={"50px"}
              width={"500px"}
              style={{ marginTop: "15px" }}
            />
          </div>
        ) : (
          <ProfileUserInfo user={profileUser} />
        )}
        <ProfileButtons />
      </div>
      <div className={ProfileCSS["profile-bottom-section"]}>
        <div className={ProfileCSS["profile-navbar"]}>
          <div className={ProfileCSS["profile-navbar-tabs"]}>
            <h1
              className={ProfileCSS["nav-tab"]}
              onClick={() => setIsListings(true)}
              style={{ color: isListings && "var(--tradeable-burgundy)" }}
            >
              Listings
              {isListings && <span className={ProfileCSS["highlight"]}></span>}
            </h1>
            <h1
              className={ProfileCSS["nav-tab"]}
              onClick={() => setIsListings(false)}
              style={{ color: !isListings && "var(--tradeable-burgundy)" }}
            >
              Reviews
              {!isListings && <span className={ProfileCSS["highlight"]}></span>}
            </h1>
          </div>
          <div className={ProfileCSS["profile-navbar-divider"]}></div>
        </div>
      </div>
      {isListings ? (
        <div className={ProfileCSS["listing-section"]}>
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      ) : (
        <div className={ProfileCSS["reviews-section"]}>Reviews</div>
      )}
    </div>
  );
}

export default Profile;
