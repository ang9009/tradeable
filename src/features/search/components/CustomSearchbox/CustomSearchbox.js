import { FiSearch, FiX } from "react-icons/fi";
import { useSearchBox } from "react-instantsearch";
import CustomSearchboxCSS from "./CustomSearchbox.module.css";

function CustomSearchBox(props) {
  const { query, refine, clear } = useSearchBox(props);

  return (
    <div className={CustomSearchboxCSS["component-container"]}>
      <h1 className={`page-title ${CustomSearchboxCSS["query"]}`}>
        {query.trim() === "" ? "Search" : `Results for "${query}"`}
      </h1>
      <div className={CustomSearchboxCSS["search-box"]}>
        {query === "" ? (
          <FiSearch
            className={CustomSearchboxCSS["search-icon"]}
            size={"17px"}
          />
        ) : (
          <FiX
            className={CustomSearchboxCSS["x-icon"]}
            size={"17px"}
            onClick={() => clear()}
          />
        )}
        <input
          type="text"
          value={query}
          onChange={(e) => refine(e.target.value)}
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
}

export default CustomSearchBox;
