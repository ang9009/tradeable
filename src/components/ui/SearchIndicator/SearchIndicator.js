import { BiSearch } from "react-icons/bi";
import { components } from "react-select";

// For use in react-select based search components only
function SearchIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <BiSearch size={"17px"} />
    </components.DropdownIndicator>
  );
}

export default SearchIndicator;
