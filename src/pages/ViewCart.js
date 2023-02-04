import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Add_Card,
  DecrementItems,
  DeleteItems,
} from "../redux/actions/AddToCard";

const ViewCart = () => {
  const viewCarted = useSelector((state) => state?.cartreducer?.carts);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);

  const priceData = () => {
    let price = 0;
    viewCarted.map((item) => {
      price = item?.price * item.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    priceData();
  }, [priceData]);
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

  return (
    <>
      <Layout>
        <section class="container py-5">
          <h2 class="h5 text-uppercase mb-4">Shopping cart</h2>
          <div class="row">
            <div class="col-lg-8 mb-4 mb-lg-0">
              <div class="table-responsive mb-4">
                <table class="table text-nowrap">
                  <thead class="bg-light">
                    <tr>
                      <th class="border-0 p-3" scope="col">
                        <strong class="text-sm text-uppercase">Product</strong>
                      </th>
                      <th class="border-0 p-3" scope="col">
                        <strong class="text-sm text-uppercase">Price</strong>
                      </th>
                      <th class="border-0 p-3" scope="col">
                        <strong class="text-sm text-uppercase">Quantity</strong>
                      </th>
                      <th class="border-0 p-3" scope="col">
                        <strong class="text-sm text-uppercase">Total</strong>
                      </th>
                      <th class="border-0 p-3" scope="col">
                        <strong class="text-sm text-uppercase"></strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="border-0">
                    {viewCarted
                      ? viewCarted.map((data) => {
                          return (
                            <>
                              <tr>
                                <th class="ps-0 py-3 border-0" scope="row">
                                  <div class="d-flex align-items-center">
                                    <Link
                                      class="reset-anchor d-block animsition-link"
                                      to={`/cart/${data.id}`}
                                    >
                                      <img
                                        src={data?.image}
                                        alt="..."
                                        width="70"
                                      />
                                    </Link>
                                    <div class="ms-3">
                                      <strong class="h6">
                                        <Link
                                          class="reset-anchor animsition-link"
                                          to={`/cart/${data.id}`}
                                        >
                                          {data?.title}
                                        </Link>
                                      </strong>
                                    </div>
                                  </div>
                                </th>
                                <td class="p-3 align-middle border-0">
                                  <p class="mb-0 small">₹{data?.price}</p>
                                </td>
                                <td class="p-3 align-middle border-0 w-25">
                                  <div class="border d-flex align-items-center justify-content-between px-3">
                                    <span class="small text-uppercase text-gray headings-font-family">
                                      Quantity
                                    </span>
                                    <div class="quantity">
                                      <div
                                        class="dec-btn p-0"
                                        onClick={
                                          data.qnty <= 1
                                            ? () => deleteCart(data.id)
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
                                      <div
                                        class="inc-btn p-0"
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
                                <td class="p-3 align-middle border-0">
                                  <p class="mb-0 small">
                                    ₹{data?.price * data?.qnty}
                                  </p>
                                </td>
                                <td class="p-3 align-middle border-0">
                                  <a class="reset-anchor" href="#!">
                                    <i class="fas fa-trash-alt small text-muted"></i>
                                  </a>
                                </td>
                              </tr>
                            </>
                          );
                        })
                      : ""}
                  </tbody>
                </table>
              </div>

              <div class="bg-light px-4 py-3">
                <div class="row align-items-center text-center">
                  <div class="col-md-6 mb-3 mb-md-0 text-md-start">
                    <Link class="btn btn-link p-0 text-dark btn-sm" to="/">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.0303 7.71967C11.3232 8.01256 11.3232 8.48744 11.0303 8.78033L8.56066 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H8.56066L11.0303 15.2197C11.3232 15.5126 11.3232 15.9874 11.0303 16.2803C10.7374 16.5732 10.2626 16.5732 9.96967 16.2803L6.21967 12.5303C5.92678 12.2374 5.92678 11.7626 6.21967 11.4697L9.96967 7.71967C10.2626 7.42678 10.7374 7.42678 11.0303 7.71967Z"
                          fill="#000"
                        />
                      </svg>
                      Continue shopping
                    </Link>
                  </div>
                  <div class="col-md-6 text-md-end">
                    <Link class="btn btn-outline-dark btn-sm" to="/checkout">
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card border-0 rounded-0 p-lg-4 bg-light">
                <div class="card-body">
                  <h5 class="text-uppercase mb-4">Cart total</h5>
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-center justify-content-between">
                      <strong class="text-uppercase small font-weight-bold">
                        Subtotal
                      </strong>
                      <span class="text-muted small">₹{price}</span>
                    </li>
                    <li class="border-bottom my-2"></li>
                    <li class="d-flex align-items-center justify-content-between mb-4">
                      <strong class="text-uppercase small font-weight-bold">
                        Total
                      </strong>
                      <span>₹{price}</span>
                    </li>
                    <li>
                      <form action="#">
                        <div class="input-group">
                          <input
                            class="form-control mb-3"
                            type="text"
                            placeholder="Enter your coupon"
                          />
                          <button
                            class="btn btn-dark btn-sm w-100"
                            type="submit"
                          >
                            <i class="fas fa-gift me-2"></i>Apply coupon
                          </button>
                        </div>
                      </form>
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
