import React from "react";
import { Link } from "react-router-dom";

export default function Animalaccessories() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="products-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-products">
                <div className="products-image">
                  <img src="assets/img/shop1.jpg" alt="" />
                  <ul>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productsModalCenter"
                      >
                        <i className="icofont-search-1" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-link" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="products-content">
                  <h3>
                    <Link to="#">Pecorino Romano</Link>
                  </h3>
                  <span>$191.00</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque iure dolorem vel magni.

                  <br /><br />
                  <Link to="#" className="add-to-cart-btn">
                    Buy Accessorices
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal productsQuickView fade"
        id="productsModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="productsModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="products-image">
                  <img src="assets/img/shop1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="products-content">
                  <h3>Evaporated Milk</h3>
                  <div className="price">
                    <span>$200.00</span> $191.00
                  </div>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                  <form>
                    <div className="quantity">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        min={1}
                        defaultValue={1}
                        title="Qty"
                      />
                    </div>
                    <button type="submit">Add to Cart</button>
                  </form>
                  <div className="product-meta">
                    <span>
                      Category: <Link to="#">Pencil</Link>
                    </span>
                    <span>
                      Tag: <Link to="#">Prints</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
