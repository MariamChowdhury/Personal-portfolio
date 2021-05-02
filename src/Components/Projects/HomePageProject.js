import React from 'react';
import project01 from '../images/project01.PNG'
import project05 from '../images/project05.PNG'
import project03 from '../images/project03.PNG'
import ProjectData from './ProjectData';
import { Link } from 'react-router-dom';

const HomePageProject = () => {
  const homeProject = [
    {
      name: 'Cozy Tea Shop',
      img: project01
    },
    {
      name: 'Ride Booking App',
      img: project03
    },
    {
      name: 'CovidInfo',
      img: project05
    },
  ]
  return (

    <div className='project-section ' id='project'>
      <h2>My Projects</h2>
      <div className="container">
        <div className='row'>
          {
            homeProject.map(data => <ProjectData data={data}></ProjectData>)
          }
        </div>
        <div className="row">
          <div className='mt-5 text-center'>
          <Link to="/projects"><button type="button" className="btn btn-color">
              Click to see more projects
          </button></Link>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePageProject;