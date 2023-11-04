import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import Button from "../../../../components/ui/Button/Button";

const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: process.env.REACT_APP_TYPESENSE_API_KEY, // Be sure to use a Search API Key
    nodes: [
      {
        host: process.env.REACT_APP_TYPESENSE_HOST, // where xxx is the ClusterID of your Typesense Cloud cluster
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

const NavSearchbar = () => {
  const Hit = ({ hit }) => (
    <p>
      {hit.title} - {hit.description}
    </p>
  );

  return <Button options={{ type: "black-outline", text: "Explore" }} />;
};

export default NavSearchbar;
