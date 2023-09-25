import ChatsListTabsCSS from "./ChatsListTabs.module.css";

function ChatsListTabs({ tab, setTab, setSelectedChat }) {
  function changeTab(tab) {
    setTab(tab);
    setSelectedChat([]);
  }

  return (
    <div className={ChatsListTabsCSS["tabs-container"]}>
      <button
        className={ChatsListTabsCSS["tab-btn"]}
        onClick={() => changeTab("buying")}
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
        onClick={() => changeTab("selling")}
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
