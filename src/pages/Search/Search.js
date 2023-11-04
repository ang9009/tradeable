import {
  DynamicWidgets,
  InstantSearch,
  RefinementList,
  SearchBox,
  SortBy,
  Stats,
} from "react-instantsearch";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import { CustomInfiniteHits, ListingCard } from "../../features/search";
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

function Search() {
  const Hit = ({ hit }) => {
    return <ListingCard listing={hit} />;
  };

  // !Add no results visual + category parameter
  return (
    <PageContainer type={"wide"}>
      <InstantSearch searchClient={searchClient} indexName="listings">
        <SearchBox className={SearchCSS["search-box"]} />
        <div className={SearchCSS["stats-and-sort-by-container"]}>
          <Stats />
          <SortBy
            items={[
              { label: "Sort: Default", value: "listings" },
              {
                label: "Sort: Price Ascending",
                value: "listings/sort/price:asc",
              },
              {
                label: "Sort: Price Descending",
                value: "listings/sort/price:desc",
              },
            ]}
          />
        </div>
        <div className={SearchCSS["listings-and-category-container"]}>
          <DynamicWidgets>
            <RefinementList
              attribute="category"
              sortBy={["count:desc", "name:asc"]}
            />
          </DynamicWidgets>
          <CustomInfiniteHits />
        </div>
      </InstantSearch>
    </PageContainer>
  );
}

export default Search;
