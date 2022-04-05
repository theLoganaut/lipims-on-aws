import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";
import { customerName } from "../graphql/queries";

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
  reduceDispatch,
  CustomerData,
  setCustomerData,
}) => {
  //i need to map over the inputs for the form items
  const [formState, setFormState] = useState([]);

  async function addNewCustomerAndItem() {
    try {
      // needs sets
      const Customer = { ...formState.Customer };
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

  async function queryForCustomer() {
    try {
      const customerInfo = { ...formState };
      console.log("formstate", customerInfo);
      const customerInfoAPI = await API.graphql(
        graphqlOperation(customerName, customerInfo)
      );
      const existingCustomerInfo = customerInfoAPI.data.customerName.items[0];
      if (existingCustomerInfo != null) {
        console.log(existingCustomerInfo);
        reduceDispatch({
          type: "addExistingCustomerItem",
          payload: existingCustomerInfo,
        });
      } else {
        reduceDispatch({ type: "lookupCustomer" });
      }
    } catch (err) {
      console.log(err, "error fetching Customer Data");
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

  const closeAndDeleteData = () => {
    setFormState([]);
    closeCreationModal();
  };

  const testItemCreation = () => {
    console.log(formState);
  };

  // ! make this a reducer, and throw this in with the 2nd input rework
  const confirmData = (dataName, data) => {
    if (dataName === "newItemExistingCustomer") {
      // setFormState(...formState, formState.Item.data);
      console.log(data);
    }
  };

  const testFunct = (e) => {
    e.preventDefault();
    const someFormData = new FormData(e.target.form);
    const someFormProps = Object.fromEntries(someFormData);
    console.log("hit!", e.target.form);
    let testingFormState = {};
    // for (let i = 0; i <= 19; i++) {
    //   if (e.target.form[i].value.length !== 0) {
    //     console.log(e.target.form[i]);
    //   }
    //   // if the id is there, then make a temp form state like the input
    //   // if (e.target.form[i].id.length !== 0) {
    //   //   testingFormState = {
    //   //     ...testingFormState,
    //   //     [e.target.form[i].id]: e.target.form[i].value,
    //   //   };
    //   // how forms look
    //   // setFormState({
    //   //   ...formState,
    //   //   [i.value]: e.target.value,
    //   // })
    // }
    console.log(testingFormState);
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
          {currentInputGroup.map((input) => {
            return (
              <Card style={{ marginBottom: "2%" }}>
                <Card.Title></Card.Title>
                <Card.Body>
                  <Form.Group action={testFunct}>
                    {Object.values(input).map((i) => {
                      return (
                        <Form.Group key={i.title} className="mb-3">
                          {i.autoGen || i.givenId ? (
                            <>
                              <Form.Label>{i.title}</Form.Label>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  type="text"
                                  defaultValue={i.genId || i.givenId}
                                  id={i.value}
                                />
                                <Button variant="outline-secondary">
                                  re-Gen
                                </Button>
                              </InputGroup>
                            </>
                          ) : (
                            <></>
                          )}
                          {i.boolean ? (
                            <>
                              <Form.Label>{i.title}</Form.Label>
                              <InputGroup id={i.value} className="mb-3">
                                <Form.Check
                                  inline
                                  label="false"
                                  defaultValue={false}
                                  name="group1"
                                  type="radio"
                                />
                                <Form.Check
                                  inline
                                  label="true"
                                  value={true}
                                  name="group1"
                                  type="radio"
                                />
                              </InputGroup>
                            </>
                          ) : (
                            <></>
                          )}
                          {!i.boolean && !i.autoGen && !i.givenId ? (
                            <>
                              <Form.Label>{i.title}</Form.Label>
                              <Form.Control
                                id={i.value}
                                type="text"
                                defaultValue={i.givenId}
                                onChange={(e) =>
                                  setFormState({
                                    ...formState,
                                    [i.value]: e.target.value,
                                  })
                                }
                              />
                            </>
                          ) : (
                            <></>
                          )}
                        </Form.Group>
                      );
                    })}
                    <div id="cutoff"> cutoff </div>
                    <Button type="submit" onClick={testFunct}>
                      Confirm
                    </Button>
                  </Form.Group>
                </Card.Body>
              </Card>
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={testItemCreation}> Add Item Test </Button>
        <Button onClick={queryForCustomer}>Tester</Button>
        <Button onClick={addLocation}>Save?</Button>
        <Button onClick={closeAndDeleteData}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericCreationModal;
