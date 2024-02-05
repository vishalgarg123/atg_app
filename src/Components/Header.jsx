import React from "react";
import atg from "../assets/atg.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/"> 
          <img
            src={atg}
            alt=""
            style={{ mixBlendMode: "multiply" }}
            width={200}
            height={40}
          />
          </Link>
        </div>
        <form className="w-50 border rounded-pill  ml-6" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="col-md-3 text-end">
          <span className="p-2">
            <Link to="/register" style={{color:"black",textDecoration:"none"}}>Create Account</Link>
          </span>

          <span className="p-2">
            <Link to="/loggedin" style={{color:"black",textDecoration:"none"}}>Click here</Link>
            </span>
        </div>
      </header>
    </>
  );
};

export default Header;
