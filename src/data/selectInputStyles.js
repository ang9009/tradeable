export const selectInputStyles = {
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "var(--secondary-text-color)",
  }),
  menuList: () => ({
    border: "1px solid var(--primary-border-color)",
    borderRadius: "5px",
    transform: "translateY(12px)",
    background: "#fff",
    boxShadow: "var(--box-shadow)",
  }),
  option: (_, state) => ({
    padding: "12px",
    background: state.isFocused && "#f6f6f6",
    transition: "all 0.2s",
    cursor: "pointer",
    "&:first-child": {
      borderRadius: "5px 5px 0 0",
    },
    "&:last-child": {
      borderRadius: "0 0 5px 5px",
    },
    "&:not(:last-child)": {
      borderBottom: "1px solid var(--primary-border-color)",
    },
  }),
};
