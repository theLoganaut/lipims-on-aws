import { useAuth } from "./useAuthHook";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const { authed } = useAuth();

  console.log(authed);

  return authed === true ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
}
