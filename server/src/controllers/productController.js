import * as ProductRepos from "../repositories/productRepos.js";

const getAll = async (req, res) => {
  try {
    const products = await ProductRepos.getAll();
    return res.status(200).json(products);
  } catch (error) {
    if (error.message.includes("connect ECONNREFUSED")) {
      return res.status(500).json("Problems getting data");
    }   
      return res.status(500).json(error.message);
 
  }
};

const getOne = async (req, res) => {
  try {
    const product = await ProductRepos.getOne(req.query.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while listing product" });
  }
};

const add = async (req, res) => {
  if (!req.body.brand_name || !req.body.price) {
    return res
      .status(400)
      .json({ message: "Please add all necessary information" });
  }

  try {
    const product = await ProductRepos.add(req.body.brand_name, req.body.price);
    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while adding product" });
  }
};

const remove = async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ message: "Please add id" });
  }
  try {
    ProductRepos.remove(req.body.id);
    return res.status(200).json({ message: "Deleted product successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while removing product" });
  }
};

const update = async (req, res) => {
  if (!req.params.id || !req.body.brand_name || !req.body.price) {
    return res
      .status(400)
      .json({ message: "Missing required fields in request body" });
  }
  try {
    console.log(req.query.id, req.body.brand_name, req.body.price);
    const updatedProduct = await ProductRepos.update(
      req.params.id,
      req.body.brand_name,
      req.body.price
    );

    return res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while updating product" });
  }
};

export { getAll, getOne, add, remove, update };
