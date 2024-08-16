import React from 'react';
import './LaptopIcon.css';
// import ThreeScene from './ThreeScene';
import LaptopICONn from '../../assets/laptop_image/Responsive Device.png';
const LaptopIcon: React.FC = () => {
  return (
    <div className="laptop-icon">
      <img src={LaptopICONn} alt="laptop icon" className="laptop-icon" />
    </div>
  );
};

export default LaptopIcon;
