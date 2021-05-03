import React from 'react';
import ProjectData from './ProjectData';
import { Link } from 'react-router-dom';

const HomePageProject = () => {
  return (

    <div className='project-section ' id='project'>
      <h2>My Projects</h2>
      <ProjectData />
        <div className="row">
          <div className='mt-5 text-center'>
          <Link to="/projects"><button type="button" className="btn btn-color">
              Click to see more projects
          </button></Link>
            
          </div>
        </div>
      </div>

  );
};

export default HomePageProject;