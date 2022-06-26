import { Account } from "../models/user/account.model.js";
export const createAllAccounts = async () => {
  return await Account.createAllAccTogther();
};
