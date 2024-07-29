import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={product.id}>
      <div className="card">
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
          <Link
            to={`/products/detail/${product.id}`}
            className="btn btn-primary"
          >
            See detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
