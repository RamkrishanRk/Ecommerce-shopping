import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import LoginAuth from "../redux/actions/auth";
import { Formik } from "formik";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Layout>
        <div className="container">
          <div className="login-form">
            <h2>Sign in to your account</h2>
            <Formik
              initialValues={{ email: "", password: "", passwordConfirm: "" }}
              onSubmit={(values, { setSubmitting }) => {
                LoginAuth(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <div className="mb-3 position-relative">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Sign in
                  </button>
                </form>
              )}
            </Formik>
            <p>
              Forgot your password? Not a member?
              <Link to="/register">Register in here</Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Login;
