import React from "react";
import "./Footer.css";
import { Route, Routes, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area fruits-footer">
      <div className="food-footer-bottom pt-80 pb-70 black-bg-5">
        <div className="container main-box">
          <div className="row ex mrl-20">
            <div className="col-md-6 col-lg-3 footer-section">
              <div className="footer-widget">
                <h3 className="footer-widget-title-6">Information</h3>
                <div className="food-widget-content">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Link to="/" title="Home">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" title="About Us">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; About Us
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/product-range/"
                        title="Products Range"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Products Range
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href
                        data-target="#supplier-form"
                        data-toggle="modal"
                        title="Become Supplier"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Become Supplier
                      </a>
                    </li> */}

                    {/* <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/careers/"
                        title="Careers"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Careers
                      </a>
                    </li> */}
                    <li>
                      <Link to="/contact" title="Contact Us">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-section">
              <div className="footer-widget">
                <h3 className="footer-widget-title-6">Stay Connected</h3>
                <div className="food-about">
                  <div className="food-about-info">
                    <div className="food-info-wrapper">
                      <div className="food-address">
                        <div className="food-info-icon">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                        </div>
                        <div className="food-info-content">
                          <h6>Registered address:</h6>
                          <p>
                            33/15, Prashant Bunglow, <br />
                            Opp. Garware College, <br />
                            Karve Road, Pune 411004 India
                          </p>
                        </div>
                      </div>
                      <div className="food-address">
                        <div className="food-info-icon">
                          <i className="fa fa-phone" aria-hidden="true" />
                        </div>
                        <div className="food-info-content">
                          <h6>Phone Number:</h6>
                          <p>9765758899 / 7219115858</p>
                        </div>
                      </div>
                      {/* <div class="food-address">
              <div class="phone">
                <i class="fa fa-whatsapp" style="background: #25d366;color: #ffffff;padding: 2px;border-radius: 50%;"></i>
                  <a href="https://api.whatsapp.com/send?phone=+91 020 48570000" style="color: #ffffff;">
                    +91 020 48570000
                  </a>
              </div>
            </div> */}
                      <div className="food-address">
                        <div className="food-info-icon">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </div>
                        <div className="food-info-content">
                          <h6>Email:</h6>
                          <p>
                            <a
                              title="Pisum Foods Email"
                              href="http://web.archive.org/web/20230626225641/mailto:inquiry@pisumfoods.com"
                            >
                              inquiry@pisumfoods.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-section">
              <div className="footer-widget">
                <h3 className="footer-widget-title-6">Products Range</h3>
                <div className="food-widget-content">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Link to="/" title="Grains and Cereal">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Grains and Cereal
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/pulses/"
                        title="Pulses"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Pulses
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/spices/"
                        title="Spices"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Spices
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/fruits/"
                        title="Fruits"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Fruits
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/vegetables/"
                        title="Vegetables"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Vegetables
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/oilseeds/"
                        title="Oilseeds"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Oilseeds
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/floriculture/"
                        title="Floriculture"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Floriculture
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/herbs/"
                        title="Herbs"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Herbs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/dry-fruits/"
                        title="Dry Fruits"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Dry Fruits
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/beverages/"
                        title="Beverages"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Beverages
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/dehydrated-products/"
                        title="Dehydrated Products"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Dehydrated Products
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-section">
              <div className="footer-widget">
                <h3 className="footer-widget-title-6">Branches</h3>
                <div className="food-widget-content">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Link
                        href="/web/20230626225641/https://pisumfoods.com/contact-us/#branches"
                        title="Pune"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Pune
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/contact-us/#branches"
                        title="Mumbai"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Mumbai
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web/20230626225641/https://pisumfoods.com/contact-us/#branches"
                        title="Bangalore"
                      >
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        &nbsp; Bangalore
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="food-copyright black-bg-6 ptb-30">
        <div className="container text-center">
          <p>
            Copyright © 2020
            <a
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener"
              href="http://web.archive.org/web/20230626225641/http://www.btwgroup.co/"
              title="btw group"
            >
              A BTW Group Company{" "}
            </a>
            &nbsp; | &nbsp;Designed by
            <a
              style={{ textDecoration: "underline" }}
              title="wbgl india"
              target="_blank"
              rel="noopener"
              href="http://web.archive.org/web/20230626225641/https://wgbl.co/"
            >
              WGBL India
            </a>
            - Design Agency
          </p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
