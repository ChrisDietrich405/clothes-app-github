import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import { UserContext } from "../../UserContext";
import { api } from "../../services/api";

import styles from "./styles.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ProductDetails = () => {
  const { isUserLoggedIn } = useContext(UserContext);

  const [productData, setProductData] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await api.get(`/products/${params.details}`);
    const { data } = response;
    setProductData(data);
    setLoading(false);
  };

  const handleAddToCart = () => {
    let newCartProducts = [];
    const index = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === productData.id
    );
    if (index !== -1) {
      newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === productData.id) {
          return { ...cartProduct, total: cartProduct.total + 1 };
        } else {
          return cartProduct;
        }
      });
      setCartProducts(newCartProducts);
    } else {
      newCartProducts = [...cartProducts, { ...productData, total: 1 }];
      setCartProducts(newCartProducts);
    }

    if (loading === false) {
      localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
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
  }, []);

  return (
    <div className={styles.product_details_container}>
      {loading ? (
        <TailSpin color="#00BFFF" height={80} width={80} />
      ) : (
        <div>
          <h4>{productData.title}</h4>
          <img src={productData.image} alt={productData.title} />
          <p className={styles.product_details_paragraph}>
            {productData.description}
          </p>
          {isUserLoggedIn ? (
            <button onClick={handleAddToCart}>Add to Cart </button>
          ) : (
            <button onClick={() => navigate("/")}>Log In</button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
