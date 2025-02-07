import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/LayOut/LayOut";
import LandingPage from "./Components/LandingPage/LandingPage";
import Category from "./Pages/Category/Category";
import ProductDetail from "./Pages/ProductPage/ProductDetail";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;
