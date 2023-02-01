import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Add_Card,
  DecrementItems,
  DeleteItems,
} from "../redux/actions/AddToCard";

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
  return (
    <>
      <Layout>
        <div className="cart-details-page">
          <h2>SHOPPING CART</h2>
          <div className="iteamsdetails">
            <>
              {user?.map((e) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={e?.image} alt="images" />
                    </div>
                    <div className="details">
                      <table>
                        <tr>
                          <td>
                            <p>
                              <strong>Restaurant</strong> : {e?.title}
                            </p>
                            <p>
                              <strong>Price</strong> : ₹{e?.price}
                            </p>
                            <p>
                              <strong>Dishes</strong> : {e?.address}
                            </p>
                            <p>
                              <strong>Total</strong> :₹
                              {e?.price * e?.qnty}
                            </p>
                            <div className="inc-dec-section">
                              <span
                                onClick={
                                  e.qnty <= 1
                                    ? () => deleteCart(e.id)
                                    : () => DecrementToCart(e)
                                }
                              >
                                -
                              </span>
                              <span>{e?.qnty}</span>
                              <span onClick={() => addToCart(e)}>+</span>
                            </div>
                            <div className="mt-3">
                              <strong>Remove :</strong>
                              <span
                                onClick={() => deleteCart(e.id)}
                                style={{ cursor: "pointer" }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="25"
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
                            </div>
                            <a class="btn btn-outline-dark btn-sm" href="#">
                              Procceed to checkout
                              <i class="fas fa-long-arrow-alt-right ms-2"></i>
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </>
                );
              })}
            </>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CardsDetails;
