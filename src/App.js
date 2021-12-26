/* src/App.js */
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
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

import awsExports from "./aws-exports";
import LocationCardList from "./Components/LocationCardList";
Amplify.configure(awsExports);

const initialState = { name: "", description: "" };

const App = () => {
  const [showCreationModal, setShowCreationModal] = useState(false);

  const closeCreationModal = () => {
    setShowCreationModal(false);
  };

  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <Container fluid>
      <CreationModal
        closeCreationModal={closeCreationModal}
        showCreationModal={showCreationModal}
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
          <LocationCardList />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default App;
