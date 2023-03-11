import React from 'react'
import { Link } from 'react-router-dom';

export default function Singleproduct() {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            {/* Start Page Title Area */}
            <div className="page-title-area bg1 jarallax" data-jarallax='{"speed": 0.2}'>
                <div className="container">
                    <div className="page-title-content">
                        <h1>Products Details</h1>
                        <ul>
                            <li>
                                <Link to="#">Home</Link>
                            </li>
                            <li>Products</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* End Page Title Area */}
            {/* Start Products Details Area */}
            <section className="products-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="products-image-slides owl-carousel owl-theme">
                                <div className="products-details-image">
                                    <img src="assets/img/shop3.jpg" alt="" />
                                </div>
                                <div className="products-details-image">
                                    <img src="assets/img/shop4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="products-details">
                                <h3>Gir Cow </h3>

                                <br />

                                <h5>&#8377;49999.99</h5>
                                <div className="price">

                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
                                    ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur excepteur sint occaecat cupidatat non proident sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <form>

                                    <button type="button">Buy Now</button>

                                </form>


                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="products-details-tabs">
                                <ul id="tabs">
                                    <li className="inactive" id="tab_1">
                                        Description
                                    </li>
                                    <li className="active" id="tab_2">
                                        Additional Information
                                    </li>

                                </ul>
                                <div className="content " id="tab_1_content">
                                    <div className="products-description">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry’s
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining
                                            essentially unchanged. Lorem Ipsum is simply dummy text of the
                                            printing.
                                        </p>
                                    </div>
                                </div>
                                <div className="content show " id="tab_2_content">
                                    <div className="products-description "  >
                                        <ul className="additional-information">
                                            <li>
                                                <span>Seller mobile number</span> 7778883069
                                            </li>
                                            <li>
                                                <span>Color</span> Brown
                                            </li>
                                            <li>
                                                <span>Milk &nbsp; (Liter/Day)</span> 7
                                            </li>
                                            <li>
                                                <span>Age</span> 13
                                            </li>
                                            <li>
                                                <span>Weight</span> 270 kg
                                            </li>
                                            <li>
                                                <span>Lactation</span> 2
                                            </li>
                                            <li>
                                                <span>calf age (years) </span> 2
                                            </li>
                                            <li>
                                                <span> calf gender</span> Male
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Products Details Area */}
        </>
    )
}
