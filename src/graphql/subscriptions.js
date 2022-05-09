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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      hireTime
      updatedTime
      locationEmployeeListId
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
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      hireTime
      updatedTime
      locationEmployeeListId
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
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
        }
        nextToken
      }
      hireTime
      updatedTime
      locationEmployeeListId
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
      allTransactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      fullName
      membership
      outstandingPayments
      allTransactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      fullName
      membership
      outstandingPayments
      allTransactions {
        items {
          id
          itemID
          employeeId
          locationId
          customerName
          isStored
          dateTime
          employeeTransactionsId
          customerAllTransactionsId
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
        itemID
        employeeId
        locationId
        customerName
        customerData {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        isStored
        dateTime
        employeeTransactionsId
        customerAllTransactionsId
      }
      customerStoredItemsId
      itemTransactionsId
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
        itemID
        employeeId
        locationId
        customerName
        customerData {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        isStored
        dateTime
        employeeTransactionsId
        customerAllTransactionsId
      }
      customerStoredItemsId
      itemTransactionsId
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
        itemID
        employeeId
        locationId
        customerName
        customerData {
          id
          fullName
          membership
          outstandingPayments
          joinTime
          latestUpdateTime
        }
        isStored
        dateTime
        employeeTransactionsId
        customerAllTransactionsId
      }
      customerStoredItemsId
      itemTransactionsId
    }
  }
`;
export const onCreateTransactions = /* GraphQL */ `
  subscription OnCreateTransactions {
    onCreateTransactions {
      id
      itemID
      employeeId
      locationId
      customerName
      customerData {
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
      isStored
      dateTime
      employeeTransactionsId
      customerAllTransactionsId
    }
  }
`;
export const onUpdateTransactions = /* GraphQL */ `
  subscription OnUpdateTransactions {
    onUpdateTransactions {
      id
      itemID
      employeeId
      locationId
      customerName
      customerData {
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
      isStored
      dateTime
      employeeTransactionsId
      customerAllTransactionsId
    }
  }
`;
export const onDeleteTransactions = /* GraphQL */ `
  subscription OnDeleteTransactions {
    onDeleteTransactions {
      id
      itemID
      employeeId
      locationId
      customerName
      customerData {
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
      isStored
      dateTime
      employeeTransactionsId
      customerAllTransactionsId
    }
  }
`;
