import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const Delivery = () => {
  const items = JSON.parse(localStorage.getItem("payment-details"));
  const token = JSON.parse(localStorage.getItem("token"));
  const loginsuccess = JSON.parse(localStorage.getItem("login"));
  const viewCarted = useSelector((state) => state?.cartreducer?.carts);

  const location = useLocation();
  const totalrupess = location?.state?.data;

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
              {token ? (
                <button className="btn btn-outline-dark">change</button>
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
                        {items?.addressalt} {items?.city} {items?.state}{" "}
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
          {token ? (
            <div className="shadow pay-details">
              <div className="float-start d-flex">
                <h4>
                  <span>3</span>
                </h4>
                <div className="login-order-section">
                  <h5>Order Summary</h5>
                  <div className="d-flex">
                    {viewCarted
                      ? viewCarted.map((e) => {
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
                                <p className="desc-section">{e?.description}</p>
                                <p> ₹{totalrupess}</p>
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
          )}
          {token ? (
            <div className="shadow payment-details">
              <div className="float-start d-flex">
                <h4>
                  <span>4</span>
                </h4>
                <div className="login-payment-section">
                  <h5>Payment Options</h5>
                  <div>
                    <span className="name-section"></span>
                    <span className="phone-section ms-2"></span>
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
                  <span>4</span>
                </h4>
                <div className="login-payment-section">
                  <h5>Payment Options</h5>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Delivery;
