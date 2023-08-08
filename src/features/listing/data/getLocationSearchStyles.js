function getLocationSearchStyles() {
  const styles = {
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      marginRight: "10px",
      pointerEvents: "none",
    }),
    clearIndicator: (baseStyles) => ({
      display: "none",
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
      overflowX: "hidden",
    }),
    option: (_, state) => ({
      padding: "10px 12px",
      background: state.isFocused && "#f6f6f6",
      transition: "all 0.2s",
      cursor: "pointer",
      // The same as first-child, just using it to get rid of a console warning
    }),
    control: (_, state) => ({
      padding: "10px 12px",
      outline: state.isFocused
        ? "var(--input-focus-border)"
        : "var(--primary-border)",
      flexDirection: "row-reverse",
      marginTop: "var(--input-margin-top)",
      borderRadius: "5px",
      height: "fit-content",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }),
    loadingIndicator: () => ({
      display: "none",
    }),
    noOptionsMessage: () => ({
      padding: "10px 12px",
      color: "var(--secondary-text-color)",
    }),
    loadingMessage: () => ({
      padding: "10px 12px",
      color: "var(--secondary-text-color)",
    }),
  };

  return { ...styles };
}

export default getLocationSearchStyles;
