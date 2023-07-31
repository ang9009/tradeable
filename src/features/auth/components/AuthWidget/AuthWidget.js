import React, { useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import { useIsFetchingUser, useUser } from "../../../../context/UserContext";
import AuthModal from "../AuthModal/AuthModal";
import UserWidget from "../UserWidget/UserWidget";
import Skeleton from "react-loading-skeleton";
import AuthWidgetCSS from "./AuthWidget.module.css";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";

function AuthWidget() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const user = useUser();
  const isFetchingUser = useIsFetchingUser();

  return (
    <>
      {/* Display skeleton if user is still being fetched, otherwise show user widget/buttons */}
      <div className={AuthWidgetCSS["auth-widget-container"]}>
        {isFetchingUser ? (
          // TODO: figure this out idk why the styles aren't applying
          <Skeleton
            className={AuthWidgetCSS["auth-widget-skeleton"]}
            width={"98.66px"}
          />
        ) : (
          <>
            {user ? (
              <>
                <UserActionsWidget />
                <UserWidget />
              </>
            ) : (
              <>
                <Button
                  type={"black-filled"}
                  text={"Sign in"}
                  className={AuthWidgetCSS["sign-in-btn"]}
                  onClick={() => {
                    setIsAuthModalOpen(true);
                  }}
                />
              </>
            )}
          </>
        )}
      </div>
      <AuthModal
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
    </>
  );
}

export default AuthWidget;
