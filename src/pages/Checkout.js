import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const CheckoutData = useSelector((state) => state?.cartreducer?.carts);
  const [price, setPrice] = useState(0);

  const priceData = () => {
    let price = 0;
    CheckoutData.map((item) => {
      price = item?.price + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    priceData();
  }, [price]);

  return (
    <>
      <Layout>
        <section className="container py-5 checkout-billing-details">
          <h2 className="h5 text-uppercase mb-4">Shipping Address</h2>
          <div className="row">
            <div className="col-lg-8">
              <form action="#">
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <label className="form-label" for="firstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" for="lastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" for="email">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Jason@example.com"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" for="phone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      type="tel"
                      id="phone"
                      placeholder="+02 245354745"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" for="company">
                      Company name (optional)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="company"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="form-label" for="country">
                      Country
                    </label>
                    <select id="country" className="form-control rounded-0">
                      <option>Choose your country</option>
                      <option>India</option>
                      <option>Afghanistan</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label" for="address">
                      Address line 1
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="address"
                      placeholder="House number and street name"
                    />
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label" for="addressalt">
                      Address line 2
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="addressalt"
                      placeholder="Apartment, Suite, Unit, etc (optional)"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" for="city">
                      Town/City
                    </label>
                    <input className="form-control" type="text" id="city" />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" for="state">
                      State/County
                    </label>
                    <input className="form-control" type="text" id="state" />
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-link text-dark p-0 shadow-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="alternateAddress"
                        />
                        <label
                          className="form-check-label"
                          for="alternateAddress"
                        >
                          Alternate billing address
                        </label>
                      </div>
                    </button>
                  </div>
                  <div className="collapse" id="collapseExample">
                    <div className="row gy-3">
                      <div className="col-12 mt-4">
                        <h2 className="h4 text-uppercase mb-4">
                          Alternative billing details
                        </h2>
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label" for="firstName2">
                          First name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="firstName2"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label" for="lastName2">
                          Last name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="lastName2"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label" for="email2">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="email2"
                          placeholder="Jason@example.com"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label" for="phone2">
                          Phone number
                        </label>
                        <input
                          className="form-control"
                          type="tel"
                          id="phone2"
                          placeholder="+02 245354745"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label" for="company2">
                          Company name (optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="company2"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label className="form-label" for="countryAlt">
                          Country
                        </label>
                        <select
                          id="countryAlt"
                          className="form-control rounded-0"
                        >
                          <option>Choose your country</option>
                          <option>India</option>
                          <option>Afghanistan</option>
                        </select>
                      </div>

                      <div className="col-lg-12">
                        <label className="form-label" for="address2">
                          Address line 1
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="address2"
                          placeholder="House number and street name"
                        />
                      </div>
                      <div className="col-lg-12">
                        <label className="form-label" for="addressalt2">
                          Address line 2
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="addressalt2"
                          placeholder="Apartment, Suite, Unit, etc (optional)"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label" for="city2">
                          Town/City
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="city2"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label" for="state2">
                          State/County
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="state2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 form-group">
                    <Link to="/success">
                      <button
                        className="btn btn-dark"
                        style={{ borderRadius: 0 }}
                      >
                        Place order
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Your order</h5>
                  {CheckoutData
                    ? CheckoutData.map((data) => {
                        return (
                          <>
                            <ul className="list-unstyled mb-0">
                              <li className="d-flex align-items-center justify-content-between">
                                <strong className="small fw-bold">
                                  {data.title}
                                </strong>
                                <span className="text-muted small">
                                  ₹{data.price}
                                </span>
                              </li>
                              <li className="border-bottom my-2"></li>
                            </ul>
                          </>
                        );
                      })
                    : ""}
                  <li className="d-flex align-items-center justify-content-between">
                    <strong className="text-uppercase small fw-bold">
                      Total
                    </strong>
                    <span>₹{price}</span>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Checkout;
