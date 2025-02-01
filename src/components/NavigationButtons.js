import '../index.css';
export default function NavigationButtons({ currentPage, onNext, onPrevious }) {
  return (
    <div className="mt-8 flex justify-between px-[15%]">
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
          className="navigation-btn ml-auto"
        >
          Next Page
        </button>
      ) : (
        <button
          type="submit"
          className="navigation-btn ml-auto"
        >
          Submit Application
        </button>
      )}
    </div>
  );
}
