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
export const createPayments = /* GraphQL */ `
  mutation CreatePayments(
    $input: CreatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    createPayments(input: $input, condition: $condition) {
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
export const updatePayments = /* GraphQL */ `
  mutation UpdatePayments(
    $input: UpdatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    updatePayments(input: $input, condition: $condition) {
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
export const deletePayments = /* GraphQL */ `
  mutation DeletePayments(
    $input: DeletePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    deletePayments(input: $input, condition: $condition) {
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
