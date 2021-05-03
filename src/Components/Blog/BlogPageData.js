import React from 'react';
import img01 from "../images/blog01.PNG";
import img02 from "../images/blog02.PNG";
import img03 from "../images/blog03.PNG";
import BlogPage from './BlogPage';
const BlogPageData = () => {
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
    <div className='blog-container'>
      <div className="container">
        <div className="row">
          {
            data.map(data => <BlogPage data={data}></BlogPage>)
          }
        </div>
      </div>
    </div>
  );
};

export default BlogPageData;