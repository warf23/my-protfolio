import React from 'react';
// import { Link } from 'react-router-dom';
import FinanceIcon from "../../assets/Mortgage.png";


import './Automibile.css';

interface ProjectDetails {
  technologies: string[];
  duration: string;
  roles: string[];
}


const FinanceProject: React.FC = () => { 

  const projectDetails: ProjectDetails = {
    technologies: [
      "XGBoost",
      "Python",
      "Docker",
      "Amazon AWS EC2",
      "Git/GitHub",
      "Scikit-learn",
      "Pipelines"
  ],
    duration: '3 month',
    roles: [
      "Developed a predictive model using XGBoost classifier to analyze the risk of early repayment of mortgage loans, achieving an accuracy rate of 87%.",
      "Developed and deployed a user-centric risk assessment web application on AWS EC2, using Docker for containerization, thereby improving scalability and reliability.",
      "Engaged in international collaboration, enhancing cultural understanding and teamwork to ensure project success."
    ]
  };

  // const videoSource = new CloudinaryVideo('Classification_of_road', {cloudName: 'dgv8uqpg6'});

  return (
    <div className="project">
    <h1> Analyze the risk of early repayment of mortgage loans</h1>
    
      <img src={FinanceIcon} alt="Automobile Project" className="main-image" />
    <div className="main-content">
      <p className="description">
      I developed a <span className="highlight">powerful web-based tool</span> that revolutionizes how banks and investors manage mortgage risks. This innovative application uses <span className="highlight">advanced machine learning algorithms</span> to predict when homeowners are likely to pay off their mortgages early. Why does this matter? Early payoffs, while great for homeowners, can throw a wrench in the financial plans of lenders and investors. My tool provides <span className="highlight">crucial insights</span> that help financial institutions <span className="highlight">make smarter lending decisions</span> and allows investors to <span className="highlight">optimize their mortgage-backed securities portfolios</span>. By <span className="highlight">transforming complex financial data into easy-to-understand risk assessments</span>, my project bridges the gap between intricate financial models and practical, real-world decision-making. The <span className="highlight">user-friendly interface</span> makes it accessible not just to financial experts, but also to homebuyers interested in understanding their mortgage options better. From <span className="highlight">data cleaning and feature engineering to model training and deployment</span>, I built a <span className="highlight">comprehensive pipeline</span> that turns raw mortgage data into <span className="highlight">valuable financial intelligence</span>.      </p>
    </div>
    <div className="button-container">
  <button 
    className="github-button"
    onClick={() => window.open('https://github.com/warf23/Mortgage-Prepayment-Risk-Analysis-Prediction', '_blank')}
  >
    For more detail, check my repo in GitHub
  </button>
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
      
    </div>

    <div className="video-section">
      <div className="video-container">
     
      </div>
    </div> 
  </div>
    
  )

}

export default FinanceProject;