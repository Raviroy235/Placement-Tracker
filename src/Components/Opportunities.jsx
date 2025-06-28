import React, { useState } from "react";
import "./Opportunities.css";

import microsoftLogo from '../assets/microsoft.png';
import googleLogo from '../assets/google.png';
import amazonLogo from '../assets/amazon.png';
import ibmLogo from '../assets/ibm.png';
import infosysLogo from '../assets/infosys.png';
import flipkartLogo from '../assets/flipkart.png';


const Opportunities = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [applicationData, setApplicationData] = useState({
    role: "",
    resume: null,
  });

  const companies = [
    { id: 1, name: "Microsoft", logo: microsoftLogo, location: "Bangalore, Hyderabad, Noida", roles: ["Software Engineer", "Data Scientist", "Cloud Solutions Architect"], skills: ["C#", ".NET", "Azure", "Python", "Machine Learning"], package: "15 - 45 LPA", category: "tech" },
    { id: 2, name: "Google", logo: googleLogo, location: "Bangalore, Hyderabad", roles: ["Software Developer", "ML Engineer", "Product Manager"], skills: ["Java", "Python", "AI/ML", "Algorithms", "System Design"], package: "18 - 50 LPA", category: "tech" },
    { id: 3, name: "Amazon", logo: amazonLogo, location: "Bangalore, Hyderabad, Chennai", roles: ["SDE", "DevOps Engineer", "Solutions Architect"], skills: ["Java", "AWS", "Distributed Systems", "Python"], package: "16 - 45 LPA", category: "tech" },
    { id: 4, name: "IBM", logo: ibmLogo, location: "Bangalore, Pune, Hyderabad", roles: ["Software Engineer", "Cloud Engineer", "Research Scientist"], skills: ["Java", "Cloud Computing", "AI", "Quantum Computing"], package: "12 - 35 LPA", category: "tech" },
    { id: 5, name: "Infosys", logo: infosysLogo, location: "Pan India", roles: ["Systems Engineer", "Technical Analyst", "Project Engineer"], skills: ["Java", "Python", "Full Stack Development", "SQL"], package: "4.5 - 15 LPA", category: "service" },
    { id: 6, name: "Flipkart", logo: flipkartLogo, location: "Bangalore", roles: ["SDE", "Data Engineer", "Product Manager"], skills: ["Java", "Python", "Big Data", "Analytics"], package: "15 - 40 LPA", category: "product" }
  ];

  const tabs = [
    { id: "all", label: "All Companies" },
    { id: "tech", label: "Tech Giants" },
    { id: "service", label: "Service Based" },
    { id: "product", label: "Product Based" },
  ];

  const filteredCompanies = activeTab === "all" ? companies : companies.filter((company) => company.category === activeTab);

  const handleApply = (company) => {
    // Placeholder check (replace with actual auth logic)
    const isAuthenticated = true;

    if (!isAuthenticated) {
      alert("Please sign up first to apply for jobs");
      return;
    }

    setSelectedCompany(company);
    setShowApplicationForm(true);
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();

    if (!applicationData.role || !applicationData.resume) {
      alert("Please select a role and upload your resume before submitting.");
      return;
    }

    // Simulate application submission (replace with backend integration)
    const applicationDetails = {
      companyName: selectedCompany.name,
      role: applicationData.role,
      appliedDate: new Date().toISOString(),
      status: "Applied",
      nextSteps: [
        {
          stage: "Online Assessment",
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          status: "Upcoming",
        },
      ],
    };

    console.log("Application submitted:", applicationDetails);

    setShowApplicationForm(false);
    setApplicationData({ role: "", resume: null });

    alert("Application submitted successfully! You will receive further details via email.");
  };

  return (
    <div className="opportunities-container">
      <h1>Career Opportunities</h1>

      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab.id} className={`tab-button ${activeTab === tab.id ? "active" : ""}`} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="companies-grid">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="company-card">
            <div className="company-header">
              <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
              <h2>{company.name}</h2>
            </div>
            <div className="company-details">
              <p><strong>Location:</strong> {company.location}</p>
              <div className="roles">
                <strong>Available Roles:</strong>
                <ul>
                  {company.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
              <div className="skills">
                <strong>Required Skills:</strong>
                <div className="skills-tags">
                  {company.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <p className="package"><strong>Package:</strong> {company.package}</p>
              <button className="apply-button" onClick={() => handleApply(company)}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>

      {showApplicationForm && selectedCompany && (
        <div className="application-modal">
          <div className="modal-content">
            <h3>Apply to {selectedCompany.name}</h3>
            <form onSubmit={handleApplicationSubmit}>
              <select value={applicationData.role} onChange={(e) => setApplicationData({ ...applicationData, role: e.target.value })} required>
                <option value="">Select Role</option>
                {selectedCompany.roles.map((role, index) => (
                  <option key={index} value={role}>{role}</option>
                ))}
              </select>

              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setApplicationData({ ...applicationData, resume: e.target.files[0] })} required />

              <div className="modal-buttons">
                <button type="submit">Submit Application</button>
                <button type="button" onClick={() => setShowApplicationForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Opportunities;
