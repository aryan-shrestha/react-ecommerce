import React, { useEffect, useState } from "react";
import { Product } from "../components";
import axios from "../axios/axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      <h3 className="my-3">Product list</h3>
      <div className="row">
        {products.map((product, index) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
