import { useState } from "react";
import { useUser } from "../../../../context/UserContext";
import AuthModal from "../AuthModal/AuthModal";
import { AuthWidgetButtons } from "./../AuthWidgetButtons/AuthWidgetButtons";
import AuthWidgetCSS from "./AuthWidget.module.css";

function AuthWidget({ isHero }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useUser();

  return (
    <>
      {user && (
        <div
          className={AuthWidgetCSS["separator"]}
          style={{ height: isHero ? "70%" : "100%" }}
        ></div>
      )}
      <div className={AuthWidgetCSS["auth-widget-container"]}>
        <AuthWidgetButtons
          isHero={isHero}
          setIsAuthModalOpen={setIsAuthModalOpen}
        />
      </div>
      <AuthModal
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
    </>
  );
}

export default AuthWidget;
