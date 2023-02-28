import React from "react";
import Layout from "./Layout";
import Hero from "../pages/Hero";
import Categories from "../pages/Categories";
import Collections from "../pages/Collections";
import Service from "../pages/Service";
import NewsLetter from "../pages/NewsLetter";

const Card = () => {
  return (
    <Layout>
      <div className="container px-4 px-lg-5 main-cart-section">
        <Hero />
        <Collections />
        <Categories />
        <Service />
        <NewsLetter />
      </div>
    </Layout>
  );
};
export default Card;
