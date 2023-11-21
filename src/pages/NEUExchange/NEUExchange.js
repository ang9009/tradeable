import { FiMessageSquare, FiShoppingBag } from "react-icons/fi";
import NEUExchangeCSS from "./NEUExchange.module.css";

function NEUExchange() {
  return (
    <div className={NEUExchangeCSS["page-container"]}>
      <h1 className={NEUExchangeCSS["page-title"]}>How it works</h1>
      <div className={NEUExchangeCSS["step-container"]}>
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
            <FiShoppingBag size="25px" color="var(--tradeable-burgundy)" />
            <h1>Buy or sell</h1>
          </div>
          <p>
            Post the listing you want to sell, or find a listing that you’re
            interested in buying.
          </p>
        </div>
        <img
          src={require("../../assets/rice-cooker-browser.png")}
          alt="rice-cooker-browser"
          className={NEUExchangeCSS["buy-or-sell-img"]}
        />
      </div>
      <div className={NEUExchangeCSS["step-container"]}>
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
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
          src={require("../../assets/rice-cooker-browser.png")}
          alt="rice-cooker-browser"
          className={NEUExchangeCSS["buy-or-sell-img"]}
        />
      </div>
      <div className={NEUExchangeCSS["step-container"]}>
        <div className={NEUExchangeCSS["step-text-container"]}>
          <div className={NEUExchangeCSS["step-title-container"]}>
            <FiShoppingBag size="25px" color="var(--tradeable-burgundy)" />
            <h1>Trade and review</h1>
          </div>
          <p>
            Meet up and trade! Inspect before paying. Payments can be made
            through cash or digital transfers like Paypal. Leave reviews for
            each other after marking the listing as sold.
          </p>
        </div>
        <img
          src={require("../../assets/rice-cooker-browser.png")}
          alt="rice-cooker-browser"
          className={NEUExchangeCSS["buy-or-sell-img"]}
        />
      </div>
    </div>
  );
}

export default NEUExchange;
