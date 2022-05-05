import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import ProductCard from "../ProductCard";

import styles from "./styles.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await api.get("products");
    const { data } = response;
    setProducts(data);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.product_container}>
      {products.map((productItem) => {
        return <ProductCard key={productItem.id} {...productItem} />;
      })}
    </div>
  );
};

export default ProductList;
