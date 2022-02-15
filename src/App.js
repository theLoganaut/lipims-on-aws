/* src/App.js */
import React from "react";
import Amplify from "aws-amplify";
import { Container } from "react-bootstrap";
import CustomNavBar from "./Components/CustomNavBar";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    <Container fluid>
      <CustomNavBar />
      <h1>Wait. How did you get here?</h1>
    </Container>
  );
};

export default App;
