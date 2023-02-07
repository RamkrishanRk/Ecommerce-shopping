import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Add_Card,
  DecrementItems,
  DeleteItems,
} from "../redux/actions/AddToCard";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";

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

  // const handleCheckout = async (e) => {
  //   e.preventDefault();
  //   const line_items = user.map((item) => {
  //     return {
  //       qnty: item.qnty,
  //       price_data: {
  //         currency: "usd",
  //         unit_amount: item.price * 100,
  //         product_data: {
  //           name: item.title,
  //           description: item.description,
  //           images: [item.image],
  //         },
  //       },
  //     };
  //   });
  //   const response = await axios.post(
  //     `http://localhost:4000/create-checkout-session`,
  //     line_items
  //   );
  //   const stripe = await loadStripe(`${process.env.REACT_APP_TITLE}`);
  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId: response?.data?.id,
  //   });

  //   if (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Layout>
        <div className="cart-details-page">
          <h2>SHOPPING CART</h2>
          <section class="py-5">
            {user?.map((item) => {
              return (
                <>
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="row m-sm-0">
                          <div class="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                            <div class="swiper product-slider-thumbs">
                              <div class="swiper-wrapper">
                                <div class="swiper-slide h-auto swiper-thumb-item mb-3">
                                  <img
                                    class="w-100"
                                    src={item?.image}
                                    alt="image01"
                                  />
                                </div>
                                <div class="swiper-slide h-auto swiper-thumb-item mb-3">
                                  <img
                                    class="w-100"
                                    src={item?.image}
                                    alt="image02"
                                  />
                                </div>
                                <div class="swiper-slide h-auto swiper-thumb-item mb-3">
                                  <img
                                    class="w-100"
                                    src={item?.image}
                                    alt="image03"
                                  />
                                </div>
                                <div class="swiper-slide h-auto swiper-thumb-item mb-3">
                                  <img
                                    class="w-100"
                                    src={item?.image}
                                    alt="image04"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-10 order-1 order-sm-2">
                            <div class="swiper product-slider">
                              <div class="swiper-wrapper">
                                <div class="swiper-slide h-auto">
                                  <a
                                    class="glightbox product-view"
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
                      <div class="col-lg-6">
                        <h1>{item?.title}</h1>
                        <p class="text-muted lead">₹{item?.price}</p>
                        <p class="text-sm mb-4">{item?.description}</p>
                        <div class="row align-items-stretch mb-4">
                          <div class="col-sm-5 pr-sm-0">
                            <div class="border d-flex align-items-center justify-content-between py-1 px-3">
                              <p class="small text-uppercase text-gray mr-4 no-select m-0">
                                Quantity
                              </p>
                              <div class="quantity">
                                <div
                                  class="dec-btn p-0"
                                  onClick={
                                    item.qnty <= 1
                                      ? () => deleteCart(item.id)
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
                                  class="form-control border-0 shadow-0 p-0 text-center"
                                  type="text"
                                  value={item?.qnty}
                                />
                                <div
                                  class="inc-btn p-0"
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
                        <ul class="list-unstyled small d-inline-block">
                          <li class="px-2 py-2 mb-1">
                            <strong class="text-uppercase">Total:</strong>
                            <span class="ms-2 text-muted">
                              ₹{item?.price * item?.qnty}
                            </span>
                          </li>
                          <li class="px-2 py-2 mb-1">
                            <strong class="text-uppercase text-dark">
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
                            <button
                              className="proccess-section"
                              // onClick={handleCheckout}
                            >
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
                                  stroke-width="1.5"
                                  stroke-linecap="round"
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
