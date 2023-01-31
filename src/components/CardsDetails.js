import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const CardsDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state?.cartreducer?.carts);
  const [user, SetUser] = useState([]);

  const UseData = () => {
    const filterData = data.filter((item) => {
      console.log(item?.id == id);
      return item?.id == id;
    });

    SetUser(filterData);
  };

  useEffect(() => {
    UseData();
  }, [id]);

  return (
    <>
      <Layout>
        <div className="container mt-2">
          <h2 className="text-center">Iteams Details Page</h2>

          <section className="container mt-3">
            <div className="iteamsdetails">
              <>
                {user?.map((e) => {
                  console.log(e, "state?.cartreducer?.carts");
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
                                {e?.price}
                              </p>
                              <div
                                className="mt-5 d-flex justify-content-between align-items-center"
                                style={{
                                  width: 100,
                                  cursor: "pointer",
                                  background: "#ddd",
                                  color: "#111",
                                  padding: "4px",
                                }}
                              >
                                <span style={{ fontSize: 24 }}>-</span>
                                <span style={{ fontSize: 22 }}>{1}</span>
                                <span style={{ fontSize: 24 }}>+</span>
                              </div>
                            </td>
                            <td>
                              <p>
                                <strong>Rating :</strong>
                                <span
                                  style={{
                                    background: "green",
                                    color: "#fff",
                                    padding: "2px 5px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  {e.rating} ★
                                </span>
                              </p>
                              <p>
                                <strong>Order Review :</strong>
                                <span>{e?.somedata} </span>
                              </p>
                              <p>
                                <strong>Remove :</strong>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
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
                                </span>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </>
                  );
                })}
              </>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CardsDetails;
