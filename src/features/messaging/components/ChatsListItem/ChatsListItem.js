import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../lib/firebase";
import ChatsListItemCSS from "./ChatsListItem.module.css";

function ChatsListItem({ chat, onClick }) {
  const [listing, setListing] = useState({});

  useEffect(() => {
    function getListing() {
      const listingRef = doc(db, "listings", chat[1].listingId);
      getDoc(listingRef).then((res) => {
        if (!res.exists()) {
          setListing(null);
        } else {
          setListing(res.data());
        }
      });
    }

    chat && getListing();
  }, [chat]);

  return (
    <div className={ChatsListItemCSS["component-container"]} onClick={onClick}>
      {listing ? (
        <>
          <div className={ChatsListItemCSS["user-info-container"]}>
            <p className={ChatsListItemCSS.username}>{chat[1].userInfo.name}</p>
            <p className={ChatsListItemCSS["last-msg-time"]}>1 minute ago</p>
          </div>
          <div className={ChatsListItemCSS["listing-info-container"]}>
            <div>
              <p className={ChatsListItemCSS["listing-title"]}>
                {listing.name}
              </p>
              <p className={ChatsListItemCSS["last-msg"]}>
                {chat[1].userInfo.lastMessage
                  ? chat[1].userInfo.lastMessage.text
                  : "No messages found"}
              </p>
            </div>
            <img
              src={require("../../../../assets/authmodal_img.jpg")}
              alt=""
              className={ChatsListItemCSS["listing-img"]}
            />
          </div>
        </>
      ) : (
        <div>Doesn't exist</div>
      )}
    </div>
  );
}

export default ChatsListItem;
