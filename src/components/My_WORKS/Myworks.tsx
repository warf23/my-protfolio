import React, { useState } from 'react';
import './MyWorks.css';
import AutmobilIcon from "../../assets/Auto.png";
import FinanceIcon from "../../assets/Mortgage.png";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  { id: 1, title: "Development of a Classification Model for Temporary Signal Obstacle", image: AutmobilIcon, category: "automobile" },
  { id: 2, title: "Mortgage Prepayment Risk Analysis", image: FinanceIcon, category: "finance" },
  // Add more projects as needed
];

const MyWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "automobile", "finance"]; // Add more categories as needed

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="my-works">
      <h1>My WORKS</h1>
      <div className="category-filters">
        {categories.map(category => (
          <button 
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;