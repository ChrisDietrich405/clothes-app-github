import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const navigate = useNavigate();

  const cartProductTotals = cartProducts.reduce(
    (total, cartProduct) => {
      const { price } = cartProduct;
      total.totalItems++;
      total.totalPrice += price;
      return total;
    },
    {
      totalItems: 0,
      totalPrice: 0,
    }
  );

  useEffect(() => {
    const localStorageProducts = localStorage.getItem("cartProducts");
    const products = JSON.parse(localStorageProducts);

    const productsArray = [];
    products.forEach((cartProduct) => {
      const index = productsArray.findIndex(
        (arrayProduct) => arrayProduct.id === cartProduct.id
      );
      if (index !== -1) {
        productsArray[index].total++;
      } else {
        const newProduct = { ...cartProduct, total: 1 };
        productsArray.push(newProduct);
      }
    });
    setCartProducts(productsArray);
  }, []);

  return (
    <div className={styles.cart_container}>
      <ul className={styles.list_container}>
        {cartProducts.map((product) => {
          return (
            <div className={styles.product_container}>
              <img src={product.image} alt={product.title} />
              <div className={styles.product_information_container}>
                <h4>{product.title}</h4>
                <strong>${product.price}</strong>
                <p>Total: {product.total}</p>
              </div>
            </div>
          );
        })}
      </ul>
      <div className={styles.cart_summary_container}>
        <h3>Cart Summary</h3>
        <p>Total: {cartProductTotals.totalItems}</p>
        <p>Total Price: ${cartProductTotals.totalPrice}</p>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    </div>
  );
};

export default Cart;
