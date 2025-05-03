import React from 'react';
import './Outline.css';
import { Link } from 'react-router-dom'; // Import Link

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Nuffield Foundation Research Development and AnalysisApplication</h1>
      <p>Please click the button below to start your application.</p>
      {/* Use Link to navigate to the /apply route */}
      <Link to="/apply">
        <button>Start Application</button>
      </Link>
    </div>
  );
}

export default HomePage; 