import React, { useEffect, useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import AuthModal from "../AuthModal/AuthModal";
import { useUser, useUserUpdate } from "../../../../context/UserContext";
import UserWidget from "../UserWidget/UserWidget";

function AuthWidget() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState("");
  const user = useUser();

  return (
    <>
      {user ? (
        <UserWidget />
      ) : (
        <>
          <Button
            styles={{ marginLeft: "25px" }}
            type={"black-filled"}
            text={"Register"}
            onClick={() => {
              setIsAuthModalOpen(true);
              setIsLogin(false);
            }}
          />
          <Button
            styles={{ marginLeft: "25px" }}
            type={"gray-outline"}
            onClick={() => {
              setIsAuthModalOpen(true);
              setIsLogin(true);
            }}
            text={"Login"}
          />
        </>
      )}
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
