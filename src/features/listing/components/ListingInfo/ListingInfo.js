import ListingInfoCSS from "./ListingInfo.module.css";

function ListingInfo({ listingData }) {
  return (
    <div className={ListingInfoCSS["info-container"]}>
      <h1 className={ListingInfoCSS.title}>{listingData?.name}</h1>
      <div className={ListingInfoCSS["specs-container"]}>
        <p>
          Condition
          <span className={ListingInfoCSS.data}>{listingData.condition}</span>
        </p>
        <p>
          Posted
          <span className={ListingInfoCSS.data}>{listingData.postedDate}</span>
        </p>
        <p>
          Meet up locations
          <span className={ListingInfoCSS.data}>
            {/* Add commas to all locations except the last one */}
            {listingData?.meetUpLocations?.map((location, i) => {
              const length = listingData.meetUpLocations.length;
              return i !== length - 1 ? (
                <span key={location}>{location}, </span>
              ) : (
                <span key={location}>{location}</span>
              );
            })}
          </span>
        </p>
        <p>
          Category
          <span className={ListingInfoCSS.data}>{listingData.category}</span>
        </p>
        <h1 className={ListingInfoCSS.price}>£{listingData.price}</h1>
      </div>
    </div>
  );
}

export default ListingInfo;
