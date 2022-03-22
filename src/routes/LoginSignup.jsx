import React, { useState, useEffect, useReducer } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import { getEmployee } from "../graphql/queries";
import { updateEmployee } from "../graphql/mutations";
import { Container, Card, Form, Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../middleware/useAuthHook";

const LoginSignup = () => {
  const { signIn } = useAuth();
  const { state } = useLocation();

  const [showNewUserForm, setShowNewUserForm] = useState(false);

  const [showLoginForm, setShowLoginForm] = useState(true);

  const [updateEmployeeForm, setUpdateEmployeeForm] = useState(false);

  const [username, setUsername] = useState("adminmiles");

  const [password, setPassword] = useState("Password1");

  const [email, setEmail] = useState("");

  const [shortId, setShortId] = useState("");

  const [role, setRole] = useState("service");

  const [eId, setEId] = useState(nanoid(15));

  const [confirmCode, SetConfirmCode] = useState("007240");

  const [tempCreds, SetTempCreds] = useState();

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  // working!
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, confirmCode);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  // mock working!
  async function signUp() {
    //first try to lookup employee based on id, if success, signup
    try {
      console.log(shortId);
      const id = shortId;
      const checkEmployee = await API.graphql(
        graphqlOperation(getEmployee, { id: id })
      );
      const employee = checkEmployee.data;
      if (employee) {
        try {
          const { user } = await Auth.signUp({
            // new userform
            username: username,
            password: password,
            attributes: {
              email: email,
              "custom:sysId": eId, // optional
              "custom:role": role, // optional - E.164 number convention
              // other custom attributes
            },
          });
          // if user, sign in
          if (user) {
            try {
              // const updatedEmployee = await API.graphql(
              //   graphqlOperation(updateEmployee, { id: id })
              // );
              // const updated = updateEmployee.data;
              // if (updated) {
              //   return <Redirect to="/storageSolution" />;
              // }
              // return <Redirect to="/storageSolution" />;
            } catch (e) {
              console.log("Error Changing Employee ID:", e);
            }
          }
        } catch (error) {
          console.log("error signing up:", error);
        }
      }
    } catch (e) {
      console.log("error finding employee shortID:", e);
    }
  }

  const initLoginView = {
    loginForm: true,
    newUserForm: false,
  };

  const [loginViewState, setLoginViewState] = useState(initLoginView);

  let navigate = useNavigate();

  const handleLogin = () => {
    signIn(username, password).then(
      // navigate("/storageSolution"),
      // console.log("nav")
      (r) => navigate(r)
    );
  };

  return (
    <Container fluid>
      <Card>
        {loginViewState.loginForm ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter UserName" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() =>
                setLoginViewState({
                  loginForm: false,
                  newUserForm: true,
                })
              }
            >
              New User
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate("/secretRoute")}
              type="button"
            >
              Redirect Test
            </Button>
            <Button variant="primary" onClick={handleLogin} type="button">
              sign in test
            </Button>
            <Button variant="primary" onClick={signOut} type="button">
              sign out
            </Button>
            <Button
              variant="primary"
              onClick={() => console.log()}
              type="button"
            >
              Show Creds
            </Button>
          </Form>
        ) : (
          <></>
        )}
        {loginViewState.newUserForm ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your Username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Short Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Short Form ID"
                onChange={(e) => setShortId(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() =>
                setLoginViewState({
                  loginForm: true,
                  newUserForm: false,
                })
              }
            >
              Cancel?
            </Button>
            <Button variant="primary" onClick={signUp}>
              Sign Up
            </Button>
          </Form>
        ) : (
          <></>
        )}
      </Card>
    </Container>
  );
};

export default LoginSignup;
