import * as React from "react";
import { Auth, nav } from "aws-amplify";
import { useNavigate, useLocation } from "react-router-dom";
import useStateWithCallback from "use-state-with-callback";

const authContext = React.createContext();

// function useSideEffect(condition, funct) {
//   React.useEffect(() => {
//     if (condidtion) {
//       navigate()
//     }
//   }, [authed]);
// }

// function useStateCallback(initialState) {
//   const [state, setState] = React.useState(initialState);
//   const cbRef = React.useRef(null); // init mutable ref container for callbacks

//   const setStateCallback = React.useCallback((state, cb) => {
//     cbRef.current = cb; // store current, passed callback in ref
//     setState(state);
//   }, []); // keep object reference stable, exactly like `useState`

//   React.useEffect(() => {
//     // cb.current is `null` on initial render,
//     // so we only invoke callback on state *updates*
//     if (cbRef.current) {
//       cbRef.current(state);
//       cbRef.current = null; // reset callback after execution
//     }
//   }, [state]);

//   return [state, setStateCallback];
// }

export function useAuth() {
  let navigate = useNavigate();

  const { state } = useLocation();

  const [authed, setAuthed] = React.useState(false);

  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    if (user) {
      setAuthed(true);
    }
  }, [user]);

  // React.useEffect(() => {
  //   if (authed) {
  //     navigate();
  //   }
  // }, [authed]);

  return {
    authed,
    // login(username, password) {
    // return new Promise((res) => {
    //   setAuthed(true);
    //   res();
    // });

    // works but i think it needs to be a promise
    async signIn(username, password) {
      const user = await Auth.signIn(username, password);
      if (user) {
        setAuthed(true);
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

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
