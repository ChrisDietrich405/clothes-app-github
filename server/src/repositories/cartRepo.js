import Cart from "../models/cartModel.js";

const getAll = async () => {
  const allCarts = await Cart.findAll();
  return allCarts;
};

export { getAll }