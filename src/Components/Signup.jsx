import React, { useState } from "react";
import sisgnup from "../assets/signup.jpg";
import { Link } from "react-router-dom";
const signup = () => {
  return (
    <div>
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Create an Account</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name *"
                  onChange={(event) => setName(event.target.value)}
                  defaultValue
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name *"
                  defaultValue
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                  defaultValue
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  defaultValue
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password "
                  defaultValue
                />
              </div>
              <div className="form-group p-2">
                <input
                  type="submit"
                  className="btnSubmit"
                  defaultValue="Login"
                />
              </div>
              <div className="form-group">
                <a href="#" className="ForgetPwd">
                  Forget Password?
                </a>
                <Link to="/signin" className=" p-2 signin">
                  Sign In?
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-6 login-form-2">
            <img
              src={sisgnup}
              alt=""
              className="flex flex-wrap justify-content-center ratio ratio-16*9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
