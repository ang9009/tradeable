import { useFormContext } from "react-hook-form";
import LocationCardGrid from "../LocationCardGrid/LocationCardGrid";
import { LocationSearchBar } from "../LocationSearchBar/LocationSearchBar";

function SearchLocationInput() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const locations = watch("meetUpLocations");

  return (
    <>
      <LocationSearchBar formData={{ control, errors }} />
      {locations && locations.length !== 0 && (
        <LocationCardGrid locations={locations} />
      )}
    </>
  );
}

export default SearchLocationInput;
