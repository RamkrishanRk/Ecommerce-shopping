import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Success = () => {
  return (
    <>
      <Layout>
        <div className="container m-5 pb-4">
          <div className="row">
            <div className="col-md-6 mx-auto mt-5">
              <div className="payment">
                <div className="payment_header">
                  <div className="check">
                    <svg
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        points="6 13 10.2 16.6 18 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="content">
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
