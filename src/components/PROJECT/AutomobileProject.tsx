import React from 'react';
import { CloudinaryVideo } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import AutmobilIcon from "../../assets/Auto.png";
import Solution from "../../assets/Signal_Project/sOLUTION.png";
import OBSTACLES from "../../assets/Signal_Project/OBSTACLES.png";
import EnsembleLearning from "../../assets/Signal_Project/ensembles_learning.png";

import './Automibile.css';

interface ProjectDetails {
  technologies: string[];
  duration: string;
  roles: string[];
}

const AutomobileProject: React.FC = () => {
  const projectDetails: ProjectDetails = {
    technologies: ['Python', 'time series ', 'data visualization ', 'Signal Processing ', 'Predictive Modeling', 'Python', 'Python', 'Python'],
    duration: '6 month',
    roles: [
      'Implemented data preprocessing techniques to clean and transform raw data, ensuring data quality for analysis and predictive modeling',
      'Developed and implemented predictive models using advanced classification algorithms to accurately classify obstacles on road surfaces, resulting in improved obstacle detection and enhanced traffic safety.',
      'Optimized predictive models and conducted comprehensive evaluations using various performance metrics, enhancing model accuracy and robustness in diverse road conditions.',
      'Deployed models in Glyphwork NCode software, streamlining model integration and operations while documenting essential code and workflows. Partnered with the Signal Processing team to align models with project goals, increasing project efficiency by 20%.'
    ]
  };

  const videoSource = new CloudinaryVideo('Classification_of_road', {cloudName: 'dgv8uqpg6'});

  return (
    <div className="project">
      <h1>Development of a Classification Model for Temporary Signal Obstacle</h1>
      
        <img src={AutmobilIcon} alt="Automobile Project" className="main-image" />
      <div className="main-content">
        <p className="description">
          Imagine you are driving in a remote area or urban environment where GPS data is inaccurate or unavailable. This poses significant risks to both human safety and vehicle integrity. In such scenarios, drivers need an alternative system to identify and classify obstacles on the road. The challenge is to create a model that can <span className="highlight">classify road obstacles based on temporary signals</span>, ensuring <span className="highlight">safe navigation</span> without relying on GPS.
        </p>
      </div>

      <div className="solution-section">
        <img src={Solution} alt="Solution" className="solution-image" />
      </div>

      <div className="obstacles-section">
        <h2>Types of Obstacles in Road</h2>
        <img src={OBSTACLES} alt="Obstacles" className="obstacles-image" />
      </div>

      <div className="project-details">
        <h2>Project Details</h2>
        <div className="technology-used">
          <h3>Technology used :</h3>
          <ul>
            {projectDetails.technologies.map((tech, index) => (
              <li key={index} className="tools">{tech}</li>
            ))}
          </ul>
        </div>
        <div className="duration">
          <h3>Duration :</h3>
          <p>{projectDetails.duration}</p>
        </div>
        <div className="role">
          <h3>Role</h3>
          <ul>
            {projectDetails.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="key-achievements">
        <h2>Key Achievements</h2>
        <img src={EnsembleLearning} alt="Ensemble Learning" className="ensemble-learning-image" />
      </div>

      <div className="video-section">
        <div className="video-container">
          <AdvancedVideo cldVid={videoSource} controls />
        </div>
      </div>
    </div>
  );
};

export default AutomobileProject;