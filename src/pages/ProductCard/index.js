import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, price, description, title }) => {
  const navigate = useNavigate();

  const handleNavigateToDetailsPage = () => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.product_container}>
      <h5>{title}</h5>
      <img src={image} alt={title} />
      <p>{price}</p>
      <button onClick={handleNavigateToDetailsPage}>details</button>
    </div>
  );
};

export default ProductCard;
