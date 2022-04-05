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
          employeeID
          transactionsID
          createdAt
          updatedAt
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
          employeeID
          transactionsID
          createdAt
          updatedAt
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
          employeeID
          transactionsID
          createdAt
          updatedAt
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
          isInStorage
          deposited
          withdrawn
          customerAllTransactionsId
          transactionsItemIDId
          transactionsLocationStartId
          transactionsLocationEndId
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
          isInStorage
          deposited
          withdrawn
          customerAllTransactionsId
          transactionsItemIDId
          transactionsLocationStartId
          transactionsLocationEndId
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
          isInStorage
          deposited
          withdrawn
          customerAllTransactionsId
          transactionsItemIDId
          transactionsLocationStartId
          transactionsLocationEndId
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
        itemID {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        isInStorage
        customerID {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        employee {
          nextToken
        }
        locationStart {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        locationEnd {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        deposited
        withdrawn
        customerAllTransactionsId
        transactionsItemIDId
        transactionsLocationStartId
        transactionsLocationEndId
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
        itemID {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        isInStorage
        customerID {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        employee {
          nextToken
        }
        locationStart {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        locationEnd {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        deposited
        withdrawn
        customerAllTransactionsId
        transactionsItemIDId
        transactionsLocationStartId
        transactionsLocationEndId
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
        itemID {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        isInStorage
        customerID {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        employee {
          nextToken
        }
        locationStart {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        locationEnd {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        deposited
        withdrawn
        customerAllTransactionsId
        transactionsItemIDId
        transactionsLocationStartId
        transactionsLocationEndId
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
      itemID {
        id
        itemName
        quickTransfer
        owner {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        transactions {
          id
          isInStorage
          deposited
          withdrawn
          customerAllTransactionsId
          transactionsItemIDId
          transactionsLocationStartId
          transactionsLocationEndId
        }
        customerStoredItemsId
        itemTransactionsId
      }
      isInStorage
      customerID {
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
      employee {
        items {
          id
          employeeID
          transactionsID
          createdAt
          updatedAt
        }
        nextToken
      }
      locationStart {
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
      locationEnd {
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
      deposited
      withdrawn
      customerAllTransactionsId
      transactionsItemIDId
      transactionsLocationStartId
      transactionsLocationEndId
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
      itemID {
        id
        itemName
        quickTransfer
        owner {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        transactions {
          id
          isInStorage
          deposited
          withdrawn
          customerAllTransactionsId
          transactionsItemIDId
          transactionsLocationStartId
          transactionsLocationEndId
        }
        customerStoredItemsId
        itemTransactionsId
      }
      isInStorage
      customerID {
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
      employee {
        items {
          id
          employeeID
          transactionsID
          createdAt
          updatedAt
        }
        nextToken
      }
      locationStart {
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
      locationEnd {
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
      deposited
      withdrawn
      customerAllTransactionsId
      transactionsItemIDId
      transactionsLocationStartId
      transactionsLocationEndId
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
      itemID {
        id
        itemName
        quickTransfer
        owner {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        transactions {
          id
          isInStorage
          deposited
          withdrawn
          customerAllTransactionsId
          transactionsItemIDId
          transactionsLocationStartId
          transactionsLocationEndId
        }
        customerStoredItemsId
        itemTransactionsId
      }
      isInStorage
      customerID {
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
      employee {
        items {
          id
          employeeID
          transactionsID
          createdAt
          updatedAt
        }
        nextToken
      }
      locationStart {
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
      locationEnd {
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
      deposited
      withdrawn
      customerAllTransactionsId
      transactionsItemIDId
      transactionsLocationStartId
      transactionsLocationEndId
    }
  }
`;
export const createEmployeeTransactions = /* GraphQL */ `
  mutation CreateEmployeeTransactions(
    $input: CreateEmployeeTransactionsInput!
    $condition: ModelEmployeeTransactionsConditionInput
  ) {
    createEmployeeTransactions(input: $input, condition: $condition) {
      id
      employeeID
      transactionsID
      employee {
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
          openTime
          lastestUpdateTime
        }
        transactions {
          nextToken
        }
        hireTime
        updatedTime
        locationEmployeeListId
      }
      transactions {
        id
        itemID {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        isInStorage
        customerID {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        employee {
          nextToken
        }
        locationStart {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        locationEnd {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        deposited
        withdrawn
        customerAllTransactionsId
        transactionsItemIDId
        transactionsLocationStartId
        transactionsLocationEndId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployeeTransactions = /* GraphQL */ `
  mutation UpdateEmployeeTransactions(
    $input: UpdateEmployeeTransactionsInput!
    $condition: ModelEmployeeTransactionsConditionInput
  ) {
    updateEmployeeTransactions(input: $input, condition: $condition) {
      id
      employeeID
      transactionsID
      employee {
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
          openTime
          lastestUpdateTime
        }
        transactions {
          nextToken
        }
        hireTime
        updatedTime
        locationEmployeeListId
      }
      transactions {
        id
        itemID {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        isInStorage
        customerID {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        employee {
          nextToken
        }
        locationStart {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        locationEnd {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        deposited
        withdrawn
        customerAllTransactionsId
        transactionsItemIDId
        transactionsLocationStartId
        transactionsLocationEndId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployeeTransactions = /* GraphQL */ `
  mutation DeleteEmployeeTransactions(
    $input: DeleteEmployeeTransactionsInput!
    $condition: ModelEmployeeTransactionsConditionInput
  ) {
    deleteEmployeeTransactions(input: $input, condition: $condition) {
      id
      employeeID
      transactionsID
      employee {
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
          openTime
          lastestUpdateTime
        }
        transactions {
          nextToken
        }
        hireTime
        updatedTime
        locationEmployeeListId
      }
      transactions {
        id
        itemID {
          id
          itemName
          quickTransfer
          customerStoredItemsId
          itemTransactionsId
        }
        isInStorage
        customerID {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        employee {
          nextToken
        }
        locationStart {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        locationEnd {
          id
          city
          region
          image
          address
          openTime
          lastestUpdateTime
        }
        deposited
        withdrawn
        customerAllTransactionsId
        transactionsItemIDId
        transactionsLocationStartId
        transactionsLocationEndId
      }
      createdAt
      updatedAt
    }
  }
`;
