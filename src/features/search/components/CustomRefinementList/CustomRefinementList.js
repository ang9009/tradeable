import { useRefinementList } from "react-instantsearch";
import CustomRefinementListCSS from "./CustomRefinementList.module.css";

function CustomRefinementList({ attribute, className }) {
  const { items, refine } = useRefinementList({
    attribute: attribute,
    sortBy: ["count:desc", "name:asc"],
  });

  console.log(items);

  return (
    <div className={CustomRefinementListCSS["list-container"]}>
      {items.map((item) => {
        return (
          <>
            {/* If it's "false", then it's the non-exchange filter, which shouldn't be rendered */}
            {item.label !== "false" && (
              <div
                className={`${CustomRefinementListCSS["refine-item"]} ${className}`}
                onClick={() => refine(item.label)}
                style={{
                  background: item.isRefined && "#f1f1f1",
                }}
              >
                {/* If it's true, then it's the exchange filter */}
                {item.label === "true" ? "NEU Exchange" : item.label}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default CustomRefinementList;
