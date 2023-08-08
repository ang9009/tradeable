import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";
import UserWidget from "../UserWidget/UserWidget";

export function AuthWidgetButtons({ setIsAuthModalOpen }) {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      {user ? (
        <>
          <Button
            options={{ type: "gray-outline", text: "Sell" }}
            onClick={() => {
              user ? navigate("/create-listing") : setIsAuthModalOpen(true);
            }}
          />
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
