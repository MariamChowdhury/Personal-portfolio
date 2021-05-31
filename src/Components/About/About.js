import React from "react";
import "./About.css";
import img from "../images/02.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about-col">
            <img src={img} className="img-fluid" alt="" />
            <h1> About Me</h1>
            <p>
              Hi, I am Mariam. A MERN stack developer from Dhaka,Bangladesh.
            </p>
            <p>
              I love to design and code.I concentrate on writing clean and
              understandable code. Currently, I'm pursuing my undergrads in
              Information and Communication Engineering at Bangladesh University
              of Professionals (BUP). I love to work in a team.
            </p>
            <p>
              Other than coding I like walking in the rain and buying plants.
            </p>
          </div>
          <div className="col-md-6  skill-col ">
         <h3>My Key Skills:</h3>
         <div className="skills">
           <span>HTML</span>
           <span>CSS</span>
           <span>Bootstrap</span>
           <span>JavaScript(ES5 & ES6)</span>
           <span>React.js</span>
           <span>Redux</span>
           <span>Node.js</span>
           <span>Express.js</span>
           <span>MongoDB</span>
           <span>MySQL</span>
           <span>Git</span>
           <span>Material Ui</span>
           <span>NPM</span>
           <span>VS Code</span>
           <span>REST API</span>
           <span>Heroku</span>
           <span>Firebase</span>
         </div>
         </div>
        </div>
        </div>
      </div>
  );
};

export default About;
