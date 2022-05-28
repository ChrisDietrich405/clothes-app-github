import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {}, [cartProducts]);

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
    setCartProducts(products);
  }, []);

  return (
    <>
      <ul>
        {cartProducts.map((product) => {
          return (
            <div>
              <h1>{product.title}</h1>
              <img src={product.image} alt={product.title} />
              <p>{product.price}</p>
              <button onClick={() => navigate("/products")}>
                Back to Products
              </button>
            </div>
          );
        })}
      </ul>
      <div>{cartProductTotals.totalItems}</div>
      <div>${cartProductTotals.totalPrice}</div>
    </>
  );
};

export default Cart;
