import React from "react";
import "./Navbar.css";
import { Route, Routes, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-static">
        <div className="container-fluid my-3">
          <Link className="navbar-brand" to="/">
            NK Enterprise
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse justify-content-center navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link  " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Grains and Cereal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pulses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Spices
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fruits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vegetables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Oilseeds
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Floriculture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Herbs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dry Fruits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Beverages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dehydrated Products
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link className="nav-link  " aria-current="page" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
