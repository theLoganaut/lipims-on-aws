import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { authContext } from "../middleware/AuthContext";
import { useAuth } from "../middleware/useAuthHook";
import { useNavigate } from "react-router-dom";
// import App from "../App";
// import RouteRequiresLogin from "../middleware/useAuthHook";
// import StorageSolution from "../routes/StorageSolution";
// import { Route } from "react-router-dom";

const CustomNavBar = () => {
  const { signOutUser } = useAuth();
  const { loggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const handlelogout = async () => {
    await signOutUser();
    // .then((r) => navigate(r));
  };

  return (
    <Navbar bg="light" expand="lg" style={{ borderBottomStyle: "solid" }}>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/businessManager">To Business Manager</Nav.Link>
            <Nav.Link href="/storageSolution">To Business Inteligence</Nav.Link>
            <Nav.Link href="/storageSolution">To Storage Solution</Nav.Link>
          </Nav>
          <Nav.Link href="" className="justify-content-end">
            Log Out
          </Nav.Link>
          <Nav.Link href="" className="justify-content-end">
            PFP/Settings
          </Nav.Link>
          <Button onClick={handlelogout}>Auth Check!</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
