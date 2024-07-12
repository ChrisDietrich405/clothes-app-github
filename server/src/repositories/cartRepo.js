import Cart from "../models/cartModel.js";

const getAll = async () => {
  const allCarts = await Cart.findAll();
  return allCarts;
};

const viewUserCart = async (userId) => {
  const userCart = await Cart.findAll({
    where: {
      user_id: userId,
    },
  });
  return userCart;
};

export { getAll, viewUserCart };
