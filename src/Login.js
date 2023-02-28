import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Login() {
  const [credetials, setCredetials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function updateData(e) {
    setCredetials({ ...credetials, [e.target.name]: e.target.value });
  }
  console.log(credetials);

  async function loginHandler(event) {
    if (credetials.email === "") {
      toast.error("please enter email", { position: "top-right" });
    } else if (credetials.password === "") {
      toast.error("please enter password", { position: "top-right" });
    } else {
      const configOptions = {
        method: "POST",
        body: JSON.stringify(credetials),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://localhost:8000/login",
        configOptions
      );
      const result = await response.json();
      if (result.status == 1) {
        toast.success(result.message);
        navigate("/");
      }
      else{
        toast.error(result.message)
      }
    }
  }

  return (
    <div>
      <section className="login-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="login-form">
              <h3>
                Please Log In, or <a href="signup.html">Sign Up</a>
              </h3>
              <div className="row">
                <div className="col-lg-4">
                  <a href="#" className="facebook">
                    Facebook
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#" className="google">
                    Google
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#" className="twitter">
                    Twitter
                  </a>
                </div>
              </div>
              <div className="login-or">
                <hr />
                <span>or</span>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="icofont-ui-user" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Username or Email"
                    onChange={(e) => {
                      updateData(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="icofont-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      updateData(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="remember-me">
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  <a href="#" className="forgot-password">
                    Forgot your password?
                  </a>
                </div>
                <button
                  type="button"
                  onClick={(e) => loginHandler(e)}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
