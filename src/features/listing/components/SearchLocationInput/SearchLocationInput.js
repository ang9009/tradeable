import { useState } from "react";
import LocationCardGrid from "../LocationCardGrid/LocationCardGrid";
import { LocationSearchBar } from "../LocationSearchBar/LocationSearchBar";

function SearchLocationInput() {
  const [selected, setSelected] = useState([]);

  return (
    <>
      {selected.length !== 0 && <LocationCardGrid locations={selected} />}
      <LocationSearchBar selected={selected} setSelected={setSelected} />
    </>
  );
}

export default SearchLocationInput;
