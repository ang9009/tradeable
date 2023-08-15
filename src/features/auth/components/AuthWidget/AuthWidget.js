import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import AuthModal from "../AuthModal/AuthModal";
import { AuthWidgetButtons } from "./../AuthWidgetButtons/AuthWidgetButtons";
import AuthWidgetCSS from "./AuthWidget.module.css";

function AuthWidget({ changeNav, className }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useUser();
  const location = useLocation();
  const changeNavSeparator = {
    height: changeNav ? "100%" : "70%",
    backgroundColor: changeNav ? "var(--primary-border-color)" : "#fff",
  };
  const defaultSeparator = {
    height: "100%",
    backgroundColor: "var(--primary-border-color)",
  };

  return (
    <div className={className}>
      {user && (
        <div
          className={AuthWidgetCSS["separator"]}
          style={
            location.pathname === "/"
              ? { ...changeNavSeparator }
              : { ...defaultSeparator }
          }
        ></div>
      )}
      <div className={AuthWidgetCSS["auth-widget-container"]}>
        <AuthWidgetButtons
          setIsAuthModalOpen={setIsAuthModalOpen}
          changeNav={changeNav}
        />
      </div>
      <AuthModal
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
    </div>
  );
}

export default AuthWidget;
