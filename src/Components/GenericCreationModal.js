import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, Card } from "react-bootstrap";
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
  createCustomer,
  createItem,
  createTransactions,
}) => {
  //i need to map over the inputs for the form items

  const [preGenID, setPreGenID] = useState(uuidv4());

  const reGenID = (typeArg) => {
    switch (typeArg) {
      case "Generated Customer ID":
        setCustomerPreGenID(uuidv4());
        console.log("hit");
        break;
      case "Generated Item ID":
        setItemPreGenID(uuidv4());
        console.log("hit");
        break;
      case "Generated Transaction ID":
        setTransactionPreGenID(uuidv4());
        console.log("hit");
        break;
      default:
        console.log("nothing to change");
    }
  };

  const [customerPreGenID, setCustomerPreGenID] = useState(uuidv4());
  const [itemPreGenID, setItemPreGenID] = useState(uuidv4());
  const [transactionPreGenID, setTransactionPreGenID] = useState(uuidv4());

  const [formState, setFormState] = useState([]);

  async function addNewCustomerAndItem() {
    try {
      // needs sets
      const Customer = { ...formState.customer };
      const Item = { ...formState.Item };
      const Transactions = { ...formState.Transactions };
      console.log(formState);
      await API.graphql(
        graphqlOperation(createTransactions, { input: Transactions })
      );
      await API.graphql(graphqlOperation(createItem, { input: Item }));
      await API.graphql(graphqlOperation(createCustomer, { input: Customer }));
      setFormState([]);
    } catch (err) {
      console.log("error creating New Customer and Item:", err);
    }
  }

  async function addExistingAndItem() {
    try {
      // needs sets
      const Item = { ...formState.Item };
      const Transactions = { ...formState.Transactions };
      await API.graphql(
        graphqlOperation(createTransactions, { input: Transactions })
      );
      await API.graphql(graphqlOperation(createItem, { input: Item }));
      setFormState([]);
    } catch (err) {
      console.log("error creating Item for Existing:", err);
    }
  }

  // async function pullItemFromStorage() {
  //   try {
  //     if (!formState.fullName) return;
  //     const Employee = { ...formState };
  //     console.log(Employee);
  //     setEmployees([...Employees, Employee]);
  //     setFormState([]);
  //     await API.graphql(graphqlOperation(createEmployee, { input: Employee }));
  //   } catch (err) {
  //     console.log("error creating Location:", err);
  //   }
  // }

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

  // for select options in the future
  // const [selectOptions, setSelectOptions] = useState([]);

  // const setSelected = (selected, value) => {
  //   console.log(selected, value);
  //   console.log(currentInputGroup);
  //   setFormState({ ...formState, [value]: selected.value });
  //   console.log(formState);
  // };

  // let newOptions = [];

  // newOptions = Locations.map((l) => {
  //   return { value: l.id, label: l.city };
  // });

  console.log(currentInputGroup);

  console.log(customerPreGenID, transactionPreGenID, itemPreGenID);

  const closeAndDeleteData = () => {
    setFormState([]);
    closeCreationModal();
  };

  const testItemCreation = () => {
    console.log(formState);
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
          {/* working inputs from before */}
          {/* {Object.values(currentInputGroup).map((i) => {
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
                  // <Select
                  //   options={newOptions}
                  //   onChange={(e) => setSelected(e, i.value)}
                  // />
                  <></>
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
          })} */}
          {currentInputGroup.map((input) => {
            return (
              <Card style={{ marginBottom: "2%" }}>
                <Card.Title></Card.Title>
                <Card.Body>
                  {Object.values(input).map((i) => {
                    var isID = false;
                    if (i.value === "id") {
                      isID = true;
                    }
                    return (
                      <Form.Group key={i.title} className="mb-3">
                        {isID ? (
                          <>
                            <Form.Label>{i.title}</Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control placeholder={preGenID} />
                              <Button variant="outline-secondary">
                                Button
                              </Button>
                            </InputGroup>
                          </>
                        ) : (
                          <>
                            <Form.Label>{i.title}</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              onChange={(e) =>
                                setFormState({
                                  ...formState,
                                  [i.value]: e.target.value,
                                })
                              }
                            />
                          </>
                        )}
                      </Form.Group>
                    );
                  })}
                </Card.Body>
              </Card>
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={testItemCreation}> Add Item Test </Button>
        <Button onClick={addEmployee}>Tester</Button>
        <Button onClick={addLocation}>Save?</Button>
        <Button onClick={closeAndDeleteData}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericCreationModal;
