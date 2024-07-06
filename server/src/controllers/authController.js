import * as AuthRepos from "../repositories/authRepo.js";
import Users from "../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const auth = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await Users.findOne({
      where: {
        email,
      },
    });

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) {
      res.status(401).json({ message: "User not authorized" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "User authorized", token });
  } catch (error) {
    console.log(error);
  }
};

export { auth };
