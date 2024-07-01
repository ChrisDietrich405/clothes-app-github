import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Jhonson's Best</h1>
      <p>
        Jhonson's Best offers you the best clothing and jewelry options for the
        best prices
      </p>
      <button onClick={handleNavigate}>Check out our products</button>
    </div>
  );
};

export default Home;
