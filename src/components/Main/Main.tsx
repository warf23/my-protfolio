import React from 'react';
import LaptopIcon from '../LaptopIcon/LaptopIcon';
import Profile from '../Profile/Profile';
import Summary from '../Summary/Summary';
import WorkExperience from '../WorkExperience/WorkExperience';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main>
      <LaptopIcon />
      <div className="intro-text">
        Hello, I am Junior Data Science, Python developer, Full Stack Developer
      </div>
      <Profile />
      <Summary />
      <WorkExperience />
    </main>
  );
};

export default Main;