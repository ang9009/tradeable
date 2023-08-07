// Adapted from https://komelin.com/blog/developing-custom-search-box-with-react-select
const handleInputChange = (query, meta, setQuery) => {
  if (meta.action !== "input-blur" && meta.action !== "menu-close") {
    setQuery(query);
  }
};

export { handleInputChange };
