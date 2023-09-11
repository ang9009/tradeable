import ListingInfoCSS from "./ListingInfoCSS.module.css";

function ListingInfo() {
  return (
    <div className={ListingInfoCSS["info-container"]}>
      <h1 className={ListingInfoCSS.title}>
        TGR Jane V2 ME Custom Keyboard (Silver with Suave Blue Backplate)
      </h1>
      <div className={ListingInfoCSS["specs-container"]}>
        {Array.from(
          {
            length: 5,
          },
          () => (
            <p>
              Condition<span>Well used</span>
            </p>
          )
        )}
        <h1 className={ListingInfoCSS.price}>$240</h1>
      </div>
    </div>
  );
}

export default ListingInfo;
