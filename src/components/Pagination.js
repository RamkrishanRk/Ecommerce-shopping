import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      {nPages ? (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center justify-content-lg-end">
            <li className="page-item mx-1">
              <Link
                className="page-link"
                to="#"
                aria-label="Previous"
                onClick={prevPage}
              >
                <span aria-hidden="true">«</span>
              </Link>
            </li>
            {pageNumbers.map((pgNumber) => (
              <li
                key={pgNumber}
                className={`page-item ${
                  currentPage == pgNumber ? "active" : ""
                } `}
              >
                <Link
                  onClick={() => setCurrentPage(pgNumber)}
                  className="page-link"
                  to="#"
                >
                  {pgNumber}
                </Link>
              </li>
            ))}
            <li className="page-item ms-1">
              <Link
                className="page-link"
                to="#"
                aria-label="Next"
                onClick={nextPage}
              >
                <span aria-hidden="true">»</span>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Pagination;
