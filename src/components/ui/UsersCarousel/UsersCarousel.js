import UserCarouselItem from "../UserCarouselItem/UserCarouselItem";
import UsersCarouselCSS from "./UsersCarousel.module.css";

function UsersCarousel({ users }) {
  return (
    <div className={UsersCarouselCSS["carousel-container"]}>
      {users.map((user) => {
        return <UserCarouselItem user={user} />;
      })}
    </div>
  );
}

export default UsersCarousel;
