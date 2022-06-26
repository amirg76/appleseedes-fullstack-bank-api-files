import { User } from "../models/user/user.model.js";

export const getAllUsers = async () => {
  return await User.findAllUsers();
};
export const createAllUsers = async () => {
  return await User.createAllTogther();
};
export const getUserById = async (userId) => {
  return await User.findUserById(userId);
};
