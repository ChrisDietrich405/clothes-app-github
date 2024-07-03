import { addProducts, getProducts } from "../repositories/productRepos.js";

const getProductsController = async () => {
  try {
    const data = await getProducts();
    if (!data) {
      return res.status(404).json({ message: "Products not found" });
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addProductsController = async () => {
  const data = await addProducts();
  console.log("HELLO", data);
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
