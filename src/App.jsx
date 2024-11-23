import React, { useState } from 'react';
import PrincipalInvestigator from './components/PrincipalInvestigator';
import ProjectInformation from './components/ProjectInformation';
import ResearchQuestions from './components/ResearchQuestions';
import SignaturePage from './components/SignaturePage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = () => {
    switch(currentPage) {
      case 1:
        return <PrincipalInvestigator />;
      case 2:
        return <ProjectInformation />;
      case 3:
        return <ResearchQuestions />;
      case 4:
        return <SignaturePage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <div className="navigation">
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        )}
        {currentPage < 4 && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App; 