import { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { db, doc, getDoc } from "../../../../lib/firebase";

function ListingRoute() {
  const { listingId } = useParams();
  const [isFetchingListing, setIsFetchingListing] = useState(true);
  const [listingExists, setListingExists] = useState(false);

  useEffect(() => {
    getDoc(doc(db, "listings", listingId)).then((res) => {
      setListingExists(res.exists());
      setIsFetchingListing(false);
    });
  }, []);

  return (
    <>
      {!isFetchingListing ? (
        listingExists ? (
          <Outlet />
        ) : (
          <Navigate to="/404" />
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default ListingRoute;
