import React from 'react';
import { Link } from 'react-router-dom';
import FinanceIcon from "../../assets/Mortgage.png";

const FinanceProject: React.FC = () => {
  return (
    <div className="finance-project">
      <h1>Mortgage Prepayment Risk Analysis</h1>
      <img src={FinanceIcon} alt="Finance Project" />
      <p>Detailed description of the finance project...</p>
      <h2>Project Details</h2>
      <ul>
        <li>Technology used: [List technologies]</li>
        <li>Duration: [Project duration]</li>
        <li>Role: [Your role in the project]</li>
      </ul>
      <h2>Key Findings</h2>
      <ul>
        <li>[Finding 1]</li>
        <li>[Finding 2]</li>
        <li>[Finding 3]</li>
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default FinanceProject;