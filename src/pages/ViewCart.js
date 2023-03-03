import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Add_Card,
  DecrementItems,
  DeleteItems,
} from "../redux/actions/AddToCard";
// import ScratchCard from "react-scratch-coupon";
import { v4 } from "uuid";

const ViewCart = () => {
  const viewCarted = useSelector((state) => state?.cartreducer?.carts);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const deleteCart = (id) => {
    dispatch(DeleteItems(id));
    navigate("/");
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
  const addToCart = (e) => {
    dispatch(Add_Card(e));
  };
  const DecrementToCart = (item) => {
    dispatch(DecrementItems(item));
  };
  // sub total
  const priceData = () => {
    let price = 0;
    viewCarted.map((item) => {
      price = item?.price * item?.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    priceData();
  }, [priceData]);

  // Total
  let discountPrices = viewCarted?.map((i) => {
    let getDiscount = getDiscountPercentage(i?.qnty, i?.price);
    return getDiscount;
  });
  const totalcart = discountPrices
    ? discountPrices?.reduce((sum, a) => sum + a, 0)
    : "";
  // coupon
  const uniqe = v4();

  const codeId = uniqe?.slice(0, 8);
  const PROMOTIONS = [
    {
      code: "dsfdf",
      discount: "5%",
    },
  ];
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const discount = (totalcart * discountPercent) / 100;
  const TotalPrice = Math.round(totalcart - discount);

  const [dis, setDis] = useState(false);

  const onEnterPromoCode = (event) => {
    setDis(true);
    setPromoCode(event.target.value);
  };
  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));
        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };

  return (
    <>
      <Layout>
        <section className="container py-5">
          <div className="py-5 bg-light mb-5">
            <div className="container position-relative">
              <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                <div className="col-lg-6">
                  <h1 className="h2 text-uppercase mb-0">Cart</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                      <li className="breadcrumb-item">
                        <Link className="text-dark" to="/">
                          Home
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="table-responsive mb-4">
                <table className="table text-nowrap">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Product
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Price
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Quantity
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Total
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase"></strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    {viewCarted.length ? (
                      viewCarted ? (
                        viewCarted.map((data, ind) => {
                          return (
                            <>
                              <tr>
                                <th className="ps-0 py-3 border-0" scope="row">
                                  <div className="d-flex align-items-center">
                                    <Link
                                      className="reset-anchor d-block animsition-link"
                                      to={`/cart/${data.id}`}
                                    >
                                      <img
                                        src={data?.image}
                                        alt="image"
                                        style={{
                                          width: "4rem",
                                          height: "4rem",
                                        }}
                                      />
                                    </Link>
                                    <div className="ms-3">
                                      <strong className="h6">
                                        <Link
                                          className="reset-anchor animsition-link"
                                          to={`/cart/${data.id}`}
                                        >
                                          {data?.title}
                                        </Link>
                                      </strong>
                                    </div>
                                  </div>
                                </th>
                                <td className="p-3 align-middle border-0">
                                  <p className="mb-0 small">₹{data?.price}</p>
                                </td>
                                <td className="p-3 align-middle border-0 w-25">
                                  <div className="border d-flex align-items-center justify-content-between px-3">
                                    <span className="small text-uppercase text-gray headings-font-family">
                                      Quantity
                                    </span>
                                    <div className="quantity">
                                      <div
                                        className="dec-btn p-0"
                                        onClick={
                                          data.qnty <= 1
                                            ? ""
                                            : () => DecrementToCart(data)
                                        }
                                      >
                                        <svg
                                          width="24px"
                                          height="24px"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15 18V6l-6 6z"
                                            fill="black"
                                          />
                                        </svg>
                                      </div>
                                      {data?.qnty}
                                      {/* {data?.qnty > 4 ? (
                                        <ScratchCard>
                                          <code>{codeId}</code>
                                        </ScratchCard>
                                      ) : (
                                        data?.qnty
                                      )} */}
                                      <div
                                        className="inc-btn p-0"
                                        onClick={() => addToCart(data)}
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
                                </td>
                                <td className="p-3 align-middle border-0">
                                  <p className="mb-0 small">
                                    ₹{discountPrices[ind]}
                                  </p>
                                </td>
                                <td className="p-3 align-middle border-0">
                                  <Link
                                    className="reset-anchor ms-4"
                                    to="/cart"
                                    onClick={() => deleteCart(data?.id)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                      <path
                                        fillRule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      />
                                    </svg>
                                  </Link>
                                </td>
                              </tr>
                            </>
                          );
                        })
                      ) : (
                        ""
                      )
                    ) : (
                      <>
                        <p className="cart-empty">
                          Your cart is empty!
                          <img src="https://react-redux-cart-youtube.netlify.app/cart.gif" />
                        </p>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="bg-light px-4 py-3">
                <div className="row align-items-center text-center">
                  <div className="col-md-6 mb-3 mb-md-0 text-md-start">
                    <Link className="btn btn-link p-0 text-dark btn-sm" to="/">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0303 7.71967C11.3232 8.01256 11.3232 8.48744 11.0303 8.78033L8.56066 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H8.56066L11.0303 15.2197C11.3232 15.5126 11.3232 15.9874 11.0303 16.2803C10.7374 16.5732 10.2626 16.5732 9.96967 16.2803L6.21967 12.5303C5.92678 12.2374 5.92678 11.7626 6.21967 11.4697L9.96967 7.71967C10.2626 7.42678 10.7374 7.42678 11.0303 7.71967Z"
                          fill="#000"
                        />
                      </svg>
                      Continue shopping
                    </Link>
                  </div>
                  {viewCarted.length > 0 ? (
                    <>
                      <div className="col-md-6 text-md-end">
                        <Link
                          className="btn btn-outline-dark btn-sm"
                          to="/checkout"
                          state={{ data: TotalPrice }}
                        >
                          Procceed to checkout
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5 8.25L17.25 12M17.25 12L13.5 15.75M17.25 12H6.75"
                              stroke="#000"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Cart total</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small font-weight-bold">
                        Subtotal
                      </strong>
                      <span className="text-muted small">₹{price}</span>
                    </li>
                    <li className="border-bottom my-2"></li>
                    {price - TotalPrice > 0 && (
                      <li className="d-flex align-items-center justify-content-between mb-4">
                        <strong className="text-uppercase small font-weight-bold">
                          Discount
                        </strong>
                        <p className="text-success">₹{price - TotalPrice}</p>
                      </li>
                    )}

                    <li className="d-flex align-items-center justify-content-between mb-4">
                      <strong className="text-uppercase small font-weight-bold">
                        Total Amount
                      </strong>
                      ₹{TotalPrice}
                    </li>
                    <li>
                      <div className="position-relative">
                        <input
                          className="form-control mb-3 w-100"
                          type="text"
                          placeholder="Gift card or discount code"
                          onChange={onEnterPromoCode}
                        />

                        <button
                          className="btn btn-dark btn-sm w-100"
                          type="submit"
                          onClick={checkPromoCode}
                          disabled={!dis}
                        >
                          Apply Coupon
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default ViewCart;
