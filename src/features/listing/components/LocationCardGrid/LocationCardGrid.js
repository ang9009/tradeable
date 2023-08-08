import isEqual from "lodash.isequal";
import { useFormContext } from "react-hook-form";
import { FiX } from "react-icons/fi";
import LocationCardGridCSS from "./LocationCardGrid.module.css";

function LocationCardGrid({ locations }) {
  const { setValue } = useFormContext();
  function handleDelete(currLocation) {
    setValue(
      "meetup-locations",
      locations.filter((location) => !isEqual(location, currLocation)),
      { shouldValidate: true }
    );
  }

  return (
    <div className={LocationCardGridCSS["cards-grid-container"]}>
      {locations.map((location) => {
        return (
          <div className={LocationCardGridCSS["card-container"]}>
            <FiX
              size={"17px"}
              className={LocationCardGridCSS["delete-btn"]}
              onClick={() => handleDelete(location)}
            />
            <h1 className={LocationCardGridCSS["location-name"]}>
              {location.label}
            </h1>
            <p className={LocationCardGridCSS["location-address"]}>
              {location.address}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default LocationCardGrid;
