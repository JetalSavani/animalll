import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <>
        <>
          {/* Start Preloader Area */}
          {/* <div className="preloader">
    <div className="loader">
      <img src="assets/img/preloader.gif" alt="preloader" />
      <h2>Loading...</h2>
    </div>
  </div> */}
          {/* End Preloader Area */}
          {/* Start Navbar Area */}
          <div className="navbar-area">
            <div className="semental-mobile-nav">
              <div className="logo">
                {/* <Link href="index-4.html"> */}
                <img
                  src="assets/img/animalll_logo.jpg"
                  style={{ width: "120px" }}
                  alt="logo"
                />
                {/*</Link> */}
              </div>
            </div>
            <div className="semental-nav">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link className="navbar-brand" to="/">
                    <img
                      src="assets/img/animalll_logo.jpg"
                      style={{ width: "120px" }}
                      alt="logo"
                    />
                  </Link>
                  <div
                    className="collapse navbar-collapse mean-menu"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      {/* <li className="nav-item">
                        <Link href="#" className="nav-link active">
                          Home <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/" className="nav-link">
                              Home One
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-3.html" className="nav-link">
                              Home Two
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-4.html" className="nav-link active">
                              Home Three
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-5.html" className="nav-link">
                              Horse Ranch
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-6.html" className="nav-link">
                              Equestrian Club
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-7.html" className="nav-link">
                              Horse Riding School
                           </Link>
                          </li> */}
                      {/* </ul>
                      </li> */}

                      {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          About Us <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="about.html" className="nav-link">
                              About Us 1
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="about-2.html" className="nav-link">
                              About Us 2
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="instructor.html" className="nav-link">
                              Instructor
                           </Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Courses <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="courses.html" className="nav-link">
                              Courses
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="single-courses.html" className="nav-link">
                              Single Courses
                           </Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Stallions <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="stallions.html" className="nav-link">
                              Stallions
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="stallions-details.html"
                              className="nav-link"
                            >
                              Single Stallions
                           </Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Pages <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              About Us
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="about.html" className="nav-link">
                                  About Us 1
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="about-2.html" className="nav-link">
                                  About Us 2
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="instructor.html" className="nav-link">
                                  Instructor
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="instructor.html" className="nav-link">
                              Instructor
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              Stallions
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="stallions.html" className="nav-link">
                                  Stallions
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="stallions-details.html"
                                  className="nav-link"
                                >
                                  Single Stallions
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              Courses
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="courses.html" className="nav-link">
                                  Courses
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="single-courses.html"
                                  className="nav-link"
                                >
                                  Single Courses
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              Shop
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="shop.html" className="nav-link">
                                  Shop
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="single-products.html"
                                  className="nav-link"
                                >
                                  Single Products
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="cart.html" className="nav-link">
                                  Cart
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="checkout.html" className="nav-link">
                                  Checkout
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="pricing.html" className="nav-link">
                              Pricing
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="login.html" className="nav-link">
                              Login
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="signup.html" className="nav-link">
                              Signup
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="error-404.html" className="nav-link">
                              404 Error
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="coming-soon.html" className="nav-link">
                              Coming Soon
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="faq.html" className="nav-link">
                              FAQ
                           </Link>
                          </li>
                        </ul>
                      </li> */}

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/services" className="nav-link">
                          Services <i className="icofont-simple-down" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/transportation" className="nav-link">
                              Transportation
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/veterinary" className="nav-link">
                              Veterinary
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/insaurance"
                              className="nav-link"
                            >
                              Insaurance
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/animal-accessories"
                              className="nav-link"
                            >
                              Animal Accessories
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link to="/blog" className="nav-link">
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/product" className="nav-link">
                          Product
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/about" className="nav-link">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/register" className="nav-link">
                          Register
                        </Link>
                      </li>
                    </ul>
                    <div className="others-options">
                      <Link to="/login" className="btn btn-primary">
                        Login <i className="icofont-simple-right" />
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* End Navbar Area */}
        </>
      </>
    </div>
  );
}
