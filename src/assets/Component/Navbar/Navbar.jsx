import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
