import CopyToClipboard from "react-copy-to-clipboard";
import {
  FiArchive,
  FiHelpCircle,
  FiMessageSquare,
  FiPackage,
  FiPlus,
  FiSearch,
  FiShare,
  FiShoppingBag,
  FiTruck,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import pdf from "../../files/terms.pdf";
import NEUExchangeCSS from "./NEUExchange.module.css";

function NEUExchange() {
  const navigate = useNavigate();

  return (
    <div className={NEUExchangeCSS["page-container"]}>
      <div className={NEUExchangeCSS["intro-section"]}>
        <h1 className={NEUExchangeCSS["page-title"]}>
          The Global Scholars Exchange Program
        </h1>
        <div className={NEUExchangeCSS["cards-container"]}>
          <div className={NEUExchangeCSS["card"]}>
            <div>
              <FiHelpCircle size="20px" color="var(--tradeable-burgundy)" />
              <h1>What is this?</h1>
            </div>
            <p>
              tradeable’s Global Scholars Exchange program allows NU London
              students and incoming students from NU Oakland or Boston to trade
              with each other between cycles.
            </p>
            <p>
              NU Oakland or Boston students should note that dorms do not
              provide some items that may be considered as essential, including
              cooking appliances such as kettles or rice cookers, electrical
              appliances such as air conditioners or fans, cleaning appliances
              such as vacuum cleaners or mops, or bedding.
            </p>
          </div>
          <div className={NEUExchangeCSS["card"]}>
            <div>
              <FiHelpCircle size="20px" color="var(--tradeable-burgundy)" />
              <h1>What are the benefits?</h1>
            </div>
            <p>
              Through the program, NU London students can recoup money on dorm
              purchases, and NU Oakland and Boston students get to save on dorm
              essentials.
            </p>
            <p>
              This program also promotes the sustainable reuse of dorm items,
              which aligns with Northeastern's sustainable values.
            </p>
          </div>
        </div>
        <div className={NEUExchangeCSS["scroll-hint"]}>
          <p>Scroll to learn more...</p>
        </div>
      </div>
      <h1 className={NEUExchangeCSS["page-title"]}>How it works</h1>
      <div className={NEUExchangeCSS["step-container"]}>
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
            <FiShoppingBag size="25px" color="var(--tradeable-burgundy)" />
            <h1>Selling items</h1>
          </div>
          <p>
            For NU London students: create a listing by clicking the <FiPlus />{" "}
            button in the navbar. Indicate that you intend to sell to NU Oakland
            or Boston students via the checkbox provided.
          </p>
        </div>
        <img
          src={require("../../assets/checkbox-browser.png")}
          alt="checkbox-browser"
          className={NEUExchangeCSS["browser-img"]}
        />
      </div>
      <div
        className={`${NEUExchangeCSS["step-container"]} ${NEUExchangeCSS["more-margin"]}`}
      >
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
            <FiSearch size="25px" color="var(--tradeable-burgundy)" />
            <h1>Explore</h1>
          </div>
          <p>
            For NU Oakland or Boston students: search for items offered by NU
            London students by filtering for items with the "NEU Exchange" tag,
            then click "message seller" on the page to inquire. You may also
            want to check if your housing provider has a policy on bringing
            electrical items, though it is unlikely that they do.
          </p>
        </div>
        <img
          src={require("../../assets/explore_browser.png")}
          alt="chat-browser"
          className={NEUExchangeCSS["browser-img"]}
        />
      </div>
      <div
        className={`${NEUExchangeCSS["step-container"]} ${NEUExchangeCSS["more-margin"]}`}
      >
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
            <FiMessageSquare size="25px" color="var(--tradeable-burgundy)" />
            <h1>Negotiate</h1>
          </div>
          <p>
            Through chat, discuss the details of the listing and the method of
            payment (e.g. PayPal). Sellers can mark a listing as reserved for a
            buyer. Payment should be made at this stage.
          </p>
        </div>
        <img
          src={require("../../assets/chat-browser.png")}
          alt="chat-browser"
          className={NEUExchangeCSS["browser-img"]}
        />
      </div>
      <div
        className={`${NEUExchangeCSS["step-container"]} ${NEUExchangeCSS["more-margin"]}`}
      >
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
            <FiTruck size="25px" color="var(--tradeable-burgundy)" />
            <h1>Delivery</h1>
          </div>
          <p>
            <strong>
              NU London sellers must label the item with the buyer's name and
              NUID.
            </strong>{" "}
            This will be used for proof of purchase. The item should be properly
            packaged for storage using the item's original packaging or a
            plastic bag.
          </p>
          <p>
            Sellers should then bring the item to campus to room 143 in Devon
            House, where it will be stored.{" "}
            <strong>The deadline for storage is December 16th.</strong> Buyers
            should request proof of delivery through chat.
          </p>
        </div>
        <img
          src={require("../../assets/delivery-browser.png")}
          alt="chat-browser"
          className={NEUExchangeCSS["browser-img"]}
        />
      </div>
      <div
        className={`${NEUExchangeCSS["step-container"]} ${NEUExchangeCSS["more-margin"]} ${NEUExchangeCSS["deliv-storage-step"]}`}
      >
        <div>
          <FiArchive size="25px" color="var(--tradeable-burgundy)" />
          <h1>Storage</h1>
        </div>
        <p>
          Items are stored at NU London from December 16th to January 14th at
          Devon House in room 143. It should be noted that the university is
          only responsible for storage of items, and has no other involvement in
          the program. For tradeable’s terms and conditions,{" "}
          <a target="_blank" href={pdf}>
            please see here
          </a>
          .
        </p>
      </div>
      <div
        className={`${NEUExchangeCSS["step-container"]} ${NEUExchangeCSS["more-margin"]}`}
      >
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
            <FiPackage size="25px" color="var(--tradeable-burgundy)" />
            <h1>Item pickup</h1>
          </div>
          <p>
            NU Oakland and Boston students pick up items from campus on January
            14th! NUID and name should match with item label as proof of
            purchase. Don't forget to leave a review! Items that are not picked
            up by the 29th will be donated to the British Heart Foundation.
          </p>
        </div>
        <img
          src={require("../../assets/review-browser.png")}
          alt="review-browser"
          className={NEUExchangeCSS["browser-img"]}
        />
      </div>
      <div className={NEUExchangeCSS["interested-section"]}>
        <div className={NEUExchangeCSS["interested-section-left"]}>
          <h1 className={NEUExchangeCSS["section-title"]}>Get started today</h1>
          <div className={NEUExchangeCSS["interested-section-btns"]}>
            <Button
              options={{
                type: "white-filled",
                text: "Sign up",
                className: NEUExchangeCSS["homepage-btn"],
              }}
              onClick={() => navigate("/signup")}
            />
            <CopyToClipboard text={"http://tradeable.gg/"}>
              <Button
                options={{
                  type: "black-filled",
                  text: (
                    <div className={NEUExchangeCSS["share-btn-content"]}>
                      <FiShare size={"17px"} />
                      <p>Share</p>
                    </div>
                  ),
                  className: NEUExchangeCSS["homepage-btn"],
                }}
                onClick={() =>
                  toast.success("Link copied to clipboard", {
                    autoClose: 3000,
                    theme: "colored",
                  })
                }
              />
            </CopyToClipboard>
          </div>
        </div>
        <img
          src={require("../../assets/verify_lyla_2.png")}
          alt=""
          className={NEUExchangeCSS["interested-lyla"]}
        />
      </div>
    </div>
  );
}

export default NEUExchange;
