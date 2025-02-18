import './index.css';

export default function NavigationButtons({ currentPage, onNext, onPrevious }) {
  return (
    <div className="navigation-container">
      <div className="navigation-buttons">
        {currentPage > 1 && (
          <button
            onClick={onPrevious}
            className="navigation-btn prev-btn"
          >
            Previous Page
          </button>
        )}
        {currentPage < 4 ? (
          <button
            onClick={onNext}
            className="navigation-btn next-btn"
          >
            Next Page
          </button>
        ) : currentPage === 4 ? (
          <button
            type="submit"
            className="navigation-btn submit-btn"
          >
            Submit Application
          </button>
        ) : null}
      </div>
    </div>
  );
}
