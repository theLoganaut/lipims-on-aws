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
      nextToken
    }
  }
`;
export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!) {
    getTransactions(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEmployeeTransactions = /* GraphQL */ `
  query GetEmployeeTransactions($id: ID!) {
    getEmployeeTransactions(id: $id) {
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
export const listEmployeeTransactions = /* GraphQL */ `
  query ListEmployeeTransactions(
    $filter: ModelEmployeeTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        employeeID
        transactionsID
        employee {
          id
          fullName
          title
          pay
          recentlyHelped
          hireTime
          updatedTime
          locationEmployeeListId
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
        createdAt
        updatedAt
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
export const employeeNameAndPay = /* GraphQL */ `
  query EmployeeNameAndPay(
    $fullName: String
    $payRecentlyHelped: ModelEmployeeByEmployeeNameAndPayCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeeNameAndPay(
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
export const itemByName = /* GraphQL */ `
  query ItemByName(
    $itemName: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemByName(
      itemName: $itemName
      id: $id
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
      nextToken
    }
  }
`;
export const transactionsByStorageTime = /* GraphQL */ `
  query TransactionsByStorageTime(
    $isInStorage: String
    $depositedWithdrawnId: ModelTransactionsByStorageTimeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByStorageTime(
      isInStorage: $isInStorage
      depositedWithdrawnId: $depositedWithdrawnId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
