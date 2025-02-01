import '../index.css';

export default function NavigationButtons({ currentPage, onNext, onPrevious }) {
  return (
    <div className="navigation-container">
      <div className="navigation-buttons">
        {currentPage > 1 && (
          <div className="nav-btn-wrapper">
            <button
              onClick={onPrevious}
              className="navigation-btn"
            >
              Previous Page
            </button>
          </div>
        )}
        {currentPage < 4 ? (
          <div className="nav-btn-wrapper">
            <button
              onClick={onNext}
              className="navigation-btn"
            >
              Next Page
            </button>
          </div>
        ) : (
          <div className="nav-btn-wrapper">
            <button
              type="submit"
              className="navigation-btn"
            >
              Submit Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
