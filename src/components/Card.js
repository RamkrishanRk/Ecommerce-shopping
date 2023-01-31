import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add_Card } from "../redux/actions/AddToCard";
import products from "../components/Products";
import Layout from "./Layout";

const Card = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(products);

  const addToCart = (e) => {
    console.log(e);
    dispatch(Add_Card(e));
  };
  return (
    <Layout>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((item, index) => {
            return (
              <>
                <div className="mx-2 mt-4 mb-4" style={{ width: "22rem" }}>
                  <div className="card-next-img" key={index}>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt="image-tag"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title pt-2 pb-2">{item.title}</h5>
                    <p className="card-text text-success pb-2">₹{item.price}</p>
                  </div>
                  <button
                    className="btn btn-primary w-100"
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
