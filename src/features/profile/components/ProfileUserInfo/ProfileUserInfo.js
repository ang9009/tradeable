import { Rating } from "react-simple-star-rating";
import ProfileUserInfoCSS from "./ProfileUserInfo.module.css";

function ProfileUserInfo({ user }) {
  return (
    <div>
      <div className={ProfileUserInfoCSS["user-info-container"]}>
        <img
          src={
            user?.photoUrl === ""
              ? require("../../../../assets/profile_placeholder.png")
              : user?.photoUrl
          }
          alt={require("../../../../assets/profile_placeholder.png")}
          className={ProfileUserInfoCSS["profile-img"]}
        />
        <div className={ProfileUserInfoCSS["user-data-container"]}>
          <div>
            <h1 className={ProfileUserInfoCSS["user-name"]}>{user?.name}</h1>
            <div className={ProfileUserInfoCSS["reviews-data-container"]}>
              <Rating
                initialValue={user?.avgRating}
                readonly
                size={"20px"}
                fillColor={"var(--tradeable-burgundy)"}
              />
              <p className={ProfileUserInfoCSS["reviews-count"]}>
                {user?.reviews} reviews
              </p>
            </div>
          </div>
          <p className={ProfileUserInfoCSS["about"]}>
            My name is Barry Allen and I am the fastest man alive. To the
            outside world, I am an ordinary forensic scientist, but secretly
            with the help of my friends in S.T.A.R. Labs, I fight crime and find
            other meta-humans like me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserInfo;
