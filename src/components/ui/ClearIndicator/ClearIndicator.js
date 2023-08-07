import { FiX } from "react-icons/fi";
import { components } from "react-select";

// For use in react-select based components only
function ClearIndicator(props) {
  return (
    <components.ClearIndicator {...props}>
      <FiX size={"17px"} />
    </components.ClearIndicator>
  );
}

export default ClearIndicator;
