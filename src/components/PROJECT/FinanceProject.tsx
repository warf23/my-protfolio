import React from 'react';
import { Link } from 'react-router-dom';
import FinanceIcon from "../../assets/Mortgage.png";


import './Automibile.css';

interface ProjectDetails {
  technologies: string[];
  duration: string;
  roles: string[];
}


const FinanceProject: React.FC = () => { 

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

  // const videoSource = new CloudinaryVideo('Classification_of_road', {cloudName: 'dgv8uqpg6'});

  return (
    <div className="project">
    <h1>Development of a Classification Model for Temporary Signal Obstacle</h1>
    
      <img src={FinanceIcon} alt="Automobile Project" className="main-image" />
    <div className="main-content">
      <p className="description">
      I developed a <span className="highlight">powerful web-based tool</span> that revolutionizes how banks and investors manage mortgage risks. This innovative application uses <span className="highlight">advanced machine learning algorithms</span> to predict when homeowners are likely to pay off their mortgages early. Why does this matter? Early payoffs, while great for homeowners, can throw a wrench in the financial plans of lenders and investors. My tool provides <span className="highlight">crucial insights</span> that help financial institutions <span className="highlight">make smarter lending decisions</span> and allows investors to <span className="highlight">optimize their mortgage-backed securities portfolios</span>. By <span className="highlight">transforming complex financial data into easy-to-understand risk assessments</span>, my project bridges the gap between intricate financial models and practical, real-world decision-making. The <span className="highlight">user-friendly interface</span> makes it accessible not just to financial experts, but also to homebuyers interested in understanding their mortgage options better. From <span className="highlight">data cleaning and feature engineering to model training and deployment</span>, I built a <span className="highlight">comprehensive pipeline</span> that turns raw mortgage data into <span className="highlight">valuable financial intelligence</span>.      </p>
    </div>
    <div className="button-container">
  <button 
    className="github-button"
    onClick={() => window.open('https://github.com/yourusername/your-repo', '_blank')}
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