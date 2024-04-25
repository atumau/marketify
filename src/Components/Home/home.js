import React, { useState } from "react";
import "../Home/home.css";
import Navbar from "../Navbar/navbar";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";

const Home = () => {
  const contentArray = [
    {
      heading:
        "From roasting beans in garage to expanding into a facility due to overwhelming customer demand, our journey is a testament to our passion and dedication.",
      paragraph: "Rod Johnson — Owner",
      imageUrl: "pic1.webp",
    },
    {
      heading:
        "Shopify has been instrumental in bringing my passion project to life, allowing me to connect with individuals who appreciate and benefit from it.",
      paragraph: "Patrice Mousseau — Owner",
      imageUrl: "pic2.webp",
    },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1
    );
  };

  const handleRightButtonClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1
    );
  };
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const toggleVideoPopup = () => {
    setShowVideoPopup(!showVideoPopup);
  };

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <>
      <section className="home-video-section">
        <div className="video-section">
          <div className="overlay-content-2">
            <Navbar />
          </div>

          <video autoPlay loop muted className="video-container">
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
          <div className="overlay-content">
            <h1 className="overlay-text">
              Improving Commerce Accessibility for Everyone
            </h1>
            <p className="overlay-para">
              Marketify backs the next wave of entrepreneurs, global giants, and
              everyone in the spectrum
            </p>
          </div>
          <div className="overlay-content-3">
            <button className="overlay-button">Start free trial</button>
            <p className="overlay-text-button">
              Get 3 days free then 1 month for ₹20.
            </p>
          </div>
          <div className="overlay-content-4">
            <button
              className="overlay-content-4-button"
              onClick={toggleVideoPopup}
            >
              <FaRegCirclePlay /> Watch Story
            </button>
          </div>
        </div>

        {showVideoPopup && (
          <div className="video-popup">
            <button className="close-button" onClick={closeVideoPopup}>
              <CiCircleRemove />
            </button>
            <video autoPlay controls className="popup-video">
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </section>
      <section className="count-section">
        <div className="home-count-section">
          <div className="left-count-home">
            <img src="worl.png" alt="Home" />
          </div>
          <div className="right-count-home">
            <h1>
              Explore the reasons behind why countless entrepreneurs have opted
              for Marketify to establish their ventures — from inception to
              going public.
            </h1>
            <div className="card-container">
              <div className="card">
                <h2 className="card-head-count">Millions</h2>
                <p>of merchants worldwide</p>
              </div>
              <div className="card">
                <h2 className="card-head-count">80+</h2>
                <p>countries represented</p>
              </div>
              <div className="card">
                <h2 className="card-head-count">10%</h2>
                <p>of total US ecommerce</p>
              </div>
              <div className="card">
                <h2 className="card-head-count">$445B</h2>
                <p>global economic activity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ecc-section">
        <h5>Discover the globe's most expansive network for commerce.</h5>
        <div className="card-container-ecc">
          <div className="card-ecc">
            <div className="ecc-logo-div">
              <FaMeta className="ecc-logo" />
            </div>
            <h4 className="ecc-card-head">Plus</h4>
            <p className="ecc-card-para">
              An ideal platform tailored for burgeoning digital brands in the
              realm of commerce.
            </p>
          </div>
          <div className="card-ecc">
            <div className="ecc-logo-div">
              <FaArrowsDownToPeople className="ecc-logo" />
            </div>
            <h4 className="ecc-card-head">Partners</h4>
            <p className="ecc-card-para">
              Share your expertise to help merchants worldwide maximize their
              market presence.
            </p>
          </div>
          <div className="card-ecc">
            <div className="ecc-logo-div">
              <FaCode className="ecc-logo" />
            </div>
            <h4 className="ecc-card-head">Developers</h4>
            <p className="ecc-card-para">
              Harness the robust capabilities of Marketify's powerful API to
              develop commerce features.
            </p>
          </div>
          <div className="card-ecc">
            <div className="ecc-logo-div">
              <FaVideo className="ecc-logo" />
            </div>
            <h4 className="ecc-card-head">Creators</h4>
            <p className="ecc-card-para">
              Transform your followers into loyal customers using specialized
              commerce tools designed for creators.
            </p>
          </div>
        </div>
      </section>
      <section className="store-way-section">
        <h4 className="store-way-heading">BUILD AN ONLINE STORE</h4>
        <h2 className="store-way-heading-2">Tailor your shop to suit you</h2>
        <img src="store.jpg" alt="image" className="store-way-image" />
        <div className="card-container-store-way">
          <div className="card-store-way">
            <h4 className="card-store-way-text">Build an online storefront</h4>
            <p className="card-store-way-para">
              Transform your concept into reality using our intuitive
              drag-and-drop store builder.
            </p>
            <a href="#">Online Store Builder →</a>
          </div>
          <div className="card-store-way">
            <h4 className="card-store-way-text">
              Shape the brand of your dreams
            </h4>
            <p className="card-store-way-para">
              Choose from a variety of customizable templates crafted by a
              community of top-tier designers.
            </p>
            <a href="#">Theme Store →</a>
          </div>
          <div className="card-store-way">
            <h4 className="card-store-way-text">
              Elevate experience with apps
            </h4>
            <p className="card-store-way-para">
              Add more features and functionality to your online store with apps
              built by trusted Shopify developers.
            </p>
            <a href="#">Marketify App Store →</a>
          </div>
        </div>
      </section>
      <section className="sell-channel-section-main">
        <div className="sell-channel-section">
          <div className="first-left-sell-channel">
            <div className="sell-channel-content">
              <h4 className="sell-channel-content-text">SALES CHANNELS</h4>
              <h2 className="sell-channel-content-para">
                Market to all purchasers, worldwide...
              </h2>
            </div>
          </div>
          <div className="second-right-sell-channel">
            <div className="sell-channel-content">
              <p>
                Reach customers globally by selling through online platforms, in
                physical locations, and leveraging a comprehensive suite of
                marketing tools, social media integrations, and diverse sales
                channels.
              </p>
            </div>
            <div className="arrow-button">
              <button className="animated-arrow">Start Selling →</button>
            </div>
          </div>
        </div>
        <div className="responsive-divs-section">
          <div className="responsive-div">
            <img src="rd-3.webp" alt="Image 1" />
          </div>
          <div className="responsive-div">
            <img src="rd-2.webp" alt="Image 2" />
          </div>
          <div className="responsive-div">
            <img src="rd-1.webp" alt="Image 3" />
          </div>
        </div>
      </section>
      <section className="point-of-sale-section">
        <div className="left-point-sale">
          <h4>POINT OF SALE</h4>
          <h2>
            Empower your retail business with a highly versatile point-of-sale
            system.
          </h2>
          <p>
            A point-of-sale solution enabling customers to shop seamlessly,
            transitioning from online browsing to the checkout line.
          </p>
          <div className="slider-arrow">
            <button className="animated-arrow-point">
              Meet Marketify POS →
            </button>
          </div>
        </div>
        <div className="right-point-sale">
          <img src="pss.webp" alt="Point of Sale" />
        </div>
      </section>
      <section className="video-home-section">
        <div className="video-div">
          <video autoPlay loop muted className="video-container-2">
            <source src="video.mp4" className="video-play" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="two-page-section-main">
        <div className="two-page-section">
          <div className="left-two-page">
            <h1 className="left-two-page-head">{contentArray[currentIndex].heading}</h1>
            <p className="left-two-page-text">{contentArray[currentIndex].paragraph}</p>
            <div className="button-both">
              <button className="left-arrow" onClick={handleLeftButtonClick}>
                &#8592;
              </button>
              <button className="right-arrow" onClick={handleRightButtonClick}>
                &#8594;
              </button>
            </div>
          </div>
          <div className="right-two-page">
            <img
            className="image-two-page"
              src={contentArray[currentIndex].imageUrl}
              alt="Right Page Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
