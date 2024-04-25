import React from "react";
import "../Footer/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
const footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-container">
          <div className="column-footer-1">
          <SiCoinmarketcap className="column-footer-1-logo"/>
            <p className="column-footer-1-text">
              Marketify revolutionizes e-commerce with intuitive solutions
              tailored for businesses of all sizes. Our platform empowers
              sellers to thrive in the digital marketplace, connecting with
              customers worldwide. Experience seamless online retail with
              Marketify, your partner for success in the digital age.
            </p>
          </div>
          <div className="column-footer">
            <h3 className="footer-heading">Marketify</h3>
            <ul className="list-ul-footer">
              <li>
                <a href="#" className="footer-link-n">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Investers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Service status
                </a>
              </li>
            </ul>
          </div>
          <div className="column-footer">
            <h3 className="footer-heading">Support</h3>
            <ul className="list-ul-footer">
              <li>
                <a href="#" className="footer-link-n">
                  Merchant Support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Hire a Partner
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Marketify Community
                </a>
              </li>
            </ul>
          </div>
          <div className="column-footer">
            <h3 className="footer-heading">Developers</h3>
            <ul className="list-ul-footer">
              <li>
                <a href="#" className="footer-link-n">
                  marketify.dev
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Dev Degree
                </a>
              </li>
            </ul>
          </div>
          <div className="column-footer">
            <h3 className="footer-heading">Products</h3>
            <ul className="list-ul-footer">
              <li>
                <a href="#" className="footer-link-n">
                  Marketify Plus
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Linkpop
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Marketify for enterprise
                </a>
              </li>
            </ul>
          </div>
          <div className="column-footer">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="list-ul-footer">
              <li>
                <a href="#" className="footer-link-n">
                  Online Store Builder
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Website Builder
                </a>
              </li>
              <li>
                <a href="#" className="footer-link-n">
                  Ecommerce website
                </a>
              </li>
            </ul>
          </div>
          {/* Repeat for the remaining columns */}
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-links-bottom">
            <a href="#" className="footer-link-n">
              Terms of Service
            </a>
            <a href="#" className="footer-link-n">
              Privacy Policy
            </a>
            <a href="#" className="footer-link-n">
              Sitemap
            </a>
            <a href="#" className="footer-link-n">
              Privacy Choices
            </a>
          </div>
          <div className="social-icons">
            {/* Place your social media icons here */}
            <FaFacebook className="social-icon-footer"/>
            <FaXTwitter className="social-icon-footer"/>
            <IoLogoWhatsapp className="social-icon-footer"/>
            <FaYoutube className="social-icon-footer"/>
            <FaSquareInstagram className="social-icon-footer"/>
            <FaLinkedin className="social-icon-footer"/>
            <FaPinterest className="social-icon-footer"/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
