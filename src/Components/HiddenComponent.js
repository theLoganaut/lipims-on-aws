import React, { useState, useEffect, useReducer } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import { Container } from "react-bootstrap";
Amplify.configure(awsExports);

const HiddenComponent = () => {
  return (
    <Container fluid>
      <h1>You found me!</h1>
    </Container>
  );
};

export default HiddenComponent;
