import React from 'react';
import profilePic from '../../assets/profile_image/me.png';
import './Profile.css';
const Profile: React.FC = () => {
  return (
    <section className="profile">
      <div className="profile-info">
        <h2>AGRAT MOHAMMED</h2>
        <p>Junior Data Science / Python developer</p>
      </div>
      <div className="profile-image">
        <img src={profilePic} alt="Agrat Mohammed" />
      </div>
    </section>
  );
};

export default Profile;