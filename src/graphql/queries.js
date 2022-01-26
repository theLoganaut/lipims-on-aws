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
      employeeConnection {
        items {
          id
          fullName
          title
          pay
          workingAt
          hireTime
          updatedTime
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
        employeeList
        employeeConnection {
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
      workingAt
      employeeConnection {
        id
        city
        region
        image
        address
        employeeList
        employeeConnection {
          nextToken
        }
        openTime
        lastestUpdateTime
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
        workingAt
        employeeConnection {
          id
          city
          region
          image
          address
          employeeList
          openTime
          lastestUpdateTime
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
      itemConnection {
        items {
          id
          itemName
          quickTransfer
          owner
          depositLocation
          withdrawnLocation
          helpedBy
          deposited
          withdrawn
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
        storedItems
        itemConnection {
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
      owner
      customerConnection {
        id
        fullName
        membership
        outstandingPayments
        storedItems
        itemConnection {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      depositLocation
      withdrawnLocation
      helpedBy
      employeeConnection {
        items {
          id
          fullName
          title
          pay
          workingAt
          hireTime
          updatedTime
        }
        nextToken
      }
      deposited
      withdrawn
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
        customerConnection {
          id
          fullName
          membership
          outstandingPayments
          storedItems
          joinTime
          latestUpdateTime
        }
        depositLocation
        withdrawnLocation
        helpedBy
        employeeConnection {
          nextToken
        }
        deposited
        withdrawn
      }
      nextToken
    }
  }
`;
export const getPayments = /* GraphQL */ `
  query GetPayments($id: ID!) {
    getPayments(id: $id) {
      id
      amount
      itemID {
        id
        itemName
        quickTransfer
        owner
        customerConnection {
          id
          fullName
          membership
          outstandingPayments
          storedItems
          joinTime
          latestUpdateTime
        }
        depositLocation
        withdrawnLocation
        helpedBy
        employeeConnection {
          nextToken
        }
        deposited
        withdrawn
      }
      customerID {
        id
        fullName
        membership
        outstandingPayments
        storedItems
        itemConnection {
          nextToken
        }
        joinTime
        latestUpdateTime
      }
      outstanding
      paymentStartDate
      paidDate
      paymentsItemIDId
      paymentsCustomerIDId
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        itemID {
          id
          itemName
          quickTransfer
          owner
          depositLocation
          withdrawnLocation
          helpedBy
          deposited
          withdrawn
        }
        customerID {
          id
          fullName
          membership
          outstandingPayments
          storedItems
          joinTime
          latestUpdateTime
        }
        outstanding
        paymentStartDate
        paidDate
        paymentsItemIDId
        paymentsCustomerIDId
      }
      nextToken
    }
  }
`;
