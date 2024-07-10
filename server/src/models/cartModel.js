import { DataTypes } from "sequelize";
import db from "../config/db.js";

// Define the Cart model
const Cart = db.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Products",
        key: "id",
      },
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    taxes: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Cart;
