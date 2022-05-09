/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        customerStoredItemsId
        itemTransactionsId
      }
      nextToken
    }
  }
`;
export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!) {
    getTransactions(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const locationByCityName = /* GraphQL */ `
  query LocationByCityName(
    $city: String
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locationByCityName(
      city: $city
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const employeeByNamePayAndHelped = /* GraphQL */ `
  query EmployeeByNamePayAndHelped(
    $fullName: String
    $payRecentlyHelped: ModelEmployeeByEmployeeNameAndPayCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeeByNamePayAndHelped(
      fullName: $fullName
      payRecentlyHelped: $payRecentlyHelped
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const customerName = /* GraphQL */ `
  query CustomerName(
    $fullName: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerName(
      fullName: $fullName
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const itemByNameAndOwner = /* GraphQL */ `
  query ItemByNameAndOwner(
    $itemName: String
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemByNameAndOwner(
      itemName: $itemName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        customerStoredItemsId
        itemTransactionsId
      }
      nextToken
    }
  }
`;
export const transactionByItemId = /* GraphQL */ `
  query TransactionByItemId(
    $itemID: String
    $customerName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionByItemId(
      itemID: $itemID
      customerName: $customerName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const transactionByEmployeeId = /* GraphQL */ `
  query TransactionByEmployeeId(
    $employeeId: String
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionByEmployeeId(
      employeeId: $employeeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const transactionByLocationId = /* GraphQL */ `
  query TransactionByLocationId(
    $locationId: String
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionByLocationId(
      locationId: $locationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const transactionByCustomerName = /* GraphQL */ `
  query TransactionByCustomerName(
    $customerName: String
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionByCustomerName(
      customerName: $customerName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const transactionByIsStoredAndTime = /* GraphQL */ `
  query TransactionByIsStoredAndTime(
    $isStored: String
    $dateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionByIsStoredAndTime(
      isStored: $isStored
      dateTime: $dateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
