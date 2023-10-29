// Adapted from https://komelin.com/blog/developing-custom-search-box-with-react-select
function noOptionsMessage(obj) {
  if (obj.inputValue.trim().length === 0) {
    return null;
  }

  return "No locations found";
}

function validateLocations(v) {
  return v.length !== 0 || "Please add at least one meet-up location";
}

export { noOptionsMessage, validateLocations };
