import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./About.css";
import ship from "../../img/ship.jpg";
import mission from "../../img/mission.png";
import vision from "../../img/vision.png";
import icon from "../../img/49.png";
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
                    WELCOME TO <span>NK ENTERPRISES</span>
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

      {/* 4th section */}
      <section className="values-area mt-50 pt-50 prl-70">
        <div className="container">
          <div className="section-title-furits text-center pt-50 mb-95">
            <img
              className=" lazyloaded"
              data-src={icon}
              alt="Leaf-heading"
              src={icon}
            />
            <h2>Values</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 quality-value">
              <div className="single-fruits-choose value-choose">
                <div className="value-choose-content">
                  <h4>Best Quality Services</h4>
                  <p>
                    When it comes to food, there must be no compromise. This is
                    why we strive to provide you with the best quality services
                    to ensure that the food stays healthy and fresh.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 experience-value">
              <div className="single-fruits-choose value-choose">
                <div className="value-choose-content">
                  <h4>Vast Experience in Food Trading</h4>
                  <p>
                    Our vast experience in the food industry is what makes us
                    the ideal choice for your food trading needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 offset-sm-3 certified-value">
              <div className="single-fruits-choose value-choose">
                <div className="value-choose-content">
                  <h4>Trusted &amp; Legally Approved Certified Services</h4>
                  <p>
                    Being a legally certified food export company in India, our
                    services are transparent and trustworthy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 value-value">
              <div className="single-fruits-choose value-choose">
                <div className="value-choose-content">
                  <h4>Commitment &amp; Time Adherence</h4>
                  <p>
                    Time is a huge factor when it comes to food. This is why, at
                    Pisum, we are committed to ensuring that we get the job done
                    on schedule without fail.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 innovation-value">
              <div className="single-fruits-choose value-choose">
                <div className="value-choose-content">
                  <h4>Innovation</h4>
                  <p>
                    Using innovative methods and equipment, we ensure that the
                    food is packaged and stored to the best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th section */}
      <section className="who-are-we-area mt-90 prl-50 container">
        <div className="section-title-furits text-center mb-50">
          <img
            className=" lazyloaded"
            data-src={icon}
            alt="Leaf-heading"
            src={icon}
          />
          <h2>Who We Are?</h2>
        </div>
        <div className="row">
          <p className="text-justify">
            We are a group of young and enthusiastic individuals who have come
            together for a single goal of being a global leader in food trading.
            We believe that India is known for our spices and food export is key
            to our country’s growth. Prioritizing in exporting Indian spices and
            other food products, we are also analysts and researchers who
            possess an up to date global food market database to help you.
          </p>
        </div>
      </section>

      {/* 6th section  */}
      <section className="what-we-do-area p95 container">
        <div className="section-title-furits text-center mb-50">
          <img
            className=" lazyloaded"
            data-src={icon}
            alt="Leaf-heading"
            src={icon}
          />
          <h2>What We Do?</h2>
        </div>
        <div className="row">
          <p className="text-justify">
            We provide customers with the service of spices export from India.
            But we also understand the demand for Indian food, which is why we
            also offer all kinds of food export from India. From helping you
            find the right buyers to packaging your food and sending it off, our
            complete services will ensure that you face absolutely no
            difficulties. Be it Europe, middle-east, the Americas, or wherever
            you want the food to be exported, we make sure that the job is done.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
