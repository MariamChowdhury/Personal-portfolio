import React from 'react';
import Typed from "react-typed"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Header.css'
const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="main-info">
        <h5 className='header-glow'>Hi, my name is</h5>
        <h1><span className='name-border'>Mariam </span>Chowdhury</h1>
        <Typed
        className='typed-text'
        strings={["I am a Front End Developer", "I am a Programmer", "I am a Student"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <div>
          <span><a href="https://www.linkedin.com/in/mariam-chowdhury-1660a8211/" target='_blank'>
            <LinkedInIcon style={{color:'#E8E8E8'}}  />
            </a> </span>
          <span>
            <a href="https://github.com/MariamChowdhury" target='_blank'>
              <GitHubIcon style={{color:'#E8E8E8'}} />
            </a>
          </span>
        </div>
          <a href="#about" className='btn-main'>About me</a>

      </div>
     
    </div>
  );
};

export default Header;