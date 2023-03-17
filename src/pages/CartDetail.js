import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Add_Card } from "../redux/actions/AddToCard";
const CartDetail = () => {
  const location = useLocation();
  const data = location.state?.item;
  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(Add_Card(e));
  };

  return (
    <>
      <Layout>
        <section className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="row m-sm-0">
                  <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                    <div className="swiper product-slider-thumbs swiper-initialized swiper-vertical swiper-pointer-events swiper-thumbs">
                      <div
                        className="swiper-wrapper dsdsds"
                        id="swiper-wrapper-31dcae3f2894e658"
                      >
                        <div className="swiper-slide h-auto  swiper-thumb-item mb-3">
                          <img
                            className="w-100"
                            src={data?.image}
                            alt="image"
                          />
                        </div>
                        <div className="swiper-slide h-auto  swiper-thumb-item mb-3">
                          <img
                            className="w-100"
                            src={data?.image}
                            alt="image"
                          />
                        </div>
                        <div className="swiper-slide h-auto  swiper-thumb-item mb-3">
                          <img
                            className="w-100"
                            src={data?.image}
                            alt="image"
                          />
                        </div>
                        <div className="swiper-slide h-auto  swiper-thumb-item mb-3">
                          <img
                            className="w-100"
                            src={data?.image}
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 order-1 order-sm-2">
                    <div className="swiper product-slider ">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide h-auto ">
                          <a
                            className="glightbox product-view"
                            href="#"
                            data-gallery="gallery2"
                            data-glightbox="Product item 1"
                          >
                            <img
                              className="img-fluid"
                              src={data?.image}
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide h-auto ">
                          <a
                            className="glightbox product-view"
                            href="#"
                            data-gallery="gallery2"
                            data-glightbox="Product item 2"
                          >
                            <img
                              className="img-fluid"
                              src={data?.image}
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide h-auto ">
                          <a
                            className="glightbox product-view"
                            href="#"
                            data-gallery="gallery2"
                            data-glightbox="Product item 3"
                          >
                            <img
                              className="img-fluid"
                              src="https://rukminim1.flixcart.com/image/400/400/kq8dua80/shoe/c/d/i/7-95000215-41-roamra-white-original-imag4ahytjmqdzz8.jpeg?q=70"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide h-auto ">
                          <a
                            className="glightbox product-view"
                            href="#"
                            data-gallery="gallery2"
                            data-glightbox="Product item 4"
                          >
                            <img
                              className="img-fluid"
                              src={data?.image}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <ul className="list-inline mb-2 text-sm">
                  <li className="list-inline-item m-0">
                    <i className="fas fa-star small text-warning"></i>
                  </li>
                  <li className="list-inline-item m-0 1">
                    <i className="fas fa-star small text-warning"></i>
                  </li>
                  <li className="list-inline-item m-0 2">
                    <i className="fas fa-star small text-warning"></i>
                  </li>
                  <li className="list-inline-item m-0 3">
                    <i className="fas fa-star small text-warning"></i>
                  </li>
                  <li className="list-inline-item m-0 4">
                    <i className="fas fa-star small text-warning"></i>
                  </li>
                </ul>
                <h1>{data?.title}</h1>
                <p className="text-muted lead">₹{(data?.qnty, data?.price)}</p>
                <p className="text-sm mb-4">{data?.description}</p>
                <div className="row align-items-stretch mb-4">
                  <div className="col-sm-5 pr-sm-0">
                    <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                      <span className="small text-uppercase text-gray mr-4 no-select">
                        Quantity
                      </span>
                      <div className="quantity">
                        <button className="dec-btn p-0">
                          <i className="fas fa-caret-left"></i>
                        </button>
                        <input
                          className="form-control border-0 shadow-0 p-0"
                          type="text"
                          value="1"
                        />
                        <button className="inc-btn p-0">
                          <i className="fas fa-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 pl-sm-0">
                    <Link
                      className="btn btn-dark h-100 d-flex align-items-center justify-content-center px-0"
                      to="/cart"
                      onClick={() => addToCart(data)}
                    >
                      Add to cart
                    </Link>
                  </div>
                </div>
                <div className="text-dark p-0 mb-4 d-inline-block">
                  <i className="far fa-heart me-2"></i>Add to wish list
                </div>
                <br />
                <ul className="list-unstyled small d-inline-block">
                  <li className="px-3 py-2 mb-1 bg-white">
                    <strong className="text-uppercase">SKU:</strong>
                    <span className="ms-2 text-muted">{data?.mpn}</span>
                  </li>
                  <li className="px-3 py-2 mb-1 bg-white text-muted">
                    <strong className="text-uppercase text-dark">
                      Category:
                    </strong>
                    <Link className="reset-anchor ms-2" to="/detail">
                      {data?.age_group}
                    </Link>
                  </li>
                  <li className="px-3 py-2 mb-1 bg-white text-muted">
                    <strong className="text-uppercase text-dark">Tags:</strong>
                    <Link className="reset-anchor ms-2" to="/detail">
                      {data?.category}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase active"
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
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase"
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
            <div className="tab-content mb-5" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="p-4 p-lg-5 bg-white">
                  <h6 className="text-uppercase">Product description </h6>
                  <p className="text-muted text-sm mb-0">{data?.description}</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="reviews"
                role="tabpanel"
                aria-labelledby="reviews-tab"
              >
                <div className="p-4 p-lg-5 bg-white">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/customer-1.2909e6e3.png"
                            alt="d19m59y37dris4"
                            width="50"
                          />
                        </div>
                        <div className="ms-3 flex-shrink-1">
                          <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                          <p className="small text-muted mb-0 text-uppercase">
                            20 May 2020
                          </p>
                          <ul className="list-inline mb-1 text-xs">
                            <li className="list-inline-item m-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fas fa-star-half-alt text-warning"></i>
                            </li>
                          </ul>
                          <p className="text-sm mb-0 text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CartDetail;
