import ButtonCSS from "./Button.module.css";

function Button({
  options: { type, text, className, notRounded },
  onClick,
  disabled,
}) {
  return (
    <button
      className={`${ButtonCSS[type]} ${ButtonCSS["all-btns"]}  ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{ borderRadius: notRounded && "5px" }}
    >
      <div className={ButtonCSS["text-container"]}>
        <div>{text}</div>
      </div>
    </button>
  );
}

export default Button;
