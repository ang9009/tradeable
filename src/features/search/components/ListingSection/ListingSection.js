import Skeleton from "react-loading-skeleton";
import ListingCard from "../ListingCard/ListingCard";
import ListingSectionCSS from "./ListingSection.module.css";

function ListingSection({ listings, isProfile, isFetchingListing }) {
  return (
    <>
      {!isFetchingListing ? (
        <>
          {" "}
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
                  <p>Come back when they have posted something</p>
                </>
              ) : (
                <>
                  <h1>No results found</h1>
                  <p>
                    Sorry, Lyla couldn't find any listings matching your query!
                  </p>
                </>
              )}
            </div>
          )}
        </>
      ) : (
        <div className={ListingSectionCSS["listing-section"]}>
          {Array.from({ length: 8 }, (_, i) => i + 1).map(() => {
            return <Skeleton className={ListingSectionCSS["skeleton-card"]} />;
          })}
        </div>
      )}
    </>
  );
}

export default ListingSection;
