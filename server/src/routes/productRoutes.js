import express from "express";
import * as ProductsController from "../controllers/productController.js";

const router = express.Router();

router.get("/", ProductsController.getAll); 

router.get("/:id", ProductsController.getOne);

router.post("/", ProductsController.add);

router.delete("/", ProductsController.remove);

router.put("/:id", ProductsController.update);

export default router;
