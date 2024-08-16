import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AutmobilIcon from "../../assets/Auto.png";
import FinanceIcon from "../../assets/Mortgage.png";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "Development of a Classification Model for Temporary Signal Obstacle", 
    image: AutmobilIcon, 
    category: "automobile",
    description: "Detailed description of the automobile project..."
  },
  { 
    id: 2, 
    title: "Mortgage Prepayment Risk Analysis", 
    image: FinanceIcon, 
    category: "finance",
    description: "Detailed description of the finance project..."
  },
  // Add more projects as needed
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <p>Category: {project.category}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ProjectDetails;