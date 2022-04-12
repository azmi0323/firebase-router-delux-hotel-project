import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-info py-3">
      <div className="d-flex justify-content-between align-items-center container">
        <div>
            <h1 className="text-black fw-bold">Deluxs<span className=" text-danger">Hotel</span></h1>
        </div>
        <div className="Header-option fw-bold fs-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">LogIn</Link>
          <Link to="/signUp">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
