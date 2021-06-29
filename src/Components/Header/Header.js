import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Typed from "react-typed";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h5 className="header-glow">Hi, my name is</h5>
        <h1>
          <span className="name-border">Mariam </span>Chowdhury
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "I am a Front End Developer",
            "I am a Programmer",
            "I am a Student",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div>
          <span>
            <a
              href="https://www.linkedin.com/in/mariam-chowdhury/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                style={{ color: "#e8e8e8" }}
                className="mx-2 mt-3"
              />
            </a>
            <a
              href="https://github.com/MariamChowdhury"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ color: "#e8e8e8" }} className="mx-2 mt-3" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100015189241148"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                style={{ color: "#e8e8e8" }}
                className="mx-2 mt-3"
              />
            </a>

            <a
              href="https://www.instagram.com/mint___lemon___ade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                style={{ color: "#e8e8e8" }}
                className="mx-2 mt-3"
              />
            </a>
          </span>
        </div>
        <a href="/about" className="btn-main">
          About me
        </a>
      </div>
    </div>
  );
};

export default Header;
