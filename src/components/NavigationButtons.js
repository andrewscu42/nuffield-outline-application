import './NavigationButtons.css';
export default function NavigationButtons({ currentPage, onNext, onPrevious }) {
  return (
    <div className="mt-8 flex justify-between">
      {currentPage > 1 && (
        <button
          onClick={onPrevious}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Previous
        </button>
      )}
      {currentPage < 4 ? (
        <button
          onClick={onNext}
          className="ml-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="ml-auto bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Submit Application
        </button>
      )}
    </div>
  );
}
