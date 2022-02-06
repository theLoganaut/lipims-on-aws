/* src/App.js */
import React, { useEffect, useState, useReducer } from "react";
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
import { inputGroupReducer } from "./middleware/inputGroups";
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

  //reducer for form inputs
  const [inputGroupState, dispatch] = useReducer(inputGroupReducer, []);

  const changeInputGroup = (arg) => {
    dispatch({ type: arg });
    setShowCreationModal(!showCreationModal);
  };

  return (
    <Container fluid>
      <GenericCreationModal
        closeCreationModal={closeCreationModal}
        showCreationModal={showCreationModal}
        setLocations={setLocations}
        Locations={Locations}
        API={API}
        createEmployee={createEmployee}
        createLocation={createLocation}
        graphqlOperation={graphqlOperation}
        currentInputGroup={inputGroupState}
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
            onClick={() => changeInputGroup("addLocation")}
          >
            {" "}
            Add Location{" "}
          </Button>

          <Button
            style={{ width: "100%" }}
            onClick={() => changeInputGroup("addEmployee")}
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
