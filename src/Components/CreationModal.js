import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreationModal = ({ closeCreationModal, showCreationModal }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showCreationModal}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Location</Form.Label>
            <Form.Control type="text" placeholder="Enter City Location" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeCreationModal}>Close</Button>
        <Button onClick={closeCreationModal}>Save?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreationModal;
