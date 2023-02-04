import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

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
        <section class="container py-5">
          <h2 class="h5 text-uppercase mb-4">Billing details</h2>
          <div class="row">
            <div class="col-lg-8">
              <form action="#">
                <div class="row gy-3">
                  <div class="col-lg-6">
                    <label class="form-label" for="firstName">
                      First name
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label" for="lastName">
                      Last name
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label" for="email">
                      Email address
                    </label>
                    <input
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Jason@example.com"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label" for="phone">
                      Phone number
                    </label>
                    <input
                      class="form-control"
                      type="tel"
                      id="phone"
                      placeholder="+02 245354745"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label" for="company">
                      Company name (optional)
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      id="company"
                      placeholder="Your company name"
                    />
                  </div>
                  <div class="col-lg-6 form-group">
                    <label class="form-label" for="country">
                      Country
                    </label>
                    <select id="country" class="form-control rounded-0">
                      <option value>Choose your country</option>
                    </select>
                  </div>
                  <div class="col-lg-12">
                    <label class="form-label" for="address">
                      Address line 1
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      id="address"
                      placeholder="House number and street name"
                    />
                  </div>
                  <div class="col-lg-12">
                    <label class="form-label" for="addressalt">
                      Address line 2
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      id="addressalt"
                      placeholder="Apartment, Suite, Unit, etc (optional)"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label" for="city">
                      Town/City
                    </label>
                    <input class="form-control" type="text" id="city" />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label" for="state">
                      State/County
                    </label>
                    <input class="form-control" type="text" id="state" />
                  </div>
                  <div class="col-lg-6">
                    <button
                      class="btn btn-link text-dark p-0 shadow-0"
                      type="button"
                      data-bs-toggle="collapse"
                      href="#alternateAddress"
                      role="button"
                      aria-expanded="false"
                      aria-controls="alternateAddress"
                    >
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          id="alternateAddress"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="alternateAddress">
                          Alternate billing address
                        </label>
                      </div>
                    </button>
                  </div>
                  <div class="collapse" id="alternateAddress">
                    <div class="row gy-3">
                      <div class="col-12 mt-4">
                        <h2 class="h4 text-uppercase mb-4">
                          Alternative billing details
                        </h2>
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label" for="firstName2">
                          First name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          id="firstName2"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label" for="lastName2">
                          Last name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          id="lastName2"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label" for="email2">
                          Email address
                        </label>
                        <input
                          class="form-control"
                          type="email"
                          id="email2"
                          placeholder="Jason@example.com"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label" for="phone2">
                          Phone number
                        </label>
                        <input
                          class="form-control"
                          type="tel"
                          id="phone2"
                          placeholder="+02 245354745"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label" for="company2">
                          Company name (optional)
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          id="company2"
                          placeholder="Your company name"
                        />
                      </div>
                      <div class="col-lg-6 form-group">
                        <label class="form-label" for="countryAlt">
                          Country
                        </label>
                        <select id="countryAlt" class="form-control rounded-0">
                          <option value>Choose your country</option>
                        </select>
                      </div>

                      <div class="col-lg-12">
                        <label class="form-label" for="address2">
                          Address line 1
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          id="address2"
                          placeholder="House number and street name"
                        />
                      </div>
                      <div class="col-lg-12">
                        <label class="form-label" for="addressalt2">
                          Address line 2
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          id="addressalt2"
                          placeholder="Apartment, Suite, Unit, etc (optional)"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label" for="city2">
                          Town/City
                        </label>
                        <input class="form-control" type="text" id="city2" />
                      </div>
                      <div class="col-lg-6">
                        <label class="form-label" for="state2">
                          State/County
                        </label>
                        <input class="form-control" type="text" id="state2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 form-group">
                    <Link to="/success">
                      <button class="btn btn-dark">Place order</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="card border-0 rounded-0 p-lg-4 bg-light">
                <div class="card-body">
                  <h5 class="text-uppercase mb-4">Your order</h5>
                  {CheckoutData
                    ? CheckoutData.map((data) => {
                        return (
                          <>
                            <ul class="list-unstyled mb-0">
                              <li class="d-flex align-items-center justify-content-between">
                                <strong class="small fw-bold">
                                  {data.title}
                                </strong>
                                <span class="text-muted small">
                                  ₹{data.price}
                                </span>
                              </li>
                              <li class="border-bottom my-2"></li>
                            </ul>
                          </>
                        );
                      })
                    : ""}
                  <li class="d-flex align-items-center justify-content-between">
                    <strong class="text-uppercase small fw-bold">Total</strong>
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
