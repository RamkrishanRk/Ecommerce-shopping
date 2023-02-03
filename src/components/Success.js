import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Success = () => {
  return (
    <>
      <Layout>
        <div class="container ">
          <div class="row">
            <div class="col-md-6 mx-auto mt-5">
              <div class="payment">
                <div class="payment_header">
                  <div class="check">
                    <svg
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        points="6 13 10.2 16.6 18 7"
                      />
                    </svg>
                  </div>
                </div>
                <div class="content">
                  <h1>Payment Success !</h1>
                  <p>Your transaction was successful!</p>
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
export default Success;
