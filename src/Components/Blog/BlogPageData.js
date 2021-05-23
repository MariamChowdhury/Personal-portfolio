import React from 'react';
import img02 from "../images/blog02.jpeg";
import BlogPage from './BlogPage';
const BlogPageData = () => {
  const data = [
    {
      name: "Understanding some basic methods of JavaScript",
      img: img02,
      url:'https://mariamchowdhury.medium.com/understanding-the-basic-methods-of-javascript-500b8d2cc607',
      title:'JavaScript is a light weighted, interpreted, a compiled programming language that...'
    },
    {
      name: "Beginners Guide on How React.js Works",
      img: img02,
      url:'https://medium.com/geekculture/beginners-guide-on-how-react-js-works-22ee2733edd1',
      title:'React is known as javascript’s library for user interfaces. The point to be noted here is that react is a “library,” not a...'
    },
    {
      name: "Top 10 JavaScript interview questions",
      img: img02,
      url:'https://mariamchowdhury.medium.com/top-10-javascript-interview-questions-aea647ef1e54',
      title:'This article will discuss the top 10 questions that every js developer needs to know to excel in any interview.'
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