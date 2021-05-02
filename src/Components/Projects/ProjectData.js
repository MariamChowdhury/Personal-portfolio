import React from "react";
import "./Projects.css";
const ProjectData = ({ data }) => {

  return (
    <div className="col-md-4 py-3">
      <div className="cards">
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
            <p> technology used:</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectData;
