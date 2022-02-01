import React, {useState, useEffect} from 'react';
import { Container, Dropdown, InputGroup, Form, FormControl, DropdownButton, Row, Col, Button} from 'react-bootstrap'
import CustomNavBar from '../Components/CustomNavBar';
import ItemCardList from '../Components/ItemCardList';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listItems } from '../graphql/queries'
import awsExports from "../aws-exports";
Amplify.configure(awsExports);



const StorageSolution = () => {

  const [Items, setItems] = useState([])

  async function fetchData() {
    try {
      const itemData = await API.graphql(graphqlOperation(listItems));
      const Items = itemData.data.listItems.items; 
      setItems(Items);
      // console.log(Locations);
    } catch (err) {
      console.log(err, "error fetching Locations");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(Items)

  return (
    <Container fluid>
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
          >
            {" "}
            Add Location{" "}
          </Button>

          <Button
            style={{ width: "100%" }}
          >
            {" "}
            Add Employee{" "}
          </Button>
        </Col>

        <Col>
          <ItemCardList Items={Items} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )};

export default StorageSolution;
