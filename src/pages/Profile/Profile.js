import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { ProfileButtons, ProfileUserInfo } from "../../features/profile";
import { db } from "../../lib/firebase";
import ProfileCSS from "./Profile.module.css";

function Profile() {
  const userId = useParams().userId;
  const [isFetchingUser, setIsFetchingUser] = useState(true);
  const [profileUser, setProfileUser] = useState({});

  useEffect(() => {
    const userRef = doc(db, "users", userId);
    getDoc(userRef).then((res) => {
      setProfileUser(res.data());
      setIsFetchingUser(false);
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
    </div>
  );
}

export default Profile;
