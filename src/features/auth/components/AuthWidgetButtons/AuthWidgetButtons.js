import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";
import UserWidget from "../UserWidget/UserWidget";

export function AuthWidgetButtons({ setIsAuthModalOpen, changeNav }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const location = useLocation();

  function handleButtonType() {
    if (location.pathname === "/") {
      return changeNav ? "black-outline" : "white-outline";
    }

    return "black-outline";
  }

  return (
    <>
      {user ? (
        <>
          <Button
            options={{
              type: handleButtonType(),
              text: "Sell",
            }}
            onClick={() => {
              user ? navigate("/create-listing") : setIsAuthModalOpen(true);
            }}
          />
          <UserActionsWidget changeNav={changeNav} />
          <UserWidget changeNav={changeNav} />
        </>
      ) : (
        <Button
          options={{
            type:
              location.pathname === "/"
                ? changeNav
                  ? "black-outline"
                  : "white-outline"
                : "black-outline",
            text: "Sign in",
          }}
          onClick={() => {
            setIsAuthModalOpen(true);
          }}
        />
      )}
    </>
  );
}
