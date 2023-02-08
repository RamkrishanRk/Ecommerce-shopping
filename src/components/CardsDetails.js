import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Add_Card,
  DecrementItems,
  DeleteItems,
} from "../redux/actions/AddToCard";

const CardsDetails = () => {
  const location = useLocation();
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
  const navigate = useNavigate();
  const deleteCart = (id) => {
    dispatch(DeleteItems(id));
    navigate("/");
  };

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
                        </div>
                        <p>
                          {discountPercentage > 0 &&
                            ` Upto ${discountPercentage}% EMI interest savings on select Credit Cards`}
                        </p>
                        <ul className="list-unstyled small d-inline-block">
                          <li className="px-2 py-2 mb-1">
                            <strong className="text-uppercase">Total:</strong>
                            <span className="ms-2 text-muted">
                              ₹{getDiscountPercentage(item?.qnty, item?.price)}
                            </span>
                          </li>
                          <li className="px-2 py-2 mb-1">
                            <strong className="text-uppercase text-dark">
                              Remove :
                            </strong>
                            <span
                              onClick={() => deleteCart(item?.id)}
                              style={{ cursor: "pointer" }}
                              className="mx-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#fb641b"
                                className="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path
                                  fillRule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />
                              </svg>
                            </span>
                          </li>
                          <Link to="/checkout">
                            <button className="btn btn-sm btn-dark">
                              Procceed to checkout
                              <svg
                                width="35"
                                height="35"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 8.25L17.25 12M17.25 12L13.5 15.75M17.25 12H6.75"
                                  stroke="#fff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </Link>
                        </ul>
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
