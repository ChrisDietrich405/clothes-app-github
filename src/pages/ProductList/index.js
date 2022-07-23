import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import ProductCard from "../ProductCard";
import { TailSpin } from "react-loader-spinner";

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
    <div className={styles.product_list_container}>
      <h1>Product List</h1>
      {loading ? (
        <TailSpin color="#00BFFF" height={80} width={80} />
      ) : (
        <div className={styles.product_container}>
          {products.map((productItem) => {
            return <ProductCard key={productItem.id} {...productItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
