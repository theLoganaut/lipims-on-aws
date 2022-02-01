/* src/App.js */
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createLocation, createEmployee } from "./graphql/mutations";
import { listLocations, listEmployees } from "./graphql/queries";
import {
  Container,
  Row,
  Col,
  Accordion,
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
  Form,
  Button,
} from "react-bootstrap";
import CreationModal from "./Components/CreationModal";
import GenericCreationModal from "./Components/GenericCreationModal";
import CustomNavBar from "./Components/CustomNavBar";
import LocationCardList from "./Components/LocationCardList";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  const [showCreationModal, setShowCreationModal] = useState(false);

  const closeCreationModal = () => {
    setShowCreationModal(false);
  };

  const [Locations, setLocations] = useState([]);
  const [Employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const myAPIkey = "da2-mqiv6wevm5b53dybwqtwtc533u";

  //testing this solution https://aws.amazon.com/blogs/mobile/appsync-graphiql-local/
  // function graphQLFetcher() {
  //   const APPSYNC_API_URL =
  //     "https://at52yi2amzc5dla5svvqghbmoe.appsync-api.us-east-1.amazonaws.com/graphql";
  //   const credentialsAppSync = {
  //     "x-api-key": "da2-mqiv6wevm5b53dybwqtwtc533u",
  //   };
  //   return fetch(APPSYNC_API_URL, {
  //     method: "get",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       ...credentialsAppSync,
  //     },
  //     credentials: "omit",
  //   }).then(function (response) {
  //     return response.json().catch(function () {
  //       return console.log(response); //response.text();
  //     });
  //   });
  // }

  async function fetchData() {
    try {
      const LocationData = await API.graphql(graphqlOperation(listLocations));
      const Locations = LocationData.data.listLocations.items;
      setLocations(Locations);
      const EmployeeData = await API.graphql(graphqlOperation(listEmployees));
      const Employees = EmployeeData.data.listEmployees.items;
      setEmployees(Employees);
    } catch (err) {
      console.log(err, "error fetching Locations");
    }
  }

  // async function addLocation() {
  //   try {
  //     if (!formState.city) return;
  //     const Location = { ...formState };
  //     setLocations([...Locations, Location]);
  //     setFormState(initialState);
  //     await API.graphql(graphqlOperation(createLocation, { input: Location }));
  //   } catch (err) {
  //     console.log("error creating Location:", err);
  //   }
  // }

  const inputsTypes = {
    employee: {
      input1: {
        title: "Employee Full Name",
        value: "fullName",
        select: false,
      },
      input2: {
        title: "Employee Title",
        value: "title",
        select: false,
      },
      input3: {
        title: "Pay Rate",
        value: "pay",
        select: false,
      },
      input4: {
        title: "Employement Location",
        value: "employeeLocationId",
        select: true,
        options: Locations,
      },
    },
    location: {
      input1: {
        title: "City Name",
        value: "city",
        select: false,
      },
      input2: {
        title: "Region",
        value: "region",
        select: false,
      },
      input3: {
        title: "Address",
        value: "address",
        select: false,
      },
      input4: {
        title: "Image",
        value: "image",
        select: false,
      },
    },
  };

  const [currentInputGroup, setCurrentInputGroup] = useState(
    inputsTypes.location
  );

  const changeGenericInput = (buttonArg) => {
    setCurrentInputGroup(inputsTypes[buttonArg]);
    setShowCreationModal(true);
  };

  console.log(Locations);

  return (
    <Container fluid>
      <GenericCreationModal
        closeCreationModal={closeCreationModal}
        showCreationModal={showCreationModal}
        // initialState={initialState}
        // addLocation={addLocation}
        setLocations={setLocations}
        Locations={Locations}
        API={API}
        createEmployee={createEmployee}
        createLocation={createLocation}
        graphqlOperation={graphqlOperation}
        currentInputGroup={currentInputGroup}
        Employees={Employees}
      />
      <CustomNavBar />
      <Row>
        <Col
          style={{
            borderRightStyle: "solid",
            borderLeftStyle: "solid",
            height: "100vh",
          }}
          md={2}
        >
          <InputGroup className="mb-3" style={{ marginTop: "2%" }}>
            <FormControl aria-label="Text input with dropdown button" />

            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <p>filter</p>
          <Form>
            <Form.Check type="checkbox" label="Locations" />
            <Form.Check type="checkbox" label="Employees" />
          </Form>
          <Button
            style={{ width: "100%", marginBottom: "2%" }}
            onClick={() => changeGenericInput("location")}
          >
            {" "}
            Add Location{" "}
          </Button>

          <Button
            style={{ width: "100%" }}
            onClick={() => changeGenericInput("employee")}
          >
            {" "}
            Add Employee{" "}
          </Button>
        </Col>

        <Col>
          <LocationCardList Locations={Locations} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default App;
