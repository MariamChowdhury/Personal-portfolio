import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import panda from '../images/panda-commerce.PNG';
import book from '../images/BookShop.PNG'
import dental from '../images/dental.PNG'
import portfolio from '../images/portfolio.PNG'
import rider from '../images/rider.PNG'
import weather from '../images/weather-app.PNG'
import dinner from '../images/whats-for-dinner.PNG'
import penguin from '../images/penguin-fashion.PNG'
import tea from '../images/tea-shop.PNG'
import rock from '../images/hard-rock.PNG'
import pin from '../images/pin=matcher.PNG'
import shopping from '../images/shopping-cart.PNG'
import finReads from '../images/finReads.PNG'
const Projects = () => {
  return (
    <div className="project-page-container">
      <div className="container">
        <div className="row py-5">
          <h2>My Projects</h2>
        </div>
        <div className="row">
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={dental} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Dental Care</p>
                </div>
                <div className="sub-title">
                  <p> MERN stack project with 2 dashboards.
                    </p>
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
                    <a href="https://github.com/MariamChowdhury/dental-care"target="_blank" rel="noreferrer">
                      <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://dental-care-d96fe.web.app/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={book} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Book Shop</p>
                </div>
                <div className="sub-title">
                  <p>
                    MERN stack project of a book shop.
                  </p>
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
                    <a href="https://github.com/MariamChowdhury/Book-Store" target="_blank" rel="noreferrer" >
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://book-shop-58860.web.app" target="_blank" rel="noreferrer" >
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
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
                    authentication system.Where user can also log in using email.
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
                    <a href="https://github.com/MariamChowdhury/Ride-Booking-App" target="_blank" rel="noreferrer">
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://bd-rider-app.web.app/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
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
                <img src={dinner} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>What's for dinner?</p>
                </div>
                <div className="sub-title">
                  <p> A simple website to select your next meal.</p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>React.js</span>
                    <span>Javascript(ES6)</span>
                    <span>REST API</span>

                  </div>
                  <button>
                    <a href="https://github.com/MariamChowdhury/Dinner-Tonight" target="_blank" rel="noreferrer" >
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://what-s-for-dinner-7383a.web.app/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={weather} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Weather App</p>
                </div>
                <div className="sub-title">
                  <p>
                    Find the weather of your city now!
                  </p>
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
                    <a href="https://github.com/MariamChowdhury/weather-app" target="_blank" rel="noreferrer" >
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/weather-app/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={panda} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Panda Commerce</p>
                </div>
                <div className="sub-title">
                  <p>
                    A simple static landing page of an E-commerce site.
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
                    <a href="https://github.com/MariamChowdhury/panda-commerce-bootstrap" target="_blank" rel="noreferrer" >
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/panda-commerce-bootstrap/" target="_blank" rel="noreferrer" >
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 py-5 py-5">
            <div className="cards">
              <div className="image ">
                <img src={pin} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>PIN Matcher</p>
                </div>
                <div className="sub-title">
                  <p>
                   Simple pin generator made with vanilla JavaScript
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript(ES6)</span>
                    <span>Bootstrap5</span>
                  </div>
                  <button>
                    <a href="https://github.com/MariamChowdhury/Pin-Matcher"target="_blank" rel="noreferrer">
                      <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/Pin-Matcher/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={penguin} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>Penguin Fashion</p>
                </div>
                <div className="sub-title">
                  <p>
                    Single page website of a Bag store.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap5</span>
                  </div>
                  <button>
                    <a href="https://github.com/MariamChowdhury/assignment02" target="_blank" rel="noreferrer" >
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/assignment02/" target="_blank" rel="noreferrer" >
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={rock} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Hard Rock Music</p>
                </div>
                <div className="sub-title">
                  <p>
                    It's music app which gives preview and lyrics of any song that is written in the search bar.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>Javascript(ES6)</span>
                    <span>REST API</span>
                  </div>
                  <button>
                    {" "}
                    <a href="https://github.com/MariamChowdhury/Hard-Rock-Music" target="_blank" rel="noreferrer">
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/Hard-Rock-Music/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 py-5 py-5">
            <div className="cards">
              <div className="image ">
                <img src={portfolio} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Portfolio</p>
                </div>
                <div className="sub-title">
                  <p>
                   Single page non-responsive portfolio website.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <button>
                    <a href="https://github.com/MariamChowdhury/assignment-01"target="_blank" rel="noreferrer">
                      <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/assignment-01/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
            <div className="cards">
              <div className="image ">
                <img src={tea} className="card-img-top" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  <p>The Tea Cozy</p>
                </div>
                <div className="sub-title">
                  <p>
                    Single page static non-responsive tea shop website.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                  <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <button>
                    <a href="https://github.com/MariamChowdhury/TeaShop" target="_blank" rel="noreferrer" >
                       <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/TeaShop/" target="_blank" rel="noreferrer" >
                      <OpenInNewIcon className='link-icon'/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5">
          <div className="cards">
              <div className="image ">
                <img src={shopping} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Shopping Cart</p>
                </div>
                <div className="sub-title">
                  <p>
                   Example of a dynamic shopping cart made with vanilla javascript.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript(ES6)</span>
                  </div>
                  <button>
                    <a href="https://github.com/MariamChowdhury/shopping-cart"target="_blank" rel="noreferrer">
                      <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/shopping-cart/index.html" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
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
                <img src={finReads} className="card-img-top" alt="" />
              </div>
              <div className="content">
                <div className="title">
                  <p>Landing Page</p>
                </div>
                <div className="sub-title">
                  <p>
                   Example of a static landing page of a company.
                  </p>
                </div>
                <div className="bottom">
                  <div className="tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                  </div>
                  <button>
                    <a href="https://github.com/MariamChowdhury/FinReads"target="_blank" rel="noreferrer">
                      <GitHubIcon className='github-icon' />
                    </a>
                    <a href="https://mariamchowdhury.github.io/FinReads/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className='link-icon'/>
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
