import React from 'react'
import { Link } from 'react-router-dom'

export default function Policy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <>
        {/* Start Page Title Area */}
        <div className="page-title-area bg4 jarallax" data-jarallax='{"speed": 0.2}'>
          <div className="container">
            <div className="page-title-content">
              <h1>Policy</h1>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Policy</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start FAQ Area */}
        <section className="faq-area ptb-80">
          <div className="container">
            <div className="faq-accordion">
              <ul className="accordion">
                <li className="accordion-item">
                  <a className="accordion-title" href="javascript:void(0)">
                    Seller Creates Listing :{" "}
                    {/* <i className="icofont-plus" /> */}
                  </a>
                  <p className="accordion-content show">
                    Simply login or register (phone number/ email address and OTP/password), setup your account (name, location, self-introduction and phone number) and click Post Listing. Seller has to agree to Pashsushala.com terms and condition before they can list their stock.

                    Follow the steps through, such as stating the breed of stock, description of each stock, and adding photo, price, insurance and transportation details.

                    Finally, click Post Listing at the end, we will receive the listing and approve the same within 24 hrs if found suitable. Pashsushala.com, we will start holistic marketing for the product live on the platform.

                    Or Seller can connect with Pashushala.com listing team to help them create the listing on their behalf. Seller will have to agree to Pashushala.com terms and condition for the listing to go-live.
                  </p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title " href="javascript:void(0)">
                    Buyer inquries or place order{" "}
                    {/* <i className="icofont-plus" /> */}
                  </a>
                  <p className="accordion-content show">
                    When buyers come on the platform, they can see the listing based on their search criterion, they can either place the order or send an inquire/query to Pashushala.com sales support team. Buyer can also choose to get in touch with pashushala.com expert team via mail or phone call and get their queries resolved and place the order by making the payment. Besides livestock order, buyer can also opt for livestock transportation assist and vet verification facility provided by Pashushala.com along with some other value add services.
                  </p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title " href="javascript:void(0)">
                    Price agreed :{" "}
                    {/* <i className="icofont-plus" /> */}
                  </a>
                  <p className="accordion-content show">
                    The Animalll.com and seller come to an agreement on the price of stock and other value-added services like transportation assist, veterinary service, insurance assist.


                  </p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title " href="javascript:void(0)">
                    Secure Payment{" "}
                    {/* <i className="icofont-plus" /> */}
                  </a>
                  <p className="accordion-content show">
                    Say goodbye to ‘cheques, faxes and payment delays’ and hello to ‘quick, easy, safe and secure’.

                    Once the price is agreed, our system will automatically drum up an invoice and send it to the buyer, who can then pay by card or net banking or deposit the cash in the company’s account.

                    Once the buyer had paid, the goods can be collected or delivered as agreed.


                  </p>
                </li>

              </ul>



              <br />
              <br />
              <ul className="accordion">
                <li className="accordion-item">
                  <h3 style={{ textAlign: "center", fontSize: "22px" }}>
                    Our Privacy Policy
                  </h3> <br /><br />
                  <p>
                    We at Animalll.com have created this privacy policy
                    because we know that you care about how information you
                    provide to us is used and shared. This Privacy Policy
                    relates to the information collection and use practices of
                    Animalll.com in connection with our Services, which are
                    made available to you through the Platform. By visiting our
                    Website and/or using our Services on the Platform, you are
                    agreeing to the terms of this Privacy Policy and the
                    accompanying Terms of Use. Capitalized terms not defined in
                    this Privacy Policy shall have the meaning set forth in our
                    Terms of Use.
                  </p> <br />
                  <Link className="accordion-title " to="javascript:void(0)">
                    Information Collection and Use
                  </Link>
                  <p className="accordion-content show">
                    Our primary goals in collecting personally identifiable
                    information are to provide you with the product and services
                    through the Site, including, but not limited, to the
                    Service, to communicate with you, and to manage your
                    registered user account, if you have one.
                  </p>
                </li>
                <li className="accordion-item">
                  <Link className="accordion-title" to="javascript:void(0)">
                    Information Collected and Register
                  </Link>
                  <p className="accordion-content show">
                    If you desire to have access to certain restricted sections
                    of the Site, you will be required to become a registered
                    user, and to submit certain personally identifiable
                    information to Pahsushala.com. This happens in a number of
                    instances, such as when you sign up for the Service, or if
                    you desire to receive marketing materials and information.
                    Personally, identifiable information that we may collect in
                    such instances may include your IP address, full user name,
                    password, email address, city, telephone number, and other
                    information that you decide to provide us
                  </p>
                </li>
                <li className="accordion-item">
                  <Link className="accordion-title" to="javascript:void(0)">
                    Mobile Number and OTP Verification
                  </Link>
                  <p className="accordion-content show ">
                    Animalll.com allows you to sign up and log in using your
                    mobile number followed by OTP verification. If you sign up
                    using Mobile Number, Animalll.com may also ask for some of
                    the private information like first name, last name, email
                    address, default address in order for us to create your
                    account.
                  </p>
                </li>
                <li className="accordion-item">
                  <Link className="accordion-title" to="javascript:void(0)">
                    Use of Contact Information
                  </Link>
                  <p className="accordion-content show ">
                    Eliminating wasted costs, time and produce. We're also
                    saving you time, giving you back time to spend doing the
                    things you love.
                  </p>
                </li>
                <li className="accordion-item">
                  <Link className="accordion-title" to="javascript:void(0)">
                    Security
                  </Link>
                  <p className="accordion-content show ">
                    Animalll.com is very concerned about safeguarding the
                    confidentiality of your personally identifiable information.
                    We employ administrative, physical and electronic measures
                    designed to protect your information from unauthorized
                    access
                  </p>
                </li>
                <li className="accordion-item">
                  <Link className="accordion-title" to="javascript:void(0)">
                    Cookies
                  </Link>
                  <p className="accordion-content show ">
                    Like many websites, we also use "cookie" technology to
                    collect additional website usage data and to improve the
                    site and our service. A cookie is a small data file that we
                    transfer to your computer's hard disk. We do not use cookies
                    to collect personally identifiable information.
                    Animalll.com may use both session cookies and persistent
                    cookies to better understand how you interact with the Site
                    and our Service, to monitor aggregate usage by our users and
                    web traffic routing on the Site, and to improve the Site and
                    our services. A session cookie enables certain features of
                    the Site and our service and is deleted from your computer
                    when you disconnect from or leave the Site. A persistent
                    cookie remains after you close your browser and may be used
                    by your browser on subsequent visits to the Site. Persistent
                    cookies can be removed by following your web browser help
                    file directions. Most Internet browsers automatically accept
                    cookies. You can instruct your browser, by editing its
                    options, to stop accepting cookies or to prompt you before
                    accepting a cookie from the websites you visit.
                  </p>
                </li>
                <li className="accordion-item">
                  <Link className="accordion-title" to="javascript:void(0)">
                    Changes to this Policy
                  </Link>
                  <p className="accordion-content show ">
                    We may revise this Privacy Policy from time to time; each version will apply to information collected while it was in place. We will notify you of any material changes to our Privacy Policy by posting the new Privacy Policy on our Site. You are advised to consult this Privacy Policy regularly for any changes.


                    Thoughts or questions about this Privacy Policy? Please, let us know.
                  </p>
                </li>
              </ul>
            </div>
            {/* <div className="faq-contact">
        <h3>Ask Your Question</h3>
        <form id="contactForm">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  required=""
                  data-error="Please enter your name"
                  placeholder="Name"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required=""
                  data-error="Please enter your email"
                  placeholder="Email"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  required=""
                  data-error="Please enter your number"
                  className="form-control"
                  placeholder="Phone"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="msg_subject"
                  id="msg_subject"
                  required=""
                  data-error="Please enter your subject"
                  className="form-control"
                  placeholder="Subject"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols={30}
                  rows={6}
                  required=""
                  data-error="Write your message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <div className="form-check">
                  <input
                    name="gridCheck"
                    defaultValue="I agree to the terms and privacy policy."
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    I agree to the <a href="#">terms</a> and{" "}
                    <a href="#">privacy policy</a>
                  </label>
                  <div className="help-block with-errors gridCheck-error" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              <div id="msgSubmit" className="h3 text-center hidden" />
              <div className="clearfix" />
            </div>
          </div>
        </form>
      </div> */}
          </div>
        </section>
        {/* End FAQ Area */}
      </>




    </div>
  )
}
