import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { authContext } from "../middleware/AuthContext";
import { useAuth } from "../middleware/useAuthHook";
import { useNavigate, Link } from "react-router-dom";
// import App from "../App";
// import RouteRequiresLogin from "../middleware/useAuthHook";
// import StorageSolution from "../routes/StorageSolution";
// import { Route } from "react-router-dom";

const CustomNavBar = () => {
  const { signOutUser } = useAuth();
  const { loggedIn } = useContext(authContext);
  const navigate = useNavigate();

  // const handlelogout = async () => {
  //   await signOutUser().then(navigate("/"));
  // };

  return (
    <Navbar bg="light" expand="lg" style={{ borderBottomStyle: "solid" }}>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{ margin: "10px" }} to="/businessManager">
              To Business Manager
            </Link>
            <Link style={{ margin: "10px" }} to="/storageSolution">
              To Business Inteligence
            </Link>
            <Link style={{ margin: "10px" }} to="/storageSolution">
              To Storage Solution
            </Link>
          </Nav>
          {/* <Button onClick={handlelogout} className="justify-content-end">
            Log Out
          </Button> */}
          <Nav.Link href="" className="justify-content-end">
            PFP/Settings
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
