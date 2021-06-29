import React from "react";
import HomePageBlog from "../Blog/HomePageBlog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePageProject from "../Projects/HomePageProject";

const Home = () => {
  return (
    <div>
      <Header />
      <HomePageProject />
      <HomePageBlog />
      <Footer />
    </div>
  );
};

export default Home;
