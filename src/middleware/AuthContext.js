import { Auth } from "aws-amplify";
import { createContext, useState, useMemo, useEffect } from "react";

export const authContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("token") || false;
    if (token !== false) {
      setLoggedIn(true);
    }
  }, []);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthProvider;
