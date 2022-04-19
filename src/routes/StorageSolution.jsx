import React, { useState, useEffect, useReducer } from "react";
import {
  Container,
  Dropdown,
  InputGroup,
  Form,
  FormControl,
  DropdownButton,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import CustomNavBar from "../Components/CustomNavBar";
import ItemCardList from "../Components/ItemCardList";
import GenericCreationModal from "../Components/GenericCreationModal";
import { inputGroupReducer } from "../middleware/inputGroups";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listItems, listCustomers, listTransactions } from "../graphql/queries";
import {
  createItem,
  createCustomer,
  createTransactions,
} from "../graphql/mutations";
import awsExports from "../aws-exports";
import { jwtVerify, importJWK } from "jose";
Amplify.configure(awsExports);

const StorageSolution = () => {
  const [showCreationModal, setShowCreationModal] = useState(false);

  const closeCreationModal = () => {
    setShowCreationModal(false);
  };

  const [Items, setItems] = useState([]);

  const [CustomerData, setCustomerData] = useState([]);

  const [Transactions, setTransactions] = useState([]);

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

  //reducer for form inputs
  const [inputGroupState, dispatch] = useReducer(inputGroupReducer, []);

  const changeInputGroup = (arg) => {
    dispatch({ type: arg });
    setShowCreationModal(!showCreationModal);
  };

  const verifyJWT = async () => {
    const token = localStorage.getItem("token");
    const publicKey = await importJWK(
      {
        kty: "RSA",
        e: "AQAB",
        n: "uDq7sWTtw35CjbFUo5FApFE0Lj-o5u-X0Byn4j5iimZvVmzQHsZzP4xpYTQchiRV28pV9rzD_uzoaQUkKX4J5f96ffju5pmorGUz-HONMdGEhw9ROBVDuzSDYQ7rwM_9O5vmx40cynZZDStJHKs7cFKS2buTZmKSIlRAarv8u4FsM1LDzeafrsLRVtDcZSrh4rEY9kGmGshtj7lE0J6dZuVVFP6RSqGrghDFsNiJUVIF4NsQuYmLzJXC52D0YXiQVjE2vVeyfygiKK58EZeDxe5LHEsdG5quIL5rHw6PZ8g5xaSKTLAj7qgC233v1RMosEhgme0F47QhIkFP_Jyrgw",
      },
      "RS256"
    );
    console.log(publicKey);
    const { payload, protectedHeader } = await jwtVerify(token, publicKey);

    console.log(protectedHeader);
    console.log(payload);
  };

  return (
    <Container fluid>
      <CustomNavBar />
      <GenericCreationModal
        closeCreationModal={closeCreationModal}
        showCreationModal={showCreationModal}
        API={API}
        graphqlOperation={graphqlOperation}
        currentInputGroup={inputGroupState}
        setItems={setItems}
        Items={Items}
        createItem={createItem}
        setCustomerData={setCustomerData}
        CustomerData={CustomerData}
        createCustomer={createCustomer}
        setTransactions={setTransactions}
        Transactions={Transactions}
        createTransactions={createTransactions}
        reduceDispatch={dispatch}
      />
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
            <Form.Check type="checkbox" label="Items" />
            <Form.Check type="checkbox" label="Customers" />
            <Form.Check type="checkbox" label="Transactions" />
          </Form>
          <Button
            style={{ width: "100%", marginBottom: "2%" }}
            onClick={() => changeInputGroup("addNewCustomerWithItem")}
          >
            {" "}
            Add New Customer With Item{" "}
          </Button>

          <Button
            style={{ width: "100%", marginBottom: "2%" }}
            onClick={() => changeInputGroup("lookupCustomer")}
          >
            {" "}
            Add Items for Customer{" "}
          </Button>
          <Button
            style={{ width: "100%" }}
            // onClick={() => changeGenericInput("fromStorage")}
          >
            {" "}
            Pull Item From Storage{" "}
          </Button>

          <Button variant="primary" type="button" onClick={verifyJWT}>
            Login
          </Button>
        </Col>

        <Col>
          <ItemCardList Items={Items} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default StorageSolution;
