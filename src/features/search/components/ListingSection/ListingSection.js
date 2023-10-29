import ListingCard from "../ListingCard/ListingCard";
import ListingSectionCSS from "./ListingSection.module.css";

function ListingSection({ listings, isProfile }) {
  return (
    <>
      <div className={ListingSectionCSS["listing-section"]}>
        {listings?.map((listing) => (
          <ListingCard listing={listing} />
        ))}
      </div>
      {listings.length === 0 && (
        <div className={ListingSectionCSS["no-listings-msg"]}>
          <img
            src={require("../../../../assets/empty_box.png")}
            className={ListingSectionCSS["empty-box"]}
          ></img>
          {isProfile ? (
            <>
              <h1>This user doesn't have any listings yet!</h1>
              <p>Come back when they have posted something.</p>
            </>
          ) : (
            <>
              <h1>No results found</h1>
              <p>Sorry, Lyla couldn't find any listings matching your query!</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ListingSection;
