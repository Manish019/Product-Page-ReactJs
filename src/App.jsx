import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product-details" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default App;