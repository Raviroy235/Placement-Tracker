import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import defaultProfilePic from '../../assets/Default-profile.jpg';
import './Myprofile.css';

const MyUserProfile = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={defaultProfilePic} alt="Profile" className="profile-picture" />
          <h2>My Profile</h2>
        </div>
        <div className="profile-info">
          <div className="info-item">
            <label>Name:</label>
            <p>{userData.name || 'Please sign up to view profile'}</p>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <p>{userData.email || 'Please sign up to view profile'}</p>
          </div>
        </div>

        <div className="applications-section">
          <h3>My Applications</h3>
          {userData.applications && userData.applications.length > 0 ? (
            <div className="applications-list">
              {userData.applications.map((app, index) => (
                <div key={index} className="application-card">
                  <h4>{app.companyName}</h4>
                  <p><strong>Role:</strong> {app.role}</p>
                  <p><strong>Applied Date:</strong> {new Date(app.appliedDate).toLocaleDateString()}</p>
                  <p><strong>Status:</strong> {app.status}</p>
                  <div className="interview-rounds">
                    <h5>Interview Process</h5>
                    {app.nextSteps.map((step, idx) => (
                      <div key={idx} className={`round ${step.status.toLowerCase()}`}>
                        <span>{step.stage}</span>
                        <span>{new Date(step.date).toLocaleDateString()}</span>
                        <span>{step.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-applications">No applications yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyUserProfile;
