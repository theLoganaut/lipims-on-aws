import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import Amplify, { API, graphqlOperation, input } from "aws-amplify";
import { createItem } from "../graphql/mutations";
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
    title: "Employee Generated Id",
    value: "id",
  },
  input2: {
    title: "Employee Full Name",
    value: "fullName",
  },
  input3: {
    title: "Employee Title",
    value: "title",
  },
  input4: {
    title: "Pay Rate",
    value: "pay",
  },
  input5: {
    title: "Recently Helped",
    value: "recentlyHelped",
    givenValue: 0,
  },
  input6: {
    title: "Employement Location",
    value: "workingAt",
  },
  input7: {
    title: "Employement Transactions",
    value: "transactions",
    givenValue: null,
  },
};

const addLocation = {
  input1: {
    title: "City Name",
    value: "city",
  },
  input2: {
    title: "City Name",
    value: "city",
  },
  input3: {
    title: "Region",
    value: "region",
  },
  input4: {
    title: "Address",
    value: "address",
  },
  input5: {
    title: "Image, Placeholder currently",
    value: "image",
  },
  input6: {
    title: "Employee List",
    value: "employeeList",
    givenValue: newCustomerDefaultId,
  },
};

const newCustomer = {
  input1: {
    title: "Customer Generated ID",
    value: "id",
    givenValue: newCustomerDefaultId,
  },
  input2: {
    title: "Customer Full Name",
    value: "fullName",
  },
  input3: {
    title: "Pester Customer about membership perks",
    value: "membership",
    boolean: true,
  },
  input4: {
    title: "Outstanding Payments",
    value: "outstandingPayments",
    boolean: true,
  },
  input5: {
    title: "Previous Transactions",
    value: "allTransactions",
    givenValue: null,
  },
  input6: {
    title: "Stored Items",
    value: "storedItems",
    givenValue: null,
  },
};

const lookupCustomer = {
  input1: {
    title: "Lookup with Customer Full Name",
    value: "fullName",
  },
  input2: {
    title: "Lookup with Customer ID",
    value: "id",
  },
};

// adds an item and updates a customer
const newItemExistingCustomer = {
  input2: {
    title: "Generated Item ID",
    value: "id",
    givenValue: newItemDefaultId,
  },
  input1: {
    title: "Item Name being Stored",
    value: "itemName",
  },
  input3: {
    title: "Quick Transfer?",
    value: "quickTransfer",
    boolean: true,
  },
  input4: {
    title: "Customer ID",
    value: "customerStoredItemsId",
    givenValue: null,
  },
  input5: {
    title: "Transaction ID",
    value: "itemTransactionsId",
    givenValue: newTransactionDefaultId,
  },
};

const newItemAndCustomerInput = {
  input2: {
    title: "Generated Item ID",
    value: "id",
    givenValue: newItemDefaultId,
  },
  input1: {
    title: "Item Name being Stored",
    value: "itemName",
  },
  input3: {
    title: "Quick Transfer?",
    value: "quickTransfer",
    boolean: true,
  },
  input4: {
    title: "Customer ID",
    value: "customerStoredItemsId",
    givenValue: newCustomerDefaultId,
  },
  input5: {
    title: "Transaction ID",
    value: "itemTransactionsId",
    givenValue: newTransactionDefaultId,
  },
};

const newTransaction = {
  input1: {
    title: "Generated Transaction ID",
    value: "id",
    givenValue: newTransactionDefaultId,
  },
  input2: {
    title: "Customer ID",
    value: "customerAllTransactionsId",
    givenValue: null,
  },
  input3: {
    title: "Customer Name",
    value: "customer Name",
    givenValue: null,
  },
  input4: {
    title: "ItemId",
    value: "itemID",
    givenValue: newItemDefaultId,
  },
  input5: {
    title: "Employee Id",
    value: "employeeId",
    givenValue: null,
  },
  input6: {
    title: "Location Id of Transaction",
    value: "locationId",
    givenValue: null,
  },
  input7: {
    title: "Storage Value",
    value: "isStored",
  },
  input8: {
    title: "Date/Time of Transaction",
    value: "dateTime",
  },
};

export const saveEmployeeID = () => {};

// function to import that returns the input group
export const inputGroupReducer = (state, action) => {
  switch (action.type) {
    case "addEmployee":
      return (state.currentInput = [addEmployee]);
    case "addLocation":
      return (state.currentInput = [addLocation]);
    case "addNewCustomerWithItem":
      return (state.currentInput = [
        newCustomer,
        newItemAndCustomerInput,
        newTransaction,
      ]);
    case "lookupCustomer":
      return (state.currentInput = [lookupCustomer]);
    case "addExistingCustomerItem":
      newItemExistingCustomer.input4.givenId = action.payload.id;
      newTransaction.input2.givenId = action.payload.id;
      return (state.currentInput = [newItemExistingCustomer, newTransaction]);
    default:
      throw new Error();
  }
};
