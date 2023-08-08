// Adapted from https://komelin.com/blog/developing-custom-search-box-with-react-select
function handleInputChange(query, meta, setQuery) {
  if (meta.action !== "input-blur" && meta.action !== "menu-close") {
    setQuery(query);
  }
}

function noOptionsMessage(obj) {
  if (obj.inputValue.trim().length === 0) {
    return null;
  }

  return "No locations found";
}

function validateLocations(v, getValues) {
  const dealingMethods = getValues("dealingMethods");
  if (dealingMethods.includes("meetUp")) {
    return v.length !== 0 || "Please add at least one meet-up location";
  }
}

export { handleInputChange, noOptionsMessage, validateLocations };
