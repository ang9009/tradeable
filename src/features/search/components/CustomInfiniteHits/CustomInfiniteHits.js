import { useInfiniteHits } from "react-instantsearch";
import Button from "../../../../components/ui/Button/Button";
import ListingCard from "../ListingCard/ListingCard";
import CustomInfiniteHitsCSS from "./CustomInfiniteHits.module.css";

function CustomInfiniteHits(props) {
  const {
    hits,
    currentPageHits,
    results,
    isFirstPage,
    isLastPage,
    showPrevious,
    showMore,
    sendEvent,
  } = useInfiniteHits(props);

  return (
    <div className={CustomInfiniteHitsCSS["component-container"]}>
      <div className={CustomInfiniteHitsCSS["hits-container"]}>
        {hits.map((hit) => {
          return <ListingCard listing={hit} />;
        })}
      </div>
      {hits.length === 0 && (
        <div className={CustomInfiniteHitsCSS["no-listings-msg"]}>
          <img
            src={require("../../../../assets/empty_box.png")}
            className={CustomInfiniteHitsCSS["empty-box"]}
          ></img>
          <h1>No results found</h1>
          <p>Sorry, Lyla couldn't find any listings matching your query!</p>
        </div>
      )}
      {hits.length !== 0 && (
        <Button
          options={{
            text: "Show more",
            className: CustomInfiniteHitsCSS["show-more-btn"],
            type: "gray-outline",
          }}
          onClick={() => showMore()}
        />
      )}
    </div>
  );
}

export default CustomInfiniteHits;
