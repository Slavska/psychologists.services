import {
  SelectStyled,
  TextFilter,
} from "../PsychologistsList/PsychologistsList.styled";

const Filtered = ({ handleSortChange, sortOptionLabel, sortOption }) => {
  const customStyles = {
    option: (base) => ({
      ...base,
      border: "none",
      outline: "none",
      boxShadow: "none",
      padding: "4px 14px",
      borderRadius: "14px",
      margin: "0px",
      cursor: "pointer",
      fontFamily: "Inter",
      background: "#FFF",
      ":hover": {
        color: "#191A15",
      },
      ":active": {
        color: "#191A15",
      },
      ":focus": {
        color: "#191A15",
      },
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: "none",
      background: "FFF",
    }),
    menuList: (base) => ({
      ...base,
      background: "FFF",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,

      cursor: "pointer",
      borderRadius: "14px",
      fontFamily: "Inter",
      padding: "0px",
      background: "FFF",
      width: "226px",
      height: "216px",
      justifyСontent: "center",
      alignItems: "center",
      border: "#FFF",

      color: "rgba(25, 26, 21, 0.30)",
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      color: "#FFF",
      padding: "0px",
      margin: "0px",

      background: "FFF",
    }),

    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#FBFBFB",
      fontFamily: "Inter",
      cursor: "pointer",
      borderRadius: "14px",
      background: "FFF",
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      background: "FFF",
      color: "#FBFBFB",

      ":hover": {
        color: "#FFF",
      },
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      background: "#3470FF",
      borderRadius: "20px",
      boxShadow: "none",
      color: "#FFF",
      fontFamily: "Inter",
      width: "226px",
      padding: "16px 18px",

      ":active": {
        color: "#FFF",
      },
      ":focus": {
        color: "#FFF",
      },
      ":hover": {
        background: "rgba(52, 112, 255, 0.6)",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#FFF",
    }),
  };

  return (
    <>
      <div>
        <TextFilter>Filters</TextFilter>
        <SelectStyled
          value={sortOption}
          isSearchable={false}
          placeholder={sortOptionLabel}
          options={[
            { value: "default", label: "Show all" },
            { value: "A-Z", label: "A to Z" },
            { value: "Z-A", label: "Z to A" },
            { value: "price-low-to-high", label: "Price: Low to High" },
            { value: "price-high-to-low", label: "Price: High to Low" },
            {
              value: "popularity-high-to-low",
              label: "Popularity: High to Low",
            },
            {
              value: "popularity-low-to-high",
              label: "Popularity: Low to High",
            },
          ]}
          onChange={handleSortChange}
          styles={customStyles}
        />
      </div>
    </>
  );
};
export default Filtered;
