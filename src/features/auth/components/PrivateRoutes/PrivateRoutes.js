import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";

function PrivateRoutes() {
  const { user, isFetchingUser } = useUser();

  return isFetchingUser ? (
    <></>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}

export default PrivateRoutes;
