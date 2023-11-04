import { FiChevronDown } from "react-icons/fi";
import { useSortBy } from "react-instantsearch";
import Select, { components } from "react-select";
import getSortbyStyles from "../../data/getSortbyStyles";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown size={"15px"} style={{ marginLeft: "5px" }} />
    </components.DropdownIndicator>
  );
};

function CustomSortby(props) {
  const { initialIndex, currentRefinement, options, refine, canRefine } =
    useSortBy({
      items: [
        { label: "Sort: Default", value: "listings" },
        {
          label: "Sort: Price Ascending",
          value: "listings/sort/price:asc",
        },
        {
          label: "Sort: Price Descending",
          value: "listings/sort/price:desc",
        },
      ],
    });

  return (
    <>
      <Select
        defaultValue={options[0]}
        name="color"
        options={options}
        components={{ DropdownIndicator }}
        styles={getSortbyStyles()}
        onChange={(e) => {
          refine(e.value);
        }}
        unstyled
        isSearchable={false}
      />
    </>
  );
}

export default CustomSortby;
