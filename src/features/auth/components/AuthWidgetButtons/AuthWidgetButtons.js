import React from "react";
import { Link } from "react-router-dom";
import AuthWidgetButtonsCSS from "./AuthWidgetButtons.module.css";
import Button from "../../../../components/ui/Button/Button";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";
import UserWidget from "../UserWidget/UserWidget";
import { useNavigate } from "react-router-dom";

export function AuthWidgetButtons({ user, setIsAuthModalOpen }) {
  const navigate = useNavigate();

  return (
    <>
      <Button
        options={{ type: "gray-outline", text: "Sell" }}
        onClick={() => {
          user ? navigate("/create-listing") : setIsAuthModalOpen(true);
        }}
      />
      {user ? (
        <>
          <UserActionsWidget />
          <UserWidget />
        </>
      ) : (
        <Button
          options={{ type: "black-filled", text: "Sign in" }}
          onClick={() => {
            setIsAuthModalOpen(true);
          }}
        />
      )}
    </>
  );
}
