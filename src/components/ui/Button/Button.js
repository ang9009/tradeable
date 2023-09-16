import ButtonCSS from "./Button.module.css";

function Button({ options: { type, text, className }, onClick, disabled }) {
  return (
    <button
      className={`${ButtonCSS[type]} ${ButtonCSS["all-btns"]}  ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={ButtonCSS["text-container"]}>
        <div>{text}</div>
      </div>
    </button>
  );
}

export default Button;
