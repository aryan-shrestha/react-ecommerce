import React from "react";
import { useState, useEffect } from "react";

import axios from "../axios/axios";

const HomepageRow = ({ categoryName }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(`/products/category/${categoryName}`);
    setProducts(response.data.slice(0, 4));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="row mb-5">
      <h3 className="text-capitalize">{categoryName}</h3>
      {products.map((product, index) => {
        return (
          <div className="col-12 col-md-4 col-lg-3" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "30vh", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.length > 20
                    ? `${product.title.slice(0, 20)}...`
                    : product.title}
                </h5>
                <a href="#" className="btn btn-primary">
                  See detail
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomepageRow;
