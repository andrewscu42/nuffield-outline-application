import '../index.css';

export default function NavigationButtons({ currentPage, onNext, onPrevious }) {
  return (
    <div className="navigation-container">
      <div className="navigation-buttons">
        {currentPage > 1 && (
          <button
            onClick={onPrevious}
            className="navigation-btn"
          >
            Previous Page
          </button>
        )}
        {currentPage < 4 ? (
          <button
            onClick={onNext}
            className="navigation-btn"
          >
            Next Page
          </button>
        ) : (
          <button
            type="submit"
            className="navigation-btn"
          >
            Submit Application
          </button>
        )}
      </div>
    </div>
  );
}
