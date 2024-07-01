import express from "express";
import mysql from "mysql2";
// import { connection } from "./config/db";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// const syncDB = async () => {
//   try {
//     await connection();
//     console.log("Connection successful");
//   } catch (error) {
//     console.log("Not connecting to database");
//   }
// };

// syncDB();



app.listen("3000", () => {
  console.log("hello world");
});

export default app;
