import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const data = location.state?.data;
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    address: "",
    zip: "",
    city: "",
    state: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.company) {
      errors.company = "Company is required!";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.address) {
      errors.address = "Address  is required";
    }
    if (!values.zip) {
      errors.zip = "Posta Zip is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }

    if (Object.keys(errors).length === 0) {
      localStorage.setItem("payment-details", JSON.stringify(values));
      navigate("/payment-method", { state: data });
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <Layout>
        <section className="container py-5 checkout-billing-details">
          <h2 className="h5 text-uppercase mb-4">Shipping Address</h2>
          <div className="row">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <label className="form-label" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your first name"
                      value={values.firstName}
                      name="firstName"
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          firstName: e.target.value,
                        }));
                      }}
                    />
                    {errors.firstName && (
                      <div className="text-danger mt-2">
                        {values.firstName.length > 0 ? "" : errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={values.lastName}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          lastName: e.target.value,
                        }));
                      }}
                    />
                    {errors.lastName && (
                      <div className="text-danger mt-2">
                        {values.lastName.length > 0 ? "" : errors.lastName}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Jason@example.com"
                      name="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }));
                      }}
                    />
                    {errors.email && (
                      <div className="text-danger mt-2">
                        {values.email.length > 0 ? "" : errors.email}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" htmlFor="phone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="+02 245354745"
                      name="phone"
                      value={values.phone}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          phone: e.target.value,
                        }));
                      }}
                      maxLength={10}
                    />
                    {errors.phone && (
                      <div className="text-danger mt-2">
                        {values.phone.length > 0 ? "" : errors.phone}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" htmlFor="company">
                      Company name (optional)
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your company name"
                      name="company"
                      value={values.company}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          company: e.target.value,
                        }));
                      }}
                    />
                    {errors.company && (
                      <div className="text-danger mt-2">
                        {values.company.length > 0 ? "" : errors.company}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="form-label" htmlFor="country">
                      Country
                    </label>
                    <select
                      className="form-control rounded-0"
                      name="country"
                      value={values.country}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          country: e.target.value,
                        }));
                      }}
                    >
                      <option>Choose your country</option>
                      <option value="india">India</option>
                      <option value="afghanistan">Afghanistan</option>
                    </select>
                    {errors.country && (
                      <div className="text-danger mt-2">
                        {values.country.length > 0 ? "" : errors.country}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="House number and street name"
                      name="address"
                      value={values.address}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          address: e.target.value,
                        }));
                      }}
                    />
                    {errors.address && (
                      <div className="text-danger mt-2">
                        {values.address.length > 0 ? "" : errors.address}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <label className="form-label" htmlFor="zip">
                      Posta / Zip
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Posta / Zip"
                      name="zip"
                      value={values.zip}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          zip: e.target.value,
                        }));
                      }}
                    />
                    {errors.zip && (
                      <div className="text-danger mt-2">
                        {values.zip.length > 0 ? "" : errors.zip}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" htmlFor="city">
                      Town/City
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          city: e.target.value,
                        }));
                      }}
                    />
                    {errors.city && (
                      <div className="text-danger mt-2">
                        {values.city.length > 0 ? "" : errors.city}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" htmlFor="state">
                      State/County
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={(e) => {
                        setValues((prevState) => ({
                          ...prevState,
                          state: e.target.value,
                        }));
                      }}
                    />
                    {errors.state && (
                      <div className="text-danger mt-2">
                        {values.state.length > 0 ? "" : errors.state}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-12 form-group">
                    <button
                      className="btn btn-dark"
                      style={{ borderRadius: 0 }}
                    >
                      Place order
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Price details</h5>

                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small fw-bold">
                        Price (1 item)
                      </strong>
                      <span>₹{data}</span>
                    </li>
                    <li className="border-bottom my-2"></li>
                  </ul>

                  <li className="d-flex align-items-center justify-content-between">
                    <strong className="text-uppercase small fw-bold">
                      Total Payable
                    </strong>
                    <span>₹{data}</span>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Checkout;
