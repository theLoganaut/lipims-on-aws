import { Form, Button } from "react-bootstrap";

const ConfirmCode = ({ setConfirmCode, handleConfirmation }) => {
  return (
    <Form>
      {/* change this to be visible if user name is empty string */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirmation Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Code"
          onChange={(e) => setConfirmCode(e.target.value)}
        />
        <Form.Text className="text-muted">
          Please check your email for a code from AWS!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirmation Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Code"
          onChange={(e) => setConfirmCode(e.target.value)}
        />
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
