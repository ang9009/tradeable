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
      <LocationSearchBar formData={{ control, errors, getValues }} />
      {locations && locations.length !== 0 && (
        <LocationCardGrid locations={locations} />
      )}
    </>
  );
}

export default SearchLocationInput;
