import React from 'react';
import './Blog.css'
const BlogCard = ({data}) => {
  console.log(data);
  return (
    <div className='col-md-4 py-3'>
      <div className="blog-cards">
      <div className="image ">
          <img src={data.img} className="card-img-top" alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h5>{data.name}</h5>
          </div>
          <div className="sub-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            neque.
          </div>
          <div className="bottom">
           <a href={data.url} target='_blank'><button>Read more</button></a>
          </div>
        </div>
</div>
      
    </div>
  );
};

export default BlogCard;