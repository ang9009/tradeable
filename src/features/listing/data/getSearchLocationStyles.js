function getSearchLocationStyles() {
  const styles = {
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      marginRight: "10px",
      pointerEvents: "none",
    }),
    clearIndicator: (baseStyles) => ({
      ...baseStyles,
      position: "absolute",
      right: "12px",
      cursor: "pointer",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "var(--secondary-text-color)",
    }),
    menuList: () => ({
      border: "var(--primary-border)",
      borderRadius: "5px",
      transform: "translateY(12px)",
      background: "#fff",
      boxShadow: "var(--box-shadow)",
      maxHeight: "180px",
      overflowY: "auto",
    }),
    option: (_, state) => ({
      padding: "10px 12px",
      background: state.isFocused && "#f6f6f6",
      transition: "all 0.2s",
      cursor: "pointer",
      // The same as first-child, just using it to get rid of a console warning
    }),
    control: (_, state) => ({
      flexDirection: "row-reverse",
      outline: "var(--primary-border)",
      marginTop: "var(--input-margin-top)",
      padding: "10px 12px",
      borderRadius: "5px",
      height: "fit-content",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }),
  };

  return { ...styles };
}

export default getSearchLocationStyles;
