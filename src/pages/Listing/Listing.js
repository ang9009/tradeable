import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListingCarousel, ListingInfo } from "../../features/listing";
import ListingButtons from "../../features/listing/components/ListingButtons/ListingButtons";
import SellerWidget from "../../features/listing/components/SellerWidget/SellerWidget";
import { db, doc, getDoc, onSnapshot } from "../../lib/firebase";
import ListingCSS from "./Listing.module.css";

function Listing() {
  const { listingId } = useParams();
  const [listingData, setListingData] = useState({});
  const [seller, setSeller] = useState({});

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "listings", listingId), (res) => {
      const data = res.data();
      setListingData(data);

      const sellerRef = doc(db, "users", data.sellerId);
      getDoc(sellerRef).then((res) => {
        setSeller(res.data());
      });
    });

    // Detaches onSnapshot listener on component unmount
    return () => unsub();
  }, []);

  return (
    <div className={ListingCSS["page-container"]}>
      <ListingCarousel />
      <div className={ListingCSS["listing-details"]}>
        <ListingInfo listingData={listingData} />
        <div className={ListingCSS["divider"]}></div>
        <div className={ListingCSS["seller-section"]}>
          <SellerWidget seller={seller} />
          <ListingButtons sellerId={listingData.sellerId} />
        </div>
        <div className={ListingCSS["divider"]}></div>
        <div>
          <h1 className={ListingCSS["desc-title"]}>Description</h1>
          <p className={ListingCSS.desc}>{listingData?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Listing;
