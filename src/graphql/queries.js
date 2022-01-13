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
      employeeList
      employees {
        items {
          id
          fullName
          title
          pay
          cityLocation
          hireTime
          updatedTime
        }
        nextToken
      }
      createdAt
      updatedAt
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
        employeeList
        employees {
          nextToken
        }
        createdAt
        updatedAt
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
      cityLocation
      location {
        id
        city
        region
        image
        address
        employeeList
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      hireTime
      updatedTime
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
        cityLocation
        location {
          id
          city
          region
          image
          address
          employeeList
          createdAt
          updatedAt
        }
        hireTime
        updatedTime
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
      storedItems
      item {
        items {
          id
          itemName
          quickTransfer
          owner
          storageData
        }
        nextToken
      }
      startTime
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
        storedItems
        item {
          nextToken
        }
        startTime
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
      owner
      customer {
        id
        fullName
        membership
        outstandingPayments
        storedItems
        item {
          nextToken
        }
        startTime
        latestUpdateTime
      }
      storageData
      holdingData {
        id
        city
        helpedByEmployee
        location {
          id
          city
          region
          image
          address
          employeeList
          createdAt
          updatedAt
        }
        employee {
          id
          fullName
          title
          pay
          cityLocation
          hireTime
          updatedTime
        }
        deposited
        withdrawn
      }
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
        owner
        customer {
          id
          fullName
          membership
          outstandingPayments
          storedItems
          startTime
          latestUpdateTime
        }
        storageData
        holdingData {
          id
          city
          helpedByEmployee
          deposited
          withdrawn
        }
      }
      nextToken
    }
  }
`;
export const getHoldingData = /* GraphQL */ `
  query GetHoldingData($id: ID!) {
    getHoldingData(id: $id) {
      id
      city
      helpedByEmployee
      location {
        id
        city
        region
        image
        address
        employeeList
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      employee {
        id
        fullName
        title
        pay
        cityLocation
        location {
          id
          city
          region
          image
          address
          employeeList
          createdAt
          updatedAt
        }
        hireTime
        updatedTime
      }
      deposited
      withdrawn
    }
  }
`;
export const listHoldingData = /* GraphQL */ `
  query ListHoldingData(
    $filter: ModelHoldingDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHoldingData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        city
        helpedByEmployee
        location {
          id
          city
          region
          image
          address
          employeeList
          createdAt
          updatedAt
        }
        employee {
          id
          fullName
          title
          pay
          cityLocation
          hireTime
          updatedTime
        }
        deposited
        withdrawn
      }
      nextToken
    }
  }
`;
export const byCity = /* GraphQL */ `
  query ByCity(
    $city: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byCity(
      city: $city
      id: $id
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
        employeeList
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byEmployeeName = /* GraphQL */ `
  query ByEmployeeName(
    $fullName: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byEmployeeName(
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
        title
        pay
        cityLocation
        location {
          id
          city
          region
          image
          address
          employeeList
          createdAt
          updatedAt
        }
        hireTime
        updatedTime
      }
      nextToken
    }
  }
`;
export const byCustomerName = /* GraphQL */ `
  query ByCustomerName(
    $fullName: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byCustomerName(
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
        storedItems
        item {
          nextToken
        }
        startTime
        latestUpdateTime
      }
      nextToken
    }
  }
`;
export const byItemName = /* GraphQL */ `
  query ByItemName(
    $itemName: String
    $idOwner: ModelItemByItemNameCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byItemName(
      itemName: $itemName
      idOwner: $idOwner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemName
        quickTransfer
        owner
        customer {
          id
          fullName
          membership
          outstandingPayments
          storedItems
          startTime
          latestUpdateTime
        }
        storageData
        holdingData {
          id
          city
          helpedByEmployee
          deposited
          withdrawn
        }
      }
      nextToken
    }
  }
`;
