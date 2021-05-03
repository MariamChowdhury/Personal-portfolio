import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import img01 from "../images/project01.PNG";
import img02 from "../images/project02.PNG";
import img03 from "../images/project03.PNG";
import img04 from "../images/project04.PNG";
import img05 from "../images/project05.PNG";
import img06 from "../images/project06.PNG";
const Projects = () => {
  return (
    <div className="project-page-container">
      <div className="container">
        <div className="row py-5">
          <h2>My Projects</h2>
        </div>
        <div className="row">
          <div className="col-md-4 py-5 py-5">
            <div className="cards">
              <div className="image ">
                <img src={img01} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Cozy Tea Shop</p>
                </div>
                <div className="sub-title">
                  <p>
                    A custom made API based website from where one can add,
                    remove or buy any kind ot tea.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>React.js</span>
                    <span>Express.js</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Firebase</span>
                    <span>Heroku</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/Cozy-Tea-Shop"
                      target="_blank"
                    >
                      <GitHubIcon
                        style={{ color: "white", marginLeft: "0px" }}
                      />
                    </a>
                    <a href="https://tea-shop-9e682.web.app/" target="_blank">
                      <OpenInNewIcon
                        style={{ color: "white", marginLeft: "10px" }}
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={img02} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Soccer Teams of England</p>
                </div>
                <div className="sub-title">
                  <p>
                    A simple website where one can learn the history of any
                    soccer club of England
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>React.js</span>
                    <span>Netlify</span>
                    <span>Node.js</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/Soccer-Team"
                      target="_blank"
                    >
                      <GitHubIcon
                        style={{ color: "white", marginLeft: "0px" }}
                      />
                    </a>
                    <a
                      href="https://frosty-hypatia-8c19a3.netlify.app/"
                      target="_blank"
                    >
                      <OpenInNewIcon
                        style={{ color: "white", marginLeft: "10px" }}
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={img03} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Ride Booking App</p>
                </div>
                <div className="sub-title">
                  <p>
                    It's a ride booking app website implemented with google
                    authentication system.
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
                    >
                      <GitHubIcon
                        style={{ color: "white", marginLeft: "0px" }}
                      />
                    </a>
                    <a href="https://bd-rider-app.web.app/" target="_blank">
                      <OpenInNewIcon
                        style={{ color: "white", marginLeft: "10px" }}
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={img04} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>panda Commerce</p>
                </div>
                <div className="sub-title">
                  <p>A single page website of an E-Commerce site.</p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap5</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/panda-commerce-bootstrap"
                      target="_blank"
                    >
                      <GitHubIcon
                        style={{ color: "white", marginLeft: "0px" }}
                      />
                    </a>
                    <a
                      href="https://mariamchowdhury.github.io/panda-commerce-bootstrap/"
                      target="_blank"
                    >
                      <OpenInNewIcon
                        style={{ color: "white", marginLeft: "10px" }}
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={img05} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>CovidInfo</p>
                </div>
                <div className="sub-title">
                  <p>
                    A single page website where one can get all the latest info
                    on Covid-19 in just 30 seconds.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap5</span>
                    <span>Microsoft Azure</span>
                  </div>
                  <button>
                    <a
                      href="https://github.com/MariamChowdhury/covid-web"
                      target="_blank"
                    >
                      <GitHubIcon
                        style={{ color: "white", marginLeft: "0px" }}
                      />
                    </a>
                    <a href="https://www.covinfobd.codes/" target="_blank">
                      <OpenInNewIcon
                        style={{ color: "white", marginLeft: "10px" }}
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={img06} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>What's for dinner?</p>
                </div>
                <div className="sub-title">
                  <p>
                    A single page website that can be used as a google for
                    foods.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>ES6</span>
                    <span>Meal DB API</span>
                  </div>
                  <button>
                    {" "}
                    <a
                      href="https://github.com/MariamChowdhury/assignment05"
                      target="_blank"
                    >
                      <GitHubIcon
                        style={{ color: "white", marginLeft: "0px" }}
                      />
                    </a>
                    <a
                      href="https://mariamchowdhury.github.io/assignment05/"
                      target="_blank"
                    >
                      <OpenInNewIcon
                        style={{ color: "white", marginLeft: "10px" }}
                      />
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
