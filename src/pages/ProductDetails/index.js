import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import Cart from "../../components/Cart";

import styles from "./styles.module.css";

const ProductDetails = () => {
  const [productData, setProductData] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    const response = await api.get(`/products/${params.details}`);
    const { data } = response;
    setProductData(data);
  };

  const handleAddToCart = () => {
    const products = [...cartProducts, { ...productData }];
    setCartProducts(products);
    if (loading === false) {
      localStorage.setItem("cartProducts", JSON.stringify(products));
    }
    navigate("/cart");
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  useEffect(() => {
    const localStorageProducts = localStorage.getItem("cartProducts");
    if (localStorageProducts) {
      const productsArray = JSON.parse(localStorageProducts);
      setCartProducts(productsArray);
    }
    setLoading(false);
  }, []);

  return (
    <div className={styles.product_details_container}>
      <h4>{productData.title}</h4>
      <img src={productData.image} alt={productData.title} />
      <p>{productData.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* <Cart cartProducts={cartProducts} /> */}
    </div>
  );
};

export default ProductDetails;
