import React from 'react';
import defaultProfilePic from '../../assets/Default-profile.jpg';
import './Myprofile.css';

const MyUserProfile = () => {
  // Dummy userData (replace this with actual data or props later)
  const userData = {
    name: 'Demo User',
    email: 'demo@example.com',
    applications: [
      {
        companyName: 'Google',
        role: 'Software Engineer',
        appliedDate: '2025-03-10T12:00:00Z',
        status: 'Applied',
        nextSteps: [
          {
            stage: 'Online Assessment',
            date: '2025-03-20T12:00:00Z',
            status: 'Upcoming',
          },
          {
            stage: 'Technical Round',
            date: '2025-03-27T12:00:00Z',
            status: 'Pending',
          },
          {
            stage: 'HR Round',
            date: '2025-04-03T12:00:00Z',
            status: 'Pending',
          }
        ]
      }
    ]
  };

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
