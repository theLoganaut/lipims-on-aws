import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import Amplify, { API, graphqlOperation, input } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const newCustomerDefaultId = uuidv4();

const newItemDefaultId = uuidv4();

const newTransactionDefaultId = uuidv4();
// call to check for a customer... should i have this here or not?
// async function queryForCustomer() {
//   try {
//     const customerInfoAPI = await API.graphql(graphqlOperation(customerName));
//     const CustomerInfo = customerInfoAPI.data.listLocations.items;
//     if (CustomerInfo != null) {

//     }
//   } catch (err) {
//     console.log(err, "error fetching Locations");
//   }
// }
// indiv input groups
// title - title of the input
// value - the related value for a graphql request
// select
const addEmployee = {
  input1: {
    title: "Employee Full Name",
    value: "fullName",
  },
  input2: {
    title: "Employee Title",
    value: "title",
  },
  input3: {
    title: "Pay Rate",
    value: "pay",
  },
  input4: {
    title: "Employement Location",
    value: "employeeLocationId",
    // ? options: Locations, do i need this
  },
};

const addLocation = {
  input1: {
    title: "City Name",
    value: "city",
  },
  input2: {
    title: "Region",
    value: "region",
  },
  input3: {
    title: "Address",
    value: "address",
  },
  input4: {
    title: "Image",
    value: "image",
  },
};

const newCustomerInput = {
  input1: {
    title: "Customer Full Name",
    value: "fullName",
  },
  input2: {
    title: "Pester Customer about membership perks",
    value: "membership",
    boolean: true,
  },
  input3: {
    title: "Outstanding Payments",
    value: "outstandingPayments",
  },
  input4: {
    title: "Generated Customer ID",
    value: "id",
    genId: newCustomerDefaultId,
    autoGen: true,
  },
};

const lookupCustomerInput = {
  input1: {
    title: "Lookup with Customer Full Name",
    value: "fullName",
  },
  input2: {
    title: "Lookup with Customer ID",
    value: "id",
  },
};

const newItemExistingCustomer = {
  input1: {
    title: "Item Name being Stored",
    value: "itemName",
  },
  input2: {
    title: "Generated Item ID",
    value: "id",
    genId: newItemDefaultId,
    autoGen: true,
  },
  input3: {
    title: "Quick Transfer?",
    value: "quickTransfer",
    boolean: true,
  },
  input4: {
    title: "Customer ID",
    value: "customerStoredItemsId",
    givenId: null,
  },
  input5: {
    title: "Transaction ID",
    value: "itemTransactionsId",
    genId: newTransactionDefaultId,
    autoGen: true,
  },
};

const newItemAndCustomerInput = {
  input1: {
    title: "Item Name being Stored",
    value: "itemName",
  },
  input2: {
    title: "Generated Item ID",
    value: "id",
    genId: newItemDefaultId,
    autoGen: true,
  },
  input3: {
    title: "Quick Transfer?",
    value: "quickTransfer",
    boolean: true,
  },
  input4: {
    title: "Customer ID",
    value: "customerStoredItemsId",
    genId: newCustomerDefaultId,
    autoGen: true,
  },
  input5: {
    title: "Transaction ID",
    value: "itemTransactionsId",
    genId: newTransactionDefaultId,
    autoGen: true,
  },
};

const newTransactionInput = {
  input1: {
    title: "Generated Transaction ID",
    value: "id",
    genId: newTransactionDefaultId,
    autoGen: true,
  },
  input2: {
    title: "Customer ID",
    value: "customerAllTransactionsId",
    givenId: null,
  },
  input3: {
    title: "Item ID of Transaction",
    value: "transactionsItemIDid",
    genId: newItemDefaultId,
    autoGen: true,
  },
  input4: {
    title: "Location Withdrawn from ID",
    value: "transactionsLocationEndId",
  },
  input5: {
    title: "Location Deposited ID",
    value: "transactionsLocationStartId",
  },
  input7: {
    title: "Placeholder, might not need isInStorage value",
    value: "isInStorage",
    boolean: true,
  },
};

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
        newItemAndCustomerInput,
        newTransactionInput,
      ]);
    case "lookupCustomer":
      return (state.currentInput = [lookupCustomerInput]);
    case "addExistingCustomerItem":
      console.log(action.payload.id);
      newItemExistingCustomer.input4.givenId = action.payload.id;
      newTransactionInput.input2.givenId = action.payload.id;
      return (state.currentInput = [
        newItemExistingCustomer,
        newTransactionInput,
      ]);
    default:
      throw new Error();
  }
};
