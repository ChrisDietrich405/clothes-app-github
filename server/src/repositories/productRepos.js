import Products from "../models/productModels.js";

const getProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

const addProducts = async (id, name, price) => {
  return await Products.create({id, name, price})
};

export { getProducts, addProducts };
