import React from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = ({ currentStep }) => {
  const totalSteps = 11;
  const percentage = Math.round((currentStep / (totalSteps - 1)) * 100);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
        <div className="progress-percentage">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
