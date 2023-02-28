import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
    phone: "",
  });

  function onChangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData);

  async function onClickHandler() {
    let email_pattern =
      /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let password_pattern =
    //   /^(?=.*[A-Z])(?=.*[1@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/;
    let number_pattern = /^\d{10}$/;

    if (formData.name === "") {
      toast.error("please enter name !", { position: "top-center" });
    }
    //email
    else if (email_pattern.test(formData.email) === false) {
      toast.error("please enter valid email", { position: "top-center" });
    }
    //Mobile Number
    else if (
      formData.phone === "" ||
      number_pattern.test(formData.phone) === false
    ) {
      toast.error("mobile number must have 10 digit.", {
        position: "top-center",
      });
    } else if (
      formData.password === "" ||
      formData.c_password === "" ||
      formData.password !== formData.c_password
    ) {
      toast.error("password not matched !", { position: "top-center" });
    } else {
      console.log("called btn");
      const configOptions = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://localhost:8000/insert-user",
        configOptions
      );
      const result = await response.json();
      if ((result.status = 1)) {
        toast.success("Register Successfully !");
        navigate("/login");
      }
    }
  }

  return (
    <div>
      <>
        {/* Start Page Title Area */}
        <div
          className="page-title-area bg1 jarallax"
          data-jarallax='{"speed": 0.2}'
        >
          <div className="container">
            <div className="page-title-content">
              <h1>Register</h1>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start Checkout Area */}
        <section className="checkout-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="user-actions">
                  <i className="icofont-login" />
                  <span>
                    Returning customer? <a href="#">Click here to login</a>
                  </span>
                </div>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="billing-details">
                    <h3 className="title">Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-12 col-md-12"></div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => onChangeHandler(e)}
                            name="name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            E-mail <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            onChange={(e) => onChangeHandler(e)}
                            name="email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            onChange={(e) => onChangeHandler(e)}
                            name="password"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                          <label>
                            Confirm Password <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            onChange={(e) => onChangeHandler(e)}
                            name="c_password"
                            className="form-control"
                          />
                        </div>
                      </div>
                      {/* <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div> */}
                      {/* <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input type="email" className="form-control" />
                        </div>
                      </div> */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => onChangeHandler(e)}
                            name="phone"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => onClickHandler(e)}
                        class="form-control"
                      >
                        Submit
                      </button>
                      {/* <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="create-an-account"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="create-an-account"
                          >
                            Create an account?
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="ship-different-address"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="ship-different-address"
                          >
                            Ship to a different address?
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="notes"
                            id="notes"
                            cols={30}
                            rows={4}
                            placeholder="Order Notes"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    </div>
  );
}
