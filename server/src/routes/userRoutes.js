import express from "express";
import { getUsersController } from "../controllers/userController.js";

const router = express.Router();

// Define routes
router.get("/", getUsersController );

router.post("/", (req, res) => {
  res.send("Create a new user");
});

export default router;
