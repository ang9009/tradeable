import { useFormContext } from "react-hook-form";
import LocationCardGrid from "../LocationCardGrid/LocationCardGrid";
import { LocationSearchBar } from "../LocationSearchBar/LocationSearchBar";

function SearchLocationInput() {
  const { control, watch } = useFormContext();
  const locations = watch("meetup-locations");

  return (
    <>
      {locations && locations.length !== 0 && (
        <LocationCardGrid locations={locations} />
      )}
      <LocationSearchBar formData={{ control }} />
    </>
  );
}

export default SearchLocationInput;
