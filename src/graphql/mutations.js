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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createHoldingData = /* GraphQL */ `
  mutation CreateHoldingData(
    $input: CreateHoldingDataInput!
    $condition: ModelHoldingDataConditionInput
  ) {
    createHoldingData(input: $input, condition: $condition) {
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
export const updateHoldingData = /* GraphQL */ `
  mutation UpdateHoldingData(
    $input: UpdateHoldingDataInput!
    $condition: ModelHoldingDataConditionInput
  ) {
    updateHoldingData(input: $input, condition: $condition) {
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
export const deleteHoldingData = /* GraphQL */ `
  mutation DeleteHoldingData(
    $input: DeleteHoldingDataInput!
    $condition: ModelHoldingDataConditionInput
  ) {
    deleteHoldingData(input: $input, condition: $condition) {
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
