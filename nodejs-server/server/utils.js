// const { log } = require("console");
// const fs = require("fs");
///
import fs from "fs";
///
// const users = require("./users.json");

export const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("./users.json");
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (e) {
    return [];
  }
};
export const loadAccounts = () => {
  try {
    const dataBuffer = fs.readFileSync("./accounts.json");
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (e) {
    return [];
  }
};

const saveUsers = (data) => {
  const dataJson = JSON.stringify(data);
  fs.writeFileSync("users.json", dataJson);
};
const saveAccounts = (data) => {
  const dataJson = JSON.stringify(data);
  fs.writeFileSync("accounts.json", dataJson);
};

// const findUser = (userToFind, res) => {
//   const users = loadUsers();
//   const checkUserIndex = users.findIndex((user) => user.id === userToFind);
//   if (checkUserIndex === -1) {
//     res.status(400).send("user dose'nt exists");
//     return;
//   }
//   return checkUserIndex;
// };

// const findAccount=(accountToFind, res) => {
//   const checkAccount = users.findIndex(
//     (user) => user.account === accountToDeposit
//   );
//   if (checkAccount !== -1) {
//     res.status(400).send("account not found");
//     return;
//   }

// }
export const getUserDetails = ({ id }, res) => {
  const users = loadUsers();
  const accounts = loadAccounts();
  const checkUserIndex = users.findIndex((user) => user.id === id);
  if (checkUserIndex === -1) {
    res.status(400).send("user dose'nt exists");
    return;
  }
  // const checkUserIndex = findUser(id, res);
  const userAccount = users[checkUserIndex].account;
  const accountDetails = userAccount.map((useracc) => {
    return accounts.filter((account) => {
      return useracc === account.accountNum;
    });
  });
  accountDetails.filter((useracc) => useracc !== undefined);
  return { ...users[checkUserIndex], ...accountDetails };
};

export const createUser = (newUser, res) => {
  const users = loadUsers();
  const accounts = loadAccounts();
  const checkUser = users.findIndex((user) => user.id === newUser.id);
  console.log(checkUser);
  if (checkUser !== -1) {
    res.status(400).send("user already exists");
    return;
  }
  const checkAccount = users.findIndex(
    (user) => user.account === newUser.account
  );
  console.log(checkAccount);
  if (checkAccount !== -1) {
    res.status(400).send("account already exists");
    return;
  }
  const accountArr = [];
  newUser.account.forEach((account) => {
    accountArr.push(account);
    const newAccountObj = {
      accountNum: account,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    };
    accounts.push(newAccountObj);
  });
  const newUserObj = {
    id: newUser.id,
    cash: newUser.cash ? newUser.cash : 0,
    credit: newUser.credit ? newUser.credit : 0,
    account: accountArr,
  };
  users.push(newUserObj);
  saveUsers(users);
  saveAccounts(accounts);
};

export const deleteUser = (deleteUser, res) => {
  const users = loadUsers();
  const filteredUsers = users.filter((user) => user.id !== deleteUser.id);
  if (users.length !== filteredUsers.length) {
    saveUsers(filteredUsers);
  } else {
    res.status(400).send("No user with that specific id");
  }
};

export const updateUserDeposit = ({ id, cash, accountToDeposit }, res) => {
  const users = loadUsers();
  const accounts = loadAccounts();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    const checkAccount = users.findIndex(
      (user) => user.account === accountToDeposit
    );
    if (checkAccount !== -1) {
      res.status(400).send("account not found");
      return;
    }
    const accountDetails = accounts.filter((account) => {
      return account.accountNum === accountToDeposit;
    });

    accountDetails[0].cash = accountDetails[0].cash + cash;
    users[userIndex].cash += cash;
    const tempAccounts = accounts.filter(
      (account) => account.accountNum !== accountDetails[0].accountNum
    );

    const newAccountObj = {
      accountNum: accountDetails[0].accountNum,
      cash: accountDetails[0].cash,
      credit: accountDetails[0].credit,
      minusInterest: 1.3,
    };
    tempAccounts.push(newAccountObj);
    saveUsers(users);
    saveAccounts(tempAccounts);
  } else {
    res.status(400).send("No user with that specific id");
  }
};
export const updateUserCredit = ({ id, credit, accountToCredit }, res) => {
  const users = loadUsers();
  const accounts = loadAccounts();
  const userIndex = users.findIndex((user) => user.id === id);
  if (credit <= 0) {
    res.status(400).send("only positive number for credit update");
    return;
  }
  if (userIndex !== -1) {
    const accountDetails = accounts.filter((account) => {
      return account.accountNum === accountToCredit;
    });
    accountDetails[0].credit = credit;
    users[userIndex].credit = credit;

    const tempAccounts = accounts.filter(
      (account) => account.accountNum !== accountDetails[0].accountNum
    );
    const newAccountObj = {
      accountNum: accountDetails[0].accountNum,
      cash: accountDetails[0].cash,
      credit: accountDetails[0].credit,
      minusInterest: 1.3,
    };
    tempAccounts.push(newAccountObj);
    saveUsers(users);
    saveAccounts(tempAccounts);
  } else {
    res.status(400).send("No user with that specific id");
  }
};
export const updateUserWithdraw = ({ id, cash }, res) => {
  const users = loadUsers();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    res.status(400).send("No user with that specific id");
    return;
  }
  const userCredit = users[userIndex].credit;
  const userCash = users[userIndex].cash;
  if (Math.abs(userCash - cash) < userCredit) {
    users[userIndex].cash -= cash;
    saveUsers(users);
  } else {
    res.status(400).send("No user credit to withdraw");
  }
};
export const updateUserTransfer = ({ id, cash, accountToTransfer }, res) => {
  const users = loadUsers();
  const userIndex = users.findIndex((user) => user.id === accountToTransfer);

  if (userIndex === -1) {
    res.status(400).send("No user with that specific id");
    return;
  }
  const transferObj = {
    id: accountToTransfer,
    cash: cash,
  };
  updateUserDeposit(transferObj, res);
  // const userCredit = users[userIndex].credit;
  // const userCash = users[userIndex].cash;
  // if (Math.abs(userCash - cash) < userCredit) {
  //   users[userIndex].cash -= cash;
  //   save(users);
  // } else {
  //   res.status(400).send("No user credit to withdraw");
  // }
};
// module.exports = {
//   createUser,
//   loadAccounts,
//   loadUsers,
//   getUserDetails,
//   deleteUser,
//   updateUserDeposit,
//   updateUserCredit,
//   updateUserWithdraw,
//   updateUserTransfer,
// };
