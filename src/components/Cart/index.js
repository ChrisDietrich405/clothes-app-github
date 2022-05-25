import React from "react";

const Cart = ({ cartProducts }) => {
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

  return (
    <>
      <ul>
        {cartProducts.map((product) => {
          return <li>{product.title}</li>;
        })}
      </ul>
      <div>{cartProductTotals.totalItems}</div>
      <div>${cartProductTotals.totalPrice}</div>
    </>
  );
};

export default Cart;
