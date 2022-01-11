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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createDepositData = /* GraphQL */ `
  mutation CreateDepositData(
    $input: CreateDepositDataInput!
    $condition: ModelDepositDataConditionInput
  ) {
    createDepositData(input: $input, condition: $condition) {
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
      }
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateDepositData = /* GraphQL */ `
  mutation UpdateDepositData(
    $input: UpdateDepositDataInput!
    $condition: ModelDepositDataConditionInput
  ) {
    updateDepositData(input: $input, condition: $condition) {
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
      }
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteDepositData = /* GraphQL */ `
  mutation DeleteDepositData(
    $input: DeleteDepositDataInput!
    $condition: ModelDepositDataConditionInput
  ) {
    deleteDepositData(input: $input, condition: $condition) {
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
      }
      createdAt
      id
      updatedAt
    }
  }
`;
export const createWithdrawData = /* GraphQL */ `
  mutation CreateWithdrawData(
    $input: CreateWithdrawDataInput!
    $condition: ModelWithdrawDataConditionInput
  ) {
    createWithdrawData(input: $input, condition: $condition) {
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
      }
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateWithdrawData = /* GraphQL */ `
  mutation UpdateWithdrawData(
    $input: UpdateWithdrawDataInput!
    $condition: ModelWithdrawDataConditionInput
  ) {
    updateWithdrawData(input: $input, condition: $condition) {
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
      }
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteWithdrawData = /* GraphQL */ `
  mutation DeleteWithdrawData(
    $input: DeleteWithdrawDataInput!
    $condition: ModelWithdrawDataConditionInput
  ) {
    deleteWithdrawData(input: $input, condition: $condition) {
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
      }
      createdAt
      id
      updatedAt
    }
  }
`;
