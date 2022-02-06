import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import { customerName } from "./graphql/queries";
Amplify.configure(awsExports);

const newCustomerDefaultId = uuidv4();

const newItemDefaultId = uuidv4();

const newTransactionDefaultId = uuidv4();

// function to import that returns the input group
export const inputGroupReducer = (state, action) => {
  switch (action.type) {
    case "addEmployee":
      return (state.currentInput = [addEmployee]);
    case "addLocation":
      return (state.currentInput = [addLocation]);
    case "addNewCustomerWithItem":
      return (state.currentInput = [
        newCustomerInput,
        newItemInput,
        newTransactionInput,
      ]);
    case "addExistingCustomerItem":
      return (state.currentInput = [lookupCustomerInput]);
    default:
      throw new Error();
  }
};

// call to check for a customer... should i have this here or not?

async function queryForCustomer() {
  try {
    const customerInfoAPI = await API.graphql(graphqlOperation(customerName));
    const CustomerInfo = customerInfoAPI.data.listLocations.items;
  } catch (err) {
    console.log(err, "error fetching Locations");
  }
}

// indiv input groups
// title - title of the input
// value - the related value for a graphql request
// select
const addEmployee = {
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
    // ? options: Locations, do i need this
  },
};

const addLocation = {
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
};

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
    genId: newCustomerDefaultId,
  },
};

const lookupCustomerInput = {
  input1: {
    title: "Lookup with Customer Full Name",
    value: "fullName",
    check: "put function to check here",
  },
  input2: {
    title: "Lookup with Customer ID",
    value: "id",
  },
};

const newItemInput = {
  input1: {
    title: "Item Name being Stored",
    value: "itemName",
  },
  input2: {
    title: "Generated Item ID",
    value: "id",
    genId: newItemDefaultId,
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
};

const newTransactionInput = {
  input1: {
    title: "Generated Transaction ID",
    value: "id",
    genId: newTransactionDefaultId,
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
  },
};
