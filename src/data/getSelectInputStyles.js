function getSelectInputStyles(handleOutline) {
  const styles = {
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: "var(--secondary-text-color)",
      "@media only screen and (max-width: 600px)": {
        ...styles["@media only screen and (max-width: 600px)"],
        fontSize: "16px",
      },
    }),
    menuList: () => ({
      border: "var(--primary-border)",
      borderRadius: "5px",
      transform: "translateY(12px)",
      background: "#fff",
      boxShadow: "var(--box-shadow)",
    }),
    option: (_, state) => ({
      padding: "10px 12px",
      background: state.isFocused && "#f6f6f6",
      transition: "all 0.2s",
      cursor: "pointer",
      // The same as first-child, just using it to get rid of a console warning
      "&:first-of-type": {
        borderRadius: "5px 5px 0 0",
      },
      "&:last-child": {
        borderRadius: "0 0 5px 5px",
      },
      "&:not(:last-child)": {
        borderBottom: "var(--primary-border)",
      },
    }),
    control: (_, state) => ({
      marginTop: "var(--input-margin-top)",
      padding: "10px 12px",
      borderRadius: "5px",
      height: "fit-content",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      outline: handleOutline(state),
    }),
  };

  return { ...styles };
}

export default getSelectInputStyles;
