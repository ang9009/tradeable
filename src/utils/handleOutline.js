// For inputs that have a hidden wrapper around the main input
export default function handleOutline(error, isFocused) {
  if (error) {
    return "var(--input-warning-border)";
  }

  return isFocused ? "var(--input-focus-border)" : "var(--primary-border)";
}
