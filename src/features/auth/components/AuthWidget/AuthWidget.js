import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useIsFetchingUser, useUser } from "../../../../context/UserContext";
import AuthModal from "../AuthModal/AuthModal";
import { AuthWidgetButtons } from "./../AuthWidgetButtons/AuthWidgetButtons";
import AuthWidgetCSS from "./AuthWidget.module.css";

function AuthWidget() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const user = useUser();
  const isFetchingUser = useIsFetchingUser();

  return (
    <>
      <div className={AuthWidgetCSS["auth-widget-container"]}>
        {isFetchingUser ? (
          <>
            <Skeleton circle width={"35px"} height={"35px"} />
            <Skeleton width={"90px"} height={"35px"} />
          </>
        ) : (
          <AuthWidgetButtons
            user={user}
            setIsAuthModalOpen={setIsAuthModalOpen}
          />
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
