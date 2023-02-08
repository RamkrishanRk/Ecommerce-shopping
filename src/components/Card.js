import React from "react";
import Layout from "./Layout";
import Hero from "../pages/Hero";
import Categories from "../pages/Categories";

const Card = () => {
  return (
    <Layout>
      <div className="container px-4 px-lg-5 mt-5 main-cart-section">
        <Hero />
        <Categories />
      </div>
    </Layout>
  );
};
export default Card;
