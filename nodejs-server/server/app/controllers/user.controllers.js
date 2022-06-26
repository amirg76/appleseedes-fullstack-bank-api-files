import {
  getAllUsers,
  createAllUsers,
  getUserById,
} from "../services/user.services.js";

export const getAll = async (req, res) => {
  try {
    const savedUsers = await getAllUsers();
    res.send(savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
export const createAll = async (req, res) => {
  try {
    const savedUsers = await createAllUsers();
    res.send(" Succesfully created ! New data: " + savedUsers);
  } catch (error) {
    res.send(error.message);
  }
};
export const getById = async (req, res) => {
  try {
    const userId = req.body.id;
    console.log(userId);
    const savedProduct = await getUserById(userId);
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
