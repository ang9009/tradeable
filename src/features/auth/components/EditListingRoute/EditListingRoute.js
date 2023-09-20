import { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import { db, doc, getDoc } from "../../../../lib/firebase";

// For redirecting users if they try to edit someone else's listing
function EditListingRoute() {
  const { listingId } = useParams();
  const { user, isFetchingUser } = useUser();
  const [isFetchingListing, setIsFetchingListing] = useState(true);
  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    const listingRef = doc(db, "listings", listingId);
    getDoc(listingRef).then((res) => {
      const listingData = res.data();
      setSellerId(listingData.sellerId);
      setIsFetchingListing(false);
    });
  }, []);

  return isFetchingUser || isFetchingListing ? (
    <></>
  ) : user.uid === sellerId ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default EditListingRoute;
