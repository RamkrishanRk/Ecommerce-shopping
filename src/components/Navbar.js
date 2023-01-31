import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DLT } from "../redux/actions/AddToCard";

const Navbar = () => {
  const data = useSelector((state) => state?.cartreducer?.carts);
  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(DLT(id));
  };

  return (
    <>
      <header className="header bg-white">
        <nav className="navbar navbar-expand-lg bg-dark p-2">
          <Link className="navbar-brand" to="/">
            <span className="fw-bold text-uppercase text-white">
              Shopping Cart
            </span>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto position-relative">
              <div class="btn-group dropstart">
                <a
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="text-white"
                >
                  <svg
                    className="V3C5bO me-2"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="_1bS9ic"
                      d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                      fill="#fff"
                    ></path>
                  </svg>
                  <p className="data-length">{data.length}</p>
                </a>
                <ul
                  class="dropdown-menu"
                  style={{
                    width: "24rem",
                    padding: "0px",
                    height: "40vw",
                    overflow: "auto",
                  }}
                >
                  {data.length ? (
                    <table class="table">
                      <thead
                        className="bg-dark"
                        style={{
                          position: "sticky",
                          top: "0",
                          color: "#fff",
                        }}
                      >
                        <tr>
                          <th scope="col">Photo</th>
                          <th scope="col">Restaurant Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => {
                          return (
                            <>
                              <tr>
                                <th scope="row">
                                  <Link to={`/cart/${item?.id}`}>
                                    <img
                                      src={item?.image}
                                      style={{ width: "5rem", height: "5rem" }}
                                    />
                                  </Link>
                                </th>
                                <td>
                                  <p>{item?.title}</p>
                                  <p>Price : {item?.price}</p>
                                  <p>Quantity : 200</p>
                                </td>
                                <td
                                  className="mt-5"
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => dlt(item?.id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-trash"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path
                                      fillRule="evenodd"
                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                    />
                                  </svg>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                      <p className="text-center">Total :₹ {100}</p>
                    </table>
                  ) : (
                    <p>Your carts is empty</p>
                  )}
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
