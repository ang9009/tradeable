import { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Configure, DynamicWidgets, InstantSearch } from "react-instantsearch";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import {
  CustomInfiniteHits,
  CustomSearchBox,
  CustomSortby,
  CustomStats,
} from "../../features/search";
import CustomRefinementList from "../../features/search/components/CustomRefinementList/CustomRefinementList";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import "./Search.css";
import SearchCSS from "./Search.module.css";

const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: process.env.REACT_APP_TYPESENSE_API_KEY,
    nodes: [
      {
        host: process.env.REACT_APP_TYPESENSE_HOST,
        port: "443",
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: "name,description",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

function scrollRight() {
  const refinementItems = document.getElementById("refinement-items");
  refinementItems.scrollLeft += 500;
}

function scrollLeft() {
  const refinementItems = document.getElementById("refinement-items");
  refinementItems.scrollLeft -= 500;
}

function Search() {
  const [isScrolled, setIsScrolled] = useState(false);
  const refinementItems = useRef(null);

  return (
    <PageContainer type={"wide"}>
      <InstantSearch
        searchClient={searchClient}
        indexName="listings"
        routing={true}
      >
        <CustomSearchBox />
        <div className={SearchCSS["filter-and-sort-widgets"]}>
          <div className={SearchCSS["stats-and-sort-by-container"]}>
            <CustomSortby />
            <CustomStats />
          </div>
          {/* Wrapper is for positioning chevron nav */}
          <div className={SearchCSS["refinement-items-wrapper"]}>
            <MdChevronRight
              onClick={() => scrollRight()}
              size={"30px"}
              className={SearchCSS["refinement-nav-btn"]}
            />

            <div
              className={SearchCSS["refinement-items"]}
              id="refinement-items"
              ref={refinementItems}
            >
              <DynamicWidgets>
                <CustomRefinementList
                  attribute={"isExchange"}
                  className={SearchCSS["exchange-filter"]}
                />
              </DynamicWidgets>
              <DynamicWidgets>
                <CustomRefinementList
                  attribute={"category"}
                  className={SearchCSS["other-filters"]}
                />
              </DynamicWidgets>
            </div>
            <MdChevronLeft
              className={SearchCSS["refinement-nav-btn"]}
              onClick={() => scrollLeft()}
              size={"70px"}
            />
          </div>
        </div>
        <CustomInfiniteHits />
        <Configure filters="status:!=sold" />
      </InstantSearch>
    </PageContainer>
  );
}

export default Search;
