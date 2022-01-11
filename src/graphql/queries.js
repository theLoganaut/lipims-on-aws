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
      location {
        id
        city
        region
        image
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      employeeLocationId
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
        location {
          id
          city
          region
          image
          address
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        employeeLocationId
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
      paymentTotal
      storedItems {
        id
        itemName
        quickTransfer
        owner {
          id
          fullName
          membership
          paymentTotal
          createdAt
          updatedAt
        }
        deposit {
          createdAt
          id
          updatedAt
        }
        withdraw {
          createdAt
          id
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        paymentTotal
        storedItems {
          id
          itemName
          quickTransfer
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        paymentTotal
        storedItems {
          id
          itemName
          quickTransfer
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      deposit {
        location {
          id
          city
          region
          image
          address
          createdAt
          updatedAt
        }
        employee {
          id
          fullName
          title
          pay
          createdAt
          updatedAt
          employeeLocationId
        }
        createdAt
        id
        updatedAt
      }
      withdraw {
        location {
          id
          city
          region
          image
          address
          createdAt
          updatedAt
        }
        employee {
          id
          fullName
          title
          pay
          createdAt
          updatedAt
          employeeLocationId
        }
        createdAt
        id
        updatedAt
      }
      createdAt
      updatedAt
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
          paymentTotal
          createdAt
          updatedAt
        }
        deposit {
          createdAt
          id
          updatedAt
        }
        withdraw {
          createdAt
          id
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepositData = /* GraphQL */ `
  query GetDepositData($id: ID!) {
    getDepositData(id: $id) {
      location {
        id
        city
        region
        image
        address
        createdAt
        updatedAt
      }
      employee {
        id
        fullName
        title
        pay
        location {
          id
          city
          region
          image
          address
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        employeeLocationId
      }
      createdAt
      id
      updatedAt
    }
  }
`;
export const listDepositData = /* GraphQL */ `
  query ListDepositData(
    $filter: ModelDepositDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepositData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        location {
          id
          city
          region
          image
          address
          createdAt
          updatedAt
        }
        employee {
          id
          fullName
          title
          pay
          createdAt
          updatedAt
          employeeLocationId
        }
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWithdrawData = /* GraphQL */ `
  query GetWithdrawData($id: ID!) {
    getWithdrawData(id: $id) {
      location {
        id
        city
        region
        image
        address
        createdAt
        updatedAt
      }
      employee {
        id
        fullName
        title
        pay
        location {
          id
          city
          region
          image
          address
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        employeeLocationId
      }
      createdAt
      id
      updatedAt
    }
  }
`;
export const listWithdrawData = /* GraphQL */ `
  query ListWithdrawData(
    $filter: ModelWithdrawDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWithdrawData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        location {
          id
          city
          region
          image
          address
          createdAt
          updatedAt
        }
        employee {
          id
          fullName
          title
          pay
          createdAt
          updatedAt
          employeeLocationId
        }
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
