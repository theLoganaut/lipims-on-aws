/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreatePayments = /* GraphQL */ `
  subscription OnCreatePayments {
    onCreatePayments {
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
export const onUpdatePayments = /* GraphQL */ `
  subscription OnUpdatePayments {
    onUpdatePayments {
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
export const onDeletePayments = /* GraphQL */ `
  subscription OnDeletePayments {
    onDeletePayments {
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
