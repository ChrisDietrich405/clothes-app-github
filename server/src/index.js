const express = require("express");
const app = express();
const mysql = require("mysql2");
// const connection = require("./config/db");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret",
  database: "clothes",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// module.exports = connection;

// const syncDB = async () => {
//   try {
//     await connection();
//     console.log("Connection successful");
//   } catch (error) {
//     console.log("Not connecting to database");
//   }
// };

// syncDB();

app.listen("3001", () => {
  console.log("hello world");
});

module.exports = app;
