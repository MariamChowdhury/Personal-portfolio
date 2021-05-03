import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import project01 from "../images/project01.PNG";
import project05 from "../images/project05.PNG";
import project03 from "../images/project03.PNG";
import "./Projects.css";
const ProjectData = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 py-3">
        <div className="cards">
        <div className="image ">
          <img src={project01} className="card-img-top" alt="" />
        </div>

        <div className="content">
          <div className="title">
            <p>Cozy Tea Shop</p>
          </div>
          <div className="sub-title">
            <p>A custom made API based website from where one can add, remove or buy any kind ot tea.</p>
          </div>
          <div className="bottom">
            <div className='tech'>
              <span>React.js</span>
              <span>Express.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Firebase</span>
              <span>Heroku</span>
            </div>
            <button>
            <a href="https://github.com/MariamChowdhury/Cozy-Tea-Shop" target='_blank'>
                    <GitHubIcon style={{color:'white',marginLeft:'0px'}} />
                    </a>
                    <a href="https://tea-shop-9e682.web.app/" target='_blank'>
                   <OpenInNewIcon style={{color:'white',marginLeft:'10px'}} />
                    </a>
            </button>
          </div>
        </div>
      </div>

        </div>
        <div className="col-md-4 py-3">
        <div className="cards">
        <div className="image ">
          <img src={project05} className="card-img-top" alt="" />
        </div>

        <div className="content">
          <div className="title">
            <p>Ride Booking App</p>
          </div>
          <div className="sub-title">
            <p>It's a ride booking app website implemented with google authentication system.</p>
          </div>
          <div className="bottom">
            <div className='tech'>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Netlify</span>
              <span>Firebase</span>
            </div>
            <button>
            <a href="https://github.com/MariamChowdhury/Ride-Booking-App" target='_blank'>
                    <GitHubIcon style={{color:'white',marginLeft:'0px'}} />
                    </a>
                    <a href="https://bd-rider-app.web.app/" target='_blank'>
                   <OpenInNewIcon style={{color:'white',marginLeft:'10px'}} />
                    </a>
            </button>
          </div>
        </div>
      </div>
      
        </div>
        <div className="col-md-4 py-3">
        <div className="cards">
        <div className="image ">
          <img src={project03} className="card-img-top" alt="" />
        </div>

        <div className="content">
          <div className="title">
            <p>CovidInfo</p>
          </div>
          <div className="sub-title">
            <p>A single page website where one can get all the latest info on Covid-19 in just 30 seconds.</p>
          </div>
          <div className="bottom">
            <div className='tech'>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap5</span>
              <span>Microsoft Azure</span>
            </div>
            <button>
            <a href="https://github.com/MariamChowdhury/covid-web" target='_blank'>
                    <GitHubIcon style={{color:'white',marginLeft:'0px'}} />
                    </a>
                    <a href="https://www.covinfobd.codes/" target='_blank'>
                   <OpenInNewIcon style={{color:'white',marginLeft:'10px'}} />
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
