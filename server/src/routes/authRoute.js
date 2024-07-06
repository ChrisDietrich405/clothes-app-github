import express from "express";
import * as AuthController from "../controllers/authController.js";

const router = express.Router();

router.post("/", AuthController.auth);

export default router;
