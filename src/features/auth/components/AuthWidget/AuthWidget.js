import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import AuthModal from "../AuthModal/AuthModal";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";
import UserWidget from "../UserWidget/UserWidget";
import AuthWidgetCSS from "./AuthWidget.module.css";

function AuthWidget({ changeNav, className }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const location = useLocation();

  return (
    <div className={className}>
      <div className={AuthWidgetCSS["auth-widget-container"]}>
        {user ? (
          <>
            <Button
              options={{
                type: "black-outline",
                text: "Sell",
                className: AuthWidgetCSS["sell-btn"],
              }}
              onClick={() => {
                user ? navigate("/create-listing") : setIsAuthModalOpen(true);
              }}
            />
            <div className={AuthWidgetCSS["buttons-container"]}>
              <UserActionsWidget changeNav={changeNav} />
              <UserWidget changeNav={changeNav} />
            </div>
          </>
        ) : (
          <Button
            options={{
              type: "black-outline",
              text: "Sign in",
              className: AuthWidgetCSS["sign-in-btn"],
            }}
            onClick={() => {
              setIsAuthModalOpen(true);
            }}
          />
        )}
      </div>
      <AuthModal
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
    </div>
  );
}

export default AuthWidget;
