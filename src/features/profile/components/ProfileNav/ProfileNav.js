import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import ProfileNavCSS from "./ProfileNav.module.css";

function ProfileNav({ isListings, userId }) {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className={ProfileNavCSS["profile-navbar"]}>
      <div className={ProfileNavCSS["profile-navbar-tabs"]}>
        <h1
          className={ProfileNavCSS["nav-tab"]}
          onClick={() => navigate(`/profile/${userId}/listings`)}
          style={{
            color: isListings && "var(--tradeable-burgundy)",
          }}
        >
          Listings
          {isListings && <span className={ProfileNavCSS["highlight"]}></span>}
        </h1>
        <h1
          className={ProfileNavCSS["nav-tab"]}
          onClick={() => navigate(`/profile/${userId}/reviews`)}
          style={{
            color: !isListings && "var(--tradeable-burgundy)",
          }}
        >
          Reviews
          {!isListings && <span className={ProfileNavCSS["highlight"]}></span>}
        </h1>
      </div>
      <div className={ProfileNavCSS["profile-navbar-divider"]}></div>
    </div>
  );
}

export default ProfileNav;
