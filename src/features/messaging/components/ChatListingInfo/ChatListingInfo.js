import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo() {
  return (
    <div className={ChatListingInfoCSS["component-container"]}>
      <img
        src={require("../../../../assets/authmodal_img.jpg")}
        alt=""
        className={ChatListingInfoCSS["listing-img"]}
      />
      <div className={ChatListingInfoCSS["listing-details"]}>
        <p className={ChatListingInfoCSS["listing-name"]}>
          TGR Jane Custom keyboard very long name very very very very very
        </p>
        <p className={ChatListingInfoCSS.price}>$240</p>
      </div>
    </div>
  );
}

export default ChatListingInfo;
