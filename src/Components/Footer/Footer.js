import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container footer-text">
        <h5>What's next?</h5>
        <h2>Get In Touch</h2>
        <p>
          I'd Love to hear from you . Whether you have a question or just want
          to say hi, feel free to drop a message. I'll try my best to get back
          to you!
        </p>
        <Link to="/contact"><button type="button" className="btn btn-color">
             Say Hi!
          </button></Link>
      </div>
    </div>
  );
};

export default Footer;
