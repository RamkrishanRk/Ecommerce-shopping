import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <div className="page-holder">
        <div className="header-section">
          <Navbar />
        </div>
        <div className="content-section">{props.children}</div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
