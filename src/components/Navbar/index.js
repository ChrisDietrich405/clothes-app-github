import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { logo } from "../../../public/images/logo.jpg";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

const Navbar = () => {
  const { isUserLoggedIn } = useContext(UserContext);
  return (
    <nav className={styles.nav_container}>
      <div className={styles.inner_container}>
        <div className={styles.logo_container}>
          {/* <img src="../../../public/images/logo.jpg" alt="" /> */}
          <p>Jhonson's Best</p>
        </div>
        <div className={styles.links_container}>
          <ul>
            <Link to="/">{isUserLoggedIn ? "" : <li>Log In</li>}</Link>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Additional Stuff</li>
            <Link className={styles.cart_button} to="/cart">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
