import React from "react";
import "./Footer.css";
import { Route, Routes, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-area fruits-footer">
        <div className="food-footer-bottom pt-80 pb-70 black-bg-5">
          <div className="container">
            <div className="row mrl-20">
              <div className="col-md-6 col-lg-3 footer-section">
                <div className="footer-widget">
                  <h3 className="footer-widget-title-6">Information</h3>
                  <div className="food-widget-content">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <Link to="/" title="Home">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" title="About Us">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; About Us
                        </Link>
                      </li>

                      <li>
                        <Link to="/product" title="Products Range">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Products Range
                        </Link>
                      </li>

                      <li>
                        <Link to="/contact" title="Contact Us">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 footer-section">
                <div className="footer-widget">
                  <h3 className="footer-widget-title-6">Products Range</h3>
                  <div className="food-widget-content">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <a href="/grains-and-cereal/" title="Grains and Cereal">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Grains and Cereal
                        </a>
                      </li>
                      <li>
                        <a href="/pulses/" title="Pulses">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Pulses
                        </a>
                      </li>
                      <li>
                        <a href="/spices/" title="Spices">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Spices
                        </a>
                      </li>
                      <li>
                        <a href="/fruits/" title="Fruits">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Fruits
                        </a>
                      </li>
                      <li>
                        <a href="/vegetables/" title="Vegetables">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Vegetables
                        </a>
                      </li>
                      <li>
                        <a href="/oilseeds/" title="Oilseeds">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Oilseeds
                        </a>
                      </li>
                      <li>
                        <a href="/floriculture/" title="Floriculture">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Floriculture
                        </a>
                      </li>
                      <li>
                        <a href="/herbs/" title="Herbs">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Herbs
                        </a>
                      </li>
                      <li>
                        <a href="/dry-fruits/" title="Dry Fruits">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Dry Fruits
                        </a>
                      </li>
                      <li>
                        <a href="/beverages/" title="Beverages">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Beverages
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dehydrated-products/"
                          title="Dehydrated Products"
                        >
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Dehydrated Products
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 col-lg-3 footer-section">
                <div className="footer-widget">
                  <h3 className="footer-widget-title-6">Branches</h3>
                  <div className="food-widget-content">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <a href="/contact-us/#branches" title="Pune">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Pune
                        </a>
                      </li>
                      <li>
                        <a href="/contact-us/#branches" title="Mumbai">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="/contact-us/#branches" title="Bangalore">
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                          &nbsp; Bangalore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-md-6 col-lg-3 footer-section">
                <div className="footer-widget">
                  <h3 className="footer-widget-title-6">Stay Connected</h3>
                  <div className="food-about">
                    <div className="food-about-info">
                      <div className="food-info-wrapper">
                        <div className="food-address">
                          <div className="food-info-icon">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="food-info-content">
                            <h6>Registered address:</h6>
                            <p>
                              CTS NO 2/2 Asef bagh, <br />
                              Plot no 1-2-13-14/p near aref masjid, <br />
                              Main road aref colony, <br />
                              Aurangabad, Maharashtra, 431001
                            </p>
                          </div>
                        </div>
                        <div className="food-address">
                          <div className="food-info-icon">
                            <i className="fa fa-phone" aria-hidden="true" />
                          </div>
                          <div className="food-info-content">
                            <h6>Phone Number:</h6>
                            <p>+919970006581</p>
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
                                title="NK Enterprises Email"
                                href="mailto:nkenterprisesaur@gmail.com"
                              >
                                nkenterprisesaur@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-12 mt-20">
                <nav className="social-bar container">
                  <a
                    className="fb text-yt text-yt"
                    title="youtube icon"
                    target="_blank"
                    rel="noopener"
                    href="https://www.youtube.com/channel/UC5J8ax1tO3F5jDPhGFql-ZQ"
                  >
                    <i className="fa fa-youtube" />
                  </a>
                  <a
                    className="fb text-fb text-fb"
                    title="facebook icon"
                    target="_blank"
                    rel="noopener"
                    href="https://www.facebook.com/pisumfoods"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    className="fb text-tw text-tw"
                    title="twitter icon"
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/pisumfoods"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className="fb text-ld text-ld"
                    title="linkedin icon"
                    target="_blank"
                    rel="noopener"
                    href="https://www.linkedin.com/company/pisum-food-services"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    className="fb text-ig text-ig"
                    title="instagram icon"
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/pisumfoods/"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </nav>
              </div> */}
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
                href="http://www.btwgroup.co/"
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
                href="https://wgbl.co/"
              >
                WGBL India
              </a>
              - Design Agency
            </p>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
