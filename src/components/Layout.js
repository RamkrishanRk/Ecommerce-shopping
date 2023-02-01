import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  useEffect(() => {
    let loadPage = document.getElementById("load");
    setTimeout(() => {
      loadPage.style.display = "none";
    }, 1000);
  }, []);

  return (
    <>
      <div id="load"></div>
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
