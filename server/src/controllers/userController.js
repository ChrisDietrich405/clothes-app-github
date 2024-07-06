import * as UserRepos from "../repositories/userRepos.js";
import bcrypt from "bcryptjs";

const getUsers = async (req, res) => {
  const users = await UserRepos.getUsers();
  return res.status(200).json({ message: "Received all users", users });
};

const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const newUser = await UserRepos.registerUser(
      req.body.first_name,
      req.body.last_name,
      hashedPassword
    );
    console.log(newUser);
    return res.status(200).json({ message: "Added new user", newUser });
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, registerUser };
