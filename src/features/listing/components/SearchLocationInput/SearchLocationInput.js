import { useFormContext } from "react-hook-form";
import LocationCardGrid from "../LocationCardGrid/LocationCardGrid";
import { LocationSearchBar } from "../LocationSearchBar/LocationSearchBar";

function SearchLocationInput() {
  const {
    control,
    watch,
    formState: { errors },
    getValues,
  } = useFormContext();
  const locations = watch("meetupLocations");

  return (
    <>
      {locations && locations.length !== 0 && (
        <LocationCardGrid locations={locations} />
      )}
      <LocationSearchBar formData={{ control, errors, getValues }} />
    </>
  );
}

export default SearchLocationInput;
