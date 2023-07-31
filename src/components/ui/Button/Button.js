import ButtonCSS from "./Button.module.css";

function Button({ type, onClick, text, styles }) {
  return (
    <button
      style={styles}
      className={`${ButtonCSS[type]} ${ButtonCSS["all-btns"]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
