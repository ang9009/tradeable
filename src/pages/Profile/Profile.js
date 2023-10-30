import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import {
  ProfileButtons,
  ProfileNav,
  ProfileReviewsSection,
  ProfileUserInfo,
} from "../../features/profile";
import { ListingSection } from "../../features/search";
import { db } from "../../lib/firebase";
import ProfileCSS from "./Profile.module.css";

function Profile() {
  const userId = useParams().userId;
  const [isFetchingUser, setIsFetchingUser] = useState(true);
  const [profileUser, setProfileUser] = useState({});
  const [isListings, setIsListings] = useState(true);
  const [listings, setListings] = useState([]);
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

    const listingsRef = collection(db, "listings");
    const listingsQuery = query(
      listingsRef,
      orderBy("timestamp", "desc"),
      limit(8)
    );
    getDocs(listingsQuery).then((res) => {
      const listings = [];

      res.forEach((doc) => {
        listings.push(doc.data());
      });

      setListings(listings);
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
        <ProfileNav setIsListings={setIsListings} isListings={isListings} />
        {isListings ? (
          <ListingSection listings={listings} isProfile />
        ) : (
          <ProfileReviewsSection />
        )}
      </div>
    </div>
  );
}

export default Profile;
