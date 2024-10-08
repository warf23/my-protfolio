import React from 'react';
import './WorkExperience.css';
import CapgeminiICON from '../../assets/capgemini.png';
import TechnocolabsICON from '../../assets/Technocolabs.png';
import Mirrati from '../../assets/miratti 1.png';


interface WorkExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  icon: string;
  projectLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    company: "Capgemini Engineering",
    position: "Data & ML Engineer Intern",
    startDate: "Mar 2024",
    endDate: "Aug 2024",
    description: "Development of a Classification Model for Temporary Signal Obstacles",
    icon: CapgeminiICON,
    projectLink: "#capgemini-project" // Use a hash to link to a section on the same page
  },
  {
    company: "Technocolabs Software",
    position: "Data Scientist Intern",
    startDate: "Jul 2023",
    endDate: "Sep 2023",
    description: "Mortgage Prepayment Risk Analysis",
    icon: TechnocolabsICON,
    projectLink: "#capgemini-project" // Use a hash to link to a section on the same page
  },
  {
    company: "Capgemini Engineering",
    position: "Front-End Developer Intern ",
    startDate: "Aug 2022",
    endDate: "Sep 2022",
    description: "create a robust communication and networking platform for a business community",
    icon: Mirrati,
    projectLink: "#capgemini-project" // Use a hash to link to a section on the same page
  },
  
  // Add more work experience items here
];

const WorkExperience: React.FC = () => {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <ul className="experience-list">
        {workExperienceData.map((item, index) => (
          <li key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="company">{item.company}</h3>
              <div className="date-icon-wrapper">
                <span className="date">{item.startDate} - {item.endDate}</span>
                <img src={item.icon} alt={`${item.company} icon`} className="company-icon" />
              </div>
            </div>
            <p className="position">{item.position}</p>
            <p className="description">
              {item.description}
              {item.projectLink && (
                <> [<a href={item.projectLink} className="project-link">for more details...</a>]</>
              )}
            </p>
          </li>
        ))}
      </ul>
      
      
    </section>
  );
};

export default WorkExperience;