import ListingCard from "../ListingCard/ListingCard";
import ListingSectionCSS from "./ListingSection.module.css";

function ListingSection({ listings }) {
  return (
    <div className={ListingSectionCSS["listing-section"]}>
      {listings?.map((listing) => (
        <ListingCard listing={listing} />
      ))}
    </div>
  );
}

export default ListingSection;
