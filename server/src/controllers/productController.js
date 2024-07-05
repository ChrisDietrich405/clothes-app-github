import {
  addProducts,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../repositories/productRepos.js";

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
  if (!req.body.id || !req.body.brand_name || !req.body.price) {
    return res
      .status(400)
      .json({ message: "Please add all necessary information" });
  }

  try {
    const data = await addProducts(
      req.body.id,
      req.body.brand_name,
      req.body.price
    );
    console.log(data);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteProductController = async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ message: "Please add id" });
  }
  deleteProduct(req.body.id);
};

const updateProductController = async (req, res) => {
  if (!req.body.id || !req.body.brand_name || !req.body.price) {
    return res
      .status(400)
      .json({ message: "Missing required fields in request body" });
  }
  const updatedProduct = updateProduct(
    req.body.id,
    req.body.brand_name,
    req.body.price
  );

  return res.status(200).json({ message: "Product updated successfully" });
};

export {
  getProductsController,
  addProductsController,
  deleteProductController,
  updateProductController,
};
