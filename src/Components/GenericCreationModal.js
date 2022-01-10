import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const GenericCreationModal = ({
  closeCreationModal,
  showCreationModal,
  Locations,
  setLocations,
  API,
  createLocation,
  graphqlOperation,
  currentInputGroup,
}) => {
  //i need to map over the inputs for the form items

  const initialForm = {
    city: "",
    address: "",
    image: "",
    region: "",
    id: uuidv4(),
  };

  const [formState, setFormState] = useState(initialForm);

  async function addLocation() {
    try {
      if (!formState.city) return;
      const Location = { ...formState };
      setLocations([...Locations, Location]);
      setFormState(initialForm);
      await API.graphql(graphqlOperation(createLocation, { input: Location }));
    } catch (err) {
      console.log("error creating Location:", err);
    }
  }

  console.log(formState);

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
          {Object.values(currentInputGroup).map((i) => {
            return (
              <Form.Group className="mb-3">
                <Form.Label>{i.title}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setFormState({ ...formState, [i.value]: e.target.value })
                  }
                />
              </Form.Group>
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Tester</Button>
        <Button onClick={addLocation}>Save?</Button>
        <Button onClick={closeCreationModal}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericCreationModal;
