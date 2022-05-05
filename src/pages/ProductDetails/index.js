import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import styles from "./styles.module.css";

const ProductDetails = () => {
  const [productData, setProductData] = useState({});
  const params = useParams();

  const fetchProductDetails = async () => {
    const response = await api.get(`/products/${params.details}`);
    const { data } = response;
    setProductData(data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className={styles.product_details_container}>
      <h4>{productData.title}</h4>
      <img src={productData.image} alt={productData.title} />
      <p>{productData.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
