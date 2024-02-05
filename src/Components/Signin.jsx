import React from "react";
import sisgnup from "../assets/signup.jpg";



const Signin = () => {
  return (
    <div>
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Sign In</h3>
            <form>
              <div className="form-group">
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
              </div>
              <div className="form-group p-2">
                <input
                  type="login"
                  className="btnSubmit"
                  defaultValue="Login"
                />
              </div>
              <div className="form-group">
                <a href="#" className="ForgetPwd">
                  Forget Password?
                </a>
               
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

export default Signin;
