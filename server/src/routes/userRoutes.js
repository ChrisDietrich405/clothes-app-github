import express from "express";
import { getUsersController } from "../controllers/userController.js";

const router = express.Router();

// Define routes
router.get("/", getUsersController );

router.post("/", (req, res) => {
  res.send("Create a new user");
});

export default router;


//registration on this page
//if user wants to update
//recover password 
//for later the ecommerce needs to send an email to the user after they register to confirm that it's a real person 

//create a separate route for auth for logging in