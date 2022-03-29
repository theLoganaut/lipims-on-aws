import { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import CustomNavBar from "../Components/CustomNavBar";
import { authContext } from "../middleware/AuthContext";

const SecretRoute = () => {
  const { loggedIn } = useContext(authContext);

  return (
    <Container fluid>
      <CustomNavBar />
      <h1>Wait. How did you get here?</h1>
      <Button onClick={() => console.log(loggedIn)}>AuthCheck</Button>
    </Container>
  );
};

export default SecretRoute;
