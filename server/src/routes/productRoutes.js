import express from "express";
import {
  addProductsController,
  getProductsController,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProductsController);

router.post("/", addProductsController)

export default router;
