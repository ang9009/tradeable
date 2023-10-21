import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";

// For redirecting users when logged out
function PrivateRoutes() {
  const { userData, isFetchingUser } = useUser();

  return isFetchingUser ? (
    <></>
  ) : userData ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" />
  );
}

export default PrivateRoutes;
