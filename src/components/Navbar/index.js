import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { logo } from "../../../public/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.inner_container}>
        <div className={styles.logo_container}>
          <img src="../../../public/images/logo.jpg" alt="" />
          <p>hey</p>
        </div>
        <div className={styles.links_container}>
          <ul>
            <li>
              <Link to="about-us">About Us</Link>
            </li>

            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Additional Stuff</li>
            <Link to="/cart">
              <span class="material-symbols-outlined">shopping_cart</span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
