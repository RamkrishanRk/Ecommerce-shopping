import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fName) {
      errors.fName = "First Name is required";
    }
    if (!values.lName) {
      errors.lName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (Object.keys(errors).length === 0) {
      localStorage.setItem("register", JSON.stringify(values));
      navigate("/login");
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="login-form">
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fName" className="form-label">
                  First name
                </label>
                <input
                  type="fName"
                  className="form-control"
                  value={values.fName}
                  onChange={(e) => {
                    setValues((prevState) => ({
                      ...prevState,
                      fName: e.target.value,
                    }));
                  }}
                />
                {errors.fName && (
                  <div className="text-danger">
                    {values.fName.length > 0 ? "" : errors.fName}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="lName" className="form-label">
                  Last name
                </label>
                <input
                  type="lName"
                  className="form-control"
                  value={values.lName}
                  onChange={(e) => {
                    setValues((prevState) => ({
                      ...prevState,
                      lName: e.target.value,
                    }));
                  }}
                />
                {errors.lName && (
                  <div className="text-danger">
                    {values.lName.length > 0 ? "" : errors.lName}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={values.email}
                  onChange={(e) => {
                    setValues((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }));
                  }}
                />
                {errors.email && (
                  <div className="text-danger">
                    {values.email.length > 0 ? "" : errors.email}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={values.password}
                  onChange={(e) => {
                    setValues((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }));
                  }}
                />
                {errors.password && (
                  <div className="text-danger">
                    {values.password.length > 3 ? "" : errors.password}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-dark">
                Create an account
              </button>
            </form>
            <p>
              Already a member? <Link to="/login">Sign in here</Link>.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Register;
