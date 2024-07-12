import express from "express";
import * as CartController from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", CartController.getCarts);

router.get("/view-user-cart", authMiddleware, CartController.viewUserCart);

router.post("/add-to-cart", authMiddleware, CartController.addToCart);

export default router;
