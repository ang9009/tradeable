import ButtonCSS from "./Button.module.css";

const Button = ({ type, onClick, text }) => {
  let buttonClass = "";

  switch (type) {
    case "grayOutline":
      buttonClass = "gray-outline-btn";
      break;
    case "blackFilled":
      buttonClass = "filled-black-btn";
      break;
    case "blackOutline":
      buttonClass = "black-outline-btn";
  }

  return (
    <button className={ButtonCSS[buttonClass]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
