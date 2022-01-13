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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateHoldingData = /* GraphQL */ `
  subscription OnCreateHoldingData {
    onCreateHoldingData {
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
export const onUpdateHoldingData = /* GraphQL */ `
  subscription OnUpdateHoldingData {
    onUpdateHoldingData {
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
export const onDeleteHoldingData = /* GraphQL */ `
  subscription OnDeleteHoldingData {
    onDeleteHoldingData {
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
