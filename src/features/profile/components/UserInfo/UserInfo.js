import { Rating } from "react-simple-star-rating";
import { useUser } from "../../../../context/UserContext";
import UserInfoCSS from "./UserInfo.module.css";

function UserInfo() {
  const { user } = useUser();

  return (
    <div>
      <div className={UserInfoCSS["user-info-container"]}>
        <img
          src={
            user?.photoUrl === ""
              ? require("../../../../assets/profile_placeholder.png")
              : user?.photoUrl
          }
          alt={require("../../../../assets/profile_placeholder.png")}
          className={UserInfoCSS["profile-img"]}
        />
        <div className={UserInfoCSS["user-data-container"]}>
          <div>
            <h1 className={UserInfoCSS["user-name"]}>{user?.name}</h1>
            <div className={UserInfoCSS["reviews-data-container"]}>
              <Rating initialValue={user?.avgRating} readonly size={"20px"} />
              <p className={UserInfoCSS["reviews-count"]}>
                {user?.reviews} reviews
              </p>
            </div>
          </div>
          <p className={UserInfoCSS["about"]}>
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

export default UserInfo;
