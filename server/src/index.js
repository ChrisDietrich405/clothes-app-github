import express from "express";
import dotenv from "dotenv";

import sequelize from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoute.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const syncDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

syncDB();

app.listen(port, () => {
  console.log("hello world");
});

export default app;
