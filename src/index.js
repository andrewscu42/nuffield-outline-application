import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProgressIndicator from './components/ProgressIndicator';
import PrincipalInvestigator from './components/PrincipalInvestigator';
import ProjectInformation from './components/ProjectInformation';
import ResearchQuestions from './components/ResearchQuestions';
import SignaturePage from './components/SignaturePage';
import NavigationButtons from './components/NavigationButtons';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(prev => prev - 1);
  };

  const renderCurrentPage = () => {
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
        return <PrincipalInvestigator />;
    }
  };

  return (
    <div>
      {renderCurrentPage()}
      <NavigationButtons 
        currentPage={currentPage}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 