import { useStats } from "react-instantsearch";
import CustomStatsCSS from "./CustomStats.module.css";

function CustomStats() {
  const {
    hitsPerPage,
    nbHits,
    areHitsSorted,
    nbSortedHits,
    nbPages,
    page,
    processingTimeMS,
    query,
  } = useStats();

  return (
    <p className={CustomStatsCSS["message"]}>
      {nbHits} results found{" "}
      {/* {query !== "*" && (
        <span>
          for <span className={CustomStatsCSS["query"]}>{query}</span>
        </span>
      )} */}
    </p>
  );
}

export default CustomStats;
