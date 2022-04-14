import { Form, Button } from "react-bootstrap";

const ConfirmCode = ({
  setConfirmCode,
  handleConfirmation,
  needsUsername,
  setUsername,
}) => {
  return (
    <Form>
      {/* visible if the user came back after getting conf */}
      {needsUsername ? (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            The username you used to sign up.
          </Form.Text>
        </Form.Group>
      ) : (
        <></>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirmation Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Code"
          onChange={(e) => setConfirmCode(e.target.value)}
        />
        {/* 884019 current code */}
        <Form.Text className="text-muted">
          Please check your email for a code from AWS!
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={handleConfirmation}>
        Sign Up
      </Button>
    </Form>
  );
};

export default ConfirmCode;
