import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { loginUser } from "../redux/actions/auth";
import { Formik } from "formik";
import { SigninSchema } from "../components/Validation";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Layout>
        <div className="container">
          <div className="login-form">
            <h2>Sign in to your account</h2>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SigninSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values) => {
                dispatch(loginUser(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
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
                    {errors.email && touched.email ? (
                      <div className="text-danger mt-1">
                        <small>{errors.email}</small>
                      </div>
                    ) : null}
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
                    {errors.password && touched.password ? (
                      <div className="text-danger mt-1">
                        <small>{errors.password}</small>
                      </div>
                    ) : null}
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Sign in
                  </button>
                </form>
              )}
            </Formik>
            <p>
              Forgot your password? Not a member?
              <Link to="/register"> Register in here</Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Login;
