import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Add_Card, DecrementItems } from "../redux/actions/AddToCard";

const CartDetail = () => {
  const location = useLocation();
  const data = location.state?.item;
  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(Add_Card(e));
  };

  const DecrementToCart = (item) => {
    dispatch(DecrementItems(item));
  };

  return (
    <>
      <Layout>
        <div className="cart-details-page">
          <section className="py-5">
            <>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row m-sm-0">
                      <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                        <div className="swiper product-slider-thumbs">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                              <img
                                className="w-100"
                                src={data?.image}
                                alt="image01"
                              />
                            </div>
                            <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                              <img
                                className="w-100"
                                src={data?.image}
                                alt="image02"
                              />
                            </div>
                            <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                              <img
                                className="w-100"
                                src={data?.image}
                                alt="image03"
                              />
                            </div>
                            <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                              <img
                                className="w-100"
                                src={data?.image}
                                alt="image04"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 order-1 order-sm-2">
                        <div className="swiper product-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide h-auto">
                              <a
                                className="glightbox product-view"
                                data-gallery="gallery2"
                                data-glightbox="Product item 1"
                              >
                                <img
                                  style={{
                                    width: "100%",
                                    height: "445px",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                  }}
                                  src={data?.image}
                                  alt="image03"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="mb-3">{data?.title}</h1>
                    <p className="text-muted">₹{(data?.qnty, data?.price)}</p>
                    <p className="text-sm mb-3">{data?.description}</p>
                    {/* <div className="row align-items-stretch mb-4">
                      <div className="col-sm-5 pr-sm-0">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                          <p className="small text-uppercase text-gray mr-4 no-select m-0">
                            Quantity
                          </p>
                          <div className="quantity">
                            <div className="dec-btn p-0">
                              <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M15 18V6l-6 6z" fill="black" />
                              </svg>
                            </div>
                            <input
                              className="form-control border-0 shadow-0 p-0 text-center"
                              type="text"
                              value={1}
                            />
                            <div className="inc-btn p-0">
                              <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9 6v12l6-6z" fill="black" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3 pl-sm-0">
                        <Link
                          class="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                          to="/cart"
                          onClick={() => addToCart(data)}
                        >
                          Add to cart
                        </Link>
                      </div>
                    </div> */}
                    <ul class="list-unstyled small d-inline-block">
                      <li class="px-3 py-2 mb-1 bg-white">
                        <strong class="text-uppercase">Offers:</strong>
                        <span class="ms-2 text-muted">
                          {` Bank Offer ${5}% Cashback on Flipkart Axis Bank CardT&C`}
                        </span>
                      </li>
                      <li class="px-3 py-2 mb-1 bg-white">
                        <strong class="text-uppercase">SKU:</strong>
                        <span class="ms-2 text-muted">{data?.mpn}</span>
                      </li>
                      <li class="px-3 py-2 mb-1 bg-white text-muted">
                        <strong class="text-uppercase text-dark">
                          Category:
                        </strong>
                        <span class="ms-2 text-muted">{data?.age_group}</span>
                      </li>
                      <li class="px-3 py-2 mb-1 bg-white text-muted">
                        <strong class="text-uppercase text-dark">Tags:</strong>
                        <span class="ms-2 text-muted">{data?.category}</span>
                      </li>
                    </ul>
                    <div className="btn-cart-category">
                      <div class="col-sm-3 pl-sm-0">
                        <Link
                          class="btn  btn-block h-100 d-flex align-items-center justify-content-center px-0"
                          to="/cart"
                          onClick={() => addToCart(data)}
                        >
                          Add to cart
                        </Link>
                      </div>
                      <div class="col-sm-3 pl-sm-0">
                        <Link
                          class="btn  h-100 d-flex align-items-center justify-content-center px-0"
                          to="/checkout"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  class="nav nav-tabs border-0 description-list-tab"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link text-uppercase active"
                      id="description-tab"
                      data-bs-toggle="tab"
                      href="#description"
                      role="tab"
                      aria-controls="description"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-uppercase"
                      id="reviews-tab"
                      data-bs-toggle="tab"
                      href="#reviews"
                      role="tab"
                      aria-controls="reviews"
                      aria-selected="false"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
                <div class="tab-content mb-5" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div class="p-4 p-lg-5 bg-white">
                      <h6 class="text-uppercase fw-bold">
                        Product description
                      </h6>
                      <p class="text-muted text-sm mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <div class="p-4 p-lg-5 bg-white">
                      <div class="row">
                        <div class="col-lg-8">
                          <div class="d-flex">
                            <div class="flex-shrink-0">
                              <img
                                class="rounded-circle"
                                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/customer-1.2909e6e3.png"
                                alt="customer-2.png"
                                width="50"
                              />
                            </div>
                            <div class="ms-3 flex-shrink-1">
                              <h6 class="mb-0 text-uppercase fw-bold">
                                Jane Doe
                              </h6>
                              <p class="small text-muted mb-0 text-uppercase">
                                20 May 2020
                              </p>
                              <ul class="list-inline mb-1 text-xs">
                                <li class="list-inline-item m-0">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item m-0">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item m-0">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item m-0">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item m-0">
                                  <i class="fas fa-star-half-alt text-warning"></i>
                                </li>
                              </ul>
                              <p class="text-sm mb-0 text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CartDetail;
