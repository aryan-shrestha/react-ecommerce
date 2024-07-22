import React from "react";
import { useEffect, useState } from "react";

import axios from "../axios/axios";

import { Carousel, HomepageRow } from "../components";

const Homepage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await axios.get("/products/categories/");
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <Carousel />
      {categories.map((item, index) => {
        return <HomepageRow categoryName={item} key={index} />;
      })}
    </div>
  );
};

export default Homepage;
