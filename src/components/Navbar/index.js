import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { logo } from "../../../public/images/logo.jpg";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

import logo from "./jhonsons-logo.png";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const { isUserLoggedIn } = useContext(UserContext);
  return (
    <nav className={styles.nav_container}>
      <span
        onClick={() => setHideNavbar(!hideNavbar)}
        className={`material-symbols-outlined ${styles.hamburger}`}
      >
        menu
      </span>
      <div className={styles.inner_container}>
        <div className={styles.logo_container}>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "65px", margin: "0px" }}
            />
          </Link>
        </div>

        <div
          className={
            hideNavbar
              ? `${styles.hide_navbar} ${styles.links_container}`
              : styles.links_container
          }
        >
          <ul>
            <Link to="/">{isUserLoggedIn ? "" : <li>Log In</li>}</Link>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
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
