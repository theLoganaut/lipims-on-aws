import React, { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";
import { customerName } from "../graphql/queries";
import { ConsoleLogger } from "@aws-amplify/core";

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
  const [formNumber, setformNumber] = useState(0);

  const [formData, setFormData] = useState({});

  const [finalData, setFinalData] = useState([]);

  const [tempForm, setTempForm] = useState({});

  useEffect(() => {
    if (
      currentInputGroup.inputGroup &&
      formNumber === currentInputGroup.inputGroup.length
    ) {
      console.log("hit sender");
      currentInputGroup.function(finalData);
    }
  }, [currentInputGroup, finalData, formNumber]);

  // console.log(
  //   currentInputGroup.inputGroup ? currentInputGroup.inputGroup[formNumber] : []
  // );

  const [formState, setFormState] = useState(
    currentInputGroup.inputGroup ? currentInputGroup.inputGroup[formNumber] : []
  );

  useEffect(() => {
    setFormState(
      currentInputGroup.inputGroup
        ? currentInputGroup.inputGroup[formNumber]
        : []
    );
  }, [currentInputGroup.inputGroup, formNumber]);

  useEffect(() => {
    let tempForm = [];
    if (formState.length > 0) {
      formState.forEach((input) => {
        if (input.givenValue) {
          tempForm = { ...tempForm, [input.value]: input.givenValue };
        } else {
          tempForm = { ...tempForm, [input.value]: "" };
        }
      });
    }
    setFormData(tempForm);
  }, [formState]);

  const nextForm = () => {
    // setFormData((formData) => formData, tempForm);
    const target = formData;
    const source = tempForm;
    const newData = Object.assign(target, source);
    console.log("target", target);

    setTempForm({});
    setFormState([]);
    setFinalData([...finalData, newData]);
    setformNumber((formNumber) => formNumber + 1);
  };

  const prevForm = () => {
    // just make the back button hidden if the form number is 0
    setformNumber((formNumber) => formNumber - 1);
  };

  const closeAndDeleteData = () => {
    setformNumber(0);
    setFormState([]);
    closeCreationModal();
  };

  const testItemCreation = () => {
    console.log(formState);
  };

  console.log("target", finalData);
  // console.log("formdata", formData);

  // console.log("tempForm", tempForm);

  // console.log("inputs", currentInputGroup.inputGroup, formState);

  const sendForm = () => {
    const target = formData;
    const source = tempForm;
    const newData = Object.assign(target, source);
    // setTempForm({});
    // setFormState([]);
    setFinalData([...finalData, newData]);

    currentInputGroup.function(finalData);
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
          {formState?.map((input) => {
            return (
              <Card style={{ marginBottom: "2%" }}>
                <Card.Body>
                  {input.givenValue ? (
                    <>
                      <Form.Label>{input.title}</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="text"
                          defaultValue={input.givenValue}
                          id={input.value}
                        />
                        <Button variant="outline-secondary">re-Gen</Button>
                      </InputGroup>
                    </>
                  ) : (
                    <></>
                  )}
                  {input.boolean ? (
                    <>
                      <Form.Label>{input.title}</Form.Label>
                      <InputGroup id={input.value} className="mb-3">
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
                  {!input.boolean && !input.autoGen && !input.givenValue ? (
                    <>
                      <Form.Label>{input.title}</Form.Label>
                      <Form.Control
                        id={input.value}
                        type="text"
                        defaultValue={input.givenValue}
                        onChange={
                          // !("key" in obj)
                          (e) => {
                            // if input key is not in tempform, add
                            if (!("input.value" in tempForm)) {
                              setTempForm({
                                ...tempForm,
                                [input.value]: e.target.value,
                              });
                            }
                            const target = tempForm;
                            const source = { [input.value]: e.target.value };
                            Object.assign(target, source);
                            setTempForm(target);
                          }
                        }
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </Form>

        {currentInputGroup.inputGroup &&
        formNumber < currentInputGroup.inputGroup.length - 1 ? (
          <Button onClick={nextForm}>next</Button>
        ) : (
          <Button onClick={sendForm}>Confirm</Button>
        )}

        {/* {currentInputGroup.inputGroup &&
        formNumber === currentInputGroup.inputGroup.length ? (
          <Button onClick={sendForm}>Confirm</Button>
        ) : (
          <></>
        )} */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeAndDeleteData}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericCreationModal;
