import express from "express";
import bodyParser from "body-parser";
import sequelize from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

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
