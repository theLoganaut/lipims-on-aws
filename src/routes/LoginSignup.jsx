import React, { useState, useEffect, useReducer } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import { Container, Card, Form, Button } from "react-bootstrap";
Amplify.configure(awsExports);

const LoginSignup = () => {
  const [showNewUserForm, setShowNewUserForm] = useState(false);

  return (
    <Container fluid>
      <Card>
        {!showNewUserForm ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              New User?
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        ) : (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Cancel?
            </Button>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default LoginSignup;
