import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import Amplify, { API, graphqlOperation, input } from "aws-amplify";
import { createItem } from "../graphql/mutations";
import {
  addEmployee,
  addNewCustomerAndItem,
} from "../Controllers/storageContollers";
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

const addEmployeeInputs = [
  {
    title: "Employee Generated Id",
    value: "id",
  },
  {
    title: "Employee Full Name",
    value: "fullName",
  },
  {
    title: "Employee Title",
    value: "title",
  },
  {
    title: "Pay Rate",
    value: "pay",
  },
  {
    title: "Recently Helped",
    value: "recentlyHelped",
    givenValue: 0,
  },
  {
    title: "Employement Location",
    value: "workingAt",
  },
  {
    title: "Employement Transactions",
    value: "transactions",
    givenValue: null,
  },
];

const addLocationInput = [
  {
    title: "City Name",
    value: "city",
  },
  {
    title: "City Name",
    value: "city",
  },
  {
    title: "Region",
    value: "region",
  },
  {
    title: "Address",
    value: "address",
  },
  {
    title: "Image, Placeholder currently",
    value: "image",
  },
  {
    title: "Employee List",
    value: "employeeList",
    givenValue: newCustomerDefaultId,
  },
];

const newCustomerInput = [
  {
    title: "Customer Generated ID",
    value: "id",
    givenValue: newCustomerDefaultId,
  },
  {
    title: "Customer Full Name",
    value: "fullName",
  },
  {
    title: "Pester Customer about membership perks",
    value: "membership",
    boolean: true,
  },
  {
    title: "Outstanding Payments",
    value: "outstandingPayments",
    boolean: true,
  },
  {
    title: "Previous Transactions",
    value: "allTransactions",
    givenValue: null,
  },
  {
    title: "Stored Items",
    value: "storedItems",
    givenValue: null,
  },
];

const lookupCustomerInput = [
  {
    title: "Lookup with Customer Full Name",
    value: "fullName",
  },
  {
    title: "Lookup with Customer ID",
    value: "id",
  },
];

// adds an item and updates a customer
const newItemExistingCustomer = [
  {
    title: "Generated Item ID",
    value: "id",
    givenValue: newItemDefaultId,
  },
  {
    title: "Item Name being Stored",
    value: "itemName",
  },
  {
    title: "Quick Transfer?",
    value: "quickTransfer",
    boolean: true,
  },
  {
    title: "Customer ID",
    value: "customerStoredItemsId",
    givenValue: null,
  },
  {
    title: "Transaction ID",
    value: "itemTransactionsId",
    givenValue: newTransactionDefaultId,
  },
];

const newItemAndCustomerInput = [
  {
    title: "Generated Item ID",
    value: "id",
    givenValue: newItemDefaultId,
  },
  {
    title: "Item Name being Stored",
    value: "itemName",
  },
  {
    title: "Quick Transfer?",
    value: "quickTransfer",
    boolean: true,
  },
  {
    title: "Customer ID",
    value: "customerStoredItemsId",
    givenValue: newCustomerDefaultId,
  },
  {
    title: "Transaction ID",
    value: "itemTransactionsId",
    givenValue: newTransactionDefaultId,
  },
];

const newTransactionInput = [
  {
    title: "Generated Transaction ID",
    value: "id",
    givenValue: newTransactionDefaultId,
  },
  {
    title: "Customer ID",
    value: "customerAllTransactionsId",
    givenValue: null,
  },
  {
    title: "Customer Name",
    value: "customer Name",
    givenValue: null,
  },
  {
    title: "ItemId",
    value: "itemID",
    givenValue: newItemDefaultId,
  },
  {
    title: "Employee Id",
    value: "employeeId",
    givenValue: null,
  },
  {
    title: "Location Id of Transaction",
    value: "locationId",
    givenValue: null,
  },
  {
    title: "Storage Value",
    value: "isStored",
  },
  {
    title: "Date/Time of Transaction",
    value: "dateTime",
  },
];

export const saveEmployeeID = () => {};

// function to import that returns the input group
export const inputGroupReducer = (state, action) => {
  switch (action.type) {
    case "addEmployee":
      return (state = {
        inputGroup: [addEmployeeInputs],
        function: addEmployee,
      });
    case "addLocation":
      return (state = { inputGroup: [], function: null });
    // state.currentInput = [addLocation]
    case "addNewCustomerWithItem":
      return (state = {
        inputGroup: [
          newCustomerInput,
          newItemAndCustomerInput,
          newTransactionInput,
        ],
        function: addNewCustomerAndItem,
      });
    //   state.currentInput = [
    //   newCustomer,
    //   newItemAndCustomerInput,
    //   newTransaction,
    // ]
    case "lookupCustomer":
      return (state = { inputGroup: [], function: null });
    // state.currentInput = [lookupCustomer]
    case "addExistingCustomerItem":
      newItemExistingCustomer.input4.givenId = action.payload.id;
      newTransactionInput.input2.givenId = action.payload.id;
      return (state = { inputGroup: [], function: null });
    // state.currentInput = [newItemExistingCustomer, newTransaction]
    default:
      // throw new Error();
      return (state = { inputGroup: [], function: null });
  }
};
