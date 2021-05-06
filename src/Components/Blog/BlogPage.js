import React from 'react';

const BlogPage = ({data}) => {
  return (
      <div className='col-md-4 py-3 mb-5'>
      <div className="cards">
      <div className="image ">
          <img src={data.img} className="card-img-top" alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h5>{data.name}</h5>
          </div>
          <div className="sub-title">
            {data.title}
          </div>
          <div className="bottom">
           <a href={data.url} target='_blank'><button>Read more</button></a>
          </div>
        </div>
</div>
      
    </div>
  );
};

export default BlogPage;