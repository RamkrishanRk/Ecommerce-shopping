import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark text-white customer-services">
        <div class="container py-4">
          <div class="row py-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <h6 class="text-uppercase mb-3 fw-bold">Customer services</h6>
              <ul class="list-unstyled mb-0">
                <li>
                  <Link class="footer-link" to="/">
                    Help &amp; Contact Us
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="/">
                    Returns &amp; Refunds
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="/">
                    Online Stores
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <h6 class="text-uppercase mb-3 fw-bold">Company</h6>
              <ul class="list-unstyled mb-0">
                <li>
                  <Link class="footer-link" to="/">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="/">
                    Available Services
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="/">
                    Latest Posts
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="/">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h6 class="text-uppercase mb-3 fw-bold">Social media</h6>
              <ul class="list-unstyled mb-0">
                <li>
                  <Link class="footer-link" to="https://twitter.com">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="https://instagram.com">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="https://tumblr.com">
                    Tumblr
                  </Link>
                </li>
                <li>
                  <Link class="footer-link" to="https://pinterest.com">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="border-top pt-4"
            style={{ borderColor: " #1d1d1d !important" }}
          >
            <div class="row">
              <div class="col-md-6 text-center text-md-start">
                <p class="small text-muted mb-0">
                  &copy; 2021 All rights reserved.
                </p>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <p class="small text-muted mb-0">
                  Template designed by
                  <Link class="text-white reset-anchor" to="/">
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
