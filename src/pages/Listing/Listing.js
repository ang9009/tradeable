import { ListingCarousel, ListingInfo } from "../../features/listing";
import ListingCSS from "./Listing.module.css";

function Listing() {
  return (
    <div className={ListingCSS["page-container"]}>
      <ListingCarousel />
      <div className={ListingCSS["listing-details"]}>
        <ListingInfo />
        <div className={ListingCSS.divider}></div>
      </div>
    </div>
  );
}

export default Listing;
