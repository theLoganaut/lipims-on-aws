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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateDepositData = /* GraphQL */ `
  subscription OnCreateDepositData {
    onCreateDepositData {
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
export const onUpdateDepositData = /* GraphQL */ `
  subscription OnUpdateDepositData {
    onUpdateDepositData {
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
export const onDeleteDepositData = /* GraphQL */ `
  subscription OnDeleteDepositData {
    onDeleteDepositData {
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
export const onCreateWithdrawData = /* GraphQL */ `
  subscription OnCreateWithdrawData {
    onCreateWithdrawData {
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
export const onUpdateWithdrawData = /* GraphQL */ `
  subscription OnUpdateWithdrawData {
    onUpdateWithdrawData {
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
export const onDeleteWithdrawData = /* GraphQL */ `
  subscription OnDeleteWithdrawData {
    onDeleteWithdrawData {
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
