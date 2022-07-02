import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import AboutUs from "./pages/AboutUs";

const AuthenticateRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default AuthenticateRoutes;
