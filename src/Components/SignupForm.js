import { Form, Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import { useState } from "react";

const SignupForm = ({
  setEmail,
  setUsername,
  username,
  setPassword,
  setShortId,
  setLoginViewState,
  shortId,
  handleToConfirm,
  needsUsername,
  checkForUsername,
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
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
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Short Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="Short Form ID"
          onChange={(e) => setShortId(e.target.value)}
        />
        <Form.Text className="text-muted">
          The 5 digit code your manager gave you.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={() => setLoginViewState("login")}>
        Cancel?
      </Button>
      <Button variant="primary" onClick={handleToConfirm}>
        Sign Up
      </Button>
      <Button variant="primary" onClick={checkForUsername}>
        Have a code already?
      </Button>
    </Form>
  );
};

export default SignupForm;
