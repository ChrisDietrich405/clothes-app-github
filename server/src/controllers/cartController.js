import * as CartRepos from "../repositories/cartRepo.js";

const getCarts = async (req, res) => {
  try {
    const carts = await CartRepos.getAll();
    res.status(200).json({ carts });
  } catch (error) {
    if (error.message === "Unable to connect to the database") {
      return res.status(500).json("Problems getting data");
    }
  }
};

const getUserCart = async (req, res) => {
  const userId = req.user.id;
  console.log(userId);
};

export { getCarts, getUserCart };
