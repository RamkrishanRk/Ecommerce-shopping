import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import LoginModel from "../components/Model/Login";

const Delivery = () => {
  const items = JSON.parse(localStorage.getItem("payment-details"));
  const token = JSON.parse(localStorage.getItem("token"));
  const loginsuccess = JSON.parse(localStorage.getItem("login"));
  const viewCarted = useSelector((state) => state?.cartreducer?.carts);

  const [page, setPage] = useState("");
  return (
    <>
      <Layout>
        <div className="container py-5">
          <div className="shadow payment-details">
            <div className="float-start d-flex">
              <h4>
                <span>1</span>
              </h4>
              <div className="login-payment-section">
                {token ? (
                  <>
                    <div className="d-flex">
                      <h5>Login</h5>
                      <svg
                        height="16px"
                        width="16px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="_1t8m48 mt-1"
                      >
                        <path
                          d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                          stroke="#2974f0"
                        ></path>
                      </svg>
                    </div>
                  </>
                ) : (
                  <h5>Login</h5>
                )}
                <div>
                  <span className="phone-section ms-2">
                    {loginsuccess?.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="float-end">
              <LoginModel modalId={"exampleModal"} />
              {token ? (
                <button
                  className="btn btn-outline-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  change
                </button>
              ) : (
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-dark"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          {token ? (
            <div className="shadow payment-details">
              <div className="float-start d-flex">
                <h4>
                  <span>2</span>
                </h4>
                <div className="login-payment-section">
                  <div className="d-flex">
                    <h5>Delivery Address</h5>
                    <svg
                      height="16px"
                      width="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="_1t8m48 mt-1"
                    >
                      <path
                        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                        stroke="#2974f0"
                      ></path>
                    </svg>
                  </div>
                  {token ? (
                    <div>
                      <span className="name-section">
                        {items?.firstName + items?.lastName}
                      </span>
                      <span className="phone-section ms-2">
                        {items?.addressalt} {items?.city} {items?.state}
                        {items?.address}
                      </span>
                    </div>
                  ) : (
                    <h5>Delivery Address</h5>
                  )}
                </div>
              </div>
              <div className="float-end">
                <Link to="/edit-checkout" className="btn btn-outline-dark">
                  change
                </Link>
              </div>
            </div>
          ) : (
            <div className="shadow payment-details">
              <div className="float-start d-flex">
                <h4>
                  <span>2</span>
                </h4>
                <div className="login-payment-section">
                  <h5>Delivery Address</h5>
                </div>
              </div>
            </div>
          )}

          {page === "" ? (
            token ? (
              <div className="shadow pay-details">
                <div className="float-start d-flex">
                  <h4>
                    <span>3</span>
                  </h4>
                  <div className="login-order-section">
                    <h5>Order Summary</h5>
                    <div className="d-flex">
                      {viewCarted
                        ? viewCarted?.map((e) => {
                            return (
                              <>
                                <div className="d-flex">
                                  <img
                                    src={e?.image}
                                    style={{ width: "100px" }}
                                  />
                                </div>
                                <div className="ms-5">
                                  <h5 className="name-section">{e?.title}</h5>
                                  <h6>{e?.sub_title}</h6>
                                  <p className="desc-section">
                                    {e?.description}
                                  </p>
                                  <p> ₹{e?.price}</p>
                                </div>
                              </>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="float-end">
                  <button className="btn btn-outline-dark">change</button>
                </div>
              </div>
            ) : (
              <div className="shadow payment-details">
                <div className="float-start d-flex">
                  <h4>
                    <span>3</span>
                  </h4>
                  <div className="login-payment-section">
                    <h5>Order Summary</h5>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="shadow payment-details">
              <div className="float-start d-flex">
                <h4>
                  <span>3</span>
                </h4>
                <div className="login-payment-section">
                  {token ? (
                    <>
                      <div className="d-flex">
                        <h5>Order Summary</h5>
                        <svg
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="_1t8m48 mt-1"
                        >
                          <path
                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            stroke="#2974f0"
                          ></path>
                        </svg>
                      </div>
                    </>
                  ) : (
                    <h5>Order Summary</h5>
                  )}
                  {`${viewCarted?.length} Item`}
                </div>
              </div>
              <div className="float-end">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setPage("MAIN_PAGE")}
                >
                  change
                </button>
              </div>
            </div>
          )}
          {page == "" ? (
            token ? (
              <div className="shadow payment-details">
                <div className="float-start">
                  <p>
                    Order confirmation email will be sent to
                    <b> {loginsuccess?.email}</b>
                  </p>
                </div>
                <div className="float-end">
                  <button
                    className="btn btn-success _2KpZ6l _1seccl _3AWRsL"
                    onClick={() => setPage("MAIN_PAGE")}
                  >
                    continue
                  </button>
                </div>
              </div>
            ) : (
              <div className="shadow payment-details">
                <div className="float-start"></div>
                <div className="float-end">
                  <button className="btn btn-success"></button>
                </div>
                <div className="float-end">
                  <button className="btn btn-outline-dark">change</button>
                </div>
              </div>
            )
          ) : null}

          {page === "MAIN_PAGE" ? (
            <>
              <div className="shadow payment-details">
                <div className="float-start d-flex">
                  <h4>
                    <span>4</span>
                  </h4>
                  <div className="login-payment-section">
                    <h5>Payment Options</h5>
                    <div></div>
                  </div>
                </div>
                <div className="float-end">
                  <button className="btn btn-outline-dark">change</button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </Layout>
    </>
  );
};
export default Delivery;
