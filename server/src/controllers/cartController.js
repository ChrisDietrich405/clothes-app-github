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

const viewUserCart = async (req, res) => {
  const userCart = await CartRepos.viewUserCart(req.user.id);
  res.status(200).json(userCart);
};

const addToCart = () => {
  console.log("hello chris");
  
};

export { getCarts, viewUserCart, addToCart };
