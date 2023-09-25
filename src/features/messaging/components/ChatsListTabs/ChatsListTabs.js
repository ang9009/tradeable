import ChatsListTabsCSS from "./ChatsListTabs.module.css";

function ChatsListTabs({ tab, setTab }) {
  return (
    <div className={ChatsListTabsCSS["tabs-container"]}>
      <button
        className={ChatsListTabsCSS["tab-btn"]}
        onClick={() => setTab("buying")}
        style={{
          borderBottom:
            tab === "buying" && "2px solid var(--tradeable-burgundy)",
          color: tab === "buying" && "var(--tradeable-burgundy)",
        }}
      >
        Buying from
      </button>
      <button
        className={ChatsListTabsCSS["tab-btn"]}
        onClick={() => setTab("selling")}
        style={{
          borderBottom:
            tab === "selling" && "2px solid var(--tradeable-burgundy)",
          color: tab === "selling" && "var(--tradeable-burgundy)",
        }}
      >
        Selling to
      </button>
    </div>
  );
}

export default ChatsListTabs;
