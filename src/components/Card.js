import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add_Card } from "../redux/actions/AddToCard";
import products from "../components/Products";
import Layout from "./Layout";

const Card = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(products);

  const addToCart = (e) => {
    dispatch(Add_Card(e));
  };
  return (
    <Layout>
      <div className="container px-4 px-lg-5 mt-5 main-cart-section">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((item, index) => {
            return (
              <>
                <div className="mt-4 mb-4 col-md-3">
                  <div className="card-next-img" key={index}>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt="image-tag"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title pt-2 pb-2">{item.title}</h5>
                    <p className="card-text text-success pb-2">₹{item.price}</p>
                  </div>
                  <button
                    className="add-to-cart-section w-100"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Card;
