const express = require("express");
const Router = express.Router();

// Define routes
Router.get("/", (req, res) => {
    res.send("List of users");
});

Router.post("/", (req, res) => {
    res.send("Create a new user");
});

module.exports = Router;