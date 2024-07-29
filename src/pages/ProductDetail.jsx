import axios from "../axios/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    const response = await axios.get(`products/${productId}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <img
            src={product?.image}
            alt={product?.title}
            style={{ height: "60vh" }}
          />
        </div>
        <div className="col-md-12 col-lg-6 my-3">
          <h1>{product?.title}</h1>
          <small className="text-muted my-3">
            Rating: {product?.rating.rate}/5
            <span className="ms-2">({product?.rating.count} reviews)</span>
          </small>
          <h5 className="text-success my-3">Rs. {product?.price}</h5>
          <p className="text-muted">{product?.description}.</p>
          <button type="button" className="btn btn-outline-success">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
