import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import ProductCard from "../ProductCard";

import styles from "./styles.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await api.get("products");
    const { data } = response;
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <p>Products are loading</p>
      ) : (
        <div className={styles.product_container}>
          {products.map((productItem) => {
            return <ProductCard key={productItem.id} {...productItem} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductList;
