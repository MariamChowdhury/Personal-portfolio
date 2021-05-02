import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-color fixed-top">
        <div className="container-fluid">
          <a class="navbar-brand" href="/home">
            Mariam Chowdhury
          </a>
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto my-2 mb-lg-0">
              <li class="nav-item  active  ">
                <a class="nav-link" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/blog">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#project">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a href="#">
                  <button type="button" className="btn btn-color">
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
