import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreationModal = ({
  closeCreationModal,
  showCreationModal,
  Locations,
  setLocations,
  API,
  createLocation,
  graphqlOperation,
}) => {
  const [cityName, setCityName] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [imageString, setImageString] = useState("");
  const [businessID, setBusinessID] = useState("");

  const initialForm = { city: "", address: "", image: "", region: "", id: "" };

  const [formState, setFormState] = useState(initialForm);

  async function addLocation() {
    setFormState({
      city: cityName,
      address: address,
      image: imageString,
      region: region,
      id: businessID,
    });
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
          <Form.Group className="mb-3">
            <Form.Label>City Business Resides</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setCityName(e.target.value)}
              // onChange={(e) => setFormState({...initialForm, city: e.target.value})} might test just changing the init form?
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Region Business Resides</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setRegion(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image String of Front(placeholder only)</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setImageString(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Business Address</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Business ID</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setBusinessID(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addLocation}>Save?</Button>
        <Button onClick={closeCreationModal}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreationModal;
