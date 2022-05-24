import { Auth } from "aws-amplify";
import { createContext, useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const authContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      // console.log(loggedIn, location);
      navigate("/storageSolution");
    }
  }, [loggedIn]);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthProvider;
