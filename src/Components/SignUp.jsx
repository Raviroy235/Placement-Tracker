import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessage = '';

    if (!/^[a-zA-Z\s]{6,}$/.test(formData.name)) {
      isValid = false;
      errorMessage += "Name must contain only alphabets and be at least 6 characters long.\n";
    }

    if (formData.password.length < 6) {
      isValid = false;
      errorMessage += "Password must be at least 6 characters long.\n";
    }

    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      errorMessage += "Passwords do not match.\n";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      isValid = false;
      errorMessage += "E-mail must follow the standard format (name@domain.com).\n";
    }

    return { isValid, errorMessage };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errorMessage } = validateForm();

    if (!isValid) {
      setError(errorMessage);
      return;
    }

    const onlineAssessmentDate = new Date('2025-03-20');
    const technicalRoundDate = new Date('2025-03-27');
    const hrRoundDate = new Date('2025-04-03');
    setError('');
    setUserData({
      name: formData.name,
      email: formData.email,
      isAuthenticated: true,
      applications: [],
      profile: {
        college: '',
        degree: '',
        graduationYear: '',
        skills: [],
        experience: []
      },
      preferences: {
        jobType: [],
        location: [],
        salary: ''
      },
      notifications: [],
      assessmentSchedule: [
        {
          stage: 'Online Assessment',
          date: onlineAssessmentDate.toLocaleDateString(),
          status: 'Scheduled'
        },
        {
          stage: 'Technical Round',
          date: technicalRoundDate.toLocaleDateString(),
          status: 'Pending'
        },
        {
          stage: 'HR Round',
          date: hrRoundDate.toLocaleDateString(),
          status: 'Pending'
        }
      ]
    });

    alert("Registration successful!");
    navigate('/myprofile');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        {error && (
          <div className="error-message">
            {error.split('\n').map((err, i) => 
              err ? <p key={i}>{err}</p> : null
            )}
          </div>
        )}
        
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
