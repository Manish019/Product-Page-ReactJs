import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductPage.css";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";

export const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1.",
      price: "Rs. 100.00",
      image: product1,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2.",
      price: "Rs. 200.00",
      image: product2,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3.",
      price: "Rs. 300.00",
      image: product3,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4.",
      price: "Rs. 400.00",
      image: product4,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5.",
      price: "Rs. 500.00",
      image: product5,
    },
  ];

  return (
    <>
      <h1>Product Page</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ width: "50%", height: "50%" }}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;