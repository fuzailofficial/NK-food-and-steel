import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./About.css";
import ship from "../../img/ship.jpg";
import mission from "../../img/mission.png";
import vision from "../../img/vision.png";
const About = () => {
  return (
    <div>
      {/* 1st section */}
      <section class="about-banner mt-140">
        <div class="container">
          <div class="breadcrumb-content">
            <h2>about us</h2>
            <ul>
              <li>
                <Link to="/" title="home">
                  home
                </Link>
              </li>
              <li> about us </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className="about-story ptb-95 mrl-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="story-img">
                <img
                  className=" lazyloaded"
                  data-src={ship}
                  alt="strawberry image"
                  src={ship}
                />
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="story-details pl-50">
                <div className="story-details-top">
                  <h2>
                    WELCOME TO <span>PISUM</span>
                  </h2>
                </div>
                <div className="story-details-bottom ">
                  <p>
                    Pisum Food Services Private Limited incorporated in May
                    2015. Pisum Foods is an initiative by the BTW Group (est.
                    2011), focusing on providing food services. With immense
                    experience in the food industry, Pisum Foods are a leading
                    exporter of ​all kinds of​ Indian spices​, pulses, grains,
                    Fruits, Vegetables, and many more, to a number of
                    destinations around the globe. ​With several partnerships
                    with buyers across multiple countries, we have grown to be
                    among the go-to companies for food export from India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className="goal-area mrl-60">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-4">
              <div className="banner-wrapper-4">
                <img
                  className=" lazyloaded"
                  data-src={mission}
                  alt="mission image"
                  src={mission}
                />
              </div>
            </div>
            <div className="col-md-4 col-8">
              <div className="goal-wrapper mb-30">
                <h3>OUR MISSION</h3>
                <p>
                  To cultivate, manufacture, process and serve best in class
                  food retaining freshness and hygiene, fit for daily
                  consumption.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="banner-wrapper-4 mb-30">
                <img
                  className=" lazyloaded"
                  data-src={vision}
                  alt="vision image"
                  src={vision}
                />
              </div>
            </div>
            <div className="col-md-4 col-8">
              <div className="goal-wrapper mb-30">
                <h3>OUR VISION</h3>
                <p>
                  A globally recognized food company nourishing every day
                  routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
