import express from "express";
import {
  addProductsController,
  getProductsController,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getProductsController();
  res.status(200).json(data);
});

router.post("/", async (req, res) => {
  const data = addProductsController();
  console.log(data);
  // const data = await addProductsController();
  // res.status(200).json(data);
});

export default router;
