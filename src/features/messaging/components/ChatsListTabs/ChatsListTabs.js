import { useState } from "react";
import ChatsListTabsCSS from "./ChatsListTabs.module.css";

function ChatsListTabs() {
  const [tab, setTab] = useState("buyers");

  return (
    <div className={ChatsListTabsCSS["tabs-container"]}>
      <button
        className={ChatsListTabsCSS["tab-btn"]}
        onClick={() => setTab("buyers")}
        style={{
          borderBottom:
            tab === "buyers" && "2px solid var(--tradeable-burgundy)",
          color: tab === "buyers" && "var(--tradeable-burgundy)",
        }}
      >
        Buying from
      </button>
      <button
        className={ChatsListTabsCSS["tab-btn"]}
        onClick={() => setTab("sellers")}
        style={{
          borderBottom:
            tab === "sellers" && "2px solid var(--tradeable-burgundy)",
          color: tab === "sellers" && "var(--tradeable-burgundy)",
        }}
      >
        Selling to
      </button>
    </div>
  );
}

export default ChatsListTabs;
