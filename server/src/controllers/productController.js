import { addProducts, getProducts } from "../repositories/productRepos.js";

const getProductsController = async (req, res) => {
  try {
    const data = await getProducts();
    if (!data) {
      return res.status(404).json({ message: "Products not found" });
    }
    return res.status(200).json({ message: "Data received", data });
  } catch (error) {
    console.log(error);
  }
};

const addProductsController = async (req, res) => {
  const data = await addProducts(req.body.id, req.body.name, req.body.price);
  console.log("HELLO", data);
  return res.status(201).json(data);
  // try {
  //   const data = await addProducts();
  //   if (!data) {
  //     return res.status(404).json({ message: "Products not found" });
  //   }
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
};

export { getProductsController, addProductsController };
