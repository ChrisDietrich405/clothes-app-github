import express from "express";
import * as CartController from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", CartController.getCarts);

router.get("/:id", authMiddleware, CartController.getUserCart);

// router.get("/:id", ProductsController.getOne);

// router.post("/", ProductsController.add);

// router.delete("/", ProductsController.remove);

// router.put("/:id", ProductsController.update);

export default router;
