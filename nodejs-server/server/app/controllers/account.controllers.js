import { createAllAccounts } from "../services/account.services.js";
export const createAccAll = async (req, res) => {
  try {
    const savedAccounts = await createAllAccounts();
    res.send(" Succesfully created ! New data: " + savedAccounts);
  } catch (error) {
    res.send(error.message);
  }
};
