import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import useRazorpay from "react-razorpay";
import shortid from "shortid";
import { getUsers } from "../redux/actions/users";
import React from "react";

const Delivery = () => {
  const items = JSON.parse(localStorage.getItem("payment-details"));
  const token = localStorage.getItem("token");
  const viewCarted = useSelector((state) => state?.cartReducer?.carts);
  const user_details = useSelector((state) => state?.userReducer?.user);
  const [page, setPage] = useState("");
  const location = useLocation();
  const data = location.state || {};
  const Razorpay = useRazorpay();

  const [OrderData, setOrderData] = useState(null);
  const [newVerState, setNewVerState] = useState(null);
  const RazorpayApi = (data) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTdiY2E4MTI2ZDE3ZjA5NTAyNTc4NCIsImlhdCI6MTY3NjEzMTU0MCwiZXhwIjoxNjgzOTA3NTQwfQ.7WWBjNq0NvJjYv0inTxTt07PFcY_9InWGFzKE2WqfQM"
      );

      var raw = JSON.stringify({
        amount: data.amount * 100,
        currency: data.currency,
        receipt: data.receipt,
        notes: {
          description: "Thanks for purchasing",
        },
        payment_capture: 1,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch("http://localhost:8000/api/v1/payment/create-order", requestOptions)
        .then((response) => response.json())
        .then((result) => setOrderData(result));
    } catch (err) {
      console.log(err);
    }
  };
  const handlePayment = async (response) => {
    let res = response?.result?.orders;
    try {
      const options = {
        key: "rzp_test_hiVtgAW1Bt2jQq",
        amount: res?.amount,
        currency: res?.currency,
        name: items?.firstName,
        order_id: res?.id,
        order_receipt: "order_rcptid_11",
        handler: function (response) {
          setNewVerState(response);
        },
        prefill: {
          name: items?.firstName,
          email: items?.email,
          contact: items?.phone,
        },
        notes: {
          address: "Thanks for purchasing",
        },
      };
      let rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (OrderData !== null) {
      handlePayment(OrderData);
    }
  }, [OrderData]);

  if (newVerState !== null) {
    setOrderData(null);
    setNewVerState(null);
    setTimeout(() => {
      window.location.href = "/success";
    }, 2000);
  }

  const createOrder = (payment) => {
    const orderDetails = {
      amount: payment,
      currency: "INR",
      receipt: shortid.generate(),
      notes: "Thanks for purchasing",
    };
    RazorpayApi(orderDetails);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const userData = user_details?.data?.allForm;

  return (
    <>
      <Layout>
        <div className="container py-5">
          {token ? (
            <div className="shadow payment-details">
              <div className="float-start d-flex">
                <h4>
                  <span>1</span>
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
                      <>
                        <span className="name-section">
                          {userData?.[0]?.userName}
                        </span>
                        <span className="phone-section ms-2">
                          {userData?.[0]?.city} {userData?.[0]?.state}{" "}
                          {userData?.[0]?.address} -{userData?.[0]?.zip} Phone
                          number:
                          {userData?.[0]?.phone}
                        </span>
                      </>
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
                      {viewCarted?.length > 0 ? (
                        viewCarted ? (
                          viewCarted?.map((e) => {
                            return (
                              <React.Fragment key={e.id}>
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
                                  {e.id == true}
                                  <p> ₹{e?.price}</p>
                                </div>
                              </React.Fragment>
                            );
                          })
                        ) : null
                      ) : (
                        <>
                          <div className="d-flex">
                            <img
                              src={data?.data?.image}
                              style={{ width: "100px" }}
                            />
                          </div>
                          <div className="ms-5">
                            <h5 className="name-section">
                              {data?.data?.title}
                            </h5>
                            <h6>{data?.data?.sub_title}</h6>
                            <p className="desc-section">
                              {data?.data?.description}
                            </p>
                            {data?.data.id == true}
                            <p> ₹{data?.data?.price}</p>
                          </div>
                        </>
                      )}
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
                    <b> {userData?.[0]?.email}</b>
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
                    <p> ₹{viewCarted?.[0]?.price}</p>
                  </div>
                </div>
                <div className="float-end">
                  <button
                    onClick={() => createOrder(viewCarted?.[0]?.price)}
                    className="btn btn-success _2KpZ6l _1seccl _3AWRsL"
                  >
                    Pay with Razorpay
                  </button>
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
