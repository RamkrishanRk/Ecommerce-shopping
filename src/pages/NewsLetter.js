import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className="py-5">
        <div className="container p-0">
          <div className="row gy-3">
            <div className="col-lg-6">
              <h5 className="text-uppercase">Let's be friends!</h5>
              <p className="text-sm text-muted mb-0">
                Nisi nisi tempor consequat laboris nisi.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="input-group">
                <input
                  className="form-control form-control"
                  type="email"
                  placeholder="Enter your email address"
                />
                <button className="btn btn-dark" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsLetter;
