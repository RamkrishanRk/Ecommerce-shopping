import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  ///// random Number
  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  var rString = randomString(
    32,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  const handlerLogin = (event) => {
    event.preventDefault();
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      const loginuser = JSON.parse(localStorage.getItem("register"));
      if (
        values.email == loginuser.email &&
        values.password == loginuser.password
      ) {
        navigate("/");
        localStorage.setItem("token", JSON.stringify(rString));
        localStorage.setItem("login", JSON.stringify(values));
      } else {
        setError("Wrong Email Or Password");
      }
    } else {
      setErrors(errors);
    }
  };
  return (
    <>
      <Layout>
        <div className="container">
          <div className="login-form">
            <h2>Sign in to your account</h2>
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              ""
            )}

            <form onSubmit={handlerLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
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
                  <div className="text-danger">
                    {values.email.length > 0 ? "" : errors.email}
                  </div>
                )}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
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
                    {values.password.length > 0 ? "" : errors.password}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-dark">
                Sign in
              </button>
            </form>
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
