import ProfileNavCSS from "./ProfileNav.module.css";

function ProfileNav({ setIsListings, isListings }) {
  return (
    <div className={ProfileNavCSS["profile-navbar"]}>
      <div className={ProfileNavCSS["profile-navbar-tabs"]}>
        <h1
          className={ProfileNavCSS["nav-tab"]}
          onClick={() => setIsListings(true)}
          style={{
            color: isListings && "var(--tradeable-burgundy)",
          }}
        >
          Listings
          {isListings && <span className={ProfileNavCSS["highlight"]}></span>}
        </h1>
        <h1
          className={ProfileNavCSS["nav-tab"]}
          onClick={() => setIsListings(false)}
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
