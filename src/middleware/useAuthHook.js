import * as React from "react";
import { Auth, nav } from "aws-amplify";
import { useLocation, Navigate } from "react-router-dom";

import { authContext } from "./AuthContext";

export function useAuth() {
  const { loggedIn, setLoggedIn } = React.useContext(authContext);

  // const handleLogout = () => setLoggedIn(false);

  // React.useEffect(() => {
  // const handleLogin = () => setLoggedIn(true);
  //   handleLogin();
  // }, [user, setLoggedIn]);

  return {
    loggedIn,
    // login(username, password) {
    // return new Promise((res) => {
    //   setAuthed(true);
    //   res();
    // });

    // works but i think it needs to be a promise
    async signIn(username, password) {
      const user = await Auth.signIn(username, password);

      // const user = "Aware";
      if (user) {
        setLoggedIn(true);
        console.log(user, "test", loggedIn);
        return "/storageSolution";
      }
    },

    // },
    // logout() {
    //   return new Promise((res) => {
    //     setAuthed(false);
    //     res();
    //   });
    // },
  };
}

export function RequireAuth({ children }) {
  const location = useLocation();
  const { loggedIn } = React.useContext(authContext);

  return loggedIn === true ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
}
