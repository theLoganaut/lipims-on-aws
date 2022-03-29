import { Auth } from "aws-amplify";
import { createContext, useState, useRef, useMemo } from "react";

export const authContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthProvider;
