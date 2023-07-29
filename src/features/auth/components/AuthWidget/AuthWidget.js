import React, { useState } from "react";
import AuthWidgetCSS from "./AuthWidget.module.css";
import LoginModal from "../LoginModal/LoginModal";
import Button from "../../../../components/ui/Button/Button";

const AuthWidget = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  return (
    <>
      <Button type={"blackFilled"} text={"Register"} />
      <Button
        type={"grayOutline"}
        onClick={() => setLoginModalIsOpen(true)}
        text={"Login"}
      />
      <LoginModal isOpen={loginModalIsOpen} setIsOpen={setLoginModalIsOpen} />
    </>
  );
};

export default AuthWidget;
