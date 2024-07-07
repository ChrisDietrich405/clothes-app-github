import express from "express";
import * as UsersController from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

// Define routes
router.get("/", UsersController.getUsers);

router.post("/", UsersController.registerUser);

router.get("/:id", authMiddleware, UsersController.getOneUser);

export default router;

//registration on this page
//if user wants to update
//recover password
//for later the ecommerce needs to send an email to the user after they register to confirm that it's a real person

//create a separate route for auth for logging in
