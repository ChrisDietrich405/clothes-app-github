import express from "express";
import Products from "../models/productModels.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allProducts = await Products.findAll();
  res.status(200).json(allProducts);
});

// Define routes
// router.get("/", async (req, res) => {
//   try {
//     const [rows, fields] = await connection.query("SELECT * FROM products");
//     console.log(fields);
//     return res.status(200).json(rows);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).send("Server error");
//   }
// });

// Router.post("/", (req, res) => {
//     res.send("Create a new user");
// });

export default router;
