import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginModel = (props) => {
  const [errors, setErrors] = useState({});
  const [login, setlogin] = useState(false);
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
      setlogin(true);
    } else {
      setErrors(errors);
    }
  };
  //// login form

  ///// random Number
  const [error, setError] = useState();

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
        navigate(0);
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
    <React.Fragment>
      <div
        className="modal fade"
        id={props.modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header border-0">
              {login ? (
                <>
                  <h1 className="modal-title fs-5">Sign in to your account</h1>
                  {error ? (
                    <div className="alert alert-danger p-1 d-flex" role="alert">
                      {error}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <h1 className="modal-title fs-5">Create an account</h1>
              )}

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {login ? (
                <form onSubmit={handlerLogin}>
                  <div className="mb-3 form-signin">
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
                        {values.password.length > 0 ? "" : errors.password}
                      </div>
                    )}
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
              ) : (
                <form className="form-signup" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fName" className="form-label">
                      First Name
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
                      Last Name
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
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Create an account
                    </button>
                  </div>
                </form>
              )}
              <p className="mt-2">
                {login ? (
                  <p>
                    Already a member?
                    <Link
                      to="#"
                      className="text-decoration-none"
                      onClick={() => setlogin(false)}
                    >
                      {" "}
                      Register in here
                    </Link>
                  </p>
                ) : (
                  <p className="mt-2">
                    Forgot your password? Not a member?
                    <Link
                      to="#"
                      className="text-decoration-none"
                      onClick={() => setlogin(true)}
                    >
                      {" "}
                      Sign in here
                    </Link>
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginModel;
