import React, {useState, useEffect} from 'react';
import { Container, Dropdown, InputGroup, Form, FormControl, DropdownButton, Row, Col, Button} from 'react-bootstrap'
import CustomNavBar from '../Components/CustomNavBar';
import ItemCardList from '../Components/ItemCardList';
import GenericCreationModal from '../Components/GenericCreationModal'
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listItems, listCustomers, listTransactions } from '../graphql/queries'
import { createItem, createCustomer, createTransactions } from '../graphql/mutations'
import awsExports from "../aws-exports";
Amplify.configure(awsExports);



const StorageSolution = () => {

  const [showCreationModal, setShowCreationModal] = useState(false);

  const closeCreationModal = () => {
    setShowCreationModal(false);
  };

  const [Items, setItems] = useState([])

  const [Customers, setCustomers] = useState([])

  const [Transactions, setTransactions] = useState([])

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

  const newCustomerInput = {
    input1: {
      title: "Customer Full Name",
      value: "fullName",
      select: false,
    },
    input2: {
      title: "Pester Customer about membership perks",
      value: "membership",
      boolean: true,
    },
    input3: {
      title: "Outstanding Payments",
      value: "outstandingPayments",
      hidden: true,
    },
    input4: {
      title: "Generated Customer ID",
      value: "id",
    },
  }

  const newItemInput = {
    input1: {
      title: "Item Name being Stored",
      value: "itemName",
    },
    input2: {
      title: "Generated Item ID",
      value: "id",
    },
    input3: {
      title: "Quick Transfer?",
      value: "quickTransfer",
    },
    input4: {
      title: "Customer ID",
      value: "customerStoredItemsId",
    },
    input5: {
      title: "Transaction ID",
      value: "itemTransactionsId",
    },
  }

  const newTransactionInput = {
    input1: {
      title: "Generated Transaction ID",
      value: "id",
    },
    input2: {
      title: "Customer ID",
      value: "customerAllTransactionsId",
    },
    input3: {
      title: "Item of transaction ID",
      value: "transactionsItemIDid",
    },
    input4: {
      title: "Location Withdrawn from ID",
      value: "transactionsLocationEndId",
    },
    input5: {
      title: "Location Deposited ID",
      value: "transactionsLocationStartId",
    },
    input6: {
      title: "Location Deposited ID",
      value: "transactionsLocationStartId",
    },
    input7: {
      title: "Placeholder, might not need isInStorage value",
      value: "isInStorage",
    }
  }

  const inputTypes = [
    newCustomerInput, newItemInput, newTransactionInput
  ]

  // const inputsTypes = {
  //   newCustomer: {
  //     input1: {
  //       title: "Customer Full Name",
  //       value: "fullName",
  //       select: false,
  //     },
  //     input2: {
  //       title: "Pester Customer about membership perks",
  //       value: "membership",
  //       select: false,
  //       boolean: true,
  //     },
  //     input3: {
  //       title: "Outstanding Payments",
  //       value: "outstandingPayments",
  //       select: false,
  //       hidden: true,
  //     },
  //     input4: {
  //       title: "Generated Customer ID, IMPORTANT",
  //       value: "id",
  //     },
  //     input5: {
  //       title: "Item Name being Stored",
  //       value: "itemName",
  //     },
  //     input6: {
  //       title: "Generated Item ID",
  //       value: "id",
  //       select: false,
  //     },
  //     input7: {
  //       title: "CustomerID",
  //       value: "id",
  //       select: false,
  //     },


  //   },
  //   Existing: {
  //     input1: {
  //       title: "City Name",
  //       value: "city",
  //       select: false,
  //     },
  //     input2: {
  //       title: "Region",
  //       value: "region",
  //       select: false,
  //     },
  //     input3: {
  //       title: "Address",
  //       value: "address",
  //       select: false,
  //     },
  //     input4: {
  //       title: "Image",
  //       value: "image",
  //       select: false,
  //     },
  //     Existing: {
  //       input1: {
  //         title: "City Name",
  //         value: "city",
  //         select: false,
  //       },
  //       input2: {
  //         title: "Region",
  //         value: "region",
  //         select: false,
  //       },
  //       input3: {
  //         title: "Address",
  //         value: "address",
  //         select: false,
  //       },
  //       input4: {
  //         title: "Image",
  //         value: "image",
  //         select: false,
  //       },
  //     }
  //   },
  // };

  // const [currentInputGroup, setCurrentInputGroup] = useState(
  //   inputsTypes.Existing
  // );

  // const changeGenericInput = (buttonArg) => {
  //   setCurrentInputGroup(inputsTypes[buttonArg]);
  //   setShowCreationModal(true);
  // };

  return (
    <Container fluid>
      <CustomNavBar />
      <GenericCreationModal 
      closeCreationModal={closeCreationModal}
      showCreationModal={showCreationModal}
      API={API}
      graphqlOperation={graphqlOperation}
      currentInputGroup={inputTypes}
      setItems={setItems}
      Items={Items}
      createItem={createItem}
      setCustomers={setCustomers}
      Customers={Customers}
      createCustomer={createCustomer}
      setTransactions={setTransactions}
      Transactions={Transactions}
      createTransactions={createTransactions}
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
            onClick={() => setShowCreationModal(!showCreationModal)}
          >
            {" "}
            Add New Customer{" "}
          </Button>

          <Button
            style={{ width: "100%", marginBottom: "2%"  }}
            // onClick={() => changeGenericInput("existing")}
          >
            {" "}
            Add Items for Existing{" "}
          </Button>
          <Button
            style={{ width: "100%" }}
            // onClick={() => changeGenericInput("fromStorage")}
          >
            {" "}
            Pull Item From Storage{" "}
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
