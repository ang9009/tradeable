// Adapted from https://komelin.com/blog/developing-custom-search-box-with-react-select
const handleInputChange = (query, meta, setQuery) => {
  if (meta.action !== "input-blur" && meta.action !== "menu-close") {
    setQuery(query);
  }
};

const noOptionsMessage = (obj) => {
  if (obj.inputValue.trim().length === 0) {
    return null;
  }

  return "No locations found";
};

export { handleInputChange, noOptionsMessage };
