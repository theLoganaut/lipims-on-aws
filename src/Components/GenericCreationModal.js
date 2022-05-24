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
        console.log(input);
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
    Object.assign(target, source);
    setFormState([]);
    setFinalData(...finalData, target);
    setTempForm({});
    setformNumber((formNumber) => formNumber + 1);
  };

  const prevForm = () => {
    // just make the back button hidden if the form number is 0
    setformNumber((formNumber) => formNumber - 1);
  };

  const closeAndDeleteData = () => {
    setFormState([]);
    closeCreationModal();
  };

  const testItemCreation = () => {
    console.log(formState);
  };

  console.log("formdata", formData);

  console.log("tempForm", tempForm);

  console.log("inputs", currentInputGroup.inputGroup, formState);

  const sendForm = () => {
    console.log("final", finalData);
    // const someFormData = new FormData(e.target.form);
    // const someFormProps = Object.fromEntries(someFormData);
    // console.log("function", currentInputGroup.function);
    // console.log("hit!", formState);
    // let testingFormState = {};
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
    // console.log(testingFormState);
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

                            // [
                            //   {
                            //     [input.value]: e.target.value,
                            //   },
                            // ])

                            // console.log({
                            //   [input.value]: e.target.value,
                            // })
                          }
                        }
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Form.Group>
                    {/* {Object.values(input).map((i) => {
                      return (
                        <Form.Group key={i.title} className="mb-3">
                          {i.givenValue ? (
                            <>
                              <Form.Label>{i.title}</Form.Label>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  type="text"
                                  defaultValue={i.givenValue}
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
                          {!i.boolean && !i.autoGen && !i.givenValue ? (
                            <>
                              <Form.Label>{i.title}</Form.Label>
                              <Form.Control
                                id={i.value}
                                type="text"
                                defaultValue={i.givenValue}
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
                    })} */}
                  </Form.Group>
                </Card.Body>
              </Card>
            );
          })}
        </Form>

        <Button onClick={nextForm}>next</Button>

        {currentInputGroup.inputGroup &&
        formNumber === currentInputGroup.inputGroup.length ? (
          <Button onClick={sendForm}>next</Button>
        ) : (
          <></>
        )}

        {/* {
        currentInputGroup.inputGroup ? true && formNumber ? (
            (<Button onClick={sendForm}>next</Button>)
        ) : (
          <></>
        )
      } */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeAndDeleteData}>Close?</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericCreationModal;
