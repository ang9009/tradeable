import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ListingButtons,
  ListingCarousel,
  ListingInfo,
  SellerWidget,
} from "../../features/listing";
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
  const navigate = useNavigate();
  const [listingData, setListingData] = useState({});
  const [seller, setSeller] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetches listing data, seller object, and images
    const unsub = onSnapshot(doc(db, "listings", listingId), (res) => {
      const data = res.data();
      setListingData(data);

      // Seller object
      const sellerRef = doc(db, "users", data.sellerId);
      getDoc(sellerRef).then((res) => {
        setSeller(res.data());
      });

      // Images
      const imagePromises = [];

      for (let i = 0; i < data.imagesNum; i++) {
        const pathRef = ref(storage, `listingImages/${listingId}/${i + 1}`);
        imagePromises.push(getDownloadURL(pathRef));
      }

      Promise.all(imagePromises).then((images) => {
        setImages(images);
      });
    });

    // Detaches onSnapshot listener on component unmount
    return () => unsub();
  }, []);

  return (
    <div className={ListingCSS["page-container"]}>
      <ListingCarousel
        className={ListingCSS["carousel-container"]}
        images={images}
        imagesNum={listingData.imagesNum}
        status={listingData.status}
      />
      <div className={ListingCSS["listing-details"]}>
        <ListingInfo listingData={listingData} />
        <div className={ListingCSS["divider"]}></div>
        <div className={ListingCSS["seller-section"]}>
          <SellerWidget seller={seller} />
          <ListingButtons
            sellerId={listingData.sellerId}
            listingId={listingId}
            status={listingData.status}
          />
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
