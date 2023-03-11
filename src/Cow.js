import React from 'react'
import { Link } from 'react-router-dom';


export default function Allproduct() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <div className="page-title-area bg4 jarallax" data-jarallax='{"speed": 0.2}'>
        <div className="container">
          <div className="page-title-content">
            <h1>All Product</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>All Product
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="courses-area">

        <div className="container">

          <div className="section-title with-wrap-style"><br /><br />
            <span>Our Product </span>

          </div>
          <div className="row">

            <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>




                  <button className='btn btn-success' style={{ marginLeft: "25%" }}  >View Product </button>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>
                  <button className='btn btn-success' style={{ marginLeft: "25%" }}  >View Product </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>


                  <button className='btn btn-success' style={{ marginLeft: "25%" }}    >View Product </button>

                </div>
              </div>
            </div>


          </div>
        </div>

      </section>
    </>
  )
}
