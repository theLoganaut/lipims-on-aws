import * as React from "react";
import { Auth, nav } from "aws-amplify";
import { useLocation, Navigate } from "react-router-dom";

import { authContext } from "./AuthContext";

export function useAuth() {
  const { loggedIn, setLoggedIn } = React.useContext(authContext);

  return {
    loggedIn,
    async signIn(username, password) {
      const user = await Auth.signIn(username, password);
      if (user) {
        setLoggedIn(true);
        console.log(user, "test", loggedIn);
        return "/storageSolution";
      }
    },
    async signOutUser() {
      const user = await Auth.signOut();
      if (user) {
        setLoggedIn(false);
        console.log(user, "test", loggedIn);
        // return "/";
      }
    },
  };
}

export function RequireAuth({ children }) {
  const location = useLocation();
  const { loggedIn } = React.useContext(authContext);

  console.log(loggedIn);

  return loggedIn === true ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
}
