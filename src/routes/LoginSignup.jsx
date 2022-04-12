import React, { useState, useContext, useEffect } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import { getEmployee } from "../graphql/queries";
import { updateEmployee } from "../graphql/mutations";
import { Container, Card, Form, Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../middleware/useAuthHook";
import { authContext } from "../middleware/AuthContext";
import SignupForm from "../Components/SignupForm";
import ConfirmCode from "../Components/ConfirmCode";

const LoginSignup = () => {
  const { signIn, signUpUser } = useAuth();
  const { state } = useLocation();

  const [username, setUsername] = useState("adminmiles");

  const [password, setPassword] = useState("Password1");

  const [email, setEmail] = useState("");

  const [shortId, setShortId] = useState("");

  const [role, setRole] = useState("service");

  const [eId, setEId] = useState(nanoid(10));

  const [confirmCode, SetConfirmCode] = useState("");

  const handleToConfirm = async () => {
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
            },
          });
          if (user) {
            setLoginViewState("confirm");
          }
        } catch (e) {
          console.log("error finding employee shortID:", e);
        }
      }
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const confirmAndSignIn = async () => {
    await signUpUser(username, confirmCode).then((r) => navigate(r));
  };

  const [loginViewState, setLoginViewState] = useState("login");

  const navigate = useNavigate();

  const { loggedIn } = useContext(authContext);

  const handleLogin = async () => {
    await signIn(username, password).then((r) => navigate(r));
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        position: "absolute",
      }}
      fluid
    >
      <Card
        style={{
          maxWidth: "20rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -70%)",
        }}
      >
        {loginViewState === "signup" ? (
          <SignupForm
            setEmail={setEmail}
            setUsername={setUsername}
            setPassword={setPassword}
            setShortId={setShortId}
            shortId={shortId}
            setLoginViewState={setLoginViewState}
            handleToConfirm={handleToConfirm}
          />
        ) : loginViewState === "login" ? (
          <Form style={{ margin: "1rem" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => setLoginViewState("signup")}
            >
              New User?
            </Button>
            <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        ) : loginViewState === "confirm" ? (
          <ConfirmCode
            setConfirmCode={SetConfirmCode}
            handleConfirmation={confirmAndSignIn}
          />
        ) : (
          // put a 405 component here
          <></>
        )}
      </Card>
    </Container>
  );
};

export default LoginSignup;
