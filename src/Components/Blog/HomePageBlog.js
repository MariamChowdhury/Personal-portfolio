import React from "react";
import "./Blog.css";
import img01 from "../images/blog01.PNG";
import img02 from "../images/blog02.PNG";
import img03 from "../images/blog03.PNG";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import BlogPage from "./BlogPage";
const HomePageBlog = () => {
  const data = [
    {
      name: "Blog 01",
      img: img01,
      url:'https://mariamchowdhury.medium.com/understanding-web-development-edfc9d3328c3'
    },
    {
      name: "Blog 02",
      img: img02,
      url:'https://mariamchowdhury.medium.com/blog-02-fd032041adef'
    },
    {
      name: "Blog 03",
      img: img03,
      url:'https://mariamchowdhury.medium.com/blog-03-5a0ddfa0f0d5'
    },
  ];
  return (
  <div className="home-blog-container">
      <h2>My Blogs</h2>
      <div className="container">
        <div className='row'>
          {
            data.map(data => <BlogCard data={data}></BlogCard>)
          }
        </div>
        <div className="row">
          <div className='mt-5 text-center'>
          <Link to="/blogs"><button type="button" className="btn btn-color">
              Click to see more blogs
          </button></Link>
            
          </div>
        </div>
      </div>
  </div>
  );
};

export default HomePageBlog;
