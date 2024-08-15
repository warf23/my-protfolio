import React from 'react';
import './Summary.css';
const Summary: React.FC = () => {
  return (
    <section className="summary">
      <h3>Summary</h3>
      <p>Junior Data Scientist with 6 months of focused experience in machine learning, predictive modeling, and statistical analysis. Demonstrated proficiency through successful projects, such as significantly improving traffic safety by implementing advanced classification algorithms and accurately predicting mortgage prepayment risks with an 87% accuracy rate. Strong technical expertise in Python and key machine learning libraries like pandas, scikit-learn, and TensorFlow, accompanied by hands-on experience with AWS and Docker. Eager to apply data-driven solutions to enhance business workflows and decision-making processes</p>
      <button className="resume-btn">My Resume</button>
    </section>
  );
};

export default Summary;