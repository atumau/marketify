import React from "react";
import { useState } from "react";
import "../Navbar/navbar.css";
import { FaHourglassStart } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { SiGoogletagmanager } from "react-icons/si";

const Navbar = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <SiCoinmarketcap className="navbar-logo" />
      </div>
      <div className="navbar__center">
        <div className="navbar__dropdown">
          <button
            onClick={toggleDropdown1}
            className="navbar__dropdown__toggle"
          >
            SOLUTIONS
          </button>
          {showDropdown1 && (
            <div className="navbar__dropdown__content">
              <div className="start-div">
                <div className="start-logo">
                  <h3 className="start-div-heading">START</h3>
                  <div className="logo-back">
                    <FaHourglassStart className="start-div-logo" />
                  </div>
                </div>
                <div className="start-div-option">
                  <a href="#">Start your Business</a>
                  <p className="start-div-text">Build your brand</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Create your Website</a>
                  <p className="start-div-text">Online store editor</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Customize your store</a>
                  <p className="start-div-text">Store themes</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Find Business apps</a>
                  <p className="start-div-text">Shopify app store</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Own Your site Domain</a>
                  <p className="start-div-text">Domains & hosting</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Explore Free Business tools</a>
                  <p className="start-div-text">Tools to run your business</p>
                </div>
              </div>

              <div className="start-div">
                <div className="start-logo">
                  <h3 className="start-div-heading">SELL</h3>
                  <div className="logo-back">
                    <MdSell className="start-div-logo" />
                  </div>
                </div>
                <div className="start-div-option">
                  <a href="#">Sell Your Products</a>
                  <p className="start-div-text">Sell online or in person</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Check Out Customers</a>
                  <p className="start-div-text">World-class checkout</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Sell Online</a>
                  <p className="start-div-text">Grow your business online</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Sell Across Channels</a>
                  <p className="start-div-text">
                    Reach millions of shoppers and boost sales
                  </p>
                </div>
                <div className="start-div-option">
                  <a href="#">Sell in Person</a>
                  <p className="start-div-text">Point of Sale (POS)</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Sell Globally</a>
                  <p className="start-div-text">International sales</p>
                </div>
              </div>

              <div className="start-div">
                <div className="start-logo">
                  <h3 className="start-div-heading">MARKET</h3>
                  <div className="logo-back">
                    <SiCoinmarketcap className="start-div-logo" />
                  </div>
                </div>
                <div className="start-div-option">
                  <a href="#">Market your business</a>
                  <p className="start-div-text">Reach & retain customers</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Market across social</a>
                  <p className="start-div-text">Social media integrations</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Chat with customers</a>
                  <p className="start-div-text">Shopify Inbox</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Nurture customers</a>
                  <p className="start-div-text">Shopify Email</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Know your audience</a>
                  <p className="start-div-text">Gain customer insights</p>
                </div>
              </div>

              <div className="start-div">
                <div className="start-logo">
                  <h3 className="start-div-heading">MANAGE</h3>
                  <div className="logo-back">
                    <SiGoogletagmanager className="start-div-logo" />
                  </div>
                </div>
                <div className="start-div-option">
                  <a href="#">Manage your business</a>
                  <p className="start-div-text">
                    Track sales, orders & analytics
                  </p>
                </div>
                <div className="start-div-option">
                  <a href="#">Measure your performance</a>
                  <p className="start-div-text">Analytics and Reporting</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Ship orders faster</a>
                  <p className="start-div-text">Shopify Shipping</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Manage your stock & orders</a>
                  <p className="start-div-text">Inventory & order management</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Outsource fulfillment & returns</a>
                  <p className="start-div-text">Shopify Fulfillment Network</p>
                </div>
                <div className="start-div-option">
                  <a href="#">Get paid faster</a>
                  <p className="start-div-text">Shopify Balance</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <a href="#" className="navbar__link">
          PRICING
        </a>

        <div className="navbar__dropdown">
          <button
            onClick={toggleDropdown2}
            className="navbar__dropdown__toggle"
          >
            RESOURCES
          </button>
          {showDropdown2 && (
            <div className="navbar__dropdown__content">
              <a href="#">Option A</a>
              <a href="#">Option B</a>
              <a href="#">Option C</a>
            </div>
          )}
        </div>
        <div className="navbar__dropdown">
          <button
            onClick={toggleDropdown3}
            className="navbar__dropdown__toggle"
          >
            WHAT'S NEW
          </button>
          {showDropdown3 && (
            <div className="navbar__dropdown__content">
              <a href="#">Option X</a>
              <a href="#">Option Y</a>
              <a href="#">Option Z</a>
            </div>
          )}
        </div>
      </div>
      <div className="navbar__right">
        <a href="#" className="navbar__link">
          LOGIN
        </a>
        <button className="navbar__button">START FREE TRIAL</button>
      </div>
    </nav>
  );
};

export default Navbar;
