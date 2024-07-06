import * as AuthRepos from "../repositories/authRepo.js";

const auth = async (req, res) => {
  try {
    const { password } = req.body;
    


    const authorization = await AuthRepos.auth(password);
  } catch (error) {
    console.log(error);
  }
};

export { auth };
