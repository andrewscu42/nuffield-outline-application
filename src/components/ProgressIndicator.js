import React from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = ({ currentStep }) => {
  const steps = [
    'Principal Investigator',
    'Project Information'
    'Research Questions',
    'Signature'
  ];

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`step ${index <= currentStep ? 'active' : ''} ${index === currentStep ? 'current' : ''}`}
          >
            <div className="step-marker"></div>
            <div className="step-label">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
