import {
  DynamicWidgets,
  InstantSearch,
  RefinementList,
} from "react-instantsearch";
import { useParams } from "react-router-dom";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import {
  CustomInfiniteHits,
  CustomSearchBox,
  CustomSortby,
  CustomStats,
  ListingCard,
} from "../../features/search";
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
    filterBy: "status:!=sold",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

function Search() {
  const Hit = ({ hit }) => {
    return <ListingCard listing={hit} />;
  };

  const { category } = useParams();

  // !Add no results visual + category parameter
  return (
    <PageContainer type={"wide"}>
      <InstantSearch searchClient={searchClient} indexName="listings">
        <CustomSearchBox />
        <div className={SearchCSS["stats-and-sort-by-container"]}>
          <CustomStats />
          <CustomSortby />
        </div>
        <div className={SearchCSS["listings-and-category-container"]}>
          <div>
            <h1 className={SearchCSS["categories-heading"]}>Category</h1>
            <DynamicWidgets>
              <RefinementList
                attribute="category"
                sortBy={["count:desc", "name:asc"]}
              />
            </DynamicWidgets>
          </div>
          <CustomInfiniteHits />
        </div>
      </InstantSearch>
    </PageContainer>
  );
}

export default Search;
