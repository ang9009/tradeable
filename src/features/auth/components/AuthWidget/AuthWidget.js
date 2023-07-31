import React, { useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import { useIsFetchingUser, useUser } from "../../../../context/UserContext";
import AuthModal from "../AuthModal/AuthModal";
import UserWidget from "../UserWidget/UserWidget";
import Skeleton from "react-loading-skeleton";
import AuthWidgetCSS from "./AuthWidget.module.css";

function AuthWidget() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const user = useUser();
  const isFetchingUser = useIsFetchingUser();

  return (
    <>
      {/* Display skeleton if user is still being fetched, otherwise show user widget/buttons */}
      <div className={AuthWidgetCSS["widget-container"]}>
        {isFetchingUser ? (
          <Skeleton height={"35px"} width={"98.66px"} />
        ) : (
          <>
            {user ? (
              <UserWidget />
            ) : (
              <>
                <Button
                  type={"black-filled"}
                  text={"Register/Login"}
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
