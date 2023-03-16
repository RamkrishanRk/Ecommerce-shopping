import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const EditCheckout = () => {
  const items = JSON.parse(localStorage.getItem("payment-details"));
  const [formValue, setFormValue] = useState(items);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("payment-details", JSON.stringify(formValue));
    navigate("/payment-method");
  };
  return (
    <>
      <Layout>
        <section className="container py-5 checkout-billing-details">
          <h2 className="h5 text-uppercase mb-4">Shipping Address</h2>

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
                  value={formValue.firstName}
                  name="firstName"
                  onChange={handleInputChange}
                />
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
                  value={formValue.lastName}
                  onChange={handleInputChange}
                />
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
                  value={formValue.email}
                  onChange={handleInputChange}
                />
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
                  value={formValue.phone}
                  onChange={handleInputChange}
                  maxLength={10}
                />
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
                  value={formValue.company}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-6 form-group">
                <label className="form-label" htmlFor="country">
                  Country
                </label>
                <select
                  className="form-control rounded-0"
                  name="country"
                  value={formValue.country}
                  onChange={handleInputChange}
                >
                  <option>Choose your country</option>
                  <option value="india">India</option>
                  <option value="afghanistan">Afghanistan</option>
                </select>
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
                  value={formValue.address}
                  onChange={handleInputChange}
                />
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
                  value={formValue.zip}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label" htmlFor="city">
                  Town/City
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  value={formValue.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label" htmlFor="state">
                  State/County
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  value={formValue.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-lg-12 form-group">
                <button className="btn btn-dark" style={{ borderRadius: 0 }}>
                  Save and Deliver Here
                </button>
              </div>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default EditCheckout;
