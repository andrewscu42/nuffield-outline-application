import { useState } from 'react';
import ProgressIndicator from './components/ProgressIndicator';
import PrincipalInvestigator from './components/PrincipalInvestigator';
import ProjectInformation from './components/ProjectInformation';
import ResearchQuestions from './components/ResearchQuestions';
import SignaturePage from './components/SignaturePage';
import NavigationButtons from './components/NavigationButtons';

export default function OutlineApplication() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, 4));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

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
    <div className="container mx-auto px-4 py-8">
      <ProgressIndicator currentPage={currentPage} />
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        {renderPage()}
        
        <NavigationButtons 
          currentPage={currentPage}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
        />
      </div>
    </div>
  );
}