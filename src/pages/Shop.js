import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import product from "../components/Products";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = product?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(product?.length / recordsPerPage);

  const [objectsToShow, setToShow] = useState(product);

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };

  const handleChange = (value) => {
    if (value == "none") {
      setToShow([...product]);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let current = [...product];
      current.sort((a, b) =>
        toType
          ? compare(a.title, b.title, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      setToShow([...current]);
    }
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="container">
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                <div className="col-lg-6">
                  <h1 className="h2 text-uppercase mb-0">Shop</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                      <li className="breadcrumb-item">
                        <a className="text-dark" href="index.html">
                          Home
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Shop
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="container p-0">
              <div className="row">
                <div className="col-lg-3 order-2 order-lg-1">
                  <h5 className="text-uppercase mb-4">Categories</h5>
                  <div className="py-2 px-4 bg-dark text-white mb-3">
                    <strong className="small text-uppercase fw-bold">
                      Fashion &amp; Acc
                    </strong>
                  </div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Women's T-Shirts
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Men's T-Shirts
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Dresses
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Novelty socks
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Women's sunglasses
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Men's sunglasses
                      </a>
                    </li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3">
                    <strong className="small text-uppercase fw-bold">
                      Health &amp; Beauty
                    </strong>
                  </div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Shavers
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        bags
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Cosmetic
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Nail Art
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Skin Masks &amp; Peels
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Korean cosmetics
                      </a>
                    </li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3">
                    <strong className="small text-uppercase fw-bold">
                      Electronics
                    </strong>
                  </div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Electronics
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        USB Flash drives
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Headphones
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Portable speakers
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Cell Phone bluetooth headsets
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="#!">
                        Keyboards
                      </a>
                    </li>
                  </ul>
                  <h6 className="text-uppercase mb-4">Price range</h6>
                  <div className="price-range pt-4 mb-5">
                    <div id="range"></div>
                    <div className="row pt-2">
                      <div className="col-6">
                        <strong className="small fw-bold text-uppercase">
                          From
                        </strong>
                      </div>
                      <div className="col-6 text-end">
                        <strong className="small fw-bold text-uppercase">
                          To
                        </strong>
                      </div>
                    </div>
                  </div>
                  <h6 className="text-uppercase mb-3">Show only</h6>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox_1"
                    />
                    <label className="form-check-label" htmlFor="checkbox_1">
                      Returns Accepted
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox_2"
                    />
                    <label className="form-check-label" htmlFor="checkbox_2">
                      Returns Accepted
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox_3"
                    />
                    <label className="form-check-label" htmlFor="checkbox_3">
                      Completed Items
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox_4"
                    />
                    <label className="form-check-label" htmlFor="checkbox_4">
                      Sold Items
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox_5"
                    />
                    <label className="form-check-label" htmlFor="checkbox_5">
                      Deals &amp; Savings
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox_6"
                    />
                    <label className="form-check-label" htmlFor="checkbox_6">
                      Authorized Seller
                    </label>
                  </div>
                  <h6 className="text-uppercase mb-3">Buying format</h6>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="customRadio"
                      id="radio_1"
                    />
                    <label className="form-check-label" htmlFor="radio_1">
                      All Listings
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="customRadio"
                      id="radio_2"
                    />
                    <label className="form-check-label" htmlFor="radio_2">
                      Best Offer
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="customRadio"
                      id="radio_3"
                    />
                    <label className="form-check-label" htmlFor="radio_3">
                      Auction
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="customRadio"
                      id="radio_4"
                    />
                    <label className="form-check-label" htmlFor="radio_4">
                      Buy It Now
                    </label>
                  </div>
                </div>

                <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                  <div className="row mb-3 align-items-center">
                    <div className="col-lg-6 mb-2 mb-lg-0">
                      <p className="text-sm text-muted mb-0">
                        Showing {currentPage} - {currentRecords.length} products
                        of {product.length} products
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                        <li className="list-inline-item text-muted me-3">
                          <Link className="reset-anchor p-0" to="#">
                            <i className="fas fa-th-large"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item text-muted me-3">
                          <Link className="reset-anchor p-0" to="#">
                            <i className="fas fa-th"></i>
                          </Link>
                        </li>

                        <li className="list-inline-item ">
                          <select
                            onChange={(e) => handleChange(e.target.value)}
                            className="selectpicker"
                            data-customclass="form-control form-control-sm"
                            style={{
                              display: "inline-block",
                              verticalAlign: "top",
                              width: "100%",
                              backgroundColor: "#f9f9f9",
                              padding: "4px 7px 3px",
                              border: "1px solid #ddd",
                              borderRadius: "2.5px",
                              fontSize: "14px",
                              minHeight: "35px",
                            }}
                          >
                            <option value="none">Sort By </option>
                            <option value="ascending">
                              Alphabetically, A-Z
                            </option>
                            <option value="descending">
                              Alphabetically, Z-A
                            </option>
                            <option value="high">Price: Low to High</option>
                            <option value="low">Price: High to Low</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    {objectsToShow
                      ? objectsToShow?.map((data) => {
                          return (
                            <React.Fragment>
                              <div className="col-lg-4 col-sm-6">
                                <div className="product text-center">
                                  <div className="mb-3 position-relative">
                                    <div className="badge text-white bg-primary"></div>
                                    <Link
                                      className="d-block"
                                      to="/detail"
                                      state={{ item: data }}
                                    >
                                      <img
                                        className="img-fluid w-100"
                                        src={data?.image}
                                        alt="image"
                                      />
                                    </Link>
                                    <div className="product-overlay">
                                      <ul className="mb-0 list-inline">
                                        <li className="list-inline-item m-0 p-0">
                                          <a
                                            className="btn btn-sm btn-outline-dark"
                                            href="#!"
                                          >
                                            <i className="far fa-heart"></i>
                                          </a>
                                        </li>
                                        <li className="list-inline-item m-0 p-0">
                                          <Link
                                            className="btn btn-sm btn-dark"
                                            to="/cart"
                                          >
                                            Add to cart
                                          </Link>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <a
                                            className="btn btn-sm btn-outline-dark"
                                            href="#productView"
                                            data-bs-toggle="modal"
                                          >
                                            <i className="fas fa-expand"></i>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h6>
                                    <Link className="reset-anchor" to="$">
                                      {data?.title}
                                    </Link>
                                  </h6>
                                  <p className="small text-muted">
                                    ₹{(data?.qnty, data?.price)}
                                  </p>
                                </div>
                              </div>
                            </React.Fragment>
                          );
                        })
                      : ""}
                  </div>
                  <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </React.Fragment>
  );
};
export default Shop;
