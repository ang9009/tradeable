import ButtonCSS from "./Button.module.css";

function Button({ type, onClick, text }) {
  return (
    <button
      className={`${ButtonCSS[type]} ${ButtonCSS["all-btns"]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
