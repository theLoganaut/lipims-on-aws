import * as React from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { useLocation, Navigate } from "react-router-dom";
import { getEmployee } from "../graphql/queries";
import { updateEmployee } from "../graphql/mutations";
import { nanoid } from "nanoid";

import { authContext } from "./AuthContext";

export function useAuth() {
  const { loggedIn, setLoggedIn } = React.useContext(authContext);

  return {
    loggedIn,
    async signIn(username, password) {
      const user = await Auth.signIn(username, password);
      if (user) {
        setLoggedIn(true);
        // console.log(user, "test", loggedIn);
        return "/storageSolution";
      }
    },
    async signOutUser() {
      const user = await Auth.signOut();
      if (user) {
        setLoggedIn(false);
        // console.log(user, "test", loggedIn);
        return "/";
      }
    },
    async signUpUser(username, confirmCode) {
      const newId = nanoid(10);
      try {
        const updatedEmployee = await API.graphql(
          graphqlOperation(updateEmployee, { id: newId })
        );
        console.log("updated", updatedEmployee);
        if (updatedEmployee) {
          try {
            const confirmation = await Auth.confirmSignUp(
              username,
              confirmCode
            );
            console.log("confirmed", confirmation);
            if (confirmation) {
              setLoggedIn(true);
              return "/storageSolution";
            }
          } catch (error) {
            console.log("Error logging in:", error);
          }
        }
      } catch (e) {
        console.log("Error Changing Employee ID:", e);
      }
    },
    //first try to lookup employee based on id, if success, signup
    //   try {
    //     console.log(shortId);
    //     const id = shortId;
    //     const checkEmployee = await API.graphql(
    //       graphqlOperation(getEmployee, { id: id })
    //     );
    //     const employee = checkEmployee.data;
    //     if (employee) {
    //       try {
    //         const { user } = await Auth.signUp({
    //           // new userform
    //           username: username,
    //           password: password,
    //           attributes: {
    //             email: email,
    //             "custom:sysId": eId, // optional
    //             "custom:role": role, // optional - E.164 number convention
    //           },
    //         });
    //         // if user, send to conf code component
    //         if (user) {
    //           try {
    //             const updatedEmployee = await API.graphql(
    //               graphqlOperation(updateEmployee, { id: eId })
    //             );
    //             if (updatedEmployee) {
    //               return <Navigate to="/storageSolution" />;
    //             }
    //             return <Navigate to="/storageSolution" />;
    //           } catch (e) {
    //             console.log("Error Changing Employee ID:", e);
    //           }
    //         }
    //       } catch (error) {
    //         console.log("error signing up:", error);
    //       }
    //     }
    //   } catch (e) {
    //     console.log("error finding employee shortID:", e);
    //   }
    // }
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
