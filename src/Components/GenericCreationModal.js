import React, { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";

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

  const [formState, setFormState] = useState([]);

  async function addEmployee() {
    try {
      if (!formState.fullName) return;
      const Employee = { ...formState };
      console.log(Employee);
      // setEmployees([...Employees, Employee]);
      setFormState([]);
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
      setFormState([]);
      await API.graphql(graphqlOperation(createLocation, { input: Location }));
    } catch (err) {
      console.log("error creating Location:", err);
    }
  }

  //figuring out the select on change
  // function handleChange(e) {
  //   let { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // { value: "", label: "" }

  const [selectOptions, setSelectOptions] = useState([]);

  const setSelected = (selected, value) => {
    console.log(selected, value);
    console.log(currentInputGroup);
    setFormState({ ...formState, [value]: selected.value });
    console.log(formState);
  };

  let newOptions = [];

  newOptions = Locations.map((l) => {
    return { value: l.id, label: l.city };
  });

  console.log(formState);

  const closeAndDeleteData = () => {
    setFormState([]);
    closeCreationModal();
  };

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
              <Form.Group key={i.title} className="mb-3">
                <Form.Label>{i.title}</Form.Label>
                {i.select ? (
                  // <Form.Select>
                  //   {i.options.map((o) => {
                  //     return (
                  //       <option
                  //         key={o.city}
                  //         // defaultValue={`Select ${i.title}`}
                  //         onChange={setFormState({
                  //           ...formState,
                  //           [i.value]: o,
                  //         })}
                  //       >
                  //         {o.city}
                  //       </option>
                  //     );
                  //   })}
                  // </Form.Select>
                  <Select
                    options={newOptions}
                    onChange={(e) => setSelected(e, i.value)}
                  />
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
        <Button onClick={closeAndDeleteData}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericCreationModal;
