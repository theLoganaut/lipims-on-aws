import { API, graphqlOperation } from "aws-amplify";
import {
  createItem,
  createCustomer,
  createTransactions,
  createLocation,
  createEmployee,
} from "../graphql/mutations";
import { inputGroupReducer } from "../middleware/inputGroups";

export async function addNewCustomerAndItem(formState) {
  try {
    // needs sets
    const Customer = { ...formState.Customer };
    const Item = { ...formState.Item };
    const Transactions = { ...formState.Transactions };
    console.log(formState);
    await API.graphql(
      graphqlOperation(createTransactions, { input: Transactions })
    );
    await API.graphql(graphqlOperation(createItem, { input: Item }));
    await API.graphql(graphqlOperation(createCustomer, { input: Customer }));
    // setFormState([]); moved to state
  } catch (err) {
    console.log("error creating New Customer and Item:", err);
  }
}

export async function queryForCustomer(
  formState,
  customerName,
  reduceDispatch
) {
  try {
    const customerInfo = { ...formState };
    console.log("formstate", customerInfo);
    const customerInfoAPI = await API.graphql(
      graphqlOperation(customerName, customerInfo)
    );
    const existingCustomerInfo = customerInfoAPI.data.customerName.items[0];
    if (existingCustomerInfo != null) {
      console.log(existingCustomerInfo);
      reduceDispatch({
        type: "addExistingCustomerItem",
        payload: existingCustomerInfo,
      });
    } else {
      reduceDispatch({ type: "lookupCustomer" });
    }
  } catch (err) {
    console.log(err, "error fetching Customer Data");
  }
}

export async function addExistingAndItem(formState) {
  try {
    // needs sets
    const Item = { ...formState.Item };
    const Transactions = { ...formState.Transactions };
    await API.graphql(
      graphqlOperation(createTransactions, { input: Transactions })
    );
    await API.graphql(graphqlOperation(createItem, { input: Item }));
    // setFormState([]);
  } catch (err) {
    console.log("error creating Item for Existing:", err);
  }
}

// async function pullItemFromStorage() {
//   try {
//     if (!formState.fullName) return;
//     const Employee = { ...formState };
//     console.log(Employee);
//     setEmployees([...Employees, Employee]);
//     setFormState([]);
//     await API.graphql(graphqlOperation(createEmployee, { input: Employee }));
//   } catch (err) {
//     console.log("error creating Location:", err);
//   }
// }

export async function addEmployee(formState, setFormState) {
  try {
    if (!formState.fullName) return;
    const Employee = { ...formState };
    console.log(Employee);
    // setEmployees([...Employees, Employee]);
    setFormState([]);
    await API.graphql(graphqlOperation(createEmployee, { input: Employee }));
  } catch (err) {
    console.log("error creating Location:", err);
  }
}

export async function addLocation(
  formState,
  Locations,
  setLocations,
  setFormState
) {
  try {
    if (!formState.city) return;
    const Location = { ...formState };
    setLocations([...Locations, Location]);
    setFormState([]);
    await API.graphql(graphqlOperation(createLocation, { input: Location }));
  } catch (err) {
    console.log("error creating Location:", err);
  }
}
