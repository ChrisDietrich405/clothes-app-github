import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

const AuthenticateRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/:details" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default AuthenticateRoutes;
