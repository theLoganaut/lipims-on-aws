import React, { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
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
  createEmployee,
  Employees,
}) => {
  //i need to map over the inputs for the form items

  const [preGenID, setPreGenID] = useState(uuidv4());

  const reGenID = () => {
    setPreGenID(uuidv4());
  };

  const [formState, setFormState] = useState(currentInputGroup);

  async function addEmployee() {
    try {
      if (!formState.fullName) return;
      const Employee = { ...formState };
      console.log(Employee);
      // setEmployees([...Employees, Employee]);
      setFormState(currentInputGroup);
      await API.graphql(graphqlOperation(createEmployee, { input: Employee }));
    } catch (err) {
      console.log("error creating Location:", err);
    }
  }

  async function addLocation() {
    try {
      if (!formState.city) return;
      const Location = { ...formState };
      setLocations([...Locations, Location]);
      setFormState(currentInputGroup);
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
          {Object.values(currentInputGroup).map((i) => {
            return (
              <Form.Group className="mb-3">
                <Form.Label>{i.title}</Form.Label>
                {i.select ? (
                  <Form.Select>
                    {i.options.map((o) => {
                      return (
                        <option
                          defaultValue={"Select A City"}
                          value={o}
                          onChange={setFormState({
                            ...formState,
                            [i.value]: o,
                          })}
                        >
                          {o.city}
                        </option>
                      );
                    })}
                  </Form.Select>
                ) : (
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={(e) =>
                      setFormState({ ...formState, [i.value]: e.target.value })
                    }
                  />
                )}
              </Form.Group>
            );
          })}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={preGenID}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" onClick={reGenID}>
              Button
            </Button>
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addEmployee}>Tester</Button>
        <Button onClick={addLocation}>Save?</Button>
        <Button onClick={closeCreationModal}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericCreationModal;
