import { useLayoutEffect } from "react";
import { useRefinementList } from "react-instantsearch";
import { useParams } from "react-router-dom";
import CustomRefinementListCSS from "./CustomRefinementList.module.css";

function CustomRefinementList({ attribute }) {
  const {
    items,
    hasExhaustiveItems,
    createURL,
    refine,
    sendEvent,
    searchForItems,
    isFromSearch,
    canRefine,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList({
    attribute: attribute,
    sortBy: ["count:desc", "name:asc"],
  });

  const { category } = useParams();
  useLayoutEffect(() => {
    refine("Electronics");
    console.log(items);
  }, [category]);

  return (
    <div className={CustomRefinementListCSS["list-container"]}>
      {items.map((item) => {
        return (
          <>
            <div
              className={CustomRefinementListCSS["refine-item"]}
              onClick={() => refine(item.label)}
              style={{
                background: item.isRefined && "#f1f1f1",
              }}
            >
              {item.label}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default CustomRefinementList;
