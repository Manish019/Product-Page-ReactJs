import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SingleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Safely access product data

  if (!product) {
    return <p>Product data not found!</p>; // Handle missing product data
  }

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedName, setSelectedName] = useState(product.name);

  const handleColorChange = (colorOption) => {
    if (colorOption.image) {
      setSelectedImage(colorOption.image); // Update the image
      setSelectedName(`${colorOption.color} ${product.name.split(" ")[1]}`); // Update the name dynamically
    }
  };

  return (
    <div className="single-product-container">
      <button className="back-button" onClick={() => navigate("/")}>
        &#8592; Back
      </button>
      <div className="product-left">
        <img
          src={selectedImage}
          alt={selectedName}
          className="product-image"
        />
      </div>
      <div className="product-right">
        <h1 className="product-title">{selectedName}</h1>
        <p className="product-description">{product.description}</p>
        <h3 className="product-price">{product.price}</h3>
        <div className="color-options">
          <h4>Available Colors:</h4>
          <div className="color-buttons">
            {product.colors?.map((colorOption, index) => (
              <button
                key={index}
                className="color-button"
                style={{
                  backgroundColor: colorOption.color.toLowerCase(),
                  border: "1px solid #ccc",
                }}
                onClick={() => handleColorChange(colorOption)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;