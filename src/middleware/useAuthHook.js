import * as React from "react";
import { Auth } from "aws-amplify";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

import { authContext } from "./AuthContext";

export function useAuth() {
  const { loggedIn, setLoggedIn } = React.useContext(authContext);

  // i think i should store the name in each major route?
  // localStorage.setItem('prev', history.location.pathname)
  React.useEffect(() => {
    const token = localStorage.getItem("token") || false;
    if (token !== false) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  return {
    loggedIn,
    async signIn(username, password, to) {
      const user = await Auth.signIn(username, password);
      if (user) {
        const userJWT = user.signInUserSession.idToken.jwtToken;
        console.log(user);
        localStorage.setItem("token", userJWT);
        setLoggedIn(true);
        return to;
      }
    },
    async signOutUser() {
      await Auth.signOut();
      localStorage.removeItem("token");
      setLoggedIn(false);
      return "/";
    },
    async confirmUser(username, confirmCode, to, from) {
      // since im not sure i cant send both, im not gonna update the id
      // but instead make the id a 7 digit, and keep it for employee id for now
      try {
        const confirmation = await Auth.confirmSignUp(username, confirmCode);
        console.log("confirmed", confirmation);
        if (confirmation) {
          setLoggedIn(true);
          return "/storageSolution";
        }
      } catch (error) {
        console.log("Error logging in:", error);
      }
    },
  };
}

export function RequireAuth({ children }) {
  const { loggedIn, setLoggedIn } = React.useContext(authContext);
  const prevRoute = useLocation();

  // console.log("hello", prevRoute);

  return loggedIn === true ? (
    children
  ) : (
    <Navigate to="/" state={{ from: prevRoute }} />
    // <></>
  );
}
