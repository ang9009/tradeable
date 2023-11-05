export default function getSortbyStyles() {
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
      width: "max-content",
      left: 0,
    }),
    option: (_, state) => ({
      padding: "10px 12px",
      background: state.isFocused && "#f6f6f6",
      transition: "all 0.2s",
      cursor: "pointer",
      zIndex: 9999,
      width: "100%",

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
      width: "max-content",
      fontWeight: "bold",
      padding: "10px 12px",
      borderRadius: "5px",
      height: "fit-content",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      outline: state.isFocused
        ? "var(--input-focus-border)"
        : "var(--primary-border)",
    }),
  };

  return { ...styles };
}
