import ListingCardCSS from "./ListingCard.module.css";

function ListingCard() {
  return (
    <div className={ListingCardCSS["card-container"]}>
      <div className={ListingCardCSS["img-container"]}>
        <img
          src={require("../../../../assets/placeholder_img.jpg")}
          alt=""
          className={ListingCardCSS["listing-img"]}
        />
        {/* <div>
          <div className={ListingCardCSS["status-tag"]}>Reserved</div>
          <div className={ListingCardCSS["overlay"]}></div>
        </div> */}
      </div>
      <div className={ListingCardCSS["text-container"]}>
        <h1>Math textbook</h1>
        <p className={ListingCardCSS.condition}>Well used</p>
        <h1>£24</h1>
      </div>
    </div>
  );
}

export default ListingCard;
