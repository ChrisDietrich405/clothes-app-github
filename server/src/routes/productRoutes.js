import express from "express";
import {
  addProductsController,
  getProductsController,
  deleteProductController,
  updateProductController,
  
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProductsController);

router.post("/", addProductsController);

router.delete("/", deleteProductController);

router.put("/", updateProductController);

export default router;
