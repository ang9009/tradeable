import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";

// For redirecting users when they haven't been verified
function VerifyRoutes() {
  const { user, userData, isFetchingUser } = useUser();

  return user ? (
    userData.emailVerified ? (
      <Outlet />
    ) : (
      <Navigate to="/verify" />
    )
  ) : (
    <Outlet />
  );
}

export default VerifyRoutes;
