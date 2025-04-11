import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductPage.css";
import { products } from "./Store/product"; // Import the product data
import { useNavigate } from "react-router-dom";

export const ProductPage = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    navigate("/product-details", { state: { product } }); // Pass product data in state
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="product-page-title">Product Page</h1>
        </div>
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ width: "50%", height: "50%" }}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;