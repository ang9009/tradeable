import ButtonCSS from "./Button.module.css";

function Button({ type, onClick, text, className }) {
  return (
    <button
      className={`${ButtonCSS[type]} ${ButtonCSS["all-btns"]}  ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
