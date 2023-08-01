export const selectInputStyles = {
  control: (_, state) => ({
    marginTop: "11px",
    outline: state.isFocused
      ? "var(--input-focus-border)"
      : "1px solid var(--primary-border-color)",
    padding: "10px 12px",
    borderRadius: "5px",
    height: "fit-content",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "var(--secondary-text-color)",
  }),
  menuList: () => ({
    border: "1px solid var(--primary-border-color)",
    borderRadius: "5px",
    transform: "translateY(12px)",
    background: "#fff",
  }),
  option: (_, state) => ({
    padding: "12px",
    background: state.isFocused && "#f6f6f6",
    transition: "all 0.2s",
    cursor: "pointer",
  }),
};
