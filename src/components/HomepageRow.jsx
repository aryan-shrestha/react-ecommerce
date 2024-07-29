import React from "react";
import { useState, useEffect } from "react";

import axios from "../axios/axios";
import { Product } from ".";

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
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default HomepageRow;
