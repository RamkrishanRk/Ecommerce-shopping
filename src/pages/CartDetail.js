import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
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
                    <h6 className="text-sm mb-3">{data?.sub_title}</h6>
                    <p className="text-muted">₹{data?.price}</p>
                    <p className="text-sm mb-3">{data?.description}</p>
                    <div className="btn btn-link text-dark text-decoration-none p-0 mb-3">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="me-2"
                      >
                        <path d="M17.19 4.156c-1.672-1.535-4.383-1.535-6.055 0L10 5.197 8.864 4.156c-1.672-1.535-4.382-1.535-6.054 0-1.881 1.726-1.881 4.519 0 6.245L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.245zm-1.066 5.219L10 15.09 3.875 9.375c-.617-.567-.856-1.307-.856-2.094s.138-1.433.756-1.999c.545-.501 1.278-.777 2.063-.777.784 0 1.517.476 2.062.978L10 7.308l2.099-1.826c.546-.502 1.278-.978 2.063-.978s1.518.276 2.063.777c.618.566.755 1.212.755 1.999s-.238 1.528-.856 2.095z" />
                      </svg>
                      Add to wish list
                    </div>
                    <ul className="list-unstyled small">
                      <Link to="/view-cart" onClick={() => addToCart(data)}>
                        <button className="proccess-section p-2">
                          Add To Card
                        </button>
                      </Link>
                    </ul>
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
