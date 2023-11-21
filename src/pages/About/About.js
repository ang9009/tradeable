import CopyToClipboard from "react-copy-to-clipboard";
import {
  FiMessageSquare,
  FiPackage,
  FiPlus,
  FiShare,
  FiShoppingBag,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import AboutCSS from "./About.module.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className={AboutCSS["page-container"]}>
      <h1 className={AboutCSS["page-title"]}>How it works</h1>
      <div className={AboutCSS["step-container"]}>
        <div className={AboutCSS["step-text-container"]}>
          <div className={AboutCSS["step-title-container"]}>
            <FiShoppingBag size="25px" color="var(--tradeable-burgundy)" />
            <h1>Buy or sell</h1>
          </div>
          <p>
            Post the listing you want to sell, or find a listing that you’re
            interested in buying. Click the <FiPlus /> button in the navigation
            bar to post a listing.
          </p>
        </div>
        <img
          src={require("../../assets/rice-cooker-browser.png")}
          alt="rice-cooker-browser"
          className={AboutCSS["browser-img"]}
        />
      </div>
      <div className={AboutCSS["step-container"]}>
        <div className={AboutCSS["step-text-container"]}>
          <div className={AboutCSS["step-title-container"]}>
            <FiMessageSquare size="25px" color="var(--tradeable-burgundy)" />
            <h1>Negotiate</h1>
          </div>
          <p>
            Through chat, talk about the details of the listing, and when and
            where you can meet. Sellers can mark a listing as reserved for a
            buyer.
          </p>
        </div>
        <img
          src={require("../../assets/chat-browser.png")}
          alt="chat-browser"
          className={AboutCSS["browser-img"]}
        />
      </div>
      <div className={AboutCSS["step-container"]}>
        <div className={AboutCSS["step-text-container"]}>
          <div className={AboutCSS["step-title-container"]}>
            <FiPackage size="25px" color="var(--tradeable-burgundy)" />
            <h1>Trade and review</h1>
          </div>
          <p>
            Meet up and trade! Inspect before paying. Payments can be made
            through cash or digital transfer methods such as Paypal. Leave
            reviews for each other after marking the listing as sold.
          </p>
        </div>
        <img
          src={require("../../assets/review-browser.png")}
          alt="review-browser"
          className={AboutCSS["browser-img"]}
        />
      </div>
      <div className={AboutCSS["interested-section"]}>
        <div className={AboutCSS["interested-section-left"]}>
          <h1 className={AboutCSS["section-title"]}>Get started today</h1>
          <div className={AboutCSS["interested-section-btns"]}>
            <Button
              options={{
                type: "white-filled",
                text: "Sign up",
                className: AboutCSS["homepage-btn"],
              }}
              onClick={() => navigate("/signup")}
            />
            <CopyToClipboard text={"http://tradeable.gg/"}>
              <Button
                options={{
                  type: "black-filled",
                  text: (
                    <div className={AboutCSS["share-btn-content"]}>
                      <FiShare size={"17px"} />
                      <p>Share</p>
                    </div>
                  ),
                  className: AboutCSS["homepage-btn"],
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
          className={AboutCSS["interested-lyla"]}
        />
      </div>
    </div>
  );
}

export default About;
