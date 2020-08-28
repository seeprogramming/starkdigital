import React from "react";
import {  Link } from "react-router-dom";
import {useSelector} from 'react-redux'

function Header() {


const cartProductLength = useSelector(
  (state) => state.data.addedProducts.length
);


  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white shadow-sm">
      <Link to="/">
        <span className="navbar-brand font-weight-bold" href="#">
          STARKDIGITAL STORE
        </span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <span className="nav-link">
              <Link to="/">Home</Link>
            </span>
          </li>
         
          <li className="nav-item">
            <span className="nav-link">
              <Link to="/cart">Cart</Link><span className="badge badge-secondary">{cartProductLength}</span>
            </span>
          </li>
      
        </ul>
      </div>
    </nav>
  );
}

export default Header;
