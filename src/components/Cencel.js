import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
const Cencel = () => {
  return (
    <>
      <Layout>
        <div class="container ">
          <div class="row">
            <div class="col-md-6 mx-auto mt-5">
              <div class="payment">
                <img src="https://marketplace.magento.com/media/catalog/product/d/4/d4f7_cancel-order-by-customer_5.png?width=750&height=360&store=default&image-type=image&fit=bounds" />
                <div class="content">
                  <h1>Payment Failed !</h1>
                  <p>Your transaction was Failed !</p>
                  <Link to="/">Go to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cencel;
