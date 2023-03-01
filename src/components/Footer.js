import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white customer-services">
        <div className="container py-4">
          <div className="row py-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3 fw-bold">Customer services</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="footer-link" to="/">
                    Help &amp; Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Returns &amp; Refunds
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Online Stores
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3 fw-bold">Company</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="footer-link" to="/">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Available Services
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Latest Posts
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="text-uppercase mb-3 fw-bold">Social media</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="footer-link" to="https://twitter.com">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="https://instagram.com">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="https://tumblr.com">
                    Tumblr
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="https://pinterest.com">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="border-top pt-4"
            style={{ borderColor: " #1d1d1d !important" }}
          >
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                <p className="small text-muted mb-0">
                  &copy; 2021 All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="small text-muted mb-0">
                  Template designed by
                  <Link className="text-white reset-anchor" to="/">
                    Bootstrapious
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
