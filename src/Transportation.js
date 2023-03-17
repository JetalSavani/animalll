import React from 'react'

export default function Transportation() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <>






        <>
          {/* Start EC About Area */}
          <div className="ec-about-area pb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="ec-about-image">
                    <img src="assets/img/t.jpg" alt="image" style={{ height: "500px" }} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="ec-about-content">
                    <span>ANIMALLL FARM WITH TRANSPORTATION SERVICE</span>
                    <h3>
                      We Have 15 Years Of Experience In Animals Transportation
                    </h3>
                    <p>
                      We can make on-time deliveries anywhere with complete and precise traceability, in close communication with our customers.

                    </p>
                    <ul className="list">
                      <li>
                        <i className="icofont-checked" /> The fastest delivery
                      </li>
                      <li>
                        <i className="icofont-checked" /> Collect shipment upon request
                      </li>
                      <li>
                        <i className="icofont-checked" /> 24hr wroking time
                      </li>
                      <li>
                        <i className="icofont-checked" /> Cargo insurance
                      </li>
                      <li>
                        <i className="icofont-checked" />  Customer satisfication
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End EC About Area */}
        </>

        {/* Start Features Style Area */}
        <div className="features-style-area pt-100 pb-70">
          <div className="container">
            <div className="section-title with-wrap-style">
              <span>OUR TRANSPORTATION'S TEAM</span>

            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="features-style-card">
                  <div className="features-image">
                    <a href="#">
                      <img
                        src="assets/img/horse-ranch/features/features-1.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="features-content">
                    <h3>
                      <a href="#">Manoj gaitunde</a>
                    </h3>
                    <h6>
                      Vehicle Type : SUV
                    </h6>
                    <p>
                      I have exprience of 10 year's in trasportation field.
                    </p>
                    <a href="#" className="read-more-btn">
                      <i className="icofont-simple-right" /> <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* End Features Style Area */}

      </>


    </div>
  )
}

