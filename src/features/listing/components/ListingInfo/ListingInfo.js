import ListingInfoCSS from "./ListingInfoCSS.module.css";

function ListingInfo({ listingData }) {
  return (
    <div className={ListingInfoCSS["info-container"]}>
      <h1 className={ListingInfoCSS.title}>{listingData?.name}</h1>
      <div className={ListingInfoCSS.divider}></div>
      <div className={ListingInfoCSS["specs-container"]}>
        <p>
          Condition
          <span className={ListingInfoCSS.data}>{listingData.condition}</span>
        </p>
        <p>
          Posted<span className={ListingInfoCSS.data}>12-05-2023</span>
        </p>
        <p>
          Meet up locations
          <span className={ListingInfoCSS.data}>
            {listingData?.meetUpLocations?.map((location, i) => {
              const length = listingData.meetUpLocations.length;
              return i !== length - 1 ? (
                <span>{location}, </span>
              ) : (
                <span>{location}</span>
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
