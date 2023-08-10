import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import UserActionsWidget from "../UserActionsWidget/UserActionsWidget";
import UserWidget from "../UserWidget/UserWidget";

export function AuthWidgetButtons({ setIsAuthModalOpen, isHero }) {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      {user ? (
        <>
          <Button
            options={{
              type: isHero ? "white-outline" : "gray-outline",
              text: "Sell",
            }}
            onClick={() => {
              user ? navigate("/create-listing") : setIsAuthModalOpen(true);
            }}
          />
          <UserActionsWidget isHero={isHero} />
          <UserWidget isHero={isHero} />
        </>
      ) : (
        <Button
          options={{
            type: isHero ? "white-filled" : "black-filled",
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
