import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import panda from "../images/panda-commerce.PNG";
import book from "../images/BookShop.PNG";
import dental from "../images/dental.PNG";
import rider from "../images/rider.PNG";
import weather from "../images/weather-app.PNG";
import dinner from "../images/whats-for-dinner.PNG";
import tea from "../images/tea-shop.PNG";
import tailwind from "../images/tailwind.PNG";
const Projects = () => {
  return (
    <div className="project-page-container">
      <div className="container">
        <div className="row py-5">
          <h2>My Projects</h2>
        </div>
        <div className="row">
          <div className="col-md-6 py-5 ">
            <div className="project-cards">
              <div className="image ">
                <img src={dental} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Dental Care</p>
                </div>
                <div className="sub-title">
                  <p> MERN stack project with 2 dashboards.</p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>React.js</span>
                    <span>Express.js</span>
                    <span>Node.js</span>
                    <span>MongoDb</span>
                    <span>Firebase</span>
                    <span>Heroku</span>
                    <span>Material UI</span>
                    <span>Express-Fileupload</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/dental-care"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://dental-care-d96fe.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="project-cards">
              <div className="image ">
                <img src={book} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Book Shop</p>
                </div>
                <div className="sub-title">
                  <p>MERN stack project of a book shop.</p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>React.js</span>
                    <span>Express.js</span>
                    <span>Node.js</span>
                    <span>MongoDb</span>
                    <span>Firebase</span>
                    <span>Heroku</span>
                    <span>Material UI</span>
                    <span>Stripe.js</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/Book-Store"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://book-shop-58860.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="project-cards">
              <div className="image ">
                <img src={rider} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Ride Booking App</p>
                </div>
                <div className="sub-title">
                  <p>
                    A ride booking app website implemented with google
                    authentication system.Where user can also log in using
                    email.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Netlify</span>
                    <span>Firebase</span>
                  </div>
                  <button>
                    {" "}
                    <a
                      href="https://github.com/MariamChowdhury/Ride-Booking-App"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://bd-rider-app.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="project-cards">
              <div className="image ">
                <img src={dinner} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>What's for dinner?</p>
                </div>
                <div className="sub-title">
                  <p>
                    {" "}
                    A simple website to select your next meal.It can be used as
                    a Google for recipes!
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>React.js</span>
                    <span>Javascript(ES6)</span>
                    <span>REST API</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/Dinner-Tonight"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://what-s-for-dinner-7383a.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 py-5">
            <div className="project-cards">
              <div className="image ">
                <img src={weather} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Weather App</p>
                </div>
                <div className="sub-title">
                  <p>Find the weather of your city now!</p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap5</span>
                    <span>Javascript(ES6)</span>
                    <span>REST API</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/weather-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://mariamchowdhury.github.io/weather-app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="project-cards">
              <div className="image ">
                <img src={panda} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Panda Commerce</p>
                </div>
                <div className="sub-title">
                  <p>
                    A simple static landing page of an E-commerce site made with
                    basic HTML, CSS and Bootstrap.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap5</span>
                  </div>
                  <button>
                    {" "}
                    <a
                      href="https://github.com/MariamChowdhury/panda-commerce-bootstrap"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://mariamchowdhury.github.io/panda-commerce-bootstrap/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="project-cards">
              <div className="image ">
                <img src={tailwind} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Online news portal</p>
                </div>
                <div className="sub-title">
                  <p>
                    Single page news portal website made with tailwind css where
                    one can find the hourly update of what's happening around
                    the world.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML</span>
                    <span>Tailwind CSS</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/news-portal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://news-b7c71.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5">
            <div className="project-cards">
              <div className="image ">
                <img src={tea} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>The Tea Cozy</p>
                </div>
                <div className="sub-title">
                  <p>
                    Single page static non-responsive tea shop website made
                    without any CSS frameworks.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/TeaShop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                    <a
                      href="https://mariamchowdhury.github.io/TeaShop/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon className="link-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
