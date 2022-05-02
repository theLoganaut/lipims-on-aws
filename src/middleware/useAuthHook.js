import * as React from "react";
import { Auth, API, graphqlOperation, navItem } from "aws-amplify";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { getEmployee } from "../graphql/queries";
import { updateEmployee } from "../graphql/mutations";
import { nanoid } from "nanoid";

import { authContext } from "./AuthContext";

export function useAuth() {
  const { loggedIn, setLoggedIn } = React.useContext(authContext);

  const navigate = useNavigate();

  // i think i should store the name in each major route?
  // localStorage.setItem('prev', history.location.pathname)
  React.useEffect(() => {
    const token = localStorage.getItem("token") || false;
    if (token !== false) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  let history = createBrowserHistory();

  const location = useLocation();

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
      // console.log(user, "test", loggedIn);
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
  const location = useLocation();
  const { loggedIn, setLoggedIn } = React.useContext(authContext);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setLoggedIn(true);
  //     console.log(loggedIn, "req");
  //   }
  // }, [loggedIn, setLoggedIn]);
  // React.useEffect(() => {
  //   const token = localStorage.getItem("token") || false;
  //   if (token !== false) {
  //     setLoggedIn(true);
  //     navigate(-1);
  //   }
  // }, [navigate, setLoggedIn]);

  return loggedIn === true ? (
    children
  ) : (
    <Navigate to="/" state={{ path: location.pathname }} />
    // <></>
  );
}
