import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";

// For redirecting users when logged out
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
