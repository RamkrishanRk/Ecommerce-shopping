import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <>
      <section class="pt-5">
        <header class="text-center">
          <p class="small text-muted small text-uppercase mb-1">
            Carefully created collections
          </p>
          <h2 class="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
        <div class="row">
          <div class="col-md-4">
            <Link class="category-item" to="/">
              <img
                class="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-1.7570d55a.jpg"
                alt=""
              />
              <strong class="category-item-title">Clothes</strong>
            </Link>
          </div>
          <div class="col-md-4">
            <Link class="category-item mb-4" to="/">
              <img
                class="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-2.1b2e51d9.jpg"
                alt=""
              />
              <strong class="category-item-title">Shoes</strong>
            </Link>
            <Link class="category-item" to="/">
              <img
                class="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-3.49411dee.jpg"
                alt=""
              />
              <strong class="category-item-title">Watches</strong>
            </Link>
          </div>
          <div class="col-md-4">
            <Link class="category-item" to="/">
              <img
                class="img-fluid"
                src="https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-4.5db5d5ec.jpg"
                alt=""
              />
              <strong class="category-item-title">Electronics</strong>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Collections;
