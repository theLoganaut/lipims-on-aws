/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      city
      region
      image
      address
      employeeList {
        items {
          id
          fullName
          title
          pay
          recentlyHelped
          hireTime
          updatedTime
          locationEmployeeListId
        }
        nextToken
      }
      openTime
      lastestUpdateTime
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      city
      region
      image
      address
      employeeList {
        items {
          id
          fullName
          title
          pay
          recentlyHelped
          hireTime
          updatedTime
          locationEmployeeListId
        }
        nextToken
      }
      openTime
      lastestUpdateTime
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      city
      region
      image
      address
      employeeList {
        items {
          id
          fullName
          title
          pay
          recentlyHelped
          hireTime
          updatedTime
          locationEmployeeListId
        }
        nextToken
      }
      openTime
      lastestUpdateTime
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      fullName
      title
      pay
      recentlyHelped
      workingAt {
        id
        city
        region
        image
        address
        employeeList {
          nextToken
        }
        openTime
        lastestUpdateTime
      }
      transactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      hireTime
      updatedTime
      locationEmployeeListId
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      fullName
      title
      pay
      recentlyHelped
      workingAt {
        id
        city
        region
        image
        address
        employeeList {
          nextToken
        }
        openTime
        lastestUpdateTime
      }
      transactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      hireTime
      updatedTime
      locationEmployeeListId
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      fullName
      title
      pay
      recentlyHelped
      workingAt {
        id
        city
        region
        image
        address
        employeeList {
          nextToken
        }
        openTime
        lastestUpdateTime
      }
      transactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      hireTime
      updatedTime
      locationEmployeeListId
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      fullName
      membership
      outstandingPayments
      allTransactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      storedItems {
        items {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        nextToken
      }
      joinTime
      latestUpdateTime
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      fullName
      membership
      outstandingPayments
      allTransactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      storedItems {
        items {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        nextToken
      }
      joinTime
      latestUpdateTime
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      fullName
      membership
      outstandingPayments
      allTransactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      storedItems {
        items {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        nextToken
      }
      joinTime
      latestUpdateTime
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      itemName
      quickTransfer
      owner {
        id
        fullName
        membership
        outstandingPayments
        allTransactions {
          nextToken
        }
        storedItems {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      transactions {
        id
        itemID
        employeeId
        locationId
        customerName
        customerData {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        isStored
        dateTime
        employeeTransactionsId
        customerAllTransactionsId
      }
      customerStoredItemsId
      itemTransactionsId
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      itemName
      quickTransfer
      owner {
        id
        fullName
        membership
        outstandingPayments
        allTransactions {
          nextToken
        }
        storedItems {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      transactions {
        id
        itemID
        employeeId
        locationId
        customerName
        customerData {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        isStored
        dateTime
        employeeTransactionsId
        customerAllTransactionsId
      }
      customerStoredItemsId
      itemTransactionsId
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      itemName
      quickTransfer
      owner {
        id
        fullName
        membership
        outstandingPayments
        allTransactions {
          nextToken
        }
        storedItems {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      transactions {
        id
        itemID
        employeeId
        locationId
        customerName
        customerData {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        isStored
        dateTime
        employeeTransactionsId
        customerAllTransactionsId
      }
      customerStoredItemsId
      itemTransactionsId
    }
  }
`;
export const createTransactions = /* GraphQL */ `
  mutation CreateTransactions(
    $input: CreateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    createTransactions(input: $input, condition: $condition) {
      id
      itemID
      employeeId
      locationId
      customerName
      customerData {
        id
        fullName
        membership
        outstandingPayments
        allTransactions {
          nextToken
        }
        storedItems {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      isStored
      dateTime
      employeeTransactionsId
      customerAllTransactionsId
    }
  }
`;
export const updateTransactions = /* GraphQL */ `
  mutation UpdateTransactions(
    $input: UpdateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    updateTransactions(input: $input, condition: $condition) {
      id
      itemID
      employeeId
      locationId
      customerName
      customerData {
        id
        fullName
        membership
        outstandingPayments
        allTransactions {
          nextToken
        }
        storedItems {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      isStored
      dateTime
      employeeTransactionsId
      customerAllTransactionsId
    }
  }
`;
export const deleteTransactions = /* GraphQL */ `
  mutation DeleteTransactions(
    $input: DeleteTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    deleteTransactions(input: $input, condition: $condition) {
      id
      itemID
      employeeId
      locationId
      customerName
      customerData {
        id
        fullName
        membership
        outstandingPayments
        allTransactions {
          nextToken
        }
        storedItems {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      isStored
      dateTime
      employeeTransactionsId
      customerAllTransactionsId
    }
  }
`;
