import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, doc, onSnapshot } from "../../../../lib/firebase";
import ListingInfoCSS from "./ListingInfoCSS.module.css";

function ListingInfo() {
  const { listingId } = useParams();
  const [listingData, setListingData] = useState({});

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "listings", listingId), (doc) => {
      setListingData(doc.data());
    });

    return () => unsub();
  }, []);

  return (
    <div className={ListingInfoCSS["info-container"]}>
      <h1 className={ListingInfoCSS.title}>{listingData?.name}</h1>
      <div className={ListingInfoCSS.divider}></div>
      <div className={ListingInfoCSS["specs-container"]}>
        <p>
          Condition<span>Well used</span>
        </p>
        <p>
          Posted<span>12-05-2023</span>
        </p>
        <p>
          Meet up location<span>{listingData?.meetUpLocations}</span>
        </p>
        <p>
          Category<span>Textbooks</span>
        </p>
        <h1 className={ListingInfoCSS.price}>$240</h1>
      </div>
    </div>
  );
}

export default ListingInfo;
