import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_Card } from "../redux/actions/AddToCard";
import products from "../components/Products";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Categories = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(products);
  const cartData = useSelector((state) => state?.cartreducer?.carts);

  const addToCart = (e) => {
    dispatch(Add_Card(e));
    toast.success("Product added to cart successfully...");
  };
  const isItemExist = (e) => {
    return cartData.findIndex((item) => item.id === e) === -1;
  };
  return (
    <>
      <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <div className="row">
          {data.map((item, index) => {
            return (
              <>
                <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                  <div className="product text-center">
                    <div className="position-relative mb-3">
                      <div className="badge text-white bg-"></div>
                      <Link
                        className="reset-anchor d-block animsition-link"
                        to={`/cart-detail`}
                        state={{ item: item }}
                      >
                        <img
                          className="img-fluid w-100"
                          src={item.image}
                          alt="image02"
                        />
                      </Link>
                      <div className="product-overlay">
                        <ul className="mb-0 list-inline">
                          <li className="list-inline-item m-0 p-0">
                            <div className="add-cart-icons">
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M17.19 4.156c-1.672-1.535-4.383-1.535-6.055 0L10 5.197 8.864 4.156c-1.672-1.535-4.382-1.535-6.054 0-1.881 1.726-1.881 4.519 0 6.245L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.245zm-1.066 5.219L10 15.09 3.875 9.375c-.617-.567-.856-1.307-.856-2.094s.138-1.433.756-1.999c.545-.501 1.278-.777 2.063-.777.784 0 1.517.476 2.062.978L10 7.308l2.099-1.826c.546-.502 1.278-.978 2.063-.978s1.518.276 2.063.777c.618.566.755 1.212.755 1.999s-.238 1.528-.856 2.095z" />
                              </svg>
                            </div>
                          </li>
                          <li className="list-inline-item m-0 p-0">
                            {isItemExist(item.id) ? (
                              <button
                                onClick={() => addToCart(item)}
                                className="btn btn-sm btn-dark"
                              >
                                Add To Cart
                              </button>
                            ) : (
                              <button className="btn btn-sm btn-dark" disabled>
                                Add To Cart
                              </button>
                            )}
                          </li>
                          <li className="list-inline-item me-0">
                            <div className="add-cart-icons">
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="-32 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z" />
                              </svg>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h5 className="reset-anchor">{item.title}</h5>
                    <p className="small text-muted"> ₹{item.price}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Categories;
