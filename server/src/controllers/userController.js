import { getUsers } from "../repositories/userRepos.js";

const getUsersController = (req, res) => {
  getUsers();
};

export { getUsersController };
