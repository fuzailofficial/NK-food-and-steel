import React from "react";
import slider1 from "../../img/slider-1.jpg";
import slider2 from "../../img/slider-2.jpg";
import slider3 from "../../img/slider-3.jpg";
import icon from "../../img/49.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import coconut from "../../img/coconut.jpg";
import coffee from "../../img/coffee-beans.jpg";
import cumin from "../../img/cumin.jpg";
import onion from "../../img/Onion.jpg";
import potato from "../../img/potato.jpg";
import rice from "../../img/Rice.jpg";
import tea from "../../img/tea.jpg";
import turmeric from "../../img/turmeric.jpg";
import productgrain from "../../img/grains-and-cereal.jpg";
import productpulses from "../../img/pulses.jpg";
import productspices from "../../img/spices.jpg";
import productfruits from "../../img/fruits.jpg";
import productvegetable from "../../img/vegetables.jpg";
import productoilseed from "../../img/oilseeds.jpg";
import productfloriculture from "../../img/floriculture.jpg";
import productherb from "../../img/herbs.jpg";

import "./Home.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Home = () => {
  return (
    <>
      {/* section 1 carousel */}
      <div id="carouselExample" className="carousel slide pb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>GLOBAL QUALITY FOOD EXPORTER FROM INDIA</h1>

              <p>
                We export food including row vegetables, fruits, spices and many
                more
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* section2  Hero section*/}
      <section className="pb-105 mrl-80">
        <div className="container">
          <div className="section-title-furits text-center mb-80">
            <img
              className=" lazyloaded"
              data-src="img/icon-img/49.png"
              alt="leaf-heading"
              src={icon}
            />
            <h2>NK Enterprises - Global Food Importers &amp; Exporters</h2>
          </div>
          <p className="text-dark text-justify sectionp">
            “As the ‘land of spices’, India exports tons of various kinds of
            food. In fact, food export from India is a major source of revenue.
            To help your products reach to even the farthest corners of the
            world, Pisum Foods offers you various types of food export as well
            as spices export from India. Being among the leading food export
            companies in India, we ensure our services conform to international
            quality standards.”
          </p>
        </div>
      </section>
      {/* section3 popular prdouct */}
      <section className="product-style-area gray-bg-4 pb-105">
        <div className="container-fluid">
          <div className="section-title-furits bg-shape text-center mb-80">
            <img
              className=" lazyloaded"
              data-src="img/icon-img/49.png"
              alt="leaf-heading"
              src={icon}
            />
            <h2>Popular Products</h2>
          </div>
        </div>

        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            <div className="slider">
              <img src={coconut} />
              <h1 className="img-txt">Coconut</h1>
            </div>
            <div className="slider">
              <img src={coffee} />
              <h1 className="img-txt">Coffee</h1>
            </div>
            <div className="slider">
              <img src={cumin} />
              <h1 className="img-txt">Cumin</h1>
            </div>
            <div className="slider">
              <img src={onion} />
              <h1 className="img-txt">onion</h1>
            </div>
            <div className="slider">
              <img src={potato} />
              <h1 className="img-txt">potato</h1>
            </div>
            <div className="slider">
              <img src={rice} />
              <h1 className="img-txt">rice</h1>
            </div>
            <div className="slider">
              <img src={tea} />
              <h1 className="img-txt">tea</h1>
            </div>
            <div className="slider">
              <img src={turmeric} />
              <h1 className="img-txt">turmeric</h1>
            </div>
          </Carousel>
        </div>
      </section>
      {/* section4 Why choose us*/}
      <section className="fruits-choose-area">
        <div className="container">
          <div className="row choose-row">
            <div className="">
              <div className="fruits-choose-wrapper-all">
                <div className="fruits-choose-title">
                  <h2>Why choose us ?</h2>
                </div>
                <div className="row mr50">
                  <div className="col-sm-6">
                    <div className="fruits-choose-wrapper">
                      <div className="single-fruits-choose landscape-single-fruit">
                        <div className="fruits-choose-serial">
                          <h3>01</h3>
                        </div>
                        <div className="fruits-choose-content">
                          <h4>Get Buyers for Your Food Products</h4>
                          <p>
                            No matter the type of food or spice you plan on
                            exporting, we will ensure that you get genuine
                            buyers for your products who meet your expectations.
                          </p>
                        </div>
                      </div>
                      <div className="single-fruits-choose">
                        <div className="fruits-choose-serial">
                          <h3>02</h3>
                        </div>
                        <div className="fruits-choose-content">
                          <h4>Best quality food trading services</h4>
                          <p>
                            Our stringent policies make sure that food handling
                            and trading is in accordance with international
                            quality standards.
                          </p>
                        </div>
                      </div>
                      <div className="single-fruits-choose">
                        <div className="fruits-choose-serial">
                          <h3>03</h3>
                        </div>
                        <div className="fruits-choose-content">
                          <h4>Global Presence</h4>
                          <p>
                            Even if you are planning to export across multiple
                            continents, we’ve got you covered. Our global
                            presence will allow your products to be exported to
                            various countries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="fruits-choose-wrapper">
                      <div className="single-fruits-choose landscape-single-fruit">
                        <div className="fruits-choose-serial">
                          <h3>04</h3>
                        </div>
                        <div className="fruits-choose-content">
                          <h4>
                            Market Analysis &amp; Up-to-date Market Information
                          </h4>
                          <p>
                            Our thorough and regular analysis and research let
                            us update our database with up to date information
                            on the market and allows us to stay on top of every
                            update.
                          </p>
                        </div>
                      </div>
                      <div className="single-fruits-choose">
                        <div className="fruits-choose-serial">
                          <h3>05</h3>
                        </div>
                        <div className="fruits-choose-content">
                          <h4>Reliable &amp; Trusted Services</h4>
                          <p>
                            Trust is a pillar of our services. Our transparent
                            and reliable operations ensure that you feel at ease
                            with our services.
                          </p>
                        </div>
                      </div>
                      <div className="single-fruits-choose">
                        <div className="fruits-choose-serial">
                          <h3>06</h3>
                        </div>
                        <div className="fruits-choose-content">
                          <h4>
                            Save your time &amp; cost for searching markets
                          </h4>
                          <p>
                            Understanding and researching the market by yourself
                            can be expensive and time-consuming. But with Pisum,
                            we will do that for you instead.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 our product range*/}
      <section className="product-style-area pt-80 pb-30" id="product-range">
        <div className="container">
          <div className="section-title-furits text-center mb-95">
            <img
              className=" lazyloaded"
              data-src={icon}
              alt="Product range"
              src={icon}
            />
            <h2>Our Product Range</h2>
          </div>

          <div className="parent">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              <div className="slider">
                <img src={productgrain} />
                <h1 className="img-txt">Grain</h1>
              </div>
              <div className="slider">
                <img src={productpulses} />
                <h1 className="img-txt">Pulses</h1>
              </div>
              <div className="slider">
                <img src={productspices} />
                <h1 className="img-txt">spices</h1>
              </div>
              <div className="slider">
                <img src={productfruits} />
                <h1 className="img-txt">Fruits</h1>
              </div>
              <div className="slider">
                <img src={productvegetable} />
                <h1 className="img-txt">Vegetable</h1>
              </div>
              <div className="slider">
                <img src={productoilseed} />
                <h1 className="img-txt">OilSeed</h1>
              </div>
              <div className="slider">
                <img src={productfloriculture} />
                <h1 className="img-txt">Floriculture</h1>
              </div>
              <div className="slider">
                <img src={productherb} />
                <h1 className="img-txt">Herb</h1>
              </div>
            </Carousel>
          </div>

          <div className="text-center">
            <a href="/product-range/">
              <button type="button" className="range-button">
                {" "}
                View More
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* {section 6 youtube}  */}
      {/* {section 7 testimonial} */}
      {/* {section 8 india is best} */}
      {/* section last */}
      <section className="newsletter-area bg-img ptb-105">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 mt-6 ">
                <div className="fruits-newsletter-title">
                  <span>Submit Your Requirements</span>
                  <h3>Just One Step Ahead</h3>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <div
                  id="mc_embed_signup"
                  className="subscribe-form-furits f-right"
                >
                  <form
                    className="kwes-form"
                    id="subscribe-form"
                    method="post"
                    action="https://kwes.io/api/foreign/forms/auNcdNbohnWnDLO83hJq"
                    noValidate="novalidate"
                  >
                    <div
                      className="kw-alert kw-alert-success"
                      id="kw-success"
                      aria-live="assertive"
                      style={{ display: "none" }}
                    />
                    <div className="mc-form">
                      <input
                        type="email"
                        name="EMAIL"
                        className="EMAIL"
                        placeholder="Enter Email Address"
                        autoComplete="off"
                      />
                      <div className="clear">
                        <input
                          type="submit"
                          defaultValue="Enquire Now"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button enquire-now"
                        />
                      </div>
                    </div>
                    <small
                      style={{
                        display: "block !important",
                        marginTop: "25px !important",
                        fontSize: "80% !important",
                        transform: "initial !important",
                        opacity: "1 !important",
                        visibility: "initial !important",
                        width: "auto !important",
                        height: "auto !important",
                        overflow: "initial !important",
                      }}
                    >
                      <a
                        href="https://kwes.io"
                        style={{
                          textDecoration: "underline",
                          color: "#767676 !important",
                          display: "block !important",
                          fontSize: "100% !important",
                          width: "auto !important",
                          height: "auto !important",
                          overflow: "initial !important",
                        }}
                        target="_blank"
                        rel="noopener"
                      ></a>
                    </small>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
