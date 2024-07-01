import express from "express";

const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("List of users");
});

router.post("/", (req, res) => {
  res.send("Create a new user");
});

export default router;
