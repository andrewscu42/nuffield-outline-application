import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import PrincipalInvestigator from './components/PrincipalInvestigator';
import ProjectInformation from './components/ProjectInformation';
import ResearchQuestions from './components/ResearchQuestions';
import SignaturePage from './components/SignaturePage';
import NavigationButtons from './components/NavigationButtons';

// Import any new components needed for routing
import HomePage from './components/HomePage';
import SuccessPage from './components/SuccessPage';
import NotFoundPage from './components/NotFoundPage';

// Main application form component that preserves your existing navigation
function ApplicationForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const navigate = useNavigate();

  const updateFormData = (pageData) => {
    setFormData(prevData => ({ ...prevData, ...pageData }));
  };

  const handleNext = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    console.log("Submitting data:", formData);

    try {
      const response = await fetch('http://localhost:5000/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('Submission successful:', result);
        navigate('/success');
      } else {
        console.error('Submission failed:', result.message || 'Unknown error');
        setSubmitError(result.message || 'Failed to submit application. Please check your data and try again.');
      }
    } catch (error) {
      console.error('Network or fetch error:', error);
      setSubmitError('An error occurred while submitting. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 1:
        return <PrincipalInvestigator updateFormData={updateFormData} initialData={formData} />;
      case 2:
        return <ProjectInformation updateFormData={updateFormData} initialData={formData} />;
      case 3:
        return <ResearchQuestions updateFormData={updateFormData} initialData={formData} />;
      case 4:
        return <SignaturePage updateFormData={updateFormData} initialData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      {submitError && <div style={{ color: 'red', marginTop: '10px' }}>Error: {submitError}</div>}
      <NavigationButtons
        currentPage={currentPage}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        {/* Redirect old root to /apply to maintain compatibility */}
        <Route path="/old-root" element={<Navigate to="/apply" />} />
        {/* Catch all other routes */}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
}

export default App; 