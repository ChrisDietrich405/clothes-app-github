import Products from "../models/productModels.js";

const getProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

// const addProducts = async (req, res) => {
//   const { id, name, price } = req.body;
//   console.log(name);
// };

export default getProducts 
