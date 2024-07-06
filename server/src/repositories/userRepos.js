import Users from "../models/userModels.js";

const getUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const registerUser = async (first_name, last_name, email, password) => {
  return await Users.create({ first_name, last_name, email, password });
};

export { getUsers, registerUser };
