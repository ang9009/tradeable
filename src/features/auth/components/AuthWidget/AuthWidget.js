import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";
import UserWidget from "../UserWidget/UserWidget";
import AuthWidgetCSS from "./AuthWidget.module.css";

function AuthWidget({ changeNav, className }) {
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
                    user ? navigate("/create-listing") : navigate("/login");
                  }}
                />
                <div className={AuthWidgetCSS["buttons-container"]}>
                  <UserActionsWidget changeNav={changeNav} />
                  <UserWidget changeNav={changeNav} />
                </div>
              </>
            ) : (
              <>
                <Button
                  options={{
                    type: "no-outline",
                    text: "Log in",
                    className: AuthWidgetCSS["sign-in-btn"],
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                />
                <Button
                  options={{
                    type: "burgundy-filled",
                    text: "Sign up",
                    className: AuthWidgetCSS["sign-in-btn"],
                  }}
                  onClick={() => {
                    navigate("/signup");
                  }}
                />
              </>
            )}
          </>
        ) : (
          <Skeleton width={"80px"} height={"30px"} />
        )}
      </div>
    </div>
  );
}

export default AuthWidget;
