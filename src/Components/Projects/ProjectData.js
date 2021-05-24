import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import dental from '../images/dental.PNG'
import rider from '../images/rider.PNG'
import book from '../images/BookShop.PNG'
import "./Projects.css";
const ProjectData = () => {
  return (
    <div className="container">
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
      </div>
      
      
      
  );
};

export default ProjectData;
