import React from 'react';
import { Link } from 'react-router-dom';
import AutmobilIcon from "../../assets/Auto.png";

const AutomobileProject: React.FC = () => {
  return (
    <div className="automobile-project">
      <h1>Development of a Classification Model for Temporary Signal Obstacle</h1>
      <img src={AutmobilIcon} alt="Automobile Project" />
      <p>Detailed description of the automobile project...</p>
      <h2>Project Details</h2>
      <ul>
        <li>Technology used: [List technologies]</li>
        <li>Duration: [Project duration]</li>
        <li>Role: [Your role in the project]</li>
      </ul>
      <h2>Key Achievements</h2>
      <ul>
        <li>[Achievement 1]</li>
        <li>[Achievement 2]</li>
        <li>[Achievement 3]</li>
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default AutomobileProject;