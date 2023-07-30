import React, { useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import AuthModal from "../AuthModal/AuthModal";

function AuthWidget() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState("");

  return (
    <>
      <Button
        type={"black-filled"}
        text={"Register"}
        onClick={() => {
          setIsAuthModalOpen(true);
          setIsLogin(false);
        }}
      />
      <Button
        type={"gray-outline"}
        onClick={() => {
          setIsAuthModalOpen(true);
          setIsLogin(true);
        }}
        text={"Login"}
      />
      <AuthModal
        isOpen={isAuthModalOpen}
        setIsOpen={setIsAuthModalOpen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </>
  );
}

export default AuthWidget;
