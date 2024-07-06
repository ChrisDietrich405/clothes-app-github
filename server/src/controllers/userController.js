import generatePassword from "../helpers/generateBcryptPassword.js";
import * as UserRepos from "../repositories/userRepos.js";

const getUsers = async (req, res) => {
  const users = await UserRepos.getUsers();
  return res.status(200).json({ message: "Received all users", users });
};

const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, password } = req.body;

    if (!first_name || !last_name || !password) {
      return res.status(400).json({ message: "Please add all information" });
    }

    const hashedPassword = await generatePassword(password);

    const newUser = await UserRepos.registerUser(
      first_name,
      last_name,
      hashedPassword
    );
    console.log(newUser);

    return res.status(201).json({ message: "Added new user", newUser });
  } catch (error) {
    console.error("Error registering new user:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while registering the user" });
  }
};

export { getUsers, registerUser };
