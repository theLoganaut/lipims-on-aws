/* src/App.js */
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createLocation } from "./graphql/mutations";
import { listLocations } from "./graphql/queries";
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

import awsExports from "./aws-exports";
import LocationCardList from "./Components/LocationCardList";
Amplify.configure(awsExports);

const initialState = { city: "", address: "", image: "", region: "", id: "" };

const App = () => {
  const [showCreationModal, setShowCreationModal] = useState(false);

  const closeCreationModal = () => {
    setShowCreationModal(false);
  };

  const [formState, setFormState] = useState(initialState);
  const [Locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

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

  async function fetchLocations() {
    try {
      const LocationData = await API.graphql(graphqlOperation(listLocations));
      const Locations = LocationData.data.listLocations.items;
      setLocations(Locations);
      console.log(LocationData);
      console.log(Locations);
    } catch (err) {
      console.log(err, "error fetching Locations");
    }
  }

  async function addLocation() {
    try {
      if (!formState.city) return;
      const Location = { ...formState };
      setLocations([...Locations, Location]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createLocation, { input: Location }));
    } catch (err) {
      console.log("error creating Location:", err);
    }
  }

  console.log(Locations);

  return (
    <Container fluid>
      <GenericCreationModal
        closeCreationModal={closeCreationModal}
        showCreationModal={showCreationModal}
        initialState={initialState}
        addLocation={addLocation}
        setLocations={setLocations}
        Locations={Locations}
        API={API}
        createLocation={createLocation}
        graphqlOperation={graphqlOperation}
      />
      <Navbar bg="light" expand="lg" style={{ borderBottomStyle: "solid" }}>
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">To Business Manager</Nav.Link>
              <Nav.Link href="#link">To Business Inteligence</Nav.Link>
              <Nav.Link href="#link">To Storage Solution</Nav.Link>
            </Nav>
            <Nav.Link href="#link" className="justify-content-end">
              Log Out
            </Nav.Link>
            <Nav.Link href="#link" className="justify-content-end">
              PFP/Settings
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
            onClick={() => setShowCreationModal(true)}
          >
            {" "}
            Add Location{" "}
          </Button>

          {/* <Button
            style={{ width: "100%" }}
            onClick={() => setShowCreationModal(true)}
          >
            {" "}
            Add Employee{" "}
          </Button> */}
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
