export const selectInputStyles = {
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
};
