import React from 'react';
import Particles from 'react-particles-js';
import HomePageBlog from '../Blog/HomePageBlog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePageProject from '../Projects/HomePageProject';

const Home = () => {
  return (
    <div>
        <Particles 
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#E8E8E8"
            }
          }
        }
      }} />
     
      <Header />
    <HomePageProject />
    <HomePageBlog />
    <Footer />
    </div>
  );
};

export default Home;