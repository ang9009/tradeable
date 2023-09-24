import ChatsListItemCSS from "./ChatsListItem.module.css";

function ChatsListItem({}) {
  return (
    <div className={ChatsListItemCSS["component-container"]}>
      <div className={ChatsListItemCSS["user-info-container"]}>
        <p className={ChatsListItemCSS.username}>Alan Au</p>
        <p className={ChatsListItemCSS["last-msg-time"]}>1 minute ago</p>
      </div>
      <div className={ChatsListItemCSS["listing-info-container"]}>
        <div>
          <p className={ChatsListItemCSS["listing-title"]}>
            TGR Jane ME V2 Custom Keyboard very cool edition
          </p>
          <p className={ChatsListItemCSS["last-msg"]}>stfu</p>
        </div>
        <img
          src={require("../../../../assets/authmodal_img.jpg")}
          alt=""
          className={ChatsListItemCSS["listing-img"]}
        />
      </div>
    </div>
  );
}

export default ChatsListItem;
