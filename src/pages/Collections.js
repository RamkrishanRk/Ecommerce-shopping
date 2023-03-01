import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <>
      <section className="pt-5">
        <header className="text-center">
          <p className="small text-muted small text-uppercase mb-1">
            Carefully created collections
          </p>
          <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
        <div className="row">
          <div className="col-md-4">
            <Link className="category-item" to="/">
              <img
                className="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-1.7570d55a.jpg"
                alt=""
              />
              <strong className="category-item-title">Clothes</strong>
            </Link>
          </div>
          <div className="col-md-4">
            <Link className="category-item mb-4" to="/">
              <img
                className="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-2.1b2e51d9.jpg"
                alt=""
              />
              <strong className="category-item-title">Shoes</strong>
            </Link>
            <Link className="category-item" to="/">
              <img
                className="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-3.49411dee.jpg"
                alt=""
              />
              <strong className="category-item-title">Watches</strong>
            </Link>
          </div>
          <div className="col-md-4">
            <Link className="category-item" to="/">
              <img
                className="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-4.5db5d5ec.jpg"
                alt=""
              />
              <strong className="category-item-title">Electronics</strong>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Collections;
