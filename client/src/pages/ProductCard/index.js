import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, price, description, title }) => {
  const navigate = useNavigate();

  const handleNavigateToDetailsPage = () => {
    navigate(`/${id}`);
  };
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.product_container}>
      <h5>{title}</h5>
      <img src={image} alt={title} />
      <div>
        <p>{formatter.format(price)}</p>
        <button onClick={handleNavigateToDetailsPage}>Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
