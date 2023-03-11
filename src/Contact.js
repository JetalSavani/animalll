import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from "react-toastify";

export default function Contact() {


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    aggree: false
  });
  console.log('formData', formData)

  function onChangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData);

  // async function onClickHandler(e) {
  //   let email_pattern =
  //     /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   // let password_pattern =
  //   //   /^(?=.*[A-Z])(?=.*[1@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/;
  //   let number_pattern = /^\d{10}$/;

  //   if (formData.name === "") {
  //     toast.error("please enter name !", { position: "top-center" });
  //   }
  //   //email
  //   else if (email_pattern.test(formData.email) === false) {
  //     toast.error("please enter valid email", { position: "top-center" });
  //   }
  //   //Mobile Number
  //   else if (
  //     formData.phone === "" ||
  //     number_pattern.test(formData.phone) === false
  //   ) {
  //     toast.error("mobile number must have 10 digit.", {
  //       position: "top-center",
  //     });

  //   } else {
  //     console.log("called btn");
  //     const configOptions = {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await fetch(
  //       "http://localhost:8000/contact",
  //       configOptions
  //     );
  //     const result = await response.json();
  //     if ((result.status = 1)) {
  //       toast.success("Register Successfully !");

  //     }
  //   }
  //   alert('form submitted');
  //   e.preventDefault();
  //   navigate("/")
  //   setFormData('');

  // }


  const onClickHandler = () => {
    if (formData?.aggree) {
      if (formData?.name && formData?.email) {
        if (formData?.subject) {
          if (formData?.message) {

          } else {
            setErrMsg(true)
          }
        }
      } else {
        setErrMsg(true)
      }
    } else {
      toast.error("Please agree to the tearms and privacy!")
    }
  }

  return (
    <div>

      <>



        {/* Start Page Title Area */}
        <div className="page-title-area bg5 jarallax" data-jarallax='{"speed": 0.2}'>
          <div className="container">
            <div className="page-title-content">
              <h1>Contact</h1>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}

        <div className="faq-contact">
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
                    onChange={(e) => onChangeHandler(e)}
                  />
                  {errMsg && !formData?.name && <div className="text-danger">Name is required!</div>}
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
                    onChange={(e) => onChangeHandler(e)}
                  />
                  {errMsg && !formData?.email && <div className="text-danger">Email is required!</div>}
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    id="phone_number"
                    required=""
                    data-error="Please enter your number"
                    className="form-control"
                    placeholder="Phone"
                    onChange={(e) => onChangeHandler(e)}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    id="msg_subject"
                    required=""
                    data-error="Please enter your subject"
                    className="form-control"
                    placeholder="Subject"
                    onChange={(e) => onChangeHandler(e)}
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
                    onChange={(e) => onChangeHandler(e)}
                  />
                  {errMsg && formData?.subject && !formData?.message && <div className="text-danger">Messsage is required!</div>}
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
                      onChange={(e) => setFormData({ ...formData, ['aggree']: e.target.checked })}
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
                <button type="button"
                  onClick={(e) => onClickHandler(e)}
                  className="btn btn-primary">
                  Send Message
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>

      </>
    </div>
  )
}
