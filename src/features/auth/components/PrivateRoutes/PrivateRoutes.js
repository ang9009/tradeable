import { Navigate, Outlet } from "react-router-dom";
import { useIsFetchingUser, useUser } from "../../../../context/UserContext";

function PrivateRoutes() {
  const user = useUser();
  const isFetchingUser = useIsFetchingUser();

  return isFetchingUser ? (
    <></>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}

export default PrivateRoutes;
