import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListingCarousel, ListingInfo } from "../../features/listing";
import ListingButtons from "../../features/listing/components/ListingButtons/ListingButtons";
import SellerWidget from "../../features/listing/components/SellerWidget/SellerWidget";
import {
  db,
  doc,
  getDoc,
  getDownloadURL,
  onSnapshot,
  ref,
  storage,
} from "../../lib/firebase";
import ListingCSS from "./Listing.module.css";

function Listing() {
  const { listingId } = useParams();
  const [listingData, setListingData] = useState({});
  const [seller, setSeller] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetches listing data, seller object, and images
    const unsub = onSnapshot(doc(db, "listings", listingId), (res) => {
      console.log("finished fetching photos ===================");
      const data = res.data();
      setListingData(data);

      // Seller object
      const sellerRef = doc(db, "users", data.sellerId);
      getDoc(sellerRef).then((res) => {
        setSeller(res.data());
      });

      // Images
      for (let i = 0; i < data.imagesNum; i++) {
        const pathRef = ref(storage, `listingImages/${listingId}/${i + 1}`);
        getDownloadURL(pathRef).then((url) => {
          setImages((prevImages) => {
            return [...prevImages, url];
          });
        });
      }
    });

    // Detaches onSnapshot listener on component unmount
    return () => unsub();
  }, []);

  return (
    <div className={ListingCSS["page-container"]}>
      <ListingCarousel images={images} imagesNum={listingData.imagesNum} />
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
