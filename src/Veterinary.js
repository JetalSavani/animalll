import React from 'react'
import { Link } from 'react-router-dom';
export default function Veterinary() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <>
        {/* Start About Area */}
        <section className="about-area ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <img src="assets/img/veterinary.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <span>Veterinary Service</span>
                  <h2>We have 15 years of experience</h2>
                  <p>
                    Advanced General Practice Offering Comprehensive Dentistry, Urgent Care Services, Geriatric and Preventative Medicine Utilizing State of The Art Diagnostic Imaging and Laboratory Services.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-check-circled" /> Wellness and Preventative Medicine
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Geriatric Care
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Urgent Care
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> 24hr resident veterinary
                      care
                    </li>
                    <li>
                      <i className="icofont-check-circled" />General Surgery
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Quarantine and isolation
                      facilities
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Diagnostic and Internal Medicine
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Nutritional Counseling
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> On-site veterinary
                      hospital with neo-natal intensive care unit
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

        </section>
        {/* End About Area */}



        {/* Start Team Wrap Area */}
        <div className="team-wrap-area pt-100 pb-70">
          <div className="container">


            <div className="section-title with-wrap-style">
              <span>OUR Veterinary'S TEAM</span>

            </div>

            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="team-wrap-card">
                  <div className="team-image">
                    <img src="assets/img/riding-school/team/team1.jpg" alt="" />
                    <ul className="team-social">
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3>MM Cruise</h3>
                    <span>Professional Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-wrap-card">
                  <div className="team-image">
                    <img src="assets/img/riding-school/team/team2.jpg" alt="" />
                    <ul className="team-social">
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3>Brad Pitt</h3>
                    <span>Instructor</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-wrap-card">
                  <div className="team-image">
                    <img src="assets/img/riding-school/team/team3.jpg" alt="" />
                    <ul className="team-social">
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3>Nicole Kidman</h3>
                    <span>Farrier</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-wrap-card">
                  <div className="team-image">
                    <img src="assets/img/riding-school/team/team4.jpg" alt="" />
                    <ul className="team-social">
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3>Leonardo DiCaprio</h3>
                    <span>Groom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Wrap Area */}
      </>





    </div>
  )
}
