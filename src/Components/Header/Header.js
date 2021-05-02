import React from 'react';
import Typed from "react-typed"
import './Header.css'
const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="main-info">
        <h5>Hi, my name is</h5>
        <h1><span className='name-border'>Mariam </span>Chowdhury</h1>
        <Typed
        className='typed-text'
        strings={["I am a Front End Developer", "I am a Programmer", "I am a Student"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
          <a href="#about" className='btn-main'>About me</a>

      </div>
     
    </div>
  );
};

export default Header;