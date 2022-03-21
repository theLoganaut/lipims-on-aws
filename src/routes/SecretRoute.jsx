import React from "react";
import { Container } from "react-bootstrap";
import CustomNavBar from "../Components/CustomNavBar";

const SecretRoute = () => {
  return (
    <Container fluid>
      <CustomNavBar />
      <h1>Wait. How did you get here?</h1>
    </Container>
  );
};

export default SecretRoute;
