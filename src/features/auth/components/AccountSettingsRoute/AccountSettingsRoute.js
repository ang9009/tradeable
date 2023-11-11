import { Navigate, Outlet, useParams } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";

function AccountSettingsRoute() {
  const { userId } = useParams();
  const { user, userData, isFetchingUser } = useUser();
  console.log(userData);

  return isFetchingUser ? (
    <></>
  ) : user?.id === userId ? (
    <Outlet />
  ) : (
    <Navigate to="/404" />
  );
}

export default AccountSettingsRoute;
