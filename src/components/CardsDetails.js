import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { Add_Card, DecrementItems } from "../redux/actions/AddToCard";

const CardsDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state?.cartreducer?.carts);
  const [user, setUser] = useState([]);

  const UseData = () => {
    const filterData = data.filter((item) => {
      return item?.id == id;
    });
    setUser(filterData);
  };

  useEffect(() => {
    UseData();
  }, [id]);

  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(Add_Card(e));
  };
  const DecrementToCart = (item) => {
    dispatch(DecrementItems(item));
  };

  var discountPercentage;
  const getDiscountPercentage = (quantity, amount) => {
    switch (quantity) {
      case 1:
        discountPercentage = 0;
        break;
      case 2:
        discountPercentage = 10;
        break;
      case 3:
        discountPercentage = 11;
        break;
      case 4:
        discountPercentage = 12;
        break;
      case 5:
        discountPercentage = 13;
        break;
      default:
        discountPercentage = 15;
    }

    const exactDis = (amount * discountPercentage) / 100;
    return Math.round(amount * quantity - exactDis);
  };
  return (
    <>
      <Layout>
        <div className="cart-details-page">
          <section className="py-5">
            {user?.map((item) => {
              return (
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
                                    src={item?.image}
                                    alt="image01"
                                  />
                                </div>
                                <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                                  <img
                                    className="w-100"
                                    src={item?.image}
                                    alt="image02"
                                  />
                                </div>
                                <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                                  <img
                                    className="w-100"
                                    src={item?.image}
                                    alt="image03"
                                  />
                                </div>
                                <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                                  <img
                                    className="w-100"
                                    src={item?.image}
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
                                      src={item?.image}
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
                        <h1>{item?.title}</h1>
                        <p className="text-muted lead">
                          ₹{getDiscountPercentage(item?.qnty, item?.price)}
                        </p>
                        <p className="text-sm mb-4">{item?.description}</p>
                        <div className="row align-items-stretch mb-4">
                          <div className="col-sm-5 pr-sm-0">
                            <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                              <p className="small text-uppercase text-gray mr-4 no-select m-0">
                                Quantity
                              </p>
                              <div className="quantity">
                                <div
                                  className="dec-btn p-0"
                                  onClick={
                                    item.qnty <= 1
                                      ? ""
                                      : () => DecrementToCart(item)
                                  }
                                >
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
                                  value={item?.qnty}
                                />
                                <div
                                  className="inc-btn p-0"
                                  onClick={() => addToCart(item)}
                                >
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
                          <div className="col-sm-3 pl-sm-0">
                            <Link
                              className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                              to="/cart"
                            >
                              Add to cart
                            </Link>
                          </div>
                        </div>
                        <ul className="list-unstyled small d-inline-block">
                          <li className="px-3 py-2 mb-1 bg-white">
                            <strong className="text-uppercase">Offers:</strong>
                            <span className="ms-2 text-muted">
                              {discountPercentage <= 0 &&
                                ` Upto ${discountPercentage}% EMI interest savings on select payments..`}
                              {discountPercentage > 0 &&
                                ` Upto ${discountPercentage}% EMI interest savings on select payments..`}
                            </span>
                          </li>
                          <li className="px-3 py-2 mb-1 bg-white">
                            <strong className="text-uppercase">SKU:</strong>
                            <span className="ms-2 text-muted">{item?.mpn}</span>
                          </li>
                          <li className="px-3 py-2 mb-1 bg-white text-muted">
                            <strong className="text-uppercase text-dark">
                              Category:
                            </strong>
                            <span className="ms-2 text-muted">
                              {item?.age_group}
                            </span>
                          </li>
                          <li className="px-3 py-2 mb-1 bg-white text-muted">
                            <strong className="text-uppercase text-dark">
                              Tags:
                            </strong>
                            <span className="ms-2 text-muted">
                              {item?.category}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul
                      className="nav nav-tabs border-0 description-list-tab"
                      id="myTab"
                      role="tablist"
                    >
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
                          <h6 className="text-uppercase fw-bold">
                            Product description
                          </h6>
                          <p className="text-muted text-sm mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="reviews"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                      >
                        <div className="p-4 p-lg-5">
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="d-flex">
                                <div className="flex-shrink-0">
                                  <img
                                    className="rounded-circle"
                                    src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/customer-1.2909e6e3.png"
                                    alt="customer-2.png"
                                    width="50"
                                  />
                                </div>
                                <div className="ms-3 flex-shrink-1">
                                  <h6 className="mb-0 text-uppercase fw-bold">
                                    Jane Doe
                                  </h6>
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
              );
            })}
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CardsDetails;
