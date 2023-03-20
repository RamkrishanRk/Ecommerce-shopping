import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { SignupSchema } from "../components/Validation";
import { signupUser } from "../redux/actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Layout>
        <div className="container">
          <div className="login-form">
            <h2>Create an account</h2>
            <Formik
              initialValues={{
                userName: "",
                phone: "",
                email: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values) => {
                dispatch(signupUser(values));
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
                    <label htmlFor="userName" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First and last name"
                      name="userName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userName}
                    />
                    {errors.userName && touched.userName ? (
                      <div className="text-danger mt-1">
                        <small>{errors.userName}</small>
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3 hljs-string">
                    <label htmlFor="phone" className="form-label">
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile number"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      maxLength={10}
                    />
                    {errors.phone && touched.phone ? (
                      <div className="text-danger mt-1">
                        <small>{errors.phone}</small>
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email (optional)
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
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="At least 6 characters"
                      name="password"
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
                    Create an account
                  </button>
                </form>
              )}
            </Formik>
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
