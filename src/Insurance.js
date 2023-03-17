import React from 'react'
import { Link } from 'react-router-dom';
export default function Insurance() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <>
        {/* Start Horse Society Area */}
        <div className="horse-society-area pt-100 pb-70">
          <div className="container">
            <div className="section-title with-wrap-style">
              {/* <span>INSURANCE SERVICE</span> */}
              <h2>Protect Your Livestock with Cow Insurance Coverage</h2>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="horse-society-card">
                  <div className="horse-society-content">
                    <div className="icon-image">
                      <img
                        src="assets/img/insuranceimage.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#">Coverage Options</a>
                      </h3>
                      <p>
                        Choose the coverage options that best fit your needs and budget.
                      </p>

                    </div>
                  </div>
                  <div className="horse-society-content">
                    <div className="icon-image">
                      <img
                        src="assets/img/insuranceimage2.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#"> Risk management </a>
                      </h3>
                      <p>
                        Cow insurance helps to manage risk for farmers and ranchers.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="horse-society-card">
                  <div className="horse-society-image">
                    <img
                      src="assets/img/insurancemain2.jpg"
                      alt="image"
                      style={{ height: "450px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="horse-society-card">
                  <div className="horse-society-content">
                    <div className="icon-image">
                      <img
                        src="assets/img/insuranceimage3.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#">Protection</a>
                      </h3>
                      <p>
                        Cow insurance protects against unexpected financial losses.
                      </p>

                    </div>
                  </div>
                  <div className="horse-society-content">
                    <div className="icon-image">
                      <img
                        src="assets/img/insuranceimage4.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#">Livestock Owners</a>
                      </h3>
                      <p>
                        Protect your livestock and get peace of mind with cow insurance.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Horse Society Area */}
        <div className="blog-wrap-area pt-100 pb-100">
          <div className="container">
            <div className="section-title with-wrap-style">
              <span> OUR INSURANCE PARTNER </span>

            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="blog-wrap-card">
                  <div className="blog-image">
                    <Link to="single-post-1.html">
                      <img src="assets/img/horse-ranch/blog/blog-1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-content">

                    <h3>
                      New India Assurance Company Limited:
                    </h3>
                    <p>
                      Offers livestock insurance policies for cows, buffaloes, and oxen. The policies cover risks such as death, loss, or damage due to accidents, diseases, or natural calamities.            </p>
                    {/* <h6>visiting address : New India Assurance Building, <br />
87 M.G. Road, Fort,<br />
Mumbai - 400001, India</h6> */}
                    <button className='btn btn-success'> Buy Policy</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-wrap-card">
                  <div className="blog-image">
                    <Link to="single-post-1.html">
                      <img src="assets/img/horse-ranch/blog/blog-2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <span>
                      By Danvir Lewis
                    </span>
                    <h3>
                      Give Your Senior Horse The
                    </h3>

                    <button className='btn btn-success'> Buy Policy</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-wrap-card">
                  <div className="blog-image">
                    <Link to="single-post-1.html">
                      <img src="assets/img/horse-ranch/blog/blog-3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <span>
                      By Danvir Lewis
                    </span>
                    <h3>
                      4 Ways To Help Your Horse Gain
                    </h3>
                    <button className='btn btn-success'> Buy Policy</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>


    </div>
  )
}
