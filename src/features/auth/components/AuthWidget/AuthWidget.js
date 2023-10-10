import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import AuthModal from "../AuthModal/AuthModal";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";
import UserWidget from "../UserWidget/UserWidget";
import AuthWidgetCSS from "./AuthWidget.module.css";

function AuthWidget({ changeNav, className }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isFetchingUser } = useUser();

  return (
    <div className={className}>
      <div className={AuthWidgetCSS["auth-widget-container"]}>
        {!isFetchingUser ? (
          <>
            {user ? (
              <>
                <Button
                  options={{
                    type: "gray-outline",
                    text: "Sell",
                    className: AuthWidgetCSS["sell-btn"],
                  }}
                  onClick={() => {
                    user
                      ? navigate("/create-listing")
                      : setIsAuthModalOpen(true);
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
          </>
        ) : (
          <Skeleton width={"80px"} height={"30px"} />
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
